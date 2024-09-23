const { User } = require("../models/user.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../config/serverConfig');

exports.registerUserService = async (data) => {
    try {
        const email = await User.findOne({ email: data.email });
        if (!email) {
            data.password = await bcrypt.hash(data.password, 10);
            await User.insertMany(data);
            const token = jwt.sign(
                { 
                    name: data.name,
                    email: data.email,
                    role: data.role
                },
                SECRET_KEY,
                { expiresIn: '1h' }
            );
            return { check: true, token: token };
        } else {
            return { check: false };
        }
    } catch (error) {
        console.error("Error in registerUserService:", error.message);
    }
};
exports.loginUserService=async (data)=>{
    try{
        const { email, password } = data;
        const user = await User.findOne({ email: email });
        if (!user) {
            return { error: 'Authentication failed: User not found',status:404 };
        } else if (user.banned) {
            return { error: 'Authentication failed: User banned',status:401 };
        } else {
            const passwordCheck = await bcrypt.compare(password, user.password);
            if (!passwordCheck) {
                return { error: 'Authentication failed: Incorrect password',status:404 };
            } else {
                const token = jwt.sign(
                    {
                        id: user._id,
                        email: user.email,
                        role: user.role
                    },
                    SECRET_KEY,
                    {
                        expiresIn: '1h'
                    }
                );
                console.log(token);
                return { message: 'Login Success', token:token,status: 200 };
            }
        }
    }
    catch(err){
        console.log("Message:"+err.message);
    }
};
exports.promoteUserService = async (id)=>{
    try {
        const user = await User.findById(id);
        if (!user) {
            return { message: `User not found`, status:404 };
        }
        if (user.banned) {
            return { message: `${user.name} is banned and cannot be promoted`, status:403 };
        }
        if (user.role === 'super admin') {
            return { message: `Super admin cannot change their own role`, status:400 };
        }
        if (user.role === 'user') {
            user.role = 'admin';
            await user.save();
            return { message: `${user.name} was promoted to admin successfully!`};
        } else {
            return { message: `${user.name} is already an admin`,status:409};
        }
    } 
    catch(err){
        return {message:'Internal Server Error: '+err.message, status:500};
    }
}

exports.demoteAdminService = async (id)=>{
    try {
        const user = await User.findById(id);
        if (!user) {
            return { message: `User not found`, status:404 };
        }
        if (user.banned) {
            return { message: `${user.name} is banned and cannot be demoted`, status:403 };
        }
        if (user.role === 'super admin') {
            return { message: `Super admin cannot change their own role`, status:400 };
        }
        if (user.role === 'admin') {
            user.role = 'user';
            await user.save();
            return { message: `${user.name} was demoted to user successfully!`};
        } else {
            return { message: `${user.name} is already a user`,status:409};
        }
    } 
    catch(err){
        return {message:'Internal Server Error: '+err.message, status:500};
    }
}
exports.banUserService = async (id)=>{
    try {
        const user = await User.findById(id);
        if (user.role === 'super admin') {
            return { message: 'Cannot ban a super admin', status:403 };
        }
        if(!user) {
            return { message: `${user.name} not found`, status:404 };
        }
        if(user.banned===true){
            return{ message: `${user.name} is already banned`, status:400 };
        }
        user.banned=true;
        await user.save();
        return { message: `${user.name} was banned successfully!` };
    }
    catch (err) {
        return { message: `Internal Server Error: ${err.message}` } ;
    }
}
exports.banUserService = async (id)=>{
    try {
        const user = await User.findById(id);
        if (user.role === 'super admin') {
            return { message: 'Cannot ban a super admin', status:403 };
        }
        if(!user) {
            return { message: `${user.name} not found`, status:404 };
        }
        if(user.banned===true){
            return{ message: `${user.name} is already banned`, status:400 };
        }
        user.banned=true;
        await user.save();
        return { message: `${user.name} was banned successfully!` };
    }
    catch (err) {
        return { message: `Internal Server Error: ${err.message}` } ;
    }
}
exports.unbanUserService = async (id)=>{
    try {
        const user = await User.findById(id);
        if (user.role === 'super admin') {
            return { message: 'Cannot ban a super admin', status:403 };
        }
        if(!user) {
            return { message: `${user.name} not found`, status:404 };
        }
        if(user.unbanned===true){
            return{ message: `${user.name} is already unbanned`, status:400 };
        }
        user.banned=false;
        await user.save();
        return { message: `${user.name} was unbanned successfully!` };
    }
    catch (err) {
        return { message: `Internal Server Error: ${err.message}` } ;
    }
}
