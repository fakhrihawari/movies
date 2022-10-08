import React, { useEffect } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Search from "../components/Search";
import Table from "../components/Table";
import {
  selectMovies,
  selectErrorMessage,
  selectLoading,
} from "../features/movie/movieSlice";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

const SearchPage = () => {
  const movies = useSelector(selectMovies);
  const errorMessage = useSelector(selectErrorMessage);
  const loading = useSelector(selectLoading);
  useEffect(() => {}, [movies,loading]);
  return (
    <div className="container mt-5">
      <Search />
      { loading && <Loading text={"Searching"}/> }
      { (movies.length && !loading) ? (<Table movies={movies} />):(<></>)}
      { ((errorMessage !== "") && !loading) && (<ErrorMessage message={errorMessage} />)}
      
    </div>
  );
};

export default SearchPage;
