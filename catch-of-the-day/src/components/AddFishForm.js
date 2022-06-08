import React, { Component } from 'react';

class AddFishForm extends React.Component {
    render() {
        return (
            <form>
                <input name="name" type="text" placeholder="name" />
                <input name="price" type="text" placeholder="price" />
                <input name="status" type="text" placeholder="status" />
                <input name="desc" type="text" placeholder="desc" />
                <input name="image" type="text" placeholder="image" />
            </form>
        )
    }
}

export default AddFishForm;