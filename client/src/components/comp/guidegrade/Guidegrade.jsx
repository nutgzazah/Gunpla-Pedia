import React from 'react';
import './Guidegrade.css';
import LOGO from '../../../assets/LOGO.png'
import Buttons from '../showcom/Buttons';

const Guidegrade = ({handleClick}) => {
  return (
    <>
        <div className="grade-container">
            <img src={LOGO} className="grade-image" />
            <div className="group-grade">
                <h2 className="grade-title">Grades</h2>
                <div className="grade-flex">
                    <Buttons onClickHandler={handleClick} value="" title="All Grades"/>
                    <Buttons onClickHandler={handleClick} value="SD" title="SD"/>
                    <Buttons onClickHandler={handleClick} value="HG" title="HG"/> 
                    <Buttons onClickHandler={handleClick} value="RG" title="RG"/>
                    <Buttons onClickHandler={handleClick} value="MG" title="MG"/>
                    <Buttons onClickHandler={handleClick} value="PG" title="PG"/>
                    <Buttons onClickHandler={handleClick} value="Mega Size" title="Mega Size"/> 
                </div>
            </div>
        </div>
    </>
  );
}

export default Guidegrade;