import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
// import sample fishes
import sampleFishes from '../sample-fishes';
import Fish from './Fish';


class App extends React.Component {
  // using property syntax to define empty state
  state = {
    // describe the pieces of state you will be using
    fishes: {},
    order: {}
  }

  addFish = fish => {
    console.log(fish);
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

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }

  render() {
      return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Seafood Market" />
            <ul className="fishes">
              {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)}
            </ul>
          </div>
          <Order />
          <Inventory 
            addFish={this.addFish} 
            loadSampleFishes={this.loadSampleFishes}
          />
        </div>
    )
  }
}

export default App;