import { Main } from "../pages";
import Sharepage from "../pages/Sharepage";

const Router = [
  {
    title: "Home",
    url: "/",
    component: <Main />,
  },
  {
    title: "카카오톡 공유하기",
    url: "Sharepage",
    component: <Sharepage />,
  },
];
export default Router;
