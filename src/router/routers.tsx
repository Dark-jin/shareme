import { Main } from "../pages";
import Share from "../pages/Sharepage";

const Router = [
  {
    title: "Home",
    url: "/",
    component: <Main />,
  },
  {
    title: "카카오톡 공유하기",
    url: "Sharepage",
    component: <Share />,
  },
];
export default Router;
