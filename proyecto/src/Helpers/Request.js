const API_KEY = "9247cbeee522bccab74fb9fe01b6b892";

const requests = {
  fetchOriginalsNetflix: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTranding: `http://api.themoviedb.org/3trending/all/week?api_key=${API_KEY}&lenguage=en-US`,
  fetchTopRated: `http://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchHorror: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchComedy: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchAction: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchRomance: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
