# **react-blog（已同步github）**

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

#### 安装配置react-cookie
>这个地方其实也没啥说的就照常安装然后封装一些常用的方法就完了

`npm install react-cookies -s  `
>然后就参照我这一次的提交查看都加了啥就完了
https://gitee.com/husky-bear/react-blog/commit/ecc29dc8c5f4c6a6c107d51a9c0e29fd56e79d52
##### 无关的小问题
>因为之前页面出现的效果跟当时写的和预想的效果一致也没什么异常就一直没留意浏览器控制台的报错信息这把新增了一个包进来就寻思打开看看然后发现了

`Each child in a list should have a unique "key" prop.`
>这个玩意，根据控制台给出的信息精确地定位到了下面这个地方

~~~
...
const TagJoinMiddle = (props)=>{
    const count = useSelector((state) => state.counter.value);
    const tagtemp = [];
    tagtemp.push(<p>{count}</p>);
    for (let i = 0; i < props.tags.length; i++) {
      tagtemp.push(
        <BTag key={props.tags[i].id} tag={props.tags[i]} />
      );
    }
    return <>{tagtemp}</>
}
...
~~~
>这里注意`tagtemp`这个变量在这段里他是一个承载react自己对于dom数据类型的一个数据集合，但是注意看第一个`push`的时候`<p>`标签我没加上`key`
>
>在vue里我们如果想要循环dom可以直接在标签上加上`v-for`的属性然后再对循环输出的虚拟dom元素加上`key`值
>
>但是在react下没有`v-for`这类的东西，但是我们可以直接按照上面那端代码的方式先去组要循环输出`dom`的数据对象然后再`render`函数最后输出即可，那么就好理解了原先我们输出的时候需要加什么，虽然换了方式但是也是循环输出所以该有的东西不能没有，这里就是对于第一个`<p>`标签少了`key`的属性这样就解决了。

>然后是第二个问题（已解决，但是没理解）
>加上cookie以后想跟已有的公共状态管理(redux)进行联动一下看看是不是好用的因为只有公共状态管理的话刷新页面状态会丢失（我可不想登陆完刷新在登录），就出现了以下问题。
~~~
Cannot update a component (`TagJoinMiddle`) while rendering a 
different component (`ContentList`). To locate the bad setState() 
call inside `ContentList`
~~~
>刚出现这个问题的时候我都麻了，我看着这个错误反馈我一顿查tag.jsx这个文件啊但是就是看不出什么问题，直到我意识到是因为加了初始化页面的时候判断状态管理里的值是不是初始值然后给cookie里的值重新付给状态，这个操作以后，才出现的问题。我就试着注释了一下，果然他没了。然后就按照这一个星期前看react官方文档和这一周多的经验尝试着修复了一下。他就好了。（但是我不理解。。。）

>出错前
![vite-plugin-style-import_error](/md_files/redux_error_befor.jpg)

>出错后
![vite-plugin-style-import_error](/md_files/redux_error_later.jpg)
#### Antd Dropdown组件使用
##### 出现问题
`React.Children.only expected to receive a single React element child.`
>问题如上，截图如下
![antd_dropdown_using_error](/md_files/antd_dropdwon_using_error.png)

>看到这个问题的第一件事肯定又扔到baidu里去查但是查完以后说是
>>组件内部最外层只能接受一个元素，而代码中有多个元素，所以报错。
>我也没放什么其他的东西啊就按照文档引入了一下dropdown的组件，没有什么头绪，结果又去回去看人家官方文档中对该组件的描述一上来就看到以下这段内容
![dropdown_doc_details](/md_files/dropdown_doc_details.png)
>也是碰巧我用的就是他说的这个新语法（会不会是版本的原因呢）于是去查了一下项目中antd的版本
>
>![project_antd_version](/md_files/project_antd_version.png)
>果真是 ≤ 4.24所以就按照文档中把dropdown那部分的语法修改了一下就好了