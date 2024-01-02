import React from "react";
import Button from "../Button/button";
import Search from "../Search/search";
import {ReactComponent as QtifyLogo} from "../../assets/QtifyLogo.svg"
import styles from "./navbar.module.css"

function Navbar({searchData}){
  return(
    <nav >
        <a href="/"><QtifyLogo className={styles.logo}/></a>
        <Search className={styles.searchbar} placeholder={"Search a album of your choice"} searchData={searchData}/>
        <Button>Give Feedback</Button>
    </nav>
  )
}

export default Navbar;