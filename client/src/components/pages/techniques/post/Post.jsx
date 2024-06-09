import React from 'react'
import './Post.css'
import Test5 from './test5.jpg'
import { FaBook } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";

const post = () => {
  return (
    <div>
      <div className='posts clearfix'>
        <div className='main-posts'>
            <h1 className='recently-post-title'>All Techniques</h1>
            <div className='post'>
                <img src= {Test5} className='posts-image'/>
                <div className='posts-preview'>
                    <h1 className='head-preview'><a href='#'>Yeah bouyyyyy</a></h1>
                    <FaBook /> : Article
                    &nbsp;
                    <FaCalendar /> : Mar 11, 2019
                    <p className='preview-text'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      
                    </p>
                    <a href='#' className='btn-posts see-more'>See More</a>
                </div>
            </div>
            <div className='post'>
                <img src= {Test5} className='posts-image'/>
                <div className='posts-preview'>
                    <h1 className='head-preview'><a href='#'>Yeah bouyyyyy</a></h1>
                    <FaBook /> : Article
                    &nbsp;
                    <FaCalendar /> : Mar 11, 2019
                    <p className='preview-text'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                    <a href='#' className='btn-posts see-more'>See More</a>
                </div>
            </div>
            <div className='post'>
                <img src= {Test5} className='posts-image'/>
                <div className='posts-preview'>
                    <h1 className='head-preview'><a href='#'>Yeah bouyyyyy</a></h1>
                    <FaBook /> : Article
                    &nbsp;
                    <FaCalendar /> : Mar 11, 2019
                    <p className='preview-text'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                    <a href='#' className='btn-posts see-more'>See More</a>
                </div>
            </div>
            <div className='post'>
                <img src= {Test5} className='posts-image'/>
                <div className='posts-preview'>
                    <h1 className='head-preview'><a href='#'>Yeah bouyyyyy</a></h1>
                    <FaBook /> : Article
                    &nbsp;
                    <FaCalendar /> : Mar 11, 2019
                    <p className='preview-text'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                    <a href='#' className='btn-posts see-more'>See More</a>
                </div>
            </div>
        </div>
        <div className='sidebar-posts'>        
            <div className='section-search'>
                <h1 className='section-title'>Search</h1>
                <form>
                    <input type='text' name='search-posts' className='text-posts-input' placeholder='Search...'/>
                </form>
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

export default post
