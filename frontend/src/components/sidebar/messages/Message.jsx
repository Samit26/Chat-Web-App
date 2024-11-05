import { useAuthContext } from "../../../context/AutoContext";
import useConversation from "../../../zustand/useConversation";

const Message = ({ messaged, createdAt, senderId }) => {
  const { selectedConversation } = useConversation();
  const { authUser } = useAuthContext();
  console.log("created", createdAt);
  const dateString = createdAt;
  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const time = `${hours}:${minutes}`;
  console.log(time);
  const isMe = senderId === authUser._id;
  const profilePic = isMe
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const chatClass = isMe ? "chat-end" : "chat-start";
  const chatBubbleClass = isMe ? "bg-green-400" : "bg-gray-200";

  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-black ${chatBubbleClass}`}>
        {messaged}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {time}
      </div>
    </div>
  );
};

export default Message;
