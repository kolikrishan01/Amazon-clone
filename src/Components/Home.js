import React from "react";
import Product from "./Product";
import banner from "../assats/banner.jpg";

import "../Style/Home.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../Style/Formens.css";

const Home = ({ print, handlClick, isLoading}) => {
  
  return (
    <>
      {isLoading ? (
        <div className="skeleton_container">
          <Skeleton height={450} baseColor="gray" className="skeleton" />
          
          <div className="formens_flex_box">
            <div className="formens_container" style={{ marginTop: "1.3rem" }}>
              <Skeleton width={150} height={150} />
              <div className="formens_details_price">
                <p>
                  <Skeleton width={270} />
                </p>
                <span>
                  <Skeleton width={100} />
                </span>
              </div>
              <div className="formens_icons">
                <Skeleton width={50} height={46} />
                <Skeleton width={130} height={46} />
              </div>
            </div>
            <div className="formens_container" style={{ marginTop: "1.3rem" }}>
              <Skeleton width={150} height={150} />
              <div className="formens_details_price">
                <p>
                  <Skeleton width={270} />
                </p>
                <span>
                  <Skeleton width={100} />
                </span>
              </div>
              <div className="formens_icons">
                <Skeleton width={50} height={46} />
                <Skeleton width={130} height={46} />
              </div>
            </div>
            <div className="formens_container" style={{ marginTop: "1.3rem" }}>
              <Skeleton width={150} height={150} />
              <div className="formens_details_price">
                <p>
                  <Skeleton width={270} />
                </p>
                <span>
                  <Skeleton width={100} />
                </span>
              </div>
              <div className="formens_icons">
                <Skeleton width={50} height={46} />
                <Skeleton width={130} height={46} />
              </div>
            </div>
            <div className="formens_container" style={{ marginTop: "1.3rem" }}>
              <Skeleton width={150} height={150} />
              <div className="formens_details_price">
                <p>
                  <Skeleton width={270} />
                </p>
                <span>
                  <Skeleton width={100} />
                </span>
              </div>
              <div className="formens_icons">
                <Skeleton width={50} height={46} />
                <Skeleton width={130} height={46} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="home_banner">
            <img src={banner} alt="Banner" />
          </div>
          <Product print={print} handlClick={handlClick} />
 
         
        </>
      )}
      
    </>
  );
};

export default Home;
