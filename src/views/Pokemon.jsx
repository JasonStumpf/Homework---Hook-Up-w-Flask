import axios from "axios";
import { useContext, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { DataContext } from "../context/DataProvider";
import Details from "./Details";

const Pokemon = () => {

    const getPokemonData = async () => {
        let response = await axios.get('https://pokemon-app-46jm.onrender.com/pokemondata');
        return response.status === 200 ? response.data : null
    }

    const loadPokemonData = async () => {
        let data = await getPokemonData();
        setPokemons(data.pokemons);
    }
    const [pokemons, setPokemons] = useState(() => loadPokemonData());

    const { cart, setCart } = useContext(DataContext);

    const addPokemon = (pokemon) => {
        let copyCart = { ...cart };
        copyCart.size++;
        copyCart.total += pokemon.hp;
        copyCart.pokemons[pokemon.id] ?
            copyCart.pokemons[pokemon.id].quantity++ :
            copyCart.pokemons[pokemon.id] = { data: pokemon, quantity: 1 };
        console.log(cart)
        setCart(copyCart);
    }

    return (
        <div>
            <h1 style={{ margin: '25px' }}>Pokémon Trading Cards!</h1>
            <div className="container">
                <div className="row">
                    {pokemons && pokemons.length > 0 ? pokemons.map((p, index) => {
                        return <>
                            <Card key={index} id={p.id} style={{ width: '18rem', margin: '5px' }}>
                                <Card.Img variant="top" src={p.sprite} />
                                <Card.Body>
                                    <Card.Title><h2>{p.name}</h2></Card.Title>
                                </Card.Body>
                                <Card.Body>
                                    <Details p={p} />
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item><strong>Price: ${p.hp}</strong></ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Button variant="success" onClick={() => addPokemon(p)}>Add to Cart</Button>{' '}
                                </Card.Body>
                            </Card>
                        </>
                    }) : (
                        <Card>
                            <Card.Header>Quote</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        {' '}
                                        Good things come to those who load{' '}
                                    </p>
                                    <footer className="blockquote-footer">
                                        Someone Famous Probably <cite title="Source Title"></cite>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Pokemon;