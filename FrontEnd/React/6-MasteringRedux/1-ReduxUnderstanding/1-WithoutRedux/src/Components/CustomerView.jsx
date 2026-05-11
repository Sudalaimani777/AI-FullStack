

const CustomerView = ({ allCustomers, handleRemoveCustomer }) => {
    console.log(allCustomers)
    return (
        <>
            <section>
                <h4>Customers List</h4>
                {
                    allCustomers?.map(customer => (
                        <p key={customer.customerID}>{customer.customerName} <span><button onClick={() => handleRemoveCustomer(customer.customerID)}>Remove</button></span></p>
                    ))
                }
            </section>
        </>
    )
}

export default CustomerView