import React, { useState, useEffect } from 'react'
import data from './data'
import { Button } from 'react-bootstrap'
import { Container, Card, CardImg } from 'react-bootstrap'
import { FaMoneyBill, FaShoppingCart } from 'react-icons/fa'

const Menu = () => {

    const [items] = useState(data)
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false)


    const handleAddToCart = (item) => {
        if (cart.includes(item)) return alert("Already in the cart")
      setCart([...cart, item]);

    }



    const [cartTotal, setCartTotal] = useState(0);
    
    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
    };
    useEffect(() => {
        total();
      }, [cart,]);

    const handleRemoveFromCart = (item) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
        setCart(hardCopy);
      };


    return (
        <div>
            <Container>
            <button onClick={()=>setShowCart(!showCart)} className="btn btn-md m-2 p-2 btn-success">{showCart ? "Hide Cart" : "View Cart"}<FaShoppingCart /></button>
            { showCart && <CartED cart={cart} handleRemoveFromCart={handleRemoveFromCart} cartTotal={cartTotal} /> }
            <p className="text-center m-5" style={{fontSize:"25px"}} >Menu</p>

                <div className="row justify-content-between align-items-center">
                    {items.map(item => (
                    <Card key={item.id} style={{width:"350px", marginBottom:"20px"}}>
                        <CardImg height="250"  src={item.image} alt={item.name} />
                        <Card.Body>
                            <Card.Title>{item.name} <span className="float-right badge badge-success">${item.price}</span></Card.Title>
                            <Card.Text className="text-muted">{item.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button onClick={() => handleAddToCart(item)} className={item.cart ? "btn-danger btn-block" : "btn-dark btn-block"} >Add to Cart <FaShoppingCart /></Button>
                        </Card.Footer>
                    </Card>
                    ))}
                </div>
            </Container>
        </div>
    )
}



export default Menu



const CartED = ({cart, handleRemoveFromCart, cartTotal}) => {

    
    const countStyle = ()=>{
        return(
            cart.length < 1 ? "badge p-2 badge-danger" : "badge p-2 badge-success"
        )
    }



    return (
        <Container>
            <h1>Cart Items</h1>
            <div style={{fontSize:'20px', float:"right"}} className={countStyle()} >{cart.length}<FaShoppingCart /></div>
            <p style={{fontSize:'20px'}} className=" badge p-2 badge-secondary"><FaMoneyBill /> Total price : ${cartTotal}</p>

            <div className="row justify-content-between align-items-center">
                {cart.map(item => item ? (
                <Card key={item.id} style={{width:"350px", marginBottom:"20px"}}>
                    <CardImg height="250"  src={item.image} alt={item.name} />
                    <Card.Body>
                        <Card.Title>{item.name} <span className="float-right badge badge-success">${item.price}</span></Card.Title>
                        <Card.Text className="text-muted">{item.description}</Card.Text>
                        
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => handleRemoveFromCart(item)} className="btn-danger btn-block" >Remove from cart</Button>
                    </Card.Footer>
                </Card>
                ) : "No Items"
                )}
            </div>
            <hr />
            <hr />
            <hr />
        </Container>

    )
}

