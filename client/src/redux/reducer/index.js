const initialState = {

    country:[],
    secondCountry:[]
    
}


//primero el estado, dsps la accion.
const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'OBTENER_PAIS':
            // console.log(action.payload)
            return{
                //siempre hay que devolver una copia del estado, para no perderlo.
                ...state,
                //piso el stado que quiero modificar.
                country: action.payload, //arreglo de paises.
                secondCountry: action.payload,
            }

        case 'ORDER_DES' :{
            return{
                ...state,
                country:state.secondCountry.sort((a,b)=>{
                    if(a.name.toLowerCase() < b.name.toLowerCase()){
                        return 1
                    }
                    if(b.name.toLowerCase() < a.name.toLowerCase()){
                        return -1
                    }
                    return 0
                })
            }
        }   
            case 'BUSQUEDA_ONE':
                return{
                    
                }    
                default: return state
            }
        }
export default rootReducer;