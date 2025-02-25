import UserModel from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login user
const loginUser = async (req, res) => {
  const {email,password} = req.body;
  try {
    const user = await UserModel.findOne({email})

    if (!user){
      return res.status(400).json({success:false,message:"User Doesn't exists"})
    }

    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch){
      return res.status(400).json({success:false,message:"Invalid Password"})
    }

    const token = createToken(user._id)
    res.json({success:true,token})

  } catch (error) {
    console.log(error);
    res.status(500).json({success:false,message:"Error"})
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    // checking is user laready exists

    const exists = await UserModel.findOne({ email });
    if (exists) {
      return res.status(400).json({ success: false, message: "User already exits" });
    }

    // validating email format & strong password

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({ success: false, message: "Password Should contain min 8 characters" });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    /*here 10 is the salt*/

    const newUser = new UserModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    return res.json({ success: true, message: "User Registration Successful",token });
  }
   catch (error) {
    console.log(error);
    
    return res.status(500).json({ success: false, message: error });
  }
};

export { loginUser, registerUser };
