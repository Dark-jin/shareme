import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages";
import Sharepage from "./pages/Sharepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Sharepage" element={<Sharepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
