
const Navbar = (props) => {
    return (
        <div className="Navbar">
            <h1 className="Logo">Logo</h1>

            <ul className="Menu-Items">
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>

            <div className="Cart">
                Cart
            </div>
        </div>
    );
};

export default Navbar;
