import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  // using property syntax to define empty state
  state = {
    // describe the pieces of state you will be using
    fishes: {},
    order: {}
  }

  addFish = fish => {
    console.log(fish);
  }

  render() {
      return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Catch of the Day" />
          </div>
          <Order />
          <Inventory addFish={this.addFish} />
        </div>
    )
  }
}

export default App;