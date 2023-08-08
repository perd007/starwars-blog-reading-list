const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: "https://www.swapi.tech/api/",
			people: JSON.parse(localStorage.getItem("people")) || [],
			vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			favorites: JSON.parse(localStorage.getItem("favorites")) || [],
			todolist: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			getDataApi: async (dataApi) => {
				const store = getStore();
				if (store[dataApi].length === 10) return;
				try {
					const response = await fetch(store.apiUrl + dataApi);
					if (response.ok) {
						const data = await response.json();
						const listResult = data.results;

						listResult.forEach(async (element) => {
							const detailResponse = await fetch(element.url);
							const detailData = await detailResponse.json()
							setStore({ [dataApi]: [...store[dataApi], detailData.result] });

							//cargamos el local storage
							if (store[dataApi].length == 10) {
								let stringifiedValue = JSON.stringify(store[dataApi]);
								localStorage.setItem(dataApi, stringifiedValue)
							}
						});//fin del forEach




					}//fin del if response
				} catch (error) {
					console.log("fallo la Api");
				}

			},//fin del getDataApi


			getHandleChange: (favorite) => {
				//console.log("entro en getHandleChange" + favorite);
				const store = getStore();
				const items = store.todolist.filter((item) => item == favorite)
				if (items.length === 0)
					setStore({ todolist: [...store.todolist, favorite] })
				//console.log("todo list " + store.todolist);
			},
			//borrar contaco
			deleteFavorite: (id) => {
				const store = getStore();
				//creamos un array nuevo sin el elemento que es igual al index qe nos paso
				setStore({ todolist: store.todolist.filter((favorite, index) => id != index) });

			},



		}
	};
};

export default getState;
