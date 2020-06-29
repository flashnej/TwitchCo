class Api::V1::BlogsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    data = Blog.all
    render json: {user: current_user, blogs: data}
  end

  def show
    blog = Blog.find(params[:id])
    date = blog.created_at.localtime.strftime("%A, %B %d, %Y at %I:%M%p")
    render json: {blog: blog, date: date}
  end

  def create
    author = params["author"]
    title = params["title"]
    body = params["body"]
    blog = Blog.new(author: author, title: title, body: body)

    if blog.save
      render json: Blog.all
    end
  end
end
