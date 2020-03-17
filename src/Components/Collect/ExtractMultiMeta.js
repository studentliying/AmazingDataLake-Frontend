/**
 * Created by 励颖 on 2020/3/17.
 */
import React from 'react';
import {Checkbox, Button, Card, Row, Col, Divider} from 'antd';
import {server} from '../../Utils/Constant';

const CheckboxGroup = Checkbox.Group;

class ExtractMultiMeta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedList: [],
    };

  }

  onFirstChange = (checkedList) => {
    console.log(checkedList);
    let temp_list = this.state.checkedList;
    temp_list[0] = checkedList;
    this.setState({
      checkedList: temp_list,
    });
  };

  onSecondChange = (checkedList) => {
    console.log(checkedList);
    let temp_list = this.state.checkedList;
    temp_list[1] = checkedList;
    this.setState({
      checkedList: temp_list,
    });
  };

  onThirdChange = (checkedList) => {
    console.log(checkedList);
    let temp_list = this.state.checkedList;
    temp_list[2] = checkedList;
    this.setState({
      checkedList: temp_list,
    });
  };

  onFourthChange = (checkedList) => {
    console.log(checkedList);
    let temp_list = this.state.checkedList;
    temp_list[3] = checkedList;
    this.setState({
      checkedList: temp_list,
    });
  };

  handleButtonClick = () => {
    let body = {
      tables: this.props.tables,
      columns: this.state.checkedList
    };
    fetch(server + "/rdf/save_mysql" , {
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

  render(){
    return(
        <Card title="元数据抽取"
              headStyle={{backgroundColor:"#d6e4ff", fontSize:'20px', fontWeight:'700'}}
              bodyStyle={{backgroundColor:"#f0f5ff"}}>
          {
            this.props.tables.length > 0 ?
                <div className="site-checkbox-all-wrapper">
                  <Row>
                    <Col span={8}>
                      <p style={{fontSize:"18px", fontWeight:"700"}}>Table {this.props.tables[0]}</p>
                    </Col>
                  </Row>
                  <br/>
                  <Row>
                    <Col span={2}/>
                    <Col span={22}>
                      <CheckboxGroup
                          options={this.props.columns[0]}
                          value={this.state.checkedList[0]}
                          onChange={this.onFirstChange}
                      />
                    </Col>
                  </Row>
                  <br/>
                  <Row>
                    <Col span={8}>
                      <p style={{fontSize:"18px", fontWeight:"700"}}>Table {this.props.tables[1]}</p>
                    </Col>
                  </Row>
                  <br/>
                  <Row>
                    <Col span={2}/>
                    <Col span={22}>
                      <CheckboxGroup
                          options={this.props.columns[1]}
                          value={this.state.checkedList[1]}
                          onChange={this.onSecondChange}
                      />
                    </Col>
                  </Row>
                  <br/>
                  <Row>
                    <Col span={8}>
                      <p style={{fontSize:"18px", fontWeight:"700"}}>Table {this.props.tables[2]}</p>
                    </Col>
                  </Row>
                  <br/>
                  <Row>
                    <Col span={2}/>
                    <Col span={22}>
                      <CheckboxGroup
                          options={this.props.columns[2]}
                          value={this.state.checkedList[2]}
                          onChange={this.onThirdChange}
                      />
                    </Col>
                  </Row>
                  <br/>
                  <Row>
                    <Col span={8}>
                      <p style={{fontSize:"18px", fontWeight:"700"}}>Table {this.props.tables[3]}</p>
                    </Col>
                  </Row>
                  <br/>
                  <Row>
                    <Col span={2}/>
                    <Col span={22}>
                      <CheckboxGroup
                          options={this.props.columns[3]}
                          value={this.state.checkedList[3]}
                          onChange={this.onFourthChange}
                      />
                    </Col>
                  </Row>
                  <br />
                  <br />
                  {
                    this.props.tables.length > 0 ?
                        <Button onClick={this.handleButtonClick}>确定抽取</Button> : null
                  }
                </div>
              : null
            }
        </Card>
    )}
}

export default ExtractMultiMeta;