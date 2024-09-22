"use strict";var d=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var f=d(function(z,h){
var q=require('@stdlib/array-base-arraylike2object/dist');function P(a,r,i,t,o,c){var e,s,n;for(e=!0,s=t,n=a.length-1;n>=0;n--)e&&o.call(c,a[n],n,a)&&(e=!1),r[s]=e,s+=i;return r}function R(a,r,i,t,o,c){var e,s,n,g,l,u,v;for(e=a.data,s=r.data,n=a.accessors[0],g=r.accessors[1],u=t,l=!0,v=e.length-1;v>=0;v--)l&&o.call(c,n(e,v),v,e)&&(l=!1),g(s,u,l),u+=i;return s}function b(a,r,i,t,o,c){var e,s;return e=q(a),s=q(r),e.accessorProtocol||s.accessorProtocol?(R(e,s,i,t,o,c),r):(P(a,r,i,t,o,c),r)}h.exports=b
});var p=d(function(C,y){
var j=require('@stdlib/array-base-filled/dist'),k=f();function m(a,r,i){var t=j(!1,a.length);return k(a,t,1,0,r,i)}y.exports=m
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=p(),O=f();B(x,"assign",O);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
