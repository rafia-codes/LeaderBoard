import React from 'react'

function Card({user,index}) {
    const medalColors = ['gold', 'silver', '#cd7f32'];

  return (
      <div
          key={user?._id}
          className={`flex flex-col items-center bg-gray-50 shadow-amber-400 rounded-xl p-4 relative ${index === 0 ? "scale-[1.2]" : ""}`}
        >
          <i className="text-4xl mb-2 fa-crown fa-solid" style={{ color: medalColors[index] }} />
          <img
            src={user?.profile || 'https://th.bing.com/th/id/R.95c74e73a0802296ef631dd71dfa09d2?rik=eIiF8VmPmhhzXw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-Image.png&ehk=YvjAOG2T71oFU41G13CCoak98yJU3f0YK669MQiOROg%3d&risl=&pid=ImgRaw&r=0'}
            alt={user?.name}
            className="w-20 h-20 object-cover rounded-full border-4"
            style={{ borderColor: medalColors[index] }}
          />
          <p className="mt-2 font-semibold">{user?.name}</p>
          <p className="text-sm text-gray-600">{user?.points} ⭐</p>
        </div>
  )
}

export default Card
