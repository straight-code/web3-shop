import React from "react";
import { Card, Layout } from "antd";
import { useLocation } from "react-router";
import Header from "../components/Header";
import { useState } from "react";
import Results from "../components/Results";
import "../pages/Categories.css";



const { Sider, Content, Footer  } = Layout;

const Categories = () => {
  const { state: category } = useLocation(0);


  return (
    <>
    <Layout>
    <Header style={{}}/>
  <Content
    className="site-layout"
    style={{
      padding: '0 50px',
      marginTop: 64,
    }}
  >
    <div
      className="site-layout-background"
      style={{
        padding: 24,
        minHeight: 400,
      }}
    >
      <div className="container">
        <div className="results-header">
          <span>Showing Products for </span>
          <span className="category">"{category}"</span>
        </div>

        <Layout>
 

          <Content
            theme="light"
            style={{ padding: "5px", backgroundColor: "white" }}
          >
            <h1 style={{fontSize:"30px"}}>RESULTS</h1>
    <Card>
      <Results category={category} />
    </Card>
            
          </Content>
        </Layout>
      </div>
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
    </>
  );
};

export default Categories;
