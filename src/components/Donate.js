import { Card, Button, Modal } from 'antd';
import React, { useState } from 'react';
import "./Donate.css";
import donateImg from "../images/logo1.png";



const Donate = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" className='login' style={{borderRadius: 20,}} onClick={showModal}>
        Donate
      </Button>
      <Modal
        visible={visible}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        cover={donateImg}
        footer={[
          <Button
            key="link"
            href="https://github.com/sponsors/straight-code?frequency=one-time&sponsor=straight-code"
            type="primary"
            loading={loading}
            onClick={handleOk}

          >
            Sponsor on Github
          </Button>,
        ]}
      >
         <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="Donate to straight-code" src={donateImg} />}
  >
  Thank you for your contributing!
  </Card>
      </Modal>
    </>
  );
};

export default Donate;