"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={title:"Example Lineage Events",sidebar_position:5},a=void 0,s={unversionedId:"examples",id:"examples",title:"Example Lineage Events",description:"This page needs your contribution! Please contribute new examples using the edit link at the bottom.",source:"@site/docs/examples.md",sourceDirName:".",slug:"/examples",permalink:"/docs/examples",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/examples.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Example Lineage Events",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"SQL parser",permalink:"/docs/integrations/sql"},next:{title:"Frequently Asked Questions",permalink:"/docs/faq"}},p={},l=[{value:"START event with single input",id:"start-event-with-single-input",level:3},{value:"COMPLETE event with single output",id:"complete-event-with-single-output",level:3}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This page needs your contribution! Please contribute new examples using the edit link at the bottom.")),(0,o.kt)("h3",{id:"start-event-with-single-input"},"START event with single input"),(0,o.kt)("p",null,"This is a START event with a single PostgreSQL input dataset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "eventType": "START",\n  "eventTime": "2020-12-28T19:52:00.001+10:00",\n  "run": {\n    "runId": "d46e465b-d358-4d32-83d4-df660ff614dd"\n  },\n  "job": {\n    "namespace": "workshop",\n    "name": "process_taxes"\n  },\n  "inputs": [{\n    "namespace": "postgres://workshop-db:None",\n    "name": "workshop.public.taxes"\n  }],  \n  "producer": "https://github.com/OpenLineage/OpenLineage/blob/v1-0-0/client"\n}\n')),(0,o.kt)("h3",{id:"complete-event-with-single-output"},"COMPLETE event with single output"),(0,o.kt)("p",null,"This is a COMPLETE event with a single PostgreSQL output dataset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "eventType": "COMPLETE",\n  "eventTime": "2020-12-28T20:52:00.001+10:00",\n  "run": {\n    "runId": "d46e465b-d358-4d32-83d4-df660ff614dd"\n  },\n  "job": {\n    "namespace": "workshop",\n    "name": "process_taxes"\n  },\n  "outputs": [{\n    "namespace": "postgres://workshop-db:None",\n    "name": "workshop.public.unpaid_taxes"\n  }],     \n  "producer": "https://github.com/OpenLineage/OpenLineage/blob/v1-0-0/client"\n}\n')))}u.isMDXComponent=!0}}]);