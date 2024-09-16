"use strict";var d=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var f=d(function(z,h){
var q=require('@stdlib/array-base-arraylike2object/dist');function P(a,r,t,i,o,c){var e,s,n;for(e=!0,s=i,n=a.length-1;n>=0;n--)e===!0&&o.call(c,a[n],n,a)&&(e=!1),r[s]=e,s+=t;return r}function R(a,r,t,i,o,c){var e,s,n,g,v,l,u;for(e=a.data,s=r.data,n=a.accessors[0],g=r.accessors[1],l=i,v=!0,u=e.length-1;u>=0;u--)v===!0&&o.call(c,n(e,u),u,e)&&(v=!1),g(s,l,v),l+=t;return s}function b(a,r,t,i,o,c){var e,s;return e=q(a),s=q(r),e.accessorProtocol||s.accessorProtocol?(R(e,s,t,i,o,c),r):(P(a,r,t,i,o,c),r)}h.exports=b
});var p=d(function(C,y){
var j=require('@stdlib/array-base-filled/dist'),k=f();function m(a,r,t){var i=j(!1,a.length);return k(a,i,1,0,r,t)}y.exports=m
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=p(),O=f();B(x,"assign",O);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
