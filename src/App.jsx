import { Route, Routes } from "react-router-dom";
import Bullying from "./pages/Bullying";
import Layout from "./components/Layout";
import CheckDevice from "./middleware/CheckDevice";
import ErrorPage from "./pages/ErrorPage";

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
        </Route>
      </Route>
    </Routes>
  );
}
