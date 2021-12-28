import React from 'react'
import delivery from './assets/delivery.svg'
import order from './assets/order.svg'
import cars from './assets/cars.svg'

const Home = () => {
    return (
        <>
        <div className="hero text-center">
            <div className="hero-text pt-5 d-flex flex-column justify-content-center align-items-center">
                    <p className="pt-5">Welcome</p>
                    <span>...ride in comfy</span>
                </div>
        </div>
        <Services />
        </>
    )
}

const Services = () => {
    return (
        <div className="container">
            <div className="text-center m-auto pt-5">
                <p style={{color:"#f54749", textTransform:"uppercase", fontSize:"25px", fontWeight:"bold"}} className="pt-5">What we serve</p>
                <p className="fav"> Your favourite car delivery partner</p>
            </div>
            <div className="text-center ml-4 d-block d-lg-flex justify-content-center align-items-center pt-5">
                <div style={{width:"270px"}}>
                    <img height="100px" src={order} alt="order" />
                    <p style={{fontSize:"20px", marginTop:"15px", fontWeight:"bold"}}>Easy to order</p>
                    <p style={{color:"grey"}}>You only need a few steps in ordering food</p>
                </div>
                <div style={{width:"270px"}}>
                    <img height="100px" src={delivery} alt="delivery" />
                    <p style={{fontSize:"20px", marginTop:"15px", fontWeight:"bold"}}>Fast Delivery</p>
                    <p style={{color:"grey"}}>Delivery that is always on time even faster</p>
                </div>
                <div style={{width:"270px"}}>
                    <img height="100px" src={cars} alt="quality" />
                    <p style={{fontSize:"20px", marginTop:"15px", fontWeight:"bold"}}>Best Quality</p>
                    <p style={{color:"grey"}}>Not only fast for us quality is also number one</p>
                </div>
            </div>
        </div>
    )
}


export default Home
