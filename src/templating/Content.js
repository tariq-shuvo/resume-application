/**
 * Created by Shuvo on 12/3/2018.
 */
import React, { Component } from 'react';
import Career from './Career';
import Experiences from './Experiences';
import Skills from './Skills';
import Project from './Projects';

class Content extends Component{
    render(){
        return(
            <div className="main-wrapper">
                <Career resume={this.props.resume}/>
                <Experiences resume={this.props.resume}/>
                <Project resume={this.props.resume}/>
                <Skills resume={this.props.resume}/>
            </div>
        );
    }
}

export default Content;

