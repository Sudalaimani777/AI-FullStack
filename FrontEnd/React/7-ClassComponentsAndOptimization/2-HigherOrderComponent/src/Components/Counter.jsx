import { Component } from "react";

export class Counter extends Component {

    state = {
        count: 0
    }

    handleInc = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDec = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {

        const { count } = this.state;

        return (
            <>
                <section>
                    <h3>Counter</h3>
                    <p>{count}</p>
                    <button onClick={this.handleInc}>+</button>
                    <button onClick={this.handleDec}>-</button>
                </section>
            </>
        )
    }
}