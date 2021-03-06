import React, { Component } from 'react';

import SectionTitle from '../SectionTitle';
import ArrayProjects from '../ArrayProjects';
import ArrayTests from '../ArrayTests';

import './styles.css';

class Projects extends Component {
    render() {
        return (
            <div className='projects'>
                <div className='container'>
                    <SectionTitle sectionName={'PROJECTS'} />
                    <div className='projects__list row'>
                        {ArrayProjects.map((item) => (
                            item.show ? <a className='projects__list_link col-12 col-sm-6 col-lg-4 col-xl-3' key={item.link} href={item.link} target='_blank' rel='noopener noreferrer'>
                                            <div className='projects__list_curtain'></div>
                                            <img src={item.picture} alt=''/>
                                            <h2 className='projects__list_title'>{item.title}</h2>
                                            <span className='projects__list_info'>{item.info}</span>
                                        </a> : ''
                        ))}
                    </div>
                    <SectionTitle sectionName={'MY TESTS'} />
                    <div className='projects__list row'>
                        {ArrayTests.map((item) => (
                            item.show ? <a className='projects__list_link col-12 col-sm-6 col-lg-4 col-xl-3' key={item.link} href={item.link} target='_blank' rel='noopener noreferrer' data-info='test'>
                                            <div className='projects__list_curtain'></div>
                                            <img src={item.picture} alt=''/>
                                            <h2 className='projects__list_title'>{item.title}</h2>
                                            <span className='projects__list_info'>{item.info}</span>
                                        </a> : ''
                        ))}
                    </div>
                    <SectionTitle sectionName={''} noTitle={true} />
                    <div className='row projects__link-btn'>
                        <a href='https://github.com/svshp' target='_blank' rel='noopener noreferrer'>MY GIT</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;