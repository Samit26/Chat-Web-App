// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState(null);
  const { sendMessage } = useSendMessage();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) return;
    sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg h-9 block w-full p-2,5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message || ""}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
