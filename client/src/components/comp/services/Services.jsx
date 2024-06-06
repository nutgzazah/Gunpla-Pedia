import React from 'react'
import './Services.css'
import { IoIosInformationCircle } from "react-icons/io";
import { BsCollectionFill } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <section className='services'>
        <h2 className="heading-mean">Our <span>Services</span></h2>
        <div className='services-container'>
            <div className='services-box'>
                <IoIosInformationCircle style={{ fontSize: '7rem' }}/>
                <h3>Gunpla Information</h3>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, 
                    doloribus non numquam. Explicabo, laboriosam nisi reprehenderit?</p>
                <a href='#' className='btn-services'>See More</a>
            </div>

            <div className='services-box'>
                <BsCollectionFill style={{ fontSize: '7rem' }}/>
                <h3>Builder Collection</h3>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, 
                    doloribus non numquam. Explicabo, laboriosam nisi reprehenderit?</p>
                <a href='#' className='btn-services'>See More</a>
            </div>

            <div className='services-box'>
                <FaPaintBrush style={{ fontSize: '7rem' }}/>
                <h3>A&P Techniques</h3>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, 
                    doloribus non numquam. Explicabo, laboriosam nisi reprehenderit?</p>
                <a href='#' className='btn-services'>See More</a>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Services
