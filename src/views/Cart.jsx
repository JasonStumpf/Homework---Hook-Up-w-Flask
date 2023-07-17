import { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../index.css'

const Cart = () => {
    const { cart, setCart } = useContext(DataContext);

    const clearCart = () => {
        setCart({size:0, total:0, pokemons:{}});
        console.log(cart);
    }

    const addItem = id => {
        let copyCart = {...cart};
        copyCart.size ++;
        copyCart.total += copyCart.pokemons[id].data.hp;
        copyCart.pokemons[id].quantity ++;
        setCart(copyCart);
    }

    const subtractItem = id => {
        let copyCart = {...cart};
        copyCart.size --;
        copyCart.total -= copyCart.pokemons[id].data.hp;
        copyCart.pokemons[id].quantity > 1 ?
        copyCart.pokemons[id].quantity -- :
        delete copyCart.pokemons[id]
        setCart(copyCart);
    }

    const deleteItem = id => {
        let copyCart = {...cart};
        copyCart.size -= copyCart.pokemons[id].quantity;
        copyCart.total -= copyCart.pokemons[id].quantity * copyCart.pokemons[id].data.hp;
        delete copyCart.pokemons[id];
        setCart(copyCart);
    }

    return (
        <>
            <h1>Your Cart:</h1>
            <h2>Your current total is: ${cart.total}</h2>
            <div className="container">
                {Object.values(cart.pokemons).map((poke, ind) => {
                    return <Card key={ind} className="text-center">
                        <Card.Header><h2>{poke.data.name}</h2></Card.Header>
                        <div>
                            <Card.Img className="sprite-image" variant="top" src={poke.data.sprite} />
                        </div>
                        <Card.Body>
                            <Card.Title>${poke.data.hp}</Card.Title>
                            <Card.Text>
                                <span className="quantity">Amount: {poke.quantity}</span>
                                <br />
                                <span><Button variant="danger" onClick={() => subtractItem(poke.data.id)}>-</Button></span>
                                <span><Button variant="success" onClick={() => addItem(poke.data.id)}>+</Button></span>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="secondary" onClick={() => deleteItem(poke.data.id)}>Remove from cart</Button>
                        </Card.Footer>

                    </Card>
                })}
                <br />
                <Button variant="dark" onClick={clearCart}>Clear Cart</Button>{' '}
            </div>
        </>
    )
}
export default Cart;