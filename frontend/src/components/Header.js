import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiList, FiX } from "react-icons/fi";
import { AiFillBulb } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md"
import { BsSun } from "react-icons/bs"
const Header = () => {
    const navigate = useNavigate()
    const [sidebar, setSidebar] = useState(false);
    const togle = () => {
        setSidebar((prevState) => !prevState)
    }
    const [theme, setTheme] = useState(true)

    const changeTheme = () => {
        setTheme((prevState) => !prevState)
        document.body.classList.toggle("dark-theme")
    }

    const handelLogout = () => {
        localStorage.clear()
        navigate('/login')
        
    }
   let userAuth=localStorage.getItem("user")
    return (
        <div clasName="navdiv">
            <nav className="navb">
                <div className="logo">
                    <h1><AiFillBulb style={{ color: "#0eb582" }} />Prepquizz</h1>
                </div>
                <div className="header1">
                    <ul className={sidebar ? "sider-open" : "sider"}>
                        <li>
                            <NavLink className={'linker'} to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={'linker'} to='/Compete'>Compete</NavLink>
                        </li>
                        <li>
                            <NavLink className={'linker'} to='/Practice'>Practice</NavLink>
                        </li>

                        {
                            (userAuth)? <li><p style={{ cursor: "pointer" }} onClick={handelLogout}>logout</p></li>
                                : <>
                                    <li>
                                        <NavLink id='Signup' className={'linker'} to='/Signup'>Signup</NavLink>
                                    </li>
                                    {/* <li>
                                        <NavLink className={'linker'} to='/login'>Login</NavLink>
                                    </li> */}
                                </>
                        }
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <h2 onClick={changeTheme} style={{ display: "flex", alignItems: "center" }}>
                                {
                                    (theme) ? <MdDarkMode style={{ fontSize: "2rem", cursor: "pointer" }} />
                                        : <BsSun style={{ fontSize: "2rem", color: '#fff', cursor: "pointer" }} />
                                }
                            </h2>
                        </div>
                        <FiX style={{ fontSize: "2.5rem" }} onClick={togle} className="fa-xmark" />
                    </ul>
                </div>
                <div>
                    <FiList onClick={togle} className=" fa-bars-staggered" />
                </div>
            </nav>

        </div>
    )
}

export default Header;
