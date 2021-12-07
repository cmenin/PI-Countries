const initialState = {
  country: [],
  secondCountry: [],
//   continent:[]
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
        // continent: action.payload,
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
    case "BUSQUEDA_ONE":
      return {

      };
    
    case "FILTER_BY_CONTINENTS":
        let allCountries = state.country;
        let continentFilter=  action.payload === "all"? allCountries : allCountries.filter(c=>{
            return c.region.includes(action.payload) });
      return{
          ...state,
          secondCountry: continentFilter
      }

        default:
          return state;
}
};
export default rootReducer;
