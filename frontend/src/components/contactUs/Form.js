import React from 'react';
import styles from '../assets/css/Form.module.css'
import '../assets/css/global.css'
import '../assets/css/Form.module.css'


const Form = () => {
    return (    
        <div className={styles.form}>
            <form>
                <div className={styles.formComponent}>
                    <input type="text" id="name" name="name" className={styles.name} placeholder="Name" required />
                </div>
                <div className={styles.formComponent}>
                    <input type="email" id="email" placeholder="Email" className={styles.email} name="email" required />
                </div>
                <div className={styles.formComponent}>
                    <textarea id="message" name="message" placeholder="Message" rows="4" className={styles.message} required></textarea>
                </div>
                <div className={styles.formComponent}>
                    <input type="submit" id="submit" value="SUBMIT" className={styles.submit} />
                </div>
            </form>
        </div>
    );
};

export default Form;