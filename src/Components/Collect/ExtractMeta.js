/**
 * Created by 励颖 on 2020/3/12.
 */
import React from 'react';
import {Checkbox, Button, Card} from 'antd';
import {server} from '../../Utils/Constant';

const CheckboxGroup = Checkbox.Group;

class ExtractMeta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedList: this.props.parentHeader,
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
    console.log("hi");
    fetch(server + "/rdf/save" , {
      method: 'GET',
      mode: 'cors'
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

export default ExtractMeta;