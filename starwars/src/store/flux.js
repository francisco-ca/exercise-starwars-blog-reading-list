

const getState = ({ getStore, getActions, setStore }) => {
    return {
       
        
        store: {
            peopleList: [],
            planetList: [],
            vehList: [],
            detailPeopleList: {},
            detailVehList:{},
            detailPlanetsList:{},
            favorites:[],
            count:{}
        },
        actions: {

           

            fetchPeople: async () => {

                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                const response = await fetch(
                    'https://swapi.dev/api/people/',
                    config
                );

                const json = await response.json();
              


                setStore({ peopleList: json.results })
            },


            fetchPlanets: async () => {


                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                const response = await fetch(
                    'https://swapi.dev/api/planets/',
                    config
                );

                const json = await response.json();
               


                setStore({ planetList: json.results })
            },


            fetchVeh: async () => {

                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                const response = await fetch(
                    'https://swapi.dev/api/vehicles/',
                    config
                );

                const json = await response.json();
                


                setStore({ vehList: json.results })
            },

             peopleDetail: async (id) => {
                   
                   const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                const url= `https://swapi.dev/api/people/${id}/`
                const response = await fetch(url,
                    config);

                    const json = await response.json();
                


                setStore({ detailPeopleList: json })
            },
             vehDetail: async (id) => {
                   
                   const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                const url= `https://swapi.dev/api/vehicles/${id}/`
                const response = await fetch(url,
                    config);

                    const json = await response.json();
                


                setStore({ detailVehList: json })
            },
             planetsDetail: async (id) => {
                   
                   const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                const url= `https://swapi.dev/api/planets/${id}/`
                const response = await fetch(url,
                    config);

                    const json = await response.json();
                


                setStore({ detailPlanetsList: json })
            },
            addFav: async(value) =>{
             const store = getStore()
             const {favorites} =  store;
             
      setStore({favorites:[...favorites, value]})
            },

            delFav: async(value) =>{
             const store = getStore()
             const {favorites} =  store;
             const favo = favorites.filter((item) =>item !== value)
             
      setStore({favorites:[...favo]})
            },
           
        }
    };
};

export default getState;