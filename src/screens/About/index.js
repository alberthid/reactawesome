import React, { Component } from 'react';
import Header from '../../components/Header';
import Content from './components/Content';
import Footer from '../../components/Footer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bahasa: 'indonesia'
        };
    }

    render() {
        return (
            <div>
                <Header bahasa={this.state.bahasa} />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default Home;