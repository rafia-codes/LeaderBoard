import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopThree from '../components/RankingCompo/TopThree';
import NormalCard from './RankingCompo/NormalUser';

function Rankings() {
    const [users,setUsers]=useState([]);
    const getUser=async()=>{
            try {
               const res=await axios.get('https://leaderboard-backend-hc7r.onrender.com/user?q=rank',{
                withCredentials:true
               }); 
               setUsers([...res.data.users]);
            } catch (error) {
                console.log(error);
            }
     };

    useEffect(()=>{
        getUser();
    },[]);
    const rest=users.slice(3);

  return (
    <div>
       <TopThree users={users.slice(0,3)}/>
       {rest && rest.map((user,idx)=>(
        <NormalCard key={user._id} user={user} index={idx} onClaim={getUser}/>
       ))}
    </div>
  )
}

export default Rankings;
