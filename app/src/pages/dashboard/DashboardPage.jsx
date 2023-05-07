import React from 'react'
import './dashboard.css'
import Main from "../../components/main/Main.jsx";
import SideBar from "../../components/sidebar/SideBar.jsx";

function DashboardPage() {
  return (
    <div className="container">
        <SideBar />
        <Main />
      </div>
  )
}

export default DashboardPage