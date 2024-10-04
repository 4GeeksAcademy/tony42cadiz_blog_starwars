import React, { useState, useContext, useEffect } from "react";
import "../../styles/index.css";
import { useLocation } from "react-router-dom";
import { Context } from "../store/appContext.js"
import "../../styles/index.css";


function VehiclesDetails() {
  let [aux, setaux] = useState("")	
	const { store, actions } = useContext(Context)

    // Localizamos la ruta abierta por el usuario para ajustar el ID en el JSON
    let location = useLocation();
      location = location.pathname.split('/vehicles/')
      location = parseInt(location[1])

    //Comprobar localStorage
    const Checker = () => {
      if  (!localStorage.getItem("vehicles")) {
          setTimeout(function(){Checker()}, 100)
      }
      else {
        setaux(JSON.parse(localStorage.getItem("vehicles"))[location])
      }
    }

    //Cargar localStorage
    let imgUID = ""
    if (aux == "") {
      Checker()
    }
    else {
      imgUID = actions.getUID(aux, "vehicles")
    }

    //Recarga en caso de cambiar el favorito
    useEffect(()=>{
      setaux(JSON.parse(localStorage.getItem("vehicles"))[location])
    }, [location])

  return (
    <div className="container-fluid bod d-inline-flex justify-content-center">
      <div className="card mcard bg-dark mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+imgUID+".jpg"} onError={actions.getLoad} className="img-fluid rounded-start" alt="..." />
          </div>
            <div className="card-body col-md-8 d-flex flex-column">
                <h5 className="card-title">{aux.name}</h5>
                <p className="card-text">
               Unfortunately the information you were looking for was eaten by an Ewok, our professional team of droids is working on it.
              </p>
                 <ul className="list-group list-group-flush">
                  <li className="lis">Model: {aux.model}</li>
                  <li className="lis">Manufacturer: {aux.manufacturer}</li>
                  <li className="lis">Passengers: {aux.passengers}</li>
                  <li className="lis">Cost: {aux.cost}</li>
                  <li className="lis">Length: {aux.length}</li>
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

export { VehiclesDetails };

