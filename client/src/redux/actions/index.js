import axios from 'axios';

const URL_GET = 'http://localhost:3001/countries/'


//traer paises
export function obtain(){
    return async function(dispatch){
        //con el dispatch le mandamos la accion al reducer.
       let pedido= await axios.get(URL_GET) // conexion con el back

      return  dispatch({
        type: 'OBTENER_PAIS',
        payload: pedido.data
        //porque axios trae la info a traves de data
        })       
    }
}

export function obtainPorId(id){
    return async function(dispatch){
        try{
            
            const porId = await axios.get(URL_GET+ '/detail/' + id)
           return dispatch({
                type: 'OBTENER_ONE',
                payload: porId.data
            })
        }catch(error){
            console.log("no activity found")
        }
    }

}

export function postActivity(payload){
    return async function(dispatch){
        const created = await axios.post('http://localhost:3001/activity',payload)
       return created
    }
}

export function orderDes(payload) {
    return{
        type: 'ORDER_DES',
        payload,
    }
}

export function getFilterContinents(payload){
    return{
        type: 'FILTER_BY_CONTINENTS',
        payload
    }
}

export function getFilterPoblacion(payload){
    return{
        type: 'FILTER_BY_POBLACION',
        payload
    }
}

export function filterActivity(payload){
    return{
        type: 'FILTER_BY_ACTIVITY',
        payload
    }
}
//dispatch---acciones+info-->reducer(gestiona lo que envia el dispatch)--->estado redux
                                    //---> le avisa a todos los componentes que se produjo un cambio.