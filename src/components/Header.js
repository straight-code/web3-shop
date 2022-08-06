import { PageHeader, Button, Space } from 'antd';
import { useMoralis } from "react-moralis";
import { Link,  } from 'react-router-dom';
import './Header.css'
import str8 from "../images/logo.png";
import bg1 from "../images/bg1.png";
import {MenuOutlined} from "@ant-design/icons";


const categories = ["Hoodies", "Jumpers", "Tees",  "Accessories", "Softwares", "Tools", "Soon"];

const Header = () => {
  const { authenticate, account } = useMoralis();
  return(
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        extra={[
          <>
          <img src={str8} alt="logo" className="logo"></img> 
          <img src={bg1} alt="NEED METAMASK" className="logo"></img>
          <Button 
         className="login"
         key="1" 
         type="primary" 
         onClick={() => authenticate()}>
          {account ? <span>{account.slice(0,5)}...</span> : <span>LOGIN</span>}
          </Button>
          <Space size={"large"}></Space>
          </>
        ]}>
      </PageHeader>
      <div className="site-page-subheader-ghost-wrapper">
      <Space size={"middle"}>
        <Space size={"small"}  className="categories" style={{fontWeight:"bold"}}>
          <MenuOutlined
          />
        </Space>
        {categories.map((e) =>{
          return(
            <Link to="/categories" state={e} className="categories">
              {e}
            </Link>
          )

        })}
      </Space>
    </div>
    </div>
  )
}

export default Header;