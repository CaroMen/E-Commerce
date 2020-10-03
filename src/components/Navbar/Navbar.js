import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks, MobileIcon } from './Navbar.elements';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <IconContext.Provider value={{ color: '#101522' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            PLANT
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick}>
                            <NavItem>
                                <NavLinks to="/">
                                    About
                            </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/">
                                    Store
                            </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/">
                                    Cart
                            </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
