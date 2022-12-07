"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7914],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var g=n.createContext({}),m=function(t){var e=n.useContext(g),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(g.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,g=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),f=m(a),k=r,s=f["".concat(g,".").concat(k)]||f[k]||d[k]||l;return a?n.createElement(s,i(i({ref:e},o),{},{components:a})):n.createElement(s,i({ref:e},o))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=f;var p={};for(var g in e)hasOwnProperty.call(e,g)&&(p[g]=e[g]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5114:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1},i="Integrating With OpenLineage",p={unversionedId:"integrations/about",id:"integrations/about",title:"Integrating With OpenLineage",description:"This page has not yet been written! You're welcome to contribute using the Edit link at the bottom.",source:"@site/docs/integrations/about.md",sourceDirName:"integrations",slug:"/integrations/about",permalink:"/docs/integrations/about",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/integrations/about.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/client/python"},next:{title:"Apache Spark",permalink:"/docs/integrations/spark/"}},g={},m=[{value:"Capability Matrix",id:"capability-matrix",level:2},{value:"Integration strategies",id:"integration-strategies",level:2},{value:"Integrating with pipelines",id:"integrating-with-pipelines",level:3},{value:"Integrating with data sources",id:"integrating-with-data-sources",level:3}],o={toc:m};function d(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integrating-with-openlineage"},"Integrating With OpenLineage"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This page has not yet been written! You're welcome to contribute using the Edit link at the bottom.")),(0,r.kt)("h2",{id:"capability-matrix"},"Capability Matrix"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This matrix is not yet complete.")),(0,r.kt)("p",null,"The matrix below shows the relationship between an input facet and various mechanisms OpenLineage uses to gather metadata. Not all mechanisms collect data to fill in all facets, and some facets are specific to one integration.\n\u2714\ufe0f: The mechanism does implement this facet.\n\u2716\ufe0f: The mechanism does not implement this facet.\nAn empty column means it is not yet documented if the mechanism implements this facet."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mechanism"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Integration"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Metadata Gathered"),(0,r.kt)("th",{parentName:"tr",align:"left"},"InputDatasetFacet"),(0,r.kt)("th",{parentName:"tr",align:"left"},"OutputDatasetFacet"),(0,r.kt)("th",{parentName:"tr",align:"left"},"SqlJobFacet"),(0,r.kt)("th",{parentName:"tr",align:"left"},"SchemaDatasetFacet"),(0,r.kt)("th",{parentName:"tr",align:"left"},"DataSourceDatasetFacet"),(0,r.kt)("th",{parentName:"tr",align:"left"},"DataQualityMetricsInputDatasetFacet"),(0,r.kt)("th",{parentName:"tr",align:"left"},"DataQualityAssertionsDatasetFacet"),(0,r.kt)("th",{parentName:"tr",align:"left"},"SourceCodeJobFacet"),(0,r.kt)("th",{parentName:"tr",align:"left"},"ExternalQueryRunFacet"),(0,r.kt)("th",{parentName:"tr",align:"left"},"DocumentationDatasetFacet"),(0,r.kt)("th",{parentName:"tr",align:"left"},"SourceCodeLocationJobFacet"),(0,r.kt)("th",{parentName:"tr",align:"left"},"DocumentationJobFacet"),(0,r.kt)("th",{parentName:"tr",align:"left"},"ParentRunFacet"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SnowflakeOperator*"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Airflow Extractor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Lineage",(0,r.kt)("br",null),"Job duration"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2716\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2716\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BigQueryOperator**"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Airflow Extractor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Lineage",(0,r.kt)("br",null),"Schema details",(0,r.kt)("br",null),"Job duration"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PostgresOperator*"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Airflow Extractor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Lineage",(0,r.kt)("br",null),"Job duration"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SqlCheckOperators"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Airflow Extractor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Lineage",(0,r.kt)("br",null),"Data quality assertions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2716\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"dbt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"dbt Project Files"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Lineage",(0,r.kt)("br",null),"Row count",(0,r.kt)("br",null),"Byte count."),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Great Expectations"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Action"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data quality assertions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Spark"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SparkListener"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Schema",(0,r.kt)("br",null),"Row count",(0,r.kt)("br",null)," Column lineage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Snowflake***"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Access History"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Lineage"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uses the Rest SQL parser\n",(0,r.kt)("strong",{parentName:"li"}," Uses the BigQuery API\n*")," Uses Snowflake query logs")),(0,r.kt)("h2",{id:"integration-strategies"},"Integration strategies"),(0,r.kt)("h3",{id:"integrating-with-pipelines"},"Integrating with pipelines"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Integrating with Pipelines",src:a(9321).Z,width:"7312",height:"2991"})),(0,r.kt)("h3",{id:"integrating-with-data-sources"},"Integrating with data sources"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Integrating with Data Sources",src:a(8133).Z,width:"7164",height:"2978"})))}d.isMDXComponent=!0},8133:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/integrate-datasources-54168c55271a368794af4609d1edfa8f.svg"},9321:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/integrate-pipelines-852c6bdf3a90e7326beac94df18c9a5b.svg"}}]);