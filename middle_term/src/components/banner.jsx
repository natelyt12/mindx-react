const Banner = ({ data }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${data.image})` }}
        className="bg-cover bg-center w-100% h-100 relative"
      >
        <div className="content w-full h-full absolute bg-linear-to-r from-[rgba(15,23,43,0.9)] to-transparent">
          <div className="absolute bottom-0 w-120 flex gap-4 flex-col mb-8 ml-8">
            <p className="movie_title font-bold text-4xl">{data.movieName}</p>
            <p className="desc line-clamp-3">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
