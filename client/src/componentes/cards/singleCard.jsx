import React from "react";

export default function SingleCard({id,name,flag,continents}){
    return(
        <div key={id}>
            <div>
                <h2>{name}</h2>
                <img src={flag} alt="Flags of countries"/>
                <h3>{continents}</h3>
            </div>
        </div>
    )
}