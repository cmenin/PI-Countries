import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import landingGif from "../../imagenes/landingGif.gif"

const MyDiv = styled.div`
    margin:0%;
    height: 100vh;
    background: url(${landingGif});
    display: grid;
    place-content: center;
    text-align: center;
    text-align: center;
    background-repeat:no-repeat;
    background-position: center;
    background-color:hsl(183deg 97% 31%);
    overflow:hidden;
    
    `

   const MyButton= styled.button`
   height: 50px;
	width: 220px;
	border: 0;
	border-radius: 5px;
	text-transform: uppercase;
	font-size: 1.1em;
	letter-spacing: 0.2em;
	overflow: hidden;
	box-shadow: 0 4px 12px 0 ;
    
       
   ` 


export default function LandingPage(){
    return (
        <MyDiv>
            <Link to="/countries">
                <MyButton>Welcome</MyButton>
            </Link>
        </MyDiv>
    )
}


