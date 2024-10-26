import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { publicRoutes } from ".";
import Layout from "@/layout";

const RouteComponents = () => {
  // Scroll to top effect
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div>
      {ScrollToTop()}
      <Routes>
        <Route element={<Layout />}>
          {publicRoutes.map(({ component: Component, path }) => {
            return <Route element={<Component />} path={path} key={path} />;
          })}
        </Route>
      </Routes>
    </div>
  );
};

export default RouteComponents;
