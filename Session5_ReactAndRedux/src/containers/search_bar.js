import React, { Component } from 'react';

/*
In JS, calling "this" (like in onInputChange) is not defined; it has a
mystery context.

So, we need to add some code in our constructor to alleviate this
ambiguity.

This is plain, vanilla JS.
*/

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    // here, "this" is an instance of SearchBar
    // we are essentially overwriting this.onInputChange so that
    // it's defined to the current instance "this" of SearchBar
    this.onInputChange = this.onInputChange.bind(this);
  }

  /*
  In JS, all DOM event handlers should receive an "event" object as
  a parameter.

  event.target.value is also plain, vanilla JS.
  */
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault(); // tell browser not to submit the form

    // we need to go and fetch weather data 
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}className="input-group">
        <input
          placeholder="Get a five-day corecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
             Submit
          </button>
        </span>
      </form>
    );
  }
}
