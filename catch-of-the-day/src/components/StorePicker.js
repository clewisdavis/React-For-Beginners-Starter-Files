import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    constructor() {
        super();
        console.log('creating a component');
        this.goToStore = this.goToStore.bind(this);
    }

    goToStore(event) {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. Get text from input
        console.log(this.myInput.current.value);
        const storeName = this.myInput.current.value;
        // 3. Change the page to /store/whatever they entered.
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
              <h2>Please Enter a Store</h2>
              <input
                ref={this.myInput}
                type="text" 
                required 
                placeholder="Store Name" 
                defaultValue={getFunName()} 
               />
              <button type="submit">Visit Store</button>
            </form>
        );
    }
}

export default StorePicker;