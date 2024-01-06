import React from 'react'
import Sidebar from './Sidebar'
import '../../css/adminCss/admin.css'
const Dashboard = () => {
  return (
    <>
      <section className='dashContainer'>
        <Sidebar/>
        <main>
            <h2>dashboard</h2>
        </main>
      </section>
    </>
  )
}

export default Dashboard