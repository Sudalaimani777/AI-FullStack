import { Component } from "react";


export class CounterInClassComp extends Component{
    render(){

        console.log(this);
        const {count, handelInc, handleDec} = this.props
       
        return(
            <>
                <section>
                    <h2>{count}</h2>
                    <button onClick={handelInc}>+</button>
                    <button onClick={handleDec}>-</button>
                </section>
            </>
        )
    }
}