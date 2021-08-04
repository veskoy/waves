(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[762],{1725:function(e,r,t){"use strict";var n=t(2322);r.Z=function(e){return(0,n.jsx)("div",{className:"w-full h-screen bg-gray-100 dark:bg-gray-800",children:(0,n.jsx)("div",{className:"container h-full mx-auto flex flex-1 items-center justify-center",children:e.children})})}},1740:function(e,r,t){"use strict";t.r(r),t.d(r,{RadioPage:function(){return y},__N_SSG:function(){return p},default:function(){return g}});var n=t(2322),i=t(1725),l=t(8845),s=t(6577);var o=function(e){var r=e.playback,t=e.children,i="".concat(r.artist," - ").concat(r.title);return(0,n.jsxs)("div",{className:"flex items-center justify-between gap-x-3",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("div",{className:"w-16 h-16 relative shadow",children:(0,n.jsx)(s.default,{src:r.cover,alt:i,layout:"fill",objectFit:"contain",unoptimized:!0,loader:function(e){return e.src}})}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("span",{className:"font-bold text-md ml-2",children:r.title}),(0,n.jsx)("span",{className:"text-sm text-gray-500 ml-2",children:r.artist})]})]}),t]})},a=t(9097),c=t(3492);var u=function(e){var r=e.radio,t=e.playlist;return(0,n.jsxs)("div",{className:"w-full max-w-lg rounded-2xl p-5 m-5 bg-white dark:bg-gray-900 dark:text-gray-400 shadow-lg divide-y",children:[(0,n.jsxs)("div",{className:"flex items-center justify-center mb-3",children:[(0,n.jsx)("div",{className:"w-16 h-16 mr-2 relative",children:(0,n.jsx)(s.default,{src:r.logo,alt:r.title,layout:"fill",objectFit:"contain",unoptimized:!0,loader:function(e){return e.src}})}),(0,n.jsxs)(l.Alert,{variant:"success",children:["\u0412\u0438\u0435 \u0441\u043b\u0443\u0448\u0430\u0442\u0435 \u0440\u0430\u0434\u0438\u043e ",(0,n.jsx)("span",{className:"font-bold inline",children:r.title})]})]}),t&&t.currentPlayback&&(0,n.jsxs)("div",{className:"flex flex-col mb-6 dark:border-gray-400",children:[(0,n.jsx)("span",{className:"text-xl font-light text-center my-3 dark:text-gray-200",children:"\u0412 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u0437\u0432\u0443\u0447\u0438:"}),(0,n.jsx)(o,{playback:t.currentPlayback,children:(0,n.jsx)(l.Badge,{variant:"danger",ping:!0,children:"\u041d\u0410 \u0416\u0418\u0412\u041e"})})]}),t&&t.previousPlayback&&(0,n.jsxs)("div",{className:"flex flex-col mb-6 dark:border-gray-400",children:[(0,n.jsx)("span",{className:"text-xl font-light text-center my-3 dark:text-gray-200",children:"\u041f\u0440\u0435\u0434\u0438\u0448\u043d\u0430 \u043f\u0435\u0441\u0435\u043d:"}),(0,n.jsx)(o,{playback:t.previousPlayback})]}),(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{children:(0,n.jsx)(l.Button,{color:"gray",icon:(0,n.jsx)(c.Adx,{className:"w-4 h-4 mr-2"}),rounded:!0,children:"\u041e\u0431\u0440\u0430\u0442\u043d\u043e"})})})]})},f=t(2784),d=t(4674),h=t(5351),p=!0;function y(e){var r=e.radio,t=(0,d.uY)(),l=t.playlist,s=t.load,o=t.play;return(0,f.useEffect)((function(){s(r),o()}),[s,o,r]),(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(h.PB,{noindex:!0}),(0,n.jsx)(u,{radio:r,playlist:l})]})}var g=y},8845:function(e,r,t){"use strict";t.r(r),t.d(r,{Alert:function(){return w},Badge:function(){return k},Button:function(){return m},HlsPlayer:function(){return b},WavesUi:function(){return P}});var n=t(2322),i=t(8488),l=t(4558),s=t(3831),o=t(1520),a=t(4583),c=t(942),u=t(389),f=t(7243),d=t(8711),h=t.n(d),p=t(2784);function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){(0,f.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function v(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=(0,u.Z)(e);if(r){var i=(0,u.Z)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return(0,c.Z)(this,t)}}var b=function(e){(0,a.Z)(t,e);var r=v(t);function t(e){var n;return(0,l.Z)(this,t),n=r.call(this,e),(0,f.Z)((0,o.Z)(n),"hls",void 0),(0,f.Z)((0,o.Z)(n),"playerRef",void 0),n.hls=null,n.playerRef=(0,p.createRef)(),n.initHlsPlayer=n.initHlsPlayer.bind((0,o.Z)(n)),n}return(0,s.Z)(t,[{key:"componentDidMount",value:function(){this.initHlsPlayer()}},{key:"componentDidUpdate",value:function(e){e.src!==this.props.src?this.initHlsPlayer():this.toggleHlsPlayer()}},{key:"componentWillUnmount",value:function(){this.destroyHlsPlayer()}},{key:"initHlsPlayer",value:function(){var e,r,t,n,i=this,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;(this.destroyHlsPlayer(),this.hls=new(h())(g({enableWorker:!1},l.hlsConfig)),null!=(null===(e=this.playerRef)||void 0===e?void 0:e.current))&&(null===(n=this.hls)||void 0===n||n.attachMedia(this.playerRef.current));null===(r=this.hls)||void 0===r||r.on(h().Events.MEDIA_ATTACHED,(function(){var e,r;null===(e=i.hls)||void 0===e||e.loadSource(i.props.src),null===(r=i.hls)||void 0===r||r.on(h().Events.MANIFEST_PARSED,(function(){var e,r;i.props.autoPlay&&(null===(e=i.playerRef)||void 0===e||null===(r=e.current)||void 0===r||r.play().catch((function(){return console.log("Unable to autoplay prior to user interaction with the dom.")})))}))})),null===(t=this.hls)||void 0===t||t.on(h().Events.ERROR,(function(e,r){var t,n;if(r.fatal)switch(r.type){case h().ErrorTypes.NETWORK_ERROR:null===(t=i.hls)||void 0===t||t.startLoad();break;case h().ErrorTypes.MEDIA_ERROR:null===(n=i.hls)||void 0===n||n.recoverMediaError();break;default:i.initHlsPlayer()}}))}},{key:"destroyHlsPlayer",value:function(){this.hls&&(this.hls.destroy(),this.hls=null)}},{key:"toggleHlsPlayer",value:function(){this.props.autoPlay?this.play():this.pause()}},{key:"play",value:function(){var e,r;null===(e=this.playerRef)||void 0===e||null===(r=e.current)||void 0===r||r.play()}},{key:"pause",value:function(){var e,r;null===(e=this.playerRef)||void 0===e||null===(r=e.current)||void 0===r||r.pause()}},{key:"render",value:function(){var e=this.props,r=(e.hlsConfig,e.src),t=e.autoPlay,l=(0,i.Z)(e,["hlsConfig","src","autoPlay"]);return h().isSupported()?(0,n.jsx)("audio",g({ref:this.playerRef},l)):(0,n.jsx)("audio",g({ref:this.playerRef,src:r,autoPlay:t},l))}}]),t}(p.Component),x={white:"bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500",gray:"bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200",red:"bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200",yellow:"bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 focus:ring-offset-yellow-200",green:"bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200",blue:"bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200",indigo:"bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200",purple:"bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200",pink:"bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200"};function m(e){var r=e.rounded,t=e.color,i=void 0===t?"gray":t,l=e.disabled,s=e.submit,o=e.onClick,a=e.icon,c=e.children,u=[];u.push(r?"rounded-full":"rounded-lg"),u.push(x[i]),u.push(l?"opacity-70 cursor-not-allowed":""),u.push(a?"flex justify-center items-center":"");var f=u.join(" ");return(0,n.jsxs)("button",{type:s?"submit":"button",disabled:l,className:"py-2 px-4 w-full transition ease-in duration-200 text-white text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ".concat(f),onClick:o,children:[a&&a,c]})}var j=t(2590);function w(e){var r,i,l=e.variant,s=void 0===l?"success":l,o=e.showIcon,a=void 0===o||o,c=e.children,u=[];switch(s){case"success":default:i=["border-green-600","text-green-600"],u.push.apply(u,(0,j.Z)(i)),a&&(r=t(5666))}var f=u.join(" ");return(0,n.jsxs)("div",{className:"flex items-center border-l-4 p-2 ".concat(f),role:"alert",children:[a&&(0,n.jsx)(r,{className:"w-5 h-5"}),(0,n.jsx)("p",{className:"pl-2",children:c})]})}function k(e){var r=e.variant,t=e.ping,i=void 0!==t&&t,l=e.children,s=[],o=[],a=function(e,r){s.push.apply(s,(0,j.Z)(e)),r&&o.push.apply(o,(0,j.Z)(r))};switch(r){case"success":a(["bg-green-500"],["bg-green-400"]);break;case"warning":a(["bg-yellow-500"],["bg-yellow-400"]);break;case"danger":default:a(["bg-red-500"],["bg-red-400"])}var c=s.join(" "),u=o.join(" ");return(0,n.jsxs)("span",{className:"flex relative justify-center items-center flex-shrink-0",children:[(0,n.jsx)("span",{className:"inline-flex rounded-full h-6 px-3 justify-center items-center text-sm text-white font-bold z-10 ".concat(c),children:l}),i&&(0,n.jsx)("span",{className:"animate-ping absolute inline-flex h-2/3 w-2/3 rounded-full opacity-75 z-0 ".concat(u)})]})}function P(e){return(0,n.jsx)("div",{children:(0,n.jsx)("h1",{children:"Welcome to waves-ui!"})})}},829:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/radio/[slug]",function(){return t(1740)}])}},function(e){e.O(0,[389,6,617,774,888,179],(function(){return r=829,e(e.s=r);var r}));var r=e.O();_N_E=r}]);