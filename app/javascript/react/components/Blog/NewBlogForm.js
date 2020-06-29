import React, {useState} from 'react';
import { Button, Input } from 'semantic-ui-react';

const NewBlogForm = (props) => {


	return (
		<div className='NewBlogForm'>
			<h1 className='title'>Enter a new Blog</h1>
			<div className="inputs">
				<Input id="author" onChange={props.handleChange} placeholder='Author' />
				<Input id="title" onChange={props.handleChange} placeholder='Title' />
				<Input id="body" onChange={props.handleChange} placeholder='Body' />
			</div>
			<Button onClick={() => props.handleSubmit()}>Submit</Button>
		</div>
	);
};

export default NewBlogForm;
