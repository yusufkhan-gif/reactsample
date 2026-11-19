import { products } from "../utils/constant";
import Product from "./Product";

const ProductCard = () => {
     console.log("PRODUCTS:", products);
    return (
        
        <div className="Productcard">
            {
                products.map((item) => (
                    <Product
                        key={item.id}
                        product={item}
                    />
                ))}


        </div>
    );
};
export default ProductCard;