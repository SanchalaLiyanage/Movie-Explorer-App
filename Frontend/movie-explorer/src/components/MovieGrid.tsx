import React from 'react';
import './MovieGrid.css';

interface Movie {
  id: number;
  title: string;
  releaseYear: string;
  rating: number;
  posterUrl: string;
}

interface MovieGridProps {
  movies: Movie[];
  onMovieClick: (id: number) => void;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies, onMovieClick }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item" onClick={() => onMovieClick(movie.id)}>
          <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.releaseYear} | Rating: {movie.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
