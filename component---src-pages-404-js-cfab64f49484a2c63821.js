(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(273),c=a(278),i=a(280);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"Not Found"),r.a.createElement("p",null,"Try the ",r.a.createElement(l.a,{to:"/"},"index"),"."))}},261:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(33),o=a.n(i);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return i.withPrefix});a(271);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},270:function(e,t,a){"use strict";a(38);t.a=function(e){return e.replace("/sketch/","").replace(/\/$/,"").replace(/\//g,"-")}},271:function(e,t,a){var n;e.exports=(n=a(277))&&n.default||n},272:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(74),a(55),a(283),a(284);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(261),o=a(270),s=a(143),m=a.n(s),u={up:r.a.createElement("g",{fillRule:"evenodd",stroke:"currentColor"},r.a.createElement("path",{d:"m4.5 4.5h3v3h-3z"}),r.a.createElement("path",{d:"m4.5 10.5h3v3h-3z"}),r.a.createElement("path",{d:"m4.5 16.5h3v3h-3z"}),r.a.createElement("path",{d:"m10.5 4.5h3v3h-3z"}),r.a.createElement("path",{d:"m10.5 10.5h3v3h-3z"}),r.a.createElement("path",{d:"m10.5 16.5h3v3h-3z"}),r.a.createElement("path",{d:"m16.5 4.5h3v3h-3z"}),r.a.createElement("path",{d:"m16.5 10.5h3v3h-3z"}),r.a.createElement("path",{d:"m16.5 16.5h3v3h-3z"})),left:r.a.createElement("path",{d:"m10 4.94339811-9.09787618 14.55660189h18.19575238z",stroke:"currentColor",transform:"matrix(0 -1 1 0 -2 22)"}),right:r.a.createElement("path",{d:"m14 4.94339811-9.09787618 14.55660189h18.19575238z",stroke:"currentColor",transform:"matrix(0 -1 -1 0 26 26)"}),info:r.a.createElement("g",{fillRule:"evenodd"},r.a.createElement("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor"}),r.a.createElement("path",{d:"m9 16.6018182v-1.1454546h2.5454545v-5.3454545h-2.5454545v-1.14545455h3.8181818v6.49090905h2.5454546v1.1454546zm3.1818182-9.03636365c-.3224259 0-.5833324-.05090859-.7827273-.15272728s-.2990909-.29272587-.2990909-.57272727v-.08909091c0-.28848629.099696-.48575704.2990909-.59181818s.4603014-.15909091.7827273-.15909091c.3224258 0 .5833323.05302977.7827273.15909091.1993949.10606114.2990909.30333189.2990909.59181818v.08909091c0 .2800014-.1018172.47090858-.3054546.57272727s-.4624227.15272728-.7763636.15272728z",fill:"currentColor",fillRule:"nonzero"})),close:r.a.createElement("g",{fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"square"},r.a.createElement("path",{d:"m5.39473684 5 14.21052636 15"}),r.a.createElement("path",{d:"m19.6052632 5-14.6052632 14.6052632"}))},d=function(e){var t=e.to,a=e.href,n=e.label,l=e.icon,c="NavButton_"+Math.random().toString(36).substr(2,9),s=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-labelledby":c},t&&r.a.createElement("title",{id:c},n||Object(o.a)(t)),u[l])};return t||a?t?r.a.createElement(i.a,{to:t,className:m.a.navButton,title:n||Object(o.a)(t)},r.a.createElement(s,null)):r.a.createElement("a",{href:a,className:m.a.navButton,title:n||Object(o.a)(t)},r.a.createElement(s,null)):r.a.createElement("span",{className:m.a.disabled,"aria-hidden":"true"},r.a.createElement(s,null))};d.propTypes={icon:c.a.oneOf(Object.keys(u))};var h=function(e){var t=e.children,a=e.label;return r.a.createElement("nav",{className:m.a.bar,"aria-labelledby":a||null},t)};t.b=d},273:function(e,t,a){"use strict";a(282);var n=a(0),r=a.n(n),l=a(261),c=a(142),i=a.n(c);t.a=function(e){var t=e.to,a=e.href,n=e.children;return t?r.a.createElement(l.a,{className:i.a.link,to:t},n):r.a.createElement("a",{className:i.a.link,href:a},n)}},277:function(e,t,a){"use strict";a.r(t);a(37);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(57),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},278:function(e,t,a){"use strict";var n=a(279),r=a(0),l=a.n(r),c=a(4),i=a.n(c),o=a(276),s=a.n(o),m=a(261),u=a(273),d=a(272),h=a(144),p=a.n(h),f=function(e){var t=e.children,a=e.navigation,r=e.isSketch;return l.a.createElement(m.b,{query:"755544856",render:function(e){var n=[p.a.layout];return r&&n.push(p.a.isSketch),l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,l.a.createElement("link",{rel:"alternate",type:"application/rss+xml",title:"RSS Feed",href:Object(m.c)("feed.rss")})),l.a.createElement("div",{className:n.join(" "),id:"main"},l.a.createElement("header",{className:p.a.header},r?l.a.createElement(u.a,{className:p.a.title,to:"/"},e.site.siteMetadata.title):l.a.createElement("h1",{className:p.a.title},e.site.siteMetadata.title)),l.a.createElement("main",{className:p.a.main},t),l.a.createElement("div",{className:p.a.navigation},a),l.a.createElement("div",{className:p.a.footer},l.a.createElement(d.b,{href:"#about",label:"About this Site",icon:"info"}))),l.a.createElement("footer",{className:p.a.footer},l.a.createElement("div",{id:"about",className:p.a.about},l.a.createElement("div",{className:p.a.aboutContent},l.a.createElement("div",{className:p.a.aboutHeadline},l.a.createElement("h2",null,"About"),l.a.createElement(d.b,{href:"#main",label:"Return to Sketchbook",icon:"close"})),l.a.createElement("p",null,"This site presents semi-daily explorations of generative and procedural art. The code is all available on"," ",l.a.createElement(u.a,{href:"https://github.com/arlodesign/sketchbook/"},"GitHub"),"."),l.a.createElement("p",null,l.a.createElement(u.a,{href:"https://arlo.me/"},"Arlo Bryan Guthrie")," often uses this work to produce screenprints and other printed artwork. He might even start selling it some day. He’s on"," ",l.a.createElement(u.a,{href:"https://www.instagram.com/arlodesign/"},"Instagram"),".")))))},data:n})};f.propTypes={children:i.a.node.isRequired,isIndex:i.a.bool},t.a=f},279:function(e){e.exports={data:{site:{siteMetadata:{title:"sketchbook.arlo.me"}}}}},280:function(e,t,a){"use strict";var n=a(281),r=a(0),l=a.n(r),c=a(4),i=a.n(c),o=a(276),s=a.n(o),m=a(261);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,i=e.title,o=e.ogImage,u=e.twitterImage;return l.a.createElement(m.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{property:"og:image",content:o&&Object(m.c)(o)||Object(m.c)("/icons/icon-512x512.png")},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n},{name:"twitter:image",content:u&&Object(m.c)(u)||Object(m.c)("/icons/icon-512x512.png")}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired,ogImage:i.a.string,twitterImage:i.a.string},t.a=u;var d="1025518380"},281:function(e){e.exports={data:{site:{siteMetadata:{title:"sketchbook.arlo.me",description:"Experiments with generative art",author:"@arlodesign"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-cfab64f49484a2c63821.js.map