import React, { useEffect, useState } from "react";

const Films = () => {
  const [movies, setMovies] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "78c6a3f777msh1b78429cfeedcb6p19e3a3jsnfa76ab0eb2ae",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };
  const url = "https://imdb-top-100-movies.p.rapidapi.com/";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMovies(result); // Assuming the response is an array of movie objects
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
      <div className="films-section">
        <div className="films-display">
          {/* {movies.map((movie, index) => (
            <>
              <div className="film">
                <div className="film-image">
                  <img key={index} src={movie.image} alt="" />
                </div>
              </div>
            </>
          ))} */}
        </div>
      </div>
  );
};

export default Films;
