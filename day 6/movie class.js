class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movieList) {
      return movieList.filter(movie => movie.rating === "PG");
    }
  }
  
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  const movies = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R"),
    new Movie("Movie3", "Studio3", "PG"),
    new Movie("Movie4", "Studio4", "G"),
  ];
  
  const pgMovies = Movie.getPG(movies);
  
  console.log(`Title: ${casinoRoyale.title}`);
  console.log(`Studio: ${casinoRoyale.studio}`);
  console.log(`Rating: ${casinoRoyale.rating}`);
  
  console.log("PG-rated Movies:");
  pgMovies.forEach(movie => {
    console.log(`${movie.title} - ${movie.studio} (${movie.rating})`);
  });
  