"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[845],{60845:function(e,t,n){function r(e,t){return t.forEach((function(t){t&&"string"!==typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(e)}n.r(t),n.d(t,{c:function(){return s}});var i={exports:{}};!function(e){var t={pairs:"()[]{}''\"\"",closeBefore:")]}'\":;>",triples:"",explode:"[]{}"},n=e.Pos;function r(e,n){return"pairs"==n&&"string"==typeof e?e:"object"==typeof e&&null!=e[n]?e[n]:t[n]}e.defineOption("autoCloseBrackets",!1,(function(t,n,s){s&&s!=e.Init&&(t.removeKeyMap(i),t.state.closeBrackets=null),n&&(a(r(n,"pairs")),t.state.closeBrackets=n,t.addKeyMap(i))}));var i={Backspace:l,Enter:c};function a(e){for(var t=0;t<e.length;t++){var n=e.charAt(t),r="'"+n+"'";i[r]||(i[r]=s(n))}}function s(e){return function(t){return h(t,e)}}function o(e){var t=e.state.closeBrackets;return!t||t.override?t:e.getModeAt(e.getCursor()).closeBrackets||t}function l(t){var i=o(t);if(!i||t.getOption("disableInput"))return e.Pass;for(var a=r(i,"pairs"),s=t.listSelections(),l=0;l<s.length;l++){if(!s[l].empty())return e.Pass;var c=p(t,s[l].head);if(!c||a.indexOf(c)%2!=0)return e.Pass}for(l=s.length-1;l>=0;l--){var f=s[l].head;t.replaceRange("",n(f.line,f.ch-1),n(f.line,f.ch+1),"+delete")}}function c(t){var n=o(t),i=n&&r(n,"explode");if(!i||t.getOption("disableInput"))return e.Pass;for(var a=t.listSelections(),s=0;s<a.length;s++){if(!a[s].empty())return e.Pass;var l=p(t,a[s].head);if(!l||i.indexOf(l)%2!=0)return e.Pass}t.operation((function(){var e=t.lineSeparator()||"\n";t.replaceSelection(e+e,null),f(t,-1),a=t.listSelections();for(var n=0;n<a.length;n++){var r=a[n].head.line;t.indentLine(r,null,!0),t.indentLine(r+1,null,!0)}}))}function f(e,t){for(var n=[],r=e.listSelections(),i=0,a=0;a<r.length;a++){var s=r[a];s.head==e.getCursor()&&(i=a);var o=s.head.ch||t>0?{line:s.head.line,ch:s.head.ch+t}:{line:s.head.line-1};n.push({anchor:o,head:o})}e.setSelections(n,i)}function u(t){var r=e.cmpPos(t.anchor,t.head)>0;return{anchor:new n(t.anchor.line,t.anchor.ch+(r?-1:1)),head:new n(t.head.line,t.head.ch+(r?1:-1))}}function h(t,i){var a=o(t);if(!a||t.getOption("disableInput"))return e.Pass;var s=r(a,"pairs"),l=s.indexOf(i);if(-1==l)return e.Pass;for(var c,h=r(a,"closeBefore"),p=r(a,"triples"),g=s.charAt(l+1)==i,v=t.listSelections(),b=l%2==0,k=0;k<v.length;k++){var y,O=v[k],P=O.head,S=t.getRange(P,n(P.line,P.ch+1));if(b&&!O.empty())y="surround";else if(!g&&b||S!=i)if(g&&P.ch>1&&p.indexOf(i)>=0&&t.getRange(n(P.line,P.ch-2),P)==i+i){if(P.ch>2&&/\bstring/.test(t.getTokenTypeAt(n(P.line,P.ch-2))))return e.Pass;y="addFour"}else if(g){var x=0==P.ch?" ":t.getRange(n(P.line,P.ch-1),P);if(e.isWordChar(S)||x==i||e.isWordChar(x))return e.Pass;y="both"}else{if(!b||!(0===S.length||/\s/.test(S)||h.indexOf(S)>-1))return e.Pass;y="both"}else y=g&&d(t,P)?"both":p.indexOf(i)>=0&&t.getRange(P,n(P.line,P.ch+3))==i+i+i?"skipThree":"skip";if(c){if(c!=y)return e.Pass}else c=y}var A=l%2?s.charAt(l-1):i,B=l%2?i:s.charAt(l+1);t.operation((function(){if("skip"==c)f(t,1);else if("skipThree"==c)f(t,3);else if("surround"==c){for(var e=t.getSelections(),n=0;n<e.length;n++)e[n]=A+e[n]+B;for(t.replaceSelections(e,"around"),e=t.listSelections().slice(),n=0;n<e.length;n++)e[n]=u(e[n]);t.setSelections(e)}else"both"==c?(t.replaceSelection(A+B,null),t.triggerElectric(A+B),f(t,-1)):"addFour"==c&&(t.replaceSelection(A+A+A+A,"before"),f(t,1))}))}function p(e,t){var r=e.getRange(n(t.line,t.ch-1),n(t.line,t.ch+1));return 2==r.length?r:null}function d(e,t){var r=e.getTokenAt(n(t.line,t.ch+1));return/\bstring/.test(r.type)&&r.start==t.ch&&(0==t.ch||!/\bstring/.test(e.getTokenTypeAt(t)))}a(t.pairs+"`")}(n(97480).a.exports);var a=i.exports,s=Object.freeze(r({__proto__:null,[Symbol.toStringTag]:"Module",default:a},[i.exports]))}}]);
//# sourceMappingURL=845-5ed63b6545a12ee3c035.chunk.js.map