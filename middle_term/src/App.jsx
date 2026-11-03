import Banner from "./components/banner";
import MovieCard from "./components/movieCard";
import Navbar from "./components/navbar";
import data from "./constant/data";
import { useState } from "react";

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(data[0]);
  return (
    <div className="bg-slate-900 h-dvh p-8">
      <div className="container w-5xl text-white">
        <Navbar />
        <p className="mt-10 text-3xl font-bold">Explore</p>
        <p className="text-slate-400 my-3">What are you gonna watch today ?</p>
        <Banner data={selectedMovie} />
        <p className="release_txt my-5 text-3xl font-bold">New Release</p>
        <MovieCard data={data} onSelectMovie={setSelectedMovie} />
      </div>
    </div>
  );
};

export default App;
