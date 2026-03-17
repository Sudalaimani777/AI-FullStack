import "./product.css";

const ProductList = ({ productList = [] }) => {
    if (!productList.length) {
        return (
            <section className="product-list product-list--empty">
                <p className="product-list__empty-text">
                    No products available at the moment.
                </p>
            </section>
        );
    }

    return (
        <section className="product-list">
            {productList.map((val, index) => (
                <article className="product-card" key={val.id ?? index}>
                    <h3 className="product-card__name">{val.productName}</h3>
                    <p className="product-card__price">Rs. {val.price}</p>
                    <p className="product-card__description">{val.description}</p>
                    <p
                        className={`product-card__stock ${val.instock ? "is-in" : "is-out"}`}
                    >
                        {val.instock ? "In Stock" : "Out of Stock"}
                    </p>
                </article>
            ))}
        </section>
        
    );
};

export default ProductList;