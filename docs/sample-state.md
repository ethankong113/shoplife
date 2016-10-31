{
  currentUser: {
    id: 1,
    username: "test100"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createShop: {errors: []},
    createTour: {}
    createProduct: {}
  },
  searchResults: {
    profile: {
      profileId: {
        profileId: 1,
        profileName: "test200",
        followers: [1,3,4],
        followings: [1,3,4],
        shops: {
          shopId: {
            shopId: 1,
            picture: "img_link",
            name: "Happy Store"
          }
        },
        tours: {
          tourId: {
            tourId,
            pictures: {
              pictureId: {
                pictureId: 1,
                pictureUrl: "img_link"
                }
              },
            name: "Getting shoes"
          }
        }
      }
    },
    products: {
      productId: {
        productId: 1,
        picture: "img_link",
        name: "Shoe"
      }
    },
    // Ken: This information should be stored with the product.
    productDetail: {
      productId: 1,
      picture: "img_link",
      name: "Shoe",
      shopId: 1,
      shopName: "Happy Store",
      productDesc: "Very nice shoes"
    }
  }
}
