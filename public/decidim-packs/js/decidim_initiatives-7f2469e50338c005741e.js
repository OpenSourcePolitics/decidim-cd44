!function(){var e,t={67966:function(e,t,n){var r={"./decidim/gamification/badges/decidim_gamification_badges_initiatives.svg":62854,"./decidim/initiatives/decidim_initiatives.svg":60599};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=67966},16028:function(e,t,n){"use strict";var r=Quill.import("parchment"),i=Quill.import("delta"),o=function(e){return Object.keys(e.format).reduce((function(t,n){return r.query(n,11)&&!Array.isArray(e.format[n])&&(t[n]=e.format[n]),t}),{})},u=function(e,t,n){Object.keys(t.format).forEach((function(r){"undefined"!==typeof n[r]&&null!==n[r]||Array.isArray(t.format[r])||"link"!==r&&e.format(r,t.format[r],Quill.sources.USER)}))};function l(e){e.keyboard.addBinding({key:13,shiftKey:!0},(function(t,n){!function(e,t,n){var r,l,a,c,s=e.getLeaf(t.index)[0],f=e.getLeaf(t.index+1)[0],d=e.getText(t.index-1,1),p=e.getFormat(t.index);if("A"===(null===s||void 0===s||null===(r=s.next)||void 0===r||null===(l=r.domNode)||void 0===l?void 0:l.tagName)||"A"===(null===f||void 0===f||null===(a=f.parent)||void 0===a||null===(c=a.domNode)||void 0===c?void 0:c.tagName)?(e.insertEmbed(t.index,"break",!0,"user"),e.removeFormat(t.index,1,Quill.sources.SILENT)):e.insertEmbed(t.index,"break",!0,"user"),null===f)e.insertEmbed(t.index,"break",!0,"user");else if(1===n.offset&&"\n"===d){var y=(new i).retain(t.index).insert("\n");e.updateContents(y,Quill.sources.USER)}Object.keys(p).forEach((function(t){e.format(t,n.format[t],Quill.sources.USER)})),e.setSelection(t.index+1,Quill.sources.SILENT);var h=o(n);u(e,n,h)}(e,t,n)})),e.keyboard.bindings[13].unshift(e.keyboard.bindings[13].pop()),e.keyboard.addBinding({key:13,shiftKey:!1},(function(t,n){var r=o(n),l=e.getText(t.index-1,1),a=e.getText(t.index,1),c=(new i).retain(t.index).insert("\n",r);if(""===l||"\n"===l)if(r.list&&"\n"===a)if(e.getLength()-t.index>2){var s=(new i).retain(t.index-1).delete(1);e.updateContents(s,Quill.sources.USER)}else{var f=(new i).retain(t.index-1).delete(1).retain(t.index).insert("\n");e.updateContents(f,Quill.sources.USER),e.setSelection(t.index+1,Quill.sources.SILENT)}else e.updateContents(c,Quill.sources.USER),1===n.offset&&"\n"===l?e.setSelection(t.index+1,Quill.sources.SILENT):e.setSelection(t.index+2,Quill.sources.SILENT);else e.updateContents(c,Quill.sources.USER),e.setSelection(t.index+1,Quill.sources.SILENT);e.focus(),u(e,n,r)})),e.keyboard.bindings[13].unshift(e.keyboard.bindings[13].pop())}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){var n=e,r=t;"object"!==a(n)&&(n={}),"object"!==a(r)&&(r={});var i=Object.keys(n).concat(Object.keys(r)).reduce((function(e,t){return n[t]!==r[t]&&(e[t]=null,r[t]&&(e[t]=r[t])),e}),{});return Object.keys(i).length>0?i:null}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],u=!0,l=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);u=!0);}catch(a){l=!0,i=a}finally{try{u||null==n.return||n.return()}finally{if(l)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],u=!0,l=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);u=!0);}catch(a){l=!0,i=a}finally{try{u||null==n.return||n.return()}finally{if(l)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=Quill.import("delta"),h=function(e,t){return e.getText(t.index-1,1)},b=function(e,t){return e.getText(t.index,1)};function m(e){e.keyboard.addBinding({key:8,offset:1,collapsed:!0},(function(t,n){var r=1;if(/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(n.prefix)&&(r=2),!(0===t.index||e.getLength()<=1)){var i={},o=d(e.getLine(t.index),1)[0],u=(new y).retain(t.index-r).delete(r);if(1===n.offset&&"\n"===h(e,t)){var l=d(e.getLine(t.index-2),1)[0];if(l&&"list-item"===l.statics.blotName){if(i=function(e,t){var n=e.getText(t.index-3,1);"\n"===b(e,t)||"\n"!==n?e.setSelection(t.index-1,Quill.sources.SILENT):e.setSelection(t.index-3,Quill.sources.SILENT)}(e,t),null!==l&&l.length()>1)i=c(o.formats(),e.getFormat(t.index-2,1))||{},r+=1;u=(new y).retain(t.index-2).delete(2),function(e,t){var n=e.getText(t.index-3,1);"\n"===b(e,t)||"\n"!==n?e.setSelection(t.index-1,Quill.sources.SILENT):e.setSelection(t.index-3,Quill.sources.SILENT)}(e,t)}else u=(new y).retain(t.index-1).delete(1),t.index<2?u=(new y).delete(1).retain(t.index+o.length()-1):"\n"===h(e,t)&&"\n"===function(e,t){return e.getText(t.index-2,1)}(e,t)&&(u=(new y).retain(t.index-2).delete(2))}else{var a=d(e.getLine(t.index-1),1)[0];if(a)if(!("block"===a.statics.blotName&&a.length()<=1))if(i=c(o.formats(),e.getFormat(t.index-1,1))||{},Object.keys(i).length>0){var s=(new y).retain(t.index+o.length()-2).retain(1,i);u=u.compose(s)}}e.updateContents(u,Quill.sources.USER),Object.keys(i).length>0&&e.formatLine(t.index-r,r,i,Quill.sources.USER),e.focus()}})),e.keyboard.bindings[8].splice(1,0,e.keyboard.bindings[8].pop())}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var i=E(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return S(this,n)}}function S(e,t){if(t&&("object"===g(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var w=Quill.import("modules/history");w.DEFAULTS={delay:1e3,maxStack:100,userOnly:!0};var j=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(o,e);var t,n,r,i=k(o);function o(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(n=i.call(this,e,t)).lastRecorded=0,n.ignoreChange=!1,n.init=!1,n.quill.emitter.on("editor-ready",(function(){n.clear();var e=$(n.quill.container).siblings('input[type="hidden"]');n.stack.undo.push({content:e.val()||"",index:n.quill.getLength()-2}),n.lastLength=n.quill.getLength()})),n.quill.on(Quill.events.EDITOR_CHANGE,(function(e,t,r,i){t&&(n.init||"selection-change"!==e||(n.stack.undo[0].index=t.index),e!==Quill.events.TEXT_CHANGE||n.ignoreChange||n.options.userOnly&&i!==Quill.sources.USER||n.record(t,r))})),n.quill.keyboard.addBinding({key:"Z",shortKey:!0},n.undo.bind(O(n))),n.quill.keyboard.addBinding({key:"Z",shortKey:!0,shiftKey:!0},n.redo.bind(O(n))),/Win/i.test(navigator.platform)&&n.quill.keyboard.addBinding({key:"Y",shortKey:!0},n.redo.bind(O(n))),n}return t=o,(n=[{key:"change",value:function(e,t){if(0!==this.stack[e].length){var n=this.updateStacks(e,t);if(n.content){n.index||(n.index=0),this.lastRecorded=0,this.ignoreChange=!0,this.quill.setContents(this.quill.clipboard.convert(n.content)),this.ignoreChange=!1;var r=n.index;this.quill.setSelection(r)}}}},{key:"updateStacks",value:function(e,t){if("undo"===e)return 1===this.stack.undo.length?this.stack.undo[0]:(this.stack[t].push(this.stack.undo.pop()),this.stack.undo[this.stack.undo.length-1]);var n=this.stack.redo.pop();return this.stack.undo.push(n),n}},{key:"record",value:function(e){if(0!==e.ops.length){this.init||(this.init=!0),this.stack.redo=[];var t=Date.now();Math.abs(this.lastLength===this.quill.getLength())||this.lastRecorded+this.options.delay>t?this.stack.undo.length>1&&this.stack.undo.pop():(this.lastLength=this.quill.getLength(),this.lastRecorded+this.options.delay<=t&&(this.lastRecorded=t)),this.stack.undo.push({content:this.quill.container.firstChild.innerHTML,index:this.quill.getSelection()})}}},{key:"transform",value:function(){}}])&&v(t.prototype,n),r&&v(t,r),Object.defineProperty(t,"prototype",{writable:!1}),o}(w);function Q(e){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}function T(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function A(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var i=P(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return U(this,n)}}function U(e,t){if(t&&("object"===Q(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}Quill.debug("error");var F=Quill.import("delta"),q=Quill.import("blots/break"),D=Quill.import("blots/embed"),B=Quill.import("blots/scroll"),K=Quill.import("parchment");Quill.register({"modules/history":j},!0),Quill.import("ui/icons").linebreak="\u23ce";var M=function(e){A(n,e);var t=I(n);function n(){return R(this,n),t.apply(this,arguments)}return N(n,[{key:"length",value:function(){return 1}},{key:"value",value:function(){return"\n"}},{key:"insertInto",value:function(e,t){Reflect.apply(D.prototype.insertInto,this,[e,t])}}]),n}(q);Quill.register(M);var z=function(e){A(n,e);var t=I(n);function n(){return R(this,n),t.apply(this,arguments)}return N(n,[{key:"optimize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!0!==this.batch&&(this.parchmentOptimize(e,t),e.length>0&&this.emitter.emit("scroll-optimize",e,t))}},{key:"parchmentOptimize",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Reflect.apply(K.Container.prototype.optimize,this,[n]);for(var r=T(this.observer.takeRecords());r.length>0;)t.push(r.pop());for(var i=function t(n,r){n&&n!==e&&n.domNode.parentNode&&(n.domNode.__blot&&null===n.domNode.__blot.mutations&&(n.domNode.__blot.mutations=[]),r&&t(n.parent))},o=function e(t){t.domNode.__blot&&(t instanceof K.Container&&t.children.forEach(e),t.optimize(n))},u=t,l=0;u.length>0;l+=1){if(l>=100)throw new Error("[Parchment] Maximum optimize iterations reached");for(u.forEach((function(e){var t=K.find(e.target,!0);t&&(t.domNode===e.target&&("childList"===e.type?(i(K.find(e.previousSibling,!1)),e.addedNodes.forEach((function(e){var t=K.find(e,!1);i(t,!1),t instanceof K.Container&&t.children.forEach((function(e){i(e,!1)}))}))):"attributes"===e.type&&i(t.prev)),i(t))})),this.children.forEach(o),r=(u=T(this.observer.takeRecords())).slice();r.length>0;)t.push(r.pop())}}}]),n}(B);Quill.register("blots/scroll",z,!0),K.register(z),Quill.register("modules/linebreak",(function(e){e.getModule("toolbar").addHandler("linebreak",(function(){!function(e){var t=e.selection.getRange()[0],n=e.getLeaf(t.index)[0],r=e.getLeaf(t.index+1)[0],i=e.getText(t.index-1,1);if(null===r||n.parent!==r.parent)e.insertEmbed(t.index,"break",!0,"user"),e.insertEmbed(t.index,"break",!0,"user");else if("\n"===i){var o=(new F).retain(t.index).insert("\n");e.updateContents(o,Quill.sources.USER)}else e.insertEmbed(t.index,"break",!0,"user");e.setSelection(t.index+1,Quill.sources.SILENT)}(e)})),e.emitter.on("editor-ready",(function(){var t=e.getLength();"\n\n"===e.getText(t-2,2)&&e.deleteText(e.getLength()-2,2)})),e.clipboard.addMatcher("BR",(function(e){var t;return"A"===(null===e||void 0===e||null===(t=e.parentNode)||void 0===t?void 0:t.tagName)?(new F).insert("\n"):(new F).insert({break:""})})),l(e),function(e){e.keyboard.addBinding({key:8,altKey:null,ctrlKey:null,metaKey:null,shiftKey:null,collapsed:!0},(function(t,n){var r=1;if(!(0===t.index||e.getLength()<=1)){var i=s(e.getLine(t.index),1)[0],o={};if(0===n.offset){var u=s(e.getLine(t.index-1),1)[0];if(null!==u&&u.length()>1){var l=i.formats(),a=e.getFormat(t.index-1,1);o=c(l,a)||{};var f=e.getLine(t.index-1)[1],d=e.getText(t.index-1,1),p=e.getText(t.index-2,1);f&&1===f&&"\n"===p&&(a&&a.list?e.setSelection(t.index-2,Quill.sources.SILENT):"\n"===d&&"\n"===p&&(r+=1))}}/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(n.prefix)&&(r+=1),e.deleteText(t.index-r,r,Quill.sources.USER),Object.keys(o).length>0&&e.formatLine(t.index-r,r,o,Quill.sources.USER),e.focus()}})),e.keyboard.bindings[8].splice(1,0,e.keyboard.bindings[8].pop())}(e),m(e)}));n(6877),n(80702);n(72191),n(71141);n(67966)},71141:function(){$((function(){var e=$("#select-identity-button"),t=$("#user-identities");if(t.length){var n=t.data("refresh-url");e.click((function(){$.ajax(n).done((function(e){t.html(e).foundation("open")}))}))}}))},72191:function(){var e=function(e,t,n){if(e.length){var r=e.data(n),i=e.data("".concat(t,"-search-url")),o=$("#".concat(e.data("".concat(t,"-selector"))));if(o.length){var u=function(){$.ajax({url:i,cache:!1,dataType:"html",data:{type_id:e.val(),selected:r},success:function(e){o.html(e)}})};e.change(u),u()}}};$((function(){var t=$("[data-scope-selector]");e(t,"scope","scope-id"),e(t,"signature-types","signature-type")}))},62854:function(e,t,n){"use strict";e.exports=n.p+"media/images/decidim_gamification_badges_initiatives-c956bd99a6da11e4c751.svg"},60599:function(e,t,n){"use strict";e.exports=n.p+"media/images/decidim_initiatives-8822c933216741c5fd30.svg"}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=t,e=[],r.O=function(t,n,i,o){if(!n){var u=1/0;for(s=0;s<e.length;s++){n=e[s][0],i=e[s][1],o=e[s][2];for(var l=!0,a=0;a<n.length;a++)(!1&o||u>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[a])}))?n.splice(a--,1):(l=!1,o<u&&(u=o));if(l){e.splice(s--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,i,o]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},r.p="/decidim-packs/",function(){var e={7982:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,u=n[0],l=n[1],a=n[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(i in l)r.o(l,i)&&(r.m[i]=l[i]);if(a)var s=a(r)}for(t&&t(n);c<u.length;c++)o=u[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(s)},n=self.webpackChunkapp=self.webpackChunkapp||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var i=r.O(void 0,[1532],(function(){return r(16028)}));i=r.O(i)}();
//# sourceMappingURL=decidim_initiatives-7f2469e50338c005741e.js.map