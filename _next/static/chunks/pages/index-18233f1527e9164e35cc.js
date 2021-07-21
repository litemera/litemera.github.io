(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8917:function(e,t,n){"use strict";var r=n(5893),o=(n(7294),n(9008)),i=n(7120),a=n(4038);t.Z=function(e){var t=e.title,n=void 0===t?i.Ti:t,c=e.description,s=void 0===c?i.dz:c,l=e.keywords,p=void 0===l?i.cU:l,u=e.canonical,d=void 0===u?a.y:u,f=e.children;return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"title",content:n}),(0,r.jsx)("meta",{name:"description",content:s}),(0,r.jsx)("meta",{name:"keywords",content:p}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, viewport-fit=cover"}),(0,r.jsx)("meta",{property:"og:title",content:i.R}),(0,r.jsx)("meta",{property:"og:site_name",content:n}),(0,r.jsx)("meta",{property:"og:description",content:s}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:image",content:"/images/meta.jpg"}),(0,r.jsx)("meta",{property:"og:image:alt",content:s}),(0,r.jsx)("meta",{property:"og:url",content:d}),(0,r.jsx)("meta",{name:"twitter:title",content:i.R}),(0,r.jsx)("meta",{name:"twitter:description",content:s}),(0,r.jsx)("meta",{name:"twitter:image",content:"/images/meta.jpg"}),(0,r.jsx)("meta",{name:"twitter:image:src",content:"/images/meta.jpg"}),(0,r.jsx)("meta",{name:"twitter:image:alt",content:s}),(0,r.jsx)("meta",{property:"al:ios:url",content:i.x}),(0,r.jsx)("meta",{property:"al:ios:app_store_id",content:i.T$}),(0,r.jsx)("meta",{property:"al:ios:app_name",content:i.R}),(0,r.jsx)("meta",{property:"al:android:url",content:i.x}),(0,r.jsx)("meta",{property:"al:android:app_name",content:i.R}),(0,r.jsx)("meta",{property:"al:android:package",content:i.qV}),(0,r.jsx)("meta",{property:"al:web:url",content:d}),f||null,(0,r.jsx)("link",{rel:"canonical",href:d}),(0,r.jsx)("link",{rel:"alternate",href:i.x})]})}},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(3398);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},2775:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(i=n(3244))&&i.__esModule?i:{default:i},s=n(3398),l=n(1165),p=n(6393);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var s=0,l=m.length;s<l;s++){var p=m[s];if(o.props.hasOwnProperty(p))if("charSet"===p)n.has(p)?i=!1:n.add(p);else{var u=o.props[p],d=r[p]||new Set;"name"===p&&a||!d.has(u)?(d.add(u),r[p]=d):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,a.default.cloneElement(e,c)}return a.default.cloneElement(e,{key:i})}))}var g=function(e){var t=e.children,n=(0,a.useContext)(s.AmpStateContext),r=(0,a.useContext)(l.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,p.isInAmpMode)(n)},t)};t.default=g},3244:function(e,t,n){"use strict";var r=n(3115),o=n(2553),i=n(2012),a=(n(450),n(9807)),c=n(7690),s=n(9828);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var p=n(7294),u=function(e){a(n,e);var t=l(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(p.Component);t.default=u},7209:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=n(5893),o=n(7294),i=n(9163),a=n(7120),c=[{store:"App Store",os:"ios",href:a.z8,title:"Download on the App Store - ".concat(a.R)},{store:"Google Play",os:"android",href:a.IZ,title:"Get it on Google Play - ".concat(a.R)}],s=i.default.div.withConfig({displayName:"DownloadBtn__Container",componentId:"sc-1hjly4c-0"})(["margin-top:96px;@media ","{margin-top:64px;}@media ","{margin-top:32px;}div{width:auto;height:56px;border-radius:16px;display:inline-block;background-color:",";img{width:24px;height:24px;padding:16px 12px 16px 16px;display:inline-block;@media ","{padding-right:8px;}@media ","{padding:16px 4px 16px 12px;}}span{color:#121212;font-weight:700;line-height:56px;margin-right:16px;vertical-align:top;display:inline-block;}}"],(function(e){return e.theme.mqbp.pablet}),(function(e){return e.theme.mqbp.small}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.mqbp.android}),(function(e){return e.theme.mqbp.small})),l=function(e){var t=e.children;return(0,r.jsx)(o.StrictMode,{children:(0,r.jsxs)(s,{children:[c.map((function(e,t){return(0,r.jsx)("div",{className:e.os,role:"button",style:{marginRight:"ios"===e.os?"8px":"0"},children:(0,r.jsxs)("a",{href:e.href,target:"_blank",title:e.title,rel:"noopener noreferrer",children:[(0,r.jsx)("img",{width:"24px",height:"24px",src:"/images/store-".concat(e.os,".png"),alt:e.title,title:e.title}),(0,r.jsx)("span",{children:e.store})]})},t)})),t||null]})})},p=function(e){var t=(0,o.useState)(!1),n=t[0],r=t[1];return(0,o.useEffect)((function(){var t=window.matchMedia(e);t.matches!==n&&r(t.matches);var o=function(){return r(t.matches)};return t.addEventListener("change",o),function(){return t.removeEventListener("change",o)}}),[n,e]),n},u=i.default.div.withConfig({displayName:"Hero__Container",componentId:"sc-1yum3ae-0"})(["margin:96px auto 32px;text-align:center;@media ","{margin:64px auto 0;}@media ","{margin:48px auto 0;}"],(function(e){return e.theme.mqbp.pablet}),(function(e){return e.theme.mqbp.small})),d=function(e){var t=e.children,n=p("(max-width: 420px)");return(0,r.jsx)(o.StrictMode,{children:(0,r.jsx)(u,{className:"section",children:(0,r.jsxs)("div",{className:"wrapper",children:[(0,r.jsx)("img",{width:"96px",height:"96px",alt:a.R,title:a.R,src:"/images/launcher.svg"}),(0,r.jsx)("h1",{children:a.R}),(0,r.jsxs)("h2",{children:["Take a photo with Litemera, it will be ",n?null:(0,r.jsx)("br",{}),"deleted automatically after 24 hours"]}),(0,r.jsx)(l,{}),t||null]})})})},f=[{src:"auto_delete",title:"Automatically delete after 24 hours"},{src:"cloud_off",title:"No server, No cloud"}],m=i.default.div.withConfig({displayName:"Introduce__Container",componentId:"sc-3em61z-0"})(["background-color:",";"],(function(e){return e.theme.colors.lightgrey})),h=i.default.div.withConfig({displayName:"Introduce__GridBox",componentId:"sc-3em61z-1"})(["margin-top:64px;display:grid;grid-gap:16px;grid-template-columns:repeat(",",1fr);div{text-align:center;img{width:48px;height:48px;}}"],f.length),g=function(e){var t=e.children,n=p("(max-width: 420px)");return(0,r.jsx)(o.StrictMode,{children:(0,r.jsx)(m,{className:"section",children:(0,r.jsxs)("div",{className:"wrapper",children:[(0,r.jsxs)("h1",{children:["What is ",a.R,"?"]}),(0,r.jsxs)("h2",{children:["Every photos taken with ",a.R," will be deleted automatically after 24 hours. ",n?null:(0,r.jsx)("br",{}),"We do not upload the photos to server or cloud services."]}),(0,r.jsx)(h,{children:f.map((function(e,t){return(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{width:"48px",height:"48px",src:"/images/icons/".concat(e.src,".svg"),alt:e.title,title:e.title}),(0,r.jsx)("h3",{children:e.title})]},t)}))}),t||null]})})})},x=i.default.div.withConfig({displayName:"Mock__Container",componentId:"sc-kvfncq-0"})(["margin:32px auto 0;overflow:hidden;"]),y=i.default.div.withConfig({displayName:"Mock__ImageBox",componentId:"sc-kvfncq-1"})(["margin-top:64px;position:relative;text-align:center;& > img{width:80vw;max-width:400px;}"]),v=function(e){var t=e.children,n=p("(max-width: 420px)");return(0,r.jsx)(o.StrictMode,{children:(0,r.jsx)(x,{className:"section",children:(0,r.jsxs)("div",{className:"wrapper",children:[(0,r.jsx)("h1",{children:"24 Hours"}),(0,r.jsxs)("h2",{children:["Erase unimportant photos from memory. ",n?null:(0,r.jsx)("br",{}),"Litemera will delete them for you."]}),(0,r.jsx)(y,{children:(0,r.jsx)("img",{src:"/images/mock.png",alt:a.R,title:a.R})}),t||null]})})})},w=n(8917),j=n(3196),b=[{title:"Privacy Policy",href:"Privacy-Policy-ddd8297bdaa7486c8d8a0a6a483d5c95"},{title:"Terms of Use",href:"Terms-of-Use-8b9ca8af6eae4ced8b34eec775f1fe99"}],_=[{src:"facebook",href:"facebook.com/".concat(a.by)},{src:"instagram",href:"instagram.com/".concat(a.Ku)},{src:"twitter",href:"twitter.com/".concat(a.SD)}],k=i.default.div.withConfig({displayName:"Footer__Container",componentId:"sc-179webf-0"})(["margin:0 auto;width:100vw;text-align:center;padding:64px 0;background-color:",";& > img{opacity:0.54;margin:0 auto 16px;display:inline-block;}"],(function(e){return e.theme.colors.lightgrey})),M=i.default.div.withConfig({displayName:"Footer__Tos",componentId:"sc-179webf-1"})(["margin-bottom:8px;span{cursor:pointer;margin:8px 16px;padding:1px;font-size:12px;opacity:0.54;&:hover{opacity:1;}}"]),S=i.default.img.withConfig({displayName:"Footer__SnsImage",componentId:"sc-179webf-2"})(["width:24px;height:24px;margin:8px 16px;padding:1px;cursor:pointer;opacity:0.54;&:hover{opacity:1;}"]),C=function(e){var t=e.children;return(0,r.jsx)(o.StrictMode,{children:(0,r.jsxs)(k,{children:[(0,r.jsx)("img",{alt:a.R,title:a.R,src:"https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Flitemera.github.io&count_bg=%001E1E1E&title_bg=%001E1E1E&icon=&edge_flat=false"}),(0,r.jsx)(M,{children:b.map((function(e,t){return(0,r.jsx)("a",{title:e.title,href:"https://www.notion.so/volla/".concat(e.href),target:"_blank",rel:"noreferrer noopener",children:(0,r.jsx)("span",{children:e.title})},t)}))}),(0,r.jsx)("div",{children:_.map((function(e,t){return(0,r.jsx)("a",{title:(0,j.f)(e.src),href:"https://".concat(e.href),target:"_blank",rel:"noreferrer noopener",children:(0,r.jsx)(S,{width:"24px",height:"24px",src:"images/ic-".concat(e.src,"-white.svg"),alt:"".concat(a.R," ").concat((0,j.f)(e.src)),title:"".concat(a.R," ").concat((0,j.f)(e.src))})},t)}))}),t||null]})})},P=function(e){var t=e.children;return(0,r.jsxs)(o.StrictMode,{children:[t||null,(0,r.jsx)(C,{})]})},O=n(4038),A=function(){var e='{\n      "@context": "https://schema.org/",\n      "@type": "Organization",\n      "name": "'.concat(a.R,'",\n      "url": "').concat(O.y,'",\n      "sameAs": [\n        "https://www.facebook.com/').concat(a.by,'",\n        "https://www.instagram.com/').concat(a.Ku,'",\n        "https://twitter.com/').concat(a.SD,'"\n      ]\n    }');return(0,r.jsxs)(o.StrictMode,{children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:"".concat(e)}})}),(0,r.jsxs)(P,{children:[(0,r.jsx)(d,{}),(0,r.jsx)(g,{}),(0,r.jsx)(v,{})]})]})}},7120:function(e,t,n){"use strict";n.d(t,{R:function(){return r},Ti:function(){return o},dz:function(){return i},cU:function(){return a},T$:function(){return c},z8:function(){return s},qV:function(){return l},IZ:function(){return p},by:function(){return u},Ku:function(){return d},SD:function(){return f},x:function(){return m}});var r="Litemera",o="".concat(r," - Automatically delete after 24 hours"),i="Take a photo with Litemera, it will be deleted automatically after 24 hours.",a="".concat(r,", Camera, Photo, Image, Picture, App, Application, AppStore, Google Play, Apple, Google, Android, Play Store, Wi-fi, Wifi, Caffe, Cafe, Parking lot, Parking, restroom, toilet, Password, Share, business, lightmera, litecam, lightcam"),c="1575339252",s="https://apps.apple.com/app/id".concat(c),l="com.dreammeister.litemera",p="https://play.google.com/store/apps/details?id=".concat(l),u="Litemera-106945318323623",d="litemera.app",f="litemera_app",m="litemera://"},4038:function(e,t,n){"use strict";n.d(t,{y:function(){return r}});n(4155);var r="https://litemera.github.io"},3196:function(e,t,n){"use strict";n.d(t,{f:function(){return r},W:function(){return o}});var r=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},o=function(e,t){var n=navigator.userAgent;/android/i.test(n)?window.open(e):/iPad|iPhone|iPod/.test(n)||-1!=navigator.appVersion.indexOf("Mac")&&!window.MSStream?window.open(t):(/windows phone/i.test(n),window.open(e))}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7209)}])},9008:function(e,t,n){e.exports=n(2775)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),o=n(7381),i=n(3585),a=n(5725);e.exports=function(e){return r(e)||o(e)||i(e)||a()}}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);