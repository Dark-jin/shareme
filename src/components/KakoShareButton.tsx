import { Button } from "@mui/material";
import React, { useEffect } from "react";

const { VITE_APP_KAKAO_KEY } = import.meta.env;

const myurl = "https://dark-jin.vercel.app";
const KakaoShareButton = () => {
  const kakaokey = VITE_APP_KAKAO_KEY;
  useEffect(() => {
    window.Kakao.init(kakaokey);
  }, []);
  const kakashare = () => {
    window.Kakao.Share.createDefaultButton({
      container: "#kakao-share-btn",
      objectType: "feed",
      content: {
        title: "최진서 기술 블로그",
        description: "프론트엔드 기술 블로그",
        imageUrl: "https://avatars.githubusercontent.com/u/80817196?v=4",
        link: {
          webUrl: myurl,
        },
      },
      social: {
        likeCount: 99,
        commentCount: 99,
        sharedCount: 99,
      },
      buttons: [
        {
          title: "최진서 기술 블로그",
          link: {
            webUrl: myurl,
          },
        },
      ],
    });
  };

  return (
    <>
      <a id="kakao-share-btn">
        <Button onClick={kakashare}>카카오 공유하기</Button>
      </a>
    </>
  );
};
export default KakaoShareButton;
