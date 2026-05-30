import { Component } from "react";
import { Header } from "./Components/Header";
import { Input } from "./Components/Input";
import { Counter } from "./Components/Counter";


export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Input />
        <Counter />
      </>
    )
  }
}