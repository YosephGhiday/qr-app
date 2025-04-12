import Page from "../../Page";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../HomePage";
import ScanPage from "../../pages/ScanPage";

interface PageRoute {
  path: string;
  isProtected?: boolean;
  element: React.FC;
}

const routes: PageRoute[] = [
  {
    element: Page,
    path: "/",
    isProtected: true,
  },
  {
    element: LoginPage,
    path: "/login",
  },
  {
    element: HomePage,
    path: "/home",
  },
  {
    element: ScanPage,
    path: "/scan",
  },
];

export { routes, type PageRoute };
