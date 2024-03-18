import React, { useState } from 'react'

import styles from "./Register.module.css";
import coverImage from "../../assets/images/cover.png"
import Button from "../Button/Button"
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [formData, setFormData] = useState({
        name: "",
        userName: "",
        email: "",
        mobile: "",
        isAgreed: false
    });

    // const [nameError, setNameError] = useState(false)
    const [errors, setErrors] = useState({
        name: "",
        userName: "",
        email: "",
        password: "",
        isAgreed: ""
    });

    const navigate = useNavigate()

    const handleChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)

        setFormData({ ...formData, [event.target.name]: event.target.value })
        console.log(formData);
    }

    const handleSubmit = (event) => {
        let isValid = true;

        event.preventDefault()
        if (!formData.name.trim().length){
            // setNameError(true)
            isValid = false;
            setErrors({ ...errors, name: "Name required"})
        }

        if (!formData.userName.trim().length){
            // setNameError(true)
            isValid = false;
            setErrors({ ...errors, userName: "UserName required"})
        }

        if (!formData.email.trim().length){
            // setNameError(true)
            isValid = false;
            setErrors({ ...errors, email: "Email required"})
        }

        if (!formData.mobile.trim().length){
            // setNameError(true)
            isValid = false;
            setErrors({ ...errors, mobile: "Mobile required"})
        }

        if (!formData.isAgreed){
            // setNameError(true)
            isValid = false;
            setErrors({ ...errors, isAgreed: "Terms required"})
        }

        if(isValid) {
            localStorage.setItem("userData", JSON.stringify(formData));
            navigate("/genre")
        }
    }

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
                    onChange={event => handleChange(event)}
                />

                {errors.name ? (
                    <p className={styles.error}>{errors.name}</p>
                ) : (
                    <></>
                )}

                <input 
                    type="text"
                    name="userName"
                    placeholder="Enter your username"
                    onChange={event => handleChange(event)}
                />

                {errors.userName ? (
                    <p className={styles.error}>{errors.userName}</p>
                ) : (
                    <></>
                )}

                <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={event => handleChange(event)}
                />

                {errors.email ? (
                    <p className={styles.error}>{errors.email}</p>
                ) : (
                    <></>
                )}

                <input 
                    type="tel"
                    name="mobile"
                    placeholder="Mobile"
                    onChange={event => handleChange(event)}
                />

                {errors.mobile ? (
                    <p className={styles.error}>{errors.mobile}</p>
                ) : (
                    <></>
                )}

                <label>
                    <input 
                        type="checkbox"  
                        name="isAgreed"
                        // onChange={event => handleChange(event)}
                        onChange={e =>
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.checked
                            })
                        }
                    />
                    Share my registration data with Superapp
                </label>

                {errors.isAgreed ? (
                    <p className={styles.error}>{errors.isAgreed}</p>
                ) : (
                    <></>
                )}

                <Button onClick={handleSubmit}/>

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
