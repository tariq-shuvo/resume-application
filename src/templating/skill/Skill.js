/**
 * Created by Shuvo on 12/3/2018.
 */
import React, { Component } from 'react';

class Skill extends Component{
    render(){
        return(
            <div className="item">
                <h3 className="level-title">{this.props.item.name}</h3>
                <div className="progress level-bar">
                    <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: this.props.item.percent}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        );
    }
}

export default Skill;