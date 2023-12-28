!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(k){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=L(a,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}r.wrap=f;var h={};function p(){}function d(){}function y(){}var v={};l(v,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==n&&o.call(g,a)&&(v=g);var w=y.prototype=p.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,r){function n(i,a,u,c){var l=s(e[i],e,a);if("throw"!==l.type){var f=l.arg,h=f.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(h).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=y,l(w,"constructor",y),l(y,"constructor",d),d.displayName=l(y,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,u,(function(){return this})),r.AsyncIterator=x,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new x(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}System.register(["./index-legacy.492b6ebd.js","./base-legacy.28cad0e5.js","./dialog-legacy.dfba30ef.js","./overlay-legacy.7c160b60.js","./button-legacy.96a0013c.js","./index-legacy.d5045c51.js","./scroll-legacy.0bcf8f62.js","./focus-trap-legacy.be7f3f75.js","./refs-legacy.309a8508.js","./event-legacy.39ad8904.js"],(function(t,n){"use strict";var o,i,a,u,c,l,f,s,h,p,d,y,v,m;return{setters:[function(t){o=t.X,i=t._,a=t.r,u=t.o,c=t.a,l=t.b,f=t.e,s=t.m,h=t.j,p=t.O,d=t.u,y=t.P},function(t){v=t.D},function(t){m=t.E},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var g={class:"dialog-footer"};t("default",{__name:"readme-editor-dialog",props:{visible:{type:Boolean,required:!0},title:{type:String,default:""},modelValue:{type:String,default:""}},emits:["update:modelValue","update:visible"],setup:function(t,w){var b=w.emit,x=t,L=o((function(){return new Promise((function(t,o){var a;(a=e().mark((function r(){var a,u,c;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i((function(){return n.import("./base-editor-legacy.410912eb.js").then((function(t){return t.b}))}),void 0);case 3:return a=e.sent,e.next=6,i((function(){return n.import("./base-editor-legacy.3e59db2b.js")}),void 0);case 6:return e.next=8,i((function(){return n.import("./vuepress-legacy.8fbe8168.js")}),void 0);case 8:return e.next=10,i((function(){return n.import("./vuepress-legacy.1caa391f.js").then((function(t){return t.v}))}),void 0);case 10:return u=e.sent,e.next=13,i((function(){return n.import("./prism-legacy.f70e0815.js").then((function(t){return t.p}))}),void 0);case 13:c=e.sent,a.use(u,{Prism:c}),t(a),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),o(e.t0);case 21:case"end":return e.stop()}}),r,null,[[0,18]])})),function(){var t=this,e=arguments;return new Promise((function(n,o){var i=a.apply(t,e);function u(t){r(i,n,o,u,c,"next",t)}function c(t){r(i,n,o,u,c,"throw",t)}u(void 0)}))})()}))})),j=a("");u((function(){j.value=x.modelValue}));var E=function(){b("update:visible",!1)},_=function(){b("update:modelValue",j.value),b("update:visible",!1)};return function(t,e){var r=v,n=m;return c(),l(n,{modelValue:true,"onUpdate:modelValue":e[1]||(e[1]=function(t){return function(t){throw new TypeError('"'+t+'" is read-only')}("isShow")}),"destroy-on-close":!0,onClose:E,title:x.title,"show-close":!1,draggable:"",top:"5vh",width:"80%"},{footer:f((function(){return[s("span",g,[h(r,{onClick:E},{default:f((function(){return[p("取消")]})),_:1}),h(r,{type:"primary",onClick:_},{default:f((function(){return[p("保存")]})),_:1})])]})),default:f((function(){return[h(d(L),{modelValue:d(j),"onUpdate:modelValue":e[0]||(e[0]=function(t){return y(j)?j.value=t:null}),height:"70vh"},null,8,["modelValue"])]})),_:1},8,["title"])}}})}}}))}();
