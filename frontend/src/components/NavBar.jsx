
function NavBar({ showData, setShowData }) {
  return (
    <div className="bg-amber-400 px-12 py-5 flex justify-between items-center mb-3 ">
      <h1 className="text-white text-5xl font-bold">LeaderBoard</h1>

      <button className="flex bg-white rounded-full overflow-hidden shadow-md">
        <span
          onClick={() => setShowData("rankings")}
          className={`ml-1.5 mr-[3px] my-1 px-4 py-2 cursor-pointer rounded-3xl ${
            showData === "rankings"
              ? "bg-amber-500 text-white"
              : "text-amber-500"
          }`}
        >
          Top Rankings
        </span>
        <span
          onClick={() => setShowData("users")}
          className={`mr-1.5 my-1 ml-[3px] px-4 py-2 cursor-pointer rounded-3xl ${
            showData === "users" ? "bg-amber-500 text-white" : "text-amber-500"
          }`}
        >
          Users
        </span>
      </button>
    </div>
  );
}

export default NavBar;
