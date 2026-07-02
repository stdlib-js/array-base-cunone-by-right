"use strict";var d=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var f=d(function(z,h){
var q=require('@stdlib/array-base-arraylike2object/dist');function P(a,r,t,i,o,c){var e,s,n;for(e=!0,s=i,n=a.length-1;n>=0;n--)e&&o.call(c,a[n],n,a)&&(e=!1),r[s]=e,s+=t;return r}function R(a,r,t,i,o,c){var e,s,n,g,u,l,v;for(e=a.data,s=r.data,n=a.accessors[0],g=r.accessors[1],l=i,u=!0,v=e.length-1;v>=0;v--)u&&o.call(c,n(e,v),v,e)&&(u=!1),g(s,l,u),l+=t;return s}function b(a,r,t,i,o,c){var e,s;return e=q(a),s=q(r),e.accessorProtocol||s.accessorProtocol?(R(e,s,t,i,o,c),r):(P(a,r,t,i,o,c),r)}h.exports=b
});var p=d(function(C,y){
var j=require('@stdlib/array-base-filled/dist'),k=f();function m(a,r,t){var i=j(!0,a.length);return k(a,i,1,0,r,t)}y.exports=m
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=p(),O=f();B(x,"assign",O);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
