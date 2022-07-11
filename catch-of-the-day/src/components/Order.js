import React, { Component } from 'react';
import { formatPrice } from "../helpers";

class Order extends React.Component {
    // separate render function
    renderOrder = key => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === 'available';
        // make sure the fish is loaded before we continue
        if(!fish) return null;

        if(!isAvailable) {
           return <li key={key}>Sorry {fish ? fish.name : 'fish'} is no longer available</li>
        }
        return (
          <li key={key}>
            {count} lbs {fish.name}
            {formatPrice(count * fish.price)}
            <button onClick={() => {this.props.deleteOrder(this.props.index)}}>Remove Order</button>
        </li>
        );
    }

    render() {
        // 1. tally up the order
        const orderIds = Object.keys(this.props.order);
        //2. make total
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable) {
                return prevTotal + (count * fish.price);
            }
            return prevTotal;
        }, 0);
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                  <ul className="order">
                    {orderIds.map(this.renderOrder)}
                  </ul>
                <div className="total">
                  Total:
                  <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order;