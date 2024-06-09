import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import './Recommends.css'

const Recommends = () => {
    const productsRef = useRef(null);
    let l = 0;
    let movePer = 25.34;
    let maxMove = 203;
  
    const handleResize = () => {
      const mob_view = window.matchMedia("(max-width: 768px)");
      if (mob_view.matches) {
        movePer = 50.36;
        maxMove = 504;
      } else {
        movePer = 25.34;
        maxMove = 203;
      }
    };
  
    const rightMover = () => {
      l = l + movePer;
      if (productsRef.current) {
        const productElements = productsRef.current.children;
        if (l > maxMove) {
          l = l - movePer;
        }
        for (const i of productElements) {
          i.style.left = '-' + l + '%';
        }
      }
    };
  
    const leftMover = () => {
      l = l - movePer;
      if (l <= 0) {
        l = 0;
      }
      if (productsRef.current) {
        const productElements = productsRef.current.children;
        for (const i of productElements) {
          i.style.left = '-' + l + '%';
        }
      }
    };
  
    React.useEffect(() => {
      window.addEventListener('resize', handleResize);
      handleResize(); // Initial check
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    
  return (
    <div className='main-recommend'>
      <header>
        <h1>Top Recommend Gunpla</h1>
        <p>
            <span onClick={leftMover}><FaArrowLeft /></span>
            <span onClick={rightMover}><FaArrowRight /></span>
        </p>
      </header>
      <section>
        <div className='products'>
            <picture>
                <img src='https://da.lnwfile.com/_/da/_raw/g7/bz/ap.jpg'/>
            </picture>
            <div className='recom-details'>
                <p>
                    <b>MG Justice Gundam</b><br></br>
                    <small>Seed</small>
                </p>
            </div>
            <div className='recom-button'>
                <p className='star'>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                </p>
                <button className = "recommend-button"><b>Add Collection</b></button>
            </div>
        </div>
        <div className='products'>
            <picture>
                <img src='https://da.lnwfile.com/_/da/_raw/g7/bz/ap.jpg'/>
            </picture>
            <div className='recom-details'>
                <p>
                    <b>MG Justice Gundam</b><br></br>
                    <small>Seed</small>
                </p>
            </div>
            <div className='recom-button'>
                <p className='star'>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                </p>
                <button className = "recommend-button"><b>Add Collection</b></button>
            </div>
        </div>
        <div className='products'>
            <picture>
                <img src='https://da.lnwfile.com/_/da/_raw/g7/bz/ap.jpg'/>
            </picture>
            <div className='recom-details'>
                <p>
                    <b>Product Three</b><br></br>
                    <small>New arrival</small>
                </p>
            </div>
            <div className='recom-button'>
                <p className='star'>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                </p>
                <button className = "recommend-button"><b>Add Collection</b></button>
            </div>
        </div>
        <div className='products'>
            <picture>
                <img src='https://da.lnwfile.com/_/da/_raw/g7/bz/ap.jpg'/>
            </picture>
            <div className='recom-details'>
                <p>
                    <b>Product Four</b><br></br>
                    <small>New arrival</small>
                </p>
            </div>
            <div className='recom-button'>
                <p className='star'>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                </p>
                <button className = "recommend-button"><b>Add Collection</b></button>
            </div>
        </div>
        <div className='products'>
            <picture>
                <img src='https://da.lnwfile.com/_/da/_raw/g7/bz/ap.jpg'/>
            </picture>
            <div className='recom-details'>
                <p>
                    <b>Product Five</b><br></br>
                    <small>New arrival</small>
                </p>
            </div>
            <div className='recom-button'>
                <p className='star'>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                </p>
                <button className = "recommend-button"><b>Add Collection</b></button>
            </div>
        </div>
        <div className='products'>
            <picture>
                <img src='https://da.lnwfile.com/_/da/_raw/g7/bz/ap.jpg'/>
            </picture>
            <div className='recom-details'>
                <p>
                    <b>Product Six</b><br></br>
                    <small>New arrival</small>
                </p>
            </div>
            <div className='recom-button'>
                <p className='star'>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                </p>
                <button className = "recommend-button"><b>Add Collection</b></button>
            </div>
        </div>
        <div className='products'>
            <picture>
                <img src='https://da.lnwfile.com/_/da/_raw/g7/bz/ap.jpg'/>
            </picture>
            <div className='recom-details'>
                <p>
                    <b>Product Seven</b><br></br>
                    <small>New arrival</small>
                </p>
            </div>
            <div className='recom-button'>
                <p className='star'>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                </p>
                <button className = "recommend-button"><b>Add Collection</b></button>
            </div>
        </div>
        <div className='products'>
            <picture>
                <img src='https://da.lnwfile.com/_/da/_raw/g7/bz/ap.jpg'/>
            </picture>
            <div className='recom-details'>
                <p>
                    <b>Product Eight</b><br></br>
                    <small>New arrival</small>
                </p>
            </div>
            <div className='recom-button'>
                <p className='star'>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                </p>
                <button className = "recommend-button"><b>Add Collection</b></button>
            </div>
        </div>
        <div className='products'>
            <picture>
                <img src='https://da.lnwfile.com/_/da/_raw/g7/bz/ap.jpg'/>
            </picture>
            <div className='recom-details'>
                <p>
                    <b>Product Nine</b><br></br>
                    <small>New arrival</small>
                </p>
            </div>
            <div className='recom-button'>
                <p className='star'>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                </p>
                <button className = "recommend-button"><b>Add Collection</b></button>
            </div>
        </div>
        <div className='products'>
            <picture>
                <img src='https://da.lnwfile.com/_/da/_raw/g7/bz/ap.jpg'/>
            </picture>
            <div className='recom-details'>
                <p>
                    <b>Product Ten</b><br></br>
                    <small>New arrival</small>
                </p>
            </div>
            <div className='recom-button'>
                <p className='star'>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                    <strong><FaStar /></strong>
                </p>
                <button className = "recommend-button"><b>Add Collection</b></button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Recommends
