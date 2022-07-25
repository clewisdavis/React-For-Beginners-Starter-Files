import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
// import sample fishes
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';


class App extends React.Component {
  // using property syntax to define empty state
  state = {
    // describe the pieces of state you will be using
    fishes: {},
    order: {}
  }

  componentDidMount() {
    const { params } = this.props.match;
    // reinstate the local storage
    const localStorageRef = localStorage.getItem(params.storeId);
    if(localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  componentDidUpdate() {
    // console.log(this.state.order);
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    // console.log(fish);
    //1. Make a copy of the existing state
    const fishes = { ...this.state.fishes };
    //2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    //3. Set the new fishes object to state
    this.setState({
      //pass the piece you need to update.
      // in ES6 you can also just pass in fishes and it's the same as fishes: fishes
      fishes: fishes
    })
  }

  // Method to update the state from edit fish component
  updateFish = (key, updatedFish) => {
    //1. Take a copy of the current state
    const fishes = { ...this.state.fishes };
    //2. Update that state
    fishes[key] = updatedFish;
    //3. Set that to state
    this.setState({ fishes: fishes });
  }

  // Method to delete the fish, CRUD, takes a key param form which fish to delete
  deleteFish = (key) => {
    // console.log('fish was deleted');
    //1. take a copy of state
    const fishes = { ...this.state.fishes };
    //2. update the state, remove an item from state, set the fish you don't want to null
    fishes[key] = null;
    //3. update state
    this.setState( {fishes });
  }

  deleteOrder = (key) => {
    console.log('Order Deleted');
    //1. take a copy of state
    const order = { ...this.state.order };
    //2. remove the item from order
    delete order[key];
    //3. set new state
    this.setState({ order });
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }

  addToOrder = (key) => {
    // 1. Copy of state
    const order = { ...this.state.order };
    // 2. Either or add to order, or update our order number
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order: order });
  }

  render() {
      return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Seafood Market" />
            <ul className="fishes">
              {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} index={key} />)}
            </ul>
          </div>
          <Order 
            fishes={this.state.fishes} 
            order={this.state.order}
            deleteOrder={this.deleteOrder}
          />
          <Inventory 
            addFish={this.addFish} 
            updateFish={this.updateFish}
            loadSampleFishes={this.loadSampleFishes}
            fishes={this.state.fishes}
            deleteFish={this.deleteFish}
            storeId={this.props.match.params.storeId}
          />
        </div>
    )
  }
}

export default App;