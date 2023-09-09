"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[112],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6233:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:5,description:"Learn how to configure your own newsletter."},s="Creating a newsletter",i={unversionedId:"server_development/newsletter",id:"server_development/newsletter",title:"Creating a newsletter",description:"Learn how to configure your own newsletter.",source:"@site/docs/server_development/newsletter.md",sourceDirName:"server_development",slug:"/server_development/newsletter",permalink:"/news_toolkit/server_development/newsletter",draft:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/server_development/newsletter.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Learn how to configure your own newsletter."},sidebar:"tutorialSidebar",previous:{title:"Working with blocks",permalink:"/news_toolkit/server_development/blocks"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-a-newsletter"},"Creating a newsletter"),(0,o.kt)("p",null,"The current ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flutter/news_toolkit/blob/main/flutter_news_example/api/routes/api/v1/newsletter/subscription.dart"},"implementation")," of a newsletter email subscription always returns true and the response is handled in the app as a success state. Be aware that the current implementation of this feature doesn't store the subscriber state for a user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'dart:io';\n\nimport 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context) {\n  if (context.request.method != HttpMethod.post) {\n    return Response(statusCode: HttpStatus.methodNotAllowed);\n  }\n\n  return Response(statusCode: HttpStatus.created);\n}\n")),(0,o.kt)("p",null,"To fully use the newsletter subscription feature, please add your API handling logic or an already existing email service, such as ",(0,o.kt)("a",{parentName:"p",href:"https://mailchimp.com/"},"mailchimp.")))}d.isMDXComponent=!0}}]);