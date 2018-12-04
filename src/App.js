import React, { Component } from 'react';
import Sidebar from './templating/Sidebar';
import Content from './templating/Content';
import Footer from './templating/Footer';
import resume from './resume.json';

class App extends Component {
  componentDidMount(){
    document.title="Resume of "+resume.developer.name;
  }

  render() {
    return (
        <div>
          <div className="wrapper">
            <Sidebar resume={resume}/>
            <Content resume={resume}/>
          </div>
          <Footer resume={resume}/>
        </div>
    );
  }
}

export default App;
