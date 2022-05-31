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
CONST Header = (props) => (
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
    </Switch>
  </BrowserRouter>
)

export default Router;
```

- The way the `<Switch>` tag works, it's going to look for that one, then keep trying until it finds a not found
- `<Route>` will take `props`, fist one is `exact` on the home page `./`, then the other ones will be your site pages, then the third route is a catch all.
- Then tell it exactly which component to render out.
- `<Route exact path="/" component={StorePicker} />`, will render out the `<StorePicker />` component when you go to the `path="/"`
- Make sure you `import` the component into your file.

- Render the `<Router />` to the mounting point. Typically `index.js` file.
- `render(<Router />, document.querySelector('#main'));`.
- Make sure to `import Router from './components/Router';` and remove any unused.
