# react-blog

#### 介绍
搭建过程出现的问题简单记录

>react-routerv6
>>1、基础的router搭建直接参考react-router的官网就行（看好版本）
>>
>>2、按照以往在用vue框架搭建项目中以某一个文件中JSON对象来管理项目的路由出现了一些问题（可能是Vite独有的用以往大众的方式构建项目可能没有这么多破事）
>>>2-1、配置Json是发现如果给Json数组中某一个元素下的item直接按照原来Vue的方式去直接在后面引入对应文件（import）是不行的，浏览器console会出现错误
>>>
>>>`If you meant to render a collection of children, use an array instead`
>>>
>>>最开始一脸懵逼看了一堆教程和框架的范例才TM的意识到问题
>>>（具体参考图片中的代码）
>>>![2-1第一个错误后修复的](/md_files/router-error1.png)
>>>
>>>2-2、因为可能涉及到后来的跟后端配合需要的动态路由，我后端有没办法把react自己的这个<组件/>数据类型存到库里在吐给前端（如果有知道有的话当我没说），就继续想办法改造
>>>
>>>参考了:
>>>
>>>https://www.codetd.com/article/13663626
>>>
>>>成功加上以后虽然出现效果但是开发环境的terminal下会返回如下内容的warning
>>>
>>>`The above dynamic import cannot be analyzed by Vite.
See https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations for supported dynamic import formats. If this is intended to be left as-is, you can use the /* @vite-ignore */ comment inside the import() call to suppress this warning`
>>>
>>>因为咱改造完不是通过不同的的参数（路径）来去动态引入组件嘛，他那个意思好像是Vite默认不让这么干你还得引入一个他家的这个包做一下配置才行
>>>
>>>- - -
>>>*这里注意瞅他官方的文档配置不是在vite.config.js中配置（我像个TM的'小可爱'），否则terminal直接出现一大片error*
>>>- - -
>>>配置完之后新的问题又来了
>>>
>>>`invalid import "import(`@/page${path}`)". Variable bare imports are not supported, imports must start with ./ in the static part of the import. For example: import(`./foo/${bar}.js`).`
>>>
>>>这里就开始告诉你应该咋做了（其实上面包github中readme中写的挺清楚，而且也就是这个插件才能帮助我们动态加载组件，我就是看哪个密密麻麻一片我就没细读）
>>>
>>>简单总结一下就是Vite，默认是不让动态的（就像我们那个似的）去加载项目中的文件，我们需要通过这个插件`dynamic-import-vars`来完成这个事。具体的内容就在上上述那个warning那个链接里就有这里我摘出来官方的那部分放在这里
>>>
>>>function __variableDynamicImportRuntime__(path) {
>>>switch (path) {
>>>    case './locales/en-GB.js':
>>>      return import('./locales/en-GB.js');
>>>    case './locales/en-US.js':
>>>      return import('./locales/en-US.js');
>>>    case './locales/nl-NL.js':
>>>      return import('./locales/nl-NL.js');
>>>    default:
>>>      return new Promise(function (resolve, reject) {
>>>        queueMicrotask(reject.bind(null, new Error('Unknown variable >>>dynamic import: ' + path)));
>>>      });
>>>  }
>>>}
>>>
>>>function importLocale(locale) {
>>>  return __variableDynamicImportRuntime__(`./locales/${locale}.js`);
>>>}
>>>
>>
> **到此react-router才算告一段落**
