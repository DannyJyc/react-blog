import React, { lazy } from "react";
import PageLoad from "../layout/pageload";
// import Test from '@/page'

function __variableDynamicImportRuntime__(path) {
  switch (path) {
    case "":
      return import("@/layout");
    case "/layout/pageload.jsx":
      return import("@/layout/pageload.jsx");
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
  },
  {
    path: "/pl",
    element: lazyLoad("/layout/pageload.jsx"),
  },
];

export default router;
