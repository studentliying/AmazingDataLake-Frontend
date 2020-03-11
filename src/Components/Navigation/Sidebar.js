/**
 * Created by 励颖 on 2020/3/11.
 */
import React from 'react';
import { Menu, Button } from 'antd';
import { Link } from "react-router-dom";
import { CloudUploadOutlined, PartitionOutlined, DeploymentUnitOutlined, AreaChartOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '../../../node_modules/@ant-design/icons/lib';
import '../../CSS/Sidebar.css';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      selectedKey: 4
    };
  }

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      selectedKey: e["key"]
    })
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render(){
    return(
      <Menu
          onClick={this.handleClick}
          style={{ backgroundColor:'#f0f5ff', width:'256' }}
          selectedKeys={[this.state.selectedKey]}
          mode="inline"
          inlineCollapsed={this.state.collapsed}
      >
        <br/>
        <h1 style={{ height:'40px'}}/>
        <div style={{ height:'60px'}}>
          <Button  onClick={(e)=>{this.toggleCollapsed(e)}} style={{backgroundColor:'#f0f5ff', marginLeft:'16px' }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </Button>
        </div>
        <Menu.Item key="1" style={{height:'60px'}} className="customMenuItem" >
          <Link to="/data-collecting"/>
          <CloudUploadOutlined  style={{ fontSize:'20px', color:'#030852'}}/>
          &nbsp;&nbsp;&nbsp;
          <span style={{ fontSize:'20px', fontWeight:'700', color:'#030852'}}>知识抽取</span>
        </Menu.Item>
        <Menu.Item key="2" style={{height:'60px'}} className="customMenuItem">
          <PartitionOutlined style={{ fontSize:'20px', color:'#030852'}}/>
          &nbsp;&nbsp;&nbsp;
          <span style={{ fontSize:'20px', fontWeight:'700', color:'#030852'}}>主题划分</span>
        </Menu.Item>
        <Menu.Item key="3" style={{height:'60px'}} className="customMenuItem">
          <DeploymentUnitOutlined style={{ fontSize:'20px', color:'#030852'}}/>
          &nbsp;&nbsp;&nbsp;
          <span style={{ fontSize:'20px', fontWeight:'700', color:'#030852'}}>查询分析</span>
        </Menu.Item>
        <Menu.Item key="4" style={{height:'60px'}} className="customMenuItem">
          <AreaChartOutlined style={{ fontSize:'20px', color:'#030852'}}/>
          &nbsp;&nbsp;&nbsp;
          <span style={{ fontSize:'20px', fontWeight:'700', color:'#030852'}}>状态监控</span>
        </Menu.Item>
        <h1 style={{ height:'100px'}}/>
      </Menu>
    );
  }

}


export default Sidebar;