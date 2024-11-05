import { useEffect, useRef } from "react";
import useConversation from "../../../zustand/useConversation";
import Message from "./Message";

const Messages = () => {
  const { messages } = useConversation();
  const bottomRef = useRef(null);

  // Scroll to the latest message when messages change
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {messages && messages.length > 0 ? (
        messages.map((message) => (
          <Message
            key={message._id}
            messaged={message.message}
            createdAt={message.createdAt}
            senderId={message.senderId}
          />
        ))
      ) : (
        <p>No messages yet</p>
      )}
      <div ref={bottomRef} />
    </div>
  );
};

export default Messages;
