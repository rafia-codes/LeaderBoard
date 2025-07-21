import pointHistory from "../models/pointHistory.js";
import User from "../models/user.js";

export const getUsers = async (req, res) => {
  try {
    //console.log("Route hit");
    let factor = req.query.q === "user" ? "createdAt" : "points";
    const users = await User.find({}).sort({[factor]:-1});
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
  }
};

export const claimPoint = async (req, res) => {
  try {
    console.log("claimed tk pahuch gye");
    const point = Math.floor(Math.random() * 11+1);
    const user = await User.findById(req.params.id);
    const history=new pointHistory({user,pointClaimed:point});
    console.log(user.name);
    console.log(user.points);
    if (!user) return res.status(400).json({ message: "User not found" });
    user.points += point;
    console.log(user.points);
    await user.save();
    await history.save();
    res.status(200).json({message:"points claimed"})
  } catch (error) {
    console.log(error);
  }
};

export const createUser=async(req,res)=>{
    try {
        //console.log('route add user');
        const {name,points=0}=req.body;
        const user=new User({name,points});
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
}
