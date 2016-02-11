import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
	/*
	This is a lifecycle method; React will call this function automatically
	whenever a component is about to rendered to the DOM for the first time.

	This essentially means that whenever out posts component is about the mount,
	we should have the data fetched for us.
	*/
	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>List of blog posts</div>
		);
	}
}

// First parameter is null because we have not defined mapStateToProps (yet)
export default connect(null, {fetchPosts})(PostsIndex);
