import { useState, useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setSearchMovies, setErrorMessage, setLoading } from "../features/movie/movieSlice";
import { debounce } from "../utilities/debounce";
import { searchMovieAPIUrl } from "../api/apiURL";


const Search = () => {
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
  const dispatch = useDispatch();


  const handleSearch = (text) => {
    setSearch(text);
  };
  const debounceSearch = useCallback(debounce(handleSearch, 1000), []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `${searchMovieAPIUrl}${search}`
        );
        const data = await res.json();
        if (data.Response === "True") {
          dispatch(setSearchMovies(data.Search));
          dispatch(setErrorMessage(""));
        } else {
          dispatch(setSearchMovies([]));
          dispatch(setErrorMessage(data.Error));
        }
        setTimeout(()=>{
          dispatch(setLoading(false))
          searchRef.current?.blur()
        },1000)
      } catch (error) { 
        console.log(error);
      }
    };

    if (!search) {
      dispatch(setSearchMovies([]));
      dispatch(setErrorMessage(""));
    } else {
      dispatch(setLoading(true))
      fetchMovies();
    }
  }, [search]);

  return (
    <div className="d-flex w-100 search-input-container border align-items-center slide-in">
      <div className="search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          <path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path>
        </svg>
      </div>
      <div className="search-input-flex">
        <input
          ref={searchRef}
          type="text"
          placeholder="Search Movies"
          onChange={(e) => {debounceSearch(e.target.value)}}
          className="search-input w-100 font-weight-bold font-poppins"
        />
      </div>
    </div>
  );
};

export default Search;
