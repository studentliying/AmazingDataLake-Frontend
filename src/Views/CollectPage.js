/**
 * Created by 励颖 on 2020/3/11.
 */
import React from 'react';
import {Layout,  Breadcrumb, Row, Col, Card} from 'antd';
import { Link } from "react-router-dom";
import Sidebar from '../Components/Navigation/Sidebar.js';
import CustomHeader from '../Components/Navigation/Header.js';
import UploadFile from '../Components/Collect/UploadFile.js';
import ExtractFileMeta from '../Components/Collect/ExtractFileMeta.js';
import ExtractDatabaseMeta from "../Components/Collect/ExtractDatabaseMeta.js";

const {Footer, Content, Sider} = Layout;

class CollectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers:[],
      datas:[],
      filenames:[],
      tab_key: 1,
      tables:[],
      columns:[],
      single_data: true
    };
  }

  setTabKey = (key) => {
    this.setState({
      tab_key: key
    })
  };

  setDatabaseData = (data) => {
    console.log("database_data:", data)
    for (let table in data) {
      this.setState({
        tables: [...this.state.tables, table],
        columns: [...this.state.columns, data[table]]
      })
    }
    console.log("tables: ", this.state.tables);
    console.log("columns: ", this.state.columns);
  };

  setMetadata = (header, data, filenames)=> {
    this.setState({
      headers: header,
      datas: data,
      filenames: filenames
    })
    //   let new_header =  header.filter(function (s) {
    //     return s && s.trim();
    //   });
    //   this.setState({
    //     header: Array.from(new Set(this.state.header.concat(new_header))),
    //     data: this.state.data.concat(data)
    //   },()=>{
    //     console.log("data2: ", this.state.data)
    //   });
    // })

  };

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
                <Col span={20} >
                  <UploadFile passMetadata={(header, data, filenames)=> {this.setMetadata(header, data, filenames)}}
                              passTabkey={(key) => {this.setTabKey(key)}}
                              passDatabaseData={(data) => {this.setDatabaseData(data)}}
                  />
                </Col>
              </Row>
              <br/>
              <Row>
                <Col span={1}/>
                <Col span={20} >
                  {
                    this.state.tab_key === 1 ?
                        <ExtractFileMeta
                            parentHeader={this.state.headers}
                            parentData={this.state.datas}
                            parentFilenames={this.state.filenames}
                        />
                        :
                        <ExtractDatabaseMeta tables={this.state.tables} columns={this.state.columns}/>
                  }

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