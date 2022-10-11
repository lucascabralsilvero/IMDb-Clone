import { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=76470263ef8b82c9b2248e7c930682fd&language=en-US&page=1")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, []);

  return (
    <>
    <h1 className="poster">
        <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        >

        {
            popularMovies.map(movie => (
                
            <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}} > 
                    <div className="posterImage">
                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="carousel" />
                    </div>
                    <div className="posterImage__overlay">
                        <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                        <div className="posterImage__runtime">
                            {movie ? movie.release_date : ""}
                            <span className="posterImage__rating">
                                {movie ? movie.vote_average : ""}
                                <i className="fas fa-star"/> {" "}
                            </span>
                        </div>
                        <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                     </div>
          </Link>
            ))
        }

        </Carousel>
        <MovieList />
    </h1>
    </>
  )
}

export default Home;