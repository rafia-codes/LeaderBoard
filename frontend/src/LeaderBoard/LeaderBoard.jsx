import React, { useState } from 'react'
import NavBar from '../components/NavBar';
import Rankings from '../components/Rankings';
import Users from '../components/Users';
import Modal from '../components/Modal';

function LeaderBoard() {
  const [showData,setShowData]=useState("rankings");
  const [loadModal,setLoadModal]=useState(false);
  const map={
    rankings:Rankings,
    users:Users
  }
  const CompoToRender=map[showData];

  return (
    <div>
      <NavBar showData={showData} setShowData={setShowData}/>
      <div className='mx-64 my-14'>
        <div className='flex justify-between'>
          <span className='text-amber-500 text-4xl'>List</span>
          <span onClick={()=>setLoadModal(true)} className='rounded-[50%] bg-gray-300 text-2xl px-2 cursor-pointer'><strong>+</strong></span>
        </div>
        <CompoToRender/>
        {loadModal && 
        <Modal show={setLoadModal}/>}
      </div>
    </div>
  )
}

export default LeaderBoard
