class Api::V1::CandidatesController < ApplicationController
  protect_from_forgery with: :null_session

  def index

  end

  def create
    resume = params["resume"]
    user_info = JSON.parse(params["info"])
    @candidate = Candidate.new(first_name: user_info["firstName"], last_name: user_info["lastName"], email: user_info["email"], resume: resume)
    if resume.content_type === "application/pdf"
      status = {status: 'ok'}
    else
      status = {status: 'error'}
    end

    if @candidate.save
      NewResumeMailer.new_resume(user_info, resume).deliver
      render json: status
    end
  end
end
