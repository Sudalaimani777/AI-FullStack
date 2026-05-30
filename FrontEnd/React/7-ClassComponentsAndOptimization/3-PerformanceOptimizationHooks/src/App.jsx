import { Component } from "react";


class App extends Component {

// The componentDidMount() method is called after the component is rendered for the first time. It is commonly used for making API calls, setting up subscriptions, or initializing any data that the component needs.
componentDidMount(){} 

// The componentDidUpdate() method is used to update the state. Basically it compares the previous state and the next state and if there is a change in the state then it will update the component.This will call the componentDidUpdate() method to update the component. 
shouldComponentUpdate(nextProp, currState){}

// The componentDidUpdate() method is used to update the state when the component is rerendered.
componentDidUpdate(){}

// The componentWillUnmount() method is called before the component is removed from the DOM. It is commonly used for cleaning up any resources that were allocated during the component's lifecycle.
componentWillUnmount(){}

// componentDidCatch() method is used to catch errors in the component tree and log them or display a fallback UI. It is commonly used for error handling in React applications.
componentDidCatch(error, info){}

  render() {
    return (
      <>
        <h1>Performance Optimization Hooks</h1>
      </>
    )
  }
}
export default App;

// Lifecycle Methods

// Mount --> Update --> Unmount

// Mounting --> constructor() --> render() --> componentDidMount()
// Updating --> render() --> componentDidUpdate()
// Unmounting --> componentWillUnmount()
