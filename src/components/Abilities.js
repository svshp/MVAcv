import React, { Component } from 'react';

import SectionTitle from './SectionTitle';

import './Abilities.css';

class Abilities extends Component {
    render() {
        return (
            <div className='abilities'>
                <div className='container'>
                    <SectionTitle sectionName={'ABILITIES'} />
                </div>
            </div>
        )
    }
}

export default Abilities;
