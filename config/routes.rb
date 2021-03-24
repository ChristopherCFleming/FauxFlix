Rails.application.routes.draw do

  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :videos, only: [:show, :index]
    resources :genres, only: [:index, :show]
    resources :lists, only: [:index, :create, :show, :destroy]
  end
end
