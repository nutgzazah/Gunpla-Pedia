import React from 'react'
import './Blogtech.css'
import Artside1 from './artside1.jpg'
import B2 from './b2.jpg'

const Blogtech = () => {
  return (
    <div className='blog-wrapper'>
        <div className='posts clearfix'>
            <div className='main-posts single'>
                <h1 className='recently-post-title'>This is the title of post</h1>
                <img src={B2}/>
                <div className='posts-article'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Laudantium asperiores nam neque omnis doloremque quasi voluptate tempore cupiditate 
                        tempora maxime accusamus distinctio vitae rerum ad, sequi rem! Illo, totam tempora.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Laudantium asperiores nam neque omnis doloremque quasi voluptate tempore cupiditate 
                        tempora maxime accusamus distinctio vitae rerum ad, sequi rem! Illo, totam tempora.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Laudantium asperiores nam neque omnis doloremque quasi voluptate tempore cupiditate 
                        tempora maxime accusamus distinctio vitae rerum ad, sequi rem! Illo, totam tempora.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Laudantium asperiores nam neque omnis doloremque quasi voluptate tempore cupiditate 
                        tempora maxime accusamus distinctio vitae rerum ad, sequi rem! Illo, totam tempora.</p>
                </div>
            </div>

            <div className='sidebar-posts single'> 
                <div className='section-popular'>
                    <h1 className='pop-title'>Stay on trend</h1>
                    <div className='mini clearfix'>
                        <img src={Artside1}/>
                        <a href='#' className='title-mini'><h4>We have techniques for noob if you gods</h4></a>
                    </div>
                    <div className='mini clearfix'>
                        <img src={Artside1}/>
                        <a href='#' className='title-mini'><h4>We have techniques for noob if you gods</h4></a>
                    </div>

                    <div className='mini clearfix'>
                        <img src={Artside1}/>
                        <a href='#' className='title-mini'><h4>We have techniques for noob if you gods</h4></a>
                    </div>

                    <div className='mini clearfix'>
                        <img src={Artside1}/>
                        <a href='#' className='title-mini'><h4>We have techniques for noob if you gods</h4></a>
                    </div>

                </div>       
                <div className='section-topics'>
                    <h1 className='section-title'>All Techniques</h1>
                    <ul>
                        <li><a href='#'>Assembly Techniques</a></li>
                        <li><a href='#'>Painting Techniques</a></li>
                        <li><a href='#'>Cutline Techniques</a></li>
                    </ul>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Blogtech
