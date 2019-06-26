/**
 * Created by Shuvo on 12/3/2018.
 */
import React, { Component } from 'react';
import Project from './project/Project';

class Projects extends Component{
    getProjectData(projects){
        let projectData=[];
        projects.map((item,i)=>projectData.push(<Project item={item} key={i}/>));
        return projectData;
    }

    render(){
        return(
            <section className="section projects-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>Projects</h2>
                <div className="intro">
                    <p>Check out some of my portfolios among 100 of my successful projects</p>
                </div>
                {this.getProjectData(this.props.resume.projects)}

            </section>
        );
    }
}

export default Projects;
