(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var r,i;e.exports=(null===(r=n.g.process)||void 0===r?void 0:r.env)&&"object"===typeof(null===(i=n.g.process)||void 0===i?void 0:i.env)?n.g.process:n(7663)},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6322)}])},4268:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),i=n(5988),o=n.n(i);function s(){return(0,r.jsxs)("a",{href:"https://github.com/ordilov",className:"jsx-fc08dd7c2fcf6a18 github",children:["Github \ud83d\udd17",(0,r.jsx)(o(),{id:"fc08dd7c2fcf6a18",children:".github.jsx-fc08dd7c2fcf6a18{display:inline-block;\ntext-align:center;\nwidth:8rem;\nheight:2rem;\nmargin:0 auto}\n.github.jsx-fc08dd7c2fcf6a18:hover{background-color:#4d4747;\nbox-shadow:0 0 0.6rem rgb(0 0 0 / 60%);\n-webkit-transform:translate(0, -0.4rem);\n-moz-transform:translate(0, -0.4rem);\n-ms-transform:translate(0, -0.4rem);\ntransform:translate(0, -0.4rem)}"})]})}},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],s=!0,l=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(a){l=!0,i=a}finally{try{s||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,s=(o=n(7294))&&o.__esModule?o:{default:o},l=n(6273),a=n(387),c=n(7190);var u={};function f(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(i?"%"+i:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=a.useRouter(),o=s.default.useMemo((function(){var t=i(l.resolveHref(r,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?l.resolveHref(r,e.as):o||n}}),[r,e.href,e.as]),d=o.href,h=o.as,p=e.children,m=e.replace,y=e.shallow,v=e.scroll,g=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var b=(t=s.default.Children.only(p))&&"object"===typeof t&&t.ref,_=i(c.useIntersection({rootMargin:"200px"}),2),x=_[0],j=_[1],S=s.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);s.default.useEffect((function(){var e=j&&n&&l.isLocalURL(d),t="undefined"!==typeof g?g:r&&r.locale,i=u[d+"%"+h+(t?"%"+t:"")];e&&!i&&f(r,d,h,{locale:t})}),[h,d,j,g,n,r]);var w={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,s,a){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[i?"replace":"push"](n,r,{shallow:o,locale:a,scroll:s}))}(e,r,d,h,m,y,v,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(r,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof g?g:r&&r.locale,R=r&&r.isLocaleDomain&&l.getDomainLocale(h,k,r&&r.locales,r&&r.domainLocales);w.href=R||l.addBasePath(l.addLocale(h,k,r&&r.defaultLocale))}return s.default.cloneElement(t,w)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],s=!0,l=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(a){l=!0,i=a}finally{try{s||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,u=o.useRef(),f=i(o.useState(!1),2),d=f[0],h=f[1],p=i(o.useState(t?t.current:null),2),m=p[0],y=p[1],v=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=a.get(r):(t=a.get(n),c.push(n));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(n,t={id:n,observer:o,elements:i}),t}(n),i=r.id,o=r.observer,s=r.elements;return s.set(e,t),o.observe(e),function(){if(s.delete(e),o.unobserve(e),0===s.size){o.disconnect(),a.delete(i);var t=c.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:n}))}),[r,m,n,d]);return o.useEffect((function(){if(!l&&!d){var e=s.requestIdleCallback((function(){return h(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&y(t.current)}),[t]),[v,d]};var o=n(7294),s=n(9311),l="undefined"!==typeof IntersectionObserver;var a=new Map,c=[]},6322:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),i=n(5988),o=n.n(i),s=n(1664),l=n(9008),a=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.default,{children:[(0,r.jsx)("title",{className:"jsx-fef23c1069654ba7",children:"Ordinary"}),(0,r.jsx)("meta",{charSet:"utf-8",className:"jsx-fef23c1069654ba7"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1",className:"jsx-fef23c1069654ba7"}),(0,r.jsx)("meta",{name:"description",content:"Blog",className:"jsx-fef23c1069654ba7"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-fef23c1069654ba7"})]}),(0,r.jsxs)("header",{className:"jsx-fef23c1069654ba7",children:[(0,r.jsx)("div",{className:"jsx-fef23c1069654ba7 home",children:(0,r.jsx)(s.default,{href:"/",children:"Ordinary"})}),(0,r.jsx)("div",{className:"jsx-fef23c1069654ba7 about",children:(0,r.jsx)(s.default,{href:"/about",children:(0,r.jsx)("a",{className:"jsx-fef23c1069654ba7",children:"About"})})})]}),(0,r.jsx)(o(),{id:"fef23c1069654ba7",children:"header.jsx-fef23c1069654ba7{display:grid;\ncolor:#0070f3;\nbackground-color:#1e1e1e;\nborder-bottom:1px solid #e5e5e5;\ngrid-template-columns:1fr 1fr;\ngrid-template-rows:5rem;\nposition:fixed;\nwidth:100%;\nleft:25%;\nheight:5rem;\nz-index:300;\nopacity:0.95}\n.home.jsx-fef23c1069654ba7{font-size:2rem;\nfont-family:'system-ui', serif;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-text-decoration:none;\ntext-decoration:none}\n.about.jsx-fef23c1069654ba7{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-flex-direction:row-reverse;\n-ms-flex-direction:row-reverse;\nflex-direction:row-reverse}\n.category.jsx-fef23c1069654ba7{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-flex-direction:row-reverse;\n-ms-flex-direction:row-reverse;\nflex-direction:row-reverse}\n@media (min-width:720px) {header.jsx-fef23c1069654ba7{max-width:50rem;\npadding:0 2rem;\nmargin:0 auto}}"})]})},c=n(4268),u=function(){return(0,r.jsxs)("footer",{className:"jsx-bf1060902d5987dc",children:[(0,r.jsx)("span",{className:"jsx-bf1060902d5987dc",children:(0,r.jsx)(c.Z,{})}),(0,r.jsx)("span",{className:"jsx-bf1060902d5987dc",children:"Copyright \xa9 Ordilov"}),(0,r.jsx)(o(),{id:"bf1060902d5987dc",children:"footer.jsx-bf1060902d5987dc{height:6rem;\npadding:0 2rem;\ntext-align:center;\nmargin:0 auto;\ndisplay:grid;\ngrid-template-columns:1fr 1fr}\nspan.jsx-bf1060902d5987dc{padding:2rem 0}\n@media (min-width:720px) {footer.jsx-bf1060902d5987dc{max-width:50rem;\npadding:0 2rem;\nmargin:0 auto}}"})]})};function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}var h=function(e){var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[t,(0,r.jsx)(o(),{id:"fdda0da833babefe",children:'*{color:white;\nbox-sizing:border-box}\nhtml, body{padding:0;\nmargin:0;\nfont-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\nbackground:#1e1e1e}\na{color:inherit;\n-webkit-text-decoration:none;\ntext-decoration:none}\nmain{background:#1e1e1e;\nmin-height:100vh;\nheight:100%;\npadding:8rem 0 0 0;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center}\nstrong{color:#a964a7}\ncode{color:#3fd0c0;\nfont-weight:bold;\nfont-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif}\nblockquote{border:3px solid #27a9e3;\nmargin-left:0;\nmargin-right:0;\npadding-left:20px;\npadding-right:20px;\nborder-left:12px solid #27a9e3;\nborder-radius:5px}\narticle{position:relative}\n.hljs{font-size:0.9rem;\nbackground:#333;\nfont-family:SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\ndisplay:block;\ncolor:#fff;\nborder-radius:5px;\noverflow:auto;\npadding:1em;\nmargin:0.6em}\n.hljs-doctag, .hljs-meta-keyword, .hljs-name, .hljs-strong{font-weight:bold}\n.hljs-code, .hljs-emphasis{font-style:italic}\n.hljs-section, .hljs-tag{color:#62c8f3}\n.hljs-selector-class, .hljs-selector-id, .hljs-template-variable, .hljs-variable{color:#ade5fc}\n.hljs-meta-string, .hljs-string{color:#a2fca2}\n.hljs-attr, .hljs-quote, .hljs-selector-attr{color:#7bd694}\n.hljs-tag .hljs-attr{color:inherit}\n.hljs-attribute, .hljs-title, .hljs-type{color:#ffa}\n.hljs-number, .hljs-symbol{color:#d36363}\n.hljs-bullet, .hljs-template-tag{color:#b8d8a2}\n.hljs-built_in, .hljs-keyword, .hljs-literal, .hljs-selector-tag{color:#fcc28c}\n.hljs-code, .hljs-comment, .hljs-formula{color:#888}\n.hljs-link, .hljs-selector-pseudo, .hljs-regexp{color:#c6b4f0}\n.hljs-meta{color:#fc9b9b}\n.hljs-deletion{background:#fc9b9b;\ncolor:#333}\n.hljs-addition{background:#a2fca2;\ncolor:#333}\n.hljs-operator, .hljs-params, .hljs-property, .hljs-punctuation{}\n.hljs-subst{color:#fff}\n.hljs a{color:inherit}\n.hljs a:focus, .hljs a:hover{color:inherit;\ntext-decoration:underline}\n.hljs mark{background:#555;\ncolor:inherit}'})]})};var p=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsxs)(h,{children:[(0,r.jsx)(a,{}),(0,r.jsx)("main",{children:(0,r.jsx)(t,d({},n))}),(0,r.jsx)(u,{})]})}},7663:function(e){!function(){var t={162:function(e){var t,n,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l,a=[],c=!1,u=-1;function f(){c&&l&&(c=!1,l.length?a=l.concat(a):u=-1,a.length&&d())}function d(){if(!c){var e=s(f);c=!0;for(var t=a.length;t;){for(l=a,a=[];++u<t;)l&&l[u].run();u=-1,t=a.length}l=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new h(e,t)),1!==a.length||c||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}},s=!0;try{t[e](o,o.exports,r),s=!1}finally{s&&delete n[e]}return o.exports}r.ab="//";var i=r(162);e.exports=i}()},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},4207:function(e,t,n){var r=n(3454);!function(){"use strict";var t={583:function(e){e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},590:function(e,t,n){t.__esModule=!0,t.computeId=function(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;o[r]||(o[r]="jsx-"+(0,i.default)(e+"-"+n));return o[r]},t.computeSelector=function(e,t){"undefined"===typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var n=e+t;o[n]||(o[n]=t.replace(/__jsx-style-dynamic-selector/g,e));return o[n]};var r,i=(r=n(583))&&r.__esModule?r:{default:r};var o={}},503:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var i="undefined"!==typeof r&&r.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,a=void 0===s?i:s,c=t.isBrowser,u=void 0===c?"undefined"!==typeof window:c;l(o(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",l("boolean"===typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,r,s,a=e.prototype;return a.setOptimizeForSpeed=function(e){l("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),l(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(l(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(l(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(s){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];l(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},a.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];l(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},a.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},a.makeStyleTag=function(e,t,n){t&&l(o(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},t=e,(r=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,r),s&&n(t,s),e}();function l(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s},449:function(e,t,n){t.__esModule=!0,t.default=c;var r,i=(r=n(522))&&r.__esModule?r:{default:r},o=n(147),s=n(590);var l=i.default.useInsertionEffect||i.default.useLayoutEffect,a="undefined"!==typeof window?(0,o.createStyleRegistry)():void 0;function c(e){var t=a||(0,o.useStyleRegistry)();return t?"undefined"===typeof window?(t.add(e),null):(l((function(){return t.add(e),function(){t.remove(e)}}),[e.id,String(e.dynamic)]),null):null}c.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return(0,s.computeId)(t,n)})).join(" ")}},147:function(e,t,n){t.__esModule=!0,t.createStyleRegistry=u,t.StyleRegistry=function(e){var t=e.registry,n=e.children,r=(0,i.useContext)(c),o=(0,i.useState)((function(){return r||t||u()}))[0];return i.default.createElement(c.Provider,{value:o},n)},t.useStyleRegistry=function(){return(0,i.useContext)(c)},t.StyleSheetContext=t.StyleSheetRegistry=void 0;var r,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(522)),o=(r=n(503))&&r.__esModule?r:{default:r},s=n(590);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}var a=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,s=void 0!==i&&i,l=t.isBrowser,a=void 0===l?"undefined"!==typeof window:l;this._sheet=r||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=o,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.styles=function(e){return function(e,t){return void 0===t&&(t={}),e.map((function(e){var n=e[0],r=e[1];return i.default.createElement("style",{id:"__"+n,key:"__"+n,nonce:t.nonce?t.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})}))}(this.cssRules(),e)},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var i=(0,s.computeId)(r,n);return{styleId:i,rules:Array.isArray(t)?t.map((function(e){return(0,s.computeSelector)(i,e)})):[(0,s.computeSelector)(i,t)]}}return{styleId:(0,s.computeId)(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.StyleSheetRegistry=a;var c=(0,i.createContext)(null);function u(){return new a}t.StyleSheetContext=c},522:function(e){e.exports=n(7294)}},i={};function o(e){var n=i[e];if(void 0!==n)return n.exports;var r=i[e]={exports:{}},s=!0;try{t[e](r,r.exports,o),s=!1}finally{s&&delete i[e]}return r.exports}o.ab="//";var s={};!function(){var e=s;e.__esModule=!0,e.style=e.useStyleRegistry=e.createStyleRegistry=e.StyleRegistry=void 0;var t=o(147);e.StyleRegistry=t.StyleRegistry,e.createStyleRegistry=t.createStyleRegistry,e.useStyleRegistry=t.useStyleRegistry;var n,r=(n=o(449))&&n.__esModule?n:{default:n};e.style=r.default}(),e.exports=s}()},5988:function(e,t,n){e.exports=n(4207).style}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var n=e.O();_N_E=n}]);