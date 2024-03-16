import { BrowserRouter, Routes, Route } from "react-router-dom";

// import RegisterPage from "./components/Register/Register"
import RegisterPage from "./pages/RegisterPage/RegisterPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
