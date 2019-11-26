import React, { Component } from 'react';
import './HalloWelt.css';

/**
 * HalloWelt
 * @version v1.0.0
 * 
 * @param {*} props 
 */
class HalloWelt extends Component {
    render() {
        const {tech} = this.props
        
        return (
            <div className="hallo-welt"> {`Hallo ${tech}!`}</div>
        );
    }
}

export default HalloWelt;




