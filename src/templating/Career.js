/**
 * Created by Shuvo on 12/3/2018.
 */
import React, { Component } from 'react';

class Career extends Component{
    render(){
        return(
            <section className="section summary-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Career Objective</h2>
                <div className="summary">
                    <p>{this.props.resume.careerObjective}</p>
                    <p><a href="https://drive.google.com/file/d/1a3X3Y5wreNpq6dptocmcQmD0-RtjtsA4/view?usp=sharing" target="_blank" rel="noopener noreferrer">click here to view/download pdf format</a></p>
                </div>
            </section>
        );
    }
}

export default Career;
