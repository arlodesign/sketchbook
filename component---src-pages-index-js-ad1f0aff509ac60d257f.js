(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{373:function(e,t,a){"use strict";a.r(t);var r=a(13),n=a(0),i=a.n(n),s=a(414),c=a.n(s),o=a(406),l=a(403),d=a(408),u=a(382),f=(a(15),a(129),a(130),a(97),a(18),a(7)),p=a.n(f),g=a(381),h=a(395),m=a(386),b={name:"wu4t5j",styles:"display:block;list-style:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E\");"},v={name:"bp7ljz",styles:"padding:var(--spacing) calc(var(--spacing) / 2) 0;animation:pulse 1s 0.25s ease;"},y={name:"1bqsp8m",styles:"padding:var(--spacing) calc(var(--spacing) / 2) 0;"},O=function(e){function t(t){var a;return(a=e.call(this,t)||this).name=Object(m.a)(t.sketch.node.path),a.id="sketch-"+a.name,a.state={targeted:!1},a}p()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.location.hash&&window.location.hash.substr(1)===this.id&&this.setState({targeted:!0})},a.render=function(){var e=this.props,t=e.sketch,a=e.image,n=t.node.path,i=this.name,s=this.id;return Object(r.c)("li",{key:n,css:b},Object(r.c)(g.a,{to:n},Object(r.c)("figure",{id:s,css:this.state.targeted?v:y},a&&Object(r.c)(c.a,{fluid:a.node.childImageSharp.fluid,alt:i}),!a&&Object(r.c)("img",{src:"data:image/svg+xml,%3csvg height='840' viewBox='0 0 660 840' width='660' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd' stroke='white' stroke-width='4'%3e%3cpath d='m2 2h656v836h-656z'/%3e%3cpath d='m0 0 660 840'/%3e%3cpath d='m660 0-660 840'/%3e%3c/g%3e%3c/svg%3e",style:{width:"100%"}}),Object(r.c)("figcaption",null,Object(r.c)(h.a,null,Object(r.c)("time",{dateTime:i},i))))))},t}(i.a.Component),j={name:"19qoo47",styles:"--grid-columns:3;display:grid;grid-template-columns:repeat(var(--grid-columns),1fr);grid-template-rows:repeat(12 / var(--grid-columns),1fr);margin:0;padding:0 calc(var(--spacing) / 2);list-style:none;@media only screen and (min-width:35em){--grid-columns:4;}"},w=function(e){var t=e.sketches,a=e.images;return Object(r.c)("nav",null,Object(r.c)("ul",{css:j},t.map(function(e){return Object(r.c)(O,{key:e.node.path,sketch:e,image:a.find(function(t){return t.node.relativePath.includes(e.node.path.replace("/sketch/","").replace(/\/$/,""))})})})))};a.d(t,"query",function(){return k});var S={name:"bh8261",styles:"grid-column-start:a;grid-column-end:d;text-align:left;"},k=(t.default=function(e){var t=e.data,a=e.pageContext,n=t.sketches.edges,i=t.images.edges;a.older,a.newer,a.current,a.total;return Object(r.c)(o.a,null,Object(r.c)(l.a,{title:"Index",ogImage:i[0].node.childImageSharp.og.src,twitterImage:i[0].node.childImageSharp.twitter.src}),Object(r.c)(d.a,null,Object(r.c)("h1",{css:S},Object(r.c)(u.a,{href:"#main"},t.site.siteMetadata.title))),Object(r.c)("main",null,Object(r.c)(h.a,null,Object(r.c)("h2",null,"Index")),Object(r.c)(w,{sketches:n,images:i})))},"2932148941")},381:function(e,t,a){"use strict";a.d(t,"b",function(){return f});var r=a(13),n=a(0),i=a.n(n),s=a(14),c=a.n(s),o=a(65),l=a.n(o);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return o.withPrefix});a(393);var d=i.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,s=e.render,c=a?a.data:t[n]&&t[n].data;return Object(r.c)(i.a.Fragment,null,c&&s(c),!c&&Object(r.c)("div",null,"Loading (StaticQuery)"))}var f=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return Object(r.c)(d.Consumer,null,function(e){return Object(r.c)(u,{data:t,query:a,render:n||i,staticQueryData:e})})};f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},382:function(e,t,a){"use strict";var r=a(13),n=(a(0),a(381)),i={name:"6h26h2",styles:"display:inline-block;position:relative;color:var(--white);text-decoration:none;background-image:linear-gradient( to bottom,transparent 1.25rem,var(--white) calc(1.25rem + 1px),transparent calc(1.25rem + 1.5px) );"};t.a=function(e){var t=e.to,a=e.href,s=e.children;return t?Object(r.c)(n.a,{css:i,to:t},s):Object(r.c)("a",{css:i,href:a},s)}},386:function(e,t,a){"use strict";a(15);t.a=function(e){return e.replace("/sketch/","").replace(/\/$/,"").replace(/\//g,"-")}},393:function(e,t,a){var r;e.exports=(r=a(402))&&r.default||r},394:function(e,t,a){"use strict";a(26),a(20),a(50),a(49),a(8);var r=a(13),n=(a(0),a(14)),i=a.n(n),s=a(381),c=a(395),o=a(386),l={name:"7mpe3h",styles:"display:inline-block;font-size:var(--font-large);color:var(--white);text-decoration:none;line-height:0;"},d={up:Object(r.c)("g",{fillRule:"evenodd",fill:"transparent",stroke:"currentColor"},Object(r.c)("path",{d:"m4.5 4.5h3v3h-3z"}),Object(r.c)("path",{d:"m4.5 10.5h3v3h-3z"}),Object(r.c)("path",{d:"m4.5 16.5h3v3h-3z"}),Object(r.c)("path",{d:"m10.5 4.5h3v3h-3z"}),Object(r.c)("path",{d:"m10.5 10.5h3v3h-3z"}),Object(r.c)("path",{d:"m10.5 16.5h3v3h-3z"}),Object(r.c)("path",{d:"m16.5 4.5h3v3h-3z"}),Object(r.c)("path",{d:"m16.5 10.5h3v3h-3z"}),Object(r.c)("path",{d:"m16.5 16.5h3v3h-3z"})),left:Object(r.c)("path",{d:"m10 4.94339811-9.09787618 14.55660189h18.19575238z",stroke:"currentColor",fill:"transparent",transform:"matrix(0 -1 1 0 -2 22)"}),right:Object(r.c)("path",{d:"m14 4.94339811-9.09787618 14.55660189h18.19575238z",stroke:"currentColor",fill:"transparent",transform:"matrix(0 -1 -1 0 26 26)"}),info:Object(r.c)("g",{fillRule:"evenodd"},Object(r.c)("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",fill:"transparent"}),Object(r.c)("path",{d:"m9 16.6018182v-1.1454546h2.5454545v-5.3454545h-2.5454545v-1.14545455h3.8181818v6.49090905h2.5454546v1.1454546zm3.1818182-9.03636365c-.3224259 0-.5833324-.05090859-.7827273-.15272728s-.2990909-.29272587-.2990909-.57272727v-.08909091c0-.28848629.099696-.48575704.2990909-.59181818s.4603014-.15909091.7827273-.15909091c.3224258 0 .5833323.05302977.7827273.15909091.1993949.10606114.2990909.30333189.2990909.59181818v.08909091c0 .2800014-.1018172.47090858-.3054546.57272727s-.4624227.15272728-.7763636.15272728z",fill:"currentColor",fillRule:"nonzero"})),close:Object(r.c)("g",{fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"square"},Object(r.c)("path",{d:"m5.39473684 5 14.21052636 15"}),Object(r.c)("path",{d:"m19.6052632 5-14.6052632 14.6052632"}))},u=function(e){var t=e.to,a=e.href,n=e.label,i=e.icon,u="Icon_"+Math.random().toString(36).substr(2,9),f=function(){return Object(r.c)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true"},d[i])};return t||a?t?Object(r.c)(s.a,{"aria-labelledby":u,css:l,to:t,title:n||Object(o.a)(t)},Object(r.c)(f,null),Object(r.c)(c.a,{id:u},n||Object(o.a)(t))):Object(r.c)("a",{"aria-labelledby":u,css:l,href:a,title:n||Object(o.a)(t)},Object(r.c)(f,null),Object(r.c)(c.a,{id:u},n||Object(o.a)(t))):Object(r.c)("span",{css:Object(r.b)(l,";opacity:0.2;"),"aria-hidden":"true"},Object(r.c)(f,null))};u.propTypes={icon:i.a.oneOf(Object.keys(d))},t.a=u},395:function(e,t,a){"use strict";var r=a(127),n=a.n(r),i=a(392),s=a(13),c=(a(0),Object(i.a)("span",{target:"e1a4wz970"})({name:"vo4gi0",styles:"position:absolute;left:-10vw;top:auto;width:1px;height:1px;overflow:hidden;"}));t.a=function(e){var t=e.children,a=n()(e,["children"]);return Object(s.c)(c,a,t)}},402:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),i=a(14),s=a.n(i),c=a(98),o=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=o},403:function(e,t,a){"use strict";var r=a(13),n=a(404),i=(a(0),a(14)),s=a.n(i),c=a(401),o=a.n(c),l=a(381);function d(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,c=e.title,d=e.ogImage,f=e.twitterImage;return Object(r.c)(l.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description,u=e.site.siteMetadata,p=u.siteUrl,g=u.author,h=function(e){return""+p+Object(l.c)(e)};return Object(r.c)(o.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{property:"og:image",content:d&&h(d)||h("/icons/icon-512x512.png")},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:g},{name:"twitter:title",content:c},{name:"twitter:description",content:n},{name:"twitter:image",content:f&&h(f)||h("/icons/icon-512x512.png")}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired,ogImage:s.a.string,twitterImage:s.a.string},t.a=d;var u="2229664651"},404:function(e){e.exports={data:{site:{siteMetadata:{title:"sketchbook.arlo.me",description:"Experiments with generative art",author:"@arlodesign",siteUrl:"https://sketchbook.arlo.me"}}}}},406:function(e,t,a){"use strict";var r=a(13),n=a(0),i=a.n(n),s=a(14),c=a.n(s),o=a(401),l=a.n(o),d=a(381),u=a(392),f=a(394),p=a(382),g=Object(u.a)("p",{target:"e1rb38gh0"})({name:"6aautx",styles:"padding-bottom:var(--spacing);"}),h=Object(u.a)("footer",{target:"e1rb38gh1"})({name:"1f3psex",styles:"position:absolute;top:0;right:0;bottom:0;left:0;margin:0 auto;padding:var(--spacing);max-width:660px;opacity:0;pointer-events:none;background:var(--black);text-align:left;z-index:-1;&:target{opacity:1;pointer-events:all;z-index:1;}"}),m={name:"15hwa9",styles:"display:flex;justify-content:space-between;padding-bottom:var(--spacing);"},b=function(){return Object(r.c)(h,{id:"about"},Object(r.c)("div",{css:m},Object(r.c)("h2",null,"About"),Object(r.c)(f.a,{href:"#main",label:"Return to Sketchbook",icon:"close"})),Object(r.c)(g,null,"This site presents semi-daily explorations of generative and procedural art. The code is all available on"," ",Object(r.c)(p.a,{href:"https://github.com/arlodesign/sketchbook/"},"GitHub"),"."),Object(r.c)(g,null,Object(r.c)(p.a,{href:"https://arlo.me/"},"Arlo Bryan Guthrie")," often uses this work to produce screenprints and other printed artwork. He might even start selling it some day. He’s on"," ",Object(r.c)(p.a,{href:"https://www.instagram.com/arlodesign/"},"Instagram"),"."))},v={name:"6aautx",styles:"padding-bottom:var(--spacing);"},y=function(e){var t=e.children;e.navigation,e.isSketch;return Object(r.c)(i.a.Fragment,null,Object(r.c)(l.a,null,Object(r.c)("link",{rel:"alternate",type:"application/rss+xml",title:"RSS Feed",href:Object(d.c)("feed.rss")})),Object(r.c)("div",{id:"main",css:v},t),Object(r.c)(b,null))};y.propTypes={children:c.a.node.isRequired,isIndex:c.a.bool};t.a=y},407:function(e,t,a){var r=a(5),n=a(9),i=a(40),s=/"/g,c=function(e,t,a,r){var n=String(i(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),c+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},408:function(e,t,a){"use strict";var r=a(392),n=a(13),i=(a(0),a(394)),s=Object(r.a)("div",{target:"e17pfxyh0"})({name:"16e7qgd",styles:"position:sticky;top:0;z-index:1;"}),c=Object(r.a)("header",{target:"e17pfxyh1"})({name:"13898a0",styles:'display:grid;grid-template-columns:1fr 2rem 1fr 2rem 1fr;grid-template-areas:"a b c d e";grid-column-gap:var(--spacing);padding:var(--spacing);'}),o={name:"pebfus",styles:"grid-area:e;justify-self:end;"};t.a=function(e){var t=e.children;return Object(n.c)(s,null,Object(n.c)(c,null,t,Object(n.c)("span",{css:o},Object(n.c)(i.a,{href:"#about",label:"About this Site",icon:"info"}))))}},414:function(e,t,a){"use strict";a(26),a(20),a(8),a(48),a(95),a(423);var r=a(19);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),s=r(a(76)),c=r(a(127)),o=r(a(73)),l=r(a(0)),d=r(a(14)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,b=m&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),l.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function O(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function j(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)}).join("")+"<img "+l+s+c+a+r+t+i+n+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=l.default.createElement(I,(0,o.default)({src:t},n));return a.length>1?l.default.createElement("picture",null,r(a),i):i},I=l.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:n},p,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});I.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var E=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!h&&b&&!t.critical&&!a.seenBefore;var r=t.critical||m&&(h||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,c=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,O=e.itemProp,S=e.loading,k=e.draggable,E=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,o.default)({opacity:E?1:0,transition:L?"opacity "+b+"ms":"none"},c),q="boolean"==typeof m?"lightgray":m,C={transitionDelay:b+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},L&&C,c,f),V={title:t,alt:this.state.isVisible?"":a,style:T,className:p};if(g){var M=g,P=M[0];return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(v,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),q&&l.default.createElement(v,{title:t,style:(0,o.default)({backgroundColor:q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&C)}),P.base64&&l.default.createElement(z,{src:P.base64,spreadProps:V,imageVariants:M,generateSources:w}),P.tracedSVG&&l.default.createElement(z,{src:P.tracedSVG,spreadProps:V,imageVariants:M,generateSources:j}),this.state.isVisible&&l.default.createElement("picture",null,y(M),l.default.createElement(I,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:S,draggable:k})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:S},P,{imageVariants:M}))}}))}if(h){var N=h,F=N[0],G=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:F.width,height:F.height},i);return"inherit"===i.display&&delete G.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(F.srcSet)},q&&l.default.createElement(v,{title:t,style:(0,o.default)({backgroundColor:q,width:F.width,opacity:this.state.imgLoaded?0:1,height:F.height},L&&C)}),F.base64&&l.default.createElement(z,{src:F.base64,spreadProps:V,imageVariants:N,generateSources:w}),F.tracedSVG&&l.default.createElement(z,{src:F.tracedSVG,spreadProps:V,imageVariants:N,generateSources:j}),this.state.isVisible&&l.default.createElement("picture",null,y(N),l.default.createElement(I,{alt:a,title:t,width:F.width,height:F.height,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:S,draggable:k})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:S},F,{imageVariants:N}))}}))}return null},t}(l.default.Component);E.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),R=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});E.propTypes={resolutions:L,sizes:R,fixed:d.default.oneOfType([L,d.default.arrayOf(L)]),fluid:d.default.oneOfType([R,d.default.arrayOf(R)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var q=E;t.default=q},423:function(e,t,a){"use strict";a(407)("fixed",function(e){return function(){return e(this,"tt","","")}})}}]);
//# sourceMappingURL=component---src-pages-index-js-ad1f0aff509ac60d257f.js.map