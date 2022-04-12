let movies = [
  {
    id: 1,
    name: 'Matrix II Reloaded',
    score: 7.2,
  },
  {
    id: 2,
    name: 'The Fifth Element',
    score: 7.7,
  },
  {
    id: 3,
    name: 'The Rock',
    score: 7.4,
  },
  {
    id: 4,
    name: 'Starship Troopers',
    score: 7.3,
  },
  {
    id: 5,
    name: 'Total Recall',
    score: 7.5,
  },
  {
    id: 6,
    name: 'I Am Legend',
    score: 7.2,
  },
]

export const getMovies = () => movies

export const getMovieById = (id) => {
  return movies.find(p => p.id === id)
}

export const deleteMovie = (id) => {
  const before = movies.length
  movies = movies.filter(m => m.id !== id)
  return (before > movies.length)
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score
  }
  movies.push(newMovie)
  return newMovie
}
