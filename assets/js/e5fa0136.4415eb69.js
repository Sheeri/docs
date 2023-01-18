"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4320],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(h,o(o({ref:t},s),{},{components:a})):n.createElement(h,o({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2140:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:4},o="0.16.1 - 2022-11-3",l={unversionedId:"Releases/0_16_1",id:"Releases/0_16_1",title:"0.16.1 - 2022-11-3",description:"Added",source:"@site/docs/Releases/0_16_1.md",sourceDirName:"Releases",slug:"/Releases/0_16_1",permalink:"/docs/Releases/0_16_1",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/Releases/0_16_1.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"0.17.0 - 2022-11-16",permalink:"/docs/Releases/0_17_0"},next:{title:"0.15.1 - 2022-10-5",permalink:"/docs/Releases/0_15_1"}},p={},m=[{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Fixed",id:"fixed",level:3},{value:"Removed",id:"removed",level:3}],s={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0161---2022-11-3"},"0.16.1 - 2022-11-3"),(0,r.kt)("h3",{id:"added"},"Added"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Airflow: add ",(0,r.kt)("inlineCode",{parentName:"li"},"dag_run")," information to Airflow version run facet ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1133"},(0,r.kt)("inlineCode",{parentName:"a"},"#1133"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fm100"},"@fm100"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds the Airflow DAG run ID to the ",(0,r.kt)("inlineCode",{parentName:"em"},"taskInfo")," facet, making this additional information available to the integration.")),(0,r.kt)("li",{parentName:"ul"},"Airflow: add ",(0,r.kt)("inlineCode",{parentName:"li"},"LoggingMixin")," to extractors ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1149"},(0,r.kt)("inlineCode",{parentName:"a"},"#1149"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds a ",(0,r.kt)("inlineCode",{parentName:"em"},"LoggingMixin")," class to the custom extractor to make the output consistent with general Airflow and OpenLineage logging settings.")),(0,r.kt)("li",{parentName:"ul"},"Airflow: add default extractor ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1162"},(0,r.kt)("inlineCode",{parentName:"a"},"#1162"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds a ",(0,r.kt)("inlineCode",{parentName:"em"},"DefaultExtractor")," to support the default implementation of OpenLineage for external operators without the need for custom extractors.")),(0,r.kt)("li",{parentName:"ul"},"Airflow: add ",(0,r.kt)("inlineCode",{parentName:"li"},"on_complete")," argument in ",(0,r.kt)("inlineCode",{parentName:"li"},"DefaultExtractor")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1188"},(0,r.kt)("inlineCode",{parentName:"a"},"#1188"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds support for running another method on ",(0,r.kt)("inlineCode",{parentName:"em"},"extract_on_complete"),".")),(0,r.kt)("li",{parentName:"ul"},"SQL: reorganize the library into multiple packages ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1167"},(0,r.kt)("inlineCode",{parentName:"a"},"#1167"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/StarostaGit"},"@StarostaGit")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Splits the SQL library into a Rust implementation and foreign language bindings, easing the process of adding language interfaces. Also contains CI fix."))),(0,r.kt)("h3",{id:"changed"},"Changed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Airflow: move ",(0,r.kt)("inlineCode",{parentName:"li"},"get_connection_uri")," as extractor's classmethod ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1169"},(0,r.kt)("inlineCode",{parentName:"a"},"#1169"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"em"},"get_connection_uri")," method allowed for too many params, resulting in unnecessarily long URIs. This changes the logic to whitelisting per extractor.")),(0,r.kt)("li",{parentName:"ul"},"Airflow: change ",(0,r.kt)("inlineCode",{parentName:"li"},"get_openlineage_facets_on_start/complete")," behavior ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1201"},(0,r.kt)("inlineCode",{parentName:"a"},"#1201"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Splits up the method for greater legibility and easier maintenance."))),(0,r.kt)("h3",{id:"fixed"},"Fixed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Airflow: always send SQL in ",(0,r.kt)("inlineCode",{parentName:"li"},"SqlJobFacet")," as a string ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1143"},(0,r.kt)("inlineCode",{parentName:"a"},"#1143"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Changes the data type of ",(0,r.kt)("inlineCode",{parentName:"em"},"query")," from array to string to an fix error in the ",(0,r.kt)("inlineCode",{parentName:"em"},"RedshiftSQLOperator"),".")," "),(0,r.kt)("li",{parentName:"ul"},"Airflow: include ",(0,r.kt)("inlineCode",{parentName:"li"},"__extra__")," case when filtering URI query params ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1144"},(0,r.kt)("inlineCode",{parentName:"a"},"#1144"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Includes the ",(0,r.kt)("inlineCode",{parentName:"em"},"conn.EXTRA_KEY")," in the ",(0,r.kt)("inlineCode",{parentName:"em"},"get_connection_uri")," method to avoid exposing secrets in URIs via the ",(0,r.kt)("inlineCode",{parentName:"em"},"__extra__")," key."),"  "),(0,r.kt)("li",{parentName:"ul"},"Airflow: enforce column casing in ",(0,r.kt)("inlineCode",{parentName:"li"},"SQLCheckExtractor"),"s ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1159"},(0,r.kt)("inlineCode",{parentName:"a"},"#1159"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/denimalpaca"},"@denimalpaca"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Uses the parent extractor's ",(0,r.kt)("inlineCode",{parentName:"em"},"_is_uppercase_names")," property to determine if the column should be upper cased in the ",(0,r.kt)("inlineCode",{parentName:"em"},"SQLColumnCheckExtractor"),"'s ",(0,r.kt)("inlineCode",{parentName:"em"},"_get_input_facets()")," method.")),(0,r.kt)("li",{parentName:"ul"},"Spark: prevent exception when no schema provided ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1180"},(0,r.kt)("inlineCode",{parentName:"a"},"#1180"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Prevents evalution of column lineage when the ",(0,r.kt)("inlineCode",{parentName:"em"},"schemFacet")," is ",(0,r.kt)("inlineCode",{parentName:"em"},"null"),".")),(0,r.kt)("li",{parentName:"ul"},"Great Expectations: add V3 API compatibility ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1194"},(0,r.kt)("inlineCode",{parentName:"a"},"#1194"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/denimalpaca"},"@denimalpaca"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Fixes the Pandas datasource to make it V3 API-compatible."))),(0,r.kt)("h3",{id:"removed"},"Removed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Airflow: remove support for Airflow 1.10 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1128"},(0,r.kt)("inlineCode",{parentName:"a"},"#1128"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Removes the code structures and tests enabling support for Airflow 1.10."))))}c.isMDXComponent=!0}}]);