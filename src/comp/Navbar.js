import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960)
            setButton(false);
        else
            setButton(true);
    }
    useEffect(() => {
        setButton()
    }, []);
    window.addEventListener('resize', showButton);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    return (
        <>
            <nav className='navbar' id='navbar'>
                <div className='firstHalf'>

                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}></Link>
                    <div className='menu-icon' onClick={handleClick} >
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                </div>
                <div className='secondHalf'>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link className='nav-links' to='/' onClick={closeMobileMenu}>
                                Domov
                            </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link className='nav-links' to='/PrejsnaLeta' onClick={closeMobileMenu}>
                                Prejšna leta
                            </Link>
                        </li> */}
                        <li className='nav-item'>
                            <Link className='nav-links' to='/Onas' onClick={closeMobileMenu}>
                                O nas
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-links' to='/Voditelji' onClick={closeMobileMenu}>
                                Voditelji
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-links' to='/Editor' onClick={closeMobileMenu}>
                                Voditelji
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar