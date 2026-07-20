import { ChatHeader, ChatInput, ChatMessage } from "./components/index"


const App = () => {
  return (
    <>
      <section className="min-h-screen bg-zinc-950 text-white">
        <ChatHeader />
        <ChatMessage />
        <ChatInput />
      </section>
    </>
  )
}

export default App