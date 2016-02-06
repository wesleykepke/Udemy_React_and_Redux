import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/indexs';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

/*
Purpose: Take app state as an argument, and whatever is returned
from this function will show up as props inside of BookList.

This function is what maps react to redux.

Two important facts:
If state changes, this function will immediately be called again
and a re-rendering will take place.

Whenever the state changes, it will be assigned as props above.
*/
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// Anything returns from this function will end up as props
// on the BookList container

// Allows us to type this.props.selectBook
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers. Passes actions to all the reducers!
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container - it need to know
// about this new dispatch method, selectBook. Make it available as
// a prop. 
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
