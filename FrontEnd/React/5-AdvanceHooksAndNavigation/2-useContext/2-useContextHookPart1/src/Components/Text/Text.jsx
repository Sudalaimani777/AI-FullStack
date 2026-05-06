import IncButton from "../Buttons/IncButton";
import DecButton from "../Buttons/DecButton";
import ResetButton from "../Buttons/ResetButton";


const Text = () => {
    return (
        <>
            <section>
                <h2>The Count is </h2>
                <IncButton />
                <DecButton />
                <ResetButton />
            </section>
        </>
    )
}

export default Text