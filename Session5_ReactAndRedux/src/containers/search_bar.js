import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

/*
In JS, calling "this" (like in onInputChange) is not defined; it has a
mystery context.

So, we need to add some code in our constructor to alleviate this
ambiguity.

This is plain, vanilla JS.
*/

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    // here, "this" is an instance of SearchBar
    // we are essentially overwriting this.onInputChange so that
    // it's defined to the current instance "this" of SearchBar
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
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
    this.props.fetchWeather(this.state.term);
    this.setState( { term: '' } );
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
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

/*
Remember, this causes the action creator, whenever it gets called
and returns an action, to send this action to the middleware and to
each of the reducers.
*/
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
