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
