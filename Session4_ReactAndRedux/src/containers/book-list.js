import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(BookList);
