import React, { useState } from 'react';
import axios from 'axios';

const NormalCard = ({ user,onClaim }) => {
  const [claim,setClaim]=useState(false);

  const handleClaim=async()=>{
    try {
      console.log("inside handleClaim");
      await axios.post(`http://localhost:5000/${user._id}/claim`);
      console.log("claim kar rahe points");
      onClaim();
      setClaim(false);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className="flex items-center justify-between bg-white shadow p-4 rounded mb-2 w-full" onMouseEnter={()=>setClaim(true)} onMouseLeave={()=>setClaim(false)}>
      <div className="flex-1 ml-4">
        <p className="text-base font-medium">{user.name}</p>
      </div>
      <div className="font-bold text-blue-600">
        {claim && <button className='bg-amber-500 text-white px-2 py-1 mr-3.5 font-medium rounded-2xl cursor-pointer' onClick={handleClaim}>Claim</button>}
        {user.points} ⭐</div>
    </div>
  );
};

export default NormalCard;
