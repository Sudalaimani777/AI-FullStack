import { Component } from "react";
import { CounterInClassComp } from "./CounterInClassComp";

export class IndexForClassComp extends Component {

    //Defining the State :-
    state = {
        count: 0
    }

    handelInc = () => {
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
        console.log(this);
        const { handelInc, handleDec } = this;
        const { count } = this.state;
        console.log(count);
        return (
            <>
                <CounterInClassComp count={count} handelInc={handelInc} handleDec={handleDec} />
            </>
        )
    }

}