(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(t,e,i){},16:function(t,e,i){"use strict";i.r(e);var r=i(1),n=i.n(r),s=i(9),a=i.n(s),c=(i(14),i(3)),d=i(4),o=i(2),j=i(6),b=i(5),l=i(0),u=function(t){Object(j.a)(i,t);var e=Object(b.a)(i);function i(t){var r;return Object(c.a)(this,i),(r=e.call(this,t)).state={task:"",priority:-1},r.setTask=r.setTask.bind(Object(o.a)(r)),r.setPriority=r.setPriority.bind(Object(o.a)(r)),r.addItem=r.addItem.bind(Object(o.a)(r)),r}return Object(d.a)(i,[{key:"setTask",value:function(t){this.setState({task:t.target.value})}},{key:"setPriority",value:function(t){this.setState({priority:parseInt(t.target.value)})}},{key:"addItem",value:function(t){var e=this.state;(function(t){return""!==t.task&&-1!==t.priority})(e)&&this.props.addItem(e),this.setState({task:"",priority:-1})}},{key:"render",value:function(){return Object(l.jsx)("table",{children:Object(l.jsx)("tbody",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Task:"}),Object(l.jsx)("td",{children:Object(l.jsx)("input",{id:"task",type:"text",placeholder:"Enter task here",onChange:this.setTask})}),Object(l.jsx)("td",{children:"Priority:"}),Object(l.jsx)("td",{children:Object(l.jsx)("input",{id:"prioity",type:"text",placeholder:"Enter priority here",onChange:this.setPriority})}),Object(l.jsx)("td",{children:Object(l.jsx)("input",{id:"submit",type:"submit",onClick:this.addItem})})]},"")})})}}]),i}(n.a.Component),h=i(8),p=function(t){Object(j.a)(i,t);var e=Object(b.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){var t=this.props.items;if(0===t.length)return Object(l.jsx)("div",{children:"Empty List"});var e=O(t);return Object(l.jsxs)("table",Object(h.a)(Object(h.a)({},{style:{width:"100%",fontFamily:"arial, sans-serif",borderCollapse:"collapse",textAlign:"left",padding:"8px",border:" 1px solid #dddddd"}}),{},{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Task"}),Object(l.jsx)("th",{children:"Priority"})]},"task_prioirity")}),Object(l.jsx)("tbody",{children:e.map((function(t,e){return Object(l.jsxs)("tr",{style:{backgroundColor:e%2===0?"#dddddd":"white"},children:[Object(l.jsx)("td",{children:t.task}),Object(l.jsx)("td",{children:t.priority})]},"".concat(t.task,"_").concat(t.priority))}))})]}))}}]),i}(n.a.Component),O=function(t){return t.sort((function(t,e){return t.priority-e.priority}))},y=p,x=[{task:"Pick up Milk",priority:1},{task:"Buy Eggs",priority:2},{task:"Buy Bread",priority:3}],k=function(t){Object(j.a)(i,t);var e=Object(b.a)(i);function i(t){var r;return Object(c.a)(this,i),(r=e.call(this,t)).state={items:x},r.addItem=r.addItem.bind(Object(o.a)(r)),r}return Object(d.a)(i,[{key:"addItem",value:function(t){var e=this.state.items;!function(t,e){return e.some((function(e){return e.priority===t.priority}))}(t,e)?this.setState({items:e.concat(t)}):alert("Item with priorirty: ".concat(t.priority," exists"))}},{key:"render",value:function(){var t=this.state.items;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{addItem:this.addItem}),Object(l.jsx)("br",{}),Object(l.jsx)(y,{items:t})]})}}]),i}(n.a.Component),m=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,17)).then((function(e){var i=e.getCLS,r=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;i(t),r(t),n(t),s(t),a(t)}))};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.0842b8a6.chunk.js.map