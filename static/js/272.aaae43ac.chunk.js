"use strict";(self.webpackChunkcrypto_tracker=self.webpackChunkcrypto_tracker||[]).push([[272],{4272:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(2791),i=t(8596),o=t(3712),a=t(8302),c=t(4165),s=t(5861),l=t(885),u=t(4569),d=t.n(u),p=t(1052),g=t.n(p),h=t(3504),f=t(2119),m=t(1785),x=t(6397),y=t(184),v=function(){var e=(0,r.useState)([]),n=(0,l.Z)(e,2),t=n[0],o=n[1],a=(0,m.U)(),u=a.currency,p=a.symbol,v=function(){var e=(0,s.Z)((0,c.Z)().mark((function e(){var n,t;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get((0,f.ZF)(u));case 2:n=e.sent,t=n.data,o(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,r.useEffect)((function(){v()}),[u]);var j=(0,i.Z)((function(e){return{carousel:{height:"50%",display:"flex",alignItems:"center"},carouselItem:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",textTransform:"uppercase",color:"white"}}}))(),Z=t.map((function(e){var n,t=(null===e||void 0===e?void 0:e.price_change_percentage_24h)>=0;return(0,y.jsxs)(h.rU,{className:j.carouselItem,to:"/coins/".concat(e.id),children:[(0,y.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"80",style:{marginBottom:10}}),(0,y.jsxs)("span",{children:[null===e||void 0===e?void 0:e.symbol,"\xa0",(0,y.jsxs)("span",{style:{color:t>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[t&&"+",null===e||void 0===e||null===(n=e.price_change_percentage_24h)||void 0===n?void 0:n.toFixed(2),"%"]})]}),(0,y.jsxs)("span",{style:{fontSize:22,fontWeight:500},children:[p," ",(0,x.x)(null===e||void 0===e?void 0:e.current_price.toFixed(2))]})]})}));return(0,y.jsx)("div",{className:j.carousel,children:(0,y.jsx)(g(),{mouseTracking:!0,infinite:!0,autoPlayInterval:1e3,animationDuration:1500,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:2},512:{items:4}},items:Z,autoPlay:!0})})},j=(0,i.Z)((function(e){return{banner:{backgroundImage:"url(./banner2.jpg)"},bannerContent:{height:400,display:"flex",flexDirection:"column",paddingTop:25,justifyContent:"space-around"},tagline:{display:"flex",height:"40%",flexDirection:"column",justifyContent:"center",textAlign:"center"},carousel:{height:"50%",display:"flex",alignItems:"center"}}}));var Z=function(){var e=j();return(0,y.jsx)("div",{className:e.banner,children:(0,y.jsxs)(o.Z,{className:e.bannerContent,children:[(0,y.jsxs)("div",{className:e.tagline,children:[(0,y.jsx)(a.Z,{variant:"h2",style:{fontWeight:"bold",marginBottom:15,fontFamily:"Montserrat"},children:"Crypto Hunter"}),(0,y.jsx)(a.Z,{variant:"subtitle2",style:{color:"darkgrey",textTransform:"capitalize",fontFamily:"Montserrat"},children:"Get all the Info regarding your favorite Crypto Currency"})]}),(0,y.jsx)(v,{})]})})},k=function(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Z,{}),(0,y.jsx)(x.Z,{})]})}},6397:function(e,n,t){t.d(n,{Z:function(){return I},x:function(){return S}});var r=t(4165),i=t(5861),o=t(885),a=t(2791),c=t(8596),s=t(1625),l=t(6504),u=t(1795),d=t(3712),p=t(8302),g=t(9038),h=t(2206),f=t(9526),m=t(4446),x=t(6556),y=t(9773),v=t(3486),j=t(7631),Z=t(6593),k=t(4569),C=t.n(k),b=t(2119),_=t(6871),w=t(1785),F=t(184);function S(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function I(){var e,n=(0,a.useState)([]),t=(0,o.Z)(n,2),k=t[0],I=t[1],M=(0,a.useState)(!1),B=(0,o.Z)(M,2),D=B[0],N=B[1],P=(0,a.useState)(""),W=(0,o.Z)(P,2),T=W[0],E=W[1],z=(0,a.useState)(1),U=(0,o.Z)(z,2),X=U[0],A=U[1],L=(0,w.U)(),G=L.currency,H=L.symbol,q=(0,c.Z)({row:{backgroundColor:"#16171a",cursor:"pointer","&:hover":{backgroundColor:"#131111"},fontFamily:"Montserrat"},pagination:{"& .MuiPaginationItem-root":{color:"gold"}}})(),J=(0,_.s0)(),K=(0,l.Z)({palette:{primary:{main:"#fff"},type:"dark"}}),O=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,C().get((0,b.X7)(G));case 3:n=e.sent,t=n.data,console.log(t),I(t),N(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){O()}),[G]);var Q=function(){return k.filter((function(e){return e.name.toLowerCase().includes(T)||e.symbol.toLowerCase().includes(T)}))};return(0,F.jsx)(u.Z,{theme:K,children:(0,F.jsxs)(d.Z,{style:{textAlign:"center"},children:[(0,F.jsx)(p.Z,{variant:"h4",style:{margin:18,fontFamily:"Montserrat"},children:"Cryptocurrency Prices by Market Cap"}),(0,F.jsx)(g.Z,{label:"Search For a Crypto Currency..",variant:"outlined",style:{marginBottom:20,width:"100%"},onChange:function(e){return E(e.target.value)}}),(0,F.jsx)(h.Z,{component:f.Z,children:D?(0,F.jsx)(m.Z,{style:{backgroundColor:"gold"}}):(0,F.jsxs)(x.Z,{"aria-label":"simple table",children:[(0,F.jsx)(y.Z,{style:{backgroundColor:"#EEBC1D"},children:(0,F.jsx)(v.Z,{children:["Coin","Price","24h Change","Market Cap"].map((function(e){return(0,F.jsx)(j.Z,{style:{color:"black",fontWeight:"700",fontFamily:"Montserrat"},align:"Coin"===e?"":"right",children:e},e)}))})}),(0,F.jsx)(Z.Z,{children:Q().slice(10*(X-1),10*(X-1)+10).map((function(e){var n=e.price_change_percentage_24h>0;return(0,F.jsxs)(v.Z,{onClick:function(){return J("/coins/".concat(e.id))},className:q.row,children:[(0,F.jsxs)(j.Z,{component:"th",scope:"row",style:{display:"flex",gap:15},children:[(0,F.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"50",style:{marginBottom:10}}),(0,F.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,F.jsx)("span",{style:{textTransform:"uppercase",fontSize:22},children:e.symbol}),(0,F.jsx)("span",{style:{color:"darkgrey"},children:e.name})]})]}),(0,F.jsxs)(j.Z,{align:"right",children:[H," ",S(e.current_price.toFixed(2))]}),(0,F.jsxs)(j.Z,{align:"right",style:{color:n>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[n&&"+",e.price_change_percentage_24h.toFixed(2),"%"]}),(0,F.jsxs)(j.Z,{align:"right",children:[H," ",S(e.market_cap.toString().slice(0,-6)),"M"]})]},e.name)}))})]})}),(0,F.jsx)(s.Z,{count:((null===(e=Q())||void 0===e?void 0:e.length)/10).toFixed(0),style:{padding:20,width:"100%",display:"flex",justifyContent:"center"},classes:{ul:q.pagination},onChange:function(e,n){A(n),window.scroll(0,450)}})]})})}},2119:function(e,n,t){t.d(n,{P9:function(){return i},X7:function(){return r},XW:function(){return o},ZF:function(){return a}});var r=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=market_cap_desc&per_page=100&page=1&sparkline=false")},i=function(e){return"https://api.coingecko.com/api/v3/coins/".concat(e)},o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,t=arguments.length>2?arguments[2]:void 0;return"https://api.coingecko.com/api/v3/coins/".concat(e,"/market_chart?vs_currency=").concat(t,"&days=").concat(n)},a=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")}}}]);
//# sourceMappingURL=272.aaae43ac.chunk.js.map