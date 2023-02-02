import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages";
import KakaoShareButton from "./components/KakoShareButton";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/KakaoShareButton" element={<KakaoShareButton />} />
    </Routes>
  );
}

export default App;
