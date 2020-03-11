/**
 * Created by 励颖 on 2020/3/11.
 */
import React from 'react';
import {Upload, Button, message, Tabs, Card} from 'antd';
import '../../CSS/Header.css';
import { UploadOutlined } from '../../../node_modules/@ant-design/icons/lib';

const { TabPane } = Tabs;


class UploadFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header:[],
      data:[]
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


  getTextInfo = (file) => {
    const reader = new FileReader();
    reader.readAsText(file, "gb2312");
    reader.onload = (result) => {
      let targetNum = result.target.result;
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

  render(){
    return(
        <Card title="数据采集"
              headStyle={{backgroundColor:"#d6e4ff", fontSize:'20px', fontWeight:'700'}}
              bodyStyle={{backgroundColor:"#f0f5ff"}}>
          <Tabs defaultActiveKey="1" style={{marginTop:"-8%"}} size="large">
            <TabPane tab="上传文件" key="1">
              <Upload name="file" onChange={this.onChange} beforeUpload={this.getTextInfo}
                      action='https://www.mocky.io/v2/5cc8019d300000980a055e76'>
                <Button>
                  <UploadOutlined /> 点击上传
                </Button>
                <p style={{padding:'8px 1px'}}>提示：可上传csv、json格式文件或图片</p>
              </Upload>
            </TabPane>
            <TabPane tab="连接数据库" key="2">
              <p>Todo: 数据库配置</p>
            </TabPane>
          </Tabs>,
        </Card>
    )}
}

export default UploadFile;