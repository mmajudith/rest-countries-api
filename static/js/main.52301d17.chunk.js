(this["webpackJsonprest-countries-api"]=this["webpackJsonprest-countries-api"]||[]).push([[0],{17:function(e,a,t){e.exports=t(41)},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(12),c=t.n(r),o=t(14),i=t(15),s=t(16),m=t(13),u=t.n(m),p=(t(39),{loading:!0,error:"",posts:{}});var E=function(){var e=Object(n.useState)(p),a=Object(s.a)(e,2),t=a[0],r=a[1];Object(n.useEffect)((function(){u.a.get("https://restcountries.eu/rest/v2/all").then((function(e){r({loading:!1,error:"",posts:e.data})})).catch((function(e){r({loading:!1,error:"Something went wrong",posts:{}})}))}),[t]);var c=Array.from(t.posts);return l.a.createElement("div",null,l.a.createElement("div",{className:"search"},l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Search for a country..."})),l.a.createElement("div",null,l.a.createElement("select",null,l.a.createElement("option",null,"Filter by Region"),l.a.createElement("option",null,"Africa"),l.a.createElement("option",null,"America"),l.a.createElement("option",null,"Europe"),l.a.createElement("option",null,"Oceania")))),l.a.createElement("div",{className:"countries-wrapper"},t.loading?l.a.createElement("h1",null,"Please Wait..."):c.map((function(e,a){return l.a.createElement("div",{key:a,className:"list-items"},l.a.createElement("img",{src:e.flag,alt:"country-flag",className:"img-flag"}),l.a.createElement("div",{className:"items"},l.a.createElement("p",{className:"countries-name"},e.name),l.a.createElement("p",null,l.a.createElement("span",null,"Populations:")," ",e.population),l.a.createElement("p",null,l.a.createElement("span",null,"Region: "),e.region),l.a.createElement("p",null,l.a.createElement("span",null,"Capital:")," ",e.capital)))})),t.error?t.error:null))};t(40);var d=function(){return l.a.createElement("div",{className:"App-light"},l.a.createElement("header",null,l.a.createElement("div",{className:"inner-header"},l.a.createElement("div",null,l.a.createElement("h2",null,"Where in the World?")),l.a.createElement("div",{className:"icons"},l.a.createElement(o.a,{className:"dark-light"}),l.a.createElement(i.a,{className:"dark-moon"}),l.a.createElement("span",null,"Dark mode")))),l.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.52301d17.chunk.js.map