(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{197:function(t,e,r){"use strict";r.r(e);r(213);var a=r(7),n=r(0),o=r(227),i=r(237),c=r(238),u=r(250),s=r(236),f=r(235);e.default=function(){var t=Object(n.useState)([]),e=t[0],r=t[1];Object(n.useEffect)(function(){var t=Object(u.a)("favorites",document.cookie);r(t?JSON.parse(t):[])},[]);var b=Object(f.a)().filter(function(t){var r,a=t.date,n=t.start,o=t.time,i=t.title;return r=a+"_"+(n||o)+"_"+i,!!e.find(function(t){return t===r})});return Object(a.d)(i.a,null,Object(a.d)(o.a,null,Object(a.d)(c.a,{minHeight:"100vh",withTopSeperator:!0,withBottomSeperator:!0},Object(a.d)(s.a,{slots:b,removeFavorite:r,isFavourites:!0}))))}}}]);
//# sourceMappingURL=component---src-pages-favorites-js-23ffab45b77add8d90f0.js.map