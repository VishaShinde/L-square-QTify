import React from "react";
import styles from "./Herosection.module.css";
import {ReactComponent as HeroImage} from "../../assets/HeroImg.svg"

function HeroSection(){
    return(
        <div className={styles.heroSection}>
            <div >
                <HeroImage/>
            </div>
        </div>
    );
}

export default HeroSection;