import React, { useState, useEffect } from "react";
import axios from "axios";
import NormalCard from "../components/RankingCompo/NormalUser";

function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const USERS_PER_PAGE = 10;

  const fetchUsers = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/user?q=user`);
        setUsers([...res.data.users]);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const paginatedUsers = users.slice((page - 1) * USERS_PER_PAGE, page * USERS_PER_PAGE);

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="mx-4 mt-2.5">
      <div className="text-xl mb-4">
        {paginatedUsers.map((user, idx) => (
          <NormalCard key={idx} user={user} onClaim={fetchUsers}/>
        ))}
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-gray-700 font-medium">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Users;
