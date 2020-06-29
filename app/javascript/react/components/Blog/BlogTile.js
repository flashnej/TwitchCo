import React, { useState, useEffect } from 'react';
import { Redirect, Link } from "react-router-dom";


const BlogTile = (props) => {
  let blog = props.blog

	return (
    <div className="columns cell small-4">
		<Link to={`/blog/${props.blog.id}`}>{props.blog.title}</Link>
    <h4> {blog.author} </h4>
    <p> {blog.body.substr(0,100)}... </p>
    </div>
	);
};

export default BlogTile;
