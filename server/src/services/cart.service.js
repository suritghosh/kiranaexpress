const { Cart } = require("../models/cart.model");

exports.addToCart = async (data)=>{
    const {user,products} = data;
    const totalPrice = products.reduce((acc,cur)=>{ acc + cur.qty*cur*price});
    
}