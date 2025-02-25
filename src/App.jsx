import { useState, useEffect } from "react";
import Search from "./component/search";
import Spinner from "./component/spinner";
import Movie_card from "./component/movie_card";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchterm, setSearchterm] = useState("");
  const [errormessage, setErrormessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false); // updated

  const fetchMovies = async (query = "") => {
    setLoading(true);
    setErrormessage("");

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/movie/popular?language=en-US&page=1`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("An error occured while fetching the data.");
      }

      const data = await response.json();

      if (query && (!data.results || data.results.length === 0)) {
        setErrormessage("No movies found for your search.");
        setMovies([]);
        return;
      }

      setMovies(data.results || []);
    } catch (error) {
      console.error(`error: ${error}`);
      // setErrormessage("An error occured. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchterm);
  }, [searchterm]);

  return (
    <main className="bg-[image:url('/assets/BG.png')]">
      <div className="pattern">
        <div className="wrapper">
          <header>
            <h1>
              <img
                src="/assets/logo.png"
                style={{ width: "80px", height: "90px" }}
                alt="logo"
              />
              <img src="/assets/image.png" alt="hero-image" />
              find <span className="text-gradient">movies</span> you'll enjoy
              without a hassle
            </h1>
            <Search searchterm={searchterm} setSearchterm={setSearchterm} />
          </header>

          <section className="all-movies">
            <h2 className="mt-[40px]">All movies</h2>

            {loading ? (
              <Spinner />
            ) : errormessage ? (
              <p className="text-red-500">{errormessage}</p>
            ) : (
              <ul>
                {movies.map((movie) => (
                  <Movie_card key={movie.id} movie={movie} />
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default App;
