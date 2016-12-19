# 1) 10 user accounts plus 1 guest account plus 1 admin account
# 2) 20 shops => watch, suits, sneakers, suits, fall outfit, winter outfit, bags, luxury bag, high heels,
# tshirt, jewels, toys
# 3) 3 to 7 products per shop
# 4) make trips 1 to 2 per user
# 5) user follow users, shops, and trips

# User.create(username: "john222", password: "john222", firstname: "John", lastname: "Cantor")
User.create({username: "john100" ,password: "john100", firstname: "John",lastname: "Zhang"})
User.create({username: "alex100",password: "alex100", firstname: "Alex",lastname:"Doundakov" })
User.create({username: "sandy100",password: "sandy100", firstname: "Sandy",lastname:"Williams" })
User.create({username: "ashish100",password: "ashish100", firstname: "Ashish",lastname:"Khan" })
User.create({username: "brad100",password: "brad100", firstname: "Brad",lastname:"Pitt" })
User.create({username: "ryan100",password: "ryan100", firstname: "Ryan",lastname:"Gosling" })
User.create({username: "jlaw100",password: "jlaw100", firstname: "Jennifer",lastname:"Lawrence" })
User.create({username: "matt100",password: "matt100", firstname: "Matt",lastname:"Damon" })
User.create({username: "donnie100",password: "donnie100", firstname: "Donnie",lastname:"Yen" })
User.create({username: "ethan100",password: "ethan100", firstname: "Ethan",lastname:"Wan" })
User.create({username: "mike100",password: "mike100", firstname: "Mike",lastname:"Barile" })
User.create({username: "rdj100",password: "rdj100", firstname: "Robert",lastname:"Downey Jr." })
User.create({username: "admin100",password: "dragonFLY123", firstname: "Admin",lastname:"ShopLife" })
User.create({username: "cat100",password: "cat100", firstname: "Grumpy",lastname:"Cat" })

admin_id = User.find_by_username("admin100")

Shop.create({shopname: "The Watch Store", description: "", location: "San Francisco", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481908424/shop_logo/f659db0c7a66a297969c6f63518ee36f.jpg", owner_id: admin_id})
Shop.create({shopname: "Finest Suits", description: "", location: "San Francisco", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481908538/shop_logo/o-SUITS-facebook.jpg", owner_id: admin_id})
Shop.create({shopname: "Nice Shoes There", description: "", location: "San Francisco", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481908583/shop_logo/sneaker-awards-102703854.jpg", owner_id: admin_id})
Shop.create({shopname: "Forever22", description: "", location: "San Francisco", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481912109/shop_logo/images.jpg", owner_id: admin_id})
Shop.create({shopname: "Winter Memories", description: "", location: "San Francisco", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481909137/shop_logo/30-Winter-Outfit-Ideas-For-Women-Street-Style-Trends-25.jpg", owner_id: admin_id})
Shop.create({shopname: "Happy Feet", description: "", location: "San Francisco", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481908922/shop_logo/176283-Colorful-Heel-Collection.jpg", owner_id: admin_id})
Shop.create({shopname: "IDEA Furniture", description: "", location: "San Francisco", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481909176/shop_logo/I.O.-Metro-in-Dallas_091740.jpg", owner_id: admin_id})
Shop.create({shopname: "Babydom", description: "", location: "San Francisco", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481908745/shop_logo/Educational-toys-Tobbles-Fat-Brain-Toys_zps7vqqapjc.jpg", owner_id: admin_id})
Shop.create({shopname: "SF Boutique", description: "", location: "San Francisco", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481908797/shop_logo/Free-shipping-45cm-lovely-angel-teddy-bear-with-wing-plush-toys-stuffed-doll-girls-birthday-and.jpg_640x640.jpg", owner_id: admin_id})
Shop.create({shopname: "San Francisco Toys", description: "", location: "San Francisco", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481908817/shop_logo/dd4023cd-28ef-49a0-b133-9b71f37318b4_1.c7df5f6b2f6ec86af5ba1e41c10b0ac6.jpg", owner_id: admin_id})

shop_id = Shop.find_by_shopname("The Watch Store")
Product.create({productname: "", description, "", img_url: "", shop_id: shop_id, price: 1000})
Product.create({productname: "Talking", description, "A fine watch from Talking", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657842/watch_vbake9.jpg", shop_id: shop_id, price: 200})
Product.create({productname: "Emporio Armani Black", description, "A classic black watch from Emporio Armani", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657842/emprorio_watch_g9kihv.jpg", shop_id: shop_id, price: 1000})
Product.create({productname: "Nixon Black", description, "All black. Mysterious watch.", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657842/black_watch_lyt8wm.jpg", shop_id: shop_id, price: 1000})

shop_id = Shop.find_by_shopname("Finest Suits")
Product.create({productname: "Classic Navy Suits", description, "Classic blue.", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657842/blue_suit_01_tmhfrz.jpg", shop_id: shop_id, price: 300})
Product.create({productname: "Dark Navy", description, "Looks good for your first job", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657841/blue_suit_03_mcelue.jpg", shop_id: shop_id, price: 1000})
Product.create({productname: "Prada Men's Shoes", description, "Brown Shoes", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657783/shoe_03_m89tj0.jpg", shop_id: shop_id, price: 1200})

shop_id = Shop.find_by_shopname("Nice Shoes There")
Product.create({productname: "Brown Sneakers", description, "Very good shoes", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657782/shoe_02_ujik7w.jpg", shop_id: shop_id, price: 80})
Product.create({productname: "Blue Sneakers", description, "Looks good on your first date", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657781/sneaker_02_lkloic.jpg", shop_id: shop_id, price: 120})
Product.create({productname: "Black Sneakers", description, "Our store's best", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657782/sneaker04_aforfb.jpg", shop_id: shop_id, price: 550})

shop_id = Shop.find_by_shopname("Forever22")
Product.create({productname: "", description, "", img_url: "", shop_id: shop_id, price: 1000})
Product.create({productname: "", description, "", img_url: "", shop_id: shop_id, price: 1000})

shop_id = Shop.find_by_shopname("Winter Memories")
Product.create({productname: "", description, "", img_url: "", shop_id: shop_id, price: 1000})
Product.create({productname: "", description, "", img_url: "", shop_id: shop_id, price: 1000})

shop_id = Shop.find_by_shopname("Happy Feet")
Product.create({productname: "Kaki Heels", description, "Lovely Kaki Heels", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657781/heels_01_ovf7x5.jpg", shop_id: shop_id, price: 1300})
Product.create({productname: "Black Heals", description, "A pair of black heals", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657781/heels_04_ope0fj.jpg", shop_id: shop_id, price: 1400})

shop_id = Shop.find_by_shopname("IDEA Furniture")
Product.create({productname: "Fall Outfit #1", description, "All blue for fall", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657781/fall_outfit_03_ug0spt.jpg", shop_id: shop_id, price: 3000})
Product.create({productname: "Fall Outfit #2", description, "Lovely outfit for fall. Comes with the LV bag.", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657781/fall_outfit_04_bkbeys.jpg", shop_id: shop_id, price: 5000})

shop_id = Shop.find_by_shopname("Babydom")
Product.create({productname: "", description, "", img_url: "", shop_id: shop_id, price: 1000})
Product.create({productname: "", description, "", img_url: "", shop_id: shop_id, price: 1000})

shop_id = Shop.find_by_shopname("SF Boutique")
Product.create({productname: "", description, "", img_url: "", shop_id: shop_id, price: 1000})
Product.create({productname: "", description, "", img_url: "", shop_id: shop_id, price: 1000})

shop_id = Shop.find_by_shopname("San Francisco Toys")
Product.create({productname: "", description, "", img_url: "", shop_id: shop_id, price: 1000})
Product.create({productname: "", description, "", img_url: "", shop_id: shop_id, price: 1000})
