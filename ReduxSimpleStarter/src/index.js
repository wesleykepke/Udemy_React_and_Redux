// go find the library called 'react', which is stored in my
// project as a dependency, and assign it to the variable 'React'
import React from 'react'; // for creating and managing components
import ReactDOM from 'react-dom'; // for rendering to the DOM

/*
if it's a file we write, we have to provide a folder path to it

otherwise, if it's with npm, you can just write the name of the package
*/

import SearchBar from './components/search_bar';

// store id key
const API_KEY = "AIzaSyCb5C39mnDx1iGJQrCM2lS63OazpgCXlFQ";

// Create a new component. This component should produce
// some HTML.

/*
"const" is ES6 syntax. It's declaring a variable. const makes it
constant, so App will never be reassigned.
*/

// this is the new component; this is a type of component
// it's like a factory that produces instances that get sent to the DOM
const App = () => {
  /*
  This is JSX, which is transpiled by Webpack and Babel.
  It's JS code that produces HTML on the page.
  */
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on
// the page (in the DOM).
//ReactDOM.render(App); // this is passing a class
//ReactDOM.render(<App />); // this creates an instance and passes to ReactDOM.render()


// have to tell react where to render stuff
ReactDOM.render(<App />, document.querySelector('.container'));
