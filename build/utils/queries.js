"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrice = exports.insertMessages = void 0;
var insertMessages = "\nINSERT INTO messages(name, message)\nVALUES ('chidimo', 'first message'),\n      ('orji', 'second message')\n";
exports.insertMessages = insertMessages;
var getPrice = "with get_price (price) as (SELECT SUM(products.price) \nFROM products\nJOIN products_orders\nON products.id = products_orders.product_id)\n\n\nSELECT order_id, get_price.price as price\nFROM products_orders,get_price\nGROUP BY 1,2;\n";
exports.getPrice = getPrice;