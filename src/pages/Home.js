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



const { Content, Footer } = Layout;
const carousel = [Carousel1,Carousel2,Carousel3];



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
          
        }}
        title=""
        extra={<a style={{color: "#b700ff"}} href="https://straight-code.xyz/services/index.html">More</a>}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={(key) => {
          onTab1Change(key);
        }}
      >
        {contentList[activeTabKey1]}
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
