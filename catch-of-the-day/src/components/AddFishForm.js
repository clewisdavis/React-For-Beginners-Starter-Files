import React, { Component } from 'react';

class AddFishForm extends React.Component {
    // Create the ref
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    // Remember, this is our syntax for binding this method so we can use 'this'.
    createFish = (event) => {
        //1. stop the form from submitting
        event.preventDefault();
        //2. create an object to hold value of form
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value), // store things in cents
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }
        this.props.addFish(fish);
        //refresh the form
        event.currentTarget.reset();
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="name" />
                <input name="price" ref={this.priceRef} type="text" placeholder="price" />
                <select name="status" ref={this.statusRef}>
                  <option value="available">Fresh!</option>
                  <option value="available">Sold Out</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="desc" />
                <input name="image" ref={this.imageRef} type="text" placeholder="image" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;