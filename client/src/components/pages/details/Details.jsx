import React, { useState} from 'react';
import './Details.css'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdNotInterested } from "react-icons/md";


const Details = () => {
  const [productImage, setProductImage] = useState(
    'https://da.lnwfile.com/_/da/_raw/lo/8i/ez.jpg'
  );

  const handleImageClick = (newImageUrl) => {
    setProductImage(newImageUrl);
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #ddd',
    fontSize: '14px'
  };

  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#333'
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold'
  };

  const btnd1Style ={
    border: '1.5px solid #ddd',
    borderRadius: '25px',
    textAlign: 'center',
    padding: '0.45rem 0.8rem',
    outline: '0',
    marginRight: '0.2rem',
    marginBottom: '1rem',
    cursor: 'pointer',
    color: '#fff',
    background: '#256eff'
  };

  const btnd2Style ={
    border: '1.5px solid #ddd',
    borderRadius: '25px',
    textAlign: 'center',
    padding: '0.45rem 0.8rem',
    outline: '0',
    marginRight: '0.2rem',
    marginBottom: '1rem',
    cursor: 'pointer',
    color: '#fff',
    background: '#f64749'
  };


  return (
      <div className='small-containers single-product'>
        <div className='pic-row'>
          <div className='col-2'>
            <img src={productImage} width='100%' id='ProductImg' />
            <div className='small-img-row'>
              <div className='small-img-col'>
                <img
                  src='https://da.lnwfile.com/_/da/_raw/lo/8i/ez.jpg'
                  width='100%'
                  className='small-img'
                  onClick={() =>
                    handleImageClick(
                      'https://da.lnwfile.com/_/da/_raw/lo/8i/ez.jpg'
                    )
                  }
                />
              </div>
              <div className='small-img-col'>
                <img
                  src='https://da.lnwfile.com/_/da/_raw/rm/jn/qx.jpg'
                  width='100%'
                  className='small-img'
                  onClick={() =>
                    handleImageClick(
                      'https://da.lnwfile.com/_/da/_raw/rm/jn/qx.jpg'
                    )
                  }
                />
              </div>
              <div className='small-img-col'>
                <img
                  src='https://da.lnwfile.com/_/da/_raw/3w/is/7c.jpg'
                  width='100%'
                  className='small-img'
                  onClick={() =>
                    handleImageClick(
                      'https://da.lnwfile.com/_/da/_raw/3w/is/7c.jpg'
                    )
                  }
                />
              </div>
              <div className='small-img-col'>
                <img
                  src='https://da.lnwfile.com/_/da/_raw/w1/2s/ei.jpg'
                  width='100%'
                  className='small-img'
                  onClick={() =>
                    handleImageClick(
                      'https://da.lnwfile.com/_/da/_raw/w1/2s/ei.jpg'
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className='col-2'>
            <h1>MG JUSTICE GUNDAM</h1>
            <h4>4.7</h4>
            <h3>Gunpla Details</h3>
            <p>The Justice Gundam from "Gundam Seed' joins the Master Grade kit lineup from Bandai! 
              The Fatum-00's beam cannon base can be displayed in flight form without any parts swapping, 
              and the Fatum-00 can also be ridden by the Justice Gundam and displayed in flight! 
              
            </p>
            <ul>
              <li>Release_date: <span>07 April 2004</span></li>
              <li>Category: <span> [MG] MASTER GRADE</span></li>
              <li>Series: <span> Gundam Seed</span></li>
              <li>Heights: <span> 18 cm</span></li>
              <li>Number of Runners : <span>16</span></li>              
              <li>Cons: <span>becareful</span></li>
              <li>Decals: </li>
            </ul>
            <table style={tableStyle} classname="styled-table">
              <tr>
                <th style={thStyle}>Foil</th>
                <th style={thStyle}>Etching</th>
                <th style={thStyle}>Water</th>
              </tr>
              <tr>
                <td style={thTdStyle}><IoIosCheckmarkCircle class="checkmark-icon" /></td>
                <td style={thTdStyle}><IoIosCheckmarkCircle class="checkmark-icon" /></td>
                <td style={thTdStyle}><MdNotInterested class="not-interested-icon" /></td>
              </tr>
            </table>
            <div className="purchase-info">
              <button
                type="button"
                className="btn"
                style={btnd1Style}
              >
                Add to Collection
              </button>
              <button
                type="button"
                className="btn"
                style={btnd2Style}
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      Rating this gunpla
      </div>
  )
}

export default Details



