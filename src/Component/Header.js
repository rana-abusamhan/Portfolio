import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../CSS/Header.css';

function Header (){
        return(
            <>
            <Navbar className="nav">
                <Button><Link to="/" className="link">HOME</Link></Button>
                <Button><Link to="/about" className="link">ABOUT</Link></Button>
                <Button><Link to="/portfolio" className="link">PORTFOLIO</Link></Button>
                <Button><Link to="/contact" className="link">CONTACT</Link></Button>
                <Button><Link to="/play" className="link">Play</Link></Button>
                <Button><Link to="/NoPage" className="link">NoPage</Link></Button>
            </Navbar>
            </>
        )
    }

export default Header;