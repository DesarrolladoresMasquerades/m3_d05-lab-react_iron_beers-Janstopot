import Header from "./Header";
import {Link} from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";

export default function Beers(){
    const [beers, setBeer] = useState([])

    useEffect(()=>{
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response=>{
            setBeer(response.data)})
            .catch((error)=> console.log(error));
        }, [])
        




    return beers ?(
        <div key= {beers._id}>
        <Header/>
        <h1>LIST OF BEERS</h1>

        {beers.map((beer)=>(
            <div>
            
            <Link to={`/beer/${beer._id}`} ><img src={beer.image_url} alt="beer" height="100"></img></Link>
                <h2>{beer.name} </h2>
                <p>{beer.tagline} </p>
                <p>{beer.contributed_by} </p>
            </div>
        ))}


        

        </div>


    ) : (
        <div>LOADING BEERS</div>
    );

}