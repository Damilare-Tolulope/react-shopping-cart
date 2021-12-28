import React from 'react'
import { Navbar, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
              <Navbar style={bgStyle} expand="md" className="d-flex navbar navbar-collapse navbar-default d-flex justify-content-between align-items-center">
                <Navbar.Toggle aria-controls='navbar-content'/>
                <Navbar.Collapse id='navbar-content' >
                    <div className="text-center d-flex m-auto justify-content-between align-items-center">
                        <NavLink className="d-block" ><Link style={textLink} to='/' >HOME</Link></NavLink> || 
                        <NavLink className="d-block" ><Link style={textLink} to='/menu' >MENU</Link></NavLink> 
                    </div>
                </Navbar.Collapse>
            </Navbar>
</>
    )
}

const textLink={
    color:"white",
    fontSize:'20px'
}
const bgStyle = {
    backgroundColor:"#000"
}

export default Nav
