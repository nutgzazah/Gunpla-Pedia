import React from 'react'
import './Signup.css'
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <div class = 'login'>
            <div class = 'wrapper'>
                <form action="">
                    <h1>Registration</h1>
                    <div class="input-box">
                        <input type="text" placeholder="Username" required/>
                        <i><FaUser /></i>
                    </div>
                    <div class="input-box">
                        <input type="Email" placeholder="Email" required/>
                        <i><MdEmail /></i>
                    </div>
                    <div class="input-box">
                        <input type="text" placeholder="Password" required/>
                        <i><IoIosLock /></i>
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="Confirm your password" required/>
                        <i><IoIosLock /></i>
                    </div>

                    <div class="remember-forget">
                        <label><input type = "checkbox"/>  I  accept all terms & conditions</label>
                    </div>

                    <button type="submit" class="btn">Login</button>

                    <div class = "register-link">
                        <p>Already have an account? <Link to="/login"><a href="#">Login</a></Link></p>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
