"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[87],{2315:function(n,e,t){t.r(e),t.d(e,{default:function(){return Mn}});var r=t(3531),o=function(n){return n.calendar.currentMonth},i=function(n){return n.calendar.indexCurrentDay},a=function(n){return n.calendar.choosedDay},c=function(n){return n.calendar.isLoading},d=t(9831),u=t(8558),l=t(8030),h=t(1104),s=t(6753),x=t(9040),f=t(5719),p=t(6386),m=t(8527),w=t(4522);function g(n){return(0,w.Z)(1,arguments),1===(0,m.default)(n).getDate()}var Z=t(5375);function b(n){return(0,w.Z)(1,arguments),(0,Z.default)(Date.now(),n)}var v=t(786),y=t(4888);function j(n){(0,w.Z)(1,arguments);var e=(0,m.default)(n);return(0,v.default)(e).getTime()===(0,y.default)(e).getTime()}var C,D,k,M,S,P,T,B,E,L,_,A,N,W,z,F,H,I,O,U=t(3598),R=t(7609),q=t(168),V=t(1087),G=t(8547),J=G.ZP.div(C||(C=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (min-width: 768px) {\n    width: 278px;\n  }\n"]))),K=G.ZP.div(D||(D=(0,q.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  width: 192px;\n  height: 30px;\n  padding: 8px 12px;\n\n  background-color: ",";\n  border-radius: 8px;\n  @media (min-width: 768px) {\n    height: 34px;\n  }\n"])),(function(n){return n.theme.notChangedcolors.accentColor})),Q=G.ZP.p(k||(k=(0,q.Z)(["\n  min-width: 94px;\n  height: 18px;\n\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.29;\n\n  text-align: center;\n  text-transform: uppercase;\n\n  color: ",";\n  @media (min-width: 768px) {\n    min-width: 107px;\n\n    font-size: 16px;\n    line-height: 1.12;\n  }\n"])),(function(n){return n.theme.notChangedcolors.textBtnColor})),X=G.ZP.div(M||(M=(0,q.Z)(["\n  display: flex;\n"]))),Y=(0,G.ZP)(V.NavLink)(S||(S=(0,q.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  isolation: isolate;\n  border: 1px solid ",";\n\n  width: 36px;\n  height: 30px;\n\n  background: ",";\n  opacity: ",";\n  &.active {\n    &:hover,\n    :focus {\n      box-shadow: none;\n    }\n  }\n\n  @media (min-width: 768px) {\n    width: 38px;\n    height: 34px;\n  }\n"])),(function(n){return n.theme.borderColors.calendar}),(function(n){return n.theme.bgColors.page}),(function(n){return n.disabled?"0.3":"1"})),$=(0,G.ZP)(Y)(P||(P=(0,q.Z)(["\n  border-radius: 8px 0px 0px 8px;\n  border-right: none;\n  transition: box-shadow ",";\n  &:hover {\n    box-shadow: -4px 2px 10px rgba(136, 165, 191, 1);\n  }\n"])),(function(n){return n.theme.animation})),nn=(0,G.ZP)(Y)(T||(T=(0,q.Z)(["\n  border-radius: 0px 8px 8px 0px;\n\n  transition: box-shadow ",";\n  &:hover {\n    box-shadow: 4px 2px 10px rgba(136, 165, 191, 1);\n  }\n"])),(function(n){return n.theme.animation})),en=G.ZP.svg(B||(B=(0,q.Z)(["\n  width: 16px;\n  height: 16px;\n  stroke: ",";\n  fill: transparent;\n  @media (min-width: 768px) {\n    width: 18px;\n    height: 18px;\n  }\n"])),(function(n){return n.theme.textColors.modalText})),tn=t(184),rn=function(n){var e=n.currentIndex,t=n.choosedDay,i=(0,d.default)((0,r.useSelector)(o)),a=(0,r.useDispatch)(),m=(0,r.useSelector)(c),w=(0,u.Z)(new Date((0,l.default)(i,1)),{representation:"date"}),Z=(0,u.Z)(new Date((0,h.default)(i,1)),{representation:"date"}),v=(0,u.Z)(new Date((0,s.default)(new Date(t),1)),{representation:"date"}),y=(0,u.Z)(new Date((0,x.default)(new Date(t),1)),{representation:"date"});return(0,tn.jsxs)(J,{children:[(0,tn.jsx)(K,{children:null!==e?(0,tn.jsx)(Q,{children:(0,p.default)(new Date(t),"d MMMM yyyy")}):(0,tn.jsx)(Q,{children:(0,p.default)(i,"MMMM yyyy")})}),(0,tn.jsxs)(X,{children:[null!==e?g(new Date(t))?(0,tn.jsx)($,{disabled:!0,children:(0,tn.jsx)(en,{width:"20",height:"20",children:(0,tn.jsx)("use",{href:"".concat(R.Z,"#calendar-right-sf")})})}):(0,tn.jsx)($,{to:"day/".concat(v),onClick:function(){a((0,U.v_)(v)),a((0,U.he)(e-1))},children:(0,tn.jsx)(en,{width:"20",height:"20",children:(0,tn.jsx)("use",{href:"".concat(R.Z,"#calendar-right-sf")})})}):b(new Date(i))?(0,tn.jsx)($,{disabled:!0,children:(0,tn.jsx)(en,{width:"20",height:"20",children:(0,tn.jsx)("use",{href:"".concat(R.Z,"#calendar-right-sf")})})}):(0,tn.jsx)($,{to:"month/".concat((0,u.Z)(new Date((0,l.default)((0,f.default)(new Date(i)),1)),{representation:"date"})),onClick:function(){m||(a((0,U.HS)()),a((0,U.Od)(w)),a((0,U.v_)((0,u.Z)(new Date((0,l.default)((0,f.default)(new Date(i)),1)),{representation:"date"}))))},disabled:m,children:(0,tn.jsx)(en,{width:"20",height:"20",children:(0,tn.jsx)("use",{href:"".concat(R.Z,"#calendar-right-sf")})})}),null!==e?j(new Date(t))?(0,tn.jsx)(nn,{disabled:!0,children:(0,tn.jsx)(en,{children:(0,tn.jsx)("use",{href:"".concat(R.Z,"#calendar-left-sf")})})}):(0,tn.jsx)(nn,{to:"day/".concat(y),onClick:function(){a((0,U.v_)(y)),a((0,U.he)(e+1))},children:(0,tn.jsx)(en,{children:(0,tn.jsx)("use",{href:"".concat(R.Z,"#calendar-left-sf")})})}):(0,tn.jsx)(nn,{to:"month/".concat((0,u.Z)(new Date((0,h.default)((0,f.default)(new Date(i)),1)),{representation:"date"})),onClick:function(){m||(a((0,U.HS)()),a((0,U.Od)(Z)),a((0,U.v_)((0,u.Z)(new Date((0,h.default)((0,f.default)(new Date(i)),1)),{representation:"date"}))))},disabled:m,children:(0,tn.jsx)(en,{children:(0,tn.jsx)("use",{href:"".concat(R.Z,"#calendar-left-sf")})})})]})]})},on=G.ZP.div(E||(E=(0,q.Z)(["\n  display: flex;\n"]))),an=(0,G.ZP)(V.NavLink)(L||(L=(0,q.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n\n  width: 76px;\n  height: 34px;\n\n  background: ",";\n\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.29px;\n\n  color: ",";\n\n  &.active {\n    background: ",";\n    color: ",";\n    &:hover,\n    :focus {\n      background-color: ",";\n      color: ",";\n      box-shadow: none;\n    }\n  }\n  @media (min-width: 768px) {\n    width: 82px;\n\n    font-size: 16px;\n    line-height: 1.12;\n  }\n"])),(function(n){return n.theme.dayMonthSwicher.bgColor}),(function(n){return n.theme.dayMonthSwicher.textColor}),(function(n){return n.theme.dayMonthSwicher.activeBgColor}),(function(n){return n.theme.dayMonthSwicher.activeTextColor}),(function(n){return n.theme.notChangedcolors.hoverBtnColor}),(function(n){return n.theme.notChangedcolors.textBtnColor})),cn=(0,G.ZP)(an)(_||(_=(0,q.Z)(["\n  padding: 8px 16px;\n\n  border: none;\n  border-right: ",";\n  border-radius: 8px 0px 0px 8px;\n\n  transition: background-color ",",\n    box-shadow ",";\n\n  &:hover,\n  :focus {\n    background-color: ",";\n    color: ",";\n    box-shadow: -4px 2px 16px rgba(136, 165, 191, 1);\n  }\n"])),(function(n){return n.theme.dayMonthSwicher.borderColor}),(function(n){return n.theme.animation}),(function(n){return n.theme.animation}),(function(n){return n.theme.notChangedcolors.hoverBtnColor}),(function(n){return n.theme.notChangedcolors.textBtnColor})),dn=(0,G.ZP)(cn)(A||(A=(0,q.Z)(["\n  background: ",";\n  color: ",";\n"])),(function(n){return n.theme.dayMonthSwicher.activeBgColor}),(function(n){return n.theme.dayMonthSwicher.activeTextColor})),un=(0,G.ZP)(an)(N||(N=(0,q.Z)(["\n  padding: 8px 25px;\n  border: none;\n  border-radius: 0px 8px 8px 0px;\n\n  transition: background-color ",",\n    box-shadow ",";\n\n  &:hover,\n  :focus {\n    background-color: ",";\n    color: ",";\n    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);\n  }\n  @media (min-width: 768px) {\n    padding: 8px 26px;\n  }\n"])),(function(n){return n.theme.animation}),(function(n){return n.theme.animation}),(function(n){return n.theme.notChangedcolors.hoverBtnColor}),(function(n){return n.theme.notChangedcolors.textBtnColor})),ln=(0,G.ZP)(un)(W||(W=(0,q.Z)(["\n  background: ",";\n  color: ",";\n"])),(function(n){return n.theme.dayMonthSwicher.activeBgColor}),(function(n){return n.theme.dayMonthSwicher.activeTextColor})),hn=function(){var n=(0,r.useDispatch)(),e=(0,r.useSelector)(o),t=(0,r.useSelector)(a),c=(0,r.useSelector)(i),d=null!==c?cn:dn,l=null!==c?ln:un;return(0,tn.jsxs)(on,{children:[b(new Date(e))?(0,tn.jsx)(d,{to:"month/".concat((0,u.Z)(new Date(e),{representation:"date"})),onClick:function(){n((0,U.he)(null))},children:"Month"}):(0,tn.jsx)(d,{to:"month/".concat((0,u.Z)(new Date(t),{representation:"date"})),onClick:function(){n((0,U.he)(null))},children:"Month"}),b(new Date(e))?(0,tn.jsx)(l,{to:"day/".concat((0,u.Z)(new Date(e),{representation:"date"})),onClick:function(){n((0,U.v_)((0,u.Z)(new Date(e),{representation:"date"}))),n((0,U.he)(Number((0,p.default)(new Date(e),"d"))-1))},children:"Day"}):(0,tn.jsx)(l,{to:"day/".concat((0,u.Z)(new Date(t),{representation:"date"})),onClick:function(){n((0,U.v_)((0,u.Z)(new Date(t),{representation:"date"}))),n((0,U.he)(Number((0,p.default)(new Date(t),"d"))-1))},children:"Day"})]})},sn=G.ZP.div(z||(z=(0,q.Z)(["\n  display: flex;\n  @media (max-width: 767px) {\n    flex-direction: column;\n    gap: 18px;\n  }\n  @media (min-width: 768px) {\n    align-items: center;\n    justify-content: space-between;\n  }\n"]))),xn=function(){var n=(0,r.useSelector)(a),e=(0,r.useSelector)(i);return(0,tn.jsxs)(sn,{children:[(0,tn.jsx)(rn,{choosedDay:n,currentIndex:e}),(0,tn.jsx)(hn,{})]})},fn=G.ZP.div(F||(F=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  @media (min-width: 768px) {\n    gap: 32px;\n  }\n  @media (min-width: 1280px) {\n    padding-top: 0;\n  }\n"]))),pn=t(7689),mn=t(2791),wn=t(9136),gn=t(9439),Zn=t(4832),bn=G.ZP.ul(H||(H=(0,q.Z)(["\n  background-color: ",";\n  border: 1px solid ",";\n  padding: 16px;\n  border-radius: 8px;\n  justify-content: space-between;\n  display: flex;\n  width: 100%;\n  margin-bottom: 14px;\n  @media (min-width: 768px) {\n    padding: 14px 40px;\n    margin-bottom: 18px;\n  }\n  @media (min-width: 1440px) {\n    padding: 14px 60px;\n    margin-bottom: 15px;\n  }\n"])),(function(n){return n.theme.bgColors.page}),(function(n){return n.theme.borderColors.calendar})),vn=G.ZP.li(I||(I=(0,q.Z)(["\n  color: ",";\n  font-weight: 600;\n"])),(function(n){return n.theme.textColors.main})),yn=(0,G.ZP)(vn)(O||(O=(0,q.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.notChangedcolors.accentColor})),jn=["MON","TUE","WED","THU","FRI"],Cn=["SAT","SUN"];function Dn(){var n=(0,Zn.a)("(min-width: 768px)"),e=(0,gn.Z)(n,1)[0];return(0,tn.jsxs)(bn,{children:[jn.map((function(n){return(0,tn.jsx)(vn,{children:e?n:n.slice(0,1)},n)})),Cn.map((function(n){return(0,tn.jsx)(yn,{children:e?n:n.slice(0,1)},n)}))]})}function kn(){return(0,tn.jsx)("div",{children:"Calendar Table"})}function Mn(){var n=(0,r.useDispatch)(),e=(0,r.useSelector)(o);return(0,mn.useEffect)((function(){n((0,wn.qV)({month:(0,p.default)(new Date(e),"M"),year:(0,p.default)(new Date(e),"yyyy")}))}),[e,n]),(0,tn.jsxs)(fn,{children:[(0,tn.jsx)(xn,{}),(0,tn.jsx)(pn.j3,{}),(0,tn.jsxs)(pn.Z5,{children:[(0,tn.jsx)(pn.AW,{index:!0,element:(0,tn.jsx)(pn.Fg,{to:"month/".concat(e)})}),(0,tn.jsx)(pn.AW,{path:"month/:currentDate",element:(0,tn.jsxs)(tn.Fragment,{children:[(0,tn.jsx)(Dn,{}),(0,tn.jsx)(kn,{})]})}),(0,tn.jsx)(pn.AW,{path:"day/:currentDate",element:(0,tn.jsx)("div",{children:"Day "})})]})]})}},4832:function(n,e,t){t.d(e,{a:function(){return d}});var r=t(1413),o=t(9439),i=t(2791),a=Boolean(null==globalThis?void 0:globalThis.document)?i.useLayoutEffect:i.useEffect,c=(t(184),(0,i.createContext)({getDocument:function(){return document},getWindow:function(){return window}}));function d(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.ssr,d=void 0===t||t,u=e.fallback,l=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).defer,e=(0,i.useReducer)((function(n){return n+1}),0),t=(0,o.Z)(e,2)[1];return a((function(){n&&t()}),[n]),(0,i.useContext)(c)}(),h=l.getWindow,s=Array.isArray(n)?n:[n],x=Array.isArray(u)?u:[u];x=x.filter((function(n){return null!=n}));var f=(0,i.useState)((function(){return s.map((function(n,e){return{media:n,matches:d?!!x[e]:h().matchMedia(n).matches}}))})),p=(0,o.Z)(f,2),m=p[0],w=p[1];return(0,i.useEffect)((function(){var n=h();w(s.map((function(e){return{media:e,matches:n.matchMedia(e).matches}})));var e=s.map((function(e){return n.matchMedia(e)})),t=function(n){w((function(e){return e.slice().map((function(e){return e.media===n.media?(0,r.Z)((0,r.Z)({},e),{},{matches:n.matches}):e}))}))};return e.forEach((function(n){"function"===typeof n.addListener?n.addListener(t):n.addEventListener("change",t)})),function(){e.forEach((function(n){"function"===typeof n.removeListener?n.removeListener(t):n.removeEventListener("change",t)}))}}),[h]),m.map((function(n){return n.matches}))}c.displayName="EnvironmentContext"}}]);
//# sourceMappingURL=87.7e2d8c3f.chunk.js.map