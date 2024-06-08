import React, { useState } from 'react';

import Series from '../sidebar/Series'
import './Product.css'

const Product = ({result, handlechange}) => {
  return (
    <>
      <div className="gproduct-container">
      <section className="sidebar-container">
          <Series handleChange={handlechange}/>
      </section>
        {result}
      </div>
    </>
  )
}

export default Product