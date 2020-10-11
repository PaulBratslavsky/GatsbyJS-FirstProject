import React from "react"
import Navbar from "../Navbar"
import Footer from "../Footer"
import LayoutStyled from './style';
import "../../cssmodules/global.css";

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
     <Navbar/>
      <main>{children}</main>
      <Footer/>
    </LayoutStyled>
  )
}

export default Layout
