import React, { Component } from 'react';

import SectionTitle from '../SectionTitle';
import ArrayProjects from '../ArrayProjects';

import './styles.css';

class Projects extends Component {
    render() {
        return (
            <div className='projects'>
                <div className='container'>
                    <SectionTitle sectionName={'PROJECTS'} />
                    <div className='projects__list row'>
                        {ArrayProjects.map((item) => (
                            item.show ? <a className='col-12 col-sm-6 col-lg-4 col-xl-3' key={item.link} href={item.link} target='_blank' rel='noopener noreferrer'>
                                            <div className='projects__list_curtain'></div>
                                            <img src={item.picture} alt=''/>
                                            <h2>{item.title}</h2>
                                            <span>{item.info}</span>
                                        </a> : ''
                        ))}
                    </div>
                    {/* <div className='row offset-8 offset-md-9 offset-xl-10 projects__link-btn'> */}
                    <div className='row projects__link-btn'>
                        <a href='https://github.com/svshp' target='_blank' rel='noopener noreferrer'>MY GIT</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;