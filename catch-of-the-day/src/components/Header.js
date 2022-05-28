import React, { Component } from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="top">
                <h1>
                  Catch
                  <span className="ofThe">
                    <span className="of">Of</span> 
                    <span className="the">The</span> 
                  </span>
                  Day</h1>
                <h3 className="tagline">
                    <span>{this.props.tagline}</span>
                </h3>
            </div>
        )
    }
}

export default Header;