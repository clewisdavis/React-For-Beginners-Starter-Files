import React, { Component } from 'react';
import PropTypes from "prop-types";
import { formatPrice } from '../helpers';

class Fish extends React.Component {

    // create a static prop type
    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        addToOrder: PropTypes.func,
    }

    // add event handler to call addToOrder method 
    handleClick = () => {
        this.props.addToOrder(this.props.index);
    }
    render() {
        // boolean to tell is available or not
        const isAvailable = this.props.details.status === 'available';
        return (
            <li className="menu-fish">
                <img src={this.props.details.image} alt={this.props.details.name} />
                <h3 className="fish-name">
                    {this.props.details.name}
                    <span className="price">
                        {formatPrice(this.props.details.price)}
                    </span>
                </h3>
                <p>{this.props.details.desc}</p>
                <button disabled={!isAvailable} onClick={this.handleClick}>
                    {isAvailable ? 'Add To Order' : 'Sold Out!'}
                </button>
            </li>
        )
    }
}

export default Fish;