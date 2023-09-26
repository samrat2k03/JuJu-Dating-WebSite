import dotenv from 'dotenv'
dotenv.config();
import jwt from "jsonwebtoken";

const createSecretToken = (id) => {
    return jwt.sign(
        {id}, process.env.JWT_TOKEN, {
            expiresIn: 3 * 24 * 60 * 60,
        }
    )
}

export default createSecretToken;