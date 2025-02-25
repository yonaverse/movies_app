import detenv from "dotenv";
import { useState, useEffect } from "react";
import Search from "./component/search";
import Spinner from "./component/spinner";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.TMDB;

// const URL =
//   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer${API_KEY}`,
  },
};

const App = () => {
  const [searchterm, setSearchterm] = useState("");
  const [errormessage, setErrormessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState("flase");

  const fetchMovies = async () => {
    setLoading(true);
    setErrormessage("");

    try {
      const endpoint = `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("An error occured. Please try again later.");
      }

      const data = await response.json();

      if (data.response === false) {
        setErrormessage("An error occured. Please try again later.");
        setMovies([]);
        return;
      }

      setMovies(data.results || []);
    } catch (error) {
      console.error(`error: ${error}`);
      setErrormessage("An error occured. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

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
                  <p className="text-white" key={movie.id}>
                    {movie.title}
                  </p>
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
