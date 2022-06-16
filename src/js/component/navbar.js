import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/star-wars-icon.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  let list = store.favorites.map((data, i) => (
    <li key={i} style={{display: "flex", justifyContent: "space-between", padding:"0px 10px" }}>
      <Link style={{color:"black"}} to={`/${data.type}/${data.id}`}>{data.name}</Link>
      <div
        className="btnHidden"
        onClick={() => actions.deleteFavoriteByIndex(i)}
      >
        <i className="bi bi-trash3"></i>
      </div>
    </li>
  ));
  if (store.favorites.length === 0) {
    list = (
      <li className="text-center">
        Add a Favorite <i className="bi bi-robot"></i>
      </li>
    );
  }

  return (
    <nav className="navbar navbar-light bg-light mb-3 fixed-top">
      <Link to="/">
        <img src={Logo} style={{ marginLeft: "20px", width: "80px" }}></img>
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-dark dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="true"
            style={{ marginRight: "40px", boxShadow:"none"}}
          >
            Favorites{" "}
            <span className="badge text-bg-secondary">
              {store.favorites.length}
            </span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {list}
          </ul>
        </div>
      </div>
    </nav>
  );
};
