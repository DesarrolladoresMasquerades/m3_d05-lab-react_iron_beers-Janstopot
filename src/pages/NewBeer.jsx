import Header from "./Header";
import { useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

export default function NewBeer(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({name : "", tagline : "", description: "", first_brewed: "", brewers_tips: "", attenuation_level:0, contributed_by: "" });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(
          `https://ih-beers-api2.herokuapp.com/beers/new`,
          formData
        )
        .then((newData)=> navigate(`/beers`))
        .catch(error => navigate(`/beers`))
      };

      function handleInput(event){
        const inputName=event.target.name;
        const value = event.target.value;
        setFormData(formData=>{
            return {...formData, [inputName]: value}
      })
     }
    


    return(
        <div>

        <Header/>
        <h1>NEW BEER</h1>
        <form onSubmit={handleSubmit}>

        
        <label>Name</label>
        <input
        type="text"
        name="name"
        onChange={handleInput}
        value={formData.name}
        />

        <label>Tagline</label>
        <input
        type="text"
        name="tagline"
        onChange={handleInput}
        value={formData.tagline}
        />

        <label>Description</label>
        <input
        type="textarea"
        name="description"
        onChange={handleInput}
        value={formData.description}
        />

        <label>First brewed</label>
        <input
        type="text"
        name="first_brewed"
        onChange={handleInput}
        value={formData.first_brewed}
        />


        <label>First brewed</label>
        <input
        type="text"
        name="brewers_tips"
        onChange={handleInput}
        value={formData.brewers_tips}
        />

    <button type="submit">Submit</button>



        </form>



        </div>


    )

}