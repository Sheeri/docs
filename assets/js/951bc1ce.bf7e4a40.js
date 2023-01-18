"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9851],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=i,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5887:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:12},l="0.10.0 - 2022-6-24",o={unversionedId:"Releases/0_10_0",id:"Releases/0_10_0",title:"0.10.0 - 2022-6-24",description:"Added",source:"@site/docs/Releases/0_10_0.md",sourceDirName:"Releases",slug:"/Releases/0_10_0",permalink:"/docs/Releases/0_10_0",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/Releases/0_10_0.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"0.11.0 - 2022-7-7",permalink:"/docs/Releases/0_11_0"},next:{title:"0.9.0 - 2022-6-3",permalink:"/docs/Releases/0_9_0"}},p={},s=[{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Fixed",id:"fixed",level:3}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0100---2022-6-24"},"0.10.0 - 2022-6-24"),(0,i.kt)("h3",{id:"added"},"Added"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add static code anlalysis tool ",(0,i.kt)("a",{parentName:"li",href:"http://mypy-lang.org"},"mypy")," to run in CI for against all python modules (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/openlineage/openlineage/issues/802"},(0,i.kt)("inlineCode",{parentName:"a"},"#802")),") ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/howardyoo"},"@howardyoo")),(0,i.kt)("li",{parentName:"ul"},"Extend ",(0,i.kt)("inlineCode",{parentName:"li"},"SaveIntoDataSourceCommandVisitor")," to extract schema from ",(0,i.kt)("inlineCode",{parentName:"li"},"LocalRelaiton")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"LogicalRdd")," in spark integration (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/794"},(0,i.kt)("inlineCode",{parentName:"a"},"#794")),") ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski")),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"InMemoryRelationInputDatasetBuilder")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"InMemory")," datasets to Spark integration (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/818"},(0,i.kt)("inlineCode",{parentName:"a"},"#818")),") ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski")),(0,i.kt)("li",{parentName:"ul"},"Add copyright to source files ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/755"},(0,i.kt)("inlineCode",{parentName:"a"},"#755"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/merobi-hub"},"@merobi-hub")),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"SnowflakeOperatorAsync")," extractor support to Airflow integration ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/869"},(0,i.kt)("inlineCode",{parentName:"a"},"#869"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/merobi-hub"},"@merobi-hub")),(0,i.kt)("li",{parentName:"ul"},"Add PMD analysis to proxy project (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/889"},(0,i.kt)("inlineCode",{parentName:"a"},"#889")),") ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/howardyoo"},"@howardyoo"))),(0,i.kt)("h3",{id:"changed"},"Changed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Skip ",(0,i.kt)("inlineCode",{parentName:"li"},"FunctionRegistry.class")," serialization in Spark integration (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/828"},(0,i.kt)("inlineCode",{parentName:"a"},"#828")),") ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,i.kt)("li",{parentName:"ul"},"Install new ",(0,i.kt)("inlineCode",{parentName:"li"},"rust"),"-based SQL parser by default in Airflow integration (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/835"},(0,i.kt)("inlineCode",{parentName:"a"},"#835")),") ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,i.kt)("li",{parentName:"ul"},"Improve overall ",(0,i.kt)("inlineCode",{parentName:"li"},"pytest")," and integration tests for Airflow integration (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/851"},(0,i.kt)("inlineCode",{parentName:"a"},"#851")),",",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/858"},(0,i.kt)("inlineCode",{parentName:"a"},"#858")),") ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/denimalpaca"},"@denimalpaca")),(0,i.kt)("li",{parentName:"ul"},"Reduce OL event payload size by excluding local data and including output node in start events (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/881"},(0,i.kt)("inlineCode",{parentName:"a"},"#881")),") ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/collado-mike"},"@collado-mike")),(0,i.kt)("li",{parentName:"ul"},"Split spark integration into submodules (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/834"},(0,i.kt)("inlineCode",{parentName:"a"},"#834")),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/890"},(0,i.kt)("inlineCode",{parentName:"a"},"#890")),") ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tnazarew"},"@tnazarew")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"))),(0,i.kt)("h3",{id:"fixed"},"Fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Conditionally import ",(0,i.kt)("inlineCode",{parentName:"li"},"sqlalchemy")," lib for Great Expectations integration (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/826"},(0,i.kt)("inlineCode",{parentName:"a"},"#826")),") ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski")),(0,i.kt)("li",{parentName:"ul"},"Add check for missing ",(0,i.kt)("strong",{parentName:"li"},"class")," ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.spark.sql.catalyst.plans.logical.CreateV2Table")," in Spark integration (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/866"},(0,i.kt)("inlineCode",{parentName:"a"},"#866")),") ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski")),(0,i.kt)("li",{parentName:"ul"},"Fix static code analysis issues (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/867"},(0,i.kt)("inlineCode",{parentName:"a"},"#867")),",",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/874"},(0,i.kt)("inlineCode",{parentName:"a"},"#874")),") ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"))))}u.isMDXComponent=!0}}]);