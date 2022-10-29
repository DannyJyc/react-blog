import React,{lazy} from 'react'
// import Test from '@/page'

function __variableDynamicImportRuntime__(path) {
    switch (path) {
      case '':
        return import('@/page');
      default:
        return new Promise(function (resolve, reject) {
          queueMicrotask(reject.bind(null, new Error('Unknown variable dynamic import: ' + path)));
        });
    }
  }

const lazyLoad = (path)=>{
    const Comp = lazy(()=>__variableDynamicImportRuntime__(path))
    return (
        <React.Suspense fallback={<>加载中···</>}>
            <Comp />
        </React.Suspense>
    )
}

let router = [
  {
    path: "/",
    element: lazyLoad(''),
  }
];

export default router;
