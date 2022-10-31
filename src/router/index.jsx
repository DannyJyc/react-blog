import React, { lazy } from "react";
import PageLoad from "../layout/pageload";
// import Test from '@/page'

function __variableDynamicImportRuntime__(path) {
  switch (path) {
    case "":
      return import("@/layout/layout.jsx");
    case "/layout/pageload.jsx":
      return import("@/layout/pageload.jsx");
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
      { index: true, path: "/index", element: lazyLoad("/index") },
      {
        name: "HOME",
        path: "/home",
        element: lazyLoad("/home"),
      },
    ],
  },
  {
    path: "/pl",
    element: lazyLoad("/layout/pageload.jsx"),
  },
];

export default router;
