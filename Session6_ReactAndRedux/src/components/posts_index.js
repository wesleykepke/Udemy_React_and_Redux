import React, { Component } from 'react';

class PostsIndex extends Component {
	/*
	This is a lifecycle method; React will call this function automatically
	whenever a component is about to rendered to the DOM for the first time.

	This essentially means that whenever out posts component is about the mount,
	we should have the data fetched for us. 
	*/
	componentWillMount() {
		console.log("This would be a good time to call an action creator to fetch posts");
	}

	render() {
		return (
			<div>List of blog posts</div>
		);
	}
}

export default PostsIndex;
