class Api::ProductListsController < ApplicationController
  def find_by_shop_id
    @products = Product.where("shop_id = ?", params[:shop_id])
    if @products.nil? == false
      render 'api/product_lists/index'
    else
      render json: ["Could not find products."], status: 400
    end
  end

  def find_by_trip_id
    @products = Trip.find(params[:trip_id]).products
    if @products.nil? == false
      render 'api/product_lists/index'
    else
      render json: ["Could not find products."], status: 400
    end
  end

  def find_by_profile
    @profile = User.find_by(username: params[:username])
    @products = @profile.products
    @pins = @profile.pins
    if @products.nil? == false
      render 'api/product_lists/find_by_profile'
    else
      render json: ["Could not find products."], status: 400
    end
  end

  def find_by_query
    @products = Product.where("LOWER(productname) LIKE LOWER(?)", "%#{params[:query]}%").order(:id).limit(params[:limit]).offset(params[:offset])
    if @products.nil? == false
      render 'api/product_lists/index'
    else
      render json: ["Could not find products."], status: 400
    end
  end

  def find_all
    @products = Product.all
    if @products.nil? == false
      render 'api/product_lists/index'
    else
      render json: ["Could not find products."], status: 400
    end
  end
end
