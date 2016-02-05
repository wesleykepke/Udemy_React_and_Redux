/*
Need to do this because the JSX will be converted to something like
React.createClass. If we don't import React, this will throw an
error.

import React and pull off the property component as a variable
called component
*/
import React, { Component } from 'react';

/*
this is a functional component
const SearchBar = () => {
  return <input />;
};
*/

/*
this is a class component, created with ES6 syntax

it allows us to have more functionality

extending react.component makes it a class component, where we
must always have a render method and return some JSX
*/
class SearchBar extends Component {
  /*
  initialize state in a class component
  */
  constructor(props) {
    super(props);

    /*
    term will be the property that we update state on whenever
    the user types something in 
    */
    this.state = {term: ''};
  }

  render() { // must have this function

    /*
    create a new input element and pass it a prop called
    onChange, which has value this.onInputChange
    */
    //return <input onChange={this.onInputChange} />;
    return <input onChange={event => console.log(event.target.value)} />;
  }

  /*
  this is an event handler

  name convention: <handle/on><name of element for event><event type>
  onInputChange(event) {
    // event: describes stuff about the event that changed
    console.log(event.target.value);
  }
  */
}

/*
Now, any file in our app that imports search_bar.js will have
SearchBar available to it.
*/
export default SearchBar;
