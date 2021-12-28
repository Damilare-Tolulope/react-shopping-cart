import React, { useState, useEffect } from "react";
import data from "./data";
import { Button } from "react-bootstrap";
import { Container, Card, CardImg } from "react-bootstrap";
import { FaMoneyBill, FaShoppingCart } from "react-icons/fa";

const Menu = () => {
  const [items] = useState(data);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (item) => {
    if (cart.includes(item)) return alert("Already in the cart");
    setCart([...cart, item]);
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

  const handleRemoveFromCart = (item) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
    setCart(hardCopy);
  };

  const countStyle = () => {
    return cart.length < 1
      ? "badge p-2 mt-2 badge-danger"
      : "badge p-2 mt-2 badge-success";
  };

  return (
    <div>
      <Container>
        <div
          style={{ fontSize: "20px", float: "right" }}
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
        {showCart && (
          <CartED
            cart={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            cartTotal={cartTotal}
          />
        )}
        <h1 className="text-center m-5">Menu</h1>

        <div className="row justify-content-between align-items-center">
          {items.map((item) => (
            <Card
              key={item.id}
              style={{ width: "350px", marginBottom: "20px" }}
            >
              <CardImg height="250" src={item.image} alt={item.name} />
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

export default Menu;





const CartED = ({ cart, handleRemoveFromCart, cartTotal }) => {
  const handleIncrement = () => {
    console.log("increased");
  };
  const handleDecrement = () => {
    console.log("decreased");
  };

  return (
    <Container>
      <h4 className="text-center">Cart Items</h4>
      <p style={{ fontSize: "20px" }} className="badge p-2 badge-secondary">
        <FaMoneyBill /> Total price : ${cartTotal}
      </p>

      <div className="row justify-content-between align-items-center">
        {cart.map((item) =>
          item ? (
            <div
              className="row justify-content-between align-items-center p-2"
              key={item.id}
              style={{
                backgroundColor: "#eee",
                border: "1px solid #333",
                borderRadius: "10px",
                width: "550px",
                marginBottom: "20px",
              }}
            >
              <img
                width="150"
                height="100"
                style={{ borderRadius: "10px" }}
                src={item.image}
                alt={item.name}
              />
              <div>
                <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                  {item.name}{" "}
                  <span className="float-right badge p-2 badge-success">
                    ${item.price}
                  </span>
                </p>
                <p className="text-muted">{item.description}</p>
              </div>
              <div>
                <button
                  className="btn btn-sm btn-primary mr-2"
                  onClick={handleDecrement}
                >
                  {" "}
                  +{" "}
                </button>
                <span>5</span>
                <button
                  className="btn btn-sm btn-primary ml-2"
                  onClick={handleIncrement}
                >
                  {" "}
                  +{" "}
                </button>
                <button
                  onClick={() => handleRemoveFromCart(item)}
                  className="btn btn-danger btn-block mt-3"
                >
                  Remove
                </button>
              </div>
            </div>
          ) : (
                <div>
                    <p>No Items</p>
                    <button className="btn btn-info p-2">Continue to Shopping</button>
                </div>
          )
        )}

      </div>
            <button onClick={()=> alert("Not available!")} className="btn btn-success btn-lg m-3">Checkout</button>
      <hr />
    </Container>
  );
};
