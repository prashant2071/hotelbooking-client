import { useState } from "react"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import './home.css'
import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/PropertyList"

const Home = () => {

  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList/>
        </div>

    </div>
  )
}

export default Home