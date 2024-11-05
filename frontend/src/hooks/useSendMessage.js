import { useState } from "react";
import useConversation from "../zustand/useConversation";

const useSendMessage = () => {
  const { addMessage, selectedConversation } = useConversation();
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (message) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://chat-web-app-z4fr.onrender.com/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }), // Wrap message in an object if needed by the backend
          credentials: "include", // Ensures cookies are sent
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not send message.");
      }

      addMessage(data);
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessage, isLoading };
};

export default useSendMessage;
