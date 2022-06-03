"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[941],{50045:function(e,t,n){n.d(t,{C:function(){return r},P:function(){return i},R:function(){return a}});class r{constructor(e){this.getStartOfToken=()=>this._start,this.getCurrentPosition=()=>this._pos,this.eol=()=>this._sourceText.length===this._pos,this.sol=()=>0===this._pos,this.peek=()=>this._sourceText.charAt(this._pos)?this._sourceText.charAt(this._pos):null,this.next=()=>{const e=this._sourceText.charAt(this._pos);return this._pos++,e},this.eat=e=>{if(this._testNextCharacter(e))return this._start=this._pos,this._pos++,this._sourceText.charAt(this._pos-1)},this.eatWhile=e=>{let t=this._testNextCharacter(e),n=!1;for(t&&(n=t,this._start=this._pos);t;)this._pos++,t=this._testNextCharacter(e),n=!0;return n},this.eatSpace=()=>this.eatWhile(/[\s\u00a0]/),this.skipToEnd=()=>{this._pos=this._sourceText.length},this.skipTo=e=>{this._pos=e},this.match=(e,t=!0,n=!1)=>{let r=null,a=null;if("string"===typeof e){a=new RegExp(e,n?"i":"g").test(this._sourceText.substr(this._pos,e.length)),r=e}else e instanceof RegExp&&(a=this._sourceText.slice(this._pos).match(e),r=a&&a[0]);return!(null==a||!("string"===typeof e||a instanceof Array&&this._sourceText.startsWith(a[0],this._pos)))&&(t&&(this._start=this._pos,r&&r.length&&(this._pos+=r.length)),a)},this.backUp=e=>{this._pos-=e},this.column=()=>this._pos,this.indentation=()=>{const e=this._sourceText.match(/\s*/);let t=0;if(e&&0!==e.length){const n=e[0];let r=0;for(;n.length>r;)9===n.charCodeAt(r)?t+=2:t++,r++}return t},this.current=()=>this._sourceText.slice(this._start,this._pos),this._start=0,this._pos=0,this._sourceText=e}_testNextCharacter(e){const t=this._sourceText.charAt(this._pos);let n=!1;return n="string"===typeof e?t===e:e instanceof RegExp?e.test(t):e(t),n}}class a{constructor(e,t){this.containsPosition=e=>this.start.line===e.line?this.start.character<=e.character:this.end.line===e.line?this.end.character>=e.character:this.start.line<=e.line&&this.end.line>=e.line,this.start=e,this.end=t}setStart(e,t){this.start=new i(e,t)}setEnd(e,t){this.end=new i(e,t)}}class i{constructor(e,t){this.lessThanOrEqualTo=e=>this.line<e.line||this.line===e.line&&this.character<=e.character,this.line=e,this.character=t}setLine(e){this.line=e}setCharacter(e){this.character=e}}},60941:function(e,t,n){n.r(t);var r=n(97480),a=n(76375),i=n(97359),o=n(75844);function c(e){return{Document:function(t){for(var n=0,r=t.definitions;n<r.length;n++){var c=r[n];if(!(0,o.Wk)(c)){var u=c.kind===i.h.SCHEMA_DEFINITION||c.kind===i.h.SCHEMA_EXTENSION?"schema":'"'+c.name.value+'"';e.reportError(new a._("The ".concat(u," definition is not executable."),c))}}return!1}}}var u=n(25580),s=n(39011),l=n(94774),f=n(30077);var v=n(25821);var p=n(5960),h=n(53177),g=n(3294),d=n(8224);function m(e){return{FragmentSpread:function(t){var n=t.name.value;e.getFragment(n)||e.reportError(new a._('Unknown fragment "'.concat(n,'".'),t.name))}}}function y(e){var t=[],n=[];return{OperationDefinition:function(e){return t.push(e),!1},FragmentDefinition:function(e){return n.push(e),!1},Document:{leave:function(){for(var r=Object.create(null),i=0;i<t.length;i++)for(var o=t[i],c=0,u=e.getRecursivelyReferencedFragments(o);c<u.length;c++){r[u[c].name.value]=!0}for(var s=0;s<n.length;s++){var l=n[s],f=l.name.value;!0!==r[f]&&e.reportError(new a._('Fragment "'.concat(f,'" is never used.'),l))}}}}}var b=n(90316);var _=n(84873),E=n(96300),O=n(68238);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e){for(var t=Object.create(null),n=e.getSchema(),r=n?n.getDirectives():O.V4,o=0;o<r.length;o++){var c=r[o];t[c.name]=c.args.map((function(e){return e.name}))}for(var u=e.getDocument().definitions,s=0;s<u.length;s++){var l=u[s];if(l.kind===i.h.DIRECTIVE_DEFINITION){var f,v=null!==(f=l.arguments)&&void 0!==f?f:[];t[l.name.value]=v.map((function(e){return e.name.value}))}}return{Directive:function(n){var r=n.name.value,i=t[r];if(n.arguments&&i)for(var o=0,c=n.arguments;o<c.length;o++){var u=c[o],s=u.name.value;if(-1===i.indexOf(s)){var l=(0,g.Z)(s,i);e.reportError(new a._('Unknown argument "'.concat(s,'" on directive "@').concat(r,'".')+(0,h.Z)(l),u))}}return!1}}}var D=n(42266),j=n(44913),I=n(73498);function P(e,t){var n=e.getInputType();if(n){var r=(0,l.xC)(n);if((0,l.UT)(r))try{if(void 0===r.parseLiteral(t,void 0)){var i=(0,v.Z)(n);e.reportError(new a._('Expected value of type "'.concat(i,'", found ').concat((0,s.S)(t),"."),t))}}catch(u){var o=(0,v.Z)(n);u instanceof a._?e.reportError(u):e.reportError(new a._('Expected value of type "'.concat(o,'", found ').concat((0,s.S)(t),"; ")+u.message,t,void 0,void 0,void 0,u))}else{var c=(0,v.Z)(n);e.reportError(new a._('Expected value of type "'.concat(c,'", found ').concat((0,s.S)(t),"."),t))}}}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e){for(var t=Object.create(null),n=e.getSchema(),r=n?n.getDirectives():O.V4,o=0;o<r.length;o++){var c=r[o];t[c.name]=(0,I.Z)(c.args.filter(l.dK),(function(e){return e.name}))}for(var u=e.getDocument().definitions,f=0;f<u.length;f++){var p=u[f];if(p.kind===i.h.DIRECTIVE_DEFINITION){var h,g=null!==(h=p.arguments)&&void 0!==h?h:[];t[p.name.value]=(0,I.Z)(g.filter(C),(function(e){return e.name.value}))}}return{Directive:{leave:function(n){var r=n.name.value,i=t[r];if(i)for(var o,c=null!==(o=n.arguments)&&void 0!==o?o:[],u=(0,I.Z)(c,(function(e){return e.name.value})),f=0,p=Object.keys(i);f<p.length;f++){var h=p[f];if(!u[h]){var g=i[h].type,d=(0,l.P9)(g)?(0,v.Z)(g):(0,s.S)(g);e.reportError(new a._('Directive "@'.concat(r,'" argument "').concat(h,'" of type "').concat(d,'" is required, but it was not provided.'),n))}}}}}}function C(e){return e.type.kind===i.h.NON_NULL_TYPE&&null==e.defaultValue}function R(e,t,n,r,a){if((0,l.zM)(r)&&!(0,l.zM)(t)){if(!(null!=n&&n.kind!==i.h.NULL)&&!(void 0!==a))return!1;var o=r.ofType;return(0,b.uJ)(e,t,o)}return(0,b.uJ)(e,t,r)}var A=n(45318),N=n(85009);function U(e){return Array.isArray(e)?e.map((function(e){var t=e[0],n=e[1];return'subfields "'.concat(t,'" conflict because ')+U(n)})).join(" and "):e}function L(e,t,n,r,a,i,o){var c=e.getFragment(o);if(c){var u=H(e,n,c),s=u[0],l=u[1];if(i!==s){M(e,t,n,r,a,i,s);for(var f=0;f<l.length;f++)L(e,t,n,r,a,i,l[f])}}}function G(e,t,n,r,a,i,o){if(i!==o&&!r.has(i,o,a)){r.add(i,o,a);var c=e.getFragment(i),u=e.getFragment(o);if(c&&u){var s=H(e,n,c),l=s[0],f=s[1],v=H(e,n,u),p=v[0],h=v[1];M(e,t,n,r,a,l,p);for(var g=0;g<h.length;g++)G(e,t,n,r,a,i,h[g]);for(var d=0;d<f.length;d++)G(e,t,n,r,a,f[d],o)}}}function M(e,t,n,r,a,i,o){for(var c=0,u=Object.keys(i);c<u.length;c++){var s=u[c],l=o[s];if(l)for(var f=i[s],v=0;v<f.length;v++)for(var p=0;p<l.length;p++){var h=z(e,n,r,a,s,f[v],l[p]);h&&t.push(h)}}}function z(e,t,n,r,a,i,o){var c=i[0],u=i[1],f=i[2],p=o[0],h=o[1],g=o[2],d=r||c!==p&&(0,l.lp)(c)&&(0,l.lp)(p);if(!d){var m,y,b=u.name.value,_=h.name.value;if(b!==_)return[[a,'"'.concat(b,'" and "').concat(_,'" are different fields')],[u],[h]];if(!function(e,t){if(e.length!==t.length)return!1;return e.every((function(e){var n,r,a=(0,A.Z)(t,(function(t){return t.name.value===e.name.value}));return!!a&&(n=e.value,r=a.value,(0,s.S)(n)===(0,s.S)(r))}))}(null!==(m=u.arguments)&&void 0!==m?m:[],null!==(y=h.arguments)&&void 0!==y?y:[]))return[[a,"they have differing arguments"],[u],[h]]}var E=null===f||void 0===f?void 0:f.type,O=null===g||void 0===g?void 0:g.type;if(E&&O&&q(E,O))return[[a,'they return conflicting types "'.concat((0,v.Z)(E),'" and "').concat((0,v.Z)(O),'"')],[u],[h]];var w=u.selectionSet,T=h.selectionSet;if(w&&T){var S=function(e,t,n,r,a,i,o,c){var u=[],s=$(e,t,a,i),l=s[0],f=s[1],v=$(e,t,o,c),p=v[0],h=v[1];if(M(e,u,t,n,r,l,p),0!==h.length)for(var g=0;g<h.length;g++)L(e,u,t,n,r,l,h[g]);if(0!==f.length)for(var d=0;d<f.length;d++)L(e,u,t,n,r,p,f[d]);for(var m=0;m<f.length;m++)for(var y=0;y<h.length;y++)G(e,u,t,n,r,f[m],h[y]);return u}(e,t,n,d,(0,l.xC)(E),w,(0,l.xC)(O),T);return function(e,t,n,r){if(e.length>0)return[[t,e.map((function(e){return e[0]}))],e.reduce((function(e,t){var n=t[1];return e.concat(n)}),[n]),e.reduce((function(e,t){var n=t[2];return e.concat(n)}),[r])]}(S,a,u,h)}}function q(e,t){return(0,l.HG)(e)?!(0,l.HG)(t)||q(e.ofType,t.ofType):!!(0,l.HG)(t)||((0,l.zM)(e)?!(0,l.zM)(t)||q(e.ofType,t.ofType):!!(0,l.zM)(t)||!(!(0,l.UT)(e)&&!(0,l.UT)(t))&&e!==t)}function $(e,t,n,r){var a=t.get(r);if(!a){var i=Object.create(null),o=Object.create(null);Q(e,n,r,i,o),a=[i,Object.keys(o)],t.set(r,a)}return a}function H(e,t,n){var r=t.get(n.selectionSet);if(r)return r;var a=(0,f._)(e.getSchema(),n.typeCondition);return $(e,t,a,n.selectionSet)}function Q(e,t,n,r,a){for(var o=0,c=n.selections;o<c.length;o++){var u=c[o];switch(u.kind){case i.h.FIELD:var s=u.name.value,v=void 0;((0,l.lp)(t)||(0,l.oT)(t))&&(v=t.getFields()[s]);var p=u.alias?u.alias.value:s;r[p]||(r[p]=[]),r[p].push([t,u,v]);break;case i.h.FRAGMENT_SPREAD:a[u.name.value]=!0;break;case i.h.INLINE_FRAGMENT:var h=u.typeCondition,g=h?(0,f._)(e.getSchema(),h):t;Q(e,g,u.selectionSet,r,a)}}}var W=function(){function e(){this._data=Object.create(null)}var t=e.prototype;return t.has=function(e,t,n){var r=this._data[e],a=r&&r[t];return void 0!==a&&(!1!==n||!1===a)},t.add=function(e,t,n){this._pairSetAdd(e,t,n),this._pairSetAdd(t,e,n)},t._pairSetAdd=function(e,t,n){var r=this._data[e];r||(r=Object.create(null),this._data[e]=r),r[t]=n},e}(),J=n(92767),K=n(52877),B=n(77990),X=n(69538),Y=n(93201),ee=n(22618),te=n(53274),ne=n(34800),re=Object.freeze([c,function(e){var t=Object.create(null);return{OperationDefinition:function(n){var r=n.name;return r&&(t[r.value]?e.reportError(new a._('There can be only one operation named "'.concat(r.value,'".'),[t[r.value],r])):t[r.value]=r),!1},FragmentDefinition:function(){return!1}}},function(e){var t=0;return{Document:function(e){t=e.definitions.filter((function(e){return e.kind===i.h.OPERATION_DEFINITION})).length},OperationDefinition:function(n){!n.name&&t>1&&e.reportError(new a._("This anonymous operation must be the only defined operation.",n))}}},function(e){return{OperationDefinition:function(t){"subscription"===t.operation&&1!==t.selectionSet.selections.length&&e.reportError(new a._(t.name?'Subscription "'.concat(t.name.value,'" must select only one top level field.'):"Anonymous Subscription must select only one top level field.",t.selectionSet.selections.slice(1)))}}},u.I,function(e){return{InlineFragment:function(t){var n=t.typeCondition;if(n){var r=(0,f._)(e.getSchema(),n);if(r&&!(0,l.Gv)(r)){var i=(0,s.S)(n);e.reportError(new a._('Fragment cannot condition on non composite type "'.concat(i,'".'),n))}}},FragmentDefinition:function(t){var n=(0,f._)(e.getSchema(),t.typeCondition);if(n&&!(0,l.Gv)(n)){var r=(0,s.S)(t.typeCondition);e.reportError(new a._('Fragment "'.concat(t.name.value,'" cannot condition on non composite type "').concat(r,'".'),t.typeCondition))}}}},function(e){return{VariableDefinition:function(t){var n=(0,f._)(e.getSchema(),t.type);if(n&&!(0,l.j$)(n)){var r=t.variable.name.value,i=(0,s.S)(t.type);e.reportError(new a._('Variable "$'.concat(r,'" cannot be non-input type "').concat(i,'".'),t.type))}}}},function(e){return{Field:function(t){var n=e.getType(),r=t.selectionSet;if(n)if((0,l.UT)((0,l.xC)(n))){if(r){var i=t.name.value,o=(0,v.Z)(n);e.reportError(new a._('Field "'.concat(i,'" must not have a selection since type "').concat(o,'" has no subfields.'),r))}}else if(!r){var c=t.name.value,u=(0,v.Z)(n);e.reportError(new a._('Field "'.concat(c,'" of type "').concat(u,'" must have a selection of subfields. Did you mean "').concat(c,' { ... }"?'),t))}}}},function(e){return{Field:function(t){var n=e.getParentType();if(n&&!e.getFieldDef()){var r=e.getSchema(),i=t.name.value,o=(0,h.Z)("to use an inline fragment on",function(e,t,n){if(!(0,l.m0)(t))return[];for(var r=new Set,a=Object.create(null),i=0,o=e.getPossibleTypes(t);i<o.length;i++){var c=o[i];if(c.getFields()[n]){r.add(c),a[c.name]=1;for(var u=0,s=c.getInterfaces();u<s.length;u++){var f,v=s[u];v.getFields()[n]&&(r.add(v),a[v.name]=(null!==(f=a[v.name])&&void 0!==f?f:0)+1)}}}return(0,p.Z)(r).sort((function(t,n){var r=a[n.name]-a[t.name];return 0!==r?r:(0,l.oT)(t)&&e.isSubType(t,n)?-1:(0,l.oT)(n)&&e.isSubType(n,t)?1:(0,d.Z)(t.name,n.name)})).map((function(e){return e.name}))}(r,n,i));""===o&&(o=(0,h.Z)(function(e,t){if((0,l.lp)(e)||(0,l.oT)(e)){var n=Object.keys(e.getFields());return(0,g.Z)(t,n)}return[]}(n,i))),e.reportError(new a._('Cannot query field "'.concat(i,'" on type "').concat(n.name,'".')+o,t))}}}},function(e){var t=Object.create(null);return{OperationDefinition:function(){return!1},FragmentDefinition:function(n){var r=n.name.value;return t[r]?e.reportError(new a._('There can be only one fragment named "'.concat(r,'".'),[t[r],n.name])):t[r]=n.name,!1}}},m,y,function(e){return{InlineFragment:function(t){var n=e.getType(),r=e.getParentType();if((0,l.Gv)(n)&&(0,l.Gv)(r)&&!(0,b.zR)(e.getSchema(),n,r)){var i=(0,v.Z)(r),o=(0,v.Z)(n);e.reportError(new a._('Fragment cannot be spread here as objects of type "'.concat(i,'" can never be of type "').concat(o,'".'),t))}},FragmentSpread:function(t){var n=t.name.value,r=function(e,t){var n=e.getFragment(t);if(n){var r=(0,f._)(e.getSchema(),n.typeCondition);if((0,l.Gv)(r))return r}}(e,n),i=e.getParentType();if(r&&i&&!(0,b.zR)(e.getSchema(),r,i)){var o=(0,v.Z)(i),c=(0,v.Z)(r);e.reportError(new a._('Fragment "'.concat(n,'" cannot be spread here as objects of type "').concat(o,'" can never be of type "').concat(c,'".'),t))}}}},function(e){var t=Object.create(null),n=[],r=Object.create(null);return{OperationDefinition:function(){return!1},FragmentDefinition:function(e){return i(e),!1}};function i(o){if(!t[o.name.value]){var c=o.name.value;t[c]=!0;var u=e.getFragmentSpreads(o.selectionSet);if(0!==u.length){r[c]=n.length;for(var s=0;s<u.length;s++){var l=u[s],f=l.name.value,v=r[f];if(n.push(l),void 0===v){var p=e.getFragment(f);p&&i(p)}else{var h=n.slice(v),g=h.slice(0,-1).map((function(e){return'"'+e.name.value+'"'})).join(", ");e.reportError(new a._('Cannot spread fragment "'.concat(f,'" within itself')+(""!==g?" via ".concat(g,"."):"."),h))}n.pop()}r[c]=void 0}}}},function(e){var t=Object.create(null);return{OperationDefinition:function(){t=Object.create(null)},VariableDefinition:function(n){var r=n.variable.name.value;t[r]?e.reportError(new a._('There can be only one variable named "$'.concat(r,'".'),[t[r],n.variable.name])):t[r]=n.variable.name}}},function(e){var t=Object.create(null);return{OperationDefinition:{enter:function(){t=Object.create(null)},leave:function(n){for(var r=e.getRecursiveVariableUsages(n),i=0;i<r.length;i++){var o=r[i].node,c=o.name.value;!0!==t[c]&&e.reportError(new a._(n.name?'Variable "$'.concat(c,'" is not defined by operation "').concat(n.name.value,'".'):'Variable "$'.concat(c,'" is not defined.'),[o,n]))}}},VariableDefinition:function(e){t[e.variable.name.value]=!0}}},function(e){var t=[];return{OperationDefinition:{enter:function(){t=[]},leave:function(n){for(var r=Object.create(null),i=e.getRecursiveVariableUsages(n),o=0;o<i.length;o++){r[i[o].node.name.value]=!0}for(var c=0,u=t;c<u.length;c++){var s=u[c],l=s.variable.name.value;!0!==r[l]&&e.reportError(new a._(n.name?'Variable "$'.concat(l,'" is never used in operation "').concat(n.name.value,'".'):'Variable "$'.concat(l,'" is never used.'),s))}}},VariableDefinition:function(e){t.push(e)}}},_.J,E.k,function(e){return T(T({},F(e)),{},{Argument:function(t){var n=e.getArgument(),r=e.getFieldDef(),i=e.getParentType();if(!n&&r&&i){var o=t.name.value,c=r.args.map((function(e){return e.name})),u=(0,g.Z)(o,c);e.reportError(new a._('Unknown argument "'.concat(o,'" on field "').concat(i.name,".").concat(r.name,'".')+(0,h.Z)(u),t))}}})},D.L,function(e){return{ListValue:function(t){var n=(0,l.tf)(e.getParentInputType());if(!(0,l.HG)(n))return P(e,t),!1},ObjectValue:function(t){var n=(0,l.xC)(e.getInputType());if(!(0,l.hL)(n))return P(e,t),!1;for(var r=(0,I.Z)(t.fields,(function(e){return e.name.value})),i=0,o=(0,j.Z)(n.getFields());i<o.length;i++){var c=o[i];if(!r[c.name]&&(0,l.Wd)(c)){var u=(0,v.Z)(c.type);e.reportError(new a._('Field "'.concat(n.name,".").concat(c.name,'" of required type "').concat(u,'" was not provided.'),t))}}},ObjectField:function(t){var n=(0,l.xC)(e.getParentInputType());if(!e.getInputType()&&(0,l.hL)(n)){var r=(0,g.Z)(t.name.value,Object.keys(n.getFields()));e.reportError(new a._('Field "'.concat(t.name.value,'" is not defined by type "').concat(n.name,'".')+(0,h.Z)(r),t))}},NullValue:function(t){var n=e.getInputType();(0,l.zM)(n)&&e.reportError(new a._('Expected value of type "'.concat((0,v.Z)(n),'", found ').concat((0,s.S)(t),"."),t))},EnumValue:function(t){return P(e,t)},IntValue:function(t){return P(e,t)},FloatValue:function(t){return P(e,t)},StringValue:function(t){return P(e,t)},BooleanValue:function(t){return P(e,t)}}},function(e){return x(x({},Z(e)),{},{Field:{leave:function(t){var n,r=e.getFieldDef();if(!r)return!1;for(var i=null!==(n=t.arguments)&&void 0!==n?n:[],o=(0,I.Z)(i,(function(e){return e.name.value})),c=0,u=r.args;c<u.length;c++){var s=u[c];if(!o[s.name]&&(0,l.dK)(s)){var f=(0,v.Z)(s.type);e.reportError(new a._('Field "'.concat(r.name,'" argument "').concat(s.name,'" of type "').concat(f,'" is required, but it was not provided.'),t))}}}}})},function(e){var t=Object.create(null);return{OperationDefinition:{enter:function(){t=Object.create(null)},leave:function(n){for(var r=e.getRecursiveVariableUsages(n),i=0;i<r.length;i++){var o=r[i],c=o.node,u=o.type,s=o.defaultValue,l=c.name.value,p=t[l];if(p&&u){var h=e.getSchema(),g=(0,f._)(h,p.type);if(g&&!R(h,g,p.defaultValue,u,s)){var d=(0,v.Z)(g),m=(0,v.Z)(u);e.reportError(new a._('Variable "$'.concat(l,'" of type "').concat(d,'" used in position expecting type "').concat(m,'".'),[p,c]))}}}}},VariableDefinition:function(e){t[e.variable.name.value]=e}}},function(e){var t=new W,n=new Map;return{SelectionSet:function(r){for(var i=function(e,t,n,r,a){var i=[],o=$(e,t,r,a),c=o[0],u=o[1];if(function(e,t,n,r,a){for(var i=0,o=(0,N.Z)(a);i<o.length;i++){var c=o[i],u=c[0],s=c[1];if(s.length>1)for(var l=0;l<s.length;l++)for(var f=l+1;f<s.length;f++){var v=z(e,n,r,!1,u,s[l],s[f]);v&&t.push(v)}}}(e,i,t,n,c),0!==u.length)for(var s=0;s<u.length;s++){L(e,i,t,n,!1,c,u[s]);for(var l=s+1;l<u.length;l++)G(e,i,t,n,!1,u[s],u[l])}return i}(e,n,t,e.getParentType(),r),o=0;o<i.length;o++){var c=i[o],u=c[0],s=u[0],l=u[1],f=c[1],v=c[2],p=U(l);e.reportError(new a._('Fields "'.concat(s,'" conflict because ').concat(p,". Use different aliases on the fields to fetch both if this was intentional."),f.concat(v)))}}}},J.P]),ae=(Object.freeze([K.t,B.q,X.P,Y.L,ee.y,te.o,u.I,_.J,E.k,ne.g,F,D.L,J.P,Z]),n(37826)),ie=n(77304),oe=n(6584),ce=n(22676);function ue(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var se=function(){function e(e,t){this._ast=e,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}var t=e.prototype;return t.reportError=function(e){this._onError(e)},t.getDocument=function(){return this._ast},t.getFragment=function(e){var t=this._fragments;return t||(this._fragments=t=this.getDocument().definitions.reduce((function(e,t){return t.kind===i.h.FRAGMENT_DEFINITION&&(e[t.name.value]=t),e}),Object.create(null))),t[e]},t.getFragmentSpreads=function(e){var t=this._fragmentSpreads.get(e);if(!t){t=[];for(var n=[e];0!==n.length;)for(var r=0,a=n.pop().selections;r<a.length;r++){var o=a[r];o.kind===i.h.FRAGMENT_SPREAD?t.push(o):o.selectionSet&&n.push(o.selectionSet)}this._fragmentSpreads.set(e,t)}return t},t.getRecursivelyReferencedFragments=function(e){var t=this._recursivelyReferencedFragments.get(e);if(!t){t=[];for(var n=Object.create(null),r=[e.selectionSet];0!==r.length;)for(var a=r.pop(),i=0,o=this.getFragmentSpreads(a);i<o.length;i++){var c=o[i].name.value;if(!0!==n[c]){n[c]=!0;var u=this.getFragment(c);u&&(t.push(u),r.push(u.selectionSet))}}this._recursivelyReferencedFragments.set(e,t)}return t},e}(),le=function(e){function t(t,n,r,a){var i;return(i=e.call(this,n,a)||this)._schema=t,i._typeInfo=r,i._variableUsages=new Map,i._recursiveVariableUsages=new Map,i}ue(t,e);var n=t.prototype;return n.getSchema=function(){return this._schema},n.getVariableUsages=function(e){var t=this._variableUsages.get(e);if(!t){var n=[],r=new ce.a(this._schema);(0,ie.Vn)(e,(0,ce.y)(r,{VariableDefinition:function(){return!1},Variable:function(e){n.push({node:e,type:r.getInputType(),defaultValue:r.getDefaultValue()})}})),t=n,this._variableUsages.set(e,t)}return t},n.getRecursiveVariableUsages=function(e){var t=this._recursiveVariableUsages.get(e);if(!t){t=this.getVariableUsages(e);for(var n=0,r=this.getRecursivelyReferencedFragments(e);n<r.length;n++){var a=r[n];t=t.concat(this.getVariableUsages(a))}this._recursiveVariableUsages.set(e,t)}return t},n.getType=function(){return this._typeInfo.getType()},n.getParentType=function(){return this._typeInfo.getParentType()},n.getInputType=function(){return this._typeInfo.getInputType()},n.getParentInputType=function(){return this._typeInfo.getParentInputType()},n.getFieldDef=function(){return this._typeInfo.getFieldDef()},n.getDirective=function(){return this._typeInfo.getDirective()},n.getArgument=function(){return this._typeInfo.getArgument()},n.getEnumValue=function(){return this._typeInfo.getEnumValue()},t}(se);function fe(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:re,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new ce.a(e),i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{maxErrors:void 0};t||(0,ae.Z)(0,"Must provide document."),(0,oe.J)(e);var o=Object.freeze({}),c=[],u=new le(e,t,r,(function(e){if(null!=i.maxErrors&&c.length>=i.maxErrors)throw c.push(new a._("Too many validation errors, error limit reached. Validation aborted.")),o;c.push(e)})),s=(0,ie.j1)(n.map((function(e){return e(u)})));try{(0,ie.Vn)(t,(0,ce.y)(r,s))}catch(l){if(l!==o)throw l}return c}var ve=n(29551);function pe(e){return{Field:function(t){var n=e.getFieldDef(),r=null===n||void 0===n?void 0:n.deprecationReason;if(n&&null!=r){var i=e.getParentType();null!=i||(0,ve.Z)(0),e.reportError(new a._("The field ".concat(i.name,".").concat(n.name," is deprecated. ").concat(r),t))}},Argument:function(t){var n=e.getArgument(),r=null===n||void 0===n?void 0:n.deprecationReason;if(n&&null!=r){var i=e.getDirective();if(null!=i)e.reportError(new a._('Directive "@'.concat(i.name,'" argument "').concat(n.name,'" is deprecated. ').concat(r),t));else{var o=e.getParentType(),c=e.getFieldDef();null!=o&&null!=c||(0,ve.Z)(0),e.reportError(new a._('Field "'.concat(o.name,".").concat(c.name,'" argument "').concat(n.name,'" is deprecated. ').concat(r),t))}}},ObjectField:function(t){var n=(0,l.xC)(e.getParentInputType());if((0,l.hL)(n)){var r=n.getFields()[t.name.value],i=null===r||void 0===r?void 0:r.deprecationReason;null!=i&&e.reportError(new a._("The input field ".concat(n.name,".").concat(r.name," is deprecated. ").concat(i),t))}},EnumValue:function(t){var n=e.getEnumValue(),r=null===n||void 0===n?void 0:n.deprecationReason;if(n&&null!=r){var i=(0,l.xC)(e.getInputType());null!=i||(0,ve.Z)(0),e.reportError(new a._('The enum value "'.concat(i.name,".").concat(n.name,'" is deprecated. ').concat(r),t))}}}}var he=n(79658),ge=n(34386),de=n(50045);n(59361),n(78265),n(73935);const me=[K.t,B.q,X.P,Y.L,ee.y,te.o,u.I,_.J,E.k,ne.g,D.L,J.P];const ye={["Error"]:1,["Warning"]:2,["Information"]:3,["Hint"]:4},be=(e,t)=>{if(!e)throw new Error(t)};function _e(e,t=null,n,r,a){let o=null;a&&(e+="string"===typeof a?"\n\n"+a:"\n\n"+a.reduce(((e,t)=>e+=(0,s.S)(t)+"\n\n"),""));try{o=(0,he.Qc)(e)}catch(u){const t=function(e,t){const n=(0,ge.o)(),r=n.startState(),a=t.split("\n");be(a.length>=e.line,"Query text must have more lines than where the error happened");let i=null;for(let s=0;s<e.line;s++)for(i=new de.C(a[s]);!i.eol();){if("invalidchar"===n.token(i,r))break}be(i,"Expected Parser stream to be available.");const o=e.line-1,c=i.getStartOfToken(),u=i.getCurrentPosition();return new de.R(new de.P(o,c),new de.P(o,u))}(u.locations[0],e);return[{severity:ye.Error,message:u.message,source:"GraphQL: Syntax",range:t}]}return function(e,t=null,n,r){if(!t)return[];const a=Ee(function(e,t,n,r,a){const o=re.filter((e=>e!==y&&e!==c&&(!r||e!==m)));return n&&Array.prototype.push.apply(o,n),a&&Array.prototype.push.apply(o,me),fe(e,t,o).filter((e=>{if(-1!==e.message.indexOf("Unknown directive")&&e.nodes){const t=e.nodes[0];if(t&&t.kind===i.h.DIRECTIVE){const e=t.name.value;if("arguments"===e||"argumentDefinitions"===e)return!1}}return!0}))}(t,e,n,r),(e=>Oe(e,ye.Error,"Validation"))),o=Ee(fe(t,e,[pe]),(e=>Oe(e,ye.Warning,"Deprecation")));return a.concat(o)}(o,t,n,r)}function Ee(e,t){return Array.prototype.concat.apply([],e.map(t))}function Oe(e,t,n){if(!e.nodes)return[];const r=[];return e.nodes.forEach((a=>{const i="Variable"!==a.kind&&"name"in a&&void 0!==a.name?a.name:"variable"in a&&void 0!==a.variable?a.variable:a;if(i){be(e.locations,"GraphQL validation error requires locations.");const a=e.locations[0],o=function(e){const t=e.loc;return be(t,"Expected ASTNode to have a location."),t}(i),c=a.column+(o.end-o.start);r.push({source:`GraphQL: ${n}`,message:e.message,severity:t,range:new de.R(new de.P(a.line-1,a.column-1),new de.P(a.line-1,c))})}})),r}const we=["error","warning","information","hint"],Te={"GraphQL: Validation":"validation","GraphQL: Deprecation":"deprecation","GraphQL: Syntax":"syntax"};r.C.registerHelper("lint","graphql",((e,t)=>_e(e,t.schema,t.validationRules,void 0,t.externalFragments).map((e=>({message:e.message,severity:e.severity?we[e.severity-1]:we[0],type:e.source?Te[e.source]:void 0,from:r.C.Pos(e.range.start.line,e.range.start.character),to:r.C.Pos(e.range.end.line,e.range.end.character)})))))}}]);
//# sourceMappingURL=941-3acd7e3d42d19ed645f1.chunk.js.map