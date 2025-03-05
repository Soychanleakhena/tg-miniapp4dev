import { JSX } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";

import MembershipPlan from "../pages/membershipPlan";
import Checkout from "../pages/membershipInfo";

import FitnessLandingPage from "../pages/Home";
import Promotion from "../pages/Promotion"
import Detail from "../pages/DetailPromotion"

import BranchesPage from "../pages/pageBranch";
import Coupons from "../pages/couPons";


export interface AppRoute {
  path?: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
  children?: AppRoute[];
}

export const webRoutes = {
  home: "/",

  membership: "/membership",
  membershipInfo: "/membership-info"

  promotion: "/promotion",
  gymPromotion: "/detail",
  branch :"/branch",
  coupons : "/Coupon"

  // discover: "/discover",
};

const errorElement = (
  <div className="flex items-center justify-center h-screen">
    Sorry, something went wrong
  </div>
);

const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Layout />,
    children: [

      { path: webRoutes.home, element: <ProfilePage /> },
      { path: webRoutes.membership, element: <MembershipPlan /> },
      { path: webRoutes.membershipInfo, element: <Checkout /> },

      { path: webRoutes.home, element: <FitnessLandingPage /> },
      { path: webRoutes.promotion, element: <Promotion /> },
      { path: webRoutes.gymPromotion, element: <Detail /> },

      // { path: webRoutes.discover, element: <DiscoverPage /> },
      { path: webRoutes.home, element: <ProfilePage /> },
      { path: webRoutes.branch, element: <BranchesPage /> },
      { path: webRoutes.coupons, element: <Coupons /> },

    ],
  },
  {
    path: "*",
    element: <div>NotFoundPage</div>,
    errorElement: errorElement,
  },
];

const router = createBrowserRouter(appRoutes);

export default router;
