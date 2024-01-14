import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;
    try {
        if(!email || !password || !username) return next(errorHandler(401, "Les champs ne doivent pas être vide"));
        const hashedPassword = bcrypt.hashSync(password, 12);
        const newUser = new User({username, email, password:hashedPassword});
        await newUser.save();
        res.status(201).json("User created successfuly");
    } catch (error) {
        next(error)
    }
}

export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        if(!email || !password) return next(errorHandler(401, "Les champs ne doivent pas être vide"));
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404, 'user not found'));
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(401, 'invalid credentials'));
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
        const {password: pass, ...rest} = validUser._doc;
        res
            .cookie('access_token', token, {httpOnly: true})
            .status(200)
            .json(rest)
    } catch (error) {
        next(error);
    }
}