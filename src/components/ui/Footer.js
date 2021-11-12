import React from 'react'
import logo from '../../logo.svg'
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { IconContext } from 'react-icons/lib'

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div className="container d-flex justify-content-between align-items-start pt-5 pb-5 text-muted">
                <div style={{width:"300px", fontSize:"14px"}} className="">
                    <img className="mb-3" style={{height:"50px", width:"50px"}} src={logo} alt="logo" />
                    <p>Our job is to fillling your tummy with delicious food ans with fast and free delivery</p>
                    <div className="footer-desc mt-5 d-flex justify-content-between align-items-center">
                        <IconContext.Provider value={{size:"30", color:"#f54749",}} >
                        <a href="/#"><FaFacebook /></a>
                        <a href="/#"><FaWhatsapp /></a>
                        <a href="/#"><FaTwitter /></a>
                        <a href="/#"><FaInstagram /></a>
                        </IconContext.Provider>
                    </div>
                </div>
                        <ul className="d-none d-lg-block">
                            <li>About</li>
                            <li>About Us</li>
                            <li>Features</li>
                            <li>News</li>
                            <li>Menu</li>
                        </ul>
                        <ul className="d-none d-lg-block">
                            <li>Company</li>
                            <li>Why Us?</li>
                            <li>Partner with us</li>
                            <li>FAQ</li>
                            <li>Blog</li>
                        </ul>
                        <ul className="d-none d-lg-block">
                            <li>Support</li>
                            <li>Account</li>
                            <li>Support Center</li>
                            <li>Feedback</li>
                            <li>Contact Us</li>
                            <li>Accesibility</li>
                        </ul>
                        <ul className="d-none d-lg-block">
                            <li>Get in touch</li>
                            <span>Questions or feedback?</span> <br/>
                            <span>We'd love to hear from you</span>
                            <input type="email" placeholder="Email Address" className="form-control p-3 mt-4" style={emailInput} />
                        </ul>
                </div>
                <p className="text-center pb-4">&copy; 2021</p>
            </footer>
    )
}

const emailInput = {
    border:"1px solid #f45749",
    borderRadius:"100px",

}

const footerStyle = {
    marginTop:"30px",
    backgroundColor:"rgba(0,0,0,0.1)"
}

export default Footer
