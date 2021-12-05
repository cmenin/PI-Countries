import React from "react";

export default function SingleCard({name,flag,continents}){
    return(
        <div key="1">
            <div>
                <h2>{name}</h2>
                <img src={flag} alt="Flags of countries"/>
                <h3>{continents}</h3>
            </div>
        </div>
    )
}