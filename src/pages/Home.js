import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";
import { Carousel, Card } from 'antd';
import Carousel1 from "../images/carousel1.png";
import Carousel2 from "../images/carousel2.png";
import Carousel3 from "../images/carousel3.png";
import productsImg from "../images/products.png";
import tee1 from "../images/tee1.png";
import hoodie3 from "../images/hoodie3.png";
import pad1 from "../images/pad1.png";
import slides1 from "../images/slides1.png";
import softwares from "../images/softwares.png";
import tools from "../images/tools.png";
import soon from "../images/soon.png";


const carousel = [Carousel1,Carousel2,Carousel3];
const catCard = [pad1, tee1,hoodie3,slides1];
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
    </div>
  </div>
  </>
)
}

export default Home;
