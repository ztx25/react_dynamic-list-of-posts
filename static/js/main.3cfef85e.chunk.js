(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),s=n.n(c),u=n(3),o=(n(11),n(12),n(1)),l=n.n(o),i=n(2),m=function(e){var t=e.id,n=e.title,a=e.userId,c=e.selectedPostId,s=e.handleClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("b",null,"[User #".concat(a,"]:")),n),r.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return s(t)}},c===t?"Close":"Open"))};m.defaultProps={userId:0};n(14),n(15);var p=function(){return r.a.createElement("div",{className:"Loader"},r.a.createElement("div",{className:"Loader__content"}))},f="https://mate-api.herokuapp.com";function d(e,t){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f).concat(t),n);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("".concat(a.status," - ").concat(a.statusText));case 5:return e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r.data);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/posts");case 2:if(n=e.sent,t){e.next=5;break}return e.abrupt("return",n);case 5:return e.abrupt("return",n.filter((function(e){return e.userId===t})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/posts/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.selectedUserId,n=e.selectedPostId,c=e.selectPost,s=Object(a.useState)([]),o=Object(u.a)(s,2),f=o[0],d=o[1],b=Object(a.useState)(!0),E=Object(u.a)(b,2),h=E[0],O=E[1];return Object(a.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:n=e.sent,d(n),O(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),r.a.createElement("div",{className:"PostsList"},r.a.createElement("h2",null,"Posts:"),h?r.a.createElement(p,null):r.a.createElement("ul",null,f.map((function(e){return r.a.createElement("li",{key:e.id,className:"PostsList__item"},r.a.createElement(m,Object.assign({},e,{selectedPostId:n,handleClick:c})))}))))},O=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/comments");case 2:return n=e.sent,a=n.filter((function(e){return e.postId===t})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(l.a.mark((function e(t,n,a,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(c={postId:t,name:n,email:a,body:r},d("/comments",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(c)})));case 1:case"end":return e.stop()}var c}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),_=function(e){return d("/comments/".concat(e),{method:"DELETE"})},w=function(e){var t=e.name,n=e.placeholder,a=e.value,c=e.onChange;return r.a.createElement("input",{type:"text",name:t,placeholder:n,className:"NewCommentForm__input",value:a,onChange:c})},N=function(e){var t=e.value,n=e.onChange;return r.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:t,onChange:n})},x=(n(16),function(e){var t=e.postId,n=e.updateComments,c=Object(a.useState)(""),s=Object(u.a)(c,2),o=s[0],m=s[1],p=Object(a.useState)(""),f=Object(u.a)(p,2),d=f[0],b=f[1],v=Object(a.useState)(""),E=Object(u.a)(v,2),h=E[0],O=E[1],_=Object(a.useState)(""),x=Object(u.a)(_,2),y=x[0],k=x[1],C=function(){var e=Object(i.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),o&&h&&d){e.next=4;break}return k("Fill all fields"),e.abrupt("return");case 4:if(d.includes("@")&&d.includes(".")){e.next=7;break}return k("Fill email correct"),e.abrupt("return");case 7:return e.next=9,j(t,o,d,h);case 9:n(),m(""),O(""),b(""),k("");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{className:"NewCommentForm",onSubmit:C},r.a.createElement("div",{className:"form-field"},r.a.createElement(w,{name:"name",value:o,placeholder:"Your name",onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement(w,{name:"email",value:d,placeholder:"Your email",onChange:function(e){return b(e.target.value)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement(N,{value:h,onChange:function(e){return O(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"),y&&r.a.createElement("p",{className:"NewCommentForm__error"},y))}),y=function(e){var t=e.id,n=e.body,a=e.onClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return a(t)}},"X"),r.a.createElement("p",null,n))},k=function(e){var t=e.comments,n=e.updateComments,a=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:n();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("ul",{className:"PostDetails__list"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"PostDetails__list-item"},r.a.createElement(y,Object.assign({},e,{onClick:a})))})))},C=(n(17),function(e){var t=e.selectedPostId,n=Object(a.useState)({}),c=Object(u.a)(n,2),s=c[0],o=c[1],m=Object(a.useState)([]),p=Object(u.a)(m,2),f=p[0],d=p[1],b=Object(a.useState)(!1),v=Object(u.a)(b,2),h=v[0],j=v[1];Object(a.useEffect)((function(){_(),w()}),[t]);var _=function(){var e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:n=e.sent,o(n),j(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:n=e.sent,d(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"PostDetails"},r.a.createElement("h2",null,"Post details:"),r.a.createElement("section",{className:"PostDetails__post"},r.a.createElement("p",null,s.body)),r.a.createElement("section",{className:"PostDetails__comments"},f.length?r.a.createElement("button",{type:"button",className:"button",onClick:function(){return j(!h)}},h?"Hide ".concat(f.length," comments"):"Show comments"):r.a.createElement("h3",null,"No comments"),h&&r.a.createElement(k,{comments:f,updateComments:w})),r.a.createElement("section",null,r.a.createElement("div",{className:"PostDetails__form-wrapper"},r.a.createElement(x,{postId:t,updateComments:w}))))}),P=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/users");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){var t=e.selectedUserId,n=e.selectUser,c=Object(a.useState)([]),s=Object(u.a)(c,2),o=s[0],m=s[1],p=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:t=e.sent,m(t.slice(0,9));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){p()}),[]),r.a.createElement("label",null,"Select a user: \xa0",r.a.createElement("select",{className:"App__user-selector",value:t,onChange:n},r.a.createElement("option",{value:"0"},"All users"),o.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))))},I=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),o=Object(u.a)(s,2),l=o[0],i=o[1],m=Object(a.useCallback)((function(e){c(+e.target.value)}),[]);return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement(g,{selectUser:m,selectedUserId:n})),r.a.createElement("main",{className:"App__main"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(h,{selectedUserId:n,selectPost:function(e){i(e!==l?e:0)},selectedPostId:l})),r.a.createElement("div",{className:"App__content"},l?r.a.createElement(C,{selectedPostId:l}):r.a.createElement("h3",null,"Open a post"))))};s.a.render(r.a.createElement(I,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.3cfef85e.chunk.js.map