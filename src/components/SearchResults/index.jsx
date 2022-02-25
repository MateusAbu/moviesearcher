/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Space, Card, Popover } from 'antd';
import 'antd/dist/antd.css';

import "./styles.css";


const SearchResults = (props) => {
  const api = `https://api.themoviedb.org/3/`;
  const img_api = "http://image.tmdb.org/t/p/w500";

  const [adicionais, setAdicionais] = useState([])


  const handleClick = (movie) => {
    let info = {};


    switch (movie.media_type) {
      case "tv":
        // call tv api
        info = `${api}tv/${movie.id}?language=pt&api_key=f01db0d889e50f7a901036cb303e2d8e`;
        fetch(info)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setAdicionais({ response })
            console.log('teste', adicionais);
          })
        break;
      case "movie":
        //call movie api
        info = `${api}movie/${movie.id}?language=pt&api_key=f01db0d889e50f7a901036cb303e2d8e`;
        fetch(info)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setAdicionais({ response })
            console.log('teste', adicionais);
            console.log('teste2', adicionais.response.status);
          })
        break;
      case "person":
        //call person api
        info = `${api}person/${movie.id}?language=pt&api_key=f01db0d889e50f7a901036cb303e2d8e`;
        fetch(info)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setAdicionais({ response })
            console.log('teste', adicionais);
          })
        break;
      default:
        info = null;
        break;
    }
    return info;
  }

  const add = (
    <div>
      <p>Teste</p>
    </div>
  )

  return (
    <div>
      <Space direction="vertical">

        <ul className="container">
          {props.results &&
            props.results.map((movie) => (
              <li
                className="movie"
                key={movie.id}
                onClick={() => handleClick(movie)}
              >
                <Card title={

                  <img
                    src={
                      movie.poster_path
                        ? img_api + movie.poster_path
                        : img_api + movie.profile_path
                    } onError={(e) => { e.target.onerror = null; e.target.src = "download.png" }}
                  />

                }
                  style={{ width: 300 }}
                  className="movie-image">
                  <div className="movie-info">
                    <div className="title">{movie.title ?
                      movie.title :
                      movie.name}</div>
                    <div className="genres">{movie.vote_average ?
                      <div>Nota: {movie.vote_average}</div> :
                      <div>Popularidade: {movie.popularity}</div>}</div>

                    <div className="movie-text">
                      <div>RESUMO</div>
                      <div className="date">
                        {movie.release_date
                          ? movie.release_date
                          : movie.first_air_date}
                      </div>
                    </div>

                    <div className="text">{movie.overview ?
                      movie.overview :
                      movie.known_for_department}</div>
                  </div>

                </Card>
              </li>
            ))}
        </ul>
      </Space>

    </div>

  );
};


export default SearchResults;