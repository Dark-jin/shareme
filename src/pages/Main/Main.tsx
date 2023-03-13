import { useNavigate } from "react-router-dom";
import KakaoShareButton from "../../components/KakoShareButton";
import { Button } from "@mui/material";
import { KakaoChannel } from "../../components/KakaoChannel";
import { useEffect } from "react";

const Main = () => {
  const { VITE_APP_KAKAO_KEY } = import.meta.env;
  const kakaokey = VITE_APP_KAKAO_KEY;

  useEffect(() => {
    window.Kakao.init(kakaokey);
  }, []);

  return (
    <>
      <h1>Hello World!</h1>
      <KakaoShareButton />
      <KakaoChannel />
    </>
  );
};
export default Main;
