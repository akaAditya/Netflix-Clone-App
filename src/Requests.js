//Typically we would store in {process.env.API_KEY}

const API_KEY = "c94f45d8322466c870645eb8411b6fa5";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    // fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchNetflixOriginals: `/discover/tv?api_key=c94f45d8322466c870645eb8411b6fa5&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
}

export default requests;


// https://api.themoviedb.org/3/discover/tv?api_key=c94f45d8322466c870645eb8411b6fa5&with_network=213