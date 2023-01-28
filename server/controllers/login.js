import UserSchema from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await UserSchema.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: "User dosen't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: 'Incorrect credentials' });

        const token = jwt.sign({
            email: existingUser.email,
            id: existingUser._id,
        }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.status(200).json({ result: existingUser, token })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' })
    }

}

export const signUp = async (req, res) => {
    const { fname, lname, email, password, repeatPassword } = req.body;
    try {
        const existingUser = await UserSchema.findOne({ email });
        if (existingUser) return res.status(409).json({ message: 'User already exists' });

        if (password !== repeatPassword) return res.status(401).json({ message: 'Password donot match' })

        const hashedPassword = await bcrypt.hash(password, 12)
        let result = await UserSchema.create({ name: `${fname} ${lname}`, email, password: hashedPassword })
        result = { name: result.name, email: result.email, id: result._id.toString() }
        console.log(result);
        const token = jwt.sign({
            email: result.email,
            id: result.id.toString()
        }, process.env.JWT_SECRET, { expiresIn: '1h' })

        res.status(200).json({ result, token })
    } catch (error) {
        res.status(500).json({ message: error });
    }
}