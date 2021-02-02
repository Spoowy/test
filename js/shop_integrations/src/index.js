// var WooCommerceAPI = require('woocommerce-api');
//
// var WooCommerce = new WooCommerceAPI({
//   url: 'http://skylinecircle.com',
//   consumerKey: 'ck_e9e3b8f2386f4456960d8fc2988948cc3c8578a7',
//   consumerSecret: 'cs_040b1b8ec5428743a86f59de0e2eebc2a2997094',
//   wpAPI: true,
//   version: 'wc/v3'
// });
//
// WooCommerce.get('products', function(err, data, res) {
//     console.log("res", res);
//     console.log("data",data);
// });

// var shopifyAPI = require('shopify-node-api');
//
// var Shopify = new shopifyAPI({
//   shop: 'maypower-test-shop', // MYSHOP.myshopify.com
//   shopify_api_key: '5d8c49a43df9cff45af70d3187011c93', // Your API key
//   shopify_shared_secret: 'aafdf5e736021faf55bf48c8b31cc174', // Your Shared Secret
//   shopify_scope: 'read_products',
//   access_token: '17e0fd26ed38a0c0b576e20e16c06c3b', //permanent token
// });
//
// Shopify.get('/admin/products.json', function(err, data, headers){
//   console.log("data", data); // Data contains product json information
//   console.log("headers", headers); // Headers returned from request
//   console.log("api_limit", headers['http_x_shopify_shop_api_call_limit']); // Headers returned from request
// });

var amazonMws = require('amazon-mws')('AWS_ACCESS_KEY_ID','AWS_SECRET_ACCESS_KEY');
