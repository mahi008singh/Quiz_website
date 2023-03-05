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
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Compete'>Compete</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Practice'>Practice</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Signup'>Signup</NavLink>
                        </li>
                        <FiX onClick={togle} className="fa-xmark"/>
                    </ul>
                </div>
                <div>
                    <FiList onClick={togle} className="fa-solid fa-bars-staggered"/>
                </div>
            </nav>
            
        </div>
    )
}

export default Header;
