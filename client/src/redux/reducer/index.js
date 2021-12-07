const initialState = {
  country: [],
  secondCountry: [],
    detalle:[]

};

//primero el estado, dsps la accion.
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OBTENER_PAIS":
      // console.log(action.payload)
      return {
        //siempre hay que devolver una copia del estado, para no perderlo.
        ...state,
        //piso el stado que quiero modificar.
        country: action.payload, //arreglo de paises.
        secondCountry: action.payload,
        
      };

    case "ORDER_DES": {
      if (action.payload === "A")
        return {
          ...state,
          secondCountry: [...state.secondCountry].sort((a, b) =>
            a.name > b.name ? 1 : -1
          ),
        };
      return {
        ...state,
        secondCountry: [...state.secondCountry].sort((a, b) =>
          a.name > b.name ? -1 : 1
        ),
      };
    }
    case "OBTENER_ONE":
      return {
        ...state,
        detalle: action.payload
      };
    case 'FILTER_BY_ACTIVITY':
      let allCoun= state.country;
      let activitiesFilter=  action.payload === "all"? allCoun : allCoun.filter(c=>{
          return c.activities.includes(action.payload) });
      return {
        ...state,
        secondCountry: activitiesFilter.length>0? activitiesFilter: "No hay paises con actividades"
      };
    
    case "FILTER_BY_CONTINENTS":
        let allCountries = state.country;
        let continentFilter=  action.payload === "all"? allCountries : allCountries.filter(c=>{
            return c.region.includes(action.payload) });
      return{
          ...state,
          secondCountry: continentFilter
      }
    
    case "FILTER_BY_POBLACION":
        if (action.payload === "menor")
        return {
          ...state,
          secondCountry: [...state.secondCountry].sort((a, b) =>
            a.population > b.population ? 1 : -1
          ),
        };
      return {
        ...state,
        secondCountry: [...state.secondCountry].sort((a, b) =>
          a.population > b.population ? -1 : 1
        ),
      };

        default:
          return state;
}
};
export default rootReducer;
