import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFilterPoblacion, obtain} from "../../redux/actions/index"


export default function FiltroPoblacion(){

    const dispatch = useDispatch();

    function handleFilterPoblacion(e){
        dispatch(getFilterPoblacion(e.target.value))
    }

    // useEffect(() => {
    //     dispatch(obtain());
    //   }, [dispatch]);

    return(
        <div>
            <select onChange={e=>{handleFilterPoblacion(e)}}>
                <option value="">Population</option>
                <option value="mayor">Higher population</option>
                <option value="menor">Smaller population</option>
            </select>
        </div>
    )
}