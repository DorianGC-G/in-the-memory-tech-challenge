Rails.application.routes.draw do
  root 'pages#dashboard'
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      resources :memories, only: :index
      get 'index', to: "memories#index"
    end
  end
end
