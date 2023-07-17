import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataProvider"
import Pokemon from "./Pokemon";


const Details = () => {
  console.log(Pokemon)
  // const getPokemonData = async () => {
  //   let response = await axios.get(`http://127.0.0.1:5000/pokemondata/${p.id}`);
  //   return response.status === 200 ? response.data : null
  // }

  // const loadPokemonData = async () => {
  //   let data = await getPokemonData();
  //   setPokemons(data.pokemons);
  // }
  // const [pokemons, setPokemons] = useState(() => loadPokemonData());

  return (
    <div>
      {/* <Card key={id} id={id} style={{ width: "18rem", margin: "5px" }}>
          <Card.Img variant="top" src={sprite} />
          <Card.Body>
            <Card.Title>
              {name}
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Price: ${hp}</ListGroup.Item>
          </ListGroup>
          <Button variant="success">Add to Cart</Button>{" "}
          <br />
        </Card> */}
    </div>
  );
};

export default Details;