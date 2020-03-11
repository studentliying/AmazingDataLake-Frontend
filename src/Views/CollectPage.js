/**
 * Created by 励颖 on 2020/3/11.
 */
import React from 'react';
import {Layout,  Breadcrumb, Row, Col, Card} from 'antd';
import { Link } from "react-router-dom";
import Sidebar from '../Components/Navigation/Sidebar.js';
import CustomHeader from '../Components/Navigation/Header.js';
import UploadFile from '../Components/File/UploadFile.js';

const {Footer, Content, Sider} = Layout;

class CollectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
        <Layout>
          <CustomHeader/>
          <Layout>
            <Sider>
                <Sidebar/>
            </Sider>
            <Content>
              <Breadcrumb style={{ margin: '16px 60px', fontSize:'16px' }}>
                <Breadcrumb.Item>
                  <Link to="/" />
                    主页
                </Breadcrumb.Item>
                <Breadcrumb.Item>知识抽取</Breadcrumb.Item>
              </Breadcrumb>
              <Row>
                <Col span={1} />
                <Col span={8} >
                  <UploadFile/>
                </Col>
                <Col span={1} />
                <Col span={12} >
                  <Card title="元数据抽取"
                        headStyle={{backgroundColor:"#d6e4ff", fontSize:'20px', fontWeight:'700'}}
                        bodyStyle={{backgroundColor:"#f0f5ff"}}>
                  </Card>
                </Col>
              </Row>
            </Content>
          </Layout>
          <Footer style={{marginLeft:'40%'}}>数据湖知识管理平台 by ying.li in 2020</Footer>
        </Layout>
    );
  }

}


export default CollectPage;