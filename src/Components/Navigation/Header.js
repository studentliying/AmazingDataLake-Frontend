/**
 * Created by 励颖 on 2020/3/11.
 */
import React from 'react';
import {Menu} from 'antd';
import { Link } from "react-router-dom";
import '../../CSS/Header.css';
import { UserOutlined, SettingOutlined } from '../../../node_modules/@ant-design/icons/lib';

class CustomHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }


  render(){
    return(
        <Menu style={{ lineHeight: '70px', backgroundColor:'#030852'}}  mode="horizontal">
          <Link to="/" style={{padding:'22px 20px', fontSize:'30px', fontWeight:"700", color:"white", letterSpacing:"4px"}}>
            数据湖知识管理平台
          </Link>
          <Menu.Item style={{color:'white', marginLeft:'65%'}}>
            <UserOutlined  style={{fontSize:'18px'}}/>
            <span style={{fontSize:'16px'}}>
              登录
            </span>
          </Menu.Item>
          <Menu.Item style={{color:'white'}} >
            <SettingOutlined style={{fontSize:'18px'}}/>
            <span style={{fontSize:'16px'}}>
              设置
            </span>
          </Menu.Item>
        </Menu>
    )}
}

export default CustomHeader;