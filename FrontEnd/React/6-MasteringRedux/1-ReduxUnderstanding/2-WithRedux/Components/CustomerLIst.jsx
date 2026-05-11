import { useDispatch, useSelector } from "react-redux"
import { handleRemoveCustomer as handleRemoveCustomerAction } from "../src/Slice/customerSlice";


const CustomerList = () => {

    const customers = useSelector(state => state.customer);
    console.log(customers);

    const dispatch = useDispatch();

    const handleDeleteCustomer = (id) => {
        dispatch(handleRemoveCustomerAction(id));
    }

    return (
        <>
            <section>
                <h2>Customer List</h2>
                {
                    customers?.map(customer => (
                        <div key={customer.id}>
                            <p>{customer.customerName} <span><button onClick={() => handleDeleteCustomer(customer.id)}>Delete</button></span></p>
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default CustomerList