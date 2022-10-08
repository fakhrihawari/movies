import Table from '../components/Table'
import { useSelector } from 'react-redux'
import { selectFavoriteMovies } from '../features/movie/movieSlice';
import ErrorMessage from '../components/ErrorMessage';



const MyFavoritePage = () => {
  const favoriteMovies = useSelector(selectFavoriteMovies);
  return (
    <div className="container mt-5">
    {favoriteMovies.length? (<Table movies ={favoriteMovies}/>) : (<ErrorMessage message={"No Favorite Movies!"}/>)}
  </div>
  )
}

export default MyFavoritePage