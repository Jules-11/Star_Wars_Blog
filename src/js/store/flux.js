const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters: [],
			planets: [],
			vehicles: [],
			characterInfo: [],
			planetInfo: [],
			vehicleInfo: [],
		},
		actions: {
			getCharactersInfo: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(data => setStore({characters: data.results}))
				.catch(err => console.error(err))
				
			},
			getCharacterInfo: (id) => {
				const store = getStore();
				
				fetch(`https://www.swapi.tech/api/people/${id}`)
				.then(res => res.json())
				.then(data => {setStore({characterInfo: data.result})})
				.catch(err => console.error(err))
				
			},
			getPlanetsInfo: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/planets/")
				.then(res => res.json())
				.then(data => setStore({planets: data.results}))
				.catch(err => console.error(err))
			},
			getPlanetInfo: (id) => {
				const store = getStore();
				
				fetch(`https://www.swapi.tech/api/planets/${id}`)
				.then(res => res.json())
				.then(data => {setStore({planetInfo: data.result})})
				.catch(err => console.error(err))
				
			},
			getVehiclesInfo: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/vehicles/")
				.then(res => res.json())
				.then(data => setStore({vehicles: data.results}))
				.catch(err => console.error(err))
			},
			getVehicleInfo: (id) => {
				const store = getStore();
				
				fetch(`https://www.swapi.tech/api/vehicles/${id}`)
				.then(res => res.json())
				.then(data => {setStore({vehicleInfo: data.result})})
				.catch(err => console.error(err))
				
			},
			addToFavorite: (fav) => {
				const store = getStore();
				setStore({favorites: [...store.favorites, fav]})
			},
			removeFromFavorite: (fav) => {
				const store = getStore();
				setStore({favorites: store.favorites.filter((data) => !(data.id === fav.id && data.type === fav.type))})
			},
			deleteFavoriteByIndex: (index) => {
				const store = getStore();
				setStore({favorites: store.favorites.filter((data, i) => index != i)})
			}
			}
		}
	};


export default getState;
