(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[683],{5702:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/install/updating",function(){return t(2314)}])},7845:function(n,e,t){"use strict";var a,i=t(5893);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.Z=(o(a={github:"https://github.com/SnailyCAD",docsRepositoryBase:"https://github.com/SnailyCAD/docs",branch:"main",nextLinks:!0,prevLinks:!0,search:!0,darkMode:!0,titleSuffix:" | SnailyCADv4 Docs",logo:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:"text-gray-100 font-semibold",children:"SnailyCAD Docs"})}),head:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,i.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,i.jsx)("meta",{name:"og:title",content:"SnailyCADv4 docs"})]})},"search",!0),o(a,"prevLinks",!0),o(a,"nextLinks",!0),o(a,"footer",!1),a)},2314:function(n,e,t){"use strict";t.r(e);t(7294);var a=t(2763),i=t(7829),o=t.n(i),r=t(3805),l=t(7845);function u(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=function(n){return(0,r.withSSG)(o()({filename:"updating.mdx",route:"/install/updating",meta:{},pageMap:[{name:"community",children:[{name:"index",route:"/community"},{name:"meta.json",meta:{index:"Community"}}],route:"/community"},{name:"index",route:"/"},{name:"install",children:[{name:"index",route:"/install"},{name:"meta.json",meta:{index:"Installation",updating:"Updating SnailyCAD",nginx:"NGINX"}},{name:"nginx",route:"/install/nginx"},{name:"updating",route:"/install/updating"}],route:"/install"},{name:"meta.json",meta:{index:"Introduction"}},{name:"other",children:[{name:"Translating",route:"/other/Translating"},{name:"features",route:"/other/features"}],route:"/other"}]},l.Z))(n)};function c(n){var e=n.components,t=u(n,["components"]);return(0,a.kt)(s,Object.assign({components:e},t),(0,a.kt)("h1",null,"Updating SnailyCADv4"),(0,a.kt)("p",null,"This guide explains how to update SnailyCADv4 to a new version."),(0,a.kt)("h2",null,"Getting started"),(0,a.kt)("p",null,"First, shut down the CAD by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose down")," in the directory where you installed the CAD in a command prompt/terminal and wait for the services to stop."),(0,a.kt)("h2",null,"Updating local code"),(0,a.kt)("p",null,"First we must update our local code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-bash",parentName:"pre"},"git pull origin main\n")),(0,a.kt)("h2",null,"Re-building the client"),(0,a.kt)("p",null,"Once the previous command finishes, we must re-build the client's UI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-bash",parentName:"pre"},"yarn workspace @snailycad/client build\n")),(0,a.kt)("h2",null,"Starting"),(0,a.kt)("p",null,"To bring the CAD back up run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{className:"language-bash",parentName:"pre"},"docker-compose -f production.docker-compose.yml up -d\n")))}c.isMDXComponent=!0,e.default=c}},function(n){n.O(0,[386,774,888,179],(function(){return e=5702,n(n.s=e);var e}));var e=n.O();_N_E=e}]);