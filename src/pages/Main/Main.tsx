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
      <button onClick={sharepage}></button>
    </>
  );
};
export default Main;
