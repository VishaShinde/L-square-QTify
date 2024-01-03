import React from "react";
import styles from "./Herosection.module.css";

function HeroSection(){
    return(
        <div className={styles.heroSection}>
            <div>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousand podcast episode</h1>
            </div>
            <div>
                <img src={require("../../assets/HeroImg.png")} width={112} alt="headphones" />
            </div>
        </div>
    );
}

export default HeroSection;