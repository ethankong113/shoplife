Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :shops, only: [:index, :create, :show, :update, :destroy]
    resources :products, only: [:index, :create, :show, :update, :destroy]
    get '/profiles/:username', to: 'profiles#show'
    get 'productlist/shop_id/:shop_id', to: 'product_lists#find_by_shop_id'
  end


  root "static_pages#root"
end
