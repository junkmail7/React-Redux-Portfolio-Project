Rails.application.routes.draw do
  resources :user_tricks
  resources :users
  resources :tricks
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
