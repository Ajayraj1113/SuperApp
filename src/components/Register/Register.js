import React from 'react'

import styles from "./Register.module.css";
import coverImage from "../../assets/images/cover.png.png"
import Button from "../Button/Button"

export default function Register() {
  return (
    <div className={styles.container}>
        <div>
            <div className={styles.bottom}>
                <p>Discover new things on SuperApp</p>
            </div>
            <img src={coverImage} alt="cover image of music" />
        </div>

        <div className={styles.body}>
            <p className={styles.super}>SuperApp</p>
            <p>Create a new Account</p>
            <p>
                Email <span style={{color:"green"}}>|</span> Google
            </p>

            <form>
                <input 
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                />

                {/* {errors.name ? (
                    <p className={styles.error}>{errors.name}</p>
                ) : (
                    <></>
                )} */}

                <input 
                    type="text"
                    name="userName"
                    placeholder="Enter your username"
                />
                <input 
                    type="text"
                    name="email"
                    placeholder="Email"
                />
                <input 
                    type="text"
                    name="mobile"
                    placeholder="Mobile"
                />
                <label>
                    <input 
                        type="checkbox"  
                        name="isAgreed"  
                    />
                    Share my registration data with Superapp
                </label>

                <Button />

                <footer className={styles.footer}>
                    <p>
                        By clicking on Sign up. you agree to Superapp
                        <span style={{ color: "green" }}>
                            {" "}
                            Terms and Conditions of Use
                        </span>
                    </p>
                    <p>
                        To learn more about how Superapp collects, uses,
                        shares and protects your personal data please head
                        Superapp
                        <span style={{ color: "green" }}>
                            {" "}
                            Privacy Policy
                        </span>
                    </p>
                </footer>
            </form>
        </div>
    </div>
  )
}
