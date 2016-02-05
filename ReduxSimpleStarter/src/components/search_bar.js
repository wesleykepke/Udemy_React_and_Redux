/*
Need to do this because the JSX will be converted to something like
React.createClass. If we don't import React, this will throw an
error.
*/
import React from 'react';

const SearchBar = () => {
  return <input />;
};

/*
Now, any file in our app that imports search_bar.js will have
SearchBar available to it.
*/
export default SearchBar;
