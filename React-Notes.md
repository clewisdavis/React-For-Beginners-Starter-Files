# Notes from WesBos, React for Beginners

## Intro and Set up

- Fork the starter files, from the [React For Beginners Starter Files](https://github.com/wesbos/React-For-Beginners-Starter-Files) repo

## Thinking and Understanding React Components

- Everything in React is a component
- Re-usable piece of your website, similar to `<h1>` etc.
- Allow you to build your own tags.
- And attach data and functionality

## Creating our first Component

## Writing HTML with JSX

- Mix of HTML and JS
- JSX is not required to write a React app. But preferred
- But really hard to write
- Things to look out for.
- Can't just use `class`, when you want to add a class you have to write `className`
- If returning multiple lines, automatic semi-colon insertion can break the JS
- Easy solution is to just add `()` after your return. `return()`
- Remember, return is not a function, it's a keyword
- Cannot return siblings elements.
- From a render method, you can only return sibling elements.
- Solution, you can wrap in a `<React.Fragment>` tag and return as many as like.
- Previously what you did, was render a dummy `<div>` but messes up your DOM with a bunch of empty `<div>`
- Or, you can just import `Fragment` and wrap your elements in `<Fragment>`
- Commenting is different, `{}`, curly brackets means you are in JS land. So a comment looks like `{ /* comment */ }`
- And don't put a comment directly after return. Will break. If you want a comment then put it inside your element.

```JAVASCRIPT
render() {
    return (
        <form className="store-selector">
          { /* comment */ }
          <h2>Please enter store</h2>
        </form>
    )
}
```

## Loading CSS into React App

- Options for CSS
- Existing CSS, you can drop CSS into the mounting point, `index.html` `<link>`
- Inline CSS, import the CSS that only relates to that component. Import and couple CSS with what gets rendered out
- Simple way, just `import "./css/style.css"`, into your `index.html` file
- The `create react app` will recognize that is not a JS file, and load in and stick into a style tag and automatically hot load it for us.
- You can just write vanilla CSS in the main directory of your app. And just import.

## Creating our app layout with components

- Create an `app` component, allow us to share data and update across the app. And methods.
- Make a new file, `App.js`
- import react into the file `import React from "react";`
- Create a class
- And it's good practice to `export default App;` before you forget.
- Inside, create your render method `render(){}`, and then add the `return()` with parenthesis.

```JAVA
// App.js
import React from 'react';

class App extends React.component {
  return (
    <div className="catch-of-the-day">
      <p>heyyy</p>
    </div>
  )
}

export default App;
```

- Then go back to your index.js file, import `App` and set it in the render method.
- Start to scaffold out your components based on your design.

```JAVASCRIPT
class App extends React.Component {
  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header />
      </div>
      <Inventory />
      <Order />
    </div>
  )
}
```

- So start to make a new `<Header />`, `<Inventory />`, and `<Order />` components.
- Make new file for each inside your component folder.
- Don't forget to `import` React
- And also `export default YourComponent;` so you can use in other components

```JAVASCRIPT
import React, { Component } from 'react';

class Header extends React.Component {
    render() {
        return (
            <p>Hello!</p>
        )
    }
}

export default Header;
```

- Then to see the component, `import` into the file it's going to be used.
- `import Header from './Header';`, if in the same directory, use the `./` so React knows where to grab it.
- Create the other components, `<Inventory />` and `<Order />`.
- Create a new file within your components directory.
- TIP: You can just save as, an existing component, and just update the elements in the `return`, class name and export.
- This scaffled out the basic layout of the applications

## Passing Dynamic Data with Props

- Props and state are two fundamental concepts.
- Props, similar to HTML tags, the `<img>` tag for example.
- The `<img>` tag has attributes, `src` and `alt`, without those two things, the tag has no idea how to render.
- Same thing with `<input>`, you have to give it a `type` so it knows what to render. It needs to know what type of input before rendering to the page.
- In HTML, these are called *attributes*
- In React, these are called *props*
- PROPS ARE A WAY WE GET DATA INTO A COMPONENT
- PROPS VS. STATE
- State is where the data lives, it is the data's home
- Props, is how it gets to where it needs to go

### Define the prop

- Props, you just make them up. Can be named anything, so long as not conflict with existing props.
- When you want to make something dynamic, pass it in from database etc.
- There are no pre-set `props` you are supposed to use, you just make them up
- `<Header tagline="Chris is Cool!" />`
- An object of data that got passed in. You can pass in any type.
- If you want to pass in anything other then a string, you have to use `{}`
- `<Header tagline="Chris is Cool!" age={500} cool={true} />`

### Using in Component

- When you want to use a viable inside of JSX, give a set of `{}`, says we are just going to go back to JS for a sec.
- to set in you element, `{this.props.tagline}`
- *this*, is the component instance, whatever was passed in, you can have multiple instances with differ data in the prop.
- *props*, is the object inside our component
- This is very similar to template in JS.

- TIP: In the console, use `$r` to get the component instance you are looking at.
- AHA MOMENT! This whole component thing, is just an `object`. Like the prototype chain in JS.
- `$r` to find the object, and look at what's available to use.

- Warning, create React app does run eslint, so it will throw some warnings to help you clean things up.

## Stateless Functional Components

- Some component do not do anything. It's simply a render function that just renders HTML.
- If you component ONLY has a render method, and a prop type, then you can convert it to an *stateless functional component*

- As vanilla JS, function
- When you have a function, there is no `this`. You only need `props.tagline`

```JAVASCRIPT
function Header(props) {
  return(
    <div>
      <p>Some regular ole HTML here, {props.tagline}</p>
    </div>
  )
}
```

- A step further, as an arrow function with implicit return (remove `return()` and `{}`)

```JAVASCRIPT
const Header = (props) => (
    <div>
      <p>Some regular ole HTML here, {props.tagline}</p>
    </div>
)
```

- If it just a component that you need to pass in some data via `props` and returns some JSX . Most likely a **Stateless Functional Component**

## Routing with React Router

- React Router, not baked in to React, defer to external component.
- React Router, and Next.js
- Everything in React is a component. Even the Router.
- First thing, create a file in your components dir. `Router.js`
- Then import

```JAVASCRIPT
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StorePicker from './StorePicker';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
    </Switch>
  </BrowserRouter>
)

export default Router;
```

- The way the `<Switch>` tag works, it's going to look for that one, then keep trying until it finds a not found
- `<Route>` will take `props`, fist one is `exact` on the home page `./`, then the other ones will be your site pages, then the third route is a catch all.
- Then tell it exactly which component to render out.
- `<Route exact path="/" component={StorePicker} />`, will render out the `<StorePicker />` component when you go to the `path="/"`
- When the `route` is exactly `/`, use the component `StorePicker`
- Make sure you `import` the component into your file.

- Render the `<Router />` to the mounting point. Typically `index.js` file.
- `render(<Router />, document.querySelector('#main'));`.
- Make sure to `import Router from './components/Router';` and remove any unused.

- To do a catch all, leave off the path, `<Route component={NotFound} />`. This will render the `NotFound` component when the `url` is not specified.

- NOTE: the path `path="/store/:storeId"` is being stored as a `param` and pulled from the url.
- In a future lesson, learn how to change pages.

## Helper and Utility Functions

- Not specific to react, just something that a good practice in JS.
- Just a regular JS function, just put in a file called `helpers.js`
- For example, converting money, or string concatenating, etc.
- You just export from the `helper.js` file.

```JAVASCRIPT
export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}
```

- What's the difference between `export default`, and just `export`?
- Named exports: if you have more then one thing you would like to export.
- You need to know the name of the thing you are importing.
- And use the `{}` syntax
- `import { formatPrice } from '../helpers';`
- Now you have access to that function in your react component.
- To use the function inside your components. Use curley brackets to tell react this is good ole JS, `{}`, then put your function inside.
- `{formatPrice()}`

## Events, Refs and this Binding

- How to handle a click, form submit etc.
- Similar to vanilla JS
- React will wrap your events in `SyntheticEvent` to make it cross browser

- events are done inline, vs in vanilla JS, where you select it first with `querySelector` then run a `eventListener`, and when that happens you ran code.

- In react what happens, you do inline event handlers on your element
- `<button onClick={this.handleClick}>Click me!</button>`
- `onClick` camel case, then `{}` and tell it which function to run, `onClick={this.handleClick}` when that thing happens

- Within that component, add the method `handleClick`.

```JAVASCRIPT
class StorePicker extends React.Component {
    handleClick() {
        alert('I am here!');
    }

    render() {
        return (
            <form className="store-selector">
              <h2>Please Enter a Store</h2>
              <button onClick={this.handleClick}>Click Me!</button>
            </form>
        );
    }
}

export default StorePicker;
```

- Why don't you put `()` at the end of your event? `<button onClick={this.handleClick()}>Click me!</button>`
- If you did, `this.handleClick()`, it would make the function run when the component mounts/page load, not what you want.
- Just provide the name, and when someone clicks that button, react will call the function.

- For forms, put the event on the `<form>` tag, and use onsubmit
- `<form onSubmit={this.goToStore}>Your form here</form>`
- Then create a new method `goToStore` in your component

```JAVASCRIPT
class StorePicker extends React.Component {
    goToStore() {
      console.log('Going to Store');
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
              <h2>Please Enter a Store</h2>
              <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
              <button type="submit">Visit Store</button>
            </form>
        );
    }
}

export default StorePicker;
```

- The default behavior or a form, is to submit the data of that form.
- The form submitting will refresh the entire page, not what you want.
- Need to pass in an `event` object to your method on the form element, `goToStore(event){}`
- Then call the method, `preventDefault()`, this will stop the page from submitting.

```JAVASCRIPT
goToStore(event) {
  event.preventDefault();
  console.log(event);
}
```

- *Getting the text from an input?*
- Tempted to just do vanilla JS, `const storeName = document.querySelector(elementName);`
- THE GOLDEN RULE IN REACT, IS DON'T TOUCH THE DOM
- Don't manually select elements from the DOM
- Instead of looking at the the DOM nodes, look at the React Nodes

- So how do you get information out of an input?
- We need someway to reference the input
- You use `ref`
- First you create an empty ref in the component `myInput = React.createRef();`
- And on the `input` add `ref={this.myInput}`
- It will surface the input on the component, so you can grab it.

### Binding

- When you make your own component, and any methods inside of it, **are NOT bound my default.**
- So when you try and `console.log(this)` inside your custom method, you get `undefined`.

```JAVASCRIPT
goToStore(event) {
  event.preventDefault();
  //console log is undefined, goToStore is not bound to the component
  console.log(this);
}
```

- Makes it hard to reference a component inside of it's own method.
- Especially when you get into managing state.

- Solution is to bind your own methods also.
- methods that come with React are already bound, for example, `componentDidMount()`

- Two ways to bind your method
  
**ONE:** You can use just plain ES6, you can add a `constructor(){}` method to your component. This runs before your component is created. Be sure to include `super()` within your constructor. This will run the component that you are extending first, `React.Component` which needs to be created first, before we can `extend` it.

```JAVASCRIPT
class StorePicker extends React.Component {
  constructor() {
    super();
    console.log('Gonna create a component');
  }
}
```

- Then inside of the `constructor()` you can go ahead and bind all your custom `methods`

```JAVASCRIPT
class StorePicker extends React.Component {
  constructor() {
    super();
    //binding goToStore to this component
    this.goToStore = this.goToStore.bind(this);
  }
}

//custom method
goToStore(event) {
  event.preventDefault();
  //now this will log the goToStore method
  console.log(this);
}
```

- Downside, is you could end up with a lot of bindings in your `constructor()`

**TWO:** Another option, instead of declaring a `method` for the function, you will set a `property`.

- The property will be bound to the instance and you can access it.
- Declare a property, which is set to an arrow function.

```JAVASCRIPT
class StorePicker extends React.Component {
  constructor() {
    super();
    //no longer need to bind in the constructor
  }
}

//custom method
goToStore = (event) => {
  event.preventDefault();
  //now this will log the goToStore method
  console.log(this);
}
```

## Handling Events

- Getting the value out of an input
- After binding `this` to your method, and adding a `ref`, you can get the properties of an element. Similar to how you would do it in JS.
- First, make sure you have your `ref` defined, and on the element you want to grab.
- `myInput = React.createRef();`, this goes inside your component. At the same level as any methods you have defined.
- On your element, `<input ref={this.myInput} />` be sure to add the `ref`.
- Double check to be sure `this` is being `bind()` within your `constructor()`

- Change the page?
- Change the URL with push state, change the url without having to refresh the page.
- `react router`
- In your react dev tools, look at what's available to you in `props`
- Use the history, and `push()` method

```JAVASCRIPT
    goToStore(event) {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. Get text from input
        console.log(this.myInput.current.value);
        const storeName = this.myInput.current.value;
        // 3. Change the page to /store/whatever they entered.
        this.props.history.push(`/store/${storeName}`);
    }
```

- It seems really fast, we are using `push()` state to change the url.

## Understanding State

- FUNDAMENTAL CONCEPT TO REACT
- **What is state?** State is just an `object` that lives inside of a `component` that stores all the data that component, and it's children, need.
- Say it again, state is just ab object that holds data that it needs, aswell as children of that component. Single source of truth.

- Think of state as the *single source of truth*
- Coming from a vanilla JS background, sometimes that data lives in multiple places, you might have a variable and use that as a place to store your data.
- With React, the golden rule is **DON'T TOUCH THE DOM**.
- Instead of thinking about updating all the pieces on our website, think of it as just updating our data, and letting react take it from there.

- If just a regular JS app, and you had data displayed throughout the app, becomes hard to manage and update all those instances of data.
- With React, you keep your data in state, and whenever state changes, and React will update throughout the app, anyplace you have used that variable.

- Making a new component with state
- The idea behind React, is you are not building pages of pieces, you are building components.
- And you want to be able to use that component anywhere. You have to decide if something deserves to be it's own component.

### Getting data from a form, into state

- Form component
- When someone submits the form, we need to turn all the data from the form into a fish object.

```JAVASCRIPT
class AddFishForm extends React.Component {
    render() {
        return (
            <form className="fish-edit">
                <input name="name" type="text" placeholder="name" />
                <input name="price" type="text" placeholder="price" />
                <select name="status">
                  <option value="available">Fresh!</option>
                  <option value="available">Sold Out</option>
                </select>
                <textarea name="desc" placeholder="desc" />
                <input name="image" type="text" placeholder="image" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;
```

- Add a method for onSubmit to the form.
- Remember to use the `properties` and arrow function syntax to bind `this` to the method.

```JAVASCRIPT
class AddFishForm extends React.Component {

    // Remember, this is our syntax for binding this method so we can use 'this'.
    createFish = (event) => {
        //1. stop the form from submitting
        event.preventDefault();
        console.log("making a fish");
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" type="text" placeholder="name" />
                <input name="price" type="text" placeholder="price" />
                <select name="status">
                  <option value="available">Fresh!</option>
                  <option value="available">Sold Out</option>
                </select>
                <textarea name="desc" placeholder="desc" />
                <input name="image" type="text" placeholder="image" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}
```

- Next, we need to pull the values out of the form.
- Two ways to do that
  - You could use `ref`, give a ref to every form element.
  - Another option to listen to keyup event, and mirror that state.

- For each element, add a `ref={this.name}` on the element.
- Then add the reference inside your component with `nameRef = React.createRef();`
- Then, inside your `onsubmit` method, you can get access to the value of the input, `console.log(this.nameRef.current.value);`

```JAVASCRIPT
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
        console.log(this.nameRef.current.value);
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
```

- Inside your method `createFish`, create a fish object to hold all the data from the form.

```JAVASCRIPT
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
        console.log(fish);
    }
```

- Now that you have your data in an object, *how do you get it into state?*
- Every component in React can have it's own state.
- However, it's common to have one parent state on a higher component, then pass it down to the children.
- If you want to share the data with other components, it needs to be at a higher level.
- **You cannot pass data up, you can always pass data down.**

```JAVASCRIPT
<App>
  <Header />
  <Order />
  <Inventory />
    <AddFishForm />
</App>
```

- Store you data in `<App>` component, then you can pass it down.
- Create state within your `<App>` component.

- **Create Initial State**
- First thing you need to do, is create the initial state. What does state look like when the component initially mounts. Common to load an empty state, then you populate.
- You push data into state then state will update.
- Two ways to define initial state
  - Define a `constructor()` within your component.
  - Or use a property. `state = {};`, state is an empty object. Preferred way accorind to Wes.

```JAVASCRIPT
class App extends React.Component {
  // defining empty state with a constructor
  constructor() {
    super();
    this.state = {
      //empty state here
    }
  }

  render() {
    return (
      //elements here
    )
  }
}
```

```JAVASCRIPT
class App extends React.Component {
  // defining empty state with a property
  state = {
    // describe the pieces of state you will be using
    fishes: {},
    order: {}
  }

  render() {
    return (
      //elements here
    )
  }
}
```

- Inside of your empty state, describe the pieces you will be using for you application.

```JAVASCRIPT
state = {
  fishes: {},
  order: {}
}
```

- Set you object to whatever it's going to be, at a later point. Can be an array, number, null etc.

- **Next, how do we get an item into state?**
- The methods that *update* `state` and *define* `state`, should always live in the same component.
- Create a new method inside your `App` component.

```JAVASCRIPT
class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  //method for updating state, property syntax so you can access 'this'
  addFish = fish => {
    console.log("adding a fish");
  }

  render() {
    return (
      //elements here
    )
  }
}
```

- Now, how do you call `addFish` method?
- You your method in `App`, but you want to call it within child component.
- HOW DO YOU GET A FUNCTION THAT LIVES IN A PARENT COMPONENT DOWN TO A LOWER LEVEL COMPONENT?
- `props` of course
- In this example, we are going to pass it to `<Inventory>`, then `<Inventory>` is going to pass it to our `<AddFishForm>` component.

- Define the prop, `<Inventory addFish={this.addFish} />`, good practice to keep the name of the prop and method the same, `addFish`.
- In your react dev tools, look at `<Inventory />` and you will see the `addFish` function has been passed down.
- Now, pass it own one more level, to the `<AddFishForm />`
- Because it has been passed in via props, it's `this.props.addFish`

```JAVASCRIPT
<App>
  <Header />
  <Order />
  <Inventory addFish={this.addFish} />
    <AddFishForm addFish={this.props.addFish} />
</App>
```

- Now that you have access to the function within the component, add a call within your method. `this.props.addFish();`

- **Now, how do you get it into our state?**

- In Vanilla JS, you would just update an array or object using JS. For ex; `this.state.fishes.fish1 = fish;`, this would update the object.
- However, in React, to update state, you have to use the existing `setState()` API.
- Say again, use `setState()` to update state.

- Two steps to update state

1. Take a copy of existing state, you NEVER want to reach into state and modify it directly, causes mutation with your data and bad practice.

   - To make a copy, `const fishes = {...this.state.fishes};`, the `...` syntax is called an object spread is a good way to make a copy of the object.

2. Add our new fish to that fishes variable, in this example, using `date.now()` to add a unique value to each state.

3. Set the new fishes object to state. Called the method that is built into react, `setState();`

   - Pass it the piece of state you would like to update.
   - This will take the copy old fishes, plus our new fish, and overwrite the existing state
   - Which will then trigger a change in react.
   - Where ever that is displayed on the page, it will update.

```JAVASCRIPT
  addFish = fish => {
    console.log(fish);
    //1. Make a copy of the existing state
    const fishes = { ...this.state.fishes };
    //2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    //3. Set he new fishes object to state
    this.setState({
      // property and value
      // can also pass in just `fishes` with ES6 and will be the same
      fishes: fishes
  });
  }
```

- NOTE: When submitting a form, add the `reset()` method to your form to clear it out. `event.currentTarget.reset();`

- NOTE: We don't have to pass the entire `state`, only the pieces we wish to update. `this.setState({ pass in the piece you wish to update })`

## Loading data into state onClick

- Where do you create your `onClick` function?
- If the function needs to update `state`, needs to live in the same component where `state` lives. In this case `<App />`
- Then, how do you pass that function down? With `props`.

```JAVASCRIPT
class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  loadSampleFishes = () => {
    alert("loading sample");
  }

  render() {
      return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Catch of the Day" />
          </div>
          <Order />
          <Inventory 
            loadSampleFishes={this.loadSampleFishes}
          />
        </div>
    )
  }
}
```

- After you pass it down to child component `<Inventory/>`, add the `onClick{this.props.loadSampleFishes}` function to your event handler `onClick`.
- NOTE: Don't forget the `this.props` when calling the function. Anything that gets passed into that component, is available on the `props` object.

- Load in some sample data, `sample-fishes.js`. Import into your `<App />` component.
- `import sampleFishes from '../sample-fishes';`
- Then, `setState()` inside your `loadSampleFishes` function

```JAVASCRIPT
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }
```

- Now, in state will be populated with all the data, and we can get to displaying the data.

## Displaying State with JSX

- How do we display our data.
- Consider if it needs to be a separate component. And not to tightly bound to the existing component. Can you reuse it in other situation?
- Make a new component, you can just use this as a starter template and copy and paste, then just name your component.

```JAVASCRIPT
import React, { Component } from 'react';

class Whatever extends React.Component {
    render() {
        return (
            <div className="Whatever">
                You Did it!
            </div>
        )
    }
}

export default Whatever;
```

- Then import and use your new component inside the parent component. In this case `<App>` component.

### Looping over state

- How do you loop over state to display?
- JSX, doesn't come with all the conditional options like JS, `if`, `map` etc.
- If you want to use any sort of logic inside of JSX, then you use vanilla JS.
- We are going to loop over the data in state, and for each one, display a component.

- Inside of JSX, start with a set of curly brackets `{}`, this tells JSX we are using vanilla JSX.

- How do you loop over an `object`? Since state is just a plain object, you use `Object.keys()` to map over.
- `{Object.keys(this.state.fishes)}`
- `Object.keys()`, will allow you to put the state into an array, and loop over.

- Then you put a `.map()` on the end to map over each key and return a DOM element with the key inside of it.
- `{Object.keys(this.state.fishes).map(key => <p>{key}</p>)}`

```JAVASCRIPT
  render() {
      return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Seafood Market" />
            <ul className="fishes">
              {Object.keys(this.state.fishes).map(key => <p>{key}</p>)}
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
```

- Now whenever there is something in state, we will map over it and display.

- Error: Unique Key Prop, `each child in a list should have a unique key prop.`
- In order for React to be fast, it needs to be able to get to the element that needs to be updated. React needs to know how to quickly get to a specific element and update just that little piece of DOM.
- If it doesn't have a unique identifier, then it's much slower and will give error.
- SOLUTION: You have to give it a property of `key`, built into react, and it can be a key of anything that is unique.
- In this example, we can use `key={key}` as our unique identifier.

```JAVASCRIPT
  render() {
      return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Seafood Market" />
            <ul className="fishes">
              {Object.keys(this.state.fishes).map(key => <Fish key={key} />)}
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
```

- Now, in your `<Fish />` component, each element has a unique identifier.

### How to get information from state, to your component?

- How do you get information out of state, and display in your component?
- PROPS!, how does data get anywhere, `props`.
- Just add a `prop` to your `<Fish />` component, `<Fish key={key} details={this.state.fishes.fish1} />`
- To make it dynamic, because you are looping over state. Add square brackets to the end. This is just vanilla JS way to loop over items in an object.
- `<Fish key={key} details={this.state.fishes[key]} />`

```JAVASCRIPT
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
```

- Now each of your components, has a prop called `details`. Inside of that props, you have all the data you need to start rendering it to the page.
- Once you have passed in via `props`, you have access to all the data to display on the page.
- Just a template game at this point.
- Be sure to use the name of the prop you passed in, to access the data.
- `<img src={this.props.details.image} alt={this.props.details.name} />`
- You don't need the `""` around the attribute

```JAVASCRIPT
class Fish extends React.Component {
    render() {
        return (
            <li className="menu-fish">
                <img src={this.props.details.image} alt={this.props.details.name} />
            </li>
        )
    }
}
```

- Now just bring in the other pieces of information that you passed in via props.
  
- NOTE:
- One of the items, is the price of the item. How do you format money? Use your helper function for converting money.
- Wes gave us a helper file that contains a function to format the price.
- Import the function, `import { formatPrice } from '../helpers';`, then you can use it in your component.
- Then, just wrap your `price` inside the `formatPrice()` helper function within your component.
- `<span className="price">{formatPrice(this.props.details.price)}</span>`

- Continue to populate your component with all the data passed in via props object.

```JAVASCRIPT
import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
    render() {
        return (
            <li className="menu-fish">
                <img src={this.props.details.image} alt={this.props.details.name} />
                <h3 className="fish-name">
                    {this.props.details.name}
                    <span className="price">
                        {formatPrice(this.props.details.price)}
                    </span>
                </h3>
                <p>{this.props.details.desc}</p>
                <button>Add To Cart</button>
            </li>
        )
    }
}

export default Fish;
```

- Fancy pants, you can shortcut `this.props.details.name` by just adding a variable inside your component. That way you don't have to type out `this.props.details.thing` every single time.
- And in ES6, you can destructing, and just create multiple variables in a single shot.
- `const { image, name } = this.props.details;`, create variables `image` and `name` this you can just use the variable name inside your component. Vs. having to write out `this.props.details.whatever` each time.
- Goes inside the `render(){}`, before the `return()`.

## Updating our Order state

- Toggle the style of the button based on data in props.
- Create a `boolean` variable in the component your button lives.
- `const isAvailable = this.props.details.status === 'available';`, this will be either `true` or `false` depending on value of `status`.
- Add a `disabled` property to your button using the `isAvailable` variable.
- And update the next, with a conditional (ternary) operator.
- `<button disabled={!isAvailable}>{isAvailable ? 'Add To Order' : 'Sold Out!'}</button>`

### How do you add this data to state?

- Where do you make a function that will add to order? Same place your order state lives, in the `<App>` component.
- NOTE: General rule to organize your methods, `state`, `lifecycle` events, `custom` stuff, then finally the `render()`.

- Create a method to add date to your order state.

```JAVASCRIPT
  addToOrder = (key) => {
    // 1. Copy of state
    const order = { ...this.state.order };
    // 2. Either or add to order, or update our order number
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order: order });
  }
```

- Tip: Test out if your method is working w/o having to wire up to a button.
- In console, `$r` on the component where the method lives.
- Then, just call it by adding `()` to the end. `$r.addToOrder()`
- After running it, go and check your updated state.

- Hooking the method up to the button.
- Pass it down via `props` to the component where the button lives. In this case, it's the `<Fish />` component.
- `<Fish addToOrder={addToOrder} />`
- Then, inside your component `<Fish/>`, you have to add an `onClick` event to your button

- Accessing `key`, you cannot get access to key by just calling it.
- You have to pass it a second time via props. Using something other then they `key` keyword.
- For example; `index={key}`, `<Fish addToOrder={addToOrder} index={key} />`

- Add event handler to your button and call the method `addToOrder` to update `order` state.
- `<button onClick={this.handleClick}> Add To Order</button>`
- And don't forget the method before the `render()` inside your component.

```JAVASCRIPT
    handleClick = () => {
        this.props.addToOrder(this.props.index);
    }
```

- Now when you click on a Add To Order button, your order state will be updated.

```JAVASCRIPT
class Fish extends React.Component {
    // add event handler to call addToOrder method 
    handleClick = () => {
        this.props.addToOrder(this.props.index);
    }
    render() {
        // boolean to tell is available or not
        const isAvailable = this.props.details.status === 'available';
        return (
            <li className="menu-fish">
                <img src={this.props.details.image} alt={this.props.details.name} />
                <h3 className="fish-name">
                    {this.props.details.name}
                    <span className="price">
                        {formatPrice(this.props.details.price)}
                    </span>
                </h3>
                <p>{this.props.details.desc}</p>
                <button disabled={!isAvailable} onClick={this.handleClick}>
                    {isAvailable ? 'Add To Order' : 'Sold Out!'}
                </button>
            </li>
        )
    }
}
```

- Alternative, you could just do that inline vs. creating a separate method.
- `onClick={() => this.props.addToOrder(this.props.index)};`

## Displaying Order State with JSX

- We need to take the order state and add it to the page.
- Display the item, price, add multiple, display other items, display the total.
- How do we get stuff to a component? Again, `props`.
- In the `<Order>` component, you need the state for `fishes` and `order`

- Do you need the entire state? You can also do an object spread, `{...this.state}`
- Takes everything from state and puts into order.
- But you want to know what type of data gets past in. Automatically passes down all the data regardless if you need it or not.
- You should not be passing down data unless you need it.
- Just pass down the things you need via props.
- `<Order fishes={this.state.fishes} order={this.state.order} />`

- Then to display it in your component, just reference the data you want to display from your `prop` you passed in. Inside of `{}`.

```JAVASCRIPT
<h3 className="fish-name">
  {this.props.details.name}
  <span className="price">
      {formatPrice(this.props.details.price)}
  </span>
</h3>
```

- NOTE: You can load in helper functions, like the `formatPrice()` above. Just import it into your component, ES6 style. And call it. `import { formatPrice } from "../helpers";`

### Render Function

- When you find yourself having to much code inside a component, probably means you are doing to much in a specific component. And you could shell off some of that to separate component.
- In that case, make separate `render()` functions inside of a single component.
- Above your `render()` function, you can create a new render function.

```JAVASCRIPT
    renderOrder = key => {
        return <li>{key}</li>
    }
    render() {
      //your component code here
      return (
        //markup here
      )
    }
```

- Then inside your component, simplifies things if you have to loop over any data.

```JAVASCRIPT
    renderOrder = key => {
        return <li>{key}</li>
    }
    render() {
      return (
        //markup here
        <div className="order-wrap">
                <h2>Order</h2>
                  <ul>
                    //just call the render function
                    {orderIds.map(this.renderOrder)}
                  </ul>
                <div className="total">
                  Total:
                  <strong>{formatPrice(total)}</strong>
                </div>
        </div>
      )
    }
```

## Persisting our State with Firebase, database

- Firebase from Google, allow you to do realtime vs. AJAX using web sockets
- Allow you to maintain state across browers and sessions. Updating it in Firebase will update where ever that session is open.

- Go to [Firebase](https://console.firebase.google.com) and create a new project. Sign up if not already.
- Once you created a new Firebase project, add a `base.js` file in your `src` directory.
- Import, `Rebase`, allows you to mirror state, react Firebase specific package.
- `import Rebase from "re-base";`
- Import, `firebase`, needed to set up firebase
- `import firebase from 'firebase';`

- Configure the firebase db inside your `base.js` file, and export so you can use it in the app.
- Allow us to mirror state in your firebase app

```JAVASCRIPT
import Rebase from 're-base';
import firebase from 'firebase';

// Created your firebase app
// Firebase configuration, from your project settings
const firebaseApp = firebase.initializeApp({
    apiKey: "key goes here",
    authDomain: "authDomain here",
    databaseURL: "db url here"
});

// And rebase binding
// Create your rebase, pass it your firebase app, and returns the actual database you have
const base = Rebase.createClass(firebaseApp.database());

// Then you export them to use inside your app
// Named export
export { firebaseApp };

// Default export, main thing that gets exported, is the 'base'
export default base;
```

- Now, you we can mirror the state to our firebase database.
- First, you have to wait until the `<App>` component is on the page. Then you can sync them up.

### Lifecycle Methods

- Methods in React, that tell us when certain things are happening.
- Similar to jQuery, `document.ready()` for example, tells us when the document is ready.
- We are going to use, `componentDidMount()`
- [Lifecycle Methods](https://reactjs.org/docs/react-component.html#reference)

- To sync the data and persist it in the firebase, database

```JAVASCRIPT
  componentDidMount() {
    console.log('did mount');
    const { params } = this.props.match;
    // sync the state to firebase
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  componentWillUnmount() {
    console.log('did not mount');
    // clean up data when <App> component unmounts
    base.removeBinding(this.ref);
  }
```

## Persisting Order State with local storage

- Another way to persist data, that is not in a database
- Keep data in users browser, so you can reinstate it if they refresh, or leave and come back.
- Local Storage, key value token
- In Firefox, inspector panel > Storage > Local Storage
- You can store data, then come back to it at a later time, `Key: Value`

- How do you persist your stat in local storage?
- Use [lifecycle event](https://reactjs.org/docs/react-component.html#componentdidupdate), `componentDidUpdate()`, invoked immediately after an update occurs. Not called for the initial render.
- Update local storage, showing us what someone has added to their order.

- Inside your `<App>` component, add `componentDidUpdate()` with your other lifecycle methods.
- `componentDidUpdate()` does not take any arguments. You can reference your props, with `this.props.order`

```JAVASCRIPT
  componentDidUpdate() {
    console.log(this.state.order);
    console.log('it updated!');
  }
```

- Now, how do we get that into our local storage?
- Use the `setItem()` method, which excepts `key` and `value`.
- `localStorage.setItem(this.props.match.params.storeId, this.state.order);`
- However, in this case, we only get back `[object object]` for the value.
- Because, anytime you try to put an object into a place, where a string is required. The browser will say, I was expecting a string but you game me something else. I am just going to call the `toSting()` method on it and it give you `[object object]`

- So we need to convert that object to a string representation, using `JSON.stringify()` does.
- Will return the string version of what that object is.

```JAVASCRIPT
  componentDidUpdate() {
    console.log(this.state.order);
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  }
```

- Now, in your local storage, you see the correct value when you add an item to order.
- However when you refresh, it updates to a blank object.
- In your `componentDidMount()` you have to reinstate the local storage.

- When the component mounts, you have to re-instate the local storage.
- Use `localStorage.getItem()` to get the local storage.
- const `localStorageRef = localStorage.getItem();`, [localStorage MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- And you want to get the item from `params.storeId`

```JAVASCRIPT
  componentDidMount() {
    const { params } = this.props.match;
    // reinstate the local storage
    const localStorageRef = localStorage.getItem(params.storeId);
    console.log(localStorageRef);
  }
```

- Next, you want to take that and set it to state.
- In the example, we are visiting a brand new store, so you have to add a conditional.

- BUG: Make sure the local storage is loaded before you continue. In the `<Order>` component.
- If there is no `fish`, then return `null`, `if(!fish) return null;`
- When you return null from anything, it will return absolutely nothing.

- Now you are re-instating local storage, from multiple stores.

## Bi-directional Data Flow and Live State Editing

- Edit data and have it sync up to firebase database
- Set up your inventory form, so when you edit the data, it is synced up with the firebase database
- First, you need to get your inventory, and loop over your inventory and populate each inventory form item

- Create a new `<EditFishForm>` component.

```JAVASCRIPT
import React from 'react';

class EditFishForm extends React.Component {
    render() {
        return (
            <p>Edit Fish Form here</p>
        )
    }
}

export default EditFishForm;
```

- Then we want to go into our `<Inventory>` component and loop over all our inventory.
- Pass the inventory down, via `props`, from your `<App>` component down to `<Inventory fishes={this.state.fished}>`
- Double check in react dev tools, you have the inventory `fishes` object.

- Next, inside your `<Inventory>` you have to loop over the `<EditFishForm>` inventory form and populate it with the data from `fishes`

- Use `.map()` to render out an `<EditFishForm>` component.
- Note, turn it into an array before you `.map()` over it.
- `{Object.keys(this.props.fishes).map(fish => <EditFishForm />)}`
- Now, for every item in `fishes` it will render out an `<EditFishForm>` component

- Build out your `<EditFishForm>` component with the form fields.

```JAVASCRIPT
import React from 'react';

class EditFishForm extends React.Component {
    render() {
        return (
            <div className="fish-edit">
                <input type="text" name="name" value={this.props.fish.name} />
                <input type="text" name="price" value={this.props.fish.price} />
                <select type="text" name="status" value={this.props.fish.status}>
                  <option value="available">Fresh!</option>
                  <option value="available">Sold Out</option>
                </select>
                <textarea type="text" name="desc" value={this.props.fish.desc} />
                <input type="text" name="image" value={this.props.fish.image} />
            </div>
        )
    }
}

export default EditFishForm;
```

- And pass down the individual fish items with props from the `<Inventory>` component
- `{Object.keys(this.props.fishes).map(fish => <EditFishForm fish={this.props.fishes[key]} />)}`
- Now, every single edit fish form, has the data populated in the form.

```JAVASCRIPT
class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                {Object.keys(this.props.fishes).map(key => (
                    <EditFishForm key={key} fish={this.props.fishes[key]} />
                ))}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>
        )
    }
}
```

- Note: When looping over, each child in a array should have a unique "key" prop.
- In the component you are looping over, you need to add `key={key}` so that each item is unique.

```JAVASCRIPT
{Object.keys(this.props.fishes).map(key => (
    <EditFishForm key={key} fish={this.props.fishes[key]} />
))}
```

- Note: React does not like it when you put state in an editable area, without a plan for updating it. `Warning: You provided a value prop to a form field without an onChange handler.`
- On your input field, if you want to be able to listen for it, you need to listen for an `onChange` event.

### Create and listen for an onChange event

- On each form field, add a `onChange` listener.
- `onChange={this.handleChange}` and create your custom `handleChange` method.

```JAVASCRIPT
handleChange = (event) => {
  console.log(event.target);
}
```

- On each event, we can use `target` to give us the actual element.
- And then you can use `event.target.value` to get the actual value of the form.

```JAVASCRIPT
class EditFishForm extends React.Component {

    //create a handleChange method
    handleChange = (event) => {
        console.log(event.target.value);
    }
    render() {
        return (
            <div className="fish-edit">
                <input 
                    type="text" 
                    name="name" 
                    // add your listener when the input is updated. 
                    onChange={this.handleChange} 
                    value={this.props.fish.name} 
                />
            </div>
        )
    }
}
```

- But, react will not let you update the form, until it's in state.
- First we have to update the state object, in the higher level `<App>` component.
- Update the state

1. Take a copy of the current fish

```JAVASCRIPT
const updatedFish = {
  ...this.props.fish,
  name: event.target.value
}
```

- Problem with this, it doesn't know how to update the other items in the form.
- We want the value that being updated to be dynamic.
- You can figure out what is being updated, by using the `name` property on each form element. `event.target.name`. Make sure each form element has a name property.
- Use `[]` and set it the `event.target.value`.

```JAVASCRIPT
const updatedFish = {
  // make a copy of current state
  ...this.props.fish,
  // then overwrite the change
  [event.currentTarget.name]: event:currentTarget.value
}
```

2. How to you get that to state?

- In the component where you state lives `<App>`, create a new method, `updateFish`

```JAVASCRIPT
  // Method to update the state from edit fish component
  updateFish = (key, updatedFish) => {
    //1. Take a copy of the current state
    const fishes = { ...this.state.fishes };
    //2. Update that state
    fishes[key] = updatedFish;
    //3. Set that to state
    this.setState({ fishes: fishes });
  }
```

- Then pass your new function down via `props` to the component. `<Inventory updateFish={this.updateFish} />
- Pass down one more time, to your `<EditFishForm updateFish={this.props.updateFish}>`
- Run into the problem, how do you get the key?
- Cannot access the key, when we are inside of a component. So if you need the key, you have to pass it down via `props`

#### Walk through what's happening

- Have an input, where the value is set from `props`, fish name, `this.props.fish.name`, which is living in state
- Then, when something changes on that `input`, call the function `handleChange`
- React will then take that value from `event.target.value` that the user typed
- We take that value and update our fish object.

```JAVASCRIPT
const updatedFish = { 
  // make a copy
  ...this.props.fish,
  // then overwrite the change
  [event.currentTarget.name]: event.target.value
};
```

- Finally we send all those changes upstream to our `<App>` component, because that's where our state lives. `this.props.updateFish(this.props.index, updatedFish)`

```JAVASCRIPT
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
```

- How you want to handle state living in an input.

## Removing Items from State

- CRUD, Create, Read, Update and Delete
- Go over deleting items from our inventory and our order `<App>`

- Create a new method, `deleteFish` in our `<App>` component.
- Add `key` as a param so you know which fish to remove

```JAVASCRIPT
  deleteFish = (key) => {
    //1. take a copy of state
    const fishes = { ...this.state.fishes };
    //2. update the state, remove an item from state, set the fish you don't want to null
    // if you want firebase database to also remove it, you have to set it to null
    // fishes[] is same as fishes.fish1 etc. 
    fishes[key] = null;
    //3. update state
    this.setState( { fishes });
  }
```

- Very similar to the update fish method, except we are setting it to `null` vs. updating.
- Test out your `deleteFish` method, go to the React Dev tools, and find the component where your method lives. `<App>`
- Then go to Console, `$r.deleteFish('fish1')`, run the method and pass in the parameter.

### Hooking this method up to a button

- Pass the function down via `props` to the component where your button lives, `<EditFishForm>`
- Then create an inline `onClick` handler on your button, calling the function `deleteFish()`
- And pass in the key from your props, `this.props.index`

```JAVASCRIPT
<button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
```

### Remove from your order

- Hook up a remove button from your order.
- Can you do this on your own?

1. Create a `removeOrder` method in `<App>`

```JAVASCRIPT
  deleteOrder = (key) => {
    //1. take a copy of state
    const order = { ...this.state.order };
    //2. remove the item from order
    delete order[key];
    //3. set new state
    this.setState({ order });
  }
```

2. Pass it down via props to `<Order deleteOrder={this.deleteOrder}>` component
3. In `<Order>`, create a new button, with inline onClick to call the `removeOrder()` method

```JAVASCRIPT
  <button onClick={() => this.props.deleteOrder(key)}>Remove Order</button>
```

## Animating React Components

- To add animation to the orders, going to use `TransitionGroup` and `CSSTransition`
- `import { TransitionGroup, CSSTransition } from "react-transition-group";`
- [Animation Docs](https://reactjs.org/docs/animation.html#low-level-api-reacttransitiongroup)

- Wrap your element around a `<TransitionGroup>` tag. And give it a component property.
- Tells it what element to render out to the page.

```JAVASCRIPT
<ReactTransitionGroup component="ul">  
  {/* ... */}
</ReactTransitionGroup>
```

- Wrap the element you want to animate, with a `<CSSTransition>`
- It takes multiple arguments, `classNames="order"`, `key={key}` and `timeout={{ enter: 250, exit: 250}}`
- See `<Order>` component for reference.

- To animate, this project uses a language called stylus. Same of Sass, has the option of doing things as indentation.
- But you can write like regular CSS.
- In stylus, if you mix spaces and characters, it will break.

- The downside to using 'create-react-app` is you cannot use any custom pre-processor unless you use eject.
- In the `package.json`, you can see the scripts for running a watch on the stylus.
- Run `npm run styles:watch` just watch for style changes
- To run the build and watch for style changes, use the `npm run watch` script, will run both at the same time. See `package.json` file for more.

- To animate CSS, see video for demo
- Lots of assumptions made about CSS knowledge. See Video 22.

## Component Validation with PropTypes

- Prop types, every time you have a component.
- Validate the data you are passing in. So it's what you expect.
- If you work on a team, how do others know, what the prop type is supposed to be?
- Prop Types, allow us to specify ahead of time, what is passed in and how to be used.
- If someone doesn't pass in the right type of data, we give them a warning.

- Separate package, `import PropTypes from "prop-types";`
- Can also use other languages, TypsScript, or Type Flow

### PropTypes with a stateless functional component

- In your component, import `PropTypes`, then before the export, specify all the props in an object.

```JAVASCRIPT
Header.propTypes = {
    tagline: PropTypes.string.isRequired
}
```

- `string` tells is what type, and `isRequired` if the prop is required or not.

```JAVASCRIPT
import React, { Component } from 'react';
import PropTypes from "prop-types";

const Header = (props) => (
    <div className="top">
        <h1>
            Catch
            <span className="ofThe">
                <span className="of">Of</span> 
                <span className="the">The</span> 
            </span>
            Day</h1>
            <h3 className="tagline">
                <span>{props.tagline}</span>
            </h3>
    </div>
);

// stateless functional component
Header.propTypes = {
    tagline: PropTypes.string.isRequired
}

export default Header;
```

- Now, if you do not include the `tagline` prop for the `<Header>` component, you will get a warning in the console.
- These errors will not make it to production.
- If you pass in the wrong type, the console will warn you. `expected a string`

### PropTypes with regular React Component

- Put a `static` propType within the component. To declare for all of the component.

```JAVASCRIPT
class Fish extends React.Component {
  static propTypes = {

  }
}
```

- When you are passing in an object of data. Use `PropTypes.shape({})`.
- Pass in an object of the data that is to be displayed.
- [Typechecking with PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

```JAVASCRIPT
class Fish extends React.Component {

    // create a static prop type
    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        addToOrder: PropTypes.func,
    }

    render() {
        return (
          // Component here
        )
    }
}

export default Fish;
```

- TIP: Anytime you write a `this.props` something, you should stop and also write a `propTypes` for it.
- Wes Jokes: Stop, Drop, and Prop
- Go through the rest of the components and add a `PropTypes` for each.

## Authentication

- Implement authentication, github, twitter, and fb login
- Advanced assumptions knowledge of async/await JS.
- Use authentication to manage the owner of store.

### Firebase

- Add methods for fb, twitter and github to your firebase settings
- For each, you are going to need fb, twitter and github API keys for each.
- In firebase, asked for App ID, App Secret and provides a callback url.

### Set up Facebook

- For fb, go to developers.facebook.com and create a new app.
- From settings, grab App ID and App Secret. And put in Firebase, sign-in method fields.
- NOTE: Never put the App Secret out for others to see.

- Enable FB OAuth and add the app config url from Firebase.
- In fb Login/Settings
- Enable 'Embedded Browser OAuth Login'
- Add the OAuth redirect URI from Firebase, to the OAuth Redirect UIR field in the settings.

- Start writing some OAuth handlers
- Start with the component where the authentication logic is going to live. `<Inventory>`

- Create a new `Login.js` component.

```JAVASCRIPT
import React from 'react';

const Login = () {

    return (
        <nav className="login">
          <h2>Inventory Login</h2>
        </nav>
    )

};

export default Login;
```

- Import the component `<Login>` to display inside the `<Inventory>` component.
- Create a button for sign in in your `<Login>` component.
- Don't forget your propTypes

```JAVASCRIPT
import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {

    return (
        <nav className="login">
          <h2>Inventory Login</h2>
          <p>Sign in to manage your store's inventory.</p>
          <button 
            className="facebook"
            onClick={() => props.authenticate("Facebook")}
           >
               Log in with Facebook
           </button>
        </nav>
    )

};

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
}

export default Login;
```

- Create an authenticate method, and pass it down to login.
- Stateless functional component, to use the props, pass it in via parameter, see above ^

### Create an OAuth provider

- Create an `authProvider` variable to store.
- And import `firebase` into your component.

```JAVASCRIPT
    // authenticate method
    authenticate = (provider) => {
        // create a new OAuth Provider
        const authProvider = new firebase.auth();
    }
```

- Because you may have multiple login providers, make the provider dynamic, passing it in.
- Dynamically looking up the function name you are looking for, `[`${provider}authProvider`]`

```JAVASCRIPT
    // authenticate method
    authenticate = (provider) => {
        // create a new OAuth Provider
        const authProvider = new firebase.auth[`${provider}authProvider`]();
    }
```

- Then connect to auth portion of the firebase database
- `firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);`
- And write `async` method called `authHandler`.

```JAVASCRIPT
    // method to handle the auth handler
    authHandler = async (authData) => {
        console.log(authData);
    }

    // authenticate method
    authenticate = (provider) => {
        // create a new OAuth Provider
        const authProvider = new firebase.auth[`${provider}authProvider`]();
        // connect to auth portion of database
        firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
    }
```

### So far, what have we done

- 1. Created a new `authProvider` base on what they want to sign in with. fb, github, twitter
- 2. Use `firebaseApp.auth().signInWithPopup()` and once someone comes back from that, it runs `.then(this.authHandler)` which will pass the data to the `authHandler` function.
- 3. Goes to the `authHandler` function, which will provide all the information needed to login.

- Give that a try, and authorize fb when clicking login. Should console.log the payload.

### Now, build out the `authHandler` method

  1. Look up the current store in the firebase database.
  2. Claim it if there is not owner
  3. Set the state of the inventory component to reflect the current user

- 1. Look up current store in firebase db.
- Import from `base.js`, the default and named export, `import base, {firebaseApp} from "../base";` into your `<Inventory>` component.
- Pass down the store Id, comes from `<App>` component.
- Use `fetch()` with `await` to get the current store from firebase db.
- `const store = await base.fetch(this.props.storeId, { context: this });`

- 2. Claim if no owner

```JAVASCRIPT
        if (!store.owner) {
            // save it as our own
            await base.post(`${this.props.storeId}/owner`, {
                data: authData.user.uid
            })
        }
```

- Go to firebase and you will see an owner has now been added.

- 3. Set the state of the inventory component to reflect the current user

```JAVASCRIPT
this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
  })
```

- Whenever anyone logs in to a store, figure out who is the current logged in user, `uid: authData.user.uid,`
- And who is the owner of the store, `owner: store.owner || authData.user.uid`, if they are the same
- NOTE: When you need data that is just local to that component, you can `setState()` inside of that component. Make sure you set that initial state like did before.

```JAVASCRIPT
    //set initial state
    state = {
        uid: null,
        owner: null
    }
```

- View the `<Inventory>` component in the react dev tools, you should see in state, owner and uid

### Add conditional, for the log in

- 1. Check if they are logged in, and display the right component.

```JAVASCRIPT
    render() {
        // 1. make conditional, check if logged in
        // if there is NO uid, then show login UI
        if (!this.state.uid) {
            return <Login authenticate={this.authenticate} />;
        }
        return (
            <div className="inventory">
                <h2>Inventory</h2>
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
```

- 2. Check if they are NOT the current owner of store and display message

```JAVASCRIPT
// 2. Check if they are not the owner fo the store
        if (this.state.uid !== this.state.owner) {
            return <div>
              <p>Sorry, you are not the owner</p>
            </div>
        }
```

- 3. They must be the owner, just render the inventory.

- Then create a logout button, and put in multiple places.

```JAVASCRIPT
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
```

- And create a logout method. Using `await` method

```JAVASCRIPT
   // logout method
    logout = async () => {
        console.log('logging out');
        await firebase.auth().signOut();
        this.setState({ uid:null });
    }
```

### On refresh, check if logged in

- Listen for component did mount

```JAVASCRIPT
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
           if(user) {
               this.authHandler({ user });
           }
        })
    }
```

- What does that do? Everytime we try and load the page, firebase will check if logged in and authenticated. And if true, pass a user, then pass to our `authHandler`.

- Lock down your firebase db, update security rules to what Wes provided in `security-rules.json`.

## Building React for Prod

- Hot to build for production and get on hosting services.
- In your `package.json` you run the `build` script, which runs the `react-scripts build` command.
- Kill any processes you are running, then in terminal, do `npm run build`
- This will create a optimized product build
- Creates a folder called build, and takes all files, css and js and compile it into one tiny js file. Strips out all the warnings and prop types
- In the build folder, bundles everything up, and creates an `index.html`
- Includes map files, if you have errors, it will tell you where it's coming from in your source files
- The production build is almost a static site, will allow you to drag and drop up to the hosting services.
- However, it still needs to be run into a server, cannot just open it up.
- So you can figure out the routing.

## Deploying to Now

- Service called Now, from zeit.co/now.
- Looks like this service is now Vercel, developers of Next.js
- This part of the tutorial seems deprecated, skipping to the next one.

## Netlify

- Can hook up to your git repo
- Or the command line
- You can install their global command line interface.
- Check if you have it, `netlify --version`
- To install globally, `npm i netlify-cli -g`
- First thing, `netlify deploy` and follow the prompts.
  - Create a new site y/n
  - Current path to deploy (dir), you want to deploy build directory, `build`
  - It deploys it and pushes it up
  - Copy the url and visit it
  - It didn't need to do an npm install, it just uploaded our files and everything works
  - However, if you refresh, the url are not being directed correctly.
  - In your `build` directory, make a new file called `_redirects`, inside that file put `/* /index.html  200`
  - <https://docs.netlify.com/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps>
  - Then redeploy the site, make sure you are in the correct directory

## On a Apache server

- On these cheaper services
- Upload `build` folder into the build client
- Problem is, when you refresh, you get an error because of the directory path.
- Make a new file, called `.htaccess` file, because this server is an Apache server.
- If you are on any other type of server, you need to find out what the equivalent file is.
- Just Google, your server type + server type and you will find results. Will give you the config that will re-direct everything to that `index.html` page
- Open your `.htaccess` file and copy in

```code
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

- This is the case for every deployment, every single time you deploy something, you have to figure out this routing issue. So we are not dependent on folder structure and sending everything to `index.html`. and just using React Router to do our routing.

## Ejecting from create-react-app

- `create-react-app` tucks away all the tooling and does it for you
- puts all those settings behind defaults called react scripts
- But if you want something a little custom, and know a little about webpack, how do you do that?
- How do you customize your eslint, babel etc.
- If you want to do that, you have to eject the create react app
- You cannot undo this, so do it in a new branch called `ejected` or whatever you want to call it
- In the `package.json`, simply run `npm run eject`
- Then it's going to give us all the dependency files.
- Now, in your `package.json` it shows all the dependency, not new, it was just tucked away in the `react-scripts` folder.
- Now you have access to the webpack file config etc., you can edit and more control over how it works.
- Stay with `create-react-app` as long as you can.
- Also gives you access to your `eslint` rules if you want to customize.

- That's it folks...
