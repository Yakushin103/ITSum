(this.webpackJsonpYakushin103=this.webpackJsonpYakushin103||[]).push([[4],{222:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return u}));var r=n(3),s=(n(0),n(102)),c=(n(223),n(2)),a=function(t){var e=t.meta,n=e.touched,r=e.error,s=t.children,a=n&&r;return Object(c.jsxs)("div",{className:"form-control ".concat(a&&"error"),children:[Object(c.jsx)("div",{children:s}),Object(c.jsx)("div",{children:a&&Object(c.jsx)("span",{children:r})})]})},i=function(t){return Object(c.jsx)(a,Object(r.a)(Object(r.a)({},t),{},{children:Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({},t.input),t))}))},o=function(t){return Object(c.jsx)(a,Object(r.a)(Object(r.a)({},t),{},{children:Object(c.jsx)("input",Object(r.a)(Object(r.a)({},t.input),t))}))},u=function(t,e,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(c.jsxs)("div",{children:[Object(c.jsx)(s.a,{name:e,component:r,placeholder:t,validate:n,type:a}),i]})}},223:function(t,e,n){},225:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return s}));var r=function(t){if(!t)return"Field is requered "},s=function(t){return function(e){if((null===e||void 0===e?void 0:e.length)>t)return"Max length is ".concat(t," symbols")}}},231:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(55);function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,s=!1,c=void 0;try{for(var a,i=t[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(o){s=!0,c=o}finally{try{r||null==i.return||i.return()}finally{if(s)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},287:function(t,e,n){},292:function(t,e,n){"use strict";n.r(e);var r=n(3),s=n(50),c=n(51),a=n(53),i=n(52),o=n(0),u=n.n(o),j=n(20),d=n(7),l=n(29),b=n(102),p=n(103),f="https://coinnewstelegraph.com/wp-content/uploads/2018/04/the-peer-to-peer-cryptocurrency-exchange-hodl-hodl-doesnt-require-kyc.jpg",h=n(2),O=function(t){var e=t.message,n=t.id;return Object(h.jsxs)("div",{className:"post",children:[Object(h.jsx)("img",{alt:"Avatar",src:f}),e]},n)},v=n(222),x=n(225),m=Object(x.a)(10),g=Object(o.memo)((function(t){var e=t.postData,n=t.addPost;return Object(h.jsxs)("div",{className:"content-post",children:[Object(h.jsx)("h1",{children:"My post"}),Object(h.jsx)(y,{onSubmit:function(t){n(t.newPostText)}}),e&&e.map((function(t,e){return Object(h.jsx)(O,{message:t.message,id:e},e)}))]})})),y=Object(p.a)({form:"profileAddNewPostForm"})((function(t){return Object(h.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(h.jsx)(b.a,{name:"newPostText",component:v.c,validate:[x.b,m]}),Object(h.jsx)("button",{children:"Add post"})]})})),S=g,w=n(54),U=Object(j.b)((function(t){return{newText:t.profilePage.newText,postData:t.profilePage.postData}}),{addPost:w.a})(S),P=n(39),k=n(231),A=function(t){var e=t.status,n=t.updateUserStatus,r=Object(o.useState)(!1),s=Object(k.a)(r,2),c=s[0],a=s[1],i=Object(o.useState)(e),u=Object(k.a)(i,2),j=u[0],d=u[1];Object(o.useEffect)((function(){d(j)}),[j]);var l=function(t){a(!c),n(j)};return Object(h.jsx)("div",{children:c?Object(h.jsx)("div",{children:Object(h.jsx)("input",{onChange:function(t){d(t.currentTarget.value)},onBlur:l,value:j,autoFocus:!0})}):Object(h.jsx)("div",{children:Object(h.jsx)("span",{onDoubleClick:l,children:j||"No status"})})})},N=function(t){var e=t.profile,n=t.status,r=t.updateUserStatus;return e?Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"content-avatar",children:[Object(h.jsx)("img",{alt:"Avatar",src:e.photos.large||f}),Object(h.jsx)(A,{status:n,updateUserStatus:r})]})}):Object(h.jsx)(P.a,{})},T=(n(287),function(t){return Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(N,{status:t.status,profile:t.profile,updateUserStatus:t.updateUserStatus}),Object(h.jsx)(U,{})]})}),D=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.userProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return Object(h.jsx)(T,Object(r.a)(Object(r.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))}}]),n}(u.a.Component);e.default=Object(l.d)(Object(j.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{userProfile:w.e,getUserStatus:w.c,updateUserStatus:w.d}),d.f)(D)}}]);
//# sourceMappingURL=4.f34376ec.chunk.js.map