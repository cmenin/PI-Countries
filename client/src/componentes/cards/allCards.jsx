import React from "react";
import { useSelector } from "react-redux";
import Order from "../order/order.jsx";
import SingleCard from "./singleCard";


export default function AllCard(){

    //variable que guarda el estado global.
    const estado = useSelector(state=>state.secondCountry)
    
    return(
        <div>
            <h1>App Countries</h1>
    <Order/>
{/* </Order> */}
        
            <div>
                  {estado?.map(c=>
                        <div>
                          <SingleCard id={c.id} name={c.name} flag={c.flag} region={c.region}/>
                        </div>
      
      )}
             </div>
             
        </div>
    )
}