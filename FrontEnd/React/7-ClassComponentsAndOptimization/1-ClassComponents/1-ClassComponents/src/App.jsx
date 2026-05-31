import { Component } from "react";
import { Greet } from "./Components/Greet";


export class App extends Component {
  render() {
    return (
      <>
        <section>
          <h1>Class Components</h1>
          <Greet userName="Sudalaimani" />
        </section>
      </>
    )
  }
}