/**
 * Created by 励颖 on 2020/3/12.
 */
import React from 'react';
import {Checkbox, Button, Card} from 'antd';
import {server} from '../../Utils/Constant';

const CheckboxGroup = Checkbox.Group;

class ExtractSingleMeta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedList: [],
      indeterminate: true,
      checkAll: false,
    };

  }

  onChange = checkedList => {
    console.log(checkedList);
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < this.props.parentHeader.length,
      checkAll: checkedList.length === this.props.parentHeader.length,
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? this.props.parentHeader : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };


  handleButtonClick = () => {
    console.log(this.props.parentData);
    let body_header = [];
    // let userChoiceIndex = 0;
    // let parentHeaderLength = this.props.parentHeader.length;
    // for (let i = 0; i < parentHeaderLength; i++) {
    //   let title = this.props.parentHeader[i];
    //   let flag = false;
    //   for (let j = userChoiceIndex; j <= i; j ++) {
    //     if(j < this.state.checkedList.length && this.state.checkedList[j] === title) {
    //       let body_item = {
    //         "id": i,
    //         "name": title,
    //         "exist": true
    //       };
    //       body_header.push(body_item);
    //       userChoiceIndex ++;
    //       flag = true;
    //     }
    //   }
    //   if (!flag) {
    //     let body_item = {
    //       "id": i,
    //       "name": title,
    //       "exist": false
    //     };
    //     body_header.push(body_item);
    //   }
    //
    // }
    let body = {
      "body_header": this.state.checkedList,
      "body_data": this.props.parentData
    };
    fetch(server + "/rdf/save_csv" , {
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
            this.props.parentHeader.length > 0 ?
                <div className="site-checkbox-all-wrapper">
                  <Checkbox
                      indeterminate={this.state.indeterminate}
                      onChange={this.onCheckAllChange}
                      checked={this.state.checkAll}
                  >
                    全选
                  </Checkbox>
                </div>
                : null
          }
          <br />
          <CheckboxGroup
              options={this.props.parentHeader}
              value={this.state.checkedList}
              onChange={this.onChange}
          />
          <br />
          <br />
          {
            this.props.parentHeader.length > 0 ?
                <Button onClick={this.handleButtonClick}>确定抽取</Button> : null
          }
        </Card>
    )}
}

export default ExtractSingleMeta;