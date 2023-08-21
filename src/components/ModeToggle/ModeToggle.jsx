"use client"
import { useContext } from "react";
import styles from "./modeToggle.module.css"
import { ThemeContext } from "@/context/ThemeContext";

const ModeToggle = () => {
    const {toggle, mode} = useContext(ThemeContext)
    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>&#9728;&#65039;</div>
            <div className={styles.icon}>&#127769;</div>
            <div className={styles.ball} style={mode === "light" ? {left: "2px"} : {right : "2px"}}/>
        </div>
    );
}
 
export default ModeToggle;