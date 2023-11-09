function processMovies(commands) {
    const movies = {};
  
    for (const command of commands) {
      const tokens = command.split(' ');
  
      if (tokens.includes('addMovie')) {
        const movieName = tokens.slice(1).join(' ');
        movies[movieName] = {};
      } else if (tokens.includes('directedBy')) {
        const movieName = tokens.slice(0, tokens.indexOf('directedBy')).join(' ');
        const director = tokens.slice(tokens.indexOf('directedBy') + 1).join(' ');
        if (movies.hasOwnProperty(movieName)) {
          movies[movieName].director = director;
        }
      } else if (tokens.includes('onDate')) {
        const movieName = tokens.slice(0, tokens.indexOf('onDate')).join(' ');
        const date = tokens.slice(tokens.indexOf('onDate') + 1).join(' ');
        if (movies.hasOwnProperty(movieName)) {
          movies[movieName].date = date;
        }
      }
    }
  
    for (const [movie, info] of Object.entries(movies)) {
      if (info.director && info.date) {
        console.log(JSON.stringify({ name: movie, director: info.director, date: info.date }));
      }
    }
  }