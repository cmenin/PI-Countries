import React from "react";
import { useDispatch } from "react-redux";
import { orderDes } from "../../redux/actions/index";
import styled from "styled-components";

const MySelectO = styled.select`
  height: 30px;
  width: 145px;
  border: 0;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 0.6em;
  letter-spacing: 0.2em;
  box-shadow: 0 2px 5px 0;
`;

export default function Order() {
  const dispatch = useDispatch();

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderDes(e.target.value));
  }
  return (
    <div>
      <MySelectO onChange={(e) => handleSort(e)}>
        <option value="">Order countries</option>
        <option value="A">A to Z</option>
        <option value="B">Z to A</option>
      </MySelectO>
    </div>
  );
}
