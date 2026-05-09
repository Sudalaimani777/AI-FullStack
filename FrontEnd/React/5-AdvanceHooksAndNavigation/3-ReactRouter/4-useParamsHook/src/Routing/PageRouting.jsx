import { Routes, Route } from "react-router-dom"
import Product from "../Pages/Product"
import ProductDetails from "../Pages/ProductDetails"


const PageRouting = () => {

    // The : in the path indicates that id is a route parameter, which can be accessed in the ProductDetails component using the useParams hook from react-router-dom. This allows us to dynamically render product details based on the id provided in the URL.

    return (
        <>
            <Routes>
                <Route path="/" element={<Product />} />
                <Route path="/productDetails/:id" element={<ProductDetails />} />
            </Routes>
        </>
    )
}

export default PageRouting