import { MagnifyingGlassIcon } from "@phosphor-icons/react";

const Searchbar = () => (
  <div className="search_bar">
    <MagnifyingGlassIcon size={24} color="rgba(0, 0, 0, 0.5)" />
    <input
      type="text"
      className="search_bar_input"
      placeholder="Search Items..."
    />
  </div>
);

export default Searchbar;
