import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
	/*
	I want access to this router property, please go check through my parents to
	find it, and when you find it, assign it to this.context.router

	It's like props, but a little different in that we must explicitely define it.
	*/
	static contextTypes = {
		router: PropTypes.object
	};

	/*
	Here, props is from the form, and is not the props we're used to thinking
	about in React.
	*/
	onSubmit(props) {
		this.props.createPost(props)
			.then(() => {
				// blog post has been created, navigate the user to the index
				// we navigate by calling this.context.router.push with the new
				// path to navigate to
				this.context.router.push('/'); 
			});
	}

	render() {
		const { fields: { title, categories, content }, handleSubmit } = this.props;
		// equivalent to const handleSubmit = this.props.handleSubmit

		/*
		{...title} - this is destructuring. I want to pass this object into
		input, but I just want all of the properties of the title object to
		go into the input as keys:values
		*/

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create A New Post</h3>
				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
				</div>

				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
					<div className="text-help">
						{categories.touched ? categories.error : ''}
					</div>
				</div>

				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<input type="text" className="form-control" {...content} />
					<div className="text-help">
						{content.touched ? content.error : ''}
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

/*
Called with the values from the form.
*/
function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'Enter a username!';
	}

	if (!values.categories) {
		errors.categories = 'Enter categories!';
	}

	if (!values.content) {
		errors.content = 'Enter some content!';
	}

	return errors;
}

/*
reduxForms injects some helpers into this.props (like redux connect)

connect: first argument is mapStateToProps, second is mapDispatchToProps

reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
*/
export default reduxForm({
	form: 'PostsNew', // needs to be a unique token
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(PostsNew);
