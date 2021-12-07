import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtainPorId} from '../../redux/actions/index';
import banderas from '../../imagenes/banderas.jpg'

export default function Detail(props){
    const detail = useSelector(state=>state.detalle)
// console.log(detail,'------detail')
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(obtainPorId(props.match.params.id));

},[dispatch])

return (
    <div>
        <h2>{detail.name}</h2>
        <img src={detail.flag ? detail.flag: banderas } alt="Flags of countries" width="200xp" height="250xp"/>
        <p>{detail.region}</p>
        <p>{detail.population}</p>
        <p>{detail.subregion}</p>
        <p>{detail.area} km2</p>

        <div>
            {/* <p>{.activity}</p> */}
        </div>
    </div>
)

}

// id={c.id}
// name={c.name}
// flag={c.flag}
// region={c.region}
//pupulation
//subregion
//area en km2--<sup>