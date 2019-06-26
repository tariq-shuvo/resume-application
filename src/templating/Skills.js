/**
 * Created by Shuvo on 12/3/2018.
 */
import React, { Component } from 'react';
import Skill from './skill/Skill';

class Skills extends Component{
    getSkillData(skills){
        let skillData=[];
        skills.map((item,i)=>skillData.push(<Skill item={item} key={i}/>));
        return skillData;
    }
    render(){
        return(
            <section className="skills-section section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                <div className="skillset">
                    {this.getSkillData(this.props.resume.skills)}
                </div>
            </section>
        );
    }
}

export default Skills;
