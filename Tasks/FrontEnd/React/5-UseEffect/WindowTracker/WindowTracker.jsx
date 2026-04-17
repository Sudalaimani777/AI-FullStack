import React from "react"

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    //Here we are adding an event listener to the window object that listens for the "resize" event. Whenever the window is resized, the handleWindowWidth function is called, which updates the windowWidth state with the new width of the window. The useEffect hook also returns a cleanup function that removes the event listener when the component is unmounted, preventing memory leaks and ensuring that the event listener does not continue to run after the component is no longer in use.
    React.useEffect(() => {
        window.addEventListener("resize", handleWindowWidth)
        function handleWindowWidth() {
            console.log("Running")
            setWindowWidth(window.innerWidth)
        }
        return () => {
            console.log("Cleaning up...")
            window.removeEventListener('resize', handleWindowWidth)
        }
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
