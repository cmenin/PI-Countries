import React, {useState, useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import { obtain } from "../../redux/actions";
import {postActivity} from '../../redux/actions/index.js'
import {Link} from 'react-router-dom';
import styled from "styled-components";
import form2 from "../../imagenes/form2.jpg"

const DivForm = styled.form`
position:left;
 margin: 5%;
    height: 50%;
    width: 52%;
    display: inline-block;
    background-color: rgb(93, 69, 124);
    border: 3px solid #555;
    border-radius: 1%;
    opacity: .9;

`

const Div = styled.div`

background-image: url(${form2});
/* background-repeat: no-repeat; */
background-size: 40%;
opacity: .9;

`
const ButtonForm = styled.button`
     height: 30px;
  width: 145px;
  border: 0;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 0.7em;
  letter-spacing: 0.2em;
  /* overflow: hidden; */
  box-shadow: 0 2px 5px 0;
`

const ButtonSub= styled.button`
    

  width: 200px;
  height: 50px;
  background: dodgerblue;
  border-radius: 6px;
  transition: all .3s cubic-bezier(0.67, 0.17, 0.40, 0.83);


&:svg {
  transform: rotate(180deg);
  transition: all .5s;
}

 /* &&:after{
  width: 120px;
  height: 120px;
  background: mediumseagreen;
  border-radius: 50%;
  transform: rotate(-180deg);
} */

&&:hover {
  cursor: pointer;
}
`

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
        <Div>
            <br /><br />
            <Link to="/countries">
                <ButtonForm >
                    <b>Home</b>
                </ButtonForm >
            </Link>
            <br /><br />
           <DivForm onSubmit={(e)=>handleSubmit(e)}>
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

                <ButtonSub type="submit">CREATE</ButtonSub>
                <br /><br />
                <ButtonForm  type="reset">RESET</ButtonForm > 
           </DivForm>
        </Div>
    )
}

// value={count.id} key={count.id}

