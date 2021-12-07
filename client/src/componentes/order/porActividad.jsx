import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActivity, obtain } from "../../redux/actions";



export default function PorActividad(){
const allCountries = useSelector(state=>state.secondCountry)
const dispatch = useDispatch()

useEffect(()=>{
dispatch(obtain())
},[dispatch])

function handleActivity(e){
    dispatch(filterActivity(e.target.value))
    }



return(
    <div>
        {allCountries?.length > 0 ?  
        <select onChange={e=>handleActivity(e)} >

            <option value="all">Activities</option>
            {
             allCountries?.map((act)=>
             
                 <option value={act.activities} key={act.id}>{act.actvities}</option>
                 
               
                 )
            }
        </select>
            : "NO hay paises con actividades"}
            
    </div>
)
}
        

 