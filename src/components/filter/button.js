import React from 'react';

import styles from "../../styles/button.module.scss";
const Button = ({ text,dataCategory,isActive,onClick }) => {
       
    return (
        <button onClick={onClick} data-category={dataCategory} className={`${styles.button} ${isActive ? styles.button__active : ""} `}>
            {text}
        </button>
    );
};
export default Button;
