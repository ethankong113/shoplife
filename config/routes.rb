Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :shops, only: [:index, :create, :show, :update, :destroy]
    resources :trips, only: [:index, :create, :show, :update, :destroy]
    resources :products, only: [:index, :create, :show, :update, :destroy]

    get 'profiles/:username', to: 'profiles#show'
    get 'follow_user/:followee_id', to: 'profiles#follow_user'
    get 'unfollow_user/:followee_id', to: 'profiles#unfollow_user'

    get 'get_followers/:username', to: 'profiles#get_followers'

    get 'following/users/:username', to: 'profiles#get_followees'

    get 'shoplist/username/:username', to: 'shop_lists#find_by_username'
    get 'shoplist/follower/:username', to: 'shop_lists#find_by_follower'
    get 'triplist/username/:username', to: 'trip_lists#find_by_username'
    get 'triplist/follower/:username', to: 'trip_lists#find_by_follower'

    post 'shop_follows/:id', to: 'shops#follow'
    delete 'shop_follows/:id', to: 'shops#unfollow'

    post 'trip_follows/:id', to: 'trips#follow'
    delete 'trip_follows/:id', to: 'trips#unfollow'

    get 'productlists/shop_id/:shop_id', to: 'product_lists#find_by_shop_id'
    get 'productlists/trip_id/:trip_id', to: 'product_lists#find_by_trip_id'
    get 'productlists/profile/:username', to: 'product_lists#find_by_profile'
    get 'productlists/query/:query', to: 'product_lists#find_by_query'
    get 'productlists/all', to: 'product_lists#find_all'

    get 'pins/:id', to: 'pins#index'
    post 'pins/:trip_id/:product_id', to: 'pins#create'
    delete 'pins/:trip_id/:product_id', to: 'pins#destroy'
    delete 'pins/from_board/:trip_id/:product_id', to: 'pins#unpin_from_board'
    delete 'pins/from_pins/:trip_id/:product_id', to: 'pins#unpin_from_pins'
  end


  root "static_pages#root"
end
