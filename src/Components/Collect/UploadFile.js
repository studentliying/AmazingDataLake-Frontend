/**
 * Created by 励颖 on 2020/3/11.
 */
import React from 'react';
import XLSX from 'xlsx';
import {Upload, Button, message, Tabs, Card, Input} from 'antd';
import {server} from '../../Utils/Constant';
import '../../CSS/Header.css';
import { UploadOutlined } from '../../../node_modules/@ant-design/icons/lib';

const { TabPane } = Tabs;


class UploadFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header:[],
      data:[],
      host: "localhost",
      port: "3306",
      user: "root",
      password: "",
      database: "",
    };
  }

  onChange = (info) => {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 上传成功`);

    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 上传失败`);
    }
  };

  tabChange = (e) => {
    console.log(e);
    this.props.passTabkey(e)
  };

  handleHostChange = (e) => {
    this.setState({
      host: e.target.value,
    })
  };

  handlePortChange = (e) => {
    this.setState({
      port: e.target.value,
    })
  };

  handleUserChange = (e) => {
    this.setState({
      user: e.target.value,
    })
  };

  handlePasswdChange = (e) => {
    this.setState({
      password: e.target.value,
    })
  };

  handleDatabaseChange = (e) => {
    this.setState({
      database: e.target.value,
    })
  };

  getTextInfo = (file) => {
    const reader = new FileReader();
    reader.readAsText(file, "gb2312");

    let workbook;
    reader.onload = (e) => {
      let targetNum = e.target.result;
      workbook = XLSX.read(targetNum, {type: 'string'});

      console.log("workbook: ", workbook);
      let csvarry = targetNum.split("\r\n");
      let datas = [];
      let headers = csvarry[0].split(",");
      for (let i = 1; i < csvarry.length; i++) {
        let data = {};
        let temp = csvarry[i].split(",");
        for (let j = 0; j < temp.length; j++) {
          data[headers[j]] = temp[j];
        }
        datas.push(data);
      }
      this.props.passMetadata(headers, datas);
      this.setState({
        header: headers,
        data: datas,
      })
    };
    return true;
  };

  handleConnectDatabase = () =>{
    let body = {
      host: this.state.host,
      port: this.state.port,
      user: this.state.user,
      password: this.state.password,
      database: this.state.database
    };
    fetch(server + "/database/mysql" , {
      method: 'POST',
      body: JSON.stringify(body),
      mode: 'cors',
      header:{
        contentType:"application/json"
      }
    })
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          this.props.passDatabaseData(data);
          // for (let key in data){
          //   console.log(key, data[key] )
          // }
        })
      })
      .then(function (result) {
        console.log("result: ", result);
      })
  };

  render(){
    return(
        <Card title="数据采集"
              headStyle={{backgroundColor:"#d6e4ff", fontSize:'20px', fontWeight:'700'}}
              bodyStyle={{backgroundColor:"#f0f5ff"}}>
          <Tabs defaultActiveKey="1" style={{marginTop:"-8%"}} size="large" onChange={this.tabChange}>
            <TabPane tab="上传文件" key="1">
              <Upload name="file" onChange={this.onChange} beforeUpload={this.getTextInfo}
                      action='https://www.mocky.io/v2/5cc8019d300000980a055e76'>
                <br/>
                <Button>
                  <UploadOutlined /> 点击上传
                </Button>
                <p style={{padding:'8px 1px'}}>提示：可上传csv、json格式文件或图片</p>
              </Upload>
            </TabPane>
            <TabPane tab="连接数据库" key="2">
              <Input addonBefore="主机"
                     defaultValue="localhost"
                     onChange={this.handleHostChange}
                     style={{width:"40%", marginLeft:"15%"}}
              />
              <Input
                  addonBefore="端口"
                  defaultValue="3306"
                  style={{width:"27%"}}
                  onChange={this.handlePortChange}
              />
              <br />

              <Input
                  addonBefore="用户"
                  defaultValue="root"
                  onChange={this.handleUserChange}
                  style={{width:"67%", marginLeft:"15%"}}
              />
              <br />

              <Input.Password
                  addonBefore="密码"
                  onChange={this.handlePasswdChange}
                  style={{width:"67%", marginLeft:"15%"}}
              />
              <br />

              <Input
                  addonBefore="库名"
                  onChange={this.handleDatabaseChange}
                  style={{width:"67%", marginLeft:"15%"}}
              />
              <br/>
              <br/>
              <Button
                  onClick={this.handleConnectDatabase}
                  style={{width:"20%", marginLeft:"60%", backgroundColor:"#d6e4ff"}}>
                确认连接
              </Button>
            </TabPane>
          </Tabs>,
        </Card>
    )}
}

export default UploadFile;