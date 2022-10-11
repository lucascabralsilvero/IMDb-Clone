import "./App.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import MovieList from "./components/MovieList/MovieList";
import MovieDetail from "./pages/home/movieDetail/MovieDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="/*" element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
