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
// import MyTour from "./pages/MyTour";
import SoilMoisture from "./pages/SoilMoisture";

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
          <Route
            path="moisture-detector"
            element={
              <SoilMoisture />
            }
          />
          {/* <Route
            path="my-tour"
            element={
              <MyTourLayout>
                <MyTour />
              </MyTourLayout>
            }
          /> */}
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

// function MyTourLayout({ children }) {
//   const { pathname } = useLocation();
//   let currentPath = pathname.split("/")[3];
//   console.log(currentPath)
//   return (
//     <>
//         <div className="btm-nav">
//       <Link to="/" className={currentPath == undefined ? `active` : ""}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//           />
//         </svg>
//       </Link>
//       <Link className={currentPath == "tour" ? `active` : ""}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//           />
//         </svg>
//       </Link>
//       <Link className={currentPath == "about" ? `active` : ""}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//           />
//         </svg>
//       </Link>
//     </div>
//     <div className="my-4 mx-6 min-h-screen">{children}</div>
//     </>
//   );
// }
