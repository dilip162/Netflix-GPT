import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 mr-5">
      <img src={IMG_CDN + posterPath} alt="Poster Img" />
    </div>
  );
};

export default MovieCard;
