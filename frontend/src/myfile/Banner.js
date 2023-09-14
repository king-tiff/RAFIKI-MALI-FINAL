import React from 'react';
import './Style.css';
import woman from './Rafikimali-images/woman.png';
import savings from './Rafikimali-images/savings.png';
import invest from './Rafikimali-images/invest.png';
 // Adjust the path based on your project structure

const Banner = () => {
  return (
    // Rafiki mali banner
<div className="container">
<div className="row">
      <div className="col-sm-6 p-3">
        <div className="banner-wrapper">
          <div className="banner-header">
            <h1>Come, Save &amp; <br /> Invest with <br /><span className="text-color">RafikiMali</span></h1>
            <p className='fs-5 text-size-lg mt-5'>Presented as your unwavering and reliable financial partner, we facilitate the linking of investors with top-tier platforms.
              Our objective is to guarantee a smooth and straightforward pathway to a diverse range of the finest savings and investment prospects
              that are currently accessible.</p>
            <div className="getstarted">
              <button className="btn btn-success custom-btn">Get started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 p-3">
          <img src={woman} className="img-fluid" alt="Rafikimali"/>
        
      </div>
    </div>

{/* Savings banner */}

<div className="row">
      <div className="col-sm-6 p-3">
          <img src={savings} className="img-fluid" alt="Rafikimali"/>
      </div>
      <div className="col-sm-6 p-5 mt-5">
        <div className="banner-wrapper">
          <div className="banner-header">
            <p className='fs-5 text-size-lg'>Presented as your unwavering and reliable financial partner, we facilitate the linking of investors with top-tier platforms.
              Our objective is to guarantee a smooth and straightforward pathway to a diverse range of the finest savings and investment prospects
              that are currently accessible.</p>
            <div className="getstarted">
              <button className="btn btn-success custom-btn">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </div>


{/* Investment banner */}
<div className="row">
      <div className="col-sm-6 p-5 mt-5">
        <div className="banner-wrapper">
          <div className="banner-header">
            <p className='fs-5 text-size-lg'>Presented as your unwavering and reliable financial partner, we facilitate the linking of investors with top-tier platforms.
              Our objective is to guarantee a smooth and straightforward pathway to a diverse range of the finest savings and investment prospects
              that are currently accessible.</p>
            <div className="getstarted">
              <button className="btn btn-success custom-btn">Get started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 p-3">
          <img src={invest} className="img-fluid" alt="Rafikimali"/>
      </div>
    </div>

    </div>


  );
};

export default Banner;
