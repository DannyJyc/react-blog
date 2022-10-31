import React, { lazy } from "react";
// import Test from '@/page'

function __variableDynamicImportRuntime__(path) {
  switch (path) {
    case "":
      return import("@/page");
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
    <React.Suspense fallback={<>加载中···</>}>
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
