import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Order from "../order/order.jsx";
import SingleCard from "./singleCard";
import FiltroContinente from "../order/filtradoContinente";
import { obtain } from "../../redux/actions/index";
// /redux/actions/index";
export default function AllCard() {
  //variable que guarda el estado global.
  
  const estado = useSelector((state) => state.secondCountry);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(obtain());
  }, [dispatch]);

  return (
    <div>
      <h1>App Countries</h1>
      <Order />
      <FiltroContinente />

      <div>
        {estado?.map((c) => (
          <div>
            <SingleCard
              id={c.id}
              name={c.name}
              flag={c.flag}
              region={c.region}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
