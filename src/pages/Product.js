import React from 'react';
import { Card } from 'antd';
import "./Product.css";
import Header from '../components/Header';
import { useLocation } from 'react-router';
import Purchase from '../components/Purchase';
import { Layout } from 'antd';
import Donate from '../components/Donate';



const {  Content, Footer  } = Layout;

const Product = () => {
  
  let {state: book} = useLocation();
  return (
<>
   <Layout>
    <Header style={{}}/>
  
  <Content
    className="site-layout"
    style={{
      padding: '0 10px',
      marginTop: 10,
    }}
  >
    <div className="site-layout-background"
      style={{
        padding: 24,
        minHeight: 380,
      }}
    >
      
  <div className="container">
  <Card

hoverable
style={{
width: 300,
borderRadius: 20,
padding:2,
}}
cover={<img alt="example" src={book.image} />}
>
    <div className="product-content">

      
      <div className="product-details">
        <h1>{book.name}</h1>
        <hr></hr>
        <p>
          Price:
          <span className="price"> ${book.price}</span>
        </p>
        <p>
          No Import Fees & Free Shipping Included
        </p>
      <hr/>
        <h3>About This Item</h3>
        <p>
          {book.about}
        </p>
      </div>
    </div>
    <div className="purchase-details">
      <Purchase book={book}/>
      </div>
</Card> 
</div>
 </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      shop.straight-code ©2022 Created by straight-code
      <br/>
      <br/>
      <Donate />
      <br/>
      <br/>
    </Footer>
  </Layout>
  </>
);
};

export default Product;
