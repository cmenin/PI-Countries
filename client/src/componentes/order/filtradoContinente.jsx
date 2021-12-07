import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {getFilterContinents, obtain} from "../../redux/actions/index"


export default function FiltroContinente(){

    const dispatch = useDispatch();
    const allContinents = useSelector((state)=> state.secondCountry)

    function handleFilterContinente(e){
        dispatch(getFilterContinents(e.target.value))
    }

    useEffect(() => {
        dispatch(obtain());
      }, [dispatch]);

    return(

        <div>
            <select onChange={e=>{handleFilterContinente(e)}}>
                <option value="all">Continents</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Polar">Polar</option>
            </select>
                {/* {
                    allContinents?.map(c => 
                        <option value={c.id} key={c.id}>{c.region} </option>
                
                    )} */}
        </div>
    )
}