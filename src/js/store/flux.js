import React from "react";
	
const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			Loader: <h3 className="mx-3">Loading...</h3>,
			Favorites: [],
			formulario: [],
		},
	  actions: {
			getFetch: () => {
						
				const requestOptions = {
						method: 'GET',
						redirect: 'follow'
					};
					
					if (!localStorage.characters) {
					fetch("https://swapi.dev/api/people", requestOptions)
						.then(response => response.json())
						.then(result => {
							localStorage.setItem("characters", JSON.stringify(result.results)) })
						.catch(error => console.log('Characters error', error))}
										
					if (!localStorage.planets) { 
					fetch("https://swapi.dev/api/planets", requestOptions)
						.then(response => response.json())
						.then(result => {
							localStorage.setItem("planets", JSON.stringify(result.results))})
						.catch(error => console.log('Planets error', error))}
			
					if (!localStorage.ships) {
					fetch("https://swapi.dev/api/starships", requestOptions)
					.then(response => response.json())
					.then(result => {
							localStorage.setItem("ships", JSON.stringify(result.results))})
					.catch(error => console.log('Ships error', error))}

					if (!localStorage.species) {
						fetch("https://swapi.dev/api/species", requestOptions)
						.then(response => response.json())
						.then(result => {
								localStorage.setItem("species", JSON.stringify(result.results))})
						.catch(error => console.log('Species error', error))}

					if (!localStorage.vehicles) {
						fetch("https://swapi.dev/api/vehicles", requestOptions)
						.then(response => response.json())
						.then(result => {
								localStorage.setItem("vehicles", JSON.stringify(result.results))})
						.catch(error => console.log('Vehicles error', error))}
			},
			getLoad: (element) => {
				element.target.src = "https://i.imgur.com/LDIprFD.png"					
		},

		getUID: (api, place) => {
			let half_solved = (api.url).split("https://swapi.dev/api/"+place+"/")
			let solved = ""
			half_solved.forEach(item => {
					solved += item
			});
			solved = solved.slice(0, -1)
			return solved
		},

		setFav: (key, prev, name, type, url) => {
			let data = {Index: key, Name: name, Type: type, To: url}
			let checker = prev.map(e => e.Index).indexOf(key)
			if (checker > -1) {
				prev.splice(checker, 1)
				setStore({Favorites: prev})
			}
			else {
				let temp = []
				temp = [...temp, ...prev, data]
				setStore({Favorites: temp})
			}
		},

		checkFav: (key, prev) => {
			let checker = prev.map(e => e.Index).indexOf(key)
			if (checker > -1) {
				return true}
			else {
				return false}					
		},
		addCard: (newCardData) => {
			const store = getStore();
			const newCard = {
			  cardData: {
				fullName: newCardData.fullName,
				email: newCardData.email,
				phone: newCardData.phone,
				address: newCardData.address,
			  },
			};
			setStore({ formulario: [...store.formulario, newCard] });
		  },
	
		  deleteCard: (index) => {
			const store = getStore();
			const updatedFormulario = store.formulario.filter(
			  (item, i) => i !== index
			);
			setStore({ formulario: updatedFormulario });
		  },
	
		  editCard: (index, updatedCardData) => {
			const store = getStore();
			const updatedFormulario = store.formulario.map((item, i) => {
			  if (i === index) {
				return {
				  cardData: {
					fullName: updatedCardData.fullName,
					email: updatedCardData.email,
					phone: updatedCardData.phone,
					address: updatedCardData.address,
				  },
				};
			  } else {
				return item;
			  }
			});
			setStore({ formulario: updatedFormulario });
		  },
		},
	  };
	};
	
	export default getState;