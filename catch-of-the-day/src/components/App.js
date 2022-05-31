import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  handleClick = () => {
    console.log('hello there');
  }

  render() {
      return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Catch of the Day" />
          </div>
          <Order />
          <Inventory />
        </div>
    )
  }
}

export default App;