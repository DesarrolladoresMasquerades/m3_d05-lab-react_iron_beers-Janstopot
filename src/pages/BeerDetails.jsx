import Header from "./Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function BeerDetails() {
  const [beer, setBeer] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
      .then((response) => setBeer(response.data))
      .catch((error) => console.log(error));
  }, [params.beerId]);

  return beer._id ? (
    <div key= {beer._id}>
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
      <div>LOADING BEER</div>
  )
}
