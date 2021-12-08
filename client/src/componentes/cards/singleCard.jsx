import React from "react";
import banderas from '../../imagenes/banderas.jpg'
import {Link} from "react-router-dom";
import styled from "styled-components";

const DivCard= styled.div`
/* display: block; */
    margin: 4%;
    display: inline-table;
    background-color: rgb(241, 247, 241);
    width: 240px; 
     height: 400px; 
     border: 3px solid rgb(63, 52, 52);
    border-radius: 3%;
    opacity: .9;
    padding: 5px;
`
const DivG = styled.div`
margin: 4%;
display:inline-block;

`

export default function SingleCard({id,name,flag,region}){
    return(
        <DivG key={id}>
            <DivCard>
                <h2>{name}</h2>
                <h3>{region}</h3>
            <Link to={`/countries/detail/${id}`}>
                <img src={flag ? flag: banderas } alt="Flags of countries" width="200xp" height="250xp"/>
            </Link>
            </DivCard>
        </DivG>
    )
}