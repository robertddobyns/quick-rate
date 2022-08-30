import './App.css';

import movieList from './movies.json'

const sortedMovies = () => {
  let movies = movieList
  movies.sort((a,b) => {
    let a1 = a.name
    let b1 = b.name

    if(a1 < b1) {
      return -1
    }
    if(a1 > b1) {
      return 1
    }
    return 0
  })

  return movies
}

function App() {
  return (
      <div style={{margin: '0 auto', width: '500px', textAlign: 'center'}}>
        <table>

          <tr>
            <th>Name</th>
            <th>Finished</th>
            <th>Rating</th>
          </tr>

          <tbody>
          {sortedMovies().map(movie => (
              <tr key={movie.id}>
                <td>
                  {movie.name}
                </td>
                <td style={{backgroundColor: '#ddd'}}>
                  {movie.finished ? 'yes' : 'no'}
                </td>
                <td>
                  {movie.rating ? 'liked' : 'disliked'}
                </td>
              </tr>
          ))}
          </tbody>
        </table>

      </div>
  );
}

function Movie(props) {

  const {name, finished, rating} = props.movie

  return (
      <div>
        {`${name} | ${finished} | ${rating}`}
      </div>
  )
}

export default App;
