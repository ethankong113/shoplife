Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :shops, only: [:index, :create, :show, :update, :destroy]
    resources :products, only: [:index, :create, :show, :update, :destroy]
    get '/profiles/:username', to: 'profiles#show'
    get 'shoplist/username/:username', to: 'shop_lists#find_by_username'
    get 'productlist/shop_id/:shop_id', to: 'product_lists#find_by_shop_id'
    get 'follow_user/:following_id', to: 'profiles#follow_user'
  end


  root "static_pages#root"
end
