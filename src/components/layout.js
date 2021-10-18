import React from 'react';

import styles from "../styles/layout.module.scss"; 
export default ({ children })=> {
    return (
        
            <div className={styles.padding}>
                <div className={styles.wrapper}>
                    {children}
                </div>
            </div>
  
    );
}