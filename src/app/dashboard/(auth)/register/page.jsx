"use client"
import Link from "next/link";
import styles from "./page.module.css"
import { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
    const [err, setErr] = useState(false)
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username, email, password
                }),
            });
            res.status === 201 && router.push("/dashboard/login?success=Acount has been created")
        } catch (error) {
            setErr(true)
        }
    }
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="username" className={styles.input} required/>
                <input type="email" placeholder="email" className={styles.input} required/>
                <input type="password" placeholder="password" className={styles.input} required/>
                <button className={styles.button}>Register</button>
            </form>
            {err && "something went wrong"}
            <Link href="/dashboard/login">Login with extesting account</Link>
        </div>
    );
}
 
export default Register;