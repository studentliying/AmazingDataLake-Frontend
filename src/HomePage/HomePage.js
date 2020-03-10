import React from 'react';
import {Button} from 'rsuite';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
        <Button color="red" appearance="ghost">Hello world</Button>
    );
  }

}


export default HomePage;