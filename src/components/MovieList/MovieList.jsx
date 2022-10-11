import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "./MovieList.css";
import Cards from "../Cards/Cards";


const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const {type} = useParams();

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getData();
    }, [type]);

    const getData = () =>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=76470263ef8b82c9b2248e7c930682fd&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))

    }

  return (
        <div className="movie__list">
                <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
                <div className="list__cards">
                    {
                        movieList.map( movie => (
                            <Cards movie={movie} />
                        )

                        )
                    }
                </div>
        </div>
  )
}

export default MovieList;