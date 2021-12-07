import React from "react";
import banderas from '../../imagenes/banderas.jpg'
import {Link} from "react-router-dom"

export default function SingleCard({id,name,flag,region}){
    return(
        <div key={id}>
            <div>
                <h2>{name}</h2>
                <h3>{region}</h3>
            <Link to={`/countries/detail/${id}`}>
                <img src={flag ? flag: banderas } alt="Flags of countries" width="200xp" height="250xp"/>
            </Link>
            </div>
        </div>
    )
}