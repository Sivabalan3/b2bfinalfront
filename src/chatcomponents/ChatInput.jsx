import { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";
import { Backend_url } from "../constant";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [isFile, setIsFile] = useState(false);
  const [fileState, setFileState] = useState("");

  // Function to extract numeric values from a string
  const extractNumbers = (text) => {
    return text.match(/\d+/g)?.map(Number); // Convert numeric strings to numbers
  };

  const calculateDiscount = (totalAmount, discountPercentage) => {
    const discount = (totalAmount * discountPercentage) / 100;
    return totalAmount - discount;
  };

  const updateProductPriceInDB = async (productId, newPrice) => {
    try {
      const response = await axios.put(`${Backend_url}/api/products/update-price/${productId}`, { newPrice });
      if (response.status === 200) {
        console.log(`Product ${productId} price updated successfully`);
      }
    } catch (error) {
      console.error("Error updating product price:", error);
    }
  };

  const sendChat = (event) => {
    event.preventDefault();

    if (isFile) {
      handleSendMsg(fileState, true);
    } else if (msg.length > 0) {
      const numbers = extractNumbers(msg);
      console.log("Extracted numbers:", numbers);

      if (numbers && numbers.length >= 3) {
        const productId = numbers[0];         // First number is product ID
        const originalPrice = numbers[1];     // Second number is the original price
        const discountPercentage = numbers[2];// Third number is discount percentage

        // Calculate the new discounted price
        const discountedPrice = calculateDiscount(originalPrice, discountPercentage);
        console.log(`Discounted price for product ${productId}:`, discountedPrice);

        // Update the product's price in the database
        updateProductPriceInDB(productId, discountedPrice);

        localStorage.setItem(`discountedPrice_${productId}`, discountedPrice);
        console.log("Stored discounted price in localStorage:", discountedPrice);
      }

      handleSendMsg(msg, false);
      setMsg("");
    }
  };

  useEffect(() => {
    if (fileState) {
      setMsg(fileState.name);
      setIsFile(true);
    }
  }, [fileState]);

  return (
    <div className="flex w-full items-center sm:px-6 md:px-8 lg:px-12 gap-1 sm:gap-2 md:gap-2 absolute bottom-0 left-0 mb-2 resize-none bg-white">
      <label htmlFor="input-file" className="text-black cursor-pointer">
        <input
          id="input-file"
          type="file"
          hidden
          accept="*"
          onChange={(e) => setFileState(e.target.files[0])}
        />
      </label>
      <form
        className="flex items-center gap-4 sm:gap-6 md:gap-8 w-full bg-[#ffffff34] rounded-2xl"
        onSubmit={(e) => sendChat(e)}
      >
        <input
          type="text"
          placeholder="Enter Text Here"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          disabled={isFile}
          className="flex-1 w-full h-10 sm:h-12 text-white border-none pl-3 sm:pl-4 text-base sm:text-lg focus:outline-none rounded-lg placeholder-white bg-[#1D4ED8] px-12"
        />
        <ClearIcon
          sx={{
            display: isFile ? "" : "none",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => {
            setIsFile(false);
            setMsg("");
          }}
          className="text-base sm:text-lg"
        />
        <button
          type="submit"
          className="cursor-pointer py-3 px-4 sm:px-6 md:px-8  sm:py-2 rounded-2xl bg-[#1D4ED8] flex justify-center items-center border-none"
        >
          <IoMdSend className="text-white text-lg sm:text-2xl" />
        </button>
      </form>
    </div>
  );
}
