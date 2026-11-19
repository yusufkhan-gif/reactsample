
const Product = ({ product }) => {


    if (!Product) {
        return <p>Product not found!</p>;
    }

    const {
        title,
        description,
        category,
        price,
        imageurl,
        rating
    } = product;

    return (
        <div
            className="Product"
            style={{
                width: "250px",
                padding: "20px",
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
        >
            <img
                src={imageurl}
                alt={title}
                style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "contain"
                }}
            />

            <h2>{title}</h2>
            <p>{description}</p>
            <p>{category}</p>
            <h3>₹{price}</h3>

            <p>
                ⭐ {rating.rate} ({rating.count} reviews)
            </p>
        </div>
    );
};

export default Product;