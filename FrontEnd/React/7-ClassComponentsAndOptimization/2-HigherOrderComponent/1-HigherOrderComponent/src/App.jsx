import './App.css'
import { HocCounter1 } from './components/HocCounter1Base'
import { HocCounter2 } from './components/HocCounter2Base'
import { NormalCounter1, NormalCounter2 } from './components/NormalCounters'

function App() {
  return (
    <>
      <h1>Higher Order Component</h1>
      <p>Higher Order Component is a function that takes a component and returns a new component.</p>
      <NormalCounter1 />
      <NormalCounter2 />

      <HocCounter1 />
      {/* <HocCounter2/> */}
      <HocCounter2 />
    </>
  )
}

export default App
