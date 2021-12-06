import React from "react";
import { useDispatch } from "react-redux";
import {orderDes} from "../../redux/actions/index"


export default function Order(){

    const dispatch = useDispatch()

    function handleSort(e){
        e.preventDefault();
        dispatch(orderDes(e.target.value))
        
    }
return(

    <div>
        <select onChange={(e)=>handleSort(e)}>
            <option value="">Order countries</option>
            <option value="A">A to Z</option>
            <option value="B">Z to A</option>
        </select>
    </div>
)
}