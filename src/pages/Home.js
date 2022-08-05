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
import Ad from '../components/Ad';
import Ad1 from "../images/Ad1.mp4";
import Ad2 from "../images/Ad2.mp4";
import Ad3 from "../images/Ad3.mp4";

import tee1 from "../images/tee1.png";
import hoodie3 from "../images/hoodie3.png";
import pad1 from "../images/pad1.png";
import slides1 from "../images/slides1.png";
import softwares from "../images/softwares.png";
import tools from "../images/tools.png";
import soon from "../images/soon.png";



const { Content, Footer } = Layout;
const carousel = [Carousel1,Carousel2,Carousel3];

const ad = [Ad1, Ad2, Ad3];


const tabList = [
  {
    key: 'tab1',
    tab: 'Softwares',
  },
  {
    key: 'tab2',
    tab: 'Tools',
  },
];
const contentList = {
  tab1: <p>
    These are some softwares that straight-code supports. 
    <br/>
    Coming Soon
    </p>,
  tab2: <p>
    This are some tools straight-code provides. 
    <br/>
    Coming Soon
  </p>,
};



const catCard = [pad1, tee1,hoodie3,slides1];

const Home = () => {
  const [activeTabKey1, setActiveTabKey1] = useState('tab1');
  const [activeTabKey2, setActiveTabKey2] = useState('tab2');

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };

return(
  <Layout>
    <Header style={{}}/>
  <Content
    className="site-layout"
    style={{
      padding: '0 50px',
      marginTop: 64,
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
          <Link to="/categories" state={"Hoodies"} className="link">
            See more
          </Link>
          <br/>
          </Card>
      </div>
      </div>

   
</div>
<br/>
<br/>
<Card
        style={{
          width: '100%',
          className: "extra"
        }}
        title=""
        extra={<a href="https://straight-code.xyz/services/index.html">More</a>}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={(key) => {
          onTab1Change(key);
        }}
      >
        {contentList[activeTabKey1]}

    <div className="cards">  
      <Card className="card">
        <h1>Browse</h1>
        <img src={productsImg} alt="ALL" className="card-content"></img>
        <br />
        <Link to="/categories" state={"Hoodies"} className="link">
          Shop Now
        </Link>
        <br/>
      </Card>
      <Card className="card">
        <h1>Tees</h1>
        <img src={tee1} alt="tee" className="card-content"></img>
        <br />
        <Link to="/categories" state={"Tees"} className="link">
          View Products
        </Link>
        <br/>
      </Card>
      <Card className="card">
        <h1>Hoodies</h1>
        <img src={hoodie3} alt="Hoodies" className="card-content"></img>
        <br />
        <Link to="/categories" state={"Hoodies"} className="link">
          View Products
        </Link>
        <br/>
      </Card>
      <Card className="card">
        <h1>Accessories</h1>
        <img src={slides1} alt="" className="card-content"></img>
        <br />
        <Link to="/categories" state={"Accessories"} className="link">
          View Products
        </Link>
        <br/>
      </Card>
      <Card className="card">
        <h1>Softwares</h1>
        <img src={softwares} alt="softwares" className="card-content"></img>
        <br />
        <Link to="/categories" state={"Softwares"} className="link">
          See more
        </Link>
        <br/>
      </Card>
      <Card className="card">
        <h1>Tools</h1>
        <img src={tools} alt="Womens" className="card-content"></img>
        <br />
        <Link to="/categories" state={"Tools"} className="link">
          See more
        </Link>
        <br/>
      </Card>
      <Card className="card">
        <h1>Coming Soon</h1>
        <img src={soon} alt="Coming soon" className="card-content"></img>
        <br />
        <Link to="/categories" state={"Soon"} className="link">
          See more
        </Link>
        <br/>
      </Card>
      <br />
      <br />
      <Ad 
      />
      <br/>
      <br/>
      <br/> 
      
    
      
    
  </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      shop.straight-code ©2022 Created by straight-code
    </Footer>
  </Layout>

);
};

export default Home;
