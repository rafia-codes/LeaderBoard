import mongoose from 'mongoose';

const pointHistorySchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    pointClaimed:{
        type:Number,
        required:true
    },
    claimedAt:{
        type:Date,
        default:Date.now,
    }
});

const pointHistory=mongoose.model("pointHistory",pointHistorySchema);

export default pointHistory;