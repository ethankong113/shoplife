class Api::ProductsController < ApplicationController

  def show
    @product = Product.find(params[:id])
    if @product
      render "api/products/show"
    else
      render json: ["Could not find such product. Please try again."], status: 400
    end
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render "api/products/show"
    else
      render json: @product.errors.full_messages, status: 400
    end
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(product_params) && @product.nil? == false
      render "api/products/show"
    elsif @product.nil?
      render json: ["Could not find such product"], status: 400
    else
      render json: @product.errors.full_messages, status: 400
    end
  end

  def destroy
    @product = Product.find(params[:id])
    if @product.destroy && @product.nil? == false
      render "api/products/show"
    elsif @product.nil?
      render json: ["Could not find such product"], status: 400
    else
      render json: @product.errors.full_messages, status: 400
    end
  end

  private
  def product_params
    params.require(:product).permit(:productname, :description, :price, :shop_id, :img_url)
  end
end
