(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{239:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(248),s=a(274),l=a.n(s),o=a(267),c=a(269),d=(a(38),a(90),a(91),a(92),a(271),a(286),a(7)),u=a.n(d),f=a(147),m=a.n(f),h=function(e){var t=e.children;return n.a.createElement("span",{className:m.a.sr},t)},p=a(259),g=a(148),b=a.n(g),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).name=Object(p.a)(t.sketch.node.path),a.id="sketch-"+a.name,a.figureClassName=b.a.figure,a.state={targeted:!1},a}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.location.hash&&window.location.hash.substr(1)===this.id&&(this.figureClassName=[b.a.figure,b.a.target].join(" "),this.setState({targeted:!0}))},a.render=function(){var e=this.props,t=e.sketch,a=e.image,r=t.node.path,s=this.name,o=this.id;return n.a.createElement("li",{className:b.a.item,key:r},n.a.createElement(i.a,{className:b.a.link,to:r},n.a.createElement("figure",{className:this.figureClassName,id:o},n.a.createElement(l.a,{fluid:a.node.childImageSharp.fluid,alt:s}),n.a.createElement("figcaption",null,n.a.createElement(h,null,n.a.createElement("time",{dateTime:s},s))))))},t}(n.a.Component),v=function(e){var t=e.sketches,a=e.images;return n.a.createElement("nav",{"aria-labelledby":"sketches"},n.a.createElement("ul",{className:b.a.grid},t.map(function(e){return n.a.createElement(E,{key:e.node.path,sketch:e,image:a.find(function(t){return t.node.relativePath.includes(e.node.path.replace("/sketch/","").replace(/\/$/,""))})})})))},y=a(261);a.d(t,"query",function(){return w});t.default=function(e){var t=e.data,a=e.pageContext,r=t.sketches.edges,i=t.images.edges,s=a.older,l=a.newer,d=a.current,u=a.total,f=n.a.createElement(y.a,{label:"indexes"},n.a.createElement(y.b,{to:s!==d&&"/index/"+s,label:"Older Sketches, "+s+" of "+u,icon:"left"}),n.a.createElement(y.b,{to:l!==d&&(1===l?"/":"/index/"+l),label:"Newer Sketches, "+l+" of "+u,icon:"right"}),n.a.createElement(y.b,{to:1!==d&&"/",label:"Latest Sketches",icon:"up"}));return n.a.createElement(o.a,{isIndex:!0,navigation:f},n.a.createElement(c.a,{title:"sketchbook.arlo.me",ogImage:i[0].node.childImageSharp.og.src,twitterImage:i[0].node.childImageSharp.twitter.src}),n.a.createElement(h,null,n.a.createElement("h2",null,"Index"," ",n.a.createElement("small",null,d," of ",u))),n.a.createElement(v,{sketches:r,images:i}))};var w="1156284827"},248:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),n=a.n(r),i=a(4),s=a.n(i),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return l.withPrefix});a(260);var c=n.a.createContext({}),d=function(e){return n.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},259:function(e,t,a){"use strict";a(38);t.a=function(e){return e.replace("/sketch/","").replace(/\/$/,"").replace(/\//g,"-")}},260:function(e,t,a){var r;e.exports=(r=a(266))&&r.default||r},261:function(e,t,a){"use strict";a.d(t,"a",function(){return m});a(74),a(55),a(272),a(273);var r=a(0),n=a.n(r),i=a(4),s=a.n(i),l=a(248),o=a(259),c=a(144),d=a.n(c),u={up:n.a.createElement("g",{fillRule:"evenodd",stroke:"currentColor"},n.a.createElement("path",{d:"m4.5 4.5h3v3h-3z"}),n.a.createElement("path",{d:"m4.5 10.5h3v3h-3z"}),n.a.createElement("path",{d:"m4.5 16.5h3v3h-3z"}),n.a.createElement("path",{d:"m10.5 4.5h3v3h-3z"}),n.a.createElement("path",{d:"m10.5 10.5h3v3h-3z"}),n.a.createElement("path",{d:"m10.5 16.5h3v3h-3z"}),n.a.createElement("path",{d:"m16.5 4.5h3v3h-3z"}),n.a.createElement("path",{d:"m16.5 10.5h3v3h-3z"}),n.a.createElement("path",{d:"m16.5 16.5h3v3h-3z"})),left:n.a.createElement("path",{d:"m10 4.94339811-9.09787618 14.55660189h18.19575238z",stroke:"currentColor",transform:"matrix(0 -1 1 0 -2 22)"}),right:n.a.createElement("path",{d:"m14 4.94339811-9.09787618 14.55660189h18.19575238z",stroke:"currentColor",transform:"matrix(0 -1 -1 0 26 26)"}),info:n.a.createElement("g",{fillRule:"evenodd"},n.a.createElement("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor"}),n.a.createElement("path",{d:"m9 16.6018182v-1.1454546h2.5454545v-5.3454545h-2.5454545v-1.14545455h3.8181818v6.49090905h2.5454546v1.1454546zm3.1818182-9.03636365c-.3224259 0-.5833324-.05090859-.7827273-.15272728s-.2990909-.29272587-.2990909-.57272727v-.08909091c0-.28848629.099696-.48575704.2990909-.59181818s.4603014-.15909091.7827273-.15909091c.3224258 0 .5833323.05302977.7827273.15909091.1993949.10606114.2990909.30333189.2990909.59181818v.08909091c0 .2800014-.1018172.47090858-.3054546.57272727s-.4624227.15272728-.7763636.15272728z",fill:"currentColor",fillRule:"nonzero"})),close:n.a.createElement("g",{fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"square"},n.a.createElement("path",{d:"m5.39473684 5 14.21052636 15"}),n.a.createElement("path",{d:"m19.6052632 5-14.6052632 14.6052632"}))},f=function(e){var t=e.to,a=e.href,r=e.label,i=e.icon,s="NavButton_"+Math.random().toString(36).substr(2,9),c=function(){return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-labelledby":s},t&&n.a.createElement("title",{id:s},r||Object(o.a)(t)),u[i])};return t||a?t?n.a.createElement(l.a,{to:t,className:d.a.navButton,title:r||Object(o.a)(t)},n.a.createElement(c,null)):n.a.createElement("a",{href:a,className:d.a.navButton,title:r||Object(o.a)(t)},n.a.createElement(c,null)):n.a.createElement("span",{className:d.a.disabled,"aria-hidden":"true"},n.a.createElement(c,null))};f.propTypes={icon:s.a.oneOf(Object.keys(u))};var m=function(e){var t=e.children,a=e.label;return n.a.createElement("nav",{className:d.a.bar,"aria-labelledby":a||null},t)};t.b=f},262:function(e,t,a){"use strict";a(271);var r=a(0),n=a.n(r),i=a(248),s=a(143),l=a.n(s);t.b=function(e){var t=e.to,a=e.href,r=e.children;return t?n.a.createElement(i.a,{className:l.a.link,to:t},r):n.a.createElement("a",{className:l.a.link,href:a},r)}},266:function(e,t,a){"use strict";a.r(t);a(37);var r=a(0),n=a.n(r),i=a(4),s=a.n(i),l=a(57),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},267:function(e,t,a){"use strict";var r=a(268),n=a(0),i=a.n(n),s=a(4),l=a.n(s),o=a(265),c=a.n(o),d=a(248),u=a(262),f=a(261),m=a(145),h=a.n(m),p=function(e){var t=e.children,a=e.navigation,n=e.isSketch;return i.a.createElement(d.b,{query:"755544856",render:function(e){var r=[h.a.layout];return n&&r.push(h.a.isSketch),i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("link",{rel:"alternate",type:"application/rss+xml",title:"RSS Feed",href:Object(d.c)("feed.rss")})),i.a.createElement("div",{className:r.join(" "),id:"main"},i.a.createElement("header",{className:h.a.header},n?i.a.createElement(u.b,{className:h.a.title,to:"/"},e.site.siteMetadata.title):i.a.createElement("h1",{className:h.a.title},e.site.siteMetadata.title)),i.a.createElement("main",{className:h.a.main},t),i.a.createElement("div",{className:h.a.navigation},a),i.a.createElement("div",{className:h.a.footer},i.a.createElement(f.b,{href:"#about",label:"About this Site",icon:"info"}))),i.a.createElement("footer",{className:h.a.footer},i.a.createElement("div",{id:"about",className:h.a.about},i.a.createElement("div",{className:h.a.aboutContent},i.a.createElement("div",{className:h.a.aboutHeadline},i.a.createElement("h2",null,"About"),i.a.createElement(f.b,{href:"#main",label:"Return to Sketchbook",icon:"close"})),i.a.createElement("p",null,"This site presents semi-daily explorations of generative and procedural art. The code is all available on"," ",i.a.createElement(u.b,{href:"https://github.com/arlodesign/sketchbook/"},"GitHub"),"."),i.a.createElement("p",null,i.a.createElement(u.b,{href:"https://arlo.me/"},"Arlo Bryan Guthrie")," often uses this work to produce screenprints and other printed artwork. He might even start selling it some day. He’s on"," ",i.a.createElement(u.b,{href:"https://www.instagram.com/arlodesign/"},"Instagram"),".")))))},data:r})};p.propTypes={children:l.a.node.isRequired,isIndex:l.a.bool},t.a=p},268:function(e){e.exports={data:{site:{siteMetadata:{title:"sketchbook.arlo.me"}}}}},269:function(e,t,a){"use strict";var r=a(270),n=a(0),i=a.n(n),s=a(4),l=a.n(s),o=a(265),c=a.n(o),d=a(248);function u(e){var t=e.description,a=e.lang,n=e.meta,s=e.keywords,l=e.title,o=e.ogImage,u=e.twitterImage;return i.a.createElement(d.b,{query:f,render:function(e){var r=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:l},{property:"og:description",content:r},{property:"og:type",content:"website"},{property:"og:image",content:o&&Object(d.c)(o)||Object(d.c)("/icons/icon-512x512.png")},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:r},{name:"twitter:image",content:u&&Object(d.c)(u)||Object(d.c)("/icons/icon-512x512.png")}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired,ogImage:l.a.string,twitterImage:l.a.string},t.a=u;var f="1025518380"},270:function(e){e.exports={data:{site:{siteMetadata:{title:"sketchbook.arlo.me",description:"Experiments with generative art",author:"@arlodesign"}}}}},274:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),s=r(a(40)),l=r(a(96)),o=r(a(97)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var p=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+l+o+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,l.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,l=m(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:o,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&p(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,h=e.fluid,p=e.fixed,E=e.backgroundColor,v=e.Tag,y=e.itemProp,w="boolean"==typeof E?"lightgray":E,S=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),k=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),N={title:t,alt:this.state.isVisible?"":a,style:S,className:m};if(h){var I=h;return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),I.base64&&c.default.createElement(b,(0,o.default)({src:I.base64},N)),I.tracedSVG&&c.default.createElement(b,(0,o.default)({src:I.tracedSVG},N)),w&&c.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,I.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),c.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),c.default.createElement(b,{alt:a,title:t,src:I.src,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},I))}}))}if(p){var R=p,L=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},i);return"inherit"===i.display&&delete L.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&c.default.createElement(b,(0,o.default)({src:R.base64},N)),R.tracedSVG&&c.default.createElement(b,(0,o.default)({src:R.tracedSVG},N)),w&&c.default.createElement(v,{title:t,style:{backgroundColor:w,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),c.default.createElement(b,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(c.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),y=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});E.propTypes={resolutions:v,sizes:y,fixed:v,fluid:y,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var w=E;t.default=w},286:function(e,t,a){var r=a(26).f,n=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in n||a(19)&&r(n,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-templates-index-js-1158239d15ed64291e4f.js.map