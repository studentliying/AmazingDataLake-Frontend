/**
 * Created by 励颖 on 2020/3/30.
 */
import React from 'react';
import {Layout,  Breadcrumb, Row, Col, Card} from 'antd';
import { Link } from "react-router-dom";
import Sidebar from '../Components/Navigation/Sidebar.js';
import CustomHeader from '../Components/Navigation/Header.js';

const {Footer, Content, Sider} = Layout;

class VisualPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render(){
    return(
        <Layout>
          <CustomHeader/>
          <Layout>
            <Sider>
              <Sidebar selected="2"/>
            </Sider>
            <Content>
              <Breadcrumb style={{ margin: '16px 60px', fontSize:'16px' }}>
                <Breadcrumb.Item>
                  <Link to="/" />
                  主页
                </Breadcrumb.Item>
                <Breadcrumb.Item>知识展示</Breadcrumb.Item>
              </Breadcrumb>

            </Content>
          </Layout>
          <Footer style={{marginLeft:'40%'}}>数据湖知识管理平台 by ying.li in 2020</Footer>
        </Layout>
    );
  }

}


export default VisualPage;