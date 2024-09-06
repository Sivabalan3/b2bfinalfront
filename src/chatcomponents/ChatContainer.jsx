import { useState, useEffect, useRef } from "react";
import ChatInput from "./ChatInput";
import axios from "axios";
import { recieveMessageRoute, sendMessageRoute } from "../chatutils/APIRoutes";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { setUserData } from "../chatredux/actions";
import { NavLink } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
export default function ChatContainer({
  currentChat,
  isLoaded,
  currentUser,
  socket,
}) {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();

  // Handle sending message
  const handleSendMsg = async (msg) => {
    if (!currentUser || !currentChat) {
      console.error("currentUser or currentChat is undefined.");
      return;
    }
  
    let messagePayload = {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
      role: currentUser.role,
    };
  
    // Check if the admin is sending a payment link
    if (currentUser.role === "seller" && msg.startsWith("finalamount")) {
      messagePayload.message = `${msg} - Click to Pay`;
    }
  
    try {
      await axios.post(sendMessageRoute, messagePayload);
      socket.current.emit("send-msg", {
        to: currentChat._id,
        from: currentUser._id,
        message: messagePayload.message,
      });
      setMessages((prev) => [...prev, { fromSelf: true, ...messagePayload }]);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };
  

  // Receive real-time messages
  useEffect(() => {
    if (socket?.current) {
      socket.current.on("msg-recieve", (msg, userData) => {
        console.log("Message received:", msg);
        dispatch(setUserData(userData));
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, [socket, dispatch]);

  // Add arrival message to messages
  useEffect(() => {
    if (arrivalMessage) {
      setMessages((prev) => [...prev, arrivalMessage]);
    }
  }, [arrivalMessage]);

  // Scroll to the latest message
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Fetch all messages when currentChat changes
  useEffect(() => {
    if (currentChat && currentUser) {
      const fetchMessages = async () => {
        try {
          const response = await axios.post(recieveMessageRoute, {
            from: currentUser._id,
            to: currentChat._id,
          });
          setMessages(response.data);
          console.log("Messages fetched:", response.data);
        } catch (error) {
          console.error("Failed to fetch messages:", error);
        }
      };
      fetchMessages();
    }
  }, [currentChat, currentUser]);

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative top-0 z-[-50] border-b border-gray-300 bg-white py-4 px-6 text-center text-sm text-gray-800 shadow-md">
        <h4 className="inline-block py-1 text-left text-lg font-sans font-semibold normal-case">
          {currentChat ? currentChat.username : "User"}
        </h4>
      </div>

      <div className="flex flex-col h-[80vh] bg-white">
        <div className="flex-grow px-4 py-4 sm:px-8 sm:py-8 overflow-y-auto">
        <div className="chat-messages flex flex-col gap-3">
  {messages.map((message) => (
    <div
      ref={scrollRef}
      key={uuidv4()}
      className={`flex ${
        message.fromSelf ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`content max-w-[80%] p-3 text-base rounded-lg overflow-wrap break-words ${
          message.fromSelf
            ? "bg-[#1D4ED8] text-white rounded-[16px] rounded-tr-none"
            : "bg-sky-300 text-gray-800 rounded-[16px] rounded-tl-none"
        }`}
      >
        {/* Conditionally render the payment link only if the message contains "Click to Pay" */}
        {message.message.includes("Click to Pay") ? (
          <>
            <p>{message.message.split(" - ")[0]}</p>
            <NavLink to="/payments" className="text-white underline flex">
              Click to Pay <FaRupeeSign className="w-[25px] h-[25px] mt-2 gap-1 text-amber-500"/>
            </NavLink>
          </>
        ) : (
          <p>{message.message}</p>
        )}
      </div>
    </div>
  ))}
</div>

          <ChatInput handleSendMsg={handleSendMsg} />
        </div>
      </div>
    </div>
  );
}
