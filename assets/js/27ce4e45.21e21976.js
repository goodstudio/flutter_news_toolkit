"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:4,description:"Learn how to work with blocks to customize your news content."},i="Working with blocks",l={unversionedId:"server_development/blocks",id:"server_development/blocks",title:"Working with blocks",description:"Learn how to work with blocks to customize your news content.",source:"@site/docs/server_development/blocks.md",sourceDirName:"server_development",slug:"/server_development/blocks",permalink:"/news_toolkit/server_development/blocks",draft:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/server_development/blocks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Learn how to work with blocks to customize your news content."},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/news_toolkit/server_development/testing"},next:{title:"Creating a newsletter",permalink:"/news_toolkit/server_development/newsletter"}},s={},c=[{value:"What are blocks?",id:"what-are-blocks",level:2},{value:"Using blocks",id:"using-blocks",level:2},{value:"Customizing blocks",id:"customizing-blocks",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"working-with-blocks"},"Working with blocks"),(0,r.kt)("h2",{id:"what-are-blocks"},"What are blocks?"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: ",(0,r.kt)("inlineCode",{parentName:"em"},"blocks")," are distinct from ",(0,r.kt)("a",{parentName:"em",href:"https://bloclibrary.dev/#/"},(0,r.kt)("inlineCode",{parentName:"a"},"blocs")),", which are also used in this application.")),(0,r.kt)("p",null,"Blocks are the data format used by the Flutter News Template to ensure that a variety of news content can be displayed in a consistent manner. The client application expects to receive data from the server in a block-based format. For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Article")," model class contains a list of blocks."),(0,r.kt)("p",null,"These blocks contain the data that the app requires to render a corresponding widget."),(0,r.kt)("p",null,"As described in ",(0,r.kt)("a",{parentName:"p",href:"/server_development/connecting_your_data_source#implementing-your-data-source"},"Implementing an API data source"),", your backend is responsible for transforming data from your CMS into the block-based format expected by the app. The app then displays the data according to its own internal rendering rules."),(0,r.kt)("p",null,"The following diagram provides an overview of how blocks are used in the example template application:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61138206/192628148-e1af73e4-4b81-4dff-8926-c411294b4b86.png",alt:"block-diagram"})),(0,r.kt)("p",null,"In this example, data from the CMS is transformed by the Dart Frog server into a ",(0,r.kt)("inlineCode",{parentName:"p"},"PostLargeBlock")," to respond to a request from the app. The ",(0,r.kt)("inlineCode",{parentName:"p"},"CategoryFeed")," widget receives the data from the app's ",(0,r.kt)("inlineCode",{parentName:"p"},"FeedBloc")," and gives the ",(0,r.kt)("inlineCode",{parentName:"p"},"PostLargeBlock")," to a newly-constructed ",(0,r.kt)("inlineCode",{parentName:"p"},"PostLarge")," widget to dictate what data the widget should render on-screen."),(0,r.kt)("h2",{id:"using-blocks"},"Using blocks"),(0,r.kt)("p",null,"You can view the relationship between blocks and their corresponding widgets in ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/article/widgets/article_content_item.dart")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/article/widgets/category_feed_item.dart")," files."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ArticleContentItem")," specifies how a block is rendered inside an article view, while ",(0,r.kt)("inlineCode",{parentName:"p"},"CategoryFeedItem")," specifies how a block is rendered inside the feed view. Both classes also provide callbacks to widgets that exhibit behavior on an interaction, such as a press or tap by the user. Look through those files to review the available blocks that can feed into your app out of the box."),(0,r.kt)("p",null,"Note that if your CMS returns content in an HTML format, you might want to segment your articles and provide it to the app inside an ",(0,r.kt)("inlineCode",{parentName:"p"},"HtmlBlock"),", which renders the content inside an ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/flutter_html"},(0,r.kt)("inlineCode",{parentName:"a"},"Html"))," widget. Styling for HTML content is covered in the ",(0,r.kt)("a",{parentName:"p",href:"/flutter_development/theming#typography"},"Updating the app typography")," section of this document."),(0,r.kt)("p",null,"Also note that many block files have an additional ",(0,r.kt)("inlineCode",{parentName:"p"},".g")," file in the same folder which shares its name. For example, there is both ",(0,r.kt)("inlineCode",{parentName:"p"},"banner_ad_block.dart")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"banner_ad_block.g.dart"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},".g")," file contains generated code to support functionality such as JSON serialization. When you change any file with associated generated code, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/development/data-and-backend/json#running-the-code-generation-utility"},"make sure code generation runs and is kept up-to-date with your source code content"),"."),(0,r.kt)("h2",{id:"customizing-blocks"},"Customizing blocks"),(0,r.kt)("p",null,"Blocks are the basic organizational components of your app's news content. Re-arranging the order of blocks allows you to control how and where your content is displayed."),(0,r.kt)("p",null,"Block organization typically occurs within your API and is then served to your app."),(0,r.kt)("p",null,"Reference the ",(0,r.kt)("inlineCode",{parentName:"p"},"article_content_item.dart")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"category_feed_item.dart")," files to understand the relationship between blocks and their corresponding widgets."),(0,r.kt)("p",null,"Placing ads is covered in the ",(0,r.kt)("a",{parentName:"p",href:"/flutter_development/ads#ads-placement"},"Updating ads placement")," section, but you might want to control the placement of other widgets such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"NewsletterBlock"),", which allows a user to subscribe to a mailing list. One way to arrange a block is to edit your news data source implementation's ",(0,r.kt)("inlineCode",{parentName:"p"},"getFeed")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"getArticle")," methods to insert a ",(0,r.kt)("inlineCode",{parentName:"p"},"NewsletterBlock")," at the 15th block in the returned list, for example. Use this same approach to introduce blocks (such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"DividerHorizontalBlock"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TextLeadParagraphBlock"),", and the ",(0,r.kt)("inlineCode",{parentName:"p"},"SpacerBlock"),") into the feed of blocks that your app receives, all of which allows you to further customize the look and content of your app."))}u.isMDXComponent=!0}}]);