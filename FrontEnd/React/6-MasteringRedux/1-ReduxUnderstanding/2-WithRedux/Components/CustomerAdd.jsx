import { useState } from "react"
import { handleAddCustomer as handleAddCustomerAction } from "../src/Slice/customerSlice"
import { useDispatch } from "react-redux";



const CustomerAdd = () => {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();  //The useDispatch hook is used to get the dispatch function from the Redux store. The dispatch function is used to send actions to the store. When an action is dispatched, the store will call the reducer function with the current state and the action as arguments, and it will update the state accordingly.


    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleAddCustomer = () => {

        const customerData = {
            id: new Date().getTime(),
            customerName:input
        }

        dispatch(handleAddCustomerAction(customerData)); //The dispatch function is used to send an action to the store. The action is an object that describes what happened and how the state should change. The reducer function will receive the action and update the state accordingly.
        setInput("");

    }

  return (
    <>
        <section>
            <h2>Customer Add</h2>
            <input type="text" value={input} placeholder="Enter Customer Name" onChange={handleInputChange}/>
            <button onClick={handleAddCustomer}>Add Customer</button>
        </section>
    </>
  )
}

export default CustomerAdd