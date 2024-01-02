import React, { useState } from 'react'
import styles from '../assets/css/Questions.module.css'
import '../assets/css/global.css'
import '../assets/css/Questions.module.css'

const Questions = () => {
    const [expandedQuestions, setExpandedQuestions] = useState(Array(6).fill(false));

    const toggleQuestion = (sectionIndex, questionIndex) => {
        const newExpandedQuestions = [...expandedQuestions];
        newExpandedQuestions[sectionIndex * 2 + questionIndex] = !newExpandedQuestions[sectionIndex * 2 + questionIndex];
        setExpandedQuestions(newExpandedQuestions);
    };

    return (
        <div className={styles.questionsContainer}>
            <div id={styles.header}>
                <h1>FAQ</h1>
            </div>

            {/* Returns and Exchanges */}
            <div id={styles.returns} className={styles.sectionComponent}>
                <h2>Returns and Exchanges</h2>
            </div>
            <div className={styles.questionComponent}>
                <p className={styles.questionText}>
                    What is the return policy?
                    <button className={styles.plusButton} onClick={() => toggleQuestion(0, 0)}>+</button>
                </p>
                {expandedQuestions[0] && (
                    <div>
                        <ul>
                            <li><p className={styles.answerText}>Your answer goes here.</p></li>
                        </ul>
                    </div>
                )}
                <hr />
                <p className={styles.questionText}>
                    What is the exchange policy?
                    <button className={styles.plusButton} onClick={() => toggleQuestion(0, 1)}>+</button>
                </p>
                {expandedQuestions[1] && (
                    <div>
                        <ul>
                            <li><p className={styles.answerText}>Your answer goes here.</p></li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Product Questions */}
            <div id={styles.product} className={styles.sectionComponent}>
                <h2>Product Questions</h2>
            </div>
            <div className={styles.questionComponent}>
                <p className={styles.questionText}>
                    Where is the order made and shipped from?
                    <button className={styles.plusButton} onClick={() => toggleQuestion(1, 0)}>+</button>
                </p>
                {expandedQuestions[2] && (
                    <div>
                        <ul>
                            <li><p className={styles.answerText}>Your answer goes here.</p></li>
                        </ul>
                    </div>
                )}
                <hr />
                <p className={styles.questionText}>
                    What is the care/wash instructions?
                    <button className={styles.plusButton} onClick={() => toggleQuestion(1, 1)}>+</button>
                </p>
                {expandedQuestions[3] && (
                    <div>
                        <ul>
                            <li><p className={styles.answerText}>Your answer goes here.</p></li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Shipping */}
            <div id={styles.shipping} className={styles.sectionComponent}>
                <h2>Shipping</h2>
            </div>
            <div className={styles.questionComponent}>
                <p className={styles.questionText}>
                    How will I know when I receive my order?
                    <button className={styles.plusButton} onClick={() => toggleQuestion(2, 0)}>+</button>
                </p>
                {expandedQuestions[4] && (
                    <div>
                        <ul>
                            <li><p className={styles.answerText}>Your answer goes here.</p></li>
                        </ul>
                    </div>
                )}
                <hr />
                <p className={styles.questionText}>
                    What’s the shipping cost and policy?
                    <button className={styles.plusButton} onClick={() => toggleQuestion(2, 1)}>+</button>
                </p>
                {expandedQuestions[5] && (
                    <div>
                        <ul>
                            <li><p className={styles.answerText}>Your answer goes here.</p></li>
                        </ul>
                    </div>
                )}
                <hr />
            </div>
        </div>
    );
};

export default Questions;