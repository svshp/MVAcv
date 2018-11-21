import React, { Component } from 'react';

import SectionTitle from '../SectionTitle';

import './styles.css';

class AboutMe extends Component {
    render() {
        return (
            <div className='about-me'>
                <div className='container'>
                    <SectionTitle sectionName={'ABOUT ME'} />
                    <div className='row'>
                        <div className='col-md-4 col-sm-6 col-lg-4 offset-md-0 offset-sm-3'>
                            <div className='about-me__img'>
                                <img src='./images/MVA_big.jpg' alt='MVA' />
                            </div>
                        </div>
                        <div className='col-md-8 col-sm-12'>
                            <div className='about-me__info'>
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <ul>
                                            <li>
                                                <p>Full name:</p>
                                                <span>Vladimir Maliugin</span>
                                            </li>
                                            <li>
                                                <p>Address:</p>
                                                <span>Kyiv, Ukraine</span>
                                            </li>
                                            <li>
                                                <p>Phone:</p>
                                                <span>+380(67)540-82-67</span>
                                            </li>
                                            <li>
                                                <p>E-mail:</p>
                                                <span>svs_hp@i.ua</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col-sm-6'>
                                        <ul>
                                            <li>
                                                <p>Year of birth:</p>
                                                <span>1967</span>
                                            </li>
                                            <li>
                                                <p>Job:</p>
                                                <span>Frelancer</span>
                                            </li>
                                            <li>
                                                <p>Skype:</p>
                                                <span>+380(67)540-82-67</span>
                                            </li>
                                            <li>
                                                <p>Website:</p>
                                                <span>www.maliugin.com.ua</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='about-me__content'>
                                <p>
                                    I'm creative Front-End Developer.
                                </p>
                                <p>
                                    I am a responsible and confident person.
                                    My main personal qualities: communicative, inquisitive, initiative.
                                </p>
                                <p>
                                    If I have any target, I make every efforts to achieve it.
                                </p>
                            </div>
                        </div>
                    </div>
                    <SectionTitle sectionName={''} noTitle={true} />
                    <div className='row about-me__link-btn'>
                        <a href='http://maliugin.com.ua/cv_VladimirMaliugin_Frontend.pdf' target='_blank' rel='noopener noreferrer'>DOWNLOAD RESUME</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;