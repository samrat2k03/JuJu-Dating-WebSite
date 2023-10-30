import User from "../Model/UserModel.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config();

export const userVerification = (req, res) => {
    const token = req.cookies.token
    if(!token){
        return res.json({status:false})
    }
    jwt.verify(token, process.env.JWT_TOKEN, async(err, data) => {
        if(err){
            return res.json({ status:false })
        }else{
            const userId = data.id;
            const user = await User.findById(userId)
            if(user){
                return res.json({ status:true, user: user.username })
            }else{
                return res.json({ status:false})
            }
        }

    })
}