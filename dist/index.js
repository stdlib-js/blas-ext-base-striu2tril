"use strict";var x=function(s,e){return function(){try{return e||s((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var c=x(function(k,p){
var S=require('@stdlib/ndarray-base-assert-is-row-major/dist'),T=require('@stdlib/math-base-special-fast-max/dist'),z=require('@stdlib/math-base-special-fast-min/dist');function C(s,e,t,f,m,u,g,i,o,l,q){var n,v,r,a;if(n=g,v=q,S([m,u])){for(a=0;a<s;a++){for(r=T(0,a+t);r<e;r++)i[v+r*o]=f[n+r*u];n+=m,v+=l}return i}for(a=0;a<e;a++){for(r=0;r<=z(a-t,s-1);r++)i[v+r*l]=f[n+r*m];n+=u,v+=o}return i}p.exports=C
});var R=x(function(M,y){
var G=require('@stdlib/blas-base-layout-resolve-str/dist'),H=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),d=require('@stdlib/math-base-special-fast-max/dist'),h=require('@stdlib/error-tools-fmtprodmsg/dist'),I=c();function J(s,e,t,f,m,u,g,i){var o,l,q,n,v,r,a,b;if(b=G(s),b===null)throw new TypeError(h('38LFx',s));if(o=H(b),o?(r=t,a=e):(r=e,a=t),u<d(1,r))throw new RangeError(h('38LJL',r,u));if(i<d(1,a))throw new RangeError(h('38LGM',a,i));return o?(l=u,q=1,n=i,v=1):(l=1,q=u,n=1,v=i),I(e,t,f,m,l,q,0,g,n,v,0)}y.exports=J
});var E=x(function(N,j){
var K=c();function P(s,e,t,f,m,u,g,i,o,l,q){return K(s,e,t,f,m,u,g,i,o,l,q)}j.exports=P
});var F=x(function(L,_){
var Q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=R(),U=E();Q(V,"ndarray",U);_.exports=V
});var W=require("path").join,X=require('@stdlib/utils-try-require/dist'),Y=require('@stdlib/assert-is-error/dist'),Z=F(),w,O=X(W(__dirname,"./native.js"));Y(O)?w=Z:w=O;module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
