!function(){var e,t={65739:function(e,t,n){var r={"./decidim/decidim_awesome/platoniq-logo.png":28396};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=65739},53930:function(e,t,n){"use strict";n(53587);var r=n(37353),o=n.n(r);$((function(){if(window.DecidimAwesome=window.DecidimAwesome||{},window.DecidimAwesome.auto_save_forms){var e=window.DecidimAwesome.current_questionnaire;if(e){var t="awesome_autosave:".concat(e),n="awesome_autosave:checkboxes:".concat(e),r=$("form.answer-questionnaire");if(r.length){var i=new(o())("#".concat(r.attr("id")),{name:t,ignores:['[name="utf8"]','[name="authenticity_token"]',"[disabled]",'[type="checkbox"]']}),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:700,o=t?5e3:n,i=$('<div class="awesome_autosave-notice'.concat(t?" error":"",'">').concat(e,"</div>")).appendTo(r);setTimeout((function(){i.fadeOut(500,(function(){i.remove()}))}),o)};if(window.localStorage){window.localStorage.getItem(t)&&a(window.DecidimAwesome.texts.autosaved_retrieved,!1,5e3),i.apply();try{var c=JSON.parse(window.localStorage.getItem(n));for(var l in c)$("#".concat(l)).prop("checked",c[l])}catch(u){console.log("No checkboxes found")}r.find("input, textarea, select").on("change",(function(){!function(){i.save();var e={};r.find('input[type="checkbox"]').each((function(t,n){e[n.id]=n.checked})),window.localStorage.setItem(n,JSON.stringify(e)),a(window.DecidimAwesome.texts.autosaved_success)}()}))}else a(window.DecidimAwesome.texts.autosaved_error,!0)}else window.DecidimAwesome.questionnaire_answered&&(window.localStorage.removeItem(t),window.localStorage.removeItem(n))}}}));var i=n(28268),a=n(78153),c=n.n(a),l=n(97046),u=n.n(l),s=(n(75990),n(2299),n(96083),n(20637));n(7480),n(48300),n(41408);function d(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=window.DecidimAwesome||{},p=["bold","italic","link","underline","header","list","video","image","alt","break","width","style","code","blockquote","indent"];$((function(){(window.DecidimAwesome.allow_images_in_full_editor||window.DecidimAwesome.allow_images_in_small_editor||window.DecidimAwesome.use_markdown_editor)&&$(".editor-container").each((function(e,t){!function(e){if(e){var t=$(e).find(".ql-editor").html();$(e).html(t),$(e).siblings(".ql-toolbar").remove(),$(e).find("*[class*='ql-']").removeClass((function(e,t){return(t.match(/(^|\s)ql-\S+/g)||[]).join(" ")})),$(e).removeClass((function(e,t){return(t.match(/(^|\s)ql-\S+/g)||[]).join(" ")})),$(e).next().is("p.help-text")&&$(e).next().remove()}else console.error("editor [".concat(e,"] not exists"))}(t),window.DecidimAwesome.use_markdown_editor?function(e){var t=m.texts.drag_and_drop_image,n=$('meta[name="csrf-token"]').attr("content"),r=$(e).siblings('input[type="hidden"]'),o=$('<textarea name="faker-inscrybmde"/>'),i=$(e).closest("form"),a=new(u());o.val(a.convert(r.val())),o.insertBefore($(e)),$(e).hide();var l=new(c())({element:o[0],spellChecker:!1,renderingConfig:{codeSyntaxHighlighting:!0,hljs:s.Z}});o[0].InscrybMDE=l,m.allow_images_in_markdown_editor&&($(l.gui.statusbar).prepend('<span class="help-text" style="float:left;margin:0;text-align:left;">'.concat(t,"</span>")),inlineAttachment.editors.codemirror4.attach(l.codemirror,{uploadUrl:m.editor_uploader_path,uploadFieldName:"image",jsonFieldName:"url",extraHeaders:{"X-CSRF-Token":n}})),i.on("submit",(function(){r.val(l.markdown(l.value()))}))}(t):function(e){var t=$(e).data("toolbar"),n=$(e).data("disabled"),r=[["bold","italic","underline","linebreak"],[{list:"ordered"},{list:"bullet"}],["link","clean"],["code","blockquote"],[{indent:"-1"},{indent:"+1"}]],o=!1;"full"===t?(r=[[{header:[2,3,4,5,6,!1]}]].concat(d(r)),m.allow_images_in_full_editor?(r.push(["video","image"]),o=!0):r.push(["video"])):"basic"===t?m.allow_images_in_small_editor?(r.push(["video","image"]),o=!0):r.push(["video"]):m.allow_images_in_small_editor&&(r.push(["image"]),o=!0);var a={linebreak:{},toolbar:{container:r,handlers:{linebreak:i.Z}}},c=$(e).siblings('input[type="hidden"]');e.innerHTML=c.val()||"";var l=$('meta[name="csrf-token"]').attr("content");o&&(a.imageResize={modules:["Resize","DisplaySize"]},a.imageUpload={url:$(e).data("uploadImagesPath")||m.editor_uploader_path,method:"POST",name:"image",withCredentials:!1,headers:{"X-CSRF-Token":l},callbackOK:function(e,t){$("div.ql-toolbar").last().removeClass("editor-loading"),t(e.url)},callbackKO:function(e){$("div.ql-toolbar").last().removeClass("editor-loading"),console.error("Image upload error: ".concat(e.message))},checkBeforeSend:function(e,t){$("div.ql-toolbar").last().addClass("editor-loading"),t(e)}});var u=new Quill(e,{modules:a,formats:p,theme:"snow"});if(n&&u.disable(),u.on("text-change",(function(){var t=u.getText(),n=new CustomEvent("quill-position",{detail:u.getSelection()});e.dispatchEvent(n),"\n"===t||"\n\n"===t?c.val(""):c.val(u.root.innerHTML)})),u.emitter.emit("editor-ready"),o){var s=$(e).data("dragAndDropHelpText")||m.texts.drag_and_drop_image;$(e).after('<p class="help-text" style="margin-top:-1.5rem;">'.concat(s,"</p>"))}u.emitter.emit("editor-ready")}(t)}))})),n(65739)},53587:function(){$((function(){window.DecidimAwesome=window.DecidimAwesome||{};var e=$('meta[name="csrf-token"]').attr("content"),t=$("textarea#proposal_body"),n=window.DecidimAwesome.texts.drag_and_drop_image;t.length&&window.DecidimAwesome.allow_images_in_proposals&&(t.after('<p class="help-text">'.concat(n,"</p>")),t.inlineattachment({uploadUrl:window.DecidimAwesome.editor_uploader_path,uploadFieldName:"image",jsonFieldName:"url",progressText:"[Uploading file...]",urlText:"{filename}",extraHeaders:{"X-CSRF-Token":e}}))}))},44020:function(e){"use strict";var t="%[a-f0-9]{2}",n=new RegExp(t,"gi"),r=new RegExp("("+t+")+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(i){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],o(n),o(r))}function i(e){try{return decodeURIComponent(e)}catch(i){for(var t=e.match(n),r=1;r<t.length;r++)t=(e=o(t,r).join("")).match(n);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},o=r.exec(e);o;){try{n[o[0]]=decodeURIComponent(o[0])}catch(t){var a=i(o[0]);a!==o[0]&&(n[o[0]]=a)}o=r.exec(e)}n["%C2"]="\ufffd";for(var c=Object.keys(n),l=0;l<c.length;l++){var u=c[l];e=e.replace(new RegExp(u,"g"),n[u])}return e}(e)}}},63654:function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1})},7422:function(e){var t=/^(?:submit|button|image|reset|file)$/i,n=/^(?:input|select|textarea|keygen)/i,r=/(\[[^\[\]]*\])/g;function o(e,t,n){if(0===t.length)return e=n;var r=t.shift(),i=r.match(/^\[(.+?)\]$/);if("[]"===r)return e=e||[],Array.isArray(e)?e.push(o(null,t,n)):(e._values=e._values||[],e._values.push(o(null,t,n))),e;if(i){var a=i[1],c=+a;isNaN(c)?(e=e||{})[a]=o(e[a],t,n):(e=e||[])[c]=o(e[c],t,n)}else e[r]=o(e[r],t,n);return e}function i(e,t,n){if(t.match(r)){o(e,function(e){var t=[],n=new RegExp(r),o=/^([^\[\]]*)/.exec(e);for(o[1]&&t.push(o[1]);null!==(o=n.exec(e));)t.push(o[1]);return t}(t),n)}else{var i=e[t];i?(Array.isArray(i)||(e[t]=[i]),e[t].push(n)):e[t]=n}return e}function a(e,t,n){return n=n.replace(/(\r)?\n/g,"\r\n"),n=(n=encodeURIComponent(n)).replace(/%20/g,"+"),e+(e?"&":"")+encodeURIComponent(t)+"="+n}e.exports=function(e,r){"object"!=typeof r?r={hash:!!r}:void 0===r.hash&&(r.hash=!0);for(var o=r.hash?{}:"",c=r.serializer||(r.hash?i:a),l=e&&e.elements?e.elements:[],u=Object.create(null),s=0;s<l.length;++s){var d=l[s];if((r.disabled||!d.disabled)&&d.name&&(n.test(d.nodeName)&&!t.test(d.type))){var f=d.name,m=d.value;if("checkbox"!==d.type&&"radio"!==d.type||d.checked||(m=void 0),r.empty){if("checkbox"!==d.type||d.checked||(m=""),"radio"===d.type&&(u[d.name]||d.checked?d.checked&&(u[d.name]=!0):u[d.name]=!1),void 0==m&&"radio"==d.type)continue}else if(!m)continue;if("select-multiple"!==d.type)o=c(o,f,m);else{m=[];for(var p=d.options,h=!1,v=0;v<p.length;++v){var y=p[v],g=r.empty&&!y.value,w=y.value||g;y.selected&&w&&(h=!0,o=r.hash&&"[]"!==f.slice(f.length-2)?c(o,f+"[]",y.value):c(o,f,y.value))}!h&&r.empty&&(o=c(o,f,""))}}}if(r.empty)for(var f in u)u[f]||(o=c(o,f,""));return o}},37353:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(63654);var o=a(n(7422)),i=a(n(61520));function a(e){return e&&e.__esModule?e:{default:e}}var c={name:"form",ignores:[],includes:[],checkbox:null},l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ele=document.querySelector(t),this.opt=Object.assign({},c,n),this.opt.checkbox&&(this.checkbox=document.querySelector(this.opt.checkbox),this.setCheckbox(),this.apply())}return r(e,[{key:"save",value:function(){var e=(0,o.default)(this.ele);window.localStorage.setItem(this.opt.name,e)}},{key:"clear",value:function(){window.localStorage.removeItem(this.opt.name)}},{key:"setCheckbox",value:function(){var e=this;this.ele.addEventListener("submit",(function(){e.checkbox.checked?e.save():e.clear()}))}},{key:"getState",value:function(){return(0,o.default)(this.ele)}},{key:"applyState",value:function(e){var t=this,n=this.opt,r=n.ignores,o=n.includes,a=i.default.parse(e.replace(/^"(.*)"$/,"$1")),c=function(e){var n=!1,i=t.ele.querySelector('[name="'+e+'"]'),c=t.ele.querySelectorAll('[name="'+e+'"]');if(!i)return"continue";if(r.forEach((function(e){if(i.matches(e))return n=!0,!1})),n)return"continue";if(o.length>0&&(n=!0,o.forEach((function(e){if(i.matches(e))return n=!1,!1})),n))return"continue";if(c&&c.length>1){var l=a[e];return[].forEach.call(c,(function(e,t){"checkbox"===e.type?l.forEach?l.forEach((function(t){t===e.value&&(e.checked=!0)})):l===e.value&&(e.checked=!0):"radio"===e.type&&e.value===l&&(e.checked=!0)})),"continue"}"radio"===i.type||"checkbox"===i.type?a[e]===i.value&&(i.checked=!0):i.value=a[e]};for(var l in a)c(l)}},{key:"apply",value:function(){var e=window.localStorage.getItem(this.opt.name);e&&this.applyState(e)}}]),e}();t.default=l,e.exports=t.default},61520:function(e,t,n){"use strict";var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e){return i(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))},a=n(44020);function c(e,t){return t.encode?t.strict?strictUriEncode(e):i(e):e}function l(e,t){return t.decode?a(e):e}function u(e){return Array.isArray(e)?e.sort():"object"===("undefined"===typeof e?"undefined":o(e))?u(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function s(e){var t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function d(e,t){var n=function(e){var t=void 0;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=Object.assign({decode:!0,arrayFormat:"none"},t)),i=Object.create(null);if("string"!==typeof e)return i;if(!(e=e.trim().replace(/^[?#&]/,"")))return i;var a=!0,c=!1,s=void 0;try{for(var d,f=e.split("&")[Symbol.iterator]();!(a=(d=f.next()).done);a=!0){var m=d.value.replace(/\+/g," ").split("="),p=r(m,2),h=p[0],v=p[1];v=void 0===v?null:l(v,t),n(l(h,t),v,i)}}catch(y){c=!0,s=y}finally{try{!a&&f.return&&f.return()}finally{if(c)throw s}}return Object.keys(i).sort().reduce((function(e,t){var n=i[t];return Boolean(n)&&"object"===("undefined"===typeof n?"undefined":o(n))&&!Array.isArray(n)?e[t]=u(n):e[t]=n,e}),Object.create(null))}t.extract=s,t.parse=d,t.stringify=function(e,t){!1===(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)).sort&&(t.sort=function(){});var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[c(t,e),"[",r,"]"].join(""):[c(t,e),"[",c(r,e),"]=",c(n,e)].join("")};case"bracket":return function(t,n){return null===n?[c(t,e),"[]"].join(""):[c(t,e),"[]=",c(n,e)].join("")};default:return function(t,n){return null===n?c(t,e):[c(t,e),"=",c(n,e)].join("")}}}(t);return e?Object.keys(e).sort(t.sort).map((function(r){var o=e[r];if(void 0===o)return"";if(null===o)return c(r,t);if(Array.isArray(o)){var i=[],a=!0,l=!1,u=void 0;try{for(var s,d=o.slice()[Symbol.iterator]();!(a=(s=d.next()).done);a=!0){var f=s.value;void 0!==f&&i.push(n(r,f,i.length))}}catch(m){l=!0,u=m}finally{try{!a&&d.return&&d.return()}finally{if(l)throw u}}return i.join("&")}return c(r,t)+"="+c(o,t)})).filter((function(e){return e.length>0})).join("&"):""},t.parseUrl=function(e,t){return{url:e.split("?")[0]||"",query:d(s(e),t)}}},28396:function(e,t,n){"use strict";e.exports=n.p+"media/images/platoniq-logo-5439008eeac5e5428475.png"}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=t,e=[],r.O=function(t,n,o,i){if(!n){var a=1/0;for(s=0;s<e.length;s++){n=e[s][0],o=e[s][1],i=e[s][2];for(var c=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(c=!1,i<a&&(a=i));if(c){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,o,i]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},r.p="/decidim-packs/",function(){var e={9068:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,a=n[0],c=n[1],l=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(l)var s=l(r)}for(t&&t(n);u<a.length;u++)i=a[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(s)},n=self.webpackChunkapp=self.webpackChunkapp||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[7661,2952,8268,4301],(function(){return r(53930)}));o=r.O(o)}();
//# sourceMappingURL=decidim_decidim_awesome-bcc07b2347cda2daf7f6.js.map