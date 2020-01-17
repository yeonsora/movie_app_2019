import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: [] //선언을 안해도 setState를 이용해서 추가할 수 있지만, 미래에 사용할 state를 뿌려주는게 좋다.
  };

  getMovies = async () => {
    // const movieOrigin = await axios.get('https://yts-proxy.now.sh/list_movies.json');

    // console.log(movieOrigin)
    const {
      data: {
        data: {movies}
      }
    // } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    } = await axios.get('https://yts.lt/api/v2/list_movies.json?sort_by=rating')

    console.log(movies)

    this.setState({
      movies : movies,
      isLoading : false
    })
  }
  async componentDidMount(){
    //fetch
    //axios
    //https://yts-proxy.now.sh/list_movies.json
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return <section className='container'>
      {isLoading ? (
        <div className='loader'>
          <span className='loader__text'>Loading...</span>
        </div>
        ) : (
          <div className='movies'>
            { movies.map(m => (
              <Movie 
                key={m.id} 
                id={m.id} 
                year={m.year} 
                title={m.title} 
                summary={m.summary} 
                poster={m.medium_cover_image} 
                genres={m.genres}/>
            ))}          
          </div>
        )
    }</section>
  }
}

export default Home;
