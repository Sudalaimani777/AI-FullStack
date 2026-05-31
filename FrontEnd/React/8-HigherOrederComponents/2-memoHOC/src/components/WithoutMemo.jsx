import { useState } from "react";


const Greet = ({ user }) => {
    console.log("Component re-rendered");
    return (
        <>
            <h3>Welcome {user}</h3>
        </>
    )
}



const WithoutMemo = () => {

    const [user, setUser] = useState("");
    const [city, setCity] = useState("");

    return (
        <>

            <section>
                <h1>Basically when the parent component re-renders, all its child components also re-render. But when there is no props that is passed to the child component, but the parent component has state that changes, the child component will also re-render. To solve this issue, we can use the memo() higher-order component. The memo is the built-in react HOC function</h1>
                {/* Input For User Name */}
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                {/* Input For User City */}
                <input
                    type="text"
                    placeholder="Enter your city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </section>
            <Greet user={user} />
        </>
    )
}

export default WithoutMemo