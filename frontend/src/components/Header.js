import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { FiList,FiX } from "react-icons/fi";
import {AiFillBulb  } from "react-icons/ai";

const Header = () => {
    const [sidebar,setSidebar]=useState(false);
    const togle=()=>{
        setSidebar((prevState)=>!prevState)
      } 
    return (
        <div clasName="navdiv">
            <nav className="navb">
                <div className="logo">
                    <h1><AiFillBulb style={{color:"#0eb582"}} />Prepquizz</h1>                                      
                </div>
                <div className="header1">
                    <ul className={sidebar?"sider-open":"sider"}>
                        <li>
                            <NavLink to='/' onClick={togle}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Compete' onClick={togle}>Compete</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Practice' onClick={togle}>Practice</NavLink>
                        </li>
                        <li id='Signup'>
                            <NavLink  to='/Signup' onClick={togle}>Signup</NavLink>
                        </li>
                        <FiX style={{fontSize:"2.5rem"}} onClick={togle} className="fa-xmark"/>
                    </ul>
                </div>
                <div>
                    <FiList onClick={togle} className=" fa-bars-staggered"/>
                </div>
            </nav>
            
        </div>
    )
}

export default Header;
