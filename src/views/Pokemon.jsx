import axios from "axios";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const Pokemon = () => {

    const getPokemonData = async () => {
        let response = await axios.get('http://127.0.0.1:5000/pokemondata');
        return response.status === 200 ? response.data : null
    }

    const loadPokemonData = async () => {
        let data = await getPokemonData();
        setPokemons(data.pokemons);
    }
    const [pokemons, setPokemons] = useState(() => loadPokemonData());
    //console.log(pokemons);

    return (
        <div>
            <h1 style={{ margin: '25px' }}>Pokémon! </h1>
            <div className="container">
                <div className="row">
                    {pokemons && pokemons.length > 0 ? pokemons.map((p, index) => {
                        return <Card key={index} id={p.id} style={{ width: '18rem', margin: '5px' }}>
                            <Card.Img variant="top" src={p.sprite} />
                            <Card.Body>
                                <Card.Title>{p.name}</Card.Title>
                                <Card.Text>
                                    {p.ability}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>HP: {p.hp}</ListGroup.Item>
                                <ListGroup.Item>Attack:{p.attack}</ListGroup.Item>
                                <ListGroup.Item>Defense: {p.defense}</ListGroup.Item>
                            </ListGroup>
                            <Button variant="success">Catch!</Button>{' '}
                        </Card>
                    }) :
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
                    }
                </div>
            </div>
        </div>
    )
}

export default Pokemon;





