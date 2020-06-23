class Api::V1::BlogsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    data = Blog.all
    render json: {user: current_user, blogs: data}
  end

  def show
    blog = Blog.find(params[:id])
    render json: {blog: blog}
  end
end
