import { Button } from "@mui/material";
import React, { useEffect } from "react";
const KakaoShareButton = () => {
  const TEMPLATE_ID = 89242;
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_JAVASCRIPT_KEY);
    }
    window.Kakao.Share.createScrapButton({
      container: "#kakaotalk-sharing-btn",
      requestUrl: "https://dark-jin.vercel.app",
      templateId: `${TEMPLATE_ID}`,
    });
  }

  // const sharebtn = () => {};
  // useEffect(() => {}, []);
  return (
    <>
      <Button>
        <img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png" />
      </Button>
    </>
  );
};
export default KakaoShareButton;
