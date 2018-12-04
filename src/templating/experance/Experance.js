/**
 * Created by Shuvo on 12/3/2018.
 */
import React, { Component } from 'react';

class Experance extends Component{
    render(){
        return(
            <div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">{this.props.item.title}</h3>
                        <div className="time">{this.props.item.period}</div>
                    </div>
                    <div className="company">{this.props.item.company}</div>
                </div>
                <div className="details">
                    <p>Here is an overview of my responsibilities working for this company.</p>
                    <ul>
                        {this.props.item.details.map((item,i)=><li>{item}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Experance;