import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../../utilities/storage";


export const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movies: [],
        favoriteMovies: (getLocalStorage("favorite_movies")||[]),
        errorMessage: "",
        loading:false
    },
    reducers: {
        setSearchMovies: (state, action) => {
            state.movies = action.payload;
        },
        setFavoriteMovies: (state, action) => {
            state.favoriteMovies = action.payload;
        },
        addFavoriteMovies: (state, action) => {

            if (state.favoriteMovies.find((movie) => movie.imdbID === action.payload.imdbID) == null) {
                let new_arr = [...state.favoriteMovies, action.payload]
                setLocalStorage('favorite_movies', new_arr);
                return {
                    ...state,
                    favoriteMovies: new_arr
                }
            };

        },
        removeFavoriteMovies: (state, action) => {
            let new_arr = state.favoriteMovies.filter((movie) => movie.imdbID !== action.payload.imdbID);
            setLocalStorage('favorite_movies', new_arr)
            return {
                ...state,
                favoriteMovies: new_arr
            }

        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        },
        setLoading :(state,action)=>{
            state.loading = action.payload;
        }
    }
});

export const { setSearchMovies, setFavoriteMovies, addFavoriteMovies, removeFavoriteMovies, setErrorMessage, setLoading } = movieSlice.actions;

export const selectMovies = (state) => state.movieReducer.movies;
export const selectFavoriteMovies = (state) => state.movieReducer.favoriteMovies;
export const selectErrorMessage = (state) => state.movieReducer.errorMessage;
export const selectLoading = (state)=>state.movieReducer.loading;

export default movieSlice.reducer;