(this["webpackJsonpsvg-the-royal"]=this["webpackJsonpsvg-the-royal"]||[]).push([[19],{113:function(e,t,n){"use strict";var i=n(18),r=n(11),o=n(91),a=n(2),c=n(36),s=n(128),l=n(43);var d,u,b=n(103),j=n(229),f=n(120),h=n(213),p=n(131),O=n(129),x=n(3),m=Object(b.a)(j.a)(d||(d=Object(o.a)(["\n  cursor: pointer;\n  height: 0.7rem;\n  width: 0.7rem;\n  border-radius: 50%;\n  border: 1px solid #333;\n  ","\n"])),(function(e){return e.isActive&&Object(f.c)(u||(u=Object(o.a)(["\n      border-color: #a01f26;\n      background-color: #a01f26;\n      outline: 1px solid #a01f26;\n      outline-offset: 0.45rem;\n    "])))})),v=Object(h.a)(j.a),g=Object(a.forwardRef)((function(e,t){var n=e.animationSpeed,o=void 0===n?.35:n,d=e.indicatorSxProps,u=e.centerMode,b=e.sx,f=e.outerSx,h=e.gap,O=void 0===h?16:h,g=e.render,w=Object(a.useState)(e.speed),y=Object(r.a)(w,2),k=y[0],S=y[1],E=Object(a.useState)(1),C=Object(r.a)(E,2),T=(C[0],C[1]),R=function(e,t){var n,i,o=t.size,d=Object(a.useRef)([].concat(Object(c.a)(e),Object(c.a)(a.Children.map(e,(function(e,t){return Object(a.cloneElement)(e,{key:"cloned__".concat(t)})}))))),u=Object(a.useState)((function(){return d.current.slice(0,o)})),b=Object(r.a)(u,2),j=b[0],f=b[1],h=Object(a.useState)(o-1),p=Object(r.a)(h,2),O=p[0],x=p[1],m=Object(a.useState)("next"),v=Object(r.a)(m,2),g=v[0],w=v[1],y=Object(a.useMemo)((function(){var t=O-(o-1)/2;return t<0&&(t+=e.length),t>=e.length&&(t-=e.length),t}),[O,o,e.length]),k=Object(a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=(O+e)%d.current.length,n=Object(s.a)(j,(function(t){Object(l.range)(e).forEach((function(){return t.shift()})),Object(l.range)(e).forEach((function(e){var n=(O+e+1)%d.current.length;t.push(d.current[n])}))}));w("next"),x(t),f(n)}),[j,O]),S=Object(a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=O-e;t<0&&(t+=d.current.length);var n=O-o,i=Object(s.a)(j,(function(t){Object(l.range)(e).forEach((function(){return t.pop()})),Object(l.range)(e).forEach((function(){--n<0&&(n+=d.current.length),t.unshift(d.current[n])}))}));w("prev"),x(t),f(i)}),[O,o,j]);return[j,S,k,{current:y,actualCurrent:(n=y-1,i=o,(n%i+i)%i),direction:g,total:e.length}]}(a.Children.toArray(e.children),{size:e.slidesToShow+2}),P=Object(r.a)(R,4),M=P[0],_=P[1],z=P[2],L=P[3],I=L.current,D=L.direction,G=L.total;Object(a.useEffect)((function(){}),[I]),Object(a.useImperativeHandle)(t,(function(){return{next:z,prev:_}}));var N=Object(a.useMemo)((function(){return Math.round((e.slidesToShow+1)/2)}),[e.slidesToShow]),B=Object(a.useRef)();Object(a.useEffect)((function(){S(e.speed)}),[e.speed]),Object(a.useEffect)((function(){return k?B.current=setInterval((function(){return z()}),k):(B.current&&clearInterval(B.current),B.current=void 0),function(){B.current&&clearInterval(B.current)}}),[k,z]);var A=Object(a.useMemo)((function(){var t=O*(e.slidesToShow-1);return(1*e.size.width-t)/(e.slidesToShow+(u?1:0))}),[e.slidesToShow,e.size,O,u]),Y=Object(a.useCallback)((function(e){return!!u&&e===N}),[u,N]),H=Object(a.useMemo)((function(){return{initial:{opacity:0,x:"prev"===D?"-200%":"200%",flex:0},animate:function(t){var n=t.index;return{opacity:0===n||n===e.slidesToShow+1?0:1,x:0,flex:Y(n)?2:1}},exit:{opacity:0,x:"prev"===D?"200%":"-200%",flex:0}}}),[D,Y,e.slidesToShow]),J=Object(a.useMemo)((function(){return{initial:{width:0},animate:function(e){var t=e.index;return{width:A,scale:Y(t)?2:1}},exit:{width:0}}}),[Y,A]),V=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(I!==t){var i=t;n&&I>=t&&(i+=e.slidesToShow),S(0),I<i?(T(i-I),z(i-I),setTimeout((function(){S(e.speed),T(1)}),(i-I+1)*(null!==o&&void 0!==o?o:550))):(T(I-i),_(I-i),setTimeout((function(){S(e.speed),T(1)}),(I-i+1)*(null!==o&&void 0!==o?o:550)))}};return Object(x.jsxs)(j.a,{sx:f,children:[Object(x.jsx)(j.a,{sx:Object(i.a)({display:"flex",alignItems:"center",gap:"".concat(O,"px"),ml:"-".concat(A+O,"px"),mr:"-".concat(A+O,"px")},b),children:Object(x.jsxs)(p.a,{initial:!1,children:[M.map((function(e,t){return Object(x.jsx)(v,{layout:!0,transition:{duration:o},variants:H,initial:"initial",animate:"animate",exit:"exit",style:{originX:.5,originY:.5},sx:{display:"flex",justifyContent:"center"},custom:{index:t},className:t===N?"center":"",children:Object(x.jsx)(v,{layout:!0,variants:J,transition:{duration:o},custom:{index:t},style:{width:A},children:Object(a.cloneElement)(e,{onClick:1*e.props["data-index"]===N?e.props.onClick:function(){V(1*e.props["data-index"],!0)}})})},"".concat(e.key))})),null===g||void 0===g?void 0:g(L)]})}),Object(x.jsx)(j.a,{sx:d,children:Object(x.jsx)(j.a,{sx:{display:"grid",gridTemplateColumns:"repeat(".concat(G,",1fr)"),gridGap:"2rem"},children:Object(l.range)(G).map((function(e){return Object(x.jsx)(m,{isActive:e===I,onClick:function(){V(e)}})}))})})]})})),w=Object(a.forwardRef)((function(e,t){return Object(x.jsx)(O.SizeMe,{children:function(n){var r=n.size;return Object(x.jsx)(g,Object(i.a)({ref:t,size:r},e))}})}));t.a=w},137:function(e,t,n){"use strict";var i=n(2),r="undefined"!==typeof window?i.useLayoutEffect:i.useEffect;t.a=r},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return X}));var i=n(18),r=n(11),o=n(91),a=n(103),c=n(229),s=n(35),l=n(23),d=n(2);n(93);var u=function(e){return"string"===typeof e},b=n(117),j=n(116);function f(e){return Object(j.a)("MuiBackdrop",e)}Object(b.a)("MuiBackdrop",["root","invisible"]);var h=n(104),p=n(115),O=n(3),x=["classes","className","invisible","component","components","componentsProps","theme"],m=d.forwardRef((function(e,t){var n=e.classes,i=e.className,r=e.invisible,o=void 0!==r&&r,a=e.component,c=void 0===a?"div":a,d=e.components,b=void 0===d?{}:d,j=e.componentsProps,m=void 0===j?{}:j,v=e.theme,g=Object(s.a)(e,x),w=Object(l.a)({},e,{classes:n,invisible:o}),y=function(e){var t=e.classes,n={root:["root",e.invisible&&"invisible"]};return Object(p.a)(n,f,t)}(w),k=b.Root||c,S=m.root||{};return Object(O.jsx)(k,Object(l.a)({"aria-hidden":!0},S,!u(k)&&{as:c,ownerState:Object(l.a)({},w,S.ownerState),theme:v},{ref:t},g,{className:Object(h.a)(y.root,S.className,i)}))})),v=n(97),g=n(222),w=n(125),y=n(135),k=n(136),S=n(148),E=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],C={entering:{opacity:1},entered:{opacity:1}},T={enter:w.b.enteringScreen,exit:w.b.leavingScreen},R=d.forwardRef((function(e,t){var n=e.addEndListener,i=e.appear,r=void 0===i||i,o=e.children,a=e.easing,c=e.in,u=e.onEnter,b=e.onEntered,j=e.onEntering,f=e.onExit,h=e.onExited,p=e.onExiting,x=e.style,m=e.timeout,v=void 0===m?T:m,w=e.TransitionComponent,R=void 0===w?g.a:w,P=Object(s.a)(e,E),M=Object(y.a)(),_=d.useRef(null),z=Object(S.a)(o.ref,t),L=Object(S.a)(_,z),I=function(e){return function(t){if(e){var n=_.current;void 0===t?e(n):e(n,t)}}},D=I(j),G=I((function(e,t){Object(k.b)(e);var n=Object(k.a)({style:x,timeout:v,easing:a},{mode:"enter"});e.style.webkitTransition=M.transitions.create("opacity",n),e.style.transition=M.transitions.create("opacity",n),u&&u(e,t)})),N=I(b),B=I(p),A=I((function(e){var t=Object(k.a)({style:x,timeout:v,easing:a},{mode:"exit"});e.style.webkitTransition=M.transitions.create("opacity",t),e.style.transition=M.transitions.create("opacity",t),f&&f(e)})),Y=I(h);return Object(O.jsx)(R,Object(l.a)({appear:r,in:c,nodeRef:_,onEnter:G,onEntered:N,onEntering:D,onExit:A,onExited:Y,onExiting:B,addEndListener:function(e){n&&n(_.current,e)},timeout:v},P,{children:function(e,t){return d.cloneElement(o,Object(l.a)({style:Object(l.a)({opacity:0,visibility:"exited"!==e||c?void 0:"hidden"},C[e],x,o.props.style),ref:L},t))}}))})),P=["children","components","componentsProps","className","invisible","open","transitionDuration","TransitionComponent"],M=Object(a.a)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.invisible&&t.invisible]}})((function(e){var t=e.ownerState;return Object(l.a)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},t.invisible&&{backgroundColor:"transparent"})})),_=d.forwardRef((function(e,t){var n,i=Object(v.a)({props:e,name:"MuiBackdrop"}),r=i.children,o=i.components,a=void 0===o?{}:o,c=i.componentsProps,d=void 0===c?{}:c,b=i.className,j=i.invisible,f=void 0!==j&&j,h=i.open,p=i.transitionDuration,x=i.TransitionComponent,g=void 0===x?R:x,w=Object(s.a)(i,P),y=function(e){return e.classes}(Object(l.a)({},i,{invisible:f}));return Object(O.jsx)(g,Object(l.a)({in:h,timeout:p},w,{children:Object(O.jsx)(m,{className:b,invisible:f,components:Object(l.a)({Root:M},a),componentsProps:{root:Object(l.a)({},d.root,(!a.Root||!u(a.Root))&&{ownerState:Object(l.a)({},null==(n=d.root)?void 0:n.ownerState)})},classes:y,ref:t,children:r})}))})),z=n(46),L=n(207),I=n(137),D=n(173);var G=d.forwardRef((function(e,t){var n=e.children,i=e.container,o=e.disablePortal,a=void 0!==o&&o,c=d.useState(null),s=Object(r.a)(c,2),l=s[0],u=s[1],b=Object(L.a)(d.isValidElement(n)?n.ref:null,t);return Object(I.a)((function(){a||u(function(e){return"function"===typeof e?e():e}(i)||document.body)}),[i,a]),Object(I.a)((function(){if(l&&!a)return Object(D.a)(t,l),function(){Object(D.a)(t,null)}}),[t,l,a]),a?d.isValidElement(n)?d.cloneElement(n,{ref:b}):n:l?z.createPortal(n,l):l})),N=n(123),B=n(113);function A(e){return Object(O.jsx)("svg",Object(i.a)(Object(i.a)({width:"99.141",height:"53.683",viewBox:"0 0 99.141 53.683"},e),{},{children:Object(O.jsxs)("g",{id:"Group_349","data-name":"Group 349",transform:"translate(0 1.5)",children:[Object(O.jsx)("line",{id:"Line_264","data-name":"Line 264",x2:"81.086",transform:"translate(0 25.342)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"}),Object(O.jsx)("path",{id:"Path_1266","data-name":"Path 1266",d:"M350.258,7071.391l15.084,11.018-15.084,10.23",transform:"translate(-284.256 -7057.109)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"}),Object(O.jsx)("path",{id:"Path_1267","data-name":"Path 1267",d:"M333.7,7102.161a25.342,25.342,0,1,0,0-39.421",transform:"translate(-277.33 -7057.108)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"})]})}))}function Y(e){return Object(O.jsx)("svg",Object(i.a)(Object(i.a)({width:"99.14",height:"53.683",viewBox:"0 0 99.14 53.683"},e),{},{children:Object(O.jsxs)("g",{id:"Group_348","data-name":"Group 348",transform:"translate(-332.203 -7055.609)",children:[Object(O.jsx)("line",{id:"Line_264","data-name":"Line 264",x1:"81.086",transform:"translate(350.258 7082.451)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"}),Object(O.jsx)("path",{id:"Path_1266","data-name":"Path 1266",d:"M365.342,7071.391l-15.084,11.018,15.084,10.23",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"}),Object(O.jsx)("path",{id:"Path_1267","data-name":"Path 1267",d:"M374.97,7102.161a25.342,25.342,0,1,1,0-39.421",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"})]})}))}function H(e){return Object(O.jsx)("svg",Object(i.a)(Object(i.a)({width:"28.572",height:"28.572",viewBox:"0 0 28.572 28.572"},e),{},{children:Object(O.jsxs)("g",{id:"Group_347","data-name":"Group 347",transform:"translate(1.768 1.768)",children:[Object(O.jsx)("line",{id:"Line_287","data-name":"Line 287",x2:"25.036",y2:"25.036",fill:"none",stroke:"#fff","stroke-width":"5"}),Object(O.jsx)("line",{id:"Line_288","data-name":"Line 288",y1:"25.036",x2:"25.036",fill:"none",stroke:"#fff","stroke-width":"5"})]})}))}var J,V=n(94),W=Object(a.a)(c.a)(J||(J=Object(o.a)(["\n  p {\n    color: white;\n    font-weight: 600;\n    font-size: 20px;\n    display: none;\n    font-family: Raleway;\n  }\n  p:nth-of-type(2) {\n    display: inline-block;\n  }\n"])));function X(e){var t=e.sx,n=e.open,o=e.onClose,a=e.slidesData,s=(e.initial,Object(d.useRef)(null)),l=Object(d.useRef)(null),u=Object(d.useRef)(null),b=Object(d.useState)(!1),j=Object(r.a)(b,2),f=j[0],h=j[1];return Object(d.useEffect)((function(){h(n)}),[n]),Object(O.jsx)(_,{open:n,sx:Object(i.a)({bgcolor:"rgba(0,0,0,.75)","& *":{boxSizing:"border-box"}},t),children:Object(O.jsxs)(c.a,{sx:{display:"flex",flexDirection:"column",alignItems:"stretch",width:"100vw",height:"100vh",p:1},children:[Object(O.jsxs)(c.a,{sx:{display:"grid",gridTemplateColumns:"1fr auto auto auto",gridGap:"1rem",padding:"1rem",alignItems:"center",width:"100%",height:"100%"},children:[Object(O.jsx)(W,{ref:u}),Object(O.jsx)(c.a,{}),Object(O.jsx)(c.a,{}),Object(O.jsx)(H,{style:{height:"1.7rem",width:"1.7rem",cursor:"pointer"},onClick:o})]}),Object(O.jsx)(c.a,{sx:{flex:1},children:f&&Object(O.jsxs)(c.a,{sx:{display:"grid",gridTemplateColumns:"20vw 1fr 20vw"},children:[Object(O.jsx)(c.a,{sx:{alignSelf:"center",ml:2,zIndex:1201,cursor:"pointer"},onClick:function(){var e,t;null===(e=s.current)||void 0===e||e.prev(),null===(t=l.current)||void 0===t||t.prev()},children:Object(O.jsx)(Y,{})}),Object(O.jsx)(B.a,{ref:s,slidesToShow:1,indicatorSxProps:{display:"none"},outerSx:{pb:2,height:"100%"},sx:{height:"100%"},gap:0,children:a.slides.map((function(e){return Object(O.jsxs)(c.a,{children:[Object(O.jsx)(G,{container:u.current,children:Object(O.jsx)(N.a,{sx:{color:"white"},children:e.layers[0].text})}),Object(O.jsx)(V.a,{ratio:"4/3",children:Object(O.jsx)("img",{src:e.params.bg.image})})]},e.id)}))}),Object(O.jsx)(c.a,{sx:{alignSelf:"center",mr:2,zIndex:1201,justifySelf:"end",cursor:"pointer"},onClick:function(){var e,t;console.log(s.current),null===(e=s.current)||void 0===e||e.next(),null===(t=l.current)||void 0===t||t.next()},children:Object(O.jsx)(A,{})})]})}),Object(O.jsx)(c.a,{sx:{display:"none",height:"15vh",width:"".concat(20*a.slides.length,"vh"),alignSelf:"center"},children:Object(O.jsx)(B.a,{ref:l,slidesToShow:a.slides.length,indicatorSxProps:{display:"none"},outerSx:{pb:2},children:a.slides.map((function(e){return Object(O.jsx)(c.a,{sx:{height:"15vh"},children:Object(O.jsx)(V.a,{ratio:"4/3",children:Object(O.jsx)("img",{src:e.params.bg.image})})},"".concat(e.id,"-thumb"))}))})})]})})}},191:function(e,t,n){},225:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var i,r,o,a=n(36),c=n(11),s=n(91),l=n(103),d=n(229),u=n(123),b=n.p+"static/media/bg-desktop.3ce90e71.webp",j=n(6),f=n(113),h=(n(191),n(139)),p=n(2),O=n(43),x=n(94),m=n(3),v=Object(l.a)("img")(i||(i=Object(s.a)(["\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n  object-position: center;\n"]))),g=Object(l.a)(d.a)(r||(r=Object(s.a)(['\n  &:after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.46);\n    display: block;\n    content: "";\n  }\n']))),w=Object(l.a)(u.a)(o||(o=Object(s.a)(["\n  color: #a01f26;\n  font-weight: 600;\n  text-align: center;\n  font-size: 12px;\n  font-family: Raleway;\n  display: inline-block;\n\n  will-change: transform;\n  transition: transform 0.6s ease;\n  transform: scale(1);\n  transform-origin: top center;\n  .center & {\n    transform: translateY(-0.5rem) scale(0.75);\n  }\n"])));function y(e){var t=Object(j.b)(),n=t.width,i=t.height,r=Object(p.useState)(-1),o=Object(c.a)(r,2),s=o[0],l=o[1],u=Object(p.useMemo)((function(){var t=Object(a.a)(e.slidesData.slides);return s<0||Object(O.range)(s).forEach((function(){var e=t.shift();t.push(e)})),{slides:t}}),[e.slidesData,s]);return Object(m.jsxs)(d.a,{sx:{width:"100vw",height:"100vh",position:"absolute",top:0,left:0,bottom:0,overflow:"hidden"},children:[Object(m.jsx)(g,{sx:{position:"absolute",top:0,left:0,right:0},children:Object(m.jsx)(x.a,{ratio:"".concat(n,"/").concat(2*i/3),children:Object(m.jsx)(v,{src:b})})}),Object(m.jsxs)(d.a,{sx:{position:"absolute",bottom:0,left:"".concat(1e4/1920,"vw"),right:"".concat(1e4/1920,"vw")},children:[Object(m.jsx)(f.a,{slidesToShow:5,speed:s>=0?0:1e4,animationSpeed:.6,indicatorSxProps:{width:"auto",pb:4,alignSelf:"center"},centerMode:!0,sx:{transform:"translateY(-50%)",height:300},outerSx:{display:"flex",flexDirection:"column"},children:e.slidesData.slides.map((function(e,t){return Object(m.jsxs)(d.a,{"data-key":e.id,"data-index":t,sx:{position:"relative",cursor:"pointer"},onClick:function(){return l(t-1)},children:[Object(m.jsx)(x.a,{ratio:"4/3",children:Object(m.jsx)("img",{src:e.params.bg.image})}),Object(m.jsx)(w,{sx:{position:"absolute",top:"calc(100% + 16px)",left:0,right:0},children:e.layers[0].text})]},e.id)}))}),s>=0&&Object(m.jsx)(h.a,{open:!0,slidesData:u,initial:1,onClose:function(){return l(-1)}})]})]})}},94:function(e,t,n){"use strict";var i,r=n(91),o=n(103),a=n(229),c=Object(o.a)(a.a)(i||(i=Object(r.a)(["\n  position: relative;\n  @supports (aspect-ratio: 1/1) {\n    aspect-ratio: calc(",');\n  }\n  > :first-child {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n  }\n  > img {\n    height: auto;\n  }\n  ::before {\n    content: "";\n    display: block;\n    width: 100%;\n    @supports not (aspect-ratio: 1/1) {\n      height: 0;\n      padding-bottom: calc(100% / (',"));\n    }\n    @supports (aspect-ratio: 1/1) {\n      aspect-ratio: calc(",");\n    }\n  }\n"])),(function(e){return e.ratio}),(function(e){return e.ratio}),(function(e){return e.ratio}));c.defaultProps={ratio:"1/1"},t.a=c}}]);
//# sourceMappingURL=19.04ea9762.chunk.js.map