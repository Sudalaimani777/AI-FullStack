import { useState } from "react"
import CustomerView from "./CustomerView";
import { v4 as uuidv4 } from 'uuid';

const CustomerAdd = () => {

    const [customer, setCustomer] = useState("");
    const [allCustomers, setAllCustomer] = useState([]);

    const handleCustomerChange = (e) => {
        let text = e.target.value.trimStart();
        setCustomer(text);
    }


    const handleAddCustomer = () => {
        const customerData = {
            customerID : uuidv4(),
            customerName: customer
        }
        setAllCustomer(prevCustomer => [...prevCustomer, customerData]);
        setCustomer("");
        // console.log(allCustomers);
    }

    const handleRemoveCustomer = (id) =>{
        const remainingCustomers = allCustomers.filter(({customerID}) => customerID !== id);
        setAllCustomer(remainingCustomers);
    }

  return(
    <>
        <section>
            <h3>Customer Add Fomr</h3>
            <input type="text" placeholder="Add Customer" value={customer} onChange={handleCustomerChange}/>
            <button onClick={handleAddCustomer}>Add</button>
        </section>
        <CustomerView allCustomers={allCustomers} handleRemoveCustomer={handleRemoveCustomer}/>
    </>
  )
}

export default CustomerAdd