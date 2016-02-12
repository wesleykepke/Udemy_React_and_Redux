import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

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

	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
					<span className="pull-xs-right">{post.categories}</span>
					<strong>{post.title}</strong>
				</li>
			)
		})
	}

	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="posts/new" className="btn btn-primary">
						Add a Post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts.all
	};
}

// First parameter is null because we have not defined mapStateToProps (yet)
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
