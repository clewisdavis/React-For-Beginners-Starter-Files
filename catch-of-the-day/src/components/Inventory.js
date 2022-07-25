import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';
import { firebaseApp } from "../base";

class Inventory extends React.Component {
    // prop types
    static propTypes = {
        fishes: PropTypes.object,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        addFish: PropTypes.func,
        loadSampleFishes: PropTypes.func
    }

    // method to handle the auth handler
    authHandler = async (authData) => {
        // 1. Look up the current store in the firebase database
        // 2. Claim it if there is no owner
        // 3. Set the state of the inventory component to reflect the current user
        console.log(authData);
    }

    // authenticate method
    authenticate = (provider) => {
        // create a new OAuth Provider
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        // connect to auth portion of database
        firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
    }
    render() {
        return <Login authenticate={this.authenticate} />;
        // return (
        //     <div className="inventory">
        //         <h2>Inventory</h2>
        //         {Object.keys(this.props.fishes).map(key => (
        //             <EditFishForm 
        //                 key={key} 
        //                 index={key}
        //                 fish={this.props.fishes[key]}
        //                 updateFish={this.props.updateFish}
        //                 deleteFish={this.props.deleteFish}
        //             />
        //         ))}
        //         <AddFishForm addFish={this.props.addFish} />
        //         <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
        //     </div>
        // )
    }
}

export default Inventory;