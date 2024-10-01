const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
      quantity: { type: Number, min: 1 },
      price: Number
    } 
  ],
  totalPrice: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = { Cart };
