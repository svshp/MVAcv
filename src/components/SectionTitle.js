import React, { Component } from 'react';

import './SectionTitle.css';

class SectionTitle extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <div className='section-title'>
                        <h2>{this.props.sectionName}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionTitle;