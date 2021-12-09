const initialState = {
  country: [],
  secondCountry: [],
  detalle:[],
  activities: [],
  loading: false
};

//primero el estado, dsps la accion.
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return{
        ...state,
        loading:true
      }


    case "OBTENER_PAIS":
      return {
        //siempre hay que devolver una copia del estado, para no perderlo.
        ...state,
        //piso el stado que quiero modificar.
        country: action.payload, //arreglo de paises.
        secondCountry: action.payload,
        loading:false
      };
      case 'GET_NAME':
        return{
          ...state,
          secondCountry: action.payload
        }

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
        detalle: action.payload,
        loading: false
      };

      case "GET_ACTIVITY":
        console.log(action.payload,"<------ en reducer")
        return{
          ...state,
          activities: action.payload
        }

    case 'FILTER_BY_ACTIVITY':
      console.log(action.payload,"en reducer")
      return {
        ...state,
        secondCountry: state.country.filter(el=>el.activities.map(e=>e.name).includes(action.payload))
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

      case 'FILTER_SELECT':
       return{ ...state,
         secondCountry: state.secondCountry.filter(c=>c.id !== action.payload) }

        default:
          return state;
}
};
export default rootReducer;
