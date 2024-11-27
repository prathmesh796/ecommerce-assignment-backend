const mongoose = require('mongoose');
const Product = require('../models/Product'); // Adjust the path to your Product model

const seedProducts = async () => {
    await mongoose.connect('mongodb://localhost:27017/ecommerce', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const products = [
        {
            id: 1,
            name: 'iPhone 14 Pro Max',
            price: 119900,
            category: 'Electronics',
            imageURL: 'https://www.designinfo.in/wp-content/uploads/2023/02/610pghkO81L._SX679_-optimized.jpg',
            description: 'The latest Apple smartphone with advanced features.',
        },
        {
            id: 2,
            name: 'Samsung Galaxy S23 Ultra',
            price: 89000,
            category: 'Electronics',
            imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8GT_oYNMrvHvmEJ0S7NPk0VH7y8DNc-uDA&s',
            description: 'A premium smartphone with outstanding camera quality.',
        },
        {
            id: 3,
            name: 'Sony WH-1000XM5 Headphones',
            price: 34900,
            category: 'Electronics',
            imageURL: 'https://www.sony.co.in/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
            description: 'Noise-canceling wireless headphones with superior sound quality.',
        },
        {
            id: 4,
            name: 'Dell XPS 13 Laptop',
            price: 23990,
            category: 'Electronics',
            imageURL: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/13-9340/media-gallery/silver/touch/notebook-xps-13-9340-t-sl-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3509&hei=2082&qlt=100,1&resMode=sharp2&size=3509,2082&chrss=full&imwidth=5000',
            description: 'A lightweight and powerful laptop for productivity on the go.',
        },
        {
            id: 5,
            name: 'Adidas Ultraboost 21',
            price: 18000,
            category: 'Fashion',
            imageURL: 'https://rukminim2.flixcart.com/image/850/1000/kl175ow0/shoe/k/r/r/8-kyq93-adidas-ftwwht-cblack-syello-original-imagy8qyhry73tyk.jpeg?q=90&crop=false',
            description: 'Comfortable running shoes with energy return technology.',
        },
        {
            id: 6,
            name: 'Apple Watch Series 8',
            price: 39900,
            category: 'Electronics',
            imageURL: 'https://m.media-amazon.com/images/I/71JmLzcRE8L._AC_UF1000,1000_QL80_.jpg',
            description: 'A smartwatch with health and fitness tracking features.',
        },
        {
            id: 7,
            name: 'Canon EOS R5 Camera',
            price: 3899,
            category: 'Electronics',
            imageURL: 'https://m.media-amazon.com/images/I/8115pNkutkL._AC_UF1000,1000_QL80_.jpg',
            description: 'Professional-grade mirrorless camera for high-quality photography.',
        },
        {
            id: 8,
            name: 'KitchenAid Stand Mixer',
            price: 499,
            category: 'Home Appliances',
            imageURL: 'https://www.kitchenaid.in/is/image/content/dam/global/kitchenaid/countertop-appliance/portable/images/hero-5KSM150PSDCA.tif',
            description: 'Versatile stand mixer for baking and cooking needs.',
        },
        {
            id: 9,
            name: 'Levi’s 501 Original Jeans',
            price: 899,
            category: 'Fashion',
            imageURL: 'https://images-cdn.ubuy.co.in/64d12d6390d733594a491388-levi-s-men-s-501-original-fit-jeans.jpg',
            description: 'Classic straight-fit jeans with a timeless design.',
        },
        {
            id: 10,
            name: 'Nintendo Switch OLED Model',
            price: 3499,
            category: 'Electronics',
            imageURL: 'https://m.media-amazon.com/images/I/61nqNujSF2L.jpg',
            description: 'A gaming console with an enhanced OLED display.',
        },
        {
            id: 11,
            name: 'Dyson V15 Detect Vacuum Cleaner',
            price: 749,
            category: 'Home Appliances',
            imageURL: 'https://m.media-amazon.com/images/I/61bXGHeYuhL._AC_UF894,1000_QL80_.jpg',
            description: 'Cordless vacuum cleaner with advanced laser technology.',
        },
        {
            id: 12,
            name: 'Bose SoundLink Revolve+ Speaker',
            price: 3299,
            category: 'Electronics',
            imageURL: 'https://avstore.in/cdn/shop/files/1.AVStore-Bose-SoundLink-Revolve_-II-Front-View-Luxe-Silver.jpg?v=1685712989',
            description: 'Portable Bluetooth speaker with 360-degree sound.',
        },
        {
            id: 13,
            name: 'Ray-Ban Aviator Sunglasses',
            price: 1530,
            category: 'Fashion',
            imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnV4xVcKHb9SuVmA4_T7ryxZcqD_uY2SDqA&s',
            description: 'Stylish aviator sunglasses with UV protection.',
        },
        {
            id: 14,
            name: 'Sony PlayStation 5',
            price: 45590,
            category: 'Electronics',
            imageURL: 'https://m.media-amazon.com/images/I/51CqteUKtZL._AC_UF894,1000_QL80_.jpg',
            description: 'Next-gen gaming console with ultra-fast load times.',
        },
        {
            id: 15,
            name: 'GoPro HERO11 Black',
            price: 4999,
            category: 'Electronics',
            imageURL: 'https://m.media-amazon.com/images/I/6173hOyVCTL._AC_UF1000,1000_QL80_.jpg',
            description: 'Action camera with high-resolution video recording.',
        },
        {
            id: 16,
            name: 'Nike Air Force 1',
            price: 11000,
            category: 'Fashion',
            imageURL: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/3f3e7049-5c99-428c-abcd-e246b086f2ed/AIR+FORCE+1+%2707.png',
            description: 'Classic sneakers with a clean and timeless design.',
        },
        {
            id: 17,
            name: 'Fitbit Charge 5',
            price: 1799,
            category: 'Electronics',
            imageURL: 'https://rukminim1.flixcart.com/image/300/300/xif0q/smartwatch/o/r/6/1-04-fb421glwt-frcjk-android-ios-fitbit-no-original-imagh465jqnx3tac.jpeg',
            description: 'Fitness tracker with heart rate monitoring and GPS.',
        },
        {
            id: 18,
            name: 'Herman Miller Aeron Chair',
            price: 1749,
            category: 'Home Office',
            imageURL: 'https://rukminim2.flixcart.com/image/720/864/jjd6aa80/office-study-chair/m/w/m/vinyl-aeron-aer1b22aw-aj-g1-g1-g1-bb-bk-23103-hermanmiller-original-imaf6ccrgdan2phx.jpeg?q=60&crop=false',
            description: 'Ergonomic office chair for superior comfort and support.',
        },
        {
            id: 19,
            name: 'LG OLED C2 TV',
            price: 129900,
            category: 'Electronics',
            imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNcDJv59XKVJRz6F2JTg7oXmtKeZyx44nPvA&s',
            description: 'Smart TV with stunning picture quality and deep blacks.',
        },
        {
            id: 20,
            name: 'Instant Pot Duo 7-in-1',
            price: 699,
            category: 'Home Appliances',
            imageURL: 'https://m.media-amazon.com/images/I/710KoJMG2lL._AC_UF894,1000_QL80_.jpg',
            description: 'Multi-functional pressure cooker for quick and easy meals.',
        },
        {
            id: 21,
            name: 'Samsung Galaxy Buds Pro',
            price: 5999,
            category: 'Electronics',
            imageURL: 'https://m.media-amazon.com/images/I/51c8jaXEp+S.jpg',
            description: 'True wireless earbuds with active noise cancellation.',
        },
        {
            id: 22,
            name: 'Fossil Gen 6 Smartwatch',
            price: 2459,
            category: 'Fashion',
            imageURL: 'https://fossil.scene7.com/is/image/FossilPartners/FTW4059_main?$sfcc_fos_hi-res$',
            description: 'Smartwatch with customizable dials and health tracking.',
        },
        {
            id: 23,
            name: 'Razer Blade 15 Gaming Laptop',
            price: 2499,
            category: 'Electronics',
            imageURL: 'https://m.media-amazon.com/images/I/71kcJxMggRL.jpg',
            description: 'Powerful gaming laptop with high-refresh-rate display.',
        },
        {
            id: 24,
            name: 'Columbia Fleece Jacket',
            price: 799,
            category: 'Fashion',
            imageURL: 'https://images-cdn.ubuy.co.in/633fecb7e86704444d22f1a8-columbia-men-39-s-steens-mountain.jpg',
            description: 'Warm and lightweight fleece jacket for outdoor adventures.',
        },
        {
            id: 25,
            name: 'Echo Dot (5th Gen)',
            price: 499,
            category: 'Electronics',
            imageURL: 'https://images-static.nykaa.com/media/catalog/product/0/9/0994ac7MAMAAC00000046_1.jpg',
            description: 'Smart speaker with Alexa for hands-free control.',
        },
    ];    

    try {
        await Product.insertMany(products);
        console.log('Products seeded successfully!');
    } catch (error) {
        console.error('Error seeding products:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedProducts();
