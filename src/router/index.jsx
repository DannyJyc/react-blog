import React, { lazy } from "react";
import PageLoad from "../layout/pageload";
import NoMatch from "@/layout/404.jsx";

function __variableDynamicImportRuntime__(path) {
  switch (path) {
    case "":
      return import("@/layout/layout.jsx");
    case "/index":
      return import("@/components/index.jsx");
    case "/home":
      return import("@/components/home.jsx");
    default:
      return new Promise(function (resolve, reject) {
        queueMicrotask(
          reject.bind(
            null,
            new Error("Unknown variable dynamic import: " + path)
          )
        );
      });
  }
}

const lazyLoad = (path) => {
  const Comp = lazy(() => __variableDynamicImportRuntime__(path));
  return (
    <React.Suspense fallback={<PageLoad></PageLoad>}>
      <Comp />
    </React.Suspense>
  );
};

let router = [
  {
    path: "/",
    element: lazyLoad(""),
    children: [
      {
        index: true,
        path: "/",
        fullPath: "/index",
        element: lazyLoad("/index"),
      },
      {
        name: "HOME",
        path: "/home",
        element: lazyLoad("/home"),
      },
    ],
  },
  {
    name: "404",
    path: "*",
    element: <NoMatch />,
  },
];

export default router;
