import KakaoShareButton from "../components/KakoShareButton";
import { Main } from "../pages";

const Router = [
  {
    title: "Home",
    url: "/",
    component: <Main />,
  },
  {
    title: "카카오 공유",
    url: "KakaoShareButton",
    component: <KakaoShareButton />,
  },
];
export default Router;
