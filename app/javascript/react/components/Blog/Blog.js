import React, { useState, useEffect } from 'react';
import { Redirect, Link } from "react-router-dom";
import BlogTile from './BlogTile'
import NewBlogForm from './NewBlogForm'


const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const [admin, setAdmin] = useState([])
  const [blogAuthor, setBlogAuthor] = useState('');
  const [blogTitle, setBlogTitle] = useState('');
  const [blogBody, setBlogBody] = useState('');

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
        setAdmin(body.user)
      }
      setBlogs(body.blogs)
    })
  }, []);

  const handleSubmit = () => {
    const droppackage = {author: blogAuthor, title: blogTitle, body: blogBody};
    console.log(droppackage);
    fetch("/api/v1/blogs", {
          credentials: "same-origin",
          method: "POST",
          body: JSON.stringify(droppackage),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then((response) => {
          if (response.ok) {
            return response
          } else {
            debugger
          }
        })
        .then((response) => response.json())
        .then((body) => {
          setBlogs(body)
        })
  }

  const handleChange = (event) => {
    if (event.currentTarget.id === "author") {
      setBlogAuthor(event.currentTarget.value)
    } else if (event.currentTarget.id === "title") {
      setBlogTitle(event.currentTarget.value)
    } else if (event.currentTarget.id === "body") {
      setBlogBody(event.currentTarget.value)
    }
  }

  let blogTiles = ''
  if (blogs.length !== 0) {
    blogTiles = blogs.map((blog) => {
      return <BlogTile
              key={blog.id}
              blog={blog}
              />
    })
  }

  let newBlogForm
  if (admin.id) {
    newBlogForm = <NewBlogForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}/>
  }

	return (
    <div className="blog">
    {newBlogForm}
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
