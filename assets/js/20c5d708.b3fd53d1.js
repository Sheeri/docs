"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7350],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(f,i(i({ref:t},l),{},{components:a})):n.createElement(f,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2943:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},i="Object Model",s={unversionedId:"spec/object-model",id:"spec/object-model",title:"Object Model",description:"This page has not yet been written! You're welcome to contribute using the Edit link at the bottom.",source:"@site/docs/spec/object-model.md",sourceDirName:"spec",slug:"/spec/object-model",permalink:"/docs/spec/object-model",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/spec/object-model.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Naming Conventions",permalink:"/docs/spec/naming"}},p={},c=[{value:"Run State Update",id:"run-state-update",level:2},{value:"Run",id:"run",level:2},{value:"Job",id:"job",level:2},{value:"Dataset",id:"dataset",level:2}],l={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"object-model"},"Object Model"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This page has not yet been written! You're welcome to contribute using the Edit link at the bottom.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"OpenLineage Object Model",src:a(7369).Z,width:"587",height:"386"})),(0,r.kt)("h2",{id:"run-state-update"},"Run State Update"),(0,r.kt)("p",null,"Run states define the ",(0,r.kt)("a",{parentName:"p",href:"/docs/spec/run-cycle"},"lifecycle")," of the current run. Usually, the state starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"START")," and ends with ",(0,r.kt)("inlineCode",{parentName:"p"},"COMPLETE"),". Also, any state will also have timestamp of when this particular state happened."),(0,r.kt)("h2",{id:"run"},"Run"),(0,r.kt)("p",null,"Specifies ",(0,r.kt)("inlineCode",{parentName:"p"},"instance")," of a particular running ",(0,r.kt)("em",{parentName:"p"},"job"),". Every run will have a uniquely identifiable ",(0,r.kt)("inlineCode",{parentName:"p"},"run ID")," that is usually in ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Universally_unique_identifier"},"UUID")," format, that can later be tracked."),(0,r.kt)("p",null,"For more details, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"./facets/run-facets"},"Run Facets"),"."),(0,r.kt)("h2",{id:"job"},"Job"),(0,r.kt)("p",null,"An abstract ",(0,r.kt)("inlineCode",{parentName:"p"},"process")," that consumes, executes, and produces datasets (defined as its inputs and outputs). It is identified by a ",(0,r.kt)("inlineCode",{parentName:"p"},"unique name")," within a ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace"),". The ",(0,r.kt)("em",{parentName:"p"},"Job")," evolves over time and this change is captured during the job runs. "),(0,r.kt)("p",null,"For more details, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"./facets/job-facets"},"Job Facets"),"."),(0,r.kt)("h2",{id:"dataset"},"Dataset"),(0,r.kt)("p",null,"an abstract representation of data. It has a ",(0,r.kt)("inlineCode",{parentName:"p"},"unique name")," within the ",(0,r.kt)("inlineCode",{parentName:"p"},"datasource namespace")," derived from its physical location (for example, db.host.database.schema.table). Typically, a ",(0,r.kt)("em",{parentName:"p"},"Dataset")," changes when a job writing to it completes. Similarly to the ",(0,r.kt)("em",{parentName:"p"},"Job")," and ",(0,r.kt)("em",{parentName:"p"},"Run")," distinction, metadata that is more static from run to run is captured in a DatasetFacet (for example, the schema that does not change every run), what changes every ",(0,r.kt)("em",{parentName:"p"},"Run")," is captured as an ",(0,r.kt)("em",{parentName:"p"},"InputFacet")," or an ",(0,r.kt)("em",{parentName:"p"},"OutputFacet")," (for example, what subset of the data set was read or written, like a time partition)."),(0,r.kt)("p",null,"For more details, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"./facets/dataset-facets"},"Dataset Facets"),"."))}u.isMDXComponent=!0},7369:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/object-model-6533a9f8050f1d25bea01c1cb9a59bd1.svg"}}]);