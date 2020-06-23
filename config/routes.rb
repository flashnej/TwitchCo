Rails.application.routes.draw do
  root 'static_pages#index'

  get '/about', to: 'static_pages#index'
  get '/job-seekers', to: 'static_pages#index'
  get '/contact-us', to: 'static_pages#index'
  get '/blog', to: 'static_pages#index'

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :candidates, only: [:show, :create]
      resources :blogs, only: [:index]
    end
  end

end
