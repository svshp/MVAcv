import React, { Component } from 'react';

import SectionTitle from './SectionTitle';

import './Experience.css';

class Experience extends Component {
    render() {
        return (
            <div className='experience'>
                <div className='container'>
                    <SectionTitle sectionName={'EXPERIENCE'} />
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='experience__title'>
                                <p>EDUCATION</p>
                            </div>
                            <ul className='experience__period-line'>
                                <li className='experience__period-line_first'>
                                    <div className='experience__period-line_time'>
                                        <p>June 2018 – current time</p>
                                    </div>
                                    <div className='experience__period-line_title'>
                                        <h4>GERMAN IT-SCHOOL</h4>
                                    </div>
                                    <div className='experience__period-line_info'>
                                        <p>
                                            On the course "Full-stack Developer" studied:
                                            HTM5L & CSS3, Javascript, ES6, jQuery, React/Redux, VueJS,
                                            Python, Django, PostgreSQL, 
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className='experience__period-line_time'>
                                        <p>September 2017 – March 2018</p>
                                    </div>
                                    <div className='experience__period-line_title'>
                                        <h4>CYBERBIONIC SYSTEMATICS</h4>
                                    </div>
                                    <div className='experience__period-line_info'>
                                        <p>
                                            On course "Java Developer" studied: object-oriented programming
                                            and the structure of the Java programming language.
                                        </p>
                                    </div>
                                </li>
                                <li className='experience__period-line_last'>
                                    <div className='experience__period-line_time'>
                                        <p>1987 – 1993</p>
                                    </div>
                                    <div className='experience__period-line_title'>
                                        <h4>HIGHER EDUCATION INSTITUTION</h4>
                                    </div>
                                    <div className='experience__period-line_info'>
                                        <p>
                                            Sumy State University.
                                            Specialty: "Industrial electronics".
                                            Specialist’s degree.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-6'>
                            <div className='experience__title'>
                                <p>WORK EXPERIENCE</p>
                            </div>
                            <ul className='experience__period-line'>
                                <li className='experience__period-line_first'>
                                    <div className='experience__period-line_time'>
                                        <p>November 2003 – current time</p>
                                    </div>
                                    <div className='experience__period-line_title'>
                                        <h4>FREELANCER</h4>
                                    </div>
                                    <div className='experience__period-line_info'>
                                        <p>
                                            Position: Programmer 1C. Developed and implemented
                                            a system of accounting for budgetary institutions of Ukraine.
                                            Currently used in more than 70 institutions.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className='experience__period-line_time'>
                                        <p>April 2002 - October 2003</p>
                                    </div>
                                    <div className='experience__period-line_title'>
                                        <h4>TOP MANAGER</h4>
                                    </div>
                                    <div className='experience__period-line_info'>
                                        <p>
                                            At the “Private center “Kvark ” (service of electronic systems) position:
                                            Top manager (head of accounting implementation on the basis of 1С).
                                        </p>
                                    </div>
                                </li>
                                <li className='experience__period-line_last'>
                                    <div className='experience__period-line_time'>
                                        <p>March 1988 - March 2002</p>
                                    </div>
                                    <div className='experience__period-line_title'>
                                        <h4>ENGINEER OF ELECTRINIC SYSTEMS</h4>
                                    </div>
                                    <div className='experience__period-line_info'>
                                        <p>
                                            At the “Weighted drill pipe plant” position: Engineer of electronic systems.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;