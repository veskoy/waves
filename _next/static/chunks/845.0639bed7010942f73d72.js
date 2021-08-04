(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[845],{5666:function(e,t,n){const r=n(2784);e.exports=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))}},8845:function(e,t,n){"use strict";n.r(t),n.d(t,{Alert:function(){return O},Badge:function(){return P},Button:function(){return w},HlsPlayer:function(){return v},WavesUi:function(){return k}});var r=n(2322),o=n(8488),i=n(4558),u=n(3831),s=n(1520),l=n(4583),c=n(942),a=n(389),f=n(7243),p=n(8711),y=n.n(p),d=n(2784);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,a.Z)(e);if(t){var o=(0,a.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var v=function(e){(0,l.Z)(n,e);var t=b(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,e),(0,f.Z)((0,s.Z)(r),"hls",void 0),(0,f.Z)((0,s.Z)(r),"playerRef",void 0),r.hls=null,r.playerRef=(0,d.createRef)(),r.initHlsPlayer=r.initHlsPlayer.bind((0,s.Z)(r)),r}return(0,u.Z)(n,[{key:"componentDidMount",value:function(){this.initHlsPlayer()}},{key:"componentDidUpdate",value:function(e){e.src!==this.props.src?this.initHlsPlayer():this.toggleHlsPlayer()}},{key:"componentWillUnmount",value:function(){this.destroyHlsPlayer()}},{key:"initHlsPlayer",value:function(){var e,t,n,r,o=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;(this.destroyHlsPlayer(),this.hls=new(y())(g({enableWorker:!1},i.hlsConfig)),null!=(null===(e=this.playerRef)||void 0===e?void 0:e.current))&&(null===(r=this.hls)||void 0===r||r.attachMedia(this.playerRef.current));null===(t=this.hls)||void 0===t||t.on(y().Events.MEDIA_ATTACHED,(function(){var e,t;null===(e=o.hls)||void 0===e||e.loadSource(o.props.src),null===(t=o.hls)||void 0===t||t.on(y().Events.MANIFEST_PARSED,(function(){var e,t;o.props.autoPlay&&(null===(e=o.playerRef)||void 0===e||null===(t=e.current)||void 0===t||t.play().catch((function(){return console.log("Unable to autoplay prior to user interaction with the dom.")})))}))})),null===(n=this.hls)||void 0===n||n.on(y().Events.ERROR,(function(e,t){var n,r;if(t.fatal)switch(t.type){case y().ErrorTypes.NETWORK_ERROR:null===(n=o.hls)||void 0===n||n.startLoad();break;case y().ErrorTypes.MEDIA_ERROR:null===(r=o.hls)||void 0===r||r.recoverMediaError();break;default:o.initHlsPlayer()}}))}},{key:"destroyHlsPlayer",value:function(){this.hls&&(this.hls.destroy(),this.hls=null)}},{key:"toggleHlsPlayer",value:function(){this.props.autoPlay?this.play():this.pause()}},{key:"play",value:function(){var e,t;null===(e=this.playerRef)||void 0===e||null===(t=e.current)||void 0===t||t.play()}},{key:"pause",value:function(){var e,t;null===(e=this.playerRef)||void 0===e||null===(t=e.current)||void 0===t||t.pause()}},{key:"render",value:function(){var e=this.props,t=(e.hlsConfig,e.src),n=e.autoPlay,i=(0,o.Z)(e,["hlsConfig","src","autoPlay"]);return y().isSupported()?(0,r.jsx)("audio",g({ref:this.playerRef},i)):(0,r.jsx)("audio",g({ref:this.playerRef,src:t,autoPlay:n},i))}}]),n}(d.Component),m={white:"bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500",gray:"bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200",red:"bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200",yellow:"bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 focus:ring-offset-yellow-200",green:"bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200",blue:"bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200",indigo:"bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200",purple:"bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200",pink:"bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200"};function w(e){var t=e.rounded,n=e.color,o=void 0===n?"gray":n,i=e.disabled,u=e.submit,s=e.onClick,l=e.icon,c=e.children,a=[];a.push(t?"rounded-full":"rounded-lg"),a.push(m[o]),a.push(i?"opacity-70 cursor-not-allowed":""),a.push(l?"flex justify-center items-center":"");var f=a.join(" ");return(0,r.jsxs)("button",{type:u?"submit":"button",disabled:i,className:"py-2 px-4 w-full transition ease-in duration-200 text-white text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ".concat(f),onClick:s,children:[l&&l,c]})}var j=n(2590);function O(e){var t,o,i=e.variant,u=void 0===i?"success":i,s=e.showIcon,l=void 0===s||s,c=e.children,a=[];switch(u){case"success":default:o=["border-green-600","text-green-600"],a.push.apply(a,(0,j.Z)(o)),l&&(t=n(5666))}var f=a.join(" ");return(0,r.jsxs)("div",{className:"flex items-center border-l-4 p-2 ".concat(f),role:"alert",children:[l&&(0,r.jsx)(t,{className:"w-5 h-5"}),(0,r.jsx)("p",{className:"pl-2",children:c})]})}function P(e){var t=e.variant,n=e.ping,o=void 0!==n&&n,i=e.children,u=[],s=[],l=function(e,t){u.push.apply(u,(0,j.Z)(e)),t&&s.push.apply(s,(0,j.Z)(t))};switch(t){case"success":l(["bg-green-500"],["bg-green-400"]);break;case"warning":l(["bg-yellow-500"],["bg-yellow-400"]);break;case"danger":default:l(["bg-red-500"],["bg-red-400"])}var c=u.join(" "),a=s.join(" ");return(0,r.jsxs)("span",{className:"flex relative justify-center items-center flex-shrink-0",children:[(0,r.jsx)("span",{className:"inline-flex rounded-full h-6 px-3 justify-center items-center text-sm text-white font-bold z-10 ".concat(c),children:i}),o&&(0,r.jsx)("span",{className:"animate-ping absolute inline-flex h-2/3 w-2/3 rounded-full opacity-75 z-0 ".concat(a)})]})}function k(e){return(0,r.jsx)("div",{children:(0,r.jsx)("h1",{children:"Welcome to waves-ui!"})})}},1520:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},4558:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},3831:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,{Z:function(){return o}})},389:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,{Z:function(){return r}})},4583:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,{Z:function(){return o}})},8488:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},942:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,{Z:function(){return i}});var o=n(1520);function i(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?(0,o.Z)(e):t}},2590:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})}}]);