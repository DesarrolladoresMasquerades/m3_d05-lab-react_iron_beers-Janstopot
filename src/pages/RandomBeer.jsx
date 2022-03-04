import Header from "./Header";
import axios from "axios";
import { useState, useEffect } from "react";


export default function RandomBeer() {
  const [beer, setBeer] = useState({});


  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => setBeer(response.data))
      .catch((error) => console.log(error));
  }, []);

  return beer._id ? (
    <div>
      <Header />

      <br></br>
      <img src={beer.image_url} alt="kasjhd" width="100" />
      <h1>{beer.name} </h1>
      <p>{beer.tagline} </p>
      <p>{beer.first_brewed} </p>
      <p>{beer.attenuation_level} </p>
      <p>{beer.description} </p>
      <p>{beer.contributed_by} </p>
    </div>
  ) : (
      <div>LOADING RANDOM BEER</div>
  );
}
