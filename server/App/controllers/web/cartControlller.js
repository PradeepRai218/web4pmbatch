const { cartModel } = require("../../models/cart.Model");

let addtoCart = async (req, res) => {
  let { userId, productID, productName, productPrice, quantity, productImage } =
    req.body;
  console.log(req.body);

  let cartItem = new cartModel({
    userId,
    productID,
    productName,
    productPrice,
    quantity,
    productImage,
  });

  await cartItem.save();

  res.status(201).json({ message: "Item added to cart successfully" });
};

let viewCart = async (req, res) => {
  let { userId } = req.body;

  let cartItems = await cartModel.find({ userId });

  res
    .status(200)
    .json({ message: "Cart items retrieved successfully", cartItems });
};

module.exports = { addtoCart, viewCart };
