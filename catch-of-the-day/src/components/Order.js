import React, { Component } from 'react';
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
    // separate render function
    renderOrder = key => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === 'available';
        // make sure the fish is loaded before we continue
        if(!fish) return null;

        if(!isAvailable) {
           return (
            <CSSTransition 
              classNames="order" 
              key={key} 
              timeout={{ ender: 500, exit: 500 }}>
              <li key={key}>Sorry {fish ? fish.name : 'fish'} is no longer available</li>
            </CSSTransition>
          );
        }
        return (
          <CSSTransition 
            classNames="order" 
            key={key} 
            timeout={{ ender: 500, exit: 500 }}>
            <li key={key}>
              <span>
                <TransitionGroup component="span" className="count">
                  <CSSTransition 
                    classNames="count" 
                    key={count} 
                    timeout={{ enter: 5000, exit: 5000}}
                  >
                    <span>{count}</span>
                  </CSSTransition>
                </TransitionGroup>
                lbs {fish.name}
                {formatPrice(count * fish.price)}
                <button onClick={() => this.props.deleteOrder(key)}>x</button>
              </span>
            </li>
          </CSSTransition>
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
                  <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                  </TransitionGroup>
                <div className="total">
                  Total:
                  <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order;