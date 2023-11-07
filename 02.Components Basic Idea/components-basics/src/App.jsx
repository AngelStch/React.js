import MovieList from './components/MovieList.jsx'
import movies from './assets/Movies.js'
import './App.css'
import Timer from './components/Timer.jsx'
import Counter from './components/Counter.jsx'

function App() {
  
  return (
    <div>
      <h1>My first react applovation</h1>
    <Counter/>

      <Timer startTime ={4}></Timer>
          <MovieList movies={movies}/>
    </div>
  )
}

export default App
