import React, { Component } from 'react';

import SectionTitle from './SectionTitle';

import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <div className='projects'>
                <div className='container'>
                    <SectionTitle sectionName={'PROJECTS'} />
                </div>
            </div>
        )
    }
}

export default Projects;