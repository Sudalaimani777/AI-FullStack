import { Component } from "react";


export class Greet extends Component {

    render() {
        console.log(this); // this will give us the access to the props and state of the component
        const { userName } = this.props;
        console.log(userName);
        return (
            <>
                <h1>Welcome {userName}</h1>
            </>
        )
    }
}