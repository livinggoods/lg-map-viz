!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";var o=n(9),r=n.n(o);e.a={name:"LgMapViz",data:function(){return{}},props:["accessToken","mapOptions","layers"],methods:{mapLoaded:function(){}},components:{Mapbox:r.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2);e.default=o.a},function(t,e,n){"use strict";function o(t){n(3)}var r=n(0),i=n(11),a=n(8),s=o,c=a(r.a,i.a,!1,s,null,null);e.a=c.exports},function(t,e,n){var o=n(4);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(6)("7a04fa9e",o,!0,{})},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,"",""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=p[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(i(n.parts[r]));p[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function i(t){var e,n,o=document.querySelector("style["+g+'~="'+t.id+'"]');if(o){if(m)return h;o.parentNode.removeChild(o)}if(b){var i=d++;o=f||(f=r()),e=a.bind(null,o,i,!1),n=a.bind(null,o,i,!0)}else o=r(),e=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function a(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function s(t,e){var n=e.css,o=e.media,r=e.sourceMap;if(o&&t.setAttribute("media",o),v.ssrId&&t.setAttribute(g,e.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(7),p={},l=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,d=0,m=!1,h=function(){},v=null,g="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,r){m=n,v=r||{};var i=u(t,e);return o(i),function(e){for(var n=[],r=0;r<i.length;r++){var a=i[r],s=p[a.id];s.refs--,n.push(s)}e?(i=u(t,e),o(i)):i=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete p[s.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=i[0],s=i[1],c=i[2],u=i[3],p={id:t+":"+r,css:s,media:c,sourceMap:u};o[a]?o[a].parts.push(p):n.push(o[a]={id:a,parts:[p]})}return n}},function(t,e){t.exports=function(t,e,n,o,r,i){var a,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,s=t.default);var u="function"==typeof s?s.options:s;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId=r);var p;if(i?(p=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=p):o&&(p=o),p){var l=u.functional,f=l?u.render:u.beforeCreate;l?(u._injectStyles=p,u.render=function(t,e){return p.call(e),f(t,e)}):u.beforeCreate=f?[].concat(f,p):[p]}return{esModule:a,exports:s,options:u}}},function(t,e,n){"use strict";(function(t){var n,o,r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(a,s){"object"===i(e)&&"object"===i(t)?t.exports=s():(o=[],n=s,void 0!==(r="function"==typeof n?n.apply(e,o):n)&&(t.exports=r))}(0,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{_map:null}},props:{accessToken:{type:String,required:!0},mapOptions:{type:Object,required:!0},navControl:{type:Object,default:function(){return{show:!0,position:"top-right"}}},geolocateControl:{type:Object,default:function(){return{show:!1,position:"top-left",options:{}}}},scaleControl:{type:Object,default:function(){return{show:!1,position:"top-left",options:{}}}},fullscreenControl:{type:Object,default:function(){return{show:!1,position:"top-right"}}}},mounted:function(){var t=this.mapInit();this._map=t,this.addControls(t),this.registerEvents(t)},methods:{mapInit:function(){mapboxgl.accessToken=this.accessToken,this.mapOptions.hasOwnProperty("container")||(this.mapOptions.container="map");var t=new mapboxgl.Map(this.mapOptions);return this.$emit("map-init",t),t},registerEvents:function(t){var e=this;t.on("load",function(){e.$emit("map-load",t)}),t.on("mousemove",function(n){e.$emit("map-mousemove",t,n)}),t.on("click",function(n){e.$emit("map-click",t,n)}),t.on("contextmenu",function(n){e.$emit("map-contextmenu",t,n)}),t.on("resize",function(){e.$emit("map-resize",t)}),t.on("webglcontextlost",function(n){e.$emit("map-webglcontextlost",t,n)}),t.on("webglcontextrestored",function(n){e.$emit("map-webglcontextrestored",t,n)}),t.on("remove",function(){e.$emit("map-remove",t)}),t.on("sourcedataloading",function(n){e.$emit("map-sourcedataloading",t,n)}),t.on("touchstart",function(n){e.$emit("map-touchstart",t,n)}),t.on("movestart",function(n){e.$emit("map-movestart",t,n)}),t.on("move",function(n){e.$emit("map-move",t,n)}),t.on("moveend",function(n){e.$emit("map-moveend",t,n)}),t.on("error",function(n){e.$emit("map-error",t,n)}),t.on("data",function(n){e.$emit("map-data",t,n)}),t.on("styledata",function(n){e.$emit("map-styledata",t,n)}),t.on("mouseup",function(n){e.$emit("map-mouseup",t,n)}),t.on("touchcancel",function(n){e.$emit("map-touchcancel",t,n)}),t.on("sourcedata",function(n){e.$emit("map-sourcedata",t,n)}),t.on("dataloading",function(n){e.$emit("map-dataloading",t,n)}),t.on("styledataloading",function(n){e.$emit("map-styledataloading",t,n)}),t.on("dblclick",function(n){e.$emit("map-dblclick",t,n)}),t.on("render",function(){e.$emit("map-render",t)}),t.on("mouseout",function(n){e.$emit("map-mouseout",t,n)}),t.on("mousedown",function(n){e.$emit("map-mousedown",t,n)}),t.on("mouseover",function(n){e.$emit("map-mouseover",t,n)}),t.on("touchend",function(n){e.$emit("map-touchend",t,n)}),t.on("touchmove",function(n){e.$emit("map-touchmove",t,n)}),t.on("zoomstart",function(n){e.$emit("map-zoomstart",t,n)}),t.on("zoomend",function(n){e.$emit("map-zoomend",t,n)}),t.on("zoom",function(n){e.$emit("map-zoom",t,n)}),t.on("boxzoomcancel",function(n){e.$emit("map-boxzoomcancel",t,n)}),t.on("boxzoomend",function(n){e.$emit("map-boxzoomend",t,n)}),t.on("boxzoomstart",function(n){e.$emit("map-boxzoomstart",t,n)}),t.on("rotatestart",function(n){e.$emit("map-rotatestart",t,n)}),t.on("rotate",function(n){e.$emit("map-rotate",t,n)}),t.on("rotateend",function(n){e.$emit("map-rotateend",t,n)}),t.on("dragend",function(n){e.$emit("map-dragend",t,n)}),t.on("drag",function(n){e.$emit("map-drag",t,n)}),t.on("dragstart",function(n){e.$emit("map-dragstart",t,n)}),t.on("pitch",function(n){e.$emit("map-pitch",t,n)}),t.on("pitchstart",function(n){e.$emit("map-pitchstart",t,n)}),t.on("pitchend",function(n){e.$emit("map-pitchend",t,n)})},addControls:function(t){var e=this;if(this.navControl.show){var n=new mapboxgl.NavigationControl;t.addControl(n,this.navControl.position)}if(this.geolocateControl.show){var o=new mapboxgl.GeolocateControl(this.geolocateControl.options);t.addControl(o,this.geolocateControl.position),o.on("geolocate",function(t){e.$emit("geolocate-geolocate",o,t)}),o.on("trackuserlocationstart",function(){e.$emit("geolocate-trackuserlocationstart",o)}),o.on("trackuserlocationend",function(){e.$emit("geolocate-trackuserlocationend",o)}),o.on("error",function(t){e.$emit("geolocate-error",o,t)})}if(this.scaleControl.show){var r=new mapboxgl.ScaleControl(this.scaleControl.options);t.addControl(r,this.scaleControl.position)}if(this.fullscreenControl.show){var i=new mapboxgl.FullscreenControl;t.addControl(i,this.fullscreenControl.position)}}},beforeDestroy:function(){this._map.remove()}}},function(t,e){t.exports=function(t,e,n,o,r,a){var s,c=t=t||{},u=i(t.default);"object"!==u&&"function"!==u||(s=t,c=t.default);var p="function"==typeof c?c.options:c;e&&(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0),n&&(p.functional=!0),r&&(p._scopeId=r);var l;if(a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},p._ssrRegister=l):o&&(l=o),l){var f=p.functional,d=f?p.render:p.beforeCreate;f?(p._injectStyles=l,p.render=function(t,e){return l.call(e),d(t,e)}):p.beforeCreate=d?[].concat(d,l):[l]}return{esModule:s,exports:c,options:p}}},function(t,e,n){var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:t.mapOptions.hasOwnProperty("container")?t.mapOptions.container:"map"}})},r=[];o._withStripped=!0;var i={render:o,staticRenderFns:r};e.a=i},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=n.n(o),i=n(2),a=n(1),s=a(r.a,i.a,!1,null,null,null);s.options.__file="src/components/Mapbox.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.default=s.exports}])})}).call(e,n(10)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Mapbox",{attrs:{"access-token":t.accessToken,"map-options":t.mapOptions,layers:t.layers}})],1)},r=[],i={render:o,staticRenderFns:r};e.a=i}]);