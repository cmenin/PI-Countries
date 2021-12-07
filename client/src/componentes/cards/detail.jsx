import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtainPorId} from '../../redux/actions/index';
import banderas from '../../imagenes/banderas.jpg'
import { Link,useParams } from "react-router-dom";

export default function Detail(){
    const {id} = useParams()
    const dispatch = useDispatch()
    const detail = useSelector(state=>state.detalle)
    // console.log(detail,'------detail')
    
    useEffect(()=>{
        dispatch(obtainPorId(id));
        console.log(id,'--------id-detail')
        console.log(detail,'--------soy detail')
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
            <p> {detail.activities?.length > 0 ? detail.activities?.map(ac=>ac.name + " - "): "not found activity"}</p>
        </div>

        <div > 
             <Link to= "/countries"> HOME </Link>
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