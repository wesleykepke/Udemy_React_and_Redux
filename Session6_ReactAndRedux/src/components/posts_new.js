import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
	render() {
		const { fields: { title, categories, content }, handleSubmit } = this.props;
		// equivalent to const handleSubmit = this.props.handleSubmit

		/*
		{...title} - this is destructuring. I want to pass this object into
		input, but I just want all of the properties of the title object to
		go into the input as keys:values
		*/

		return (
			<form onSubmit={handleSubmit}>
				<h3>Create A New Post</h3>
				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
				</div>

				<div className="form-group">
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
				</div>

				<div className="form-group">
					<label>Content</label>
					<input type="text" className="form-control" {...content} />
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

/*
reduxForms injects some helpers into this.props (like redux connect)
*/
export default reduxForm({
	form: 'PostsNew', // needs to be a unique token
	fields: ['title', 'categories', 'content']
})(PostsNew);
