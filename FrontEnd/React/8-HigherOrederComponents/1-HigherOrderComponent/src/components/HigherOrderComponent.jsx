import { useState } from "react";

export const HigherOrderComponent = (WrappedComponent) => {
    function UpdatedProps(props) {
        const [count, setCount] = useState(0);
        const handleClick = () => setCount((prevCount) => prevCount + 1);
        
        return (
            <WrappedComponent
                {...props}
                count={count}
                handleClick={handleClick}
            />
        );
    }

    UpdatedProps.displayName = `WithCounter(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
    return UpdatedProps;
};
