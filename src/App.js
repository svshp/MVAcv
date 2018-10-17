import React, { Component } from 'react';

import BlockMobileHeader from './containers/BlockMobileHeader';
import BlockSideNav from './containers/BlockSideNav';
import BlockMain from './containers/BlockMain';

import './App.css';

class App extends Component {
    

    render() {
        return (
            <div className='app-component'>
                <BlockMobileHeader />
                <BlockSideNav />
                <BlockMain />
            </div>
        )
    }
}

export default App;