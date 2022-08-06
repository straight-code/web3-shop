import {Select, Button, Modal, Input} from 'antd'
import {ShoppingCartOutlined} from "@ant-design/icons";
import { useState } from 'react';
import { useMoralis } from 'react-moralis';


function Purchase({book}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [delivery, setDelivery] = useState("");
  const {Moralis, account } = useMoralis();

  const handleOk = async () => {

    // Get The Price of MATIC

    const options = {
      address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      chain: "eth"
    };
    const price = await Moralis.Web3API.token.getTokenPrice(options);
    const priceMatic = book.price / price.usdPrice;
    
    // Send Matic to book store owenr address

    const options1 = {
      type: "native", 
      amount: Moralis.Units.ETH(priceMatic), 
      receiver: "0xF389203e9E359206F88Da7c2f6c6c5F0b11280D1"
    }
    let result = await Moralis.transfer(options1)


    //Save Transaction Details to DB
    const Transaction = Moralis.Object.extend("Transaction");
    const transaction = new Transaction();

    transaction.set("Customer", account);
    transaction.set("Delivery", delivery);
    transaction.set("Product", book.name);

    transaction.save()
    setIsModalVisible(false);
  }

  return (
    <>
   
      <span className="price"> ${book.price}</span>
      <p>No Import Fees & Free Shipping Included</p>
      <h1 style={{ color: "green" }}> In Stock </h1>
      <Button
      className="login"
      style={{ width: "100%", marginTop: "10px" }}
      onClick={()=>setIsModalVisible(true)}
    >
      <ShoppingCartOutlined /> Buy Now
    </Button>
      <Modal
        title="Purchase Product"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={()=>setIsModalVisible(false)}
      >
        <div style={{ display: "flex" }}>
          <img src={book.image} alt="product" style={{ width: "200px" }}></img>
          <div>
            <h3>{book.name}</h3>
            <h2>${book.price}</h2>
            <h4>Delivery Address</h4>
            <Input onChange={(value) => setDelivery(value.target.value)}></Input>
          </div>
        </div>
      </Modal>
    
    </>
  )
}

export default Purchase
