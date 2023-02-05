import KakaoShareButton from "../components/KakoShareButton";
import { Main } from "../pages";
import Dragtest from "../pages/Dragtest";

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
  {
    title: "드래그",
    url: "DragTest",
    component: <Dragtest />,
  },
];
export default Router;
