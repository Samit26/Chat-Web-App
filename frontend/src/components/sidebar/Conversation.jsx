// import useGetMessages from "../../hooks/useGetMessages.js";
import useGetMessages from "../../hooks/useGetMessages.js";
import useConversation from "../../zustand/useConversation.js";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  useGetMessages();

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-green-300 text-gray-200 hover:text-black rounded p-2 py-1 cursor-pointer
          ${isSelected ? "bg-green-500" : ""}`}
        onClick={() => {
          setSelectedConversation(conversation);

          console.log("Selected conversation:", conversation);
        }}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div
          className="flex flex-col flex-1"
          onClick={() => console.log("Inner div clicked")}
        >
          <div className="flex gap-3 justify-between">
            <p className="font-bold">{conversation.fullName}</p>
            {/* <span className='text-x1'>😒</span> */}
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
