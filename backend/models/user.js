import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        default:"https://th.bing.com/th/id/R.95c74e73a0802296ef631dd71dfa09d2?rik=eIiF8VmPmhhzXw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-Image.png&ehk=YvjAOG2T71oFU41G13CCoak98yJU3f0YK669MQiOROg%3d&risl=&pid=ImgRaw&r=0"
    },
    points:{
        type:Number,
        default:0
    },
    rank:Number,
    prevRank:Number
},{
    timestamps:true
})

const User=mongoose.model("user",userSchema);

export default User;