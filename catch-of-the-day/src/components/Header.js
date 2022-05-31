import React, { Component } from 'react';

// Stateless Functional Component
const Header = (props) => (
    <div className="top">
        <h1>
            Catch
            <span className="ofThe">
                <span className="of">Of</span> 
                <span className="the">The</span> 
            </span>
            Day</h1>
            <h3 className="tagline">
                <span>{props.tagline}</span>
            </h3>
    </div>
)

export default Header;