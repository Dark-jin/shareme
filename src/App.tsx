import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages";
import KakaoShareButton from "./components/KakoShareButton";
import Dragtest from "./pages/Dragtest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/KakaoShareButton" element={<KakaoShareButton />} />
      <Route path="/DragTest" element={<Dragtest />} />
    </Routes>
  );
}

export default App;
