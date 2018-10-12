import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './BlockSideNav.css';

class BlockSideNav extends Component {
    handleClickOnMenu(e) {
        if (e.target.childNodes.length === 1) {
            let childNodes = e.target.parentNode.childNodes;

            for (let i = 0; i < childNodes.length; i++) {
                childNodes[i].classList.remove('active');
            }
            e.target.classList.add('active');
        }
    }

    setActiveMenuItem() {
        let childNodes = document.getElementsByClassName('block-side-nav__menu')[0].childNodes;

        for (let i = 0; i < childNodes.length; i++) {
            if (childNodes[i].href === window.location.href) {
                childNodes[i].classList.add('active');
            }
        }
    }
    
    render() {
        return (
            <div className='block-side-nav'>
                <div className='block-side-nav__header'>
                    <div className='block-side-nav__header_imgWrap'>
                        <img src='./images/MVA_little.png' alt='MVA' />
                    </div>
                    <p>Vladimir Maliugin</p>
                </div>
                <div className='block-side-nav__menu' onClick={this.handleClickOnMenu}>
                    <Link to='/'>ABOUT ME</Link>
                    <Link to='/experience'>EXPERIENCE</Link>
                    <Link to='/abilities'>ABILITIES</Link>
                    <Link to='/projects'>PROJECTS</Link>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.setActiveMenuItem();
    }
}

export default BlockSideNav;