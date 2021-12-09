import React, {useEffect, useState} from "react";
import styled from "styled-components";
import imgLoading from "../../imagenes/giftLoading.gif"

const DivLoading= styled.div `
background-image: url(${imgLoading});
/* background-color: black; */
height: 100%;
width: 100%;
`

export default function Loading(){
    return(
        <DivLoading></DivLoading>
    )
}