import React, {useState, useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import { obtain } from "../../redux/actions";
import {postActivity} from '../../redux/actions/index.js'
import {useNavigate} from 'react-router-dom'

export default function Form(){
    const dispatch = useDispatch()
    const countriesForm = useSelector((state)=> state.secondCountry)
    
    
    const [activity,setActivity] = useState({
        name: "",
        season:"",
        country:""
    })

   const handleChange =(e)=>{
       setActivity({
           ...activity,
           [e.target.name]:e.target.value
       })

    }

    const handelSelect =(e) =>{
        setActivity({
            ...activity,
            country:[...activity.country, e.target.value]
        })
    }

    const handleSubmit = (e) =>{
        // e.preventDefault()
        // console.log(activity)
        dispatch(postActivity(activity));
        setActivity({});
        alert("activity created!!!");

    }

    useEffect(()=>{
        dispatch(obtain())
    },[dispatch])

    return (
        <div>
           <form onSubmit={(e)=>handleSubmit(e)}>
               <label >Name</label>
               <input name="name" type="text" value={activity.name} onChange={handleChange}/>
               <label >Duration minutes:</label>
               <input name="duration" type="number" value={activity.duration} onChange={handleChange}/>
               <label >difficulty</label> 
               {/* <input  name="difficulty"  vale={activity.difficulty} onChange={handleChange}/> */}
               <select name="difficult" onChange={handleChange} >
                   <option value="">---</option>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
               </select>
               <label >Season</label>
               {/* <input name="season" type="text" vale={activity.season} onChange={handleChange}/> */}
               <select name="season" onChange={e=>handleChange(e)}>
                   <option value="">---</option>
                   <option value="Summer">Summer</option>
                   <option value="Winter">Winter</option>
                   <option value="Spring">Spring</option>
                   <option value="Autumn">Autumn</option>
               </select>

               <label >Country</label>
               <select name="country" onChange={e=> handelSelect(e)}>
                   {countriesForm?.map((count)=>(
                   <option key={count.id} value={count.id}>{count.name}</option>
                    ))}
               </select>
                <button type="submit">CREAR</button>
           </form>
        </div>
    )
}

// value={count.id} key={count.id}

