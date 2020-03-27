/**
 * Created by 励颖 on 2020/3/12.
 */
import React from 'react';
import {Checkbox, Button, Card, Row, Col} from 'antd';
import {server} from '../../Utils/Constant';

const CheckboxGroup = Checkbox.Group;

class ExtractFileMeta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedList: [],
    };
  }

  onChangeCheck = (checkedList, key) => {
    let temp_list = this.state.checkedList;
    temp_list[key] = checkedList;
    this.setState({
      checkedList: temp_list,
    });
    console.log("checkedList: ", checkedList);
    console.log("key: ", key);
  };


  handleButtonClick = () => {
    let body = {
      "body_header": this.state.checkedList,
      "body_data": this.props.parentData,
      "body_filename": this.props.parentFilenames
    };
    fetch(server + "/rdf/from_csv" , {
      method: 'POST',
      body: JSON.stringify(body),
      mode: 'cors',
      header:{
        contentType:"application/json"
      }
    })
      .then(function (response) {
        console.log("response: ", response);
      })
      .then(function (result) {
        console.log("result: ", result);
      })
  };

  handleMultiCard = () =>{
    let cards = [];
    for (let i = 0; i < this.props.parentHeader.length; i++) {
      this.state.checkedList.push([]);
      cards.push(
            <Col span={7}>
              <Card title={this.props.parentFilenames[i]} bordered={false}>
                <CheckboxGroup
                    options={this.props.parentHeader[i]}
                    value={this.state.checkedList[i]}
                    onChange={(checkedList)=>{this.onChangeCheck(checkedList, i)}}
                />
              </Card>
              <br/>
            </Col>
      );
      cards.push(
          <Col span={1}/>
      )
    }

    return cards;
  };

  render(){
    return(
        <Card title="元数据抽取"
              headStyle={{backgroundColor:"#d6e4ff", fontSize:'20px', fontWeight:'700'}}
              bodyStyle={{backgroundColor:"#f0f5ff"}}>
          <Row>
            {
              this.props.parentHeader.length > 0 ? this.handleMultiCard() : null
            }
          </Row>
          <br/>
          <Row>
            {
              this.props.parentHeader.length > 0 ?
                  <Button onClick={this.handleButtonClick}>确定抽取</Button> : null
            }
          </Row>
        </Card>
    )}
}

export default ExtractFileMeta;