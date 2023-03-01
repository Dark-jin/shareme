import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Main } from "./pages";
import KakaoShareButton from "./components/KakoShareButton";
import Tosspay from "./pages/Tosspay";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/KakaoShareButton" element={<KakaoShareButton />} />
      <Route path="/Tosspay" element={<Tosspay />} />
    </Routes>
  );
}

export default App;
