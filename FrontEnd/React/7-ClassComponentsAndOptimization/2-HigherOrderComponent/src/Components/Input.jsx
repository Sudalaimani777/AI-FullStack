import { Component } from "react";

export class Input extends Component {
    // state is an object that holds the data of the component
    state = {
        inputValue: ""
    }

    // handleChange is a method that updates the state of the component. Why we dont use the const keyword is because we want to use the this keyword to access the state of the component  
    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    render() {

        const { inputValue } = this.state;

        return (
            <>
                <section>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.inputValue}
                        placeholder="Type something..."
                    />

                    <h4>{inputValue}</h4>

                </section>
            </>
        )
    }
}