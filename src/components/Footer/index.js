import React, { Component } from 'react';
import './styles.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='container-footer'>
                <h2>Copyright Hacktiv8 2019</h2>
            </div>
        );
    }
}

export default Footer;