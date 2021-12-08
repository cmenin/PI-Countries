import React from "react";
import { useDispatch } from "react-redux";
import { getFilterPoblacion } from "../../redux/actions/index";
import styled from "styled-components";

const MySelectC = styled.select`
  height: 30px;
  width: 145px;
  border: 0;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 0.7em;
  letter-spacing: 0.2em;
  box-shadow: 0 2px 5px 0;
`;

export default function FiltroPoblacion() {
  const dispatch = useDispatch();

  function handleFilterPoblacion(e) {
    dispatch(getFilterPoblacion(e.target.value));
  }

  return (
    <div>
      <MySelectC
        onChange={(e) => {
          handleFilterPoblacion(e);
        }}
      >
        <option value="">Population</option>
        <option value="mayor">Higher population</option>
        <option value="menor">Smaller population</option>
      </MySelectC>
    </div>
  );
}
