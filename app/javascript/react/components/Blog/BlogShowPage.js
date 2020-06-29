import React, { useState, useEffect } from 'react';

const BlogShowPage = (props) => {
  const [date, setDate] = useState('')
  const [blog, setBlog] = useState({
    title:'',
    author:'',
    body:'',
    created_at:''
  })

  let id = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/blogs/${id}`)
    .then((response) => {
      if (response.ok) {
        return response
      }
    })
    .then((response) => response.json())
    .then((body) => {
      setBlog(body.blog)
      setDate(body.date)
    })
  }, []);

	return (
    <div className="blogShowPage columns cell small-4">
		<h1> {blog.title} </h1>
    <h2> {blog.author} </h2>
    <p> {date} </p>
    {blog.body}
    </div>
	);
};

export default BlogShowPage;
