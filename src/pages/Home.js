import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";
import { Carousel, Card } from 'antd';
import Carousel1 from "../images/carousel1.png";
import Carousel2 from "../images/carousel2.png";
import Carousel3 from "../images/carousel3.png";
import productsImg from "../images/products.png";
import tee1 from "../images/6.png";
import hoodie3 from "../images/5.png";
import acc2 from "../images/1.png";
import acc3 from "../images/4.png";
import softwares from "../images/softwares.png";
import tools from "../images/tools.png";
import others from "../images/others.png";
import soon from "../images/soon.png";


const carousel = [Carousel1,Carousel2,Carousel3];
const catCard = [acc2, tee1,hoodie3,acc3];
const Home = () => {

return(
  <>
  <div className="container">
    <Header/>
    <Carousel autoplay className="carousel">
    {carousel.map((e) => {
        return <img src={e} className="carousel-img" alt="carousel"></img>;
    })}
    </Carousel>
    <div className="cards">  
      <Card className="card">
        <h1>Browse</h1>
        <img src={productsImg} alt="ALL" className="card-content"></img>
        <br />
        <Link to="/categories" state={"Mens"} className="link">
          Shop Now
        </Link>
        <br/>
      </Card>
      <Card className="card">
        <h1>Mens</h1>
        <img src={tee1} alt="Womens" className="card-content"></img>
        <br />
        <Link to="/categories" state={"Womens"} className="link">
          View Products
        </Link>
        <br/>
      </Card>
      <Card className="card">
        <h1>Womens</h1>
        <img src={hoodie3} alt="Womens" className="card-content"></img>
        <br />
        <Link to="/categories" state={"Womens"} className="link">
          View Products
        </Link>
        <br/>
      </Card>
      <Card className="card">
        <h1>Accessories</h1>
        <img src={acc3} alt="" className="card-content"></img>
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
        <h1>Others</h1>
        <img src={others} alt="other" className="card-content"></img>
        <br />
        <Link to="/categories" state={"Others"} className="link">
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
    </div>
  </div>
  </>
)
}

export default Home;
