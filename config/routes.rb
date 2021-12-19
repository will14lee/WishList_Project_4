Rails.application.routes.draw do
  
  resources :recipients
  resources :items
  get '/recipients/:recipients_id/items/', to: 'items#index'
  get '/recipients/:recipients_id/items/:id', to: 'items#show'
  patch '/recipients/:recipients_id/items/:id', to: 'items#update' 
  post '/recipients/:recipients_id/items/', to: 'items#create' 
  delete '/recipients/:recipients_id/items/:id', to: 'items#destroy' 

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
