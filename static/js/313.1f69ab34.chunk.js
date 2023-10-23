"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[313],{2313:function(e,n,r){r.r(n),r.d(n,{default:function(){return N}});var t,a,i,s=r(2791),o=r(9434),c=r(6916),u=function(e){return e.filter},l=function(e){return e.contacts.isLoading},d=(0,c.P1)([function(e){return e.contacts.items},u],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),m=r(4991),h=r(5705),f=r(6727),x=r(184),p=f.Ry().shape({name:f.Z_().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan").required(),number:f.Z_().trim().matches(/\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required()}),j=function(){var e=(0,o.v9)(d),n=(0,o.I0)();return(0,x.jsx)("div",{children:(0,x.jsx)(h.J9,{initialValues:{name:"",number:""},validationSchema:p,onSubmit:function(r,t){var a=r.name,i=r.number;if(e.some((function(e){return e.name.toLowerCase()===a.toLowerCase()||e.phone===i})))return alert("".concat(a," or ").concat(i,": is already in contacts")),void t.resetForm();n((0,m.uK)({name:a,phone:i})),t.resetForm()},children:(0,x.jsxs)(h.l0,{children:[(0,x.jsxs)("label",{htmlFor:"name",children:["Name",(0,x.jsx)(h.gN,{id:"name",name:"name",placeholder:"Name"}),(0,x.jsx)(h.Bc,{name:"name",component:"div"})]}),(0,x.jsxs)("label",{htmlFor:"number",children:["Number",(0,x.jsx)(h.gN,{id:"number",name:"number",placeholder:"+380100000000"}),(0,x.jsx)(h.Bc,{name:"number",component:"div"})]}),(0,x.jsx)("button",{type:"submit",children:"Add contact"})]})})})},b=r(168),v=r(5867),y=v.ZP.ul(t||(t=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),g=v.ZP.li(a||(a=(0,b.Z)(["\n  display: flex;\n  gap: 16px;\n"]))),C=v.ZP.button(i||(i=(0,b.Z)(["\n  border: none;\n  outline: none;\n  border-radius: 8px;\n  background-color: #ffff00;\n"]))),Z=function(){var e=(0,o.v9)(d),n=(0,o.I0)();return(0,s.useEffect)((function(){n((0,m.yF)())}),[n]),(0,x.jsx)(y,{children:e.map((function(e){var r=e.name,t=e.phone,a=e.id;return(0,x.jsxs)(g,{children:[(0,x.jsxs)("span",{children:[r,":"]}),(0,x.jsxs)("span",{children:[t,":"]}),(0,x.jsx)(C,{type:"button",onClick:function(){return n((0,m.GK)(a))},children:"Delete"})]},a)}))})},w=(0,r(6382).oM)({name:"filter",initialState:"",reducers:{setFilter:{reducer:function(e,n){return n.payload}}}}),F=w.actions.setFilter,k=(w.reducer,function(){var e=(0,o.v9)(u),n=(0,o.I0)();return(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{children:"Find contacts by name"}),(0,x.jsx)("input",{type:"text",value:e,onChange:function(e){return n(F(e.target.value))},placeholder:"search"})]})}),P=function(){return(0,x.jsxs)("div",{children:[(0,x.jsx)("h1",{children:"Phonebook"}),(0,x.jsx)(j,{}),(0,x.jsx)("h2",{children:"Contacts"}),(0,x.jsx)(k,{}),(0,x.jsx)(Z,{})]})},A={display:"flex",alignItems:"flex-end",marginBottom:20};function N(){var e=(0,o.I0)(),n=(0,o.v9)(l);return(0,s.useEffect)((function(){e((0,m.yF)())}),[e]),(0,x.jsxs)("div",{style:A,children:[(0,x.jsx)("div",{children:n&&"Please wait..."}),(0,x.jsx)(P,{})]})}}}]);
//# sourceMappingURL=313.1f69ab34.chunk.js.map