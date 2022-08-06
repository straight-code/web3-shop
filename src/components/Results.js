import {Card } from 'antd';
import { Link } from 'react-router-dom';
import "./Results.css";
import {books} from "../books.js";
import React from 'react';


function Results({category }) {

 const bookCategory = books[category]
    console.log(bookCategory);
  return (
    <>
  {bookCategory.map((e,i) => {
    return (
      
      <div className='container'>
      <Card

      hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={e.image} />}
  >
      <div style={{ display: "flex" }}>
       
        <div>
          <p className="title">
            {e.name}
          </p>
          <h2> ${e.price}</h2>
          <p>
            Ships to Your Location
          </p>
      
          
            <Link to="/product" state={e} className="product-btn">
          See more</Link>
     
        </div>
      </div>
  
    </Card>
    </div>
    );
  })}
  </>
  )
}

export default Results