class NewResumeMailer < ApplicationMailer
  def new_resume(candidate, resume)
    @candidate = candidate
    attachments['Resume.pdf'] = File.read(resume.path)
    mail(to: "flashnej@gmail.com", subject: 'New Candidate Resume')
  end
end
