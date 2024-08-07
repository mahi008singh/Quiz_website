import React from 'react'
import { Link } from 'react-router-dom'
import {RiDashboardFill, RiUploadLine} from 'react-icons/ri'
import { MdOutlinePermContactCalendar } from "react-icons/md";

import '../../css/adminCss/admin.css'

const Sidebar = (props) => {
  return (
    <>
        <section  className={(props.togle)?'sidebarContainer2':"sidebarContainer"}>
          <aside className='sidebarAside'>
            <h2>Navigation</h2>
            <br/>
              <Li Routeurl={'/admin/dashboard'}  heading={"Dashboard"} Icon={RiDashboardFill}/>
              <Li Routeurl={'/admin/upload'} heading={"Upload"} Icon={RiUploadLine}/>
              <Li Routeurl={'/admin/manage'} heading={"Messages"} Icon={MdOutlinePermContactCalendar}/>
          </aside>
        </section> 
    </>
  )
}
const Li=({heading,Routeurl,Icon})=>{
    return(
        <li className='Li'>
          <Link style={{color:"var(--secColor)"}} to={Routeurl}>
            <Icon style={{marginRight:"1rem"}}/>
             {heading}
          </Link>
        </li>
    )
}
export default Sidebar