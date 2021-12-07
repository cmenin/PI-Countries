import React from "react";

export default function Paginado({perPage,estado,paginado}){

const pageNumbers =[]

for(var i = 1; i<=Math.ceil(estado/perPage);i++){ 
    pageNumbers.push(i);
}
return( 
    
    <nav>
        <ul> 
            {pageNumbers && pageNumbers.map(number=> (
                <li key={number}>
                <a href onClick={(e) => paginado(number)}>
                    {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
)
}