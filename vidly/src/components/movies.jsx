import React, {Component} from "react";
import { getMovies } from "../services/fakeMovieService";
import { deleteMovie } from "../services/fakeMovieService";

class Movies extends Component{
    state = {
        movies:getMovies(),
    };

    handleDelete = movie =>{
        deleteMovie(movie);
    }
    renderMovies(){
        if(this.state.movies.length ===0) return (<p>No movies</p>);
        return (
             <div className="row row-cols-auto" style={{
                    fontSize:20,
                }}>
                   <div className="col-md-2">{this.state.movies.map(movieTitle =><p key={movieTitle}>{movieTitle.title}</p>)}</div>
                    <div className="col-md-2">{this.state.movies.map(movieGenre =><p key={movieGenre}>{movieGenre.genre.name}</p>)}</div>
                    <div className="col-md-2">{this.state.movies.map(inStock =><p key = {inStock}>{inStock.numberInStock}</p>)}</div>
                    <div className="col-md-2">{this.state.movies.map(rate =><p key={rate}>{rate.dailyRentalRate}</p>)}</div>
                    <div className="col-md-2">
                    {
                        this.state.movies.map( del =>
                        <p style={{
                            marginBottom:12,
                        }}>
                            <button onClick={this.handleDelete(del._id)} className="btn btn-sm btn-danger">
                                Delete
                            </button>
                        </p>
                        )
                    }
                    </div>
            </div>
        )
        
    }
    render(){
        return(
            <div className="container">
            <p style={{
                fontSize:30,
                marginTop:30,
            }}>Showing <span>{this.state.movies.length}</span> movies in the database</p>
    
            {this.state.movies.lenght===0 && 'No Movies'}
            <hr></hr>
                <div className="row row-cols-auto" style={{
                    fontWeight:"bold",
                    fontSize:20,
                }}>
                    <div className="col-md-2">Title</div>
                    <div className="col-md-2">Genre</div>
                    <div className="col-md-2">Stock</div>
                    <div className="col-md-2">Rate</div>
                    <div className="col-md-2"></div>
                </div>
            <hr></hr>
            {this.renderMovies()}
            </div>
        )
    }
};

export default Movies;