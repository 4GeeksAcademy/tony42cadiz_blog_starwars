import React, { useState, useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext.js"
import { Link } from "react-router-dom";

const VehiclesCards = () => {
	const [aux, setaux] = useState("")
	const { store, actions } = useContext(Context)
			
	//Comprobar localStorage
	const Checker = () => {
		if  (!localStorage.getItem("vehicles")) {
				setTimeout(function(){Checker()}, 100)
		}
		else {
			setaux(JSON.parse(localStorage.getItem("vehicles")))
		}
	}

	//Cargar localStorage
	if (aux == "") {
		Checker()
	}
	
	//Cargar el Store para hacer funcionar los favoritos
	let prev = store.Favorites

	//Inclusión de las tarjetas.
	let inside = ""
	if (Array.isArray(aux)) {
		 inside = aux.map((e, i) => <div className="card m-1 bg-black" key={"V"+i}>
		<img src={"https://starwars-visualguide.com/assets/img/vehicles/"+actions.getUID(e, "vehicles")+".jpg"} onError={actions.getLoad} className="card-img-top" alt="..."/>
		<div className="card-body  d-flex flex-column">
	  	<h5 className="card-title">{e.name}</h5>
	  	<div className="mt-auto d-inline-flex justify-content-between">
			<Link to={"/vehicles/"+i} className="btn btn-primary">Details</Link>
			<button className={"btn btn-outline-warning shadow-none" + (actions.checkFav("V"+i, prev) ? " active" : "")} data-bs-toggle="button" aria-pressed={actions.checkFav("V"+i, prev) ? "True" : "False"} onClick={() => {actions.setFav("V"+i, prev, e.name, "vehicles", i)}}><i className="far fa-heart fa-lg"></i></button>
			</div>
		</div>
  	</div>)}


return (
	<div className="bod overflow-x-scroll">
		<div className="overflow-x-scroll d-inline-flex">
		{aux == "" ? store.Loader : inside}
		</div>
	</div>
)}

export { VehiclesCards }

