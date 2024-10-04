import React, { useState, useContext, useEffect } from "react";
import "../../styles/index.css";
import { useLocation } from "react-router-dom";
import { Context } from "../store/appContext.js"
import "../../styles/index.css";

function PlanDetails() {
  //Fetch info
  let [aux, setaux] = useState("")	
	const { store, actions } = useContext(Context)

    // Localizamos la ruta abierta por el usuario para ajustar el ID en el JSON
    let location = useLocation();
      location = location.pathname.split('/planets/')
      location = parseInt(location[1])

    //Comprobar localStorage
    const Checker = () => {
      if  (!localStorage.getItem("planets")) {
          setTimeout(function(){Checker()}, 100)
      }
      else {
        setaux(JSON.parse(localStorage.getItem("planets"))[location])
      }
    }

    //Cargar localStorage
    let imgUID = ""
    if (aux == "") {
      Checker()
    }
    else {
      imgUID = actions.getUID(aux, "planets")
    }

    //Recarga en caso de cambiar el favorito
    useEffect(()=>{
      setaux(JSON.parse(localStorage.getItem("planets"))[location])
    }, [location])

  return (
    <div className="container-fluid bod d-inline-flex justify-content-center">
      <div className="card mcard bg-dark mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={"https://starwars-visualguide.com/assets/img/planets/"+imgUID+".jpg"} onError={actions.getLoad} className="img-fluid rounded-start" alt="..." />
          </div>
            <div className="card-body col-md-8 d-flex flex-column">
                <h5 className="card-title">{aux.name}</h5>
                <p className="card-text">
               Unfortunately the information you were looking for was eaten by an Ewok, our professional team of droids is working on it.
              </p>
                 <ul className="list-group list-group-flush">
                  <li className="lis">Diameter: {aux.diameter}</li>
                  <li className="lis">Climate: {aux.climate}</li>
                  <li className="lis">Terrain: {aux.terrain}</li>
                  <li className="lis">Population: {aux.population}</li>
                  <li className="lis">Orbital period: {aux.orbital_period}</li>
                </ul>
              <p className="card-footer text-end mt-auto">
                <small className="text-muted">May the Force be with you</small>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PlanDetails };
