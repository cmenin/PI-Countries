import React from "react";
import { useDispatch } from "react-redux";
import { getFilterContinents } from "../../redux/actions/index";
import styled from "styled-components";

const MySelect = styled.select`
  height: 30px;
  width: 145px;
  border: 0;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 0.7em;
  letter-spacing: 0.2em;
  /* overflow: hidden; */
  box-shadow: 0 2px 5px 0;
`;

export default function FiltroContinente() {
  const dispatch = useDispatch();

  function handleFilterContinente(e) {
    dispatch(getFilterContinents(e.target.value));
  }

  return (
    <div>
      <MySelect
        onChange={(e) => {
          handleFilterContinente(e);
        }}
      >
        <option value="all">Continents</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Polar">Polar</option>
      </MySelect>
    </div>
  );
}
