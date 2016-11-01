## Component Hierarchy

**AuthFormContainer**
- AuthForm

**SearchPageContainer**
- SearchBar
- SearchResult

**SearchBar**
- SearchBar
  - SuggestedSearchTerm

**SearchResult**
- ProductBoard
  - ProductIndex
    - ProductDetail

**ProfilePageContainer**
- ProfilePage
  - SearchBar
  - ProfileDetail
    - Follower
    - Following
    - Pin
    - TripList
    - ShopList

**TripListContainer**
- TripListDetail
- ProductBoard
  - ProductDetail
- MapComponent

**ShopContainer**
- ShopDetail
- ProductBoard
  - ProductDetail
- MapComponent

**ProductDetail**
- ProductDetail
  - PinProduct
    - ChooseTrip
    - CreateTrip
- MapComponent

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
| "/home/profile/:tripId" | "TripListContainer" |
| "/home/profile/:tripId/:productId" | "ProductDetail" |
| "/home/profile/:shopId" | "ShopContainer" |
| "/home/profile/:shopId/:productId" | "ProductDetail" |
