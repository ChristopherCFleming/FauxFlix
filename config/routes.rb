Rails.application.routes.draw do
  
  resource :videos, only: [:show]


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    
  end

  

  root 'static_pages#root'
end
