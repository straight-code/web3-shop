import { Input, Card, Button, Modal } from 'antd';
import React, { useState } from 'react';
import "./Donate.css";
import "../";
import donateImg from "../images/logo1.png";


const Donate = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [amount, setAmount] = useState("");

  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
        window.location.href="https://github.com/sponsors/straight-code";
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
 
  return (
    <>
      <Button type="primary" style={{background: "#b700ff", borderRadius: 5,}} onClick={showModal}>
        Donate
      </Button>
      <Modal
        visible={visible}
        title="Donate to straight-code"
        onOk={handleOk}
        onCancel={handleCancel}
        style={{maxWidth:"350px",}}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>

            Donate Now
          </Button>,
          
        ]}
      >
        <Card

hoverable
style={{
width: 300,
borderRadius: 20,
padding:2,
}}
cover={<img alt="example" src={donateImg} />}
>
<Input placeholder='Donation amount..' onChange={(value) => setAmount(value.target.value)}></Input>
</Card> 
      </Modal>
    </>
  );
};

export default Donate;