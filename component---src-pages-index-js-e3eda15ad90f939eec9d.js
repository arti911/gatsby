(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/9aa":function(t,e,n){var r=n("NykK"),o=n("ExA7");t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},"8+s/":function(t,e,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,o=n("q1tI"),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=t(s.map((function(t){return t.props}))),f.canUseDOM?e(u):n&&(u=n(u))}var f=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),l()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},AP2z:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=n("nmnc"),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(u){}var o=i.call(t);return r&&(e?t[c]=n:delete t[c]),o}},EH9Q:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter","description":"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.","author":"@gatsbyjs"}}}}')},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},GoyQ:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},KfNM:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},Kz5y:function(t,e,n){var r=n("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},NykK:function(t,e,n){var r=n("nmnc"),o=n("AP2z"),a=n("KfNM"),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},QIyF:function(t,e,n){var r=n("Kz5y");t.exports=function(){return r.Date.now()}},RXBc:function(t,e,n){"use strict";n.r(e),n.d(e,"articlesHasura",(function(){return W}));var r=n("q1tI"),o=n.n(r),a=n("Bl7J"),i=n("EH9Q"),c=n("qhky");function u(t){var e=t.description,n=t.lang,r=t.meta,a=t.title,u=i.data.site,s=e||u.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:a,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:a},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:a},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""};var s=u,l=(n("TpwP"),n("bx4M")),f=n("BMrR"),p=n("kPKH"),d=n("2/Rp"),y=n("Wbzz"),m=function(t){var e=t.articles,n=void 0===e?[]:e,a=Object(r.useState)(8),i=a[0],c=a[1],u=l.a.Meta;return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{gutter:[16,24]},n.map((function(t){return o.a.createElement(p.a,{className:"gutter-row",xs:24,md:12,lg:8,xl:6,key:t.id},o.a.createElement(l.a,{hoverable:!0,cover:o.a.createElement("img",{alt:"example",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"})},o.a.createElement(y.a,{to:"/"+t.slug},t.title),o.a.createElement(u,{description:t.teaser})))}))),o.a.createElement(f.a,null,o.a.createElement(p.a,{className:"gutter-row",xs:24,style:{textAlign:"center"}},n.length>i?o.a.createElement(d.a,{onClick:function(){return c(i+4)},type:"primary"},"Загрузить ещё"):null)))},h=n("ttZb"),b=n("lTCR"),v=n.n(b),g=n("LvDl"),T=(n("xfY5"),n("V+eJ"),n("a1Th"),n("h7Nl"),n("Btvt"),n("I5cv"),n("/SS/"),n("hHhE"),n("HAE/"),n("91GP"),n("rE2o"),n("ioFf"),n("TSYQ")),w=n.n(T),O=n("BGR+"),E=n("sEfC"),S=n.n(E),j=n("H84U"),A=n("CWQg"),C=n("0n0R");function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(){return(P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function N(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function I(t,e){return(I=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=R(t);if(e){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return L(this,n)}}function L(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var _=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},B=(Object(A.a)("small","default","large"),null);var H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&I(t,e)}(i,t);var e,n,o,a=M(i);function i(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=a.call(this,t)).debouncifyUpdateSpinning=function(t){var n=(t||e.props).delay;n&&(e.cancelExistingSpin(),e.updateSpinning=S()(e.originalUpdateSpinning,n))},e.updateSpinning=function(){var t=e.props.spinning;e.state.spinning!==t&&e.setState({spinning:t})},e.renderSpin=function(t){var n,o=t.getPrefixCls,a=t.direction,i=e.props,c=i.prefixCls,u=i.className,s=i.size,l=i.tip,f=i.wrapperClassName,p=i.style,d=_(i,["prefixCls","className","size","tip","wrapperClassName","style"]),y=e.state.spinning,m=o("spin",c),h=w()(m,(N(n={},"".concat(m,"-sm"),"small"===s),N(n,"".concat(m,"-lg"),"large"===s),N(n,"".concat(m,"-spinning"),y),N(n,"".concat(m,"-show-text"),!!l),N(n,"".concat(m,"-rtl"),"rtl"===a),n),u),b=Object(O.a)(d,["spinning","delay","indicator"]),v=r.createElement("div",P({},b,{style:p,className:h}),function(t,e){var n=e.indicator,o="".concat(t,"-dot");return null===n?null:Object(C.b)(n)?Object(C.a)(n,{className:w()(n.props.className,o)}):Object(C.b)(B)?Object(C.a)(B,{className:w()(B.props.className,o)}):r.createElement("span",{className:w()(o,"".concat(t,"-dot-spin"))},r.createElement("i",{className:"".concat(t,"-dot-item")}),r.createElement("i",{className:"".concat(t,"-dot-item")}),r.createElement("i",{className:"".concat(t,"-dot-item")}),r.createElement("i",{className:"".concat(t,"-dot-item")}))}(m,e.props),l?r.createElement("div",{className:"".concat(m,"-text")},l):null);if(e.isNestedPattern()){var g=w()("".concat(m,"-container"),N({},"".concat(m,"-blur"),y));return r.createElement("div",P({},b,{className:w()("".concat(m,"-nested-loading"),f)}),y&&r.createElement("div",{key:"loading"},v),r.createElement("div",{className:g,key:"container"},e.props.children))}return v};var n=t.spinning,o=function(t,e){return!!t&&!!e&&!isNaN(Number(e))}(n,t.delay);return e.state={spinning:n&&!o},e.originalUpdateSpinning=e.updateSpinning,e.debouncifyUpdateSpinning(t),e}return e=i,o=[{key:"setDefaultIndicator",value:function(t){B=t}}],(n=[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var t=this.updateSpinning;t&&t.cancel&&t.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||!this.props.children)}},{key:"render",value:function(){return r.createElement(j.a,null,this.renderSpin)}}])&&k(e.prototype,n),o&&k(e,o),i}(r.Component);H.defaultProps={spinning:!0,size:"default",wrapperClassName:""};var D=H;function q(){var t=K(["\n  {\n    articles_aggregate {\n      aggregate {\n        max {\n          updated_at\n        }\n      }\n    }\n  }\n"]);return q=function(){return t},t}function F(){var t=K(["\n  query {\n    articles(order_by: { updated_at: desc }) {\n      id\n      title\n      teaser\n      slug\n      updated_at\n    }\n  }\n"]);return F=function(){return t},t}function K(t,e){return e||(e=t.slice(0)),t.raw=e,t}var U=v()(F()),z=v()(q()),W="3929042008";e.default=function(t){var e=Object(r.useState)(t.data.news.articles),n=e[0],i=e[1],c=Object(h.c)(z,{pollInterval:0,fetchPolicy:"network-only",onCompleted:function(t){return console.log("onCompleted",t)}}),u=c.loading,l=(c.error,c.data),f=Object(h.a)(U,{fetchPolicy:"network-only"}),p=f[0],d=f[1],y=d.loading,b=(d.error,d.data);return Object(r.useEffect)((function(){l&&+new Date(Object(g.get)(t,"data.news.articles_aggregate.aggregate.max.updated_at","Mon Jun 08 2020 23:32:40 GMT+0300"))!=+new Date(Object(g.get)(l,"articles_aggregate.aggregate.max.updated_at","Mon Jun 08 2020 23:32:40 GMT+0300"))&&p()}),[u]),Object(r.useEffect)((function(){b&&i(b.articles)}),[y]),o.a.createElement(a.a,null,o.a.createElement(s,{title:"Home"}),y||u?o.a.createElement(D,{spinning:!0}):o.a.createElement(m,{articles:n}))}},TpwP:function(t,e,n){},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},ZhWT:function(t,e,n){n("SRfc"),n("RW0V"),n("a1Th"),n("h7Nl"),n("OEbY"),n("Oyvg"),n("LK8F"),n("T39b"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var r="undefined"!=typeof Element,o="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=n.length)return!1;for(u=c;0!=u--;)if(!t(e[u],n[u]))return!1;return!0}if(o&&e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!n.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!t(u.value[1],n.get(u.value[0])))return!1;return!0}if(a&&e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!n.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(n)){if((c=e.length)!=n.length)return!1;for(u=c;0!=u--;)if(e[u]!==n[u])return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(n,s[u]))return!1;if(r&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!t(e[s[u]],n[s[u]]))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},nmnc:function(t,e,n){var r=n("Kz5y").Symbol;t.exports=r},qhky:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return mt}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,o,a,i,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("ZhWT"),p=n.n(f),d=n("q1tI"),y=n.n(d),m=n("MgzW"),h=n.n(m),b="bodyAttributes",v="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(t){return T[t]})),"charset"),O="cssText",E="href",S="http-equiv",j="innerHTML",A="itemprop",C="name",x="property",P="rel",N="src",k="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",L="defer",R="encodeSpecialCharacters",_="onChangeClientState",B="titleTemplate",H=Object.keys(I).reduce((function(t,e){return t[I[e]]=e,t}),{}),D=[T.NOSCRIPT,T.SCRIPT,T.STYLE],q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},K=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},z=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},W=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},Y=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(t){var e=Z(t,T.TITLE),n=Z(t,B);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=Z(t,M);return e||r||void 0},Q=function(t){return Z(t,_)||function(){}},J=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return U({},t,e)}),{})},V=function(t,e){return e.filter((function(t){return void 0!==t[T.BASE]})).map((function(t){return t[T.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==t.indexOf(a)&&n[a])return e.concat(n)}return e}),[])},$=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+q(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,a=Object.keys(t),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===e.indexOf(u)||n===P&&"canonical"===t[n].toLowerCase()||u===P&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(c)||c!==j&&c!==O&&c!==A||(n=c)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=h()({},r[c],o[c]);r[c]=u}return t}),[]).reverse()},Z=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},X=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){X(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:t.requestAnimationFrame||X,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,at=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;ut(T.BODY,r),ut(T.HTML,o),ct(f,p);var d={baseTag:st(T.BASE,n),linkTags:st(T.LINK,a),metaTags:st(T.META,i),noscriptTags:st(T.NOSCRIPT,c),scriptTags:st(T.SCRIPT,s),styleTags:st(T.STYLE,l)},y={},m={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(y[t]=n),r.length&&(m[t]=d[t].oldTags)})),e&&e(),u(t,y,m)},it=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=it(t)),ut(T.TITLE,e)},ut=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(e),c=0;c<i.length;c++){var u=i[c],s=e[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=a.indexOf(u);-1!==l&&a.splice(l,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},st=function(t,e){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(t+"[data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===j)n.innerHTML=e.innerHTML;else if(r===O)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(t,e){return i=e,n.isEqualNode(t)}))?o.splice(i,1):a.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),a.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:a}},lt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[I[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case T.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})["data-react-helmet"]=!0,o=ft(n,r),[y.a.createElement(T.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=lt(n),a=it(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+Y(a,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+Y(a,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case b:case v:return{toComponent:function(){return ft(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(e).forEach((function(t){var n=I[t]||t;if(n===j||n===O){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),y.a.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===j||t===O)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+Y(r[e],n)+'"';return t?t+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===D.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,c=t.noscriptTags,u=t.scriptTags,s=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:pt(T.BASE,e,r),bodyAttributes:pt(b,n,r),htmlAttributes:pt(v,o,r),link:pt(T.LINK,a,r),meta:pt(T.META,i,r),noscript:pt(T.NOSCRIPT,c,r),script:pt(T.SCRIPT,u,r),style:pt(T.STYLE,s,r),title:pt(T.TITLE,{title:f,titleAttributes:p},r)}},yt=l()((function(t){return{baseTag:V([E,k],t),bodyAttributes:J(b,t),defer:Z(t,L),encode:Z(t,R),htmlAttributes:J(v,t),linkTags:$(T.LINK,[P,E],t),metaTags:$(T.META,[C,w,S,x,A],t),noscriptTags:$(T.NOSCRIPT,[j],t),onChangeClientState:Q(t),scriptTags:$(T.SCRIPT,[N,j],t),styleTags:$(T.STYLE,[O],t),title:G(t),titleAttributes:J(g,t)}}),(function(t){ot&&nt(ot),t.defer?ot=et((function(){at(t,(function(){ot=null}))})):(at(t),ot=null)}),dt)((function(){return null})),mt=(o=yt,i=a=function(t){function e(){return F(this,e),W(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:e};case T.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,a=t.nestedChildren;return U({},r,((e={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,a=t.newChildProps,i=t.nestedChildren;switch(r.type){case T.TITLE:return U({},o,((e={})[r.type]=i,e.titleAttributes=U({},a),e));case T.BODY:return U({},o,{bodyAttributes:U({},a)});case T.HTML:return U({},o,{htmlAttributes:U({},a)})}return U({},o,((n={})[r.type]=U({},a),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=U({},e);return Object.keys(t).forEach((function(e){var r;n=U({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return y.a.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,a=o.children,i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[H[n]||n]=t[n],e}),e)}(z(o,["children"]));switch(n.warnOnInvalidChildren(t,a),t.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:i,nestedChildren:a})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=z(t,["children"]),r=U({},n);return e&&(r=this.mapChildrenToProps(e,r)),y.a.createElement(o,r)},K(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(y.a.Component),a.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var t=o.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},i);mt.renderStatic=mt.rewind}).call(this,n("yLpj"))},sEfC:function(t,e,n){var r=n("GoyQ"),o=n("QIyF"),a=n("tLB3"),i=Math.max,c=Math.min;t.exports=function(t,e,n){var u,s,l,f,p,d,y=0,m=!1,h=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var n=u,r=s;return u=s=void 0,y=e,f=t.apply(r,n)}function g(t){return y=t,p=setTimeout(w,e),m?v(t):f}function T(t){var n=t-d;return void 0===d||n>=e||n<0||h&&t-y>=l}function w(){var t=o();if(T(t))return O(t);p=setTimeout(w,function(t){var n=e-(t-d);return h?c(n,l-(t-y)):n}(t))}function O(t){return p=void 0,b&&u?v(t):(u=s=void 0,f)}function E(){var t=o(),n=T(t);if(u=arguments,s=this,d=t,n){if(void 0===p)return g(d);if(h)return clearTimeout(p),p=setTimeout(w,e),v(d)}return void 0===p&&(p=setTimeout(w,e)),f}return e=a(e)||0,r(n)&&(m=!!n.leading,l=(h="maxWait"in n)?i(a(n.maxWait)||0,e):l,b="trailing"in n?!!n.trailing:b),E.cancel=function(){void 0!==p&&clearTimeout(p),y=0,u=d=s=p=void 0},E.flush=function(){return void 0===p?f:O(o())},E}},tLB3:function(t,e,n){n("pIFo");var r=n("GoyQ"),o=n("/9aa"),a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=c.test(t);return n||u.test(t)?s(t.slice(2),n?2:8):i.test(t)?NaN:+t}}}]);
//# sourceMappingURL=component---src-pages-index-js-e3eda15ad90f939eec9d.js.map