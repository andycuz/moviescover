import React, { useState } from "react";

export default function SearchMovies() {
  const [query, setQuery] = useState("");

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="ex. Old Boy"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
