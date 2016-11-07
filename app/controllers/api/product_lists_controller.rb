class Api::ProductListsController < ApplicationController
  def find_by_shop_id
    @products = Product.where(shop_id: params[:shop_id])
    if @products.nil? == false
      render 'api/product_lists/find_by_shop_id'
    else
      render json: ["Could not find products."], status: 400
    end
  end
end
