import { useNavigate } from "react-router-dom";
import KakaoShareButton from "../../components/KakoShareButton";
import { Button } from "@mui/material";

const Main = () => {
  const navigate = useNavigate();

  const paybutton = () => {
    navigate("/Tosspay");
  };
  return (
    <>
      <h1>Hello World!</h1>
      <KakaoShareButton />
      <Button onClick={paybutton}>토스 결제창 띄우기</Button>
    </>
  );
};
export default Main;
