import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ArrayComponents from '../ArrayComponents';

import './styles.css';

class BlockSideNav extends Component {
    handleClickOnMenu(e) {
        if (e.target.href !== undefined) {
            if (window.lastRef !== undefined) {
                window.lastRef.classList.remove('active');
                window.lastRef = e.target;
            }

            e.target.classList.add('active');

            if (window.innerWidth < 769) {
                let blockSideNav = document.querySelector('.block-side-nav');
                blockSideNav.classList.remove("block-show");

                let blockMain = document.querySelector('.block-main');
                blockMain.classList.remove("block-show");
            }
        }
    }

    setActiveMenuItem() {
        let childNodes = this.menu.childNodes;

        for (let i = 0; i < childNodes.length; i++) {
            if (childNodes[i].href === window.location.href) {
                childNodes[i].classList.add('active');

                window.lastRef = childNodes[i];
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
                <div ref={(elem) => {this.menu = elem}} className='block-side-nav__menu' onClick={this.handleClickOnMenu}>
                    {ArrayComponents.map((item) => (
                        item.auth ? <Link key={item.path} to={item.path}>{item.title}</Link> : ''
                    ))}
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.setActiveMenuItem();
    }
}

export default BlockSideNav;