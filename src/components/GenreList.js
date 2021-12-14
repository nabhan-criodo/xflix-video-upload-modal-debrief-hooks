import React from "react";

const GenreList = ({ allGenres, selectedGenres, handleGenreChange }) => {
  return (
    <>
      <div className="tool-bar">
        {allGenres.map((genre) => (
          <div
            onClick={() => handleGenreChange(genre)}
            className={
              selectedGenres.includes(genre.value)
                ? "genre-btn active-toolbar-button "
                : "genre-btn"
            }
            key={genre.value}
          >
            {genre.label}
          </div>
        ))}
      </div>
    </>
  );
};

export default GenreList;
