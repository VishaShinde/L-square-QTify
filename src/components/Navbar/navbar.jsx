import React from "react";
import Button from "../Button/button";
import Search from "../Search/search";
import QtifyLogo from "../Logo/Logo";
import styles from "./navbar.module.css"
import { Link } from "react-router-dom";

function Navbar({searchData}){
  return(
    <nav className={styles.navbar} >
        <Link to="/">
          <QtifyLogo />
        </Link>
        <Search  
          placeholder={"Search a album of your choice"} 
          searchData={searchData}/>
        <Button>Give Feedback</Button>
    </nav>
  )
}

export default Navbar;