import React from 'react'
import { Link } from 'react-router-dom'
import {RiDashboardFill, RiUploadLine} from 'react-icons/ri'
import {FaMagento } from 'react-icons/fa'
import '../../css/adminCss/admin.css'

const Sidebar = () => {
  return (
    <>
        <section className='sidebarContainer'>
          <aside>
            <h3>Dashboard</h3>
            <br/>
              <Li Routeurl={'/admin/dashboard'}  heading={"Dashboard"} Icon={RiDashboardFill}/>
              <Li Routeurl={'/admin/upload'} heading={"Upload"} Icon={RiUploadLine}/>
              <Li Routeurl={'/admin/manage'} heading={"Manage"} Icon={FaMagento}/>
          </aside>
        </section>
    </>
  )
}
const Li=({heading,Routeurl,Icon})=>{
    return(
        <li className='Li'>
          <Link to={Routeurl}>
          <Icon/>
             {heading}
          </Link>
        </li>
    )
}
export default Sidebar