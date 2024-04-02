import React, { useEffect, useState,useContext,useRef} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiList, FiX } from "react-icons/fi";
import { AiFillBulb } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md"
import { BsSun } from "react-icons/bs"
import { FaUser } from "react-icons/fa";
import { QuizContext } from '../Context/QuizHolder';
import {Home,Pickaxe,ClipboardCheck} from "lucide-react"

const Header = () => {

    // const {showuserName,setShowuserName}=useContext(QuizContext)

    const navigate = useNavigate()
    const [sidebar, setSidebar] = useState(false);
    const togle = () => {
        setSidebar((prevState) => !prevState)
    }

    const [isDarkTheme, setIsDarkTheme] = useState(() => {
       
        const storedTheme = localStorage.getItem('themePreference');
        return storedTheme === 'dark';
      });

      useEffect(() => {
       
        document.body.classList.toggle(`dark-theme`,isDarkTheme)
      }, [isDarkTheme]);
    
    
    const changeTheme = () => {
        
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        const storedTheme = localStorage.setItem('themePreference', newTheme ? 'dark' : 'light');
       
        togle();
    }

   let isLoggedIn=localStorage.getItem("loginToken")
   
    return (
        <div clasName="navdiv">
            <nav className="navb">
                <div className="logo">
                    <h1><AiFillBulb style={{ color: "#0eb582" }} />Prepquizz</h1>
                </div>
                <div className="header1">
                    <ul className={sidebar ? "sider-open" : "sider"}>
                   
                        <li>
                        <Home style={{color:"#0eb582" ,marginRight:"0.5rem"}} strokeWidth={1} /><NavLink onClick={togle} className={'linker'} to='/'>Home</NavLink>
                        </li>
                        <li>
                        <ClipboardCheck style={{color:"#0eb582" ,marginRight:"0.5rem"}} strokeWidth={1} />
                            <NavLink onClick={togle} className={'linker'} to='/Compete'>Compete</NavLink>
                        </li>
                        <li>
                          <Pickaxe style={{color:"#0eb582",marginRight:"0.5rem"}} strokeWidth={1}  />
                            <NavLink onClick={togle} className={'linker'} to='/Practice'>Practice</NavLink>
                        </li>
                        <p className='userLogo' style={{fontSize:"1.7rem", fontWeight:"600"}}>
                                <FaUser style={{marginRight:"0.5rem",color:"var(--tertiary)", cursor: "pointer"}}/>
                                {
                                    (localStorage.getItem('userName'))?
                                    <NavLink onClick={togle}  className={'userNameLi'} to={localStorage.getItem("admin")?'/admin/dashboard':'/profile'}>
                                    { JSON.parse(localStorage.getItem("userName"))}
                                     </NavLink>
                                     :
                                     <NavLink onClick={togle}  to='/login'>
                                        <span className='login_btn'>LOGIN</span>
                                     </NavLink>
                                }
                        </p>

                        {
                            (isLoggedIn)? 
                                <li>
                                    <NavLink onClick={togle} style={{ cursor: "pointer" }} id='Signup'  className={'linker'} to='/Logout'>logout</NavLink>
                                </li>
                                : <>
                                    <li>
                                        <NavLink  onClick={togle} id='Signup' className={'linker'} to='/Signup'>Signup</NavLink>
                                    </li>
                                    {/* <li>
                                        <NavLink className={'linker'} to='/login'>Login</NavLink>
                                    </li> */}
                                </>
                        }
                        <div className='theme' style={{ display: "flex", alignItems: "center" }}>
                            <h2 onClick={changeTheme} style={{ display: "flex", alignItems: "center" }}>
                                {
                                    (!isDarkTheme) ? <MdDarkMode style={{ fontSize: "2.5rem", cursor: "pointer" }} />
                                        : <BsSun style={{ fontSize: "2.5rem", color: '#fff', cursor: "pointer" }} />
                                }
                            </h2>
                        </div>
                        <FiX style={{ fontSize: "3rem" }} onClick={togle} className="fa-xmark" />
                    </ul>
                </div>
                <div>
                    <FiList onClick={togle} style={{marginTop:"1rem"}} className=" fa-bars-staggered" />
                </div>
            </nav>

        </div>
    )
}

export default Header;
