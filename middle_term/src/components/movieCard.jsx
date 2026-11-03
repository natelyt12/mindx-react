const MovieCard = ({ data, onSelectMovie }) => {
  return (
    <div className="flex gap-4">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full rounded-lg overflow-hidden cursor-pointer"
            onClick={() => onSelectMovie(item)}
          >
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              className="movie_thumbnail h-50 bg-cover relative"
            >
              <div className="bg-linear-to-t from-slate-900 to-transparent absolute w-full h-full">
                <p className="bottom-0 absolute w-full text-center">
                  Episode {item.episode}
                </p>
              </div>
            </div>
            <p className="font-semibold mt-3 w-full text-center">
              {item.movieName}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
