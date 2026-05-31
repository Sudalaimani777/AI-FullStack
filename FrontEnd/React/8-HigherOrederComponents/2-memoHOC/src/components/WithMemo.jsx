import { useState, memo } from 'react';


const Greet = memo(({ user }) => {
    console.log("Component re-rendered");
    return (
        <>
            <h3>Welcome {user}</h3>
        </>
    )
})

const WithMemo = () => {

    const [user, setUser] = useState("");
    const [city, setCity] = useState("");
    return (
        <>
            <section>
                <h1>Memo is basically a HOC, which means it takes the component as a argument and return a new component</h1>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
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

export default WithMemo