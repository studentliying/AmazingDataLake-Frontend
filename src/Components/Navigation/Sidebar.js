/**
 * Created by 励颖 on 2020/3/11.
 */
import React from 'react';
import { Menu, Button } from 'antd';
import { CloudUploadOutlined, PartitionOutlined, DeploymentUnitOutlined, AreaChartOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '../../../node_modules/@ant-design/icons/lib';
import '../../CSS/Sidebar.css';
const { SubMenu } = Menu;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  handleClick = e => {
    console.log('click ', e);
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render(){
    return(
        <div style={{ width: 256 }}>
          <Menu
              onClick={this.handleClick}
              style={{ backgroundColor:'#f0f5ff' }}
              defaultSelectedKeys={['4']}
              mode="inline"
              inlineCollapsed={this.state.collapsed}
          >
            <br/>
            <h1 style={{ height:'40px'}}/>
            <div style={{ height:'60px'}}>
              <Button  onClick={this.toggleCollapsed} style={{backgroundColor:'#f0f5ff', marginLeft:'16px' }}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
              </Button>
            </div>
            <Menu.Item key="1" style={{height:'60px'}} className="customMenuItem">
              <CloudUploadOutlined  style={{ fontSize:'20px'}}/>
              &nbsp;&nbsp;&nbsp;
              <span style={{ fontSize:'20px', fontWeight:'700'}}>数据采集</span>
            </Menu.Item>
            <Menu.Item key="2" style={{height:'60px'}} className="customMenuItem">
              <PartitionOutlined style={{ fontSize:'20px'}}/>
              &nbsp;&nbsp;&nbsp;
              <span style={{ fontSize:'20px', fontWeight:'700'}}>知识抽取</span>
            </Menu.Item>
            <Menu.Item key="3" style={{height:'60px'}} className="customMenuItem">
              <DeploymentUnitOutlined style={{ fontSize:'20px'}}/>
              &nbsp;&nbsp;&nbsp;
              <span style={{ fontSize:'20px', fontWeight:'700'}}>主题划分</span>
            </Menu.Item>
            <Menu.Item key="4" style={{height:'60px'}} className="customMenuItem">
              <AreaChartOutlined style={{ fontSize:'20px'}}/>
              &nbsp;&nbsp;&nbsp;
              <span style={{ fontSize:'20px', fontWeight:'700'}}>状态监控</span>
            </Menu.Item>
            <h1 style={{ height:'100px'}}/>
          </Menu>
        </div>
    );
  }

}


export default Sidebar;