# **react-blog**

### **搭建过程出现的问题简单记录**


#### **react-routerv6**
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
~~~
The above dynamic import cannot be analyzed by Vite.
See https://github.com/rollup/plugins/tree/master/packages/
dynamic-import-vars#limitations for supported dynamic import formats. If
this is intended to be left as-is, you can use the /* @vite-ignore */ 
comment inside the import() call to suppress this warning
~~~
>>>
>>>因为咱改造完不是通过不同的的参数（路径）来去动态引入组件嘛，他那个意思好像是Vite默认不让这么干你还得引入一个他家的这个包做一下配置才行
>>>
>>>- - -
>>>*这里注意瞅他官方的文档配置不是在vite.config.js中配置（我像个TM的'小可爱'），否则terminal直接出现一大片error*
>>>- - -
>>>配置完之后新的问题又来了
>>>
~~~
invalid import "import(`@/page${path}`)". Variable bare imports are not 
supported, imports must start with ./ in the static part of the import. 
For example: import(`./foo/${bar}.js`).
~~~
>>>
>>>这里就开始告诉你应该咋做了（其实上面包github中readme中写的挺清楚，而且也就是这个插件才能帮助我们动态加载组件，我就是看哪个密密麻麻一片我就没细读）
>>>
>>>简单总结一下就是Vite，默认是不让动态的（就像我们那个似的）去加载项目中的文件，我们需要通过这个插件`dynamic-import-vars`来完成这个事。具体的内容就在上上述那个warning那个链接里就有这里我摘出来官方的那部分放在这里
~~~
function __variableDynamicImportRuntime__(path) {
switch (path) {
    case './locales/en-GB.js':
      return import('./locales/en-GB.js');
    case './locales/en-US.js':
      return import('./locales/en-US.js');
    case './locales/nl-NL.js':
      return import('./locales/nl-NL.js');
    default:
    return new Promise(function (resolve, reject) {
        queueMicrotask(reject.bind(null, new Error('Unknown variable
        dynamic import: ' + path)));
    });
  }
}

function importLocale(locale) {
  return __variableDynamicImportRuntime__(`./locales/${locale}.js`);
}
~~~

>>>
>>
##### **到此react-router才算告一段落**
>
>2022-10-31 15:55:01继续更新关于react-router 内容
>react-router-dom v6路由跳转好多种，这里用的是灵活性相对高一些日常做项目也常用到的一个关键方法
>
##### **navigate使用方法**
~~~
import { ......, useNavigate } from "react-router-dom";
const navigate = useNavigate();
...
navigate("/home");
~~~
---
##### 在跳转路由时传递参数
>
> **参考：** https://blog.csdn.net/m0_54861649/article/details/123258748
---
#### **引入vite-plugin-style-import处理导致有过大包的问题2022-10-31 10:26:27**
![vite-plugin-style-import_error](/md_files/vite-plugin-style-import_version_error1.png)
临时解决方案：https://github.com/vbenjs/vite-plugin-style-import/issues/77
>
>插件官方的github当年2月有人提过相关问题目前只能回退版本
![vite-plugin-style-import_error](/md_files/vite-plugin-style-import_version_error.png)
---
#### **公共状态管理**
>
>react不像vue有一个自己生态内的一个公共状态管理的工具（VueX），问了一些人也查了一下铺天盖地一堆，最后直接就去antd的官网看到提到了这个玩意而且他不只是只兼容react这个框架，就算没有框架也能部，凭我这40多个月的经验来看我觉得肯定是个好玩意就选redux了。
>
>我这第一步就是按照原有用过vuex的惯性至少得去了解一下redux怎么存取然后在拓展看一些其他七七八八的，这里我在B站上找到了一个视频讲redux还不错的视频。（考虑B站飘忽不定不知道啥时候视频就被删除的特性，我给他下载下来了）
<video width="100%" src="./md_files/【P1】【从零开始搭建项目】20分钟讲清楚Redux全流程架构（无框架版）.flv"></video>
>原视频链接：https://www.bilibili.com/video/BV12B4y1z7my
>
>看完就尝试去封装一下redux毕竟要在项目中各个页和组件中使用
>
>然后就遇到点小插曲我就照常安装包然后引入，哎就在这个时候出现了一点东西
>
>import { ~~createStore~~ } from 'redux'
>
>我的编辑器就给我整成这样了，鼠标指上去给我带到了redux的官网下的一个网址（其实IDE给我提示了一大堆东西我忘了保存了，最后是网址）
>
>网址：https://redux.js.org/tutorials/quick-start
>
>就是这个点进去一看这个redux toolkit是个啥啊
>*Redux Toolkit（也称为简称“ RTK”）是我们官方推荐的编写Redux逻辑的方法。@reduxjs/Toolkit软件包围绕核心Redux软件包包裹，并包含API方法和常见依赖项，我们认为这对于构建Redux应用至关重要。Redux工具包在我们建议的最佳实践中构建，简化大多数Redux任务，防止常见错误，并使编写Redux应用程序更容易。*
>
>*如果您今天正在编写任何Redux逻辑，则应使用Redux Toolkit来编写该代码！*
>
>*RTK包括有助于简化许多常见用例的实用程序，包括商店设置，创建还原和编写不可变的更新逻辑，甚至立即创建整个状态“切片”。*
>
>*无论您是全新的Redux用户设置第一个项目，还是想要简化现有应用程序的经验丰富的用户，Redux Toolkit都可以帮助您更好地改善Redux代码。*
>
>上述是官网译文
>
>然后就是按照官网给的步骤一步一步把它安装加入到自己的项目里这里项目是基于JavaScript做的所以放一下JS那部分配置的网址（https://redux.js.org/tutorials/quick-start）
##### **出现问题**
>加上之后，我想看看它在不同的组件中这个公共状态是不是同步过来了我就在我其中的一个页中只加了显示自定义的状态值寻思同步看一下，好家伙这又遇到问题了，但是按照代码现在只是临时修复过来了但是还不明所以然，这里把调整的过程记录一下

![react-domerror](/md_files/react_error1.png)
* 【第一次遇到错误版本】https://gitee.com/husky-bear/react-blog/commit/696d68b68736ab0474babebe7473aae4c9624dca
* 【尝试修了一下还没好】https://gitee.com/husky-bear/react-blog/commit/0362fb159463214fff640a7f68a959eacfb56ced
* 【按照正常代码试着修了一下意外发现正常了】https://gitee.com/husky-bear/react-blog/commit/3765c9893f3d12b234d5af176e0a3bf1f577e8c9

##### 问题原因
>人家控制台的内容里就告诉我们应该去官网里看了（而且，官网里写的很清楚）这里放一下中文的链接
>
>网址：https://zh-hans.reactjs.org/warnings/invalid-hook-call-warning.html