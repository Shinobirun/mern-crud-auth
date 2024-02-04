import   User   from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    const {username,email,password} = req.body

   try {

    const passwordHash = await bcrypt.hash(password,10)

    const newUser = new User({
        username,
        email,
        password: passwordHash,
    });

    const userSaved = await newUser.save();

    jwt.sign({
        id: userSaved._id
    }, 'secret123', {
        expiresIn: '1d'
    }, (err, token) => {
        if (err) console.log(err);
        res.json({ token });
    });

   // res.json({
   //     id: userSaved._id,
   //     username: userSaved.username,
   //     email: userSaved.email,
   //     creatdAt: userSaved.createdAt,
   //     updatedAt:userSaved.updatedAt,
   // });
   }
    catch (error) {
    console.log(error)
    
   }

};

export const login = (req,res) => res.send("login");