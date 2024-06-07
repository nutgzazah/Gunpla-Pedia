import React from 'react'
import Acside from '../../comp/acside/Acside'
import './Account.css'
import LOGO from '../../../assets/LOGO.png'
import { IoHeartCircleOutline } from "react-icons/io5";

const Account = () => {
  return (
    <div className='profile_body'>
      <div class="profile_card">
        <div class="img-avatar">
          <img src= {LOGO}/>
        </div>
        <div class="card-text">
          <div class="portada">
          </div>
          <div class="title-total">   
            <div class="title"><a href='/collection'><IoHeartCircleOutline /></a></div>
            <h2>Amuro Ray</h2>
        <div class="desc">This is your profile passport, Please show this card to use & visit this website.</div>
        <div class="descr"><b>Email : </b>plakaoyes@gmail.com</div>
        <div class="descr">You have 9 gunpla</div>
        
        <div class="actions">
          <button className='btnc1'>Edit profile</button>
          <button className='btnc2'>Change password</button>
        </div></div>
        </div>
    </div>
  </div>
  )
}

export default Account
