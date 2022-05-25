import React, { Component } from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="top">
                <h1>Catch of the day</h1>
                <h3 className="tagline">
                    <span>Fresh Daily</span>
                </h3>
            </div>
        )
    }
}

export default Header;