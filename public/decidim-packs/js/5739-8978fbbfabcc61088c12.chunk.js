"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5739],{55739:function(o,t,e){e.r(t),e.d(t,{f:function(){return a}});var n=e(97480);function r(o,t){return t.forEach((function(t){t&&"string"!==typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(e){if("default"!==e&&!(e in o)){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(o,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})}}))})),Object.freeze(o)}var i={exports:{}};!function(o){function t(t,n,i,f){if(i&&i.call){var a=i;i=null}else a=r(t,i,"rangeFinder");"number"==typeof n&&(n=o.Pos(n,0));var l=r(t,i,"minFoldSize");function u(o){var e=a(t,n);if(!e||e.to.line-e.from.line<l)return null;if("fold"===f)return e;for(var r=t.findMarksAt(e.from),i=0;i<r.length;++i)if(r[i].__isFold){if(!o)return null;e.cleared=!0,r[i].clear()}return e}var d=u(!0);if(r(t,i,"scanUp"))for(;!d&&n.line>t.firstLine();)n=o.Pos(n.line-1,0),d=u(!1);if(d&&!d.cleared&&"unfold"!==f){var c=e(t,i,d);o.on(c,"mousedown",(function(t){s.clear(),o.e_preventDefault(t)}));var s=t.markText(d.from,d.to,{replacedWith:c,clearOnEnter:r(t,i,"clearOnEnter"),__isFold:!0});s.on("clear",(function(e,n){o.signal(t,"unfold",t,e,n)})),o.signal(t,"fold",t,d.from,d.to)}}function e(o,t,e){var n=r(o,t,"widget");if("function"==typeof n&&(n=n(e.from,e.to)),"string"==typeof n){var i=document.createTextNode(n);(n=document.createElement("span")).appendChild(i),n.className="CodeMirror-foldmarker"}else n&&(n=n.cloneNode(!0));return n}o.newFoldFunction=function(o,e){return function(n,r){t(n,r,{rangeFinder:o,widget:e})}},o.defineExtension("foldCode",(function(o,e,n){t(this,o,e,n)})),o.defineExtension("isFolded",(function(o){for(var t=this.findMarksAt(o),e=0;e<t.length;++e)if(t[e].__isFold)return!0})),o.commands.toggleFold=function(o){o.foldCode(o.getCursor())},o.commands.fold=function(o){o.foldCode(o.getCursor(),null,"fold")},o.commands.unfold=function(o){o.foldCode(o.getCursor(),{scanUp:!1},"unfold")},o.commands.foldAll=function(t){t.operation((function(){for(var e=t.firstLine(),n=t.lastLine();e<=n;e++)t.foldCode(o.Pos(e,0),{scanUp:!1},"fold")}))},o.commands.unfoldAll=function(t){t.operation((function(){for(var e=t.firstLine(),n=t.lastLine();e<=n;e++)t.foldCode(o.Pos(e,0),{scanUp:!1},"unfold")}))},o.registerHelper("fold","combine",(function(){var o=Array.prototype.slice.call(arguments,0);return function(t,e){for(var n=0;n<o.length;++n){var r=o[n](t,e);if(r)return r}}})),o.registerHelper("fold","auto",(function(o,t){for(var e=o.getHelpers(t,"fold"),n=0;n<e.length;n++){var r=e[n](o,t);if(r)return r}}));var n={rangeFinder:o.fold.auto,widget:"\u2194",minFoldSize:0,scanUp:!1,clearOnEnter:!0};function r(o,t,e){if(t&&void 0!==t[e])return t[e];var r=o.options.foldOptions;return r&&void 0!==r[e]?r[e]:n[e]}o.defineOption("foldOptions",null),o.defineExtension("foldOption",(function(o,t){return r(this,o,t)}))}(n.a.exports),function(o){o.defineOption("foldGutter",!1,(function(t,r,i){i&&i!=o.Init&&(t.clearGutter(t.state.foldGutter.options.gutter),t.state.foldGutter=null,t.off("gutterClick",u),t.off("changes",d),t.off("viewportChange",c),t.off("fold",s),t.off("unfold",s),t.off("swapDoc",d)),r&&(t.state.foldGutter=new e(n(r)),l(t),t.on("gutterClick",u),t.on("changes",d),t.on("viewportChange",c),t.on("fold",s),t.on("unfold",s),t.on("swapDoc",d))}));var t=o.Pos;function e(o){this.options=o,this.from=this.to=0}function n(o){return!0===o&&(o={}),null==o.gutter&&(o.gutter="CodeMirror-foldgutter"),null==o.indicatorOpen&&(o.indicatorOpen="CodeMirror-foldgutter-open"),null==o.indicatorFolded&&(o.indicatorFolded="CodeMirror-foldgutter-folded"),o}function r(o,e){for(var n=o.findMarks(t(e,0),t(e+1,0)),r=0;r<n.length;++r)if(n[r].__isFold){var i=n[r].find(-1);if(i&&i.line===e)return n[r]}}function i(o){if("string"==typeof o){var t=document.createElement("div");return t.className=o+" CodeMirror-guttermarker-subtle",t}return o.cloneNode(!0)}function f(o,e,n){var f=o.state.foldGutter.options,l=e-1,u=o.foldOption(f,"minFoldSize"),d=o.foldOption(f,"rangeFinder"),c="string"==typeof f.indicatorFolded&&a(f.indicatorFolded),s="string"==typeof f.indicatorOpen&&a(f.indicatorOpen);o.eachLine(e,n,(function(e){++l;var n=null,a=e.gutterMarkers;if(a&&(a=a[f.gutter]),r(o,l)){if(c&&a&&c.test(a.className))return;n=i(f.indicatorFolded)}else{var p=t(l,0),g=d&&d(o,p);if(g&&g.to.line-g.from.line>=u){if(s&&a&&s.test(a.className))return;n=i(f.indicatorOpen)}}(n||a)&&o.setGutterMarker(e,f.gutter,n)}))}function a(o){return new RegExp("(^|\\s)"+o+"(?:$|\\s)\\s*")}function l(o){var t=o.getViewport(),e=o.state.foldGutter;e&&(o.operation((function(){f(o,t.from,t.to)})),e.from=t.from,e.to=t.to)}function u(o,e,n){var i=o.state.foldGutter;if(i){var f=i.options;if(n==f.gutter){var a=r(o,e);a?a.clear():o.foldCode(t(e,0),f)}}}function d(o){var t=o.state.foldGutter;if(t){var e=t.options;t.from=t.to=0,clearTimeout(t.changeUpdate),t.changeUpdate=setTimeout((function(){l(o)}),e.foldOnChangeTimeSpan||600)}}function c(o){var t=o.state.foldGutter;if(t){var e=t.options;clearTimeout(t.changeUpdate),t.changeUpdate=setTimeout((function(){var e=o.getViewport();t.from==t.to||e.from-t.to>20||t.from-e.to>20?l(o):o.operation((function(){e.from<t.from&&(f(o,e.from,t.from),t.from=e.from),e.to>t.to&&(f(o,t.to,e.to),t.to=e.to)}))}),e.updateViewportTimeSpan||400)}}function s(o,t){var e=o.state.foldGutter;if(e){var n=t.line;n>=e.from&&n<e.to&&f(o,n,n+1)}}}(n.a.exports);var f=i.exports,a=Object.freeze(r({__proto__:null,[Symbol.toStringTag]:"Module",default:f},[i.exports]))}}]);
//# sourceMappingURL=5739-8978fbbfabcc61088c12.chunk.js.map