"use strict";(self.webpackChunkmoviebes_website=self.webpackChunkmoviebes_website||[]).push([[407],{5394:function(n,t,e){e.d(t,{n:function(){return l}});var o,r,i=e(168),c=e(6444),a=c.ZP.div(o||(o=(0,i.Z)(["\n    display: flex;\n    justify-content: center;\n"]))),s=c.ZP.button(r||(r=(0,i.Z)(["\n    font-weight: 600;\n    border: 0;\n    width: 320px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    padding: 10px;\n    border-radius: 20px;\n    color: ",";\n    background-color: ",";\n    -webkit-box-shadow: 10px 3px 23px -3px rgba(0,0,0,0.75);\n    -moz-box-shadow: 10px 3px 23px -3px rgba(0,0,0,0.75);\n    box-shadow: 10px 3px 23px -3px rgba(0,0,0,0.75);\n    cursor: pointer;\n    transition: all 0.3s ease 0s;\n    &:hover{\n        background-color: ",";\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.primaryTextColor}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.accentHoverColor}),(function(n){return n.theme.colors.accentColor})),u=e(184),l=function(n){var t=n.loadMore;return(0,u.jsx)(a,{children:(0,u.jsx)(s,{type:"button",onClick:t,children:" Load more"})})}},1931:function(n,t,e){e.d(t,{u:function(){return l}});var o,r=e(9439),i=e(2791),c=e(168),a=e(6444).ZP.div(o||(o=(0,c.Z)(["\n    position: fixed;\n    bottom: 50px;\n    right: 50px;\n    cursor: pointer;\n\n    & > svg {\n        height: 50px;\n        width: 50px;\n        margin: 0;\n        padding: 0;\n        transition: all 0.3s ease 0s;\n        color: ",";\n        &:hover {\n        color: ","; \n        }\n    }\n"])),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.accentHoverColor})),s=e(4373),u=e(184),l=function(){var n=(0,i.useState)(!1),t=(0,r.Z)(n,2),e=t[0],o=t[1];(0,i.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>1500?o(!0):o(!1)}))}),[]);return(0,u.jsx)(u.Fragment,{children:e&&(0,u.jsx)(a,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},type:"button",children:(0,u.jsx)(s.bbr,{})})})}},7628:function(n,t,e){e.r(t),e.d(t,{default:function(){return H}});var o,r,i,c,a,s,u,l,d,p=e(3433),f=e(9439),x=e(168),h=e(6444),m=h.ZP.ul(o||(o=(0,x.Z)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n    grid-gap: 1em;\n    padding: 0px 20px;\n"]))),g=h.ZP.h1(r||(r=(0,x.Z)(["\nfont-size: ",";\nfont-weight: ",";\nmargin: 37px 37px 27px 37px;\n"])),(function(n){return n.theme.colors.pageBackground}),(function(n){return n.theme.fontSizes.medium})),v=h.ZP.li(i||(i=(0,x.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n"]))),Z=h.ZP.img(c||(c=(0,x.Z)(["\nwidth: 100%;\nborder-radius: 20px;\ntransition: all 0.3s ease 0s;\n\n:hover {\n    transform: scale(1.04);\n}\n"]))),b=e(1087),j=e(5394),w=e(184),y=function(n){var t=n.movies,e=n.loadMore;return(0,w.jsxs)("div",{children:[(0,w.jsx)(g,{children:"Upcoming"}),(0,w.jsx)(m,{children:t.map((function(n){return(0,w.jsx)(v,{children:(0,w.jsx)(b.OL,{to:"/moviespage/".concat(n.id),children:(0,w.jsx)(Z,{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:"poster"})})},n.id)}))}),t.length>=1&&(0,w.jsx)(j.n,{loadMore:e})]})},C=e(8683),k=e(2791),P=e(5717),_=e(9126),z=(e(3037),e(8688),h.ZP.div(a||(a=(0,x.Z)(["\n  width: 70%;\n  margin: 20px auto;\n  height: 100%;\n\n  @media(max-width: 768px) {\n    display: none;\n}\n"])))),M=h.ZP.img(s||(s=(0,x.Z)(["\n  width: 50rem;\n  margin: 20 auto;\n  border-radius: 7%;\n"]))),S=h.ZP.div(u||(u=(0,x.Z)(["\n  transition: transform 300ms;\n  transform: scale(0.8); \n  opacity: 0.3;  \n\n  ","\n"])),(function(n){return n.active&&"\n    transform: scale(1);\n    opacity: 1;\n  "})),T=h.ZP.div(l||(l=(0,x.Z)(["\n  color: ","; \n  position: absolute;\n  cursor: pointer;\n  z-index: 10;\n  right: -10%;\n  top: 50%;\n  transition: all 0.3s ease 0s;\n\n  & > svg {\n    font-size: 40px;\n  }\n\n  &:hover,\n  &:focus {\n    color: ","; \n  }\n"])),(function(n){return n.theme.colors.secondaryTextColor}),(function(n){return n.theme.colors.accentColor})),L=h.ZP.div(d||(d=(0,x.Z)(["\n  color: ","; \n  position: absolute;\n  cursor: pointer;\n  z-index: 10;\n  left: -10%;\n  top: 50%;\n  transition: all 0.3s ease 0s;\n\n  & > svg {\n    font-size: 40px;\n  }\n\n  &:hover,\n  &:focus {\n    color: ","; \n  }\n"])),(function(n){return n.theme.colors.secondaryTextColor}),(function(n){return n.theme.colors.accentColor})),E=e(4390),B=e(407),F=(0,h.ZP)("div")(B.$_,B.Dh,B.bK,B.GQ,B.eC,B.Oq,B.Cg,B.FK),O=function(){var n=(0,k.useState)([]),t=(0,f.Z)(n,2),e=t[0],o=t[1];(0,k.useEffect)((function(){(0,E.rj)().then((function(n){o(n.results)}))}),[]);var r=function(n){var t=n.onClick;return(0,w.jsx)(T,{onClick:t,children:(0,w.jsx)(_.PxJ,{})})},i=function(n){var t=n.onClick;return(0,w.jsx)(L,{onClick:t,children:(0,w.jsx)(_.RVs,{})})},c=(0,k.useState)(0),a=(0,f.Z)(c,2),s=a[0],u=a[1],l={infinite:!0,lazyLoad:!0,speed:300,slidesToShow:3,centerMode:!0,centerPadding:0,nextArrow:(0,w.jsx)(r,{}),prevArrow:(0,w.jsx)(i,{}),beforeChange:function(n,t){return u(t)}};return(0,w.jsx)(F,{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gridGap:"1rem",children:(0,w.jsx)(z,{children:(0,w.jsx)(P.Z,(0,C.Z)((0,C.Z)({},l),{},{children:e.map((function(n,t){var e;return(0,w.jsx)(S,{active:null===(e=t===s)||void 0===e||e,children:(0,w.jsx)(b.OL,{to:"/moviespage/".concat(n.id),children:(0,w.jsx)(M,{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n})})},n.id)}))}))})})},q=e(1931),A=function(n){var t=n.movies,e=n.loadMore;return(0,w.jsxs)("section",{children:[(0,w.jsx)(O,{}),(0,w.jsx)(y,{movies:t,loadMore:e}),(0,w.jsx)(q.u,{})]})},G=e(1454),H=function(){var n=(0,k.useState)(null),t=(0,f.Z)(n,2),e=t[0],o=t[1],r=(0,k.useState)(1),i=(0,f.Z)(r,2),c=i[0],a=i[1];(0,k.useEffect)((function(){(0,E.yB)(c).then((function(n){o((function(t){return 1===c?n.results:[].concat((0,p.Z)(t),(0,p.Z)(n.results))}))}))}),[c]);return(0,w.jsx)(w.Fragment,{children:null===e?(0,w.jsx)(G.a,{}):(0,w.jsx)(A,{movies:e,loadMore:function(){a((function(n){return n+1}))}})})}},4390:function(n,t,e){e.d(t,{IR:function(){return s},d0:function(){return u},rj:function(){return c},yB:function(){return a}});var o=e(2388),r="64d6e48eb0f228948a0484363da88192",i="https://api.themoviedb.org/3",c=function(){var n="".concat(i,"/trending/movie/day?api_key=").concat(r);return o.Z.get(n).then((function(n){return n.data}))},a=function(n){var t="".concat(i,"/movie/upcoming?&page=").concat(n,"&api_key=").concat(r);return o.Z.get(t).then((function(n){return n.data}))},s=function(n,t){var e="".concat(i,"/search/movie?page=").concat(t,"&query=").concat(n,"&api_key=").concat(r,"&include_adult=false");return o.Z.get(e).then((function(n){return n.data}))},u=function(n){var t="".concat(i,"/movie/").concat(n,"?api_key=").concat(r);return o.Z.get(t).then((function(n){return n.data}))}}}]);
//# sourceMappingURL=407.7b74d9e7.chunk.js.map