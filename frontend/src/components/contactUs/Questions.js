import React from 'react';
import styles from '../assets/css/Questions.module.css'
import '../assets/css/global.css';
import '../assets/css/Questions.module.css'


const Questions = () => {
    return (    
        <div className={styles.questionsContainer}>
            <div id={styles.header}>
                <h1>FAQ</h1>
            </div>
            <div id={styles.returns} className={styles.sectionComponent}>
                <h2>Returns and Exchanges</h2>
            </div>
            <div className={styles.questionComponent}>
                <p className={styles.questionText}>What is the return policy?</p>
                <hr/>
                <p className={styles.questionText}>What is the exchange policy?</p>
            </div>
            <div id={styles.product} className={styles.sectionComponent}>
                <h2>Product Questions</h2>
            </div>
            <div className={styles.questionComponent}>
                <p className={styles.questionText}>Where is the order made and shipped from?</p>
                <hr/>
                <p className={styles.questionText}>What is the care/wash instructions? </p>
            </div>
            <div id={styles.shipping} className={styles.sectionComponent}>
                <h2>Shipping</h2>
            </div>
            <div className={styles.questionComponent}>
                <p className={styles.questionText}>How will I know when I receive my order?</p>
                <hr/>
                <p className={styles.questionText}>What’s the shipping cost and policy?</p>
            </div>
        </div>
    );
};

export default Questions;