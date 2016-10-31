## Component Hierarchy

**AuthFormContainer**
- AuthForm

**SearchBarContainer**
- SearchBar
  - SearchBoard
    - SearchResult
      - ProductDetail

**ProfileContainer**
- ProfileDetail
  - Follower
  - Following
  - Pin
  - TourList

**TourListContainer**
- TourListDetail
- ProductBoard
  - ProductDetail

**ShopContainer**
- ShopDetail
- ProductBoard
  - ProductDetail

## Routes

|Path | Components |
|-----|------------|
| "/sign-up" | "AuthFormContainer" |
| "/log-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/search" | "SearchBarContainer" |
| "/home/search-results" | "SearchResult" |
| "/home/search-results/:productId" | "ProductDetail" |
| "/home/profile" | "ProfileContainer" |
| "/home/profile/:tourId" | "TourListContainer" |
| "/home/profile/:tourId/:productId" | "ProductDetail" |
| "/home/profile/:shopId" | "ShopContainer" |
| "/home/profile/:shopId/:productId" | "ProductDetail" |
