(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{44:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(27),i=n.n(c),s=n(9),u=n(18),o=n(5),j=n(7),l=n.n(j),d=n(15),b=n(19);n(36),n(46),n(45);b.a.initializeApp({apiKey:"AIzaSyD41ocZYgAojWegeNf6-v-z5hmTVdAKdus",authDomain:"nwitter-477fa.firebaseapp.com",databaseURL:"https://nwitter-477fa-default-rtdb.firebaseio.com",projectId:"nwitter-477fa",storageBucket:"nwitter-477fa.appspot.com",messagingSenderId:"621862957734",appId:"1:621862957734:web:4af243679ad75963317a67"});var p=b.a.auth(),f=b.a.firestore(),O=b.a.storage(),h=n(1),x=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),i=Object(s.a)(c,2),u=i[0],o=i[1],j=Object(r.useState)(!0),b=Object(s.a)(j,2),f=b[0],O=b[1],x=Object(r.useState)(""),m=Object(s.a)(x,2),v=m[0],g=m[1],w=function(e){var t=e.target,n=t.name,r=t.value;console.log(n,r),"email"===n?a(r):"password"===n&&o(r)},y=function(){var e=Object(d.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log(n,u),e.prev=2,!f){e.next=10;break}return console.log("create user"),e.next=7,p.createUserWithEmailAndPassword(n,u);case 7:r=e.sent,e.next=14;break;case 10:return console.log("log in"),e.next=13,p.signInWithEmailAndPassword(n,u);case 13:r=e.sent;case 14:console.log(r),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),g(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{onSubmit:y,children:[Object(h.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:w}),Object(h.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:w}),Object(h.jsx)("input",{type:"submit",value:f?"Create Account":"Log In"})]}),v,Object(h.jsx)("div",{onClick:function(){return O((function(e){return!e}))},children:f?"Sign In":"Create Account"})]})},m=function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?r=new b.a.auth.GoogleAuthProvider:"github"===n&&(r=new b.a.auth.GithubAuthProvider),e.next=4,p.signInWithPopup(r);case 4:a=e.sent,console.log(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)(x,{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:e,name:"google",children:"Continue with Google"}),Object(h.jsx)("button",{onClick:e,name:"github",children:"Continue with Github"})]})]})},v=n(30),g=function(e){var t=e.nweetObj,n=e.isOwner,a=Object(r.useState)(!1),c=Object(s.a)(a,2),i=c[0],u=c[1],o=Object(r.useState)(t.text),j=Object(s.a)(o,2),b=j[0],p=j[1],x=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,f.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,O.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return u((function(e){return!e}))},v=function(){var e=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,f.doc("nweets/".concat(t.id)).update({text:b});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{children:i?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{onSubmit:v,children:[Object(h.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:b,onChange:function(e){var t=e.target.value;p(t)},required:!0}),Object(h.jsx)("input",{type:"submit",value:"Update Nweet"})]}),Object(h.jsx)("button",{onClick:m,children:"Cancel"})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h4",{children:t.text}),""!==t.attachmentUrl&&Object(h.jsx)("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),n&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{onClick:x,children:"Delete Nweet"}),Object(h.jsx)("button",{onClick:m,children:"Edit Nweet"})]})]})})},w=n(48),y=function(e){var t=e.userObj,n=Object(r.useState)(""),a=Object(s.a)(n,2),c=a[0],i=a[1],u=Object(r.useState)(""),o=Object(s.a)(u,2),j=o[0],b=o[1],p=function(){var e=Object(d.a)(l.a.mark((function e(n){var r,a,s,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r="",""===j){e.next=10;break}return a=O.ref().child("".concat(t.uid,"/").concat(Object(w.a)())),e.next=6,a.putString(j,"data_url");case 6:return s=e.sent,e.next=9,s.ref.getDownloadURL();case 9:r=e.sent;case 10:return u={text:c,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:r},e.next=13,f.collection("nweets").add(u);case 13:i(""),b("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("form",{onSubmit:p,children:[Object(h.jsx)("input",{value:c,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(h.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){b(e.currentTarget.result)},n.readAsDataURL(t)}}),Object(h.jsx)("input",{type:"submit",value:"Nweet"}),j&&Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:j,width:"50px",height:"50px"}),Object(h.jsx)("button",{onClick:function(){return b(null)},children:"Clear"})]})]})},k=function(e){var t=e.userObj,n=Object(r.useState)([]),a=Object(s.a)(n,2),c=a[0],i=a[1];return Object(r.useEffect)((function(){f.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(v.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)(y,{userObj:t}),Object(h.jsx)("div",{children:c.map((function(e){return Object(h.jsx)(g,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},S=function(e){var t=e.userObj;return Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"/",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsxs)(u.b,{to:"/profile",children:[t.displayName,"'s Profile"]})})]})})},C=function(e){var t=e.userObj,n=e.refreshUser,a=Object(o.f)(),c=Object(r.useState)(t.displayName),i=Object(s.a)(c,2),u=i[0],j=i[1],b=function(){var e=Object(d.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.collection("nweets").where("creatorId","==",t.uid).orderBy("createdAt").get();case 2:n=e.sent,console.log(n.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){b()}));var O=function(){var e=Object(d.a)(l.a.mark((function e(r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),t.displayName===u){e.next=5;break}return e.next=4,t.updateProfile({displayName:u});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{onSubmit:O,children:[Object(h.jsx)("input",{type:"text",placeholder:"Display name",onChange:function(e){var t=e.target.value;j(t)},value:u}),Object(h.jsx)("input",{type:"submit",value:"Update Profile"})]}),Object(h.jsx)("button",{onClick:function(){p.signOut(),a.push("/")},children:"Log Out"})]})},A=function(e){var t=e.isLoggedIn,n=e.userObj,r=e.refreshUser;return Object(h.jsxs)(u.a,{children:[t&&Object(h.jsx)(S,{userObj:n}),Object(h.jsx)(o.c,{children:t?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",children:Object(h.jsx)(k,{userObj:n})}),Object(h.jsx)(o.a,{exact:!0,path:"/profile",children:Object(h.jsx)(C,{userObj:n,refreshUser:r})})]}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(o.a,{exact:!0,path:"/",children:Object(h.jsx)(m,{})})})})]})};var U=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),i=Object(s.a)(c,2),u=i[0],o=i[1];return Object(r.useEffect)((function(){p.onAuthStateChanged((function(e){o(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),a(!0)}))}),[]),Object(h.jsx)(h.Fragment,{children:n?Object(h.jsx)(A,{userObj:u,refreshUser:function(){var e=p.currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u)}):"Initializing"})};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(U,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.e8bf5967.chunk.js.map