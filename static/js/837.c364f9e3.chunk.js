"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[837],{837:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,i,c,u=t(791),o=t(434),a=t(916),s=function(n){return n.filter},l=(0,a.P1)([function(n){return n.contacts.items},s],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),f=t(168),d=t(867),p=d.ZP.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),x=d.ZP.li(i||(i=(0,f.Z)(["\n  display: flex;\n  gap: 16px;\n"]))),h=d.ZP.button(c||(c=(0,f.Z)(["\n  border: none;\n  outline: none;\n  border-radius: 8px;\n  background-color: #ffff00;\n"]))),m=t(991),v=t(184),j=function(){var n=(0,o.v9)(l),e=(0,o.I0)();return(0,u.useEffect)((function(){e((0,m.yF)())}),[e]),(0,v.jsx)(p,{children:n.map((function(n){var t=n.name,r=n.phone,i=n.id;return(0,v.jsxs)(x,{children:[(0,v.jsxs)("span",{children:[t,":"]}),(0,v.jsxs)("span",{children:[r,":"]}),(0,v.jsx)(h,{type:"button",onClick:function(){return e((0,m.GK)(i))},children:"Delete"})]},i)}))})},y=(0,t(382).oM)({name:"filter",initialState:"",reducers:{setFilter:{reducer:function(n,e){return e.payload}}}}),b=y.actions.setFilter,k=(y.reducer,function(){var n=(0,o.v9)(s),e=(0,o.I0)();return(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{children:"Find contacts by name"}),(0,v.jsx)("input",{type:"text",value:n,onChange:function(n){return e(b(n.target.value))},placeholder:"search"})]})}),g={display:"flex",alignItems:"flex-end",marginBottom:20};function w(){var n=(0,o.I0)(),e=(0,o.v9)(l);return(0,u.useEffect)((function(){return n((0,m.yF)())}),[n]),(0,v.jsxs)("div",{style:g,children:[(0,v.jsx)(k,{}),(0,v.jsx)("div",{children:e&&"Please wait..."}),(0,v.jsx)("h1",{children:"Contacts"}),(0,v.jsx)(j,{})]})}}}]);
//# sourceMappingURL=837.c364f9e3.chunk.js.map