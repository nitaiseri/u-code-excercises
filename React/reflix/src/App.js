import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from "./components/Home"
import Catalog from "./components/Catalog"
import Movie from "./components/Movie"
import { AiFillHome } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";

class App extends Component {

  constructor() {
    super()
    this.state = {
      movies: [
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ],
      users: [
        { id: 0, name: "Belle", badget: 100 , picUrl: "https://lumiere-a.akamaihd.net/v1/images/ct_belle_upcportalreskin_20694_e5816813.jpeg?region=0,0,330,330"},
        { id: 1, name: "Mulan", badget: 100, picUrl: "https://lumiere-a.akamaihd.net/v1/images/ct_mulan_upcportalreskin_20694_78e0045d.jpeg?region=0,0,330,330"},
        { id: 2, name: "Rapunzel", badget: 100, picUrl: "https://lumiere-a.akamaihd.net/v1/images/ct_rapunzel_upcportalreskin_20694_01be5a18.jpeg?region=0,0,330,330" },
        { id: 3, name: "Ariel", badget: 100, picUrl: "https://lumiere-a.akamaihd.net/v1/images/ct_ariel_upcportalreskin_20694_09abefbe.jpeg?region=0,0,330,330" }
      ],
      currentUser: null
    }
  }

  changeCurrentUser = (userId) => {
    this.setState({
      currentUser: userId
    })
  }

  getCurrentUser = () => {
    const currentUser = this.state.currentUser;
    if (currentUser !== null) {
      return this.state.users.filter(u => u.id === currentUser)[0] || null
    }
    return null;
  }

  getMovieObject = (movieId) => {
    return this.state.movies.filter(m => m.id === movieId)[0] || null
  }

  createUpdatedMoviesAfterRent = (movieId) => {
    const movies = [...this.state.movies];
    const movieIndex = movies.findIndex((m => m.id === movieId));
    movies[movieIndex].isRented = !movies[movieIndex].isRented;
    return movies;
  }

  createUpdatedUserAfterRent = (moviePrice) => {
    const users = [...this.state.users];
    const userIndex = users.findIndex((u => u.id === this.state.currentUser));
    users[userIndex].badget += moviePrice;
    return users;
  }

  unRentMovie = (movieId) => {
    const movies = this.createUpdatedMoviesAfterRent(movieId);
    const users = this.createUpdatedUserAfterRent(50);

    this.setState({
      movies,
      users
    })
  }

  rentMovie = (movieId) => {
    if (this.currentUserCanAfford()) {
      const movies = this.createUpdatedMoviesAfterRent(movieId);
      const users = this.createUpdatedUserAfterRent(-50);

      this.setState({
        movies,
        users
      })
    }
    else {
      alert("Sorry, you don't have enough money. Go to work!");
    }
  }

  currentUserCanAfford = () => {
    const user = this.getCurrentUser();
    return user.badget >= 50;
  }


  render() {
    const state = this.state
    // let ConditionalCatalogLink = this.state.currentUser !== null ? Link : React.DOM.div;
    return (
      <Router>
        <div className="App">
          <div id="home-background"></div>
          <div id="main-links">
            <Link to="/"><AiFillHome /></Link>
            <Link to="/catalog"><MdLocalMovies /></Link>
          </div>
          <Route path="/" exact component={() =>
            <Home
              users={state.users}
              changeUser={this.changeCurrentUser} />} />
          <Route path="/catalog" exact component={() =>
            this.state.currentUser !== null ?
              <Catalog
                currentUser={this.getCurrentUser()}
                movies={state.movies}
                unRentMovie={this.unRentMovie}
                rentMovie={this.rentMovie}
                updateBadget={this.updateBadget} />
              :
              <Home
                users={state.users}
                changeUser={this.changeCurrentUser}
                message={"Please connect to some user:"} />} />
          <Route path="/movies/:movie_id" exact render={({ match }) =>
            <Movie
              match={match}
              getMovie={this.getMovieObject} />} />
        </div>
      </Router>
    );
  }
}

export default App;
