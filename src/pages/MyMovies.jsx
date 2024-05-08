import { useEffect, useState } from "react";
import { Card, Each } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import getMovies from "../api/movie/getMovies";
import searchMovie from "../api/movie/searchMovie";
import getMovie from "../api/movie/getMovie";

export default function MyMovies() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    // fetch api here
    getMovies().then((res) => setPopularMovies(res.items));
  }, []);

  return (
    <div>
      <div id="popular" className="mb-3">
        <h1 className="text-2xl font-bold mb-4">Popular</h1>
        <div className="flex flex-nowrap overflow-auto">
          <Each of={popularMovies} render={(item) => <Movie detail={item} />} />
        </div>
      </div>
      <div id="now-playing">
        <h1 className="text-2xl font-bold mb-4">Now Playing</h1>
      </div>
    </div>
  );
}

function Movie({ detail, className }) {
  const [resMovie, setResMovie] = useState();

  const handleCloseModal = () => {
    document
      .getElementById(`detail_movie_${detail.id}`)
      .classList.remove("modal-open");
  };

  const handleClickModal = async () => {
    //harus fetch di sini, trs masukin ke resMovie, trs open modal
    // await getData(`/movie/${detail.id}`).then(res => setResMovie(res))
    getMovie(detail.id).then((res) => setResMovie(res));
    // open modal here
    document
      .getElementById(`detail_movie_${detail.id}`)
      .classList.add("modal-open");
  };

  return (
    <>
      {detail.poster_path ? (
        <img
          onClick={handleClickModal}
          src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
          alt=""
          className={`rounded w-32 mr-2 flex-auto ${className}`}
        />
      ) : (
        ""
      )}
      <dialog id={`detail_movie_${detail.id}`} className="modal modal-middle">
        <div className="modal-box">
          <img
            src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
            width={200}
            alt=""
            className="rounded mx-auto"
          />
          <h3 className="font-bold text-2xl mt-2">{detail.title}</h3>
          <p className="py-4">{detail.overview}</p>
          <div className="modal-action">
            {resMovie ? (
              <Link to={resMovie.homepage} className="btn btn-primary">
                Official Web
              </Link>
            ) : (
              ""
            )}
            <button className="btn" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

// gini aja ini page utama, jadi kita bakal sort berdasarkan genre horor etc..

const ListGenere = () => {
  return (
    <div id="genere">
      <h1 className="text-2xl font-bold mb-4">Genere</h1>
      <div className="grid grid-cols-2 gap-2 pl-3">
        <Card isCenter={true} className={"bg-red-500"}>
          <h1 className="card-title">Horror</h1>
        </Card>
        <Card isCenter={true} className={"bg-red-500"}>
          <h1 className="card-title">Fiction</h1>
        </Card>
        <Card isCenter={true} className={"bg-red-500"}>
          <h1 className="card-title">Action</h1>
        </Card>
        <Card isCenter={true} className={"bg-red-500"}>
          <h1 className="card-title">Sci-fi</h1>
        </Card>
      </div>
    </div>
  );
};

export function MovieSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    // do fetch here!
    searchMovie(searchQuery).then((res) => setSearchResult(res.items));
  };

  const SearchResult = () => {
    return (
      <div className="flex flex-wrap">
        <Each
          of={searchResult}
          render={(item) => <Movie detail={item} className={"my-2"} />}
        />
      </div>
    );
  };

  return (
    <div>
      <div id="search" className="mb-3">
        <h1 className="text-2xl font-bold mb-2">Looking for?</h1>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="movie-search"
            className="input input-md input-bordered flex items-center gap-2">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              className="grow"
              placeholder="Dua Hati Biru"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>
          <button type="submit" className="hidden"></button>
        </form>
      </div>
      {searchResult ? <SearchResult /> : <ListGenere />}
    </div>
  );
}
