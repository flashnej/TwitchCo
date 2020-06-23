import React, { useState, useEffect } from 'react';


const BlogTile = (props) => {
  let blog = props.blog

	return (
    <div>
		<h2> {blog.title} </h2>
    <h4> {blog.author} </h4>
    <p> {blog.body} </p>
    </div>
	);
};

export default BlogTile;
