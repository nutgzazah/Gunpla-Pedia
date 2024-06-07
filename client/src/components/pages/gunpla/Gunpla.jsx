import React from 'react'
import Grades from '../../comp/grades/Grades'
import Topgunpla from '../topgunpla/Topgunpla'
import Newslide from '../../comp/newslider/Newslide'
import Recommends from '../../comp/recommends/Recommends'

const Gunpla = () => {
  return (
    <div>
      <Topgunpla/>
      <Newslide/>
      <Grades />
      <Recommends />
    </div>
  )
}

export default Gunpla
