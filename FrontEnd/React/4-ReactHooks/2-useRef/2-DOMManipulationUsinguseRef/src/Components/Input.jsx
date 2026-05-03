import { forwardRef } from "react"

// We need to use forwardRef to pass the ref to the another component because by default we can't pass the ref to the another component but with the help of forwardRef we can pass the ref to the another component and we can use that ref in that component.

const Input = forwardRef((props, ref) => {
    return (
        <>
            <input type="text" placeholder={props.placeholder} ref={ref} />
        </>
    )
})

export default Input