import { useState } from 'react';
import Layout from '../components/Layout';
import { FaMale } from 'react-icons/fa';
import styles from '../styles/login.module.css';

export default function loginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email, password);
    }

    return (
       <Layout title={'Login page'}>
           <div className={styles.card}>
               <div className={styles.logo}>
                   <FaMale/>
               </div>
               <div className={styles.form}>
                   <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

                        <input type='submit' value='Login' className={styles.authBtn}/>
                   </form>
               </div>
           </div>
       </Layout> 
    )
}