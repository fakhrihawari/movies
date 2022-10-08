import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Loading from "./Loading";
import film from "../assets/img/film.svg";
import { detailMovieAPIUrl } from "../api/apiURL";
const ModalDescription = ({ showModal, closeModal, id }) => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(null);

  const getDetailMovie = (id) => {
    setLoading(true);
    fetch(`${detailMovieAPIUrl}${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieDetail((prev) => (prev = data));
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!id) return;
    getDetailMovie(id);
  }, [id]);

  return (
    <Modal
      show={showModal}
      onHide={closeModal}
      dialogClassName="w-50"
      size="md"
    >
      {loading && <Loading />}
      {!loading && movieDetail && (
        <>
          <Modal.Header>
            <Modal.Title className="text-center">Detail</Modal.Title>
            <button className="btn btn-danger" onClick={closeModal}>
              X
            </button>
          </Modal.Header>
          <Modal.Body className="p-5">
            {movieDetail.Response === "False" ? (
              <h4 className="font-poppins mt-4 font-weight-bold text-center">
                {movieDetail.Error}
              </h4>
            ) : (
              <div className="d-flex flex-column align-items-center">
                <img
                  src={movieDetail.Poster !== "N/A" ? movieDetail.Poster : film}
                  alt="poster"
                  className="table-modal-img"
                />
                <h4 className="font-poppins my-4 font-weight-bold ">
                  {movieDetail.Title}
                </h4>

                {movieDetail.Ratings && (
                  <>
                    <h5 className="align-self-start">Ratings</h5>
                    <div className="d-flex flex-wrap align-items-center w-100">
                      {movieDetail.Ratings.map((rating) => (
                        <div key={rating.Source} className="group w-50">
                          <h6>{rating.Source}</h6>
                          <p>{rating.Value}</p>
                        </div>
                      ))}

                      <div className="group">
                        <h6>IMDB</h6>
                        <p>{movieDetail.imdbRating}</p>
                      </div>
                    </div>
                  </>
                )}

                <div className="d-flex justify-content-between flex-wrap w-100">
                  <div className="group">
                    <h5>Genre</h5>
                    <p>{movieDetail.Genre}</p>
                  </div>
                  <div className="group">
                    <h5>Rated</h5>
                    <p>{movieDetail.Rated}</p>
                  </div>
                </div>

                <div className="d-flex justify-content-between flex-wrap w-100">
                  <div className="group">
                    <h5>Year</h5>
                    <p>{movieDetail.Year}</p>
                  </div>

                  <div className="group">
                    <h5>Released</h5>
                    <p>{movieDetail.Released}</p>
                  </div>
                </div>

                <div className="group align-self-start">
                  <h5>Directors</h5>
                  <p>{movieDetail.Director}</p>
                </div>

                <div className="group align-self-start">
                  <h5>Actors</h5>
                  <p>{movieDetail.Actors}</p>
                </div>

                <div className="group align-self-start">
                  <h5>Plot</h5>
                  <p className="font-poppins">{movieDetail.Plot}</p>
                </div>

                <div className="group align-self-start">
                  <h5>Awards</h5>
                  <p>{movieDetail.Awards}</p>
                </div>
                <div className="group align-self-start">
                  <h5>BoxOffice</h5>
                  <p>{movieDetail.BoxOffice}</p>
                </div>
              </div>
            )}
          </Modal.Body>
        </>
      )}
    </Modal>
  );
};

export default ModalDescription;
