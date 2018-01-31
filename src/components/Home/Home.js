import React from 'react';
import {Menu} from '../../Menu/Menu'

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          movies: []
        }
      }
    movieListNew(){
        const year= new Date();
        const url = 'http://www.omdbapi.com/?apikey=df83937d&t=batman&y=2016';
        console.log(url);
        fetch(url).then(
                function(response) {
                  if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                      response.status);
                    return;
                  }
                  // Examine the text in the response
                  response.json().then(function(data) {
                    console.log(data);
                    const movies = data.children.map(obj => obj.data);
                    this.setState({ movies });
                  });
                }
              )
              .catch(function(err) {
                console.log('Fetch Error :-S', err);
              });
    }
    render () {
        return( 
          <div className="container">
              <div className="row">
                <div className="col-md-3">
                  {<Menu /> }
                </div>
                <div className="col-md-6">
                  <div className="row">
                  <ul>
                    {this.state.movies.map(movie =>
                      <li key={movie.imdbID}>{movie.title}</li>
                    )}
                  </ul>
                    </div>
                </div>
                <div className="col-md-3">
                </div>
              </div>
            </div>
        )
      }
}

export default Home;