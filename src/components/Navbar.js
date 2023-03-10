import React from 'react';
import styled,{css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';
import { useHistory } from "react-router-dom";

import login from './login1'

const Nav = styled.nav`
    height:60px;
    display:flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index:100;
    position:fixed;
    width:100%
`;

const NavLink = css`
 text-decoration:none;
 padding: 0 1rem;
 display: flex;
 height:100%;
 cursor:pointer;
 align-items:center;
 color:#fff;
`;

const Logo = styled(Link)`
 ${NavLink}
 font-style:italic;
`;

const MenuBars = styled(FaBars)`
 display:none;
 @media screen and (max-width: 768px){
     display:block;
     height: 40px;
     width: 40px;
     cursor: pointer;
     position: absolute;
     top: 0;
     right: 0;
     transform: translate(-50%, 25%);
 }
`;
const NavMenu = styled.div`
 display:flex;
 align-items:center;
 margin-right:-48px;

 @media screen and (max-width: 768px){
     display:none;
 }
`;
const NavMenuLinks = styled(Link)`
 ${NavLink}
`;
const NavBtn = styled.div`
 display:flex;
 margin-right:24px;
 align-items:center;

 @media screen and (max-width: 768px){
     display:none;
 }
`;

const Navbar = ({toggle}) => {
    let history = useHistory();
    return (
        <Nav>
            <Logo to = '/'>ELIXR</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu >
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn onClick={()=>{
                history.push("/login")
            }}>
                
                    <Button primary="true">Sign In </Button>
                
            </NavBtn>
            
        </Nav>
    )
}

export default Navbar
