import { ABOUT, HOME } from "@/constants/path";
import { Suspense, lazy } from "react";
import { TailSpin } from "react-Loader-spinner";

const Load = (Component: any) => (props: any) =>
    (
      <Suspense
        fallback={
          <div className="page-content h-96 flex items-center justify-center">
            <TailSpin height={50} color="#FDC539" strokeWidth={3} />
          </div>
        }
      >
        <Component {...props} />
      </Suspense>
    );


const Home = Load(lazy(() => import("../pages/Home")));
const About = Load(lazy(() => import("../pages/About")));


export const publicRoutes = [
    {path: HOME, component: Home},
    {path: ABOUT, component: About},
]
