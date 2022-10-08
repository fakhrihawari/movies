import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import SearchPage from './pages/SearchPage';
import MyFavoritePage from './pages/MyFavoritePage';

function App() {
  return (
    <div className="App">
       <Navbar/>
        <Routes>
          <Route path='/' element={<SearchPage/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/favorite' element={<MyFavoritePage/>}/>
        </Routes>
    </div>
  );
}

export default App;
