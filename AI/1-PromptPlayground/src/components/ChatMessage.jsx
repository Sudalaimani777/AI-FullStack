import chatDataStore from "../store/chatDataStore"

const ChatMessages = () => {

  const { allChatMessages } = chatDataStore();
  console.log(allChatMessages);

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="max-w-3xl mx-auto space-y-4">
        {
          allChatMessages?.map((message, index) => (
            <div
              key={index + 1}
              className={`flex ${message?.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-md rounded-xl px-4 py-3 ${message?.role === "user" ? "bg-blue-600" : "bg-zinc-800"}`}
              >
                {message?.content}
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default ChatMessages