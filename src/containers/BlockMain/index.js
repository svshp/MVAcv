import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ArrayComponents from '../ArrayComponents';

import './styles.css';

class BlockMain extends Component {
    render() {
        return (
            <div className='block-main'>
                <Switch>
                    {ArrayComponents.map((item) => (
                        item.auth ? <Route key={item.path} exact path={item.path} component={item.component} /> : ''
                    ))}
                </Switch>
            </div>
        )
    }
}

export default BlockMain;