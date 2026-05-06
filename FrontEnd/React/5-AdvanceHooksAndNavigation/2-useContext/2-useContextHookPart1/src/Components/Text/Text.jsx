import IncButton from "../Buttons/IncButton";
import DecButton from "../Buttons/DecButton";
import ResetButton from "../Buttons/ResetButton";
import CounterContext from "../../Context/CounterContext";
import { useContext } from "react";




const Text = () => {

    console.log(useContext(CounterContext))
 
    const {count} = useContext(CounterContext)

    return (
        <>
            <section>
                <h2>The Count is {count}</h2>
                <IncButton />
                <DecButton />
                <ResetButton />
            </section>
        </>
    )
}

export default Text