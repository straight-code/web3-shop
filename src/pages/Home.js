import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import { Carousel } from 'antd';
import Carousel1 from "../images/carousel1.png";
import Carousel2 from "../images/carousel2.png";
import Carousel3 from "../images/carousel3.png";
import productsImg from "../images/products.png";
import tools from "../images/tools.png";
import Header from "../components/Header";
import 'antd/dist/antd.css';
import "antd/dist/antd.less";
import { Layout } from 'antd';
import { Card } from 'antd';
import Donate from '../components/Donate';



const { Content, Footer } = Layout;
const carousel = [Carousel1,Carousel2,Carousel3];


const Home = () => {

return(
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
        minHeight: 340,
      }}
    >
  <div className="container">
    <Carousel autoplay className="carousel">
    {carousel.map((e) => {
        return <img src={e} className="carousel-img" alt="carousel"></img>;
    })}
    </Carousel>
    <br/>
    
    <div className="site-card-wrapper">
      <div className='cards'>
      
          <Card title='' bordered={false}
          className="card"
        style={{
          marginLeft: 85,
        }}>
          <h1>Browse</h1>
          <img src={productsImg} alt="ALL" className="card-content"></img>
          <br />
          <Link to="/categories" state={"Hoodies"} className="link">
            Shop Now
          </Link>
          <br/>
          </Card>

          <Card title='' bordered={false}
          className="card"
        style={{
          marginLeft: 85,
        }}>
          <h1>Browse Tools</h1>
          <img src={tools} alt="ALL" className="card-content"></img>
          <br />
          <Link to="/categories" state={"Tools"} className="link">
            See more
          </Link>
          <br/>
          </Card>
      </div>
      </div>

   
</div>
<br/>
 
      
    
      
    
  </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      shop.straight-code ©2022 Created by <a style={{color: "#b700ff", fontWeight: 500,}} href='https://straight-code.xyz'>straight-code</a>
      <br/>
      <br/>
      <Donate className='login' style={{color:"#b700ff",}}/>
      <br/>
      <br/>
    </Footer>
  </Layout>

);
};

export default Home;
