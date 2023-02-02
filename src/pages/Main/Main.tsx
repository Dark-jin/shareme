import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const sharebutton = () => {
    navigate("/KakaoShareButton");
  };
  return (
    <>
      <h1>Hello World!</h1>
      <Button onClick={sharebutton}>공유하기</Button>
    </>
  );
};
export default Main;
