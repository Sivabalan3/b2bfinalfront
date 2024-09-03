// Chat.js
import { useState } from 'react';
import { useParams ,Link } from 'react-router-dom';
import { FaSmile, FaPaperPlane } from 'react-icons/fa';
import users from '../components/data/UsersLists';
import NavBar from '../components/Navbar';

const Chat = () => {
  const { userId } = useParams();
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'them' },
    { text: 'I am interested in your product.', sender: 'me' },
    { text: 'Sure, let me provide you with more details.', sender: 'them' },
    { text: 'Here is your payment link: https://home/payment', sender: 'them' }
  ]);
  const user = users.find(user => user.id === parseInt(userId));

  const handleSend = () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, { text: message, sender: 'me' }]);
      setMessage('');
    }
  };

  const renderMessageText = (text) => {
    const words = text.split(' ');
    return words.map((word, index) => {
      if (word.startsWith('http')) {
        return (
          <Link
            key={index}
            to={"/payments"}
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {word}
          </Link>
        );
      }
      return <span key={index}>{word} </span>;
    });
  };

  return (
    <>
      <NavBar name={"Chats"} back={"messages"} />
      <div className="flex flex-col h-screen">
        <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
          <h1 className="text-2xl font-bold mb-4 mt-16">Chat with {user.name}</h1>
          <div className="space-y-4">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    msg.sender === 'me' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'
                  }`}
                >
                  {renderMessageText(msg.text)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 border-t border-gray-200 bg-white flex items-center">
          <button className="text-xl mr-2">
            <FaSmile />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-lg"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSend}
            className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;
