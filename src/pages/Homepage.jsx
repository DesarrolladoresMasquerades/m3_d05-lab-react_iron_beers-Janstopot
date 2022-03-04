import {Link} from "react-router-dom"
import beers  from "../assets/beers.png"
import newbeer from "../assets/new-beer.png"
import randombeer from "../assets/random-beer.png"

export default function HomePage(){
    return(
        <div>

        <h1>THIS IS THE HOME PAGE</h1>

        <Link to="/beers">Beers
        <br></br>
        <img src={beers} alt="beer" height="200" width="500"></img>
        </Link>
        <br></br>
        <Link to="/random-beer">Random beer
        <br></br>
        <img src={newbeer} alt="beer" height="200" width="500"></img>
        </Link>
        <br></br>
        <Link to="/new-beer">New beer
        <br></br>
        <img src={randombeer} alt="beer" height="200" width="500"></img>
        </Link>

        </div>


    )

}