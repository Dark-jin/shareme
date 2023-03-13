import { Button } from "@mui/material";
import React, { useEffect } from "react";

export const KakaoChannel = () => {
  const channel = () => {
    window.Kakao.Channel.createChatButton({
      container: "#kakao-talk-channel-chat-button",
      channelPublicId: "_uAxikxj",
    });
  };
  return (
    <div>
      <a id="kakao-talk-channel-chat-button" href="#">
        <Button onClick={channel}>채널</Button>
      </a>
    </div>
  );
};
