/**
 * Created by Shuvo on 12/3/2018.
 */
import React,{Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <div className="text-center">
                    <small className="copyright">Developed By <i className="fas fa-heart"></i> by <a href={this.props.resume.developer.link} target="_blank" rel="noopener noreferrer">{this.props.resume.developer.name}</a></small>
                </div>
            </footer>
        );
    }
}

export default Footer;
