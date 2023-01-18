"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7090],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9210:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:10},l="0.12.0 - 2022-8-1",p={unversionedId:"Releases/0_12_0",id:"Releases/0_12_0",title:"0.12.0 - 2022-8-1",description:"Added",source:"@site/docs/Releases/0_12_0.md",sourceDirName:"Releases",slug:"/Releases/0_12_0",permalink:"/docs/Releases/0_12_0",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/Releases/0_12_0.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"0.13.0 - 2022-8-22",permalink:"/docs/Releases/0_13_0"},next:{title:"0.11.0 - 2022-7-7",permalink:"/docs/Releases/0_11_0"}},o={},s=[{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Fixed",id:"fixed",level:3}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0120---2022-8-1"},"0.12.0 - 2022-8-1"),(0,r.kt)("h3",{id:"added"},"Added"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add Spark 3.3.0 support ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/950"},(0,r.kt)("inlineCode",{parentName:"a"},"#950"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski")),(0,r.kt)("li",{parentName:"ul"},"Add Apache Flink integration ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/951"},(0,r.kt)("inlineCode",{parentName:"a"},"#951"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,r.kt)("li",{parentName:"ul"},"Add ability to extend column level lineage mechanism ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/922"},(0,r.kt)("inlineCode",{parentName:"a"},"#922"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski")),(0,r.kt)("li",{parentName:"ul"},"Add ErrorMessageRunFacet ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/897"},(0,r.kt)("inlineCode",{parentName:"a"},"#897"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,r.kt)("li",{parentName:"ul"},"Add SQLCheckExtractors ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/717"},(0,r.kt)("inlineCode",{parentName:"a"},"#717"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/denimalpaca"},"@denimalpaca")),(0,r.kt)("li",{parentName:"ul"},"Add RedshiftSQLExtractor & RedshiftDataExtractor ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/930"},(0,r.kt)("inlineCode",{parentName:"a"},"#930"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran")),(0,r.kt)("li",{parentName:"ul"},"Add dataset builder for AlterTableCommand ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/927"},(0,r.kt)("inlineCode",{parentName:"a"},"#927"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tnazarew"},"@tnazarew"))),(0,r.kt)("h3",{id:"changed"},"Changed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Limit Delta events ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/905"},(0,r.kt)("inlineCode",{parentName:"a"},"#905"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski")),(0,r.kt)("li",{parentName:"ul"},"Airflow integration: allow lineage metadata to flow through inlets and outlets ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/914"},(0,r.kt)("inlineCode",{parentName:"a"},"#914"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fenil25"},"@fenil25"))),(0,r.kt)("h3",{id:"fixed"},"Fixed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Limit size of serialized plan ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/917"},(0,r.kt)("inlineCode",{parentName:"a"},"#917"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski")),(0,r.kt)("li",{parentName:"ul"},"Fix noclassdef error ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/942"},(0,r.kt)("inlineCode",{parentName:"a"},"#942"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"))))}c.isMDXComponent=!0}}]);