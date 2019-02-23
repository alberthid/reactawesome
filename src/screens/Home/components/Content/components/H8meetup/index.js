import React, { Component } from 'react';
import './styles.css';

class H8Meetup extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='h8meetup'>
                <div className='h8meetup_image'>
                    <img src='https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/1879/s300/hactiv8-logo.jpg' alt='h8meetup-gambar' className='hacktiv-image' />
                </div>
                <div>
                    <h1>Hacktiv8 Meetup</h1>
                    <div className='h8meetup-row'>
                        <h4 className='h4-text'>Location</h4>
                        <h4 className='h4-text'>Jakarta, Indonesia</h4>
                    </div>
                    <div className='h8meetup-row'>
                        <h4 className='h4-text'>Members</h4>
                        <h4 className='h4-text'>1,078</h4>
                    </div>
                    <div className='h8meetup-row'>
                        <h4 className='h4-text'>Organizers</h4>
                        <h4 className='h4-text'>Fadli Al Baihaqi</h4>
                    </div>
                    <div className='button-joinus' onClick={() => alert('join yuks')}>
                        <h3>Join Us</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default H8Meetup;