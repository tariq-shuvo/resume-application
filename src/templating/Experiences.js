/**
 * Created by Shuvo on 12/3/2018.
 */
import React, { Component } from 'react';
import Experience from './experance/Experance';

class Experances extends Component{
    getExperienceData(experience){
        let experienceData=[];
        experience.map((item,i)=>{
            experienceData.push(<Experience item={item} key={i}/>);
        });
        return experienceData;
    }

    render(){
        return(
            <section className="section experiences-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experiences</h2>
                {this.getExperienceData(this.props.resume.experiences)}
            </section>
        );
    }
}

export default Experances;

