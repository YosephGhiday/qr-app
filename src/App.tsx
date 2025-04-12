import { Routes, Route, BrowserRouter } from "react-router-dom";
import { routes } from "./static/routes/routes";

import ProtectedRoutes from "./utils/ProtectedRoutes";

// import { Scanner } from "@yudiel/react-qr-scanner";

// function App() {
//   return (
//     // <Scanner
//     //   onScan={(result) => {
//     //     console.log(JSON.parse(result[0].rawValue));
//     //   }}
//     // />
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {routes.map((route, index) => {
            return route.isProtected == undefined ||
              route.isProtected == false ? (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              />
            ) : null;
          })}
        </Route>

        <Route element={<ProtectedRoutes />}>
          {routes.map((route, index) => {
            return route.isProtected ? (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              />
            ) : null;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
