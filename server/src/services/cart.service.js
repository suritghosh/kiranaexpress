const { Cart } = require("../models/cart.model");
const { User } = require("../models/user.model");

exports.addToCartService = async (data) => {
    try {
        const { userId, products } = data;
        const existingCart = await Cart.findOne({ userId: userId });
        const userName = await User.findById(userId, 'name');
        let errObj = null;
        if (existingCart) {
            products.forEach(newProduct => {
                const existingProduct = existingCart.products.find(product =>product.productId.toString() === newProduct.productId);
                if (!existingProduct) {
                    existingCart.products.push(newProduct);
                } else {
                    errObj = { status: 400, error: `Product already exists for ${userName.name}` };
                }
            });
            if (errObj) {
                return errObj;
            }
            console.log(existingCart.products);
            existingCart.totalPrice = existingCart.products.reduce((acc, cur) => acc + (Number(cur.quantity) * Number(cur.price)), 0);
            await existingCart.save();
            return { status: 200, message: "Product added to cart successfully:", data: existingCart };
        } else {
            const totalPrice = products.reduce((acc, cur) => acc + (Number(cur.quantity) * Number(cur.price)), 0);
            const cart = new Cart({ userId, products, totalPrice });
            await cart.save();
            return { status: 201, message: "Items added to cart successfully:", data: cart };
        }
    } catch (err) {
        return { status: 500, error: err.message };
    }
};
exports.plusProductQuantityService = async (data) =>{
    try{
        const {userId,products}= data;
        const existingUser= await Cart.findOne({userId:userId});
        let errObj=null;
        let updatedProduct=null;
        if(existingUser){
            products.forEach((i)=> {
                existingProduct=existingUser.products.find((j)=>j.productId.toString()===i.productId);
                console.log('45:',existingProduct);
                if(existingProduct){
                    existingProduct.quantity+=1;
                }
                else{
                    errObj={status:404, error :`Product does'nt Exist`}
                }
            });
            if(errObj){
                return errObj;
            }
            existingUser.totalPrice=existingUser.reduce((acc,cur)=>acc+Number(cur.quantity)*Number(cur.price),0);
            await existingUser.save();
            return {message:"Quantity Updated Successfully!",data:existingUser}
            //You have to resume testing for this api and write minus yourself
        }
        else{
            return  { status: 404, error: `User does'nt exist` }
        }
    }
    catch(err){
        return { status: 500, error: err.message };
    }
}
