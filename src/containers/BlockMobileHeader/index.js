import React, { Component } from 'react';

import './styles.css';

class BlockMobileHeader extends Component {
    toggleMenu() {
        let blockSideNav = document.querySelector('.block-side-nav');
        blockSideNav.classList.toggle("block-show");

        let blockMain = document.querySelector('.block-main');
        blockMain.classList.toggle("block-show");
    }

    render() {
        return (
            <div className='mobile-header'>
                <img src='./images/MobileMenuLight.svg' alt='menu' onClick={this.toggleMenu} />
                <h2>VLADIMIR MALIUGIN</h2>
            </div>
        )
    }
}

export default BlockMobileHeader;