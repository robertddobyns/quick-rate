import './App.css';

import movieList from './movies.json'
import appVars from './vars.json'

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

const getRating = (v) => {
  switch (v) {
    case 1:
      return 'Liked'
    case 2:
      return 'Meh'
    case 3:
      return 'Disliked'
    default:
      return 'N/A'
  }
}

function App() {
  return (
      <div style={{margin: '0 auto', width: '500px', textAlign: 'center', position: 'relative'}}>
        <table>

          <tr>
            <th>Name</th>
            <th>Finished</th>
            <th>Rating</th>
            <th>Twitter Review</th>
          </tr>

          <tbody>
          {sortedMovies().map(movie => (
              <tr key={movie.id}>
                <td>
                  {movie.name}
                </td>
                <td style={{backgroundColor: '#ddd'}}>
                  {movie.finished ? 'Yes' : 'No'}
                </td>
                <td>
                  {getRating(movie.rating)}
                </td>
                <td>
                  {movie.review ? 'Yes' : 'No'}
                </td>
              </tr>
          ))}
          </tbody>
        </table>
        <div style={{position: 'fixed', bottom: 0,}}>
          <div>{appVars.version}</div>
          <div>{appVars.date}</div>
        </div>
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
