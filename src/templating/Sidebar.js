/**
 * Created by Shuvo on 12/3/2018.
 */
import React,{Component} from 'react';
import Education from './Education';
import Language from './Language';
import Interest from './Interest';

class Sidebar extends Component{

    getEducationData(educations){
        let educationData=[];
        educations.map((item,i)=>{
            educationData.push(<Education item={item} key={i}/>);
        });
        return educationData;
    }

    getLanguagesData(languages){
        let languageData=[];
        languages.map((item,i)=>{
            languageData.push(<Language item={item} key={i}/>);
        });
        return languageData;
    }

    getInterestsData(interests){
        let interestsData=[];
        interests.map((item,i)=>{
            interestsData.push(<Interest item={item} key={i}/>);
        });
        return interestsData;
    }

    render(){
        return(
            <div className="sidebar-wrapper">
                <div className="profile-container">
                    <img className="profile" src={this.props.resume.image} alt="" />
                    <h1 className="name">{this.props.resume.name}</h1>
                    <h3 className="tagline">{this.props.resume.tagline}</h3>
                </div>

                <div className="contact-container container-block">
                    <ul className="list-unstyled contact-list">
                        <li className="email"><i className="fas fa-envelope"></i><a href={this.props.resume.emailLink}>{this.props.resume.email}</a></li>
                        <li className="phone"><i className="fas fa-phone"></i><a href={this.props.resume.phoneLink}>{this.props.resume.phone}</a></li>
                        <li className="website"><i className="fas fa-globe"></i><a href={this.props.resume.websiteLink} target="_blank" rel="noopener noreferrer">{this.props.resume.website}</a></li>
                        <li className="linkedin"><i className="fab fa-linkedin-in"></i><a href={this.props.resume.linkedinURL} target="_blank" rel="noopener noreferrer"> {this.props.resume.linkedin}</a></li>
                        <li className="github"><i className="fab fa-facebook"></i><a href={this.props.resume.facebookURL} target="_blank" rel="noopener noreferrer">{this.props.resume.facebook}</a></li>
                        <li className="twitter"><i className="fab fa-youtube"></i><a href={this.props.resume.youtubeURL} target="_blank" rel="noopener noreferrer">{this.props.resume.youtube}</a></li>
                    </ul>
                </div>
                <div className="education-container container-block">
                    <h2 className="container-block-title">Education</h2>
                    {this.getEducationData(this.props.resume.education)}
                </div>

                <div className="languages-container container-block">
                    <h2 className="container-block-title">Languages</h2>
                    <ul className="list-unstyled interests-list">
                        {this.getLanguagesData(this.props.resume.languages)}
                    </ul>
                </div>

                <div className="interests-container container-block">
                    <h2 className="container-block-title">Interests</h2>
                    <ul className="list-unstyled interests-list">
                        {this.getInterestsData(this.props.resume.interests)}
                    </ul>
                </div>

            </div>
        );
    }
}

export default Sidebar;