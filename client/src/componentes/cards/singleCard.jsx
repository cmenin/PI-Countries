import React from "react";
import banderas from '../../imagenes/banderas.jpg'

export default function SingleCard({id,name,flag,region}){
    return(
        <div key={id}>
            <div>
                <h2>{name}</h2>
                <h3>{region}</h3>
                <img src={flag ? flag: banderas } alt="Flags of countries" width="200xp" height="250xp"/>
            </div>
        </div>
    )
}