// import React, {useState} from 'react'
import { Container } from "react-bootstrap";
import { FaMoneyBill } from "react-icons/fa";

const CartED = ({ cart, handleRemoveFromCart, handleIncrement, handleDecrement, cartTotal }) => {

    // const [count, setCount] = useState(0)

    // const handleIncrement = (i) => {
    //     cart.map(item => {
    //         if(item.name === i.name)
    //         i.value = i.value + 1;
    //         console.log(i.value);
    //     })
    // };

    // const handleDecrement = (i) => {
    //     if(i.value === 0) return alert("Quantity can't be less than 0")
    //   console.log(i.name);
    // };
  
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
                className="cart row justify-content-between align-items-center p-2"
                key={item.id}
              >
                <img
                  style={{ borderRadius: "10px" }}
                  src={item.image}
                  alt={item.name}
                />
                <div className="cart-details">
                  <p>
                    {item.name}{" "}
                    <span className="float-right badge p-2 badge-success">
                      ${item.price}
                    </span>
                  </p>
                  <p className="text-muted">{item.description}</p>
                </div>
                <div className="cart-actions">
                  <div>
                      <button
                      className="btn btn-sm btn-primary mr-2"
                      onClick={()=>handleDecrement(item)}
                      >
                      {" "}
                      -{" "}
                      </button>
                      <span>{item.value}</span>
                      <button
                      className="btn btn-sm btn-primary ml-2"
                      onClick={()=>handleIncrement(item)}
                      >
                      {" "}
                      +{" "}
                      </button>
                  </div>
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

  export default CartED