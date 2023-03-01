import KakaoShareButton from "../components/KakoShareButton";
import Tosspay from "../pages/Tosspay";
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
  {
    title: "토스 결제창",
    url: "Tosspay",
    component: <Tosspay />,
  },
];
export default Router;
