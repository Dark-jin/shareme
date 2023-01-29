import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const sharepage = () => {
    navigate("/Sharepage");
  };
  return (
    <>
      <h1>Hello World!</h1>
      <Button onClick={sharepage}>공유하기</Button>
    </>
  );
};
export default Main;
