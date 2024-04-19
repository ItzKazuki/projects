import { Link, Route, Routes, useLocation } from "react-router-dom";
import Bullying from "./pages/Bullying";
import Layout from "./components/Layout";
import CheckDevice from "./middleware/CheckDevice";
import ErrorPage from "./pages/ErrorPage";
import MyMovies, { MovieSearch } from "./pages/MyMovies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHomeAlt,
  faInfoCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <Routes>
      <Route element={<CheckDevice />}>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/projects">
          <Route
            path="bullying"
            element={
              <Layout>
                <Bullying />
              </Layout>
            }
          />
          <Route
            path="my-movie"
            element={
              <MyMoviesLayout>
                <MyMovies />
              </MyMoviesLayout>
            }
          />
          <Route
            path="my-movie/search"
            element={
              <MyMoviesLayout>
                <MovieSearch />
              </MyMoviesLayout>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

function MyMoviesLayout({ children }) {
  // check navbar page
  //get pathname
  const { pathname } = useLocation();
  let currentPath = pathname.split("/")[3];
  return (
    <>
      <div className="navbar border-b top-0 sticky z-10 bg-base-100">
        <div className="navbar-start">
          {currentPath == "search" ? (
            <Link to={"/projects/my-movie"} className="btn btn-ghost btn-circle">
              <FontAwesomeIcon className="h-5 w-5" icon={faHomeAlt} />
            </Link>
          ) : (
            <Link to={"search"} className="btn btn-ghost btn-circle">
              <FontAwesomeIcon className="h-5 w-5" icon={faSearch} />
            </Link>
          )}
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-lg">MyMovies</a>
        </div>
        <div className="navbar-end">
          <Link className="btn btn-ghost btn-circle">
            <FontAwesomeIcon icon={faInfoCircle} className="h-5 w-5" />
          </Link>
        </div>
      </div>
      <div className="my-4 mx-6 min-h-screen">{children}</div>
    </>
  );
}
