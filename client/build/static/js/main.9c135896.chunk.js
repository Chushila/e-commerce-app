(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},66:function(e,t){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(33),s=n.n(i),o=(n(41),n(3)),a=(n(42),n(27),n(0));var j=function(){return Object(a.jsxs)("div",{className:"Login",children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsxs)("form",{action:"/login",method:"POST",children:[Object(a.jsxs)("div",{className:"formDiv",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"username",children:"username"}),Object(a.jsx)("input",{type:"text",id:"username",name:"username",required:!0})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"password",children:"password"}),Object(a.jsx)("input",{type:"text",id:"password",name:"password",required:!0})]})]}),Object(a.jsx)("button",{type:"submit",children:"Login "})]}),Object(a.jsx)("a",{href:"/register",children:" Register"})]})},d=n(12),u=(n(44),Object(c.createContext)({})),l=Object(c.createContext)(),b=Object(c.createContext)({}),O=Object(c.createContext)({});var h=function(e){var t=Object(c.useContext)(b),n=t.cart,r=t.setCart,i=Object(c.useRef)(1);return null===e.info.image&&(e.info.image="https://cdn11.bigcommerce.com/s-4lc6bqzzwx/images/stencil/640w/products/6281/5426/00747479001175_front__63024.1578714655.jpg?c=1"),Object(c.useEffect)((function(){e.info.quantityInCart>0?document.getElementById("button".concat(e.info.id)).style.backgroundImage="url(../../../media/images/plus.png)":document.getElementById("button".concat(e.info.id)).style.backgroundImage="url('../../../media/images/logo-shopping-cart-product-design-png-favpng-wF6d2kqQrVTa5YbjCvDeE30yT.jpg')"}),[n]),Object(a.jsxs)("div",{className:"Product",children:[Object(a.jsx)("img",{src:e.info.image,alt:"product"}),Object(a.jsxs)("div",{className:"infoContainer",children:[Object(a.jsx)("figcaption",{children:e.info.name}),Object(a.jsxs)("span",{children:[e.info.price,"$"]}),i.current<e.info.quantity?Object(a.jsx)("button",{id:"button".concat(e.info.id),onClick:function(){e.info.quantityInCart=i.current,n.find((function(t){return t.id===e.info.id}))?(i.current+=1,n[n.findIndex((function(t){return t.id===e.info.id}))].quantityInCart=i.current):r([].concat(Object(d.a)(n),[e.info]))}}):Object(a.jsx)("span",{id:"OutOfStock",children:"Out of stock"})]})]})};n(45);var m=function(){var e=Object(c.useContext)(u).search,t=Object(c.useContext)(O).products,n=Object(c.useState)(),r=Object(o.a)(n,2),i=r[0],s=r[1];return Object(c.useEffect)((function(){try{s(function(e,t){return e.filter((function(e){return Object.values(e)[1].toLowerCase().includes(t)}))}(t,e.term))}catch(n){}}),[e.term,t]),Object(a.jsx)("div",{className:"ProductPage",children:i?i.map((function(e){return Object(a.jsx)(h,{info:e},e.id)})):t?t.map((function(e){return Object(a.jsx)(h,{info:e},e.id)})):"loading"})};var f=function(){return Object(a.jsxs)("div",{className:"Register",children:[Object(a.jsx)("h1",{children:"Register"}),Object(a.jsxs)("form",{action:"/register",method:"POST",children:[Object(a.jsxs)("div",{className:"formDiv",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"username",children:"username"}),Object(a.jsx)("input",{type:"text",id:"username",name:"username",required:!0})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"password",children:"password"}),Object(a.jsx)("input",{type:"text",id:"password",name:"password",required:!0})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"name",children:"first name"}),Object(a.jsx)("input",{type:"text",id:"name",name:"name",required:!0})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"surname",children:"last name"}),Object(a.jsx)("input",{type:"text",id:"surname",name:"surname",required:!0})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"email",children:"email"}),Object(a.jsx)("input",{type:"text",id:"email",name:"email",required:!0})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"phone",children:"phone number"}),Object(a.jsx)("input",{type:"text",id:"phone",name:"phone",required:!0})]})]}),Object(a.jsx)("button",{type:"submit",children:"Register "})]}),Object(a.jsx)("a",{href:"/login",children:" Login"})]})};n(46);n(47),n(48);var x=function(e){return Object(a.jsx)("div",{className:"OrderProduct",children:Object(a.jsxs)("span",{children:[e.info.name," x",e.amount]})})},p=n(34),v=n.n(p);var y=function(e){var t=Object(c.useContext)(O).products,n=Object(c.useState)([]),r=Object(o.a)(n,2),i=r[0],s=r[1];return Object(c.useEffect)((function(){fetch("/orders:".concat(e.info.id),{credentials:"include",mode:"cors"}).then((function(e){return e.json()})).then((function(e){return s(e.messages)})).catch((function(e){return e}))}),[e.info.id]),Object(a.jsxs)("div",{className:"Order",children:[Object(a.jsxs)("section",{className:"OrderInfo",children:[Object(a.jsx)("p",{id:"orderId",children:e.info.id}),window.innerWidth>600&&Object(a.jsx)("span",{children:"Order Number"}),Object(a.jsx)("p",{children:v()({date:new Date(e.info.time_ordered)})}),Object(a.jsx)("span",{children:"Time Ordered"})]}),Object(a.jsx)("section",{className:"ProductContainer",children:i[0]&&t.filter((function(e){return i.map((function(e){return e.product_id})).includes(e.id)})).map((function(e){return Object(a.jsx)(x,{info:e,amount:i.find((function(t){return t.product_id===e.id})).product_amount},e.id)}))}),Object(a.jsxs)("section",{className:"Total",children:[Object(a.jsxs)("p",{children:[e.info.total,"$"]}),Object(a.jsx)("span",{children:"Total"})]})]})};var g=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){!function(e){fetch("/orders",{credentials:"include",mode:"cors"}).then((function(e){return e.json()})).then((function(t){return e(t.messages)})).catch((function(e){return e}))}(r)}),[]),Object(a.jsx)("div",{className:"Orders",children:n.map((function(e){return Object(a.jsx)(y,{info:e},e.id)}))})};n(50);var C=n(4);var S=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(c.useContext)(u).setSearch,s=Object(C.f)();return Object(a.jsxs)("div",{className:"Search",children:[Object(a.jsx)("input",{type:"text",onChange:function(e){r(e.target.value)},value:n,placeholder:"Search for a product here"}),Object(a.jsx)("button",{onClick:function(){""!==n&&void 0!==n?(i({isOn:!0,term:n.toLowerCase()}),s.push("/")):i({isOn:!1,term:""})}})]})},N=n(6);n(56);var q=function(){var e=Object(c.useContext)(l),t=e.user,n=e.setUser;return Object(c.useEffect)((function(){fetch("/myinfo",{credentials:"include",mode:"cors"}).then((function(e){return e.json()})).then((function(e){return n(e.messages)})).catch((function(e){return e}))}),[]),Object(a.jsx)("div",{className:"User",children:t[0]&&Object(a.jsxs)("div",{className:"UserInfo",children:[Object(a.jsxs)("p",{children:["Name: ",t[0].customer_name.concat(" ",t[0].customer_surname)]}),Object(a.jsxs)("p",{children:["Username: ",t[0].username]}),Object(a.jsxs)("p",{children:["Phone Number: ",t[0].phone||"none"]}),Object(a.jsxs)("p",{children:["Email: ",t[0].email]}),Object(a.jsx)(N.b,{to:"/changeInfo",children:"Change Account Information"})]})})};n(57);var I=function(e){var t=Object(c.useState)(e.info.quantityInCart),n=Object(o.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)(0),j=Object(o.a)(s,2),d=j[0],u=j[1],l=Object(c.useState)(0),O=Object(o.a)(l,2),h=O[0],m=O[1],f=Object(c.useContext)(b),x=f.cart,p=f.setCart;return Object(c.useEffect)((function(){!function(){var t=r*e.info.price;m(.11*t),u(t+=.11*t)}(),r<=0&&p(x.filter((function(t){return t.id!==e.info.id})))}),[r,p,e.info.id]),Object(a.jsxs)("div",{className:"cartProduct",id:"".concat(e.info.id),children:[Object(a.jsx)("img",{src:e.info.image,alt:"product"}),Object(a.jsxs)("div",{className:"infoContainer",children:[Object(a.jsx)("figcaption",{children:e.info.name}),Object(a.jsxs)("span",{className:"price",children:[e.info.price,"$"]}),window.innerWidth<600?Object(a.jsxs)("span",{children:["x",r]}):Object(a.jsxs)("span",{children:["Quantity: x",r]}),Object(a.jsx)("button",{onClick:function(){i(r-1),e.info.quantityInCart-=1}})]}),Object(a.jsxs)("div",{className:"money",children:[Object(a.jsxs)("p",{children:[d,"$"]}),Object(a.jsxs)("p",{className:"Tax",children:["Tax: ",h,"$"]})]})]})},w=(n(58),n(74));var E=function(){var e=Object(c.useContext)(b),t=e.cart,n=e.setCart,r=Object(c.useState)([]),i=Object(o.a)(r,2),s=i[0],j=i[1],d=Object(c.useContext)(l).user,u=Object(C.f)();return Object(c.useEffect)((function(){j(1.11*Object(w.a)(t.map((function(e){return e.quantityInCart*e.price}))))}),[t]),Object(a.jsxs)("div",{className:"Cart",onClick:function(){return j(1.11*Object(w.a)(t.map((function(e){return e.quantityInCart*e.price}))))},children:[Object(a.jsx)("section",{className:"productDisplay",children:t.map((function(e){return Object(a.jsx)(I,{info:e},e.id)}))}),Object(a.jsxs)("footer",{children:[Object(a.jsxs)("p",{children:["Total: ",s>0&&s.toFixed(2),"$"]}),Object(a.jsx)("button",{onClick:function(){d[0]||u.push("/login"),fetch("/orders",{method:"POST",body:JSON.stringify({cart:t,total:s.toFixed(2)}),headers:{"Content-type":"application/json; charset=UTF-8","Access-Control-Allow-Origin":"https://e-commerce-app-chushila.herokuapp.com/cart"},credentials:"include",mode:"cors"}).then((function(e){return e.json()})).then((function(e){return n([])})).then((function(){return u.push("/orders")}))},children:"CheckOut"})]})]})};var k=function(){var e=Object(c.useContext)(l).user;return Object(a.jsx)("div",{className:"ChangeInfo",children:e[0]&&Object(a.jsx)("div",{className:"formDiv",children:Object(a.jsxs)("form",{id:"ChangeInfo",action:"/myinfo?_method=PUT",method:"POST",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"name",children:"first name"}),Object(a.jsx)("input",{type:"text",id:"name",name:"customer_name",placeholder:"".concat(e[0].customer_name)})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"surname",children:"last name"}),Object(a.jsx)("input",{type:"text",id:"surname",name:"customer_surname",placeholder:"".concat(e[0].customer_surname)})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"email",children:"email"}),Object(a.jsx)("input",{type:"text",id:"email",name:"email",placeholder:"".concat(e[0].email)})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"phone",children:"phone number"}),Object(a.jsx)("input",{type:"text",id:"phone",name:"phone",placeholder:"".concat(e[0].phone)})]}),Object(a.jsx)("button",{type:"submit",children:"Save Changes "})]})})})},F=n(72);function P(){"none"===document.querySelector(".smallNav").style.display?(document.querySelector(".smallNav").style.display="flex",document.querySelector(".Search").style.display="none",document.querySelector("header").style.flexDirection="column",document.getElementById("mainDisplay").style.display="none"):(document.querySelector(".smallNav").style.display="none",document.querySelector(".Search").style.display="flex",document.querySelector("header").style.flexDirection="row",document.getElementById("mainDisplay").style.display="block")}n(67);var T=function(){var e=Object(c.useContext)(l).user,t=Object(c.useContext)(u),n=(t.search,t.setSearch);return Object(a.jsxs)("div",{className:"smallNav",onClick:P,children:[Object(a.jsxs)(N.b,{id:"orderLink",to:"/orders",children:[" ","Orders"]}),e[0]?Object(a.jsxs)(N.b,{to:"/user",children:[e[0].customer_name," "]}):Object(a.jsx)(N.b,{to:"/login",children:"Login"}),e[0]&&Object(a.jsx)("form",{action:"/logout?_method=DELETE",method:"POST",id:"logoutFormNav",onClick:function(){return document.getElementById("logoutForm").submit()},children:"Logout"}),Object(a.jsx)(N.b,{to:"/",onClick:function(){n({isOn:!1,term:""})},children:"Home"}),Object(a.jsx)(N.b,{to:"/cart",children:"Cart"})]})};var _=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)({}),s=Object(o.a)(i,2),d=s[0],h=s[1],x=Object(c.useState)({isOn:!1,term:""}),p=Object(o.a)(x,2),v=p[0],y=p[1],I=Object(c.useState)([]),w=Object(o.a)(I,2),_=w[0],D=w[1],L=Object(F.a)([]),B=Object(o.a)(L,2),U=B[0],$=B[1];return Object(c.useEffect)((function(){P(),function(e){fetch("/products",{credentials:"include",mode:"cors"}).then((function(e){return e.json()})).then((function(t){return e(t.messages)})).catch((function(e){return e}))}(D)}),[]),Object(c.useEffect)((function(){$("cart",n,{path:"/"})}),[n,$]),Object(c.useEffect)((function(){window.innerWidth>600&&(document.querySelector(".smallNav").style.display="none",document.querySelector(".Search").style.display="flex",document.querySelector("header").style.flexDirection="row",document.getElementById("mainDisplay").style.display="block")}),[window.innerWidth]),Object(c.useEffect)((function(){!n[0]&&U.cart[0]&&r(U.cart)}),[]),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(b.Provider,{value:{cart:n,setCart:r},children:Object(a.jsx)(u.Provider,{value:{search:v,setSearch:y},children:Object(a.jsxs)(l.Provider,{value:{user:d,setUser:h},children:[Object(a.jsxs)("header",{children:[Object(a.jsx)(S,{}),Object(a.jsx)("button",{id:"navButton",onClick:P}),Object(a.jsx)(T,{}),Object(a.jsxs)("nav",{children:[Object(a.jsxs)(N.b,{id:"orderLink",to:"/orders",children:[" ","Orders"]}),Object(a.jsxs)("div",{className:"columnInfo",children:[d[0]?Object(a.jsxs)(N.b,{to:"/user",children:[d[0].customer_name," "]}):Object(a.jsx)(N.b,{to:"/login",children:"Login"}),d[0]&&Object(a.jsx)("form",{action:"/logout?_method=DELETE",method:"POST",id:"logoutForm",onClick:function(){return document.getElementById("logoutForm").submit()},children:"Logout"}),Object(a.jsx)(N.b,{to:"/",onClick:function(){y({isOn:!1,term:""})},children:"Home"}),Object(a.jsx)(N.b,{to:"/cart",children:"Cart"})]})]})]}),Object(a.jsx)("article",{id:"mainDisplay",children:Object(a.jsx)(O.Provider,{value:{products:_,setProducts:D},children:Object(a.jsxs)(C.c,{children:[Object(a.jsx)(C.a,{path:"/login",children:Object(a.jsx)(j,{})}),Object(a.jsx)(C.a,{path:"/checkout"}),Object(a.jsx)(C.a,{path:"/register",children:Object(a.jsx)(f,{})}),Object(a.jsx)(C.a,{path:"/changeInfo",children:Object(a.jsx)(k,{})}),Object(a.jsx)(C.a,{path:"/user",children:Object(a.jsx)(q,{})}),Object(a.jsx)(C.a,{path:"/orders",children:d[0]?Object(a.jsx)(g,{}):Object(a.jsx)(j,{})}),Object(a.jsx)(C.a,{path:"/cart",children:Object(a.jsx)(E,{})}),Object(a.jsx)(C.a,{path:"/",exact:!0,children:Object(a.jsx)(m,{})})]})})})]})})})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))},L=(n(68),n(73));s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(L.a,{children:Object(a.jsx)(N.a,{children:Object(a.jsx)(_,{})})})}),document.getElementById("root")),D()}},[[69,1,2]]]);
//# sourceMappingURL=main.9c135896.chunk.js.map