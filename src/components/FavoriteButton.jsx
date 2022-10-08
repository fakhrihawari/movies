import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteMovies,
  removeFavoriteMovies,
  selectFavoriteMovies,
} from "../features/movie/movieSlice";
import { ReactComponent as Hand } from "../assets/img/hand.svg";

const particleList = Array.from(Array(10));

const FavoriteButton = ({ movie }) => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(selectFavoriteMovies);
  const [clicked,setClicked] =useState(false);
  const getStatusMovie = () => {
    if (!favoriteMovies.length) return false;
    if (favoriteMovies.find((m) => m.imdbID === movie.imdbID) != null)
      return true;
    return false;
  };
  const [isFavorite, setIsFavorite] = useState(getStatusMovie());
  const handleFavorite = () => {
    if (!isFavorite) {
      dispatch(addFavoriteMovies(movie));
      setIsFavorite(true);
    } else {
        setTimeout(()=>{
            dispatch(removeFavoriteMovies(movie));
        },500)
      setIsFavorite(false);
    }
    setClicked(true);
  };

  return (
    <button
      onClick={handleFavorite}
      onAnimationEnd={() => setClicked(false)}
      className={`favorite-button-wrapper ${isFavorite?"favorited":""}` }
    >
      { clicked && (
        <div className="particles">
          {particleList.map((_, index) => (
            <div key={index}
              className="particle-rotate"
              style={{
                transform: `rotate(${
                  (360 / particleList.length) * index + 1
                }deg)`,
              }}
            >
              <div className="particle-tick" />
            </div>
          ))}
        </div>
      )}
      <div className="favorite-button">
        <Hand />
      </div>
    </button>
  );
};

export default FavoriteButton;
