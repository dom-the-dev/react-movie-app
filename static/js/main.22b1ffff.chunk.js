(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),r=c.n(n),s=c(28),i=c.n(s),o=(c(35),c(36),c(9)),l=c(2),j=c(8),d=c.n(j),u=c(13),b=c(11),h=c(14),p=c.n(h);var v=function(e){var t=e.movie;return Object(a.jsxs)("div",{className:"movie-card",children:[t.poster_path?Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w200"+t.poster_path,alt:t.title}):Object(a.jsx)("div",{className:"no-image",children:"no image available"}),Object(a.jsxs)("div",{className:"movie-card__info",children:[Object(a.jsx)("h4",{className:"movie-card__title",children:t.title?t.title:t.name}),Object(a.jsx)("span",{className:"movie-card__voting",children:t.vote_average})]})]})},m="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("e588720192965bd88bddb2ca0700875d"),O="https://api.themoviedb.org/3/search/movie?api_key=".concat("e588720192965bd88bddb2ca0700875d"),x=function(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(null),i=Object(b.a)(s,2),l=i[0],j=i[1];Object(n.useEffect)((function(){h(m)}),[]);var h=function(){var e=Object(u.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(t);case 2:c=e.sent,r(c.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(d.a.mark((function e(t,c){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=c.replaceAll(" ","+"),h("".concat(O,"&query=").concat(a));case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"search",children:Object(a.jsxs)("form",{onSubmit:function(e){return x(e,l)},children:[Object(a.jsx)("input",{className:"search-input",onChange:function(e){return j(e.target.value)},type:"text",placeholder:"Search"}),Object(a.jsx)("button",{className:"search-button",type:"submit",children:"Go"})]})}),Object(a.jsx)("div",{className:"movies",children:c&&c.length?function(e){return e.map((function(e){return Object(a.jsx)(o.b,{to:"/movie/".concat(e.id),children:Object(a.jsx)(v,{movie:e})},e.id)}))}(c):"no movies available"})]})},f=function(){var e=Object(l.f)().movieId,t="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("e588720192965bd88bddb2ca0700875d","&language=en-US"),c=Object(n.useState)(!0),r=Object(b.a)(c,2),s=r[0],i=r[1],o=Object(n.useState)(null),j=Object(b.a)(o,2),h=j[0],v=j[1],m=Object(n.useState)(null),O=Object(b.a)(m,2),x=O[0],f=O[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get(t);case 3:c=e.sent,v(c.data),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),404===e.t0.response.status&&f("Movie could not be found."),500===e.t0.response.status&&f("There is a problem with the server.");case 12:i(!1);case 13:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var g;return s?"is loading..":x||Object(a.jsxs)("div",{className:"movie-detail",children:[Object(a.jsx)("div",{className:"movie-detail__poster",children:Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w300"+h.poster_path,alt:"Poster of ".concat(h.title)})}),Object(a.jsxs)("div",{className:"movie-detail__infos",children:[Object(a.jsx)("h1",{className:"movie-detail__title",children:h.title}),Object(a.jsx)("h4",{children:"About the movie"}),Object(a.jsx)("p",{children:h.overview}),Object(a.jsx)("h4",{children:"Genres:"}),Object(a.jsx)("ul",{children:(g=h.genres,g.map((function(e){return Object(a.jsx)("li",{children:e.name},e.id)})))})]})]})},g=function(){return Object(a.jsx)("div",{className:"header",children:Object(a.jsx)(o.b,{to:"/",children:Object(a.jsx)("h1",{className:"app-title",children:"React Movie App"})})})};var _=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)(g,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(x,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/movie/:movieId",children:Object(a.jsx)(f,{})})]})]})})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.22b1ffff.chunk.js.map