import React, { useState } from "react";
import FavoriteButton from "./FavoriteButton";
import ModalDescription from "./ModalDescription";
import film from "../assets/img/film.svg";
const Table = ({ movies }) => {
  const [showModal, setShowModal] = useState(false);
  const [movieID, setMovieID] = useState(null);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="mt-5 shadow-lg p-5 mb-5 slide-in table-responsive">
      <table className="font-poppins table table-movie ">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Year</th>
            <th scope="col">imdbID</th>
            <th scope="col">Favorite</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr
              key={movie.imdbID}
              className="slide-in-row bg-white"
              style={{
                animationDuration: `${(index + 1) * 300}ms`,
                transitionDelay: `${(index + 1) * 100}ms`,
              }}
            >
              <td
                className="table-column-title d-md-flex flex-md-row  align-items-center"
                onClick={() => {
                  setMovieID(movie.imdbID);
                  setShowModal(true);
                }}
              > 
                <div className="table-column-title-poster-image mb-2">
                  <img
                    src={movie.Poster !== "N/A" ? movie.Poster : film}
                    alt=""
                    className="table-img"
                  />
                </div>
                <div className="table-column-title-poster-text">
                  {movie.Title}
                </div>
              </td>

              <td>{movie.Year}</td>
              <td>{movie.imdbID}</td>
              <td>
                {" "}
                <FavoriteButton movie={movie} />{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalDescription
        showModal={showModal}
        id={movieID}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Table;
