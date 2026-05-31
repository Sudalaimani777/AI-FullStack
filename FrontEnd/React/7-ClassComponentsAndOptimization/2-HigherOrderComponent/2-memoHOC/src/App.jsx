import WithMemo from "./components/WithMemo"
import WithoutMemo from "./components/WithoutMemo"

const App = () => {
  return (
    <>
      <main>
        <h2>Memo HOC</h2>
        <WithoutMemo />
        {/* With Memo HOC */}
        <h2>With Memo HOC</h2>
        <WithMemo />
      </main>
    </>
  )
}

export default App