Rails.application.routes.draw do
  resources :divisions
  resources :events
  resources :fights
  resources :fighters
  resources :gyms
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # get '/fighters', to: 'fighters#index'
  # show '/fighters/:id', to: 'fighters#show'
  # patch '/fighters/:id', to: 'fighters#update'

  root to: 'users#index'
  get '/users', to: 'users#index'
  get '/me', to: 'users#me'
  post '/login', to: 'users#login'
  post '/signup', to: 'users#create'
  get '/users/:id', to: 'users#show'
  
end
