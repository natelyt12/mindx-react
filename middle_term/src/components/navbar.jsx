const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <p className="title text-3xl font-bold">Anonime</p>
      <p className="navitem text-slate-400">Home</p>
      <p className="navitem text-slate-400">List Anime</p>
      <input
        type="text"
        className="bg-slate-800 px-3 py-1 rounded-full outline-0 w-70"
        placeholder="Search anime or movie"
      />
    </div>
  );
};

export default Navbar;
