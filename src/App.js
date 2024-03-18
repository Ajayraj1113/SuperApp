import { BrowserRouter, Routes, Route } from "react-router-dom";

// import RegisterPage from "./components/Register/Register"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import MoviePage from "./pages/MoviePage/MoviePage"
import HomePage from "./pages/HomePage/HomePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/genre" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
