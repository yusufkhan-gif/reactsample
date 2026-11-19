
import ReactDOM from "react-dom/client";
import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";



// App Component
const App = () => {
    return (
        <div>
            <Navbar />
            <ProductCard />
        </div>
    );
};

// React Root
const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<App />);
