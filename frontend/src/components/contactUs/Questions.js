import React from 'react';
import styles from '../assets/css/Questions.module.css'
import '../assets/css/global.css';
import '../assets/css/Questions.module.css'


const Questions = () => {
    return (    
        <div className={styles.questionsContainer}>
            <div id={styles.header} className={styles.questionComponent}>
                <h1>FAQ</h1>
            </div>
            <div id={styles.returns} className={styles.questionComponent}>
                <h2>Returns and Exchanges</h2>
            </div>
            <div id={styles.product} className={styles.questionComponent}>
                <h2>Product Questions</h2>
            </div>
            <div id={styles.shipping} className={styles.questionComponent}>
                <h2>Shipping</h2>
            </div>
        </div>
    );
};

export default Questions;