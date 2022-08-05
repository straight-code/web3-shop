import { Button, message, Steps } from 'antd';
import React, { useState } from 'react';
import "../components/Ad.css"
import Ad1 from "../images/Ad1.mp4";
import Ad2 from "../images/Ad2.mp4";
import Ad3 from "../images/Ad3.mp4";

const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: "",
  },
  {
    title: 'Second',
    content: "",
  },
  {
    title: 'Last',
    content:"",
  },
];

const Ad = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>

      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Thank you for watching!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default Ad;