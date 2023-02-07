import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const sharebutton = () => {
    navigate("/KakaoShareButton");
  };
  const dragbutton = () => {
    navigate("/DragTest");
  };
  const adddndbutton = () => {
    navigate("/AddDnd");
  };
  return (
    <>
      <h1>Hello World!</h1>
      <Button onClick={sharebutton}>공유하기</Button>
      <Button onClick={dragbutton}>드래그 테스트</Button>
      <Button onClick={adddndbutton}>추가 드래그 테스트</Button>
    </>
  );
};
export default Main;
