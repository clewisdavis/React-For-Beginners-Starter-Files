import React from 'react';

class EditFishForm extends React.Component {

    //create a handleChange method
    handleChange = (event) => {
        console.log(event.target.name);
        // update that fish
        // 1. Take a copy fo the current fish
        const updatedFish = { 
            // make a copy
            ...this.props.fish,
            // then overwrite the change
            [event.currentTarget.name]: event.target.value
        };
        // Call the updateFish method that lives in <App>, pass in the key and updatedFish object. 
        this.props.updateFish(this.props.index, updatedFish)
    }
    render() {
        return (
            <div className="fish-edit">
                <input 
                    type="text" 
                    name="name" 
                    onChange={this.handleChange} 
                    value={this.props.fish.name} 
                />
                <input 
                    type="text" 
                    name="price" 
                    onChange={this.handleChange} 
                    value={this.props.fish.price} 
                />
                <select 
                    type="text" 
                    name="status" 
                    onChange={this.handleChange} 
                    value={this.props.fish.status}>
                  <option value="available">Fresh!</option>
                  <option value="available">Sold Out</option>
                </select>
                <textarea 
                    type="text" 
                    name="desc" 
                    onChange={this.handleChange} 
                    value={this.props.fish.desc} />
                <input 
                    type="text" 
                    name="image" 
                    onChange={this.handleChange} 
                    value={this.props.fish.image} />
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
        )
    }
}

export default EditFishForm;