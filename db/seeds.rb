# 1) 10 user accounts plus 1 guest account plus 1 admin account
# 2) 20 shops => watch, suits, sneakers, suits, fall outfit, winter outfit, bags, luxury bag, high heels,
# tshirt, jewels, toys
# 3) 3 to 7 products per shop
# 4) make trips 1 to 2 per user
# 5) user follow users, shops, and trips

# User.create(username: "john222", password: "john222", firstname: "John", lastname: "Cantor")
User.create({username: "john100" ,password: "john100", firstname: "John", lastname: "Zhang"})
User.create({username: "alex100",password: "alex100", firstname: "Alex", lastname:"Doundakov" })
User.create({username: "sandy100",password: "sandy100", firstname: "Sandy", lastname:"Williams" })
User.create({username: "ashish100",password: "ashish100", firstname: "Ashish",lastname:"Khan" })
User.create({username: "brad100",password: "brad100", firstname: "Brad", lastname:"Pitt" })
User.create({username: "ryan100",password: "ryan100", firstname: "Ryan", lastname:"Gosling" })
User.create({username: "jlaw100",password: "jlaw100", firstname: "Jennifer", lastname:"Lawrence" })
User.create({username: "matt100",password: "matt100", firstname: "Matt", lastname:"Damon" })
User.create({username: "donnie100",password: "donnie100", firstname: "Donnie", lastname:"Yen" })
User.create({username: "ethan100",password: "ethan100", firstname: "Ethan",lastname:"Wan" })
User.create({username: "mike100",password: "mike100", firstname: "Mike",lastname:"Barile" })
User.create({username: "rdj100",password: "rdj100", firstname: "Robert",lastname:"Downey Jr." })
User.create({username: "cat100",password: "cat100", firstname: "Grumpy",lastname:"Cat" })
User.create({username: "admin100",password: "dragonFLY123", firstname: "Admin",lastname:"ShopLife" })
User.create({username: "guest123",password: "guest123", firstname: "Bean",lastname:"Mr.", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483749893/5eHq-FXQ_rbguv5.jpg" })
#1 to 13
admin_id = User.find_by_username("admin100").id
guest_id = User.find_by_username("guest123").id

Shop.create({shopname: "The Watch Store", description: "", location: "San Francisco", lat: 37.7843, lng: -122.4032, img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481908424/shop_logo/f659db0c7a66a297969c6f63518ee36f.jpg", owner_id: admin_id})
Shop.create({shopname: "Finest Suits", description: "", location: "San Francisco", lat: 37.7843, lng: -122.4132, img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481908538/shop_logo/o-SUITS-facebook.jpg", owner_id: admin_id})
Shop.create({shopname: "Nice Shoes There", description: "", location: "San Francisco", lat: 37.7843, lng: -122.3932, img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481908583/shop_logo/sneaker-awards-102703854.jpg", owner_id: admin_id})
Shop.create({shopname: "Forever22", description: "", location: "San Francisco", lat: 37.7943, lng: -122.4132, img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481912109/shop_logo/images.jpg", owner_id: admin_id})
Shop.create({shopname: "Winter Memories", description: "", location: "San Francisco", lat: 37.7743, lng: -122.3932, img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481909137/shop_logo/30-Winter-Outfit-Ideas-For-Women-Street-Style-Trends-25.jpg", owner_id: admin_id})
Shop.create({shopname: "Happy Feet", description: "", location: "San Francisco", lat: 37.7943, lng: -122.4082, img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481908922/shop_logo/176283-Colorful-Heel-Collection.jpg", owner_id: admin_id})
Shop.create({shopname: "IDEA Furniture", description: "", location: "San Francisco", lat: 37.7743, lng: -122.3992, img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481909176/shop_logo/I.O.-Metro-in-Dallas_091740.jpg", owner_id: admin_id})
Shop.create({shopname: "Babydom", description: "", location: "San Francisco", lat: 37.7988, lng: -122.4102, img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481908745/shop_logo/Educational-toys-Tobbles-Fat-Brain-Toys_zps7vqqapjc.jpg", owner_id: admin_id})
Shop.create({shopname: "SF Boutique", description: "", location: "San Francisco", lat: 37.7700, lng: -122.4000, img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481908797/shop_logo/Free-shipping-45cm-lovely-angel-teddy-bear-with-wing-plush-toys-stuffed-doll-girls-birthday-and.jpg_640x640.jpg", owner_id: admin_id})
Shop.create({shopname: "San Francisco Toys", description: "", location: "San Francisco", lat: 37.7900, lng: -122.3900, img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481908817/shop_logo/dd4023cd-28ef-49a0-b133-9b71f37318b4_1.c7df5f6b2f6ec86af5ba1e41c10b0ac6.jpg", owner_id: admin_id})

Shop.create({shopname: "Tokyo Express", description: "", location: "Tokyo", lat: 35.7005, lng: 139.7853, img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483746142/shop_logo/tokyo-on-cheap-shopping-arcade-c827aaa317f2.jpg", owner_id: admin_id})
Shop.create({shopname: "Akihabara!", description: "", location: "Tokyo", lat: 35.7021, lng: 139.7753, img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483746240/shop_logo/Akihabara-The-Gamers-Mecca.jpg", owner_id: admin_id})


#product
#Product.create({productname: "", description, "", img_url: "", shop_id: shop_id.id, price: 40})

Product.create({productname: "Talking", description: "A fine watch from Talking", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657842/watch_vbake9.jpg", shop_id: Shop.find_by_shopname("The Watch Store").id, price: 200})
Product.create({productname: "Emporio Armani Black", description: "A classic black watch from Emporio Armani", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657842/emprorio_watch_g9kihv.jpg", shop_id: Shop.find_by_shopname("The Watch Store").id, price: 1000})
Product.create({productname: "Diner Table Set", description: "circular design. design with small space in mind.", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483756594/product/7309c1381ec82dc2b51c82d8e4f9dece.jpg", shop_id: Shop.find_by_shopname("IDEA Furniture").id, price: 800})
Product.create({productname: "Flying Dragon Katana", description: "A katana with a white flying dragon", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483746796/50be08e59b4985a565436712b12b415f_levitv.jpg", shop_id: Shop.find_by_shopname("Tokyo Express").id, price: 3000})
Product.create({productname: "Naruto Manga Box Set", description: "Watch your favorite anime", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483747113/9781421583341_manga-naruto-box-set-3-primary_ue8iew.jpg", shop_id: Shop.find_by_shopname("Akihabara!").id, price: 100})
Product.create({productname: "Comfortable Couch", description: "very comfortable", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483756632/product/e66d1a6c23f34715937d029edaa2914b.jpg", shop_id: Shop.find_by_shopname("IDEA Furniture").id, price: 200})
Product.create({productname: "Bookshelf #2", description: "Another bestselling bookshelf", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483756668/product/f00820922782850185f9ffc997d6b78e.jpg", shop_id: Shop.find_by_shopname("IDEA Furniture").id, price: 240})
Product.create({productname: "Chair", description: "simple and comfortable", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483756679/product/leather_20furniture.jpg", shop_id: Shop.find_by_shopname("IDEA Furniture").id, price: 200})
Product.create({productname: "Bravo Stroller", description: "Three in one", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483745067/slide_422976_5427178_free_it5iv1.jpg", shop_id: Shop.find_by_shopname("Babydom").id, price: 349})
Product.create({productname: "Seiko Steel", description: "Stainless Steel from Seiko", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483757548/product/bfe8968cc7cd87ce3264929960474486.jpg", shop_id: Shop.find_by_shopname("The Watch Store").id, price: 999})
Product.create({productname: "Business Casual #4", description: "looking good", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483757231/product/141acfd5bbc64b569b0218e24a964167.jpg", shop_id: Shop.find_by_shopname("Finest Suits").id, price: 499})
Product.create({productname: "Brown Sneakers", description: "Very good shoes", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657782/shoe_02_ujik7w.jpg", shop_id: Shop.find_by_shopname("Nice Shoes There").id, price: 80})
Product.create({productname: "Summer Outfit #1", description: "Top choice for summer", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483745278/y_rrnlhf.jpg", shop_id: Shop.find_by_shopname("Forever22").id, price: 200})
Product.create({productname: "Summer Outfit #2", description: "Very lovely. Very adorable.", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483745300/6ba8ba9b34453d2f7b23cefe2cc5fe13_v9ktmu.jpg", shop_id: Shop.find_by_shopname("Forever22").id, price: 280})
Product.create({productname: "Blue Sneakers", description: "Looks good on your first date", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657781/sneaker_02_lkloic.jpg", shop_id: Shop.find_by_shopname("Nice Shoes There").id, price: 120})
Product.create({productname: "Black Sneakers", description: "Our store's best", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657782/sneaker04_aforfb.jpg", shop_id: Shop.find_by_shopname("Nice Shoes There").id, price: 550})
Product.create({productname: "Nike Red", description: "Red Sneakers from Nike", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483757770/product/06e923299c905876118fbd37d94937bf.jpg", shop_id: Shop.find_by_shopname("Nice Shoes There").id, price: 550})
Product.create({productname: "Hightop Sneaker", description: "Gound buckle-front calfskin", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483757968/product/b28aa1f583cf3f0aef864ac1d3d13e7f.jpg", shop_id: Shop.find_by_shopname("Nice Shoes There").id, price: 550})
Product.create({productname: "Blue Striped Shirt", description: "Cool and relaxed beach men outfit", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483758305/product/4aba5a386387483c6690d7a12dd697db.jpg", shop_id: Shop.find_by_shopname("Forever22").id, price: 199})
Product.create({productname: "Red Shorts", description: "red shorts for men", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483758406/product/8d71187a1c13642fb6902cc449964e2a.jpg", shop_id: Shop.find_by_shopname("Forever22").id, price: 99})
Product.create({productname: "Sofa Table", description: "A table with your sofa", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483756564/product/ff60f6c19622cdf2c49ef1c8b1327f1f.jpg", shop_id: Shop.find_by_shopname("IDEA Furniture").id, price: 200})
Product.create({productname: "Baby Car Seat", description: "Very comfortable for your loved baby", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483745081/slide_422976_5427338_free_ikjrvf.jpg", shop_id: Shop.find_by_shopname("Babydom").id, price: 129})
Product.create({productname: "Bear Key Chain", description: "Goes well with your bag", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483745665/mini-key-chain-teddy-bear-mini-teddy_f35miz.jpg", shop_id: Shop.find_by_shopname("SF Boutique").id, price: 20})
Product.create({productname: "Handmade Teddy Bear", description: "A cute stuffed teddy bear", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483745713/il_340x270.1070151898_1yzv_tk5cts.jpg", shop_id: Shop.find_by_shopname("SF Boutique").id, price: 600})
Product.create({productname: "Fall Outfit #3", description: "Our best choice", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657781/fall_outfit_07_rjeuxz.jpg", shop_id: Shop.find_by_shopname("Winter Memories").id, price: 680})
Product.create({productname: "Fall Outfit #4", description: "Lovely", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483758131/product/c6e6e9082a4f26b9b769a7a41c45a104.jpg", shop_id: Shop.find_by_shopname("Winter Memories").id, price: 680})
Product.create({productname: "Business Casual #2", description: "full set", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483757254/product/1edd763d2ecf612377ec1ba8571ebec4.jpg", shop_id: Shop.find_by_shopname("Finest Suits").id, price: 600})
Product.create({productname: "Business Casual #3", description: "full set", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483757244/product/7342afcaec9df975786d3830e52a6866.jpg", shop_id: Shop.find_by_shopname("Finest Suits").id, price: 599})
Product.create({productname: "Summer Outfit #3", description: "Lovely", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483758686/product/eb80d93f0ea2d689e99c1e8f8b9a2860.jpg", shop_id: Shop.find_by_shopname("Forever22").id, price: 299})
Product.create({productname: "Strappy Backless", description: "Skater Dress", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483758734/product/694bb3383d1441d14c333872224f3cf4.jpg", shop_id: Shop.find_by_shopname("Forever22").id, price: 23})
Product.create({productname: "Fall Outfit #1", description: "Fall Outfit #1", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657781/fall_outfit_09_zlkq7y.jpg", shop_id: Shop.find_by_shopname("Winter Memories").id, price: 1000})
Product.create({productname: "Fall Outfit #2", description: "Lovely outfit for fall. Comes with the LV bag.", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657781/fall_outfit_04_bkbeys.jpg", shop_id: Shop.find_by_shopname("Winter Memories").id, price: 800})
Product.create({productname: "Fall Outfit #5", description: "Lovely", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483758091/product/2eaed98b62fa043a2fec720905a44b06.jpg", shop_id: Shop.find_by_shopname("Winter Memories").id, price: 680})
Product.create({productname: "Kaki Heels", description: "Lovely Kaki Heels", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657781/heels_01_ovf7x5.jpg", shop_id: Shop.find_by_shopname("Happy Feet").id, price: 1300})
Product.create({productname: "Black Heals", description: "A pair of black heals", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657781/heels_04_ope0fj.jpg", shop_id: Shop.find_by_shopname("Happy Feet").id, price: 1400})
Product.create({productname: "Grey Lace Up", description: "Leading Role Grey Suede", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483759353/product/ece76a7a05b36515f8d916190499b1c0.jpg", shop_id: Shop.find_by_shopname("Happy Feet").id, price: 36})
Product.create({productname: "White Heels", description: "White heels for women", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483759303/product/448df155d3a5112f612e2efcbee31dd7.jpg", shop_id: Shop.find_by_shopname("Happy Feet").id, price: 399})
Product.create({productname: "Chuncky Heels", description: "Ankle Strap Open Toe", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483759238/product/85e25a1e8e569a018a85930a134fd73b.jpg", shop_id: Shop.find_by_shopname("Happy Feet").id, price: 499})
Product.create({productname: "Purple Stiletto", description: "Purple Stiletto High Heel", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483759423/product/b489b96efa0f7df36e96463ab0961cfe.jpg", shop_id: Shop.find_by_shopname("Happy Feet").id, price: 68})
Product.create({productname: "Polka Dot Bowknot", description: "Polka Dot Bowknot Slim Stiletto", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483759497/product/a6549e505d771246c36379c091d7ddeb.jpg", shop_id: Shop.find_by_shopname("Happy Feet").id, price: 38})
Product.create({productname: "Timex Black", description: "All Black with yellow arms", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483757620/product/9106d2d382429b102631bc6a7d840536.jpg", shop_id: Shop.find_by_shopname("The Watch Store").id, price: 599})
Product.create({productname: "Skagen", description: "Rungested Leather Strap Watch", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483757643/product/e4053f1d751487770673e78934c3acd9.jpg", shop_id: Shop.find_by_shopname("The Watch Store").id, price: 110})
Product.create({productname: "Classic Navy Suits", description: "Classic blue.", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657842/blue_suit_01_tmhfrz.jpg", shop_id: Shop.find_by_shopname("Finest Suits").id, price: 300})
Product.create({productname: "OPM Figures Full Set", description: "A full set of cute one punch man figures", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483747579/FIGURE-014894_mxxzoy.jpg", shop_id: Shop.find_by_shopname("Akihabara!").id, price: 200})
Product.create({productname: "Prada Men's Shoes", description: "Brown Shoes", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657783/shoe_03_m89tj0.jpg", shop_id: Shop.find_by_shopname("Finest Suits").id, price: 1200})
Product.create({productname: "Grey Suits", description: "Comes with bow tie", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483756980/product/f4d92604ed60bc283ae074c2f8228284.jpg", shop_id: Shop.find_by_shopname("Finest Suits").id, price: 800})
Product.create({productname: "Business Casual #1", description: "full set", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483757065/product/5b0e14fe65c34ebc62b928d82f314deb.jpg", shop_id: Shop.find_by_shopname("Finest Suits").id, price: 400})
Product.create({productname: "Dark Navy", description: "Looks good for your first job", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657841/blue_suit_03_mcelue.jpg", shop_id: Shop.find_by_shopname("Finest Suits").id, price: 1000})
Product.create({productname: "Nixon Black", description: "All black. Mysterious watch.", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481657842/black_watch_lyt8wm.jpg", shop_id: Shop.find_by_shopname("The Watch Store").id, price: 1000})
Product.create({productname: "MVMT watch", description: "White/Tan Leather", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483757371/product/cce525e75f3481067029f80abeafc770.jpg", shop_id: Shop.find_by_shopname("The Watch Store").id, price: 799})
Product.create({productname: "Long Neck Blue Top", description: "long neck", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483758432/product/40be54e1fb8a66d744a49d4b7d8fde3c.jpg", shop_id: Shop.find_by_shopname("Forever22").id, price: 199})
Product.create({productname: "Orange Dress", description: "Very orange", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483758543/product/1cf07ef7dd21c49713886f53b75945bc.jpg", shop_id: Shop.find_by_shopname("Forever22").id, price: 199})
Product.create({productname: "Fossil Men's", description: "Charcoal color watch for men", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483757394/product/f311b8913af1b9c0769dd047dacc979c.jpg", shop_id: Shop.find_by_shopname("The Watch Store").id, price: 799})
Product.create({productname: "Nightstand Walnut", description: "Goes well with your bed", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483756342/product/50067024.jpg", shop_id: Shop.find_by_shopname("IDEA Furniture").id, price: 120})
Product.create({productname: "Bookshelf #1", description: "Very stylish bookshelf", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483756290/product/172bf8ac861d868baeb6113a3109d111.jpg", shop_id: Shop.find_by_shopname("IDEA Furniture").id, price: 300})
Product.create({productname: "Feit's", description: "Feit's Pyntha Low Cork", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483757783/product/a5ec8b39672b6bac2592dd5078a15f7d.jpg", shop_id: Shop.find_by_shopname("Nice Shoes There").id, price: 550})
Product.create({productname: "Timberlank Black", description: "Black Sneakers from Timeberland. Durable.", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483757937/product/3b102470852e77195bfa054407fbe9e1.jpg", shop_id: Shop.find_by_shopname("Nice Shoes There").id, price: 550})
Product.create({productname: "Woodeb Chair", description: "chair made of wood", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483756317/product/Good-Jcpenney-Dining-Room-Chairs-YH19.jpg", shop_id: Shop.find_by_shopname("IDEA Furniture").id, price: 200})
Product.create({productname: "Red Kimono for Woman", description: "very nice Japanese kimono for woman", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483746527/yukata-kimono-hairstyle-24-450x600_ga5lze.jpg", shop_id: Shop.find_by_shopname("Tokyo Express").id, price: 200})
Product.create({productname: "Black & White Kimono", description: "kimono in B & W", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483746593/66725dddeab5035835eee690db0c6464_xmu4ui.jpg", shop_id: Shop.find_by_shopname("Tokyo Express").id, price: 280})
Product.create({productname: "Panda Ball", description: "A giant ball of PANDAAAAA!!", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483745732/squishables-stuffed-panda-bear_ihb5ba.jpg", shop_id: Shop.find_by_shopname("SF Boutique").id, price: 200})
Product.create({productname: "Stuffed Pikachu", description: "Our best selling product", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483745444/pTRU1-23558390enh-z6_kvsdus.jpg", shop_id: Shop.find_by_shopname("San Francisco Toys").id, price: 40})
Product.create({productname: "Wood Truck", description: "A toy truck made of wood", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483745554/104d59a3cf99a48b09676049876b83bc_yi1hh3.jpg", shop_id: Shop.find_by_shopname("San Francisco Toys").id, price: 80})
Product.create({productname: "Skater Dress", description: "Endless Grey Short Sleeve", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483758743/product/c8ac993bbf40a8cdb50e92e4276178e7.jpg", shop_id: Shop.find_by_shopname("Forever22").id, price: 37})
Product.create({productname: "Shoulderless Dress", description: "Red Dress", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483758750/product/e23ce5fc92c120025e03a971a203fdc8.jpg", shop_id: Shop.find_by_shopname("Forever22").id, price: 199})
Product.create({productname: "Samurai Katana", description: "A Japanese sword that summons your inner samurai", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483746711/dec49e618db069a1fc5b35125cb7c07e_qyajsc.jpg", shop_id: Shop.find_by_shopname("Tokyo Express").id, price: 2000})
Product.create({productname: "Steins Gate Anime Set", description: "In Blue Ray", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483747200/91kPAjCdooL._SY445__wqrb17.jpg", shop_id: Shop.find_by_shopname("Akihabara!").id, price: 80})
Product.create({productname: "Kabuto Action Figure", description: "Classic Kamen Rider Kabuto Figure", img_url: "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483747403/TOY-TOK-1192_02_jg04kv.jpg", shop_id: Shop.find_by_shopname("Akihabara!").id, price: 120})

#33 products now

#create trips

trip_names = ["Happy Trip", "Amazing Trip", "Family Trip" "Summer Break", "Shopping Weekend", "Getaway", "Yay! Weekend!"]
user_count = User.count

(user_count * 3).times do
  user = User.find(rand(1..user_count))
  while (user.trips.count >= 4 || user.id == guest_id) do
    user = User.find(rand(1..user_count))
  end
  Trip.create({tripname: trip_names[rand(0...trip_names.length)], purpose: "", date: "", user_id: user.id})
end

#trips pin products
trip_count = Trip.count
product_count = Product.count

100.times do
  trip = Trip.find(rand(1..trip_count))
  product_id = rand(1..product_count)
  pin = trip.pins.find_by(product_id: product_id)
  until pin.nil? do
    product_id = rand(1..product_count)
    pin = trip.pins.find_by(product_id: product_id)
  end
  trip.pins.create({product_id: rand(1..product_count)})
end

#sample trips
sample_trip01 = Trip.create({tripname: "Trip to SF", purpose: "", date: "", user_id: guest_id})
sample_trip02 = Trip.create({tripname: "Trip to Tokyo", purpose: "", date: "", user_id: guest_id})

sample_trip01.pins.create({product_id: Product.find_by_productname("Brown Sneakers").id })
sample_trip01.pins.create({product_id: Product.find_by_productname("Emporio Armani Black").id })
sample_trip01.pins.create({product_id: Product.find_by_productname("Handmade Teddy Bear").id })
sample_trip01.pins.create({product_id: Product.find_by_productname("Dark Navy").id })
sample_trip01.pins.create({product_id: Product.find_by_productname("Bravo Stroller").id })

sample_trip02.pins.create({product_id: Product.find_by_productname("Samurai Katana").id })
sample_trip02.pins.create({product_id: Product.find_by_productname("Flying Dragon Katana").id })
sample_trip02.pins.create({product_id: Product.find_by_productname("Steins Gate Anime Set").id })
sample_trip02.pins.create({product_id: Product.find_by_productname("OPM Figures Full Set").id })

#user follow user
user_count = User.count

## on average, each user follows five other users.
(user_count * 5).times do
  user = User.find(rand(1..user_count))
  followee = User.find(rand(1..user_count))
  following = user.out_follows.find_by(followee_id: followee.id)
  until (user.id != followee.id && following.nil?) do
    followee = User.find(rand(1..user_count))
    following = user.out_follows.find_by(followee_id: followee.id)
  end
  user.out_follows.create(followee_id: followee.id)
end

#user follow shops
shop_count = Shop.count
(user_count * 5).times do
  user = User.find(rand(1..user_count))
  shop = Shop.find(rand(1..shop_count))
  following = user.shop_follows.find_by(shop_id: shop.id)
  until following.nil?
    shop = Shop.find(rand(1..shop_count))
    following = user.shop_follows.find_by(shop_id: shop.id)
  end
  user.shop_follows.create(shop_id: shop.id)
end

#user follow trips
trip_count = Trip.count
(user_count * 2).times do
  user = User.find(rand(1..user_count))
  trip = Trip.find(rand(1..trip_count))
  following = user.trip_follows.find_by(trip_id: trip.id)
  until following.nil?
    trip = Trip.find(rand(1..trip_count))
    following = user.trip_follows.find_by(trip_id: trip.id)
  end
  user.trip_follows.create(trip_id: trip.id)
end
