import { useState } from "react"
import chatDataStore from "../store/chatDataStore";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const { addChatMessage } = chatDataStore();

  const handleChangeChatText = (e) => {
    setMessage(e.target.value)
  }

  const handleTextSent = (e) => {
    e.preventDefault(); // This now properly prevents page reload on form submit
    if (!message.trim()) {
      alert("Please enter text to chat");
      return;
    } else {
      addChatMessage(message);
      setMessage("");
    }
  }

  return (
    <div className="border-t border-zinc-800 p-4">
      {/* Wrap the elements in a form and attach onSubmit here */}
      <form onSubmit={handleTextSent} className="max-w-3xl mx-auto flex gap-3">
        <input
          value={message}
          onChange={handleChangeChatText}
          placeholder="Type your message..."
          className="flex-1 rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-medium"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default ChatInput