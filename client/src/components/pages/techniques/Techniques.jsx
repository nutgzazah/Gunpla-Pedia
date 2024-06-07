import React from 'react'
import Sliderhome from '../../comp/sliderhome/Sliderhome'
import Toptech from './toptech/Toptech'
import Carouseltech from './carouseltech/Carouseltech'
import './Techniques.css'
import Post from './post/Post'
import Newbietech from './newbietech/Newbietech'



const Techniques = () => {
  return (
    <div className='tech-page'>
      <Toptech />
      <h1 className='h1-tech'>Recommended Techniques</h1>
      <Carouseltech />
      <Post />
      <Newbietech />
    </div>
  )
}

export default Techniques
