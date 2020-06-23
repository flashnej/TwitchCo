import React, { useState, useEffect } from 'react';
import './Blog.scss';
import { Redirect, Link } from "react-router-dom";
import BlogTile from './BlogTile'


const Blog = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('/api/v1/blogs')
    .then((response) => {
      if (response.ok) {
        return response
      }
    })
    .then((response) => response.json())
    .then((body) => {
      if (body.user) {
        debugger
        newBlog()
      }
      setBlogs(body.blogs)
    })
  }, []);

  let blogTiles = ''
  if (blogs.length !== 0) {
    blogTiles = blogs.map((blog) => {
      return <BlogTile
              key={blog.id}
              blog={blog}
              />
    })
  }

  const newBlog = () => {

  }


	return (
    <div>
  		<h2> Blog Posts: </h2>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {blogTiles}
        </div>
      </div>
    </div>
	);
};

export default Blog;
