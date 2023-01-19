"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={title:"0.6.0",sidebar_position:19},i="0.6.0 - 2022-3-4",l={unversionedId:"Releases/0_6_0",id:"Releases/0_6_0",title:"0.6.0",description:"Added",source:"@site/docs/Releases/0_6_0.md",sourceDirName:"Releases",slug:"/Releases/0_6_0",permalink:"/docs/Releases/0_6_0",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/Releases/0_6_0.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"0.6.0",sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"0.6.1",permalink:"/docs/Releases/0_6_1"},next:{title:"0.5.2",permalink:"/docs/Releases/0_5_2"}},s={},c=[{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"060---2022-3-4"},"0.6.0 - 2022-3-4"),(0,n.kt)("h3",{id:"added"},"Added"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Extract source code of PythonOperator code similar to SQL facet ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,n.kt)("li",{parentName:"ul"},"Add DatasetLifecycleStateDatasetFacet to spec ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski")),(0,n.kt)("li",{parentName:"ul"},"Airflow: extract source code from BashOperator ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,n.kt)("li",{parentName:"ul"},"Add generic facet to collect environmental properties (EnvironmentFacet) ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/harishsune"},"@harishsune")),(0,n.kt)("li",{parentName:"ul"},"OpenLineage sensor for OpenLineage-Dagster integration ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dalinkim"},"@dalinkim")),(0,n.kt)("li",{parentName:"ul"},"Java-client: make generator generate enums as well ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski")),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("inlineCode",{parentName:"li"},"UnknownOperatorAttributeRunFacet")," to Airflow integration to record operators that don't produce lineage ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/collado-mike"},"@collado-mike"))),(0,n.kt)("h3",{id:"fixed"},"Fixed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Airflow: increase import timeout in tests, fix exit from integration ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,n.kt)("li",{parentName:"ul"},"Reduce logging level for import errors to info ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rossturk"},"@rossturk")),(0,n.kt)("li",{parentName:"ul"},"Remove AWS secret keys and extraneous Snowflake parameters from connection uri ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/collado-mike"},"@collado-mike")),(0,n.kt)("li",{parentName:"ul"},"Convert to LifecycleStateChangeDatasetFacet ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"))))}u.isMDXComponent=!0}}]);