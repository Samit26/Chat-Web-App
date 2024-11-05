// eslint-disable-next-line no-unused-vars
import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../../zustand/useConversation";

const MessageContainer = () => {
  const { selectedConversation } = useConversation();
  const chatSelected = selectedConversation;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {chatSelected ? (
        <>
          <div className="bg-slate-500a px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-100 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-x1 text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Samit Khedekar 🍀</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3x1 md:text6x1 text-center" />
      </div>
    </div>
  );
};
