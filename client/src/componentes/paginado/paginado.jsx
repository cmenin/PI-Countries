import React from "react";
import styled from "styled-components";

const MyPaginado = styled.li`
  display: inline;
  font-family: "Staatliches", cursive;

  color: black;
  padding: 7px 10px;
  border: 1px solid black;
  margin: 2px;
  opacity: .8;
  &:hover:not(.activo) {
    background-color: gray;
    cursor: pointer;
  }
`

export default function Paginado({ perPage, estado, paginado }) {
  const pageNumbers = [];

  for (var i = 1; i <= Math.ceil(estado / perPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <MyPaginado key={number}>
              <a href onClick={(e) => paginado(number)}>
                {number}
              </a>
            </MyPaginado>
          ))}
      </ul>
    </nav>
  );
}


