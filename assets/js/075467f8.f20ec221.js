"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[880],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},812:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:24},i="0.3.0 - 2021-12-3",l={unversionedId:"Releases/0_3_0",id:"Releases/0_3_0",title:"0.3.0 - 2021-12-3",description:"Added",source:"@site/docs/Releases/0_3_0.md",sourceDirName:"Releases",slug:"/Releases/0_3_0",permalink:"/docs/Releases/0_3_0",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/Releases/0_3_0.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"tutorialSidebar",previous:{title:"0.3.1 - 2021-12-3",permalink:"/docs/Releases/0_3_1"},next:{title:"0.2.3 - 2021-10-7",permalink:"/docs/Releases/0_2_3"}},s={},c=[{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"030---2021-12-3"},"0.3.0 - 2021-12-3"),(0,a.kt)("h3",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Spark3 support ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OleksandrDvornik"},"@OleksandrDvornik")," / ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/collado-mike"},"@collado-mike")),(0,a.kt)("li",{parentName:"ul"},"LineageBackend for Airflow 2 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,a.kt)("li",{parentName:"ul"},"Adding custom spark version facet to spark integration ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OleksandrDvornik"},"@OleksandrDvornik")),(0,a.kt)("li",{parentName:"ul"},"Adding dbt version facet ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,a.kt)("li",{parentName:"ul"},"Added support for Redshift profile ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/AlessandroLollo"},"@AlessandroLollo"))),(0,a.kt)("h3",{id:"fixed"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sanitize JDBC URLs ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OleksandrDvornik"},"@OleksandrDvornik")),(0,a.kt)("li",{parentName:"ul"},"strip openlineage url in python client ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OleksandrDvornik"},"@OleksandrDvornik")),(0,a.kt)("li",{parentName:"ul"},"deploy spec if spec file changes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"))))}u.isMDXComponent=!0}}]);