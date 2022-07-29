import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';
import base, { firebaseApp } from "../base";

class Inventory extends React.Component {
    // prop types
    static propTypes = {
        fishes: PropTypes.object,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        addFish: PropTypes.func,
        loadSampleFishes: PropTypes.func
    }

    //set initial state
    state = {
        uid: null,
        owner: null
    }

    // check if logged in
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
           if(user) {
               this.authHandler({ user });
           }
        })
    }

    // method to handle the auth handler
    authHandler = async (authData) => {
        // 1. Look up the current store in the firebase database
        const store = await base.fetch(this.props.storeId, { context: this });
        // console.log(store);
        // console.log(authData);
        // 2. Claim it if there is no owner
        if (!store.owner) {
            // save it as our own
            await base.post(`${this.props.storeId}/owner`, {
                data: authData.user.uid
            })
        }
        // 3. Set the state of the inventory component to reflect the current user
        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid
        })
        console.log(authData);
    }

    // authenticate method
    authenticate = (provider) => {
        // create a new OAuth Provider
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();

        // connect to auth portion of database
        firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
    }

    // logout method
    logout = async () => {
        console.log('logging out');
        await firebase.auth().signOut();
        this.setState({ uid: null });
    }


    render() {
        // make logout button
        const logout = <button onClick={this.logout}>Log out</button>


        // 1. make conditional, check if logged in
        // if there is NO uid, then show login UI
        if (!this.state.uid) {
            return <Login authenticate={this.authenticate} />;
        }

        // 2. Check if they are not the owner fo the store
        if (this.state.uid !== this.state.owner) {
            return <div>
              <p>Sorry, you are not the owner</p>
              {logout}
            </div>
        }

        // 3. If they are the owner, just render the inventory
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                {logout}
                {Object.keys(this.props.fishes).map(key => (
                    <EditFishForm 
                        key={key} 
                        index={key}
                        fish={this.props.fishes[key]}
                        updateFish={this.props.updateFish}
                        deleteFish={this.props.deleteFish}
                    />
                ))}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory;