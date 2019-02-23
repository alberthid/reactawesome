import React, { Component } from 'react'
import './style.css';

class PastEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <div className='container-pastevent'>
                <div className='top-component'>
                    <h2>{this.props.meetup.date}</h2>
                </div>
                <div className='middle-component'>
                    <h4>{this.props.meetup.hashtag}</h4>
                    <h4>{this.props.meetup.participant} went</h4>
                </div>
                <div className='button-component'>
                    <button className='button-view' type='button'>
                        <a href={this.props.meetup.link} className='link-data' style={{'text-decoration': 'none'}}>
                            <h3>View</h3>
                        </a>
                    </button>
                </div>
            </div>
        );
    }
}

export default PastEvent;