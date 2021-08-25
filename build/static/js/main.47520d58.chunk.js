(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{34:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c.n(n),a=c(11),s=c.n(a),o=(c(33),c(34),c(12)),r=c(13),l=c(16),d=c(73),j=c(65),u=c(66),b=c(67),p=c(68),h=c(69),m=c(70),O=c(71),x=c(72),f=c(3),v=function(e){var t=e.activeItem,c=e.setActiveItem,n=e.toggle,i=e.onSave,a=function(e){var n=e.target,i=n.name,a=n.value;"checkbox"===e.target.type&&(a=e.target.checked);var s=Object(l.a)(Object(l.a)({},t),{},Object(r.a)({},i,a));c(s)};return Object(f.jsxs)(d.a,{isOpen:!0,toggle:n,children:[Object(f.jsx)(j.a,{toggle:n,children:"Todo Item"}),Object(f.jsx)(u.a,{children:Object(f.jsxs)(b.a,{children:[Object(f.jsxs)(p.a,{children:[Object(f.jsx)(h.a,{for:"todo-title",children:"Title"}),Object(f.jsx)(m.a,{type:"text",id:"todo-title",name:"title",value:t.title,onChange:a,placeholder:"Enter Todo Title"})]}),Object(f.jsxs)(p.a,{children:[Object(f.jsx)(h.a,{for:"todo-description",children:"Description"}),Object(f.jsx)(m.a,{type:"text",id:"todo-description",name:"description",value:t.description,onChange:a,placeholder:"Enter Todo description"})]}),Object(f.jsx)(p.a,{check:!0,children:Object(f.jsxs)(h.a,{check:!0,children:[Object(f.jsx)(m.a,{type:"checkbox",name:"completed",checked:t.completed,onChange:a}),"Completed"]})})]})}),Object(f.jsx)(O.a,{children:Object(f.jsx)(x.a,{color:"success",onClick:function(){return i(t)},children:"Save"})})]})},g=c(10),k=c.n(g);k.a.defaults.xsrfCookieName="csrftoken",k.a.defaults.xsrfHeaderName="X-CSRFToken";var N=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)([]),s=Object(o.a)(a,2),r=s[0],l=s[1],d=Object(n.useState)(!1),j=Object(o.a)(d,2),u=j[0],b=j[1],p=Object(n.useState)({title:"",description:"",completed:!1}),h=Object(o.a)(p,2),m=h[0],O=h[1],x=function(){b(!u)},g=function(e){return i(!!e)},N=function(){k.a.get("/api/todos/").then((function(e){return l(e.data)})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){N()}),[]),Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("main",{className:"container",children:[Object(f.jsx)("h1",{className:"text-white text-uppercase text-center my-4",children:"Todo app"}),Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-md-6 col-sm-10 mx-auto p-0",children:Object(f.jsxs)("div",{className:"card p-3",children:[Object(f.jsx)("div",{className:"mb-4",children:Object(f.jsx)("button",{className:"btn btn-primary",onClick:function(){O({title:"",description:"",completed:!1}),b(!u)},children:"Add task"})}),Object(f.jsxs)("div",{className:"nav nav-tabs",children:[Object(f.jsx)("span",{className:c?"nav-link active":"nav-link",onClick:function(){return g(!0)},children:"Complete"}),Object(f.jsx)("span",{className:c?"nav-link":"nav-link active",onClick:function(){return g(!1)},children:"Incomplete"})]}),Object(f.jsx)("ul",{className:"list-group list-group-flush border-top-0",children:r.filter((function(e){return e.completed==c})).map((function(e){return Object(f.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(f.jsx)("span",{className:"todo-title mr-2 ".concat(c?"completed-todo":""),title:e.description,children:e.title}),Object(f.jsxs)("span",{children:[Object(f.jsx)("button",{className:"btn btn-secondary mr-2",onClick:function(){return function(e){O(e),b(!u)}(e)},children:"Edit"}),Object(f.jsx)("button",{className:"btn btn-danger",onClick:function(){return function(e){k.a.delete("/api/todos/".concat(e.id,"/")).then((function(e){return N()}))}(e)},children:"Delete"})]})]},e.id)}))})]})})}),u?Object(f.jsx)(v,{activeItem:m,setActiveItem:O,toggle:x,onSave:function(e){x(),e.id?k.a.put("/api/todos/".concat(e.id,"/"),e).then((function(e){return N()})):k.a.post("/api/todos/",e,{headers:{"Content-Type":"application/json"}}).then((function(e){return N()}))}}):null]})})};s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.47520d58.chunk.js.map