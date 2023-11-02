import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "10px 20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "whitesmoke",
        color: "black",
      }}
    >
      <h3 id="logo">Tea & Coffee</h3>
      <div id="nav" className="flex flex-row gap-3 mx-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
      </div>
    </nav>
  );
}
