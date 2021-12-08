import React, {useState, useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import { obtain } from "../../redux/actions";
import {postActivity} from '../../redux/actions/index.js'
import {Link} from 'react-router-dom'

export default function Form(){
    const dispatch = useDispatch()
    const countriesForm = useSelector((state)=> state.secondCountry)
    
    const [activity,setActivity] = useState({
        name: "",
        season:"",
        countries:[]
    })

   const handleChange =(e)=>{
       setActivity({
           ...activity,
           [e.target.name]:e.target.value
       })

    }
   const handleDelete =(id)=>{
       setActivity({
           ...activity,
           countries: activity.countries.filter(el=> el !== id)
       })
    }


    const handleSelect =(e) =>{
        let aux= e.target.value.split(",")
        setActivity({
            ...activity,
            countries:[...activity.countries, aux]
        })
    }

    const handleSubmit = (e) =>{
        dispatch(postActivity(activity));
        setActivity({});
        alert("activity created!!!");

    }

    useEffect(()=>{
        dispatch(obtain())
    },[dispatch])

    return (
        <div>
            <br /><br />
            <Link to="/countries">
                <button>
                    <b>Home</b>
                </button>
            </Link>
            <br /><br />
           <form onSubmit={(e)=>handleSubmit(e)}>
               <label >Name</label>
               <input name="name" type="text" value={activity.name} onChange={handleChange} required/>
               <br /><br />
               <label >Duration minutes:</label>
               <input name="duration" type="number" value={activity.duration} onChange={handleChange} min="0" required />
               <br /><br />
               <label >difficulty</label> 
              
               <select name="difficulty" onChange={handleChange} required>
                   <option value="">---</option>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
               </select>

               <br /><br />
               <label >Season</label>
               
               <select name="season" onChange={e=>handleChange(e)} required>
                   <option value="">---</option>
                   <option value="Summer">Summer</option>
                   <option value="Winter">Winter</option>
                   <option value="Spring">Spring</option>
                   <option value="Autumn">Autumn</option>
               </select>
<br /><br /><br />
               <label >Country</label>
               <select name="countries" id="countries" onChange={e=> handleSelect(e) } required>
                   <option value="" name="countries">Country</option>
                   {countriesForm?.map((count)=>(
                   <option key={count.id} value={[count.id, count.name]}>{count.name}</option>
                    ))}
               </select>

                    <ul>
                        <li>
                            {
                                activity.countries?.map(el=> { 
                                   return (
                                       <div key={el.id}>
                                            {el[1]}
                                        <button name={el} type="button" onClick={()=> handleDelete(el)}>X</button>
                                        </div>
                                   )})
                                }
                        </li>
                    </ul>

                <button type="submit">CREATE</button>
                <br /><br />
                 <button type="reset">RESET</button> 
           </form>
        </div>
    )
}

// value={count.id} key={count.id}

