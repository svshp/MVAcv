import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Abilities from '../components/Abilities';
import Projects from '../components/Projects';

import './BlockMain.css';

class BlockMain extends Component {
    render() {
        return (
            <div className='block-main'>
                <Switch>
                    <Route exact path='/' component={AboutMe} />
                    <Route path='/experience' component={Experience} />
                    <Route path='/abilities' component={Abilities} />
                    <Route path='/projects' component={Projects} />
                </Switch>
            </div>
        )
    }
}

export default BlockMain;