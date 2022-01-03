import React, { useState, useEffect } from "react";
import data from "./data";
import CartED from "./Cart";
import { Button } from "react-bootstrap";
import { Container, Card, CardImg } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const Shop = () => {
  const [items] = useState(data);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Cart functions
  const handleAddToCart = (item) => {
    if (cart.includes(item)) return alert("Already in the cart");
    setCart([...cart, item]);
  };

  const handleIncrement = (i) => {

    const inc = [...cart];
		const index = inc.indexOf(i);
		inc[index] = { ...i };
		inc[index].value++;
		setCart( inc );

    // cart.map(item => {
    //   if(item.name === i.name)
    //     i.value = i.value + 1;
    //     console.log(i.value);
        
    //     return cart
    // })
    // setCart(cart)
    // console.log(i)
  };
  
  const handleDecrement = (i) => {
    if(i.value === 0) return alert("Quantity can't be less than 0")
    const inc = [...cart];
		const index = inc.indexOf(i);
		inc[index] = { ...i };
		inc[index].value--;
		setCart( inc );


    // cart.map(item => {
    //   if(item.name === i.name)
    //     i.value = i.value - 1;
    //     console.log(i.value);
    // })
    // setCart(cart)
    // console.log("minus" + i.name);
  };

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
  }, [cart]);

  // Remove from cart
  const handleRemoveFromCart = (item) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => {
      return (
        cartItem.id !== item.id,
        item.value = 0
      )
    });
    setCart(hardCopy);
  };


  // Style
  const countStyle = () => {
    return cart.length < 1
      ? "badge p-2 mt-2 badge-danger"
      : "badge p-2 mt-2 badge-success";
  };

  return (
    <div>
      <Container>
        <div
          style={{  fontSize: "20px", float: "right" }}
          className={countStyle()}
        >
          {cart.length} {"       "}
          <FaShoppingCart />
        </div>
        <button
          onClick={() => setShowCart(!showCart)}
          className="btn btn-md m-2 p-2 btn-success"
        >
          {showCart ? "Hide Cart" : "View Cart"}
          <FaShoppingCart />
        </button>

        {/* Toogle cart */}
        {showCart && (
          <CartED
            cart={cart}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleRemoveFromCart={handleRemoveFromCart}
            cartTotal={cartTotal}
          />
        )}

        <h1 className="text-center m-5">Menu</h1>

        <div className="row justify-content-between align-items-center">
          {items.map((item) => (
            <Card
              key={item.id}
              className="card-cart"
            >
              <CardImg className="card-cart-img" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>
                  {item.name}{" "}
                  <span className="float-right badge badge-success">
                    ${item.price}
                  </span>
                </Card.Title>
                <Card.Text className="text-muted">{item.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  onClick={() =>
                    cart.includes(item)
                      ? handleRemoveFromCart(item)
                      : handleAddToCart(item)
                  }
                  className={
                    cart.includes(item)
                      ? "btn-danger btn-block"
                      : "btn-dark btn-block"
                  }
                >
                  {" "}
                  {cart.includes(item) ? (
                    "Remove from cart"
                  ) : (
                    <span>
                      Add to Cart <FaShoppingCart />
                    </span>
                  )}
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Shop;

