import React from 'react';
import Sidebar from '../../Components/Navigation/Sidebar.js';
import CustomHeader from '../../Components/Navigation/Header.js';
import {Container, Content} from 'rsuite';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
        <div>
          <CustomHeader/>
          <Container>
            <Sidebar/>
            <Content/>
          </Container>
        </div>

    );
  }

}


export default HomePage;