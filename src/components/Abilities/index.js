import React, { Component } from 'react';

import SectionTitle from '../SectionTitle';
import animationSkills from './animation';

import './styles.css';

class Abilities extends Component {
    render() {
        return (
            <div className='abilities'>
                <div className='container'>
                    <SectionTitle sectionName={'ABILITIES'} />
                    <div className='row'>
                        <div className='col-12'>
                            <div className='abilities__title'>
                                <p>MY SKILLS</p>
                            </div>
                        </div>
                    </div>
                    <div className='row abilities__wrap'>
                        <div className='col-sm-6 col-md-6'>
                            <div className='abilities__single-skill'>
                                <div>
                                    <p>
                                        HTML5 & CSS3 -&nbsp;
                                    </p>
                                    <span>0%</span>
                                </div>
                            </div>
                            <div className='abilities__single-skill_progress'>
                                <div className='abilities__single-skill_progress-bar' data-width='85'>
                                </div>
                            </div>
                            <div className='abilities__single-skill'>
                                <div>
                                    <p>
                                        BOOTSTRAP -&nbsp;
                                    </p>
                                    <span>0%</span>
                                </div>
                            </div>
                            <div className='abilities__single-skill_progress'>
                                <div className='abilities__single-skill_progress-bar' data-width='60'>
                                </div>
                            </div>
                            <div className='abilities__single-skill'>
                                <div>
                                    <p>
                                        JAVASCRIPT -&nbsp;
                                    </p>
                                    <span>%</span>
                                </div>
                            </div>
                            <div className='abilities__single-skill_progress'>
                                <div className='abilities__single-skill_progress-bar' data-width='85'>
                                </div>
                            </div>
                            <div className='abilities__single-skill'>
                                <div>
                                    <p>
                                        ES6 -&nbsp;
                                    </p>
                                    <span>0%</span>
                                </div>
                            </div>
                            <div className='abilities__single-skill_progress'>
                                <div className='abilities__single-skill_progress-bar' data-width='75'>
                                </div>
                            </div>
                            <div className='abilities__single-skill'>
                                <div>
                                    <p>
                                        REACT -&nbsp;
                                    </p>
                                    <span>0%</span>
                                </div>
                            </div>
                            <div className='abilities__single-skill_progress'>
                                <div className='abilities__single-skill_progress-bar' data-width='70'>
                                </div>
                            </div>
                            <div className='abilities__single-skill'>
                                <div>
                                    <p>
                                        REDUX -&nbsp;
                                    </p>
                                    <span>0%</span>
                                </div>
                            </div>
                            <div className='abilities__single-skill_progress'>
                                <div className='abilities__single-skill_progress-bar' data-width='70'>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6'>
                            <div className='abilities__single-skill'>
                                <div>
                                    <p>
                                        OOP -&nbsp;
                                    </p>
                                    <span>0%</span>
                                </div>
                            </div>
                            <div className='abilities__single-skill_progress'>
                                <div className='abilities__single-skill_progress-bar' data-width='80'>
                                </div>
                            </div>
                            <div className='abilities__single-skill'>
                                <div>
                                    <p>
                                        GULP -&nbsp;
                                    </p>
                                    <span>0%</span>
                                </div>
                            </div>
                            <div className='abilities__single-skill_progress'>
                                <div className='abilities__single-skill_progress-bar' data-width='80'>
                                </div>
                            </div>
                            <div className='abilities__single-skill'>
                                <div>
                                    <p>
                                        SCSS -&nbsp;
                                    </p>
                                    <span>0%</span>
                                </div>
                            </div>
                            <div className='abilities__single-skill_progress'>
                                <div className='abilities__single-skill_progress-bar' data-width='80'>
                                </div>
                            </div>
                            <div className='abilities__single-skill'>
                                <div>
                                    <p>
                                        NODE.JS -&nbsp;
                                    </p>
                                    <span>0%</span>
                                </div>
                            </div>
                            <div className='abilities__single-skill_progress'>
                                <div className='abilities__single-skill_progress-bar' data-width='70'>
                                </div>
                            </div>
                            <div className='abilities__single-skill'>
                                <div>
                                    <p>
                                        AJAX -&nbsp;
                                    </p>
                                    <span>0%</span>
                                </div>
                            </div>
                            <div className='abilities__single-skill_progress'>
                                <div className='abilities__single-skill_progress-bar' data-width='75'>
                                </div>
                            </div>
                            <div className='abilities__single-skill'>
                                <div>
                                    <p>
                                        MVC -&nbsp;
                                    </p>
                                    <span>0%</span>
                                </div>
                            </div>
                            <div className='abilities__single-skill_progress'>
                                <div className='abilities__single-skill_progress-bar' data-width='70'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='abilities__title'>
                                <p>MY LANGUAGES</p>
                            </div>
                        </div>
                    </div>
                    <div className='row abilities__language'>
                        <div className='col-12 col-md-8 offset-md-2'>
                            <div className='row'>
                                <div className='col-3 offset-1 offset-sm-2 offset-lg-3 abilities__language_text'>
                                    English:
                                </div>
                                <div className='col-7 offset-1 col-sm-6 offset-sm-0'>
                                    Pre-intermediate
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row abilities__language'>
                        <div className='col-12 col-md-8 offset-md-2'>
                            <div className='row'>
                                <div className='col-3 offset-1 offset-sm-2 offset-lg-3 abilities__language_text'>
                                    Russian:
                                </div>
                                <div className='col-7 offset-1 col-sm-6 offset-sm-0'>
                                    Native
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row abilities__language'>
                        <div className='col-12 col-md-8 offset-md-2'>
                            <div className='row'>
                                <div className='col-3 offset-1 offset-sm-2 offset-lg-3 abilities__language_text'>
                                    Ukranian:
                                </div>
                                <div className='col-7 offset-1 col-sm-6 offset-sm-0'>
                                    Native
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        animationSkills();
    }
}

export default Abilities;