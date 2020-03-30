import React from 'react';
import {Layout} from 'antd';
import Sidebar from '../Components/Navigation/Sidebar.js';
import CustomHeader from '../Components/Navigation/Header.js';

const {Sider, Footer} = Layout;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <Layout>
          <CustomHeader/>
          <Layout>
            <Sider >
              <Sidebar selected="1"/>
            </Sider>

          </Layout>
          <Footer style={{marginLeft:'40%'}}>数据湖知识管理平台 by ying.li in 2020</Footer>
        </Layout>

    );
  }

}


export default HomePage;