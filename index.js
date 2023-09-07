import React from "react";
import { createRoot } from "react-dom/client"; //inserir o react no html

const favoriteMovies = {
  name: ['Barbie', 'John Wick 4', 'Oppenheimer'],
  description: ['Descrição do Filme 1', 'Descrição do Filme 2', 'Descrição do Filme 3'],
  photos: [
    'barbie.jpg',
    'john.jpg',
    'oppen.jpg'
  ]
};

const movieListJSX = (
  <div className="divPrincipal">
    <h1>Meus Filmes Favoritos</h1>
    <ul>
      {favoriteMovies.name.map((movieName, index) => (
        <li key={index}>
          <h2>{movieName}</h2>
          <p>{favoriteMovies.description[index]}</p>
          <img src={favoriteMovies.photos[index]} alt={movieName} />
        </li>
      ))}
    </ul>
  </div>
);

const container = document.getElementById('myApp');
const root = createRoot(container);
root.render(movieListJSX);