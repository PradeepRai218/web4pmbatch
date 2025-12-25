let mongoose = require("mongoose");

let cartSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    productID: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
    productName: { type: String },
    productPrice: { type: Number },
    quantity: { type: Number, default: 1 },
    productImage: { type: String },
    addedAt: { type: Date, default: Date.now }
   
        
});

let cartModel = mongoose.model("cart", cartSchema);

module.exports = { cartModel };
