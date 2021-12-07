import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Order from "../order/order.jsx";
import SingleCard from "./singleCard";
import FiltroContinente from "../order/filtradoContinente";
import FiltroPoblacion from "../order/filtradoPoblacion";
import PorActividad from "../order/porActividad"
import { obtain } from "../../redux/actions/index";
import Paginado from "../paginado/paginado.jsx";
import { Link } from "react-router-dom";

// /redux/actions/index";
export default function AllCard() {
  //variable que guarda el estado global.

  const estado = useSelector((state) => state.secondCountry);
  const [currentPage,setCurrentPage] = useState(1) 
  const [perPage, setPerPage]= useState(9)
    const indicexOfLastCountry = currentPage * perPage
    const indicexOfFirstCountry= indicexOfLastCountry - perPage 
   const currentCountry= estado.slice(indicexOfFirstCountry,indicexOfLastCountry) 


    const paginado =  (pageNumber) =>{ 
 setCurrentPage(pageNumber)
    }


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(obtain());
  }, [dispatch]);

  return (
    <div>
      <h1>App Countries</h1>
      <Order />
      <FiltroContinente />
      <FiltroPoblacion />
      <PorActividad/>

      
      <div>
        {/* {estado?.map((c) => (
          <div key={c.id}>
            
          </div>
        ))} */}
      </div>
      <Paginado
      perPage={perPage}
      estado={estado.length}
      paginado={paginado}
      />
        {
                
                currentCountry?.map((c)=>{ 
                  
                    return(
                        <fragment>
        
                   <SingleCard
                      id={c.id}
                      name={c.name}
                      flag={c.flag}
                      region={c.region}
                       />
                   
                        </fragment>
                   )
               })
            }
    </div>
  );
}
