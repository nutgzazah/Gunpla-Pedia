import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdNotInterested } from "react-icons/md";
import { read, rateProduct } from '../../../../functions/product';
import { format } from 'date-fns';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';  // Import useSelector to get auth details

const GunplaDetails = () => {
  const [value, setValue] = useState(null);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { user } = useSelector((state) => ({ ...state }));  // Get logged-in user details from Redux store

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await read(id);
        setProduct(response.data);


        // Check if the user has already rated this product
        if (response.data.ratings) {
          const userRating = response.data.ratings.find(r => r.postedby._id === user.user._id);
          if (userRating) {
            setValue(userRating.star);
          }
        }

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
      return "No Rating";
    } else {
      return <p>{product.totalrating + " Star"}</p>;
    }
  };

  const handleRatingChange = async (event, newValue) => {
    setValue(newValue);

    try {
      console.log('User token:', user.user.token);
      const response = await rateProduct({
        star: newValue,
        prodId: id
      }, user.user.token);

      setProduct(response.data);  // Update the product data with the new rating
    } catch (err) {
      console.error('Error submitting rating:', err);
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
          <div className='testgod'>
            <Rating
              name="read-only"
              value={product.totalrating}
              readOnly
            />
            <p>{renderRating()}</p>
          </div>

          <h3>Gunpla Details</h3>
          <p>{product.detail}</p>

          <ul>
            <li>Release Date: <span>{formatReleaseDate(product.release_date)}</span></li>
            <li>Category: <span>{product.grade}</span></li>
            <li>Series: <span>{product.serie}</span></li>
            <li>Heights: <span>{product.height} cm</span></li>
            <li>Number of Runners: <span>{product.runner_num}</span></li>
            <li>Cons: <span>{product.cons}</span></li>
            <li>Decals: </li>
          </ul>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd', fontSize: '14px' }} className="styled-table">
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center', backgroundColor: '#f2f2f2', fontWeight: 'bold', color: '#333' }}>Foil</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center', backgroundColor: '#f2f2f2', fontWeight: 'bold', color: '#333' }}>Etching</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center', backgroundColor: '#f2f2f2', fontWeight: 'bold', color: '#333' }}>Water</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center', backgroundColor: '#fff', color: '#333' }}>
                  {product.foil ? <IoIosCheckmarkCircle className="checkmark-icon" /> : <MdNotInterested className="not-interested-icon" />}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center', backgroundColor: '#fff', color: '#333' }}>
                  {product.etching ? <IoIosCheckmarkCircle className="checkmark-icon" /> : <MdNotInterested className="not-interested-icon" />}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center', backgroundColor: '#fff', color: '#333' }}>
                  {product.water ? <IoIosCheckmarkCircle className="checkmark-icon" /> : <MdNotInterested className="not-interested-icon" />}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="purchase-info">
            <button
              type="button"
              className="btn"
              style={{
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
              }}
            >
              Add to Collection
            </button>
            <div className='testgod2'>
              <p>Rate This Gunpla</p>
              <Rating
                name="controlled-rating"
                value={value}
                onChange={handleRatingChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GunplaDetails;
