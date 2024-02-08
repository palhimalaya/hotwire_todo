Rails.application.routes.draw do
  root "tasks#index"

  resources :tasks

  patch "tasks/:id/toggle", to: "tasks#toggle"
end
