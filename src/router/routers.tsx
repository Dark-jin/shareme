import KakaoShareButton from "../components/KakoShareButton";
import { KakaoChannel } from "../components/KakaoChannel";
import { Main } from "../pages";

const Router = [
  {
    title: "Home",
    url: "/",
    component: <Main />,
  },
  {
    title: "카카오 공유",
    url: "/KakaoShareButton",
    component: <KakaoShareButton />,
  },
  {
    title: "카카오 채널",
    url: "/KakaoChannel",
    component: <KakaoChannel />,
  },
];
export default Router;
