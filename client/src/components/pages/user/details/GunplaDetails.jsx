import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdNotInterested } from "react-icons/md";
import { read } from '../../../../functions/product';
import { format } from 'date-fns';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const GunplaDetails = () => {
  const [value, setValue] = React.useState(null)
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


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

  useEffect(() => {
    const fetchProduct = async () => {
        try {
            const response = await read(id);
            setProduct(response.data);
            setLoading(false);
        } catch (err) {
            setError('Error fetching product data');
            setLoading(false);
        }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>{error}</div>;
  }

  if (!product) {
      return <div>Product not found</div>;
  }

  const formatReleaseDate = (dateString) => {
    if (!dateString) return '';
    return format(new Date(dateString), 'dd MMMM yyyy');
  };

  const renderRating = () => {
    if (product.totalrating === 0) {
      return " No Rating";
    } else {
      return <h4>
        {""+product.totalrating}</h4>;
    }
  };

  return (
      <div className='small-containers single-product'>
        <div className='pic-row'>
          {product.file && (
            <div>
                <img 
                    src={`${process.env.REACT_APP_API}/uploads/${product.file}`}
                    alt={product.name} 
                    style={{ width: '400px', height: 'auto', maxHeight: '600px' }} 
                />
            </div>
          )}
          <div className='col-2'>
            <h1>{product.name}</h1>
            <p>
                <Rating
                  name="simple-controlled"
                  value={product.totalrating}
                  readOnly
                />
            {renderRating()}
            </p>



            <h3>Gunpla Details</h3>
            <p>{product.detail}</p>

            <ul>
              <li>Release Date: <span>{formatReleaseDate(product.release_date)}</span></li>
              <li>Category: <span>{product.grade}</span></li>
              <li>Series: <span>{product.serie}</span></li>
              <li>Heights: <span>{product.height} cm</span></li>
              <li>Number of Runners : <span>{product.runner_num}</span></li>              
              <li>Cons: <span>{product.cons}</span></li>
              <li>Decals: </li>
            </ul>
            <table style={tableStyle} classname="styled-table">
              <tr> 
                <th style={thStyle}>Foil</th>
                <th style={thStyle}>Etching</th>
                <th style={thStyle}>Water</th>
              </tr>
              <tr>
                <td style={thTdStyle}>
                  {product.foil ? <IoIosCheckmarkCircle className="checkmark-icon" /> : <MdNotInterested className="not-interested-icon" />}
                </td>
                <td style={thTdStyle}>
                  {product.etching ? <IoIosCheckmarkCircle className="checkmark-icon" /> : <MdNotInterested className="not-interested-icon" />}
                </td>
                <td style={thTdStyle}>
                  {product.water ? <IoIosCheckmarkCircle className="checkmark-icon" /> : <MdNotInterested className="not-interested-icon" />}
                </td>
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

export default GunplaDetails



