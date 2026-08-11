"use strict";var x=function(t,e){return function(){try{return e||t((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var b=x(function($,w){
var O=require('@stdlib/ndarray-base-assert-is-row-major/dist'),S=require('@stdlib/math-base-special-fast-max/dist'),T=require('@stdlib/math-base-special-fast-min/dist');function z(t,e,u,f,q,s,g,i,o,m,l){var n,v,r,a;if(n=g,v=l,O([q,s])){for(a=0;a<t;a++){for(r=S(0,a+u);r<e;r++)i[v+r*o]=f[n+r*s];n+=q,v+=m}return i}for(a=0;a<e;a++){for(r=0;r<=T(a-u,t-1);r++)i[v+r*m]=f[n+r*q];n+=s,v+=o}return i}w.exports=z
});var R=x(function(k,y){
var C=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),p=require('@stdlib/math-base-special-fast-max/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),H=b();function I(t,e,u,f,q,s,g,i){var o,m,l,n,v,r,a;if(!C(t))throw new TypeError(c('nullFx',t));if(o=G(t),o?(r=u,a=e):(r=e,a=u),s<p(1,r))throw new RangeError(c('nullJL',r,s));if(i<p(1,a))throw new RangeError(c('nullGM',a,i));return o?(m=s,l=1,n=i,v=1):(m=1,l=s,n=1,v=i),H(e,u,f,q,m,l,0,g,n,v,0)}y.exports=I
});var j=x(function(M,d){
var J=b();function K(t,e,u,f,q,s,g,i,o,m,l){return J(t,e,u,f,q,s,g,i,o,m,l)}d.exports=K
});var _=x(function(N,V){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=R(),Q=j();P(E,"ndarray",Q);V.exports=E
});var U=require("path").join,W=require('@stdlib/utils-try-require/dist'),X=require('@stdlib/assert-is-error/dist'),Y=_(),h,F=W(U(__dirname,"./native.js"));X(F)?h=Y:h=F;module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
