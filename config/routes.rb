Rails.application.routes.draw do
  root 'static_pages#index'

  get '/about', to: 'static_pages#index'
  get '/job-seekers', to: 'static_pages#index'
  get '/contact-us', to: 'static_pages#index'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
