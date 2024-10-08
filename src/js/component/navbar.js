import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"

export const Navbar = () => {
  const { store, actions } = useContext(Context)

  let lista = store.Favorites
  let inside = lista.map((e, i) => 
    <li key={i}><Link to={e.Type+"/"+e.To} className="dropdown-item" href="#">
      {e.Name}
    </Link></li>
  )

  return (
    <nav className="navbar navbar-expand-lg bg-black fixed-top">
      <div className="container-fluid row justify-content-between p-0 ps-2">
        {/* Logo de Star Wars */}
		<Link id="banner" to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
              width="auto"
              height="80"
            />
          </span>
        </Link>
		{/* Navbar */}
        <div className="collapse navbar-collapse col-4 justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/characters">
              <p style={{color: "grey"}}>
                Characters
                </p>
			  </Link>
            </li>
            <li className="nav-item">
			<Link className="nav-link" to="/planets">
      <p style={{color: "grey"}}>
                Planets
                </p>
			  </Link>
            </li>
			<li className="nav-item">
			<Link className="nav-link" to="/ships">
      <p style={{color: "grey"}}>
                Ships
                </p>
			  </Link>
            </li>
            <li className="nav-item">
			<Link className="nav-link" to="/species">
      <p style={{color: "grey"}}>
                Species
                </p>
			  </Link>
            </li>
            <li className="nav-item">
			<Link className="nav-link" to="/vehicles">
      <p style={{color: "grey"}}>
                Vehicles
                </p>
			  </Link>
            </li>
            <li className="nav-item">
			<Link className="nav-link" to="/contacts">
      <p style={{color: "grey"}}>
                Contacts
                </p>
			  </Link>
            </li>    
            <li className="nav-item dropdown dropstart">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites
              </a>
              <ul className="dropdown-menu">
                {inside}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
