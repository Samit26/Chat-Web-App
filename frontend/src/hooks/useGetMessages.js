import { useEffect } from "react";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
  const { selectedConversation, setMessages } = useConversation();

  useEffect(() => {
    // Ensure there's a valid selected conversation ID before fetching messages
    if (!selectedConversation?._id) return;

    const getMessages = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/messages/${selectedConversation._id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Could not get messages.");
        }

        console.log("Fetched messages:", data);

        // Store messages in Zustand state
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    getMessages();
  }, [selectedConversation?._id, setMessages]);

  return null; // Hook doesn't return anything
};

export default useGetMessages;
