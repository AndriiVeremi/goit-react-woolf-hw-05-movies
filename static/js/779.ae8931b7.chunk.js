"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{365:function(n,e,r){r.d(e,{He:function(){return f},fh:function(){return p},ph:function(){return s},q5:function(){return l},uP:function(){return o}});var t=r(861),a=r(757),u=r.n(a),c=r(340),i="5257856f789bada50296aabdc3a8b8f3";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,t.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("/trending/all/day?api_key=".concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("/search/movie?query=".concat(e,"&api_key=").concat(i,"&include_adult=false&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("/movie/".concat(e,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("/movie/".concat(e,"/credits?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("/movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},779:function(n,e,r){r.r(e),r.d(e,{default:function(){return P}});var t,a,u,c,i,s=r(861),o=r(439),p=r(757),f=r.n(p),l=r(791),d=r(689),v=r(742),h=r(264),x=r(461),Z=r(365),m=r(168),y=r(924),b=y.ZP.ul(t||(t=(0,m.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 20px;\n"]))),k=y.ZP.li(a||(a=(0,m.Z)(["\npadding: 10px;\nborder: 1px solid #333;\nborder-radius: 5px;\nbackground-color: #ebebeb;\n"]))),w=y.ZP.div(u||(u=(0,m.Z)(["\ndisplay: flex;\ngap: 10px;\nalign-items: center;\n"]))),g=y.ZP.p(c||(c=(0,m.Z)(["\nfont-weight: 700;\nfont-size: 20px;\n"]))),_=y.ZP.p(i||(i=(0,m.Z)(["\nfont-style: italic;\n"]))),j=r(184),P=function(){var n=(0,d.UO)().movId,e=(0,l.useState)([]),r=(0,o.Z)(e,2),t=r[0],a=r[1],u=(0,l.useState)(null),c=(0,o.Z)(u,2),i=c[0],p=c[1];return(0,l.useEffect)((function(){var e=function(){var e=(0,s.Z)(f().mark((function e(){var r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v.Loading.dots({svgSize:"250px"}),p(null),e.next=5,(0,Z.q5)(n);case 5:if(0!==(r=e.sent).data.results.length){e.next=9;break}return h.Notify.info("Sorry, no reviews"),e.abrupt("return");case 9:a(r.data.results),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),p(e.t0);case 16:return e.prev=16,v.Loading.remove(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,12,16,19]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,j.jsxs)("div",{children:[i&&(0,j.jsxs)("h2",{children:["error: ",i]}),(0,j.jsx)(b,{children:t.map((function(n){var e=n.author,r=n.content,t=n.created_at;return(0,j.jsxs)(k,{children:[(0,j.jsxs)(w,{children:[(0,j.jsx)(g,{children:e}),(0,j.jsx)("p",{children:(0,x.WU)(new Date(t),"dd MMMM yyyy HH:mm")})]}),(0,j.jsx)(_,{children:r})]},e)}))})]})}}}]);
//# sourceMappingURL=779.ae8931b7.chunk.js.map