import React from 'react'
import './Newbietech.css'
import Noob1 from './Noob1.jpg'
import { FaBook } from "react-icons/fa";

const Newbietech = () => {
  return (
    <div>
      <section id="noob">

        <div className='newbie-heading'>
            <span>For beginner you need to try</span>
            <h3>Techniques For Beginner </h3>
        </div>

        <div className='newbie-container'>
            <div className='noob-box'>
                <div className='noob-img'>
                    <img src={Noob1}></img>
                </div>

                <div className='noob-text'>
                    <span><FaBook/> : Article</span>
                    <a href='#' className='noob-title'>This for noob who want to be a builder</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Odio possimus atque dolor doloribus at sint dignissimos tempore, totam ducimus deserunt voluptate quisquam itaque culpa libero repellendus nam animi, fugit pariatur!</p>
                    <a href='#' className='noob-btn'>See more</a>
                </div>
            </div>

            <div className='noob-box'>
                <div className='noob-img'>
                    <img src={Noob1}></img>
                </div>

                <div className='noob-text'>
                    <span><FaBook/> : Article</span>
                    <a href='#' className='noob-title'>This for noob who want to be a builder</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Odio possimus atque dolor doloribus at sint dignissimos tempore, totam ducimus deserunt voluptate quisquam itaque culpa libero repellendus nam animi, fugit pariatur!</p>
                    <a href='#' className='noob-btn'>See more</a>
                </div>
            </div>

            <div className='noob-box'>
                <div className='noob-img'>
                    <img src={Noob1}></img>
                </div>

                <div className='noob-text'>
                    <span><FaBook/> : Article</span>
                    <a href='#' className='noob-title'>This for noob who want to be a builder</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Odio possimus atque dolor doloribus at sint dignissimos tempore, totam ducimus deserunt voluptate quisquam itaque culpa libero repellendus nam animi, fugit pariatur!</p>
                    <a href='#' className='noob-btn'>See more</a>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Newbietech
