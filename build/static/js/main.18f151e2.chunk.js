(this["webpackJsonpreact-app-pizza"]=this["webpackJsonpreact-app-pizza"]||[]).push([[0],{15:function(e,t,a){e.exports={cartItem:"cartItem_cartItem__2bgsT",cartItem__pizza:"cartItem_cartItem__pizza__2TgT2",cartItem__descr:"cartItem_cartItem__descr__2eV3z",cartItem__title:"cartItem_cartItem__title__2QL8s",cartItem__text:"cartItem_cartItem__text__2LkFe",cartItem__buttons:"cartItem_cartItem__buttons__12bgG",cartItem__count:"cartItem_cartItem__count__MHhk8",cartItem__price:"cartItem_cartItem__price__1rRIf",cartItem__delete:"cartItem_cartItem__delete__2ZpCk",cartItem__minus:"cartItem_cartItem__minus__1VWpm",cartItem__plus:"cartItem_cartItem__plus__3ORQL",cartItem__img:"cartItem_cartItem__img__1AeRJ"}},18:function(e,t,a){e.exports={getCenter:"getBack_getCenter__2B8fU",title:"getBack_title__36zGI",text:"getBack_text__uSL9L",img:"getBack_img__s9gJ_",btn:"getBack_btn__k9Mni"}},26:function(e,t,a){e.exports={title:"styles_title__2Bwpn",grid:"styles_grid__YX0JT",menu:"styles_menu__1aCHi"}},31:function(e,t,a){e.exports={padding:"layout_padding__23nRK",wrapper:"layout_wrapper__3ycBL"}},33:function(e,t,a){e.exports={button:"button_button__1SAKB",button__active:"button_button__active__hSWXE"}},34:function(e,t,a){e.exports={message:"message_message__1yYL8",message__active:"message_message__active__1_37D",showMessage:"message_showMessage__2Wkw_"}},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var c=a(1),i=a.n(c),_=a(23),r=a.n(_),s=a(5),n=a(17),o=a(28),l=a.n(o),d=a(29),j=a.n(d),m=Object(n.b)({name:"pizza",initialState:{totalPrice:0,totalCount:0,pizzas:{},showMessage:!1},reducers:{increment:function(e){var t=[];for(var a in e.pizzas)t.push(e.pizzas[a].reduce((function(e,t){return e.price?e.price*e.amount+t.price*t.amount:e+t.price*t.amount}),0));e.totalPrice=t.reduce((function(e,t){return e+t}),0),e.totalCount++},decrement:function(e,t){var a=t.payload;e.totalCount--,e.pizzas[a[0]].find((function(t){l()(a[1],t)&&(t.amount--,t.amount<=0&&j()(e.pizzas[a[0]],(function(e){return e===t})))}));var c=[];for(var i in e.pizzas)c.push(e.pizzas[i].reduce((function(e,t){return e.price?e.price*e.amount+t.price*t.amount:e+t.price*t.amount}),0));e.totalPrice=c.reduce((function(e,t){return e+t}),0)},addPiza:function(e,t){var a=t.payload,c=a.id,i=a.name,_=a.type,r=a.size,s=a.img,n=a.price,o=a.showMessage;e.pizzas[c]||(e.pizzas[c]=[]),e.pizzas[c].every((function(e){var t={name:i,type:_,size:r,img:s,price:n},a={name:e.name,type:e.type,size:e.size,img:e.img,price:e.price};return!l()(t,a)||(e.amount++,!1)}))&&e.pizzas[c].push({name:i,type:_,size:r,img:s,price:n,amount:1}),e.showMessage=o},deleteCartItem:function(e,t){var a=t.payload;j()(e.pizzas[a.id],(function(e){return e.name===a.name&&e.size===a.size&&e.type===a.type})),e.totalPrice-=a.amount*a.price,e.totalCount-=a.amount},deleteCart:function(e){e.pizzas={},e.totalPrice=0,e.totalCount=0},showMessage:function(e,t){var a=t.payload;e.showMessage=a}}}),p=m.actions,b=p.increment,u=p.addPiza,h=p.showMessage,z=p.decrement,x=p.deleteCartItem,O=p.deleteCart,g=m.reducer,f=Object(n.b)({name:"sort",initialState:{sortBy:{_sort:"popularity",_order:"desc"},category:"\u0412\u0441\u0435"},reducers:{sortBy:function(e,t){var a=t.payload;e.sortBy=a},category:function(e,t){var a=t.payload;e.category=a}}}),v=f.actions,y=v.sortBy,N=v.category,w=f.reducer,C=Object(n.a)({reducer:{pizza:g,sort:w}}),I=a(30),k=a.n(I),B=a(36),P=a(12),M=a(26),S=a.n(M),L=a(31),H=a.n(L),R=a(0),T=function(e){var t=e.children;return Object(R.jsx)("div",{className:H.a.padding,children:Object(R.jsx)("div",{className:H.a.wrapper,children:t})})},V=a(8),A=a.n(V),E=a(16),J=function(e){var t=e.hideButton,a=Object(s.c)((function(e){return e.pizza})),c=a.totalPrice,i=a.totalCount;return Object(R.jsx)("header",{className:A.a.header,children:Object(R.jsx)("div",{className:"container",children:Object(R.jsxs)("div",{className:A.a.header__body,children:[Object(R.jsx)(E.b,{to:"/",children:Object(R.jsxs)("div",{className:"".concat(A.a.header__logo," ").concat(A.a["logo-header"]),children:[Object(R.jsx)("div",{className:"".concat(A.a["logo-header__logo"]),children:Object(R.jsx)("img",{alt:"logo",src:"/logo.png"})}),Object(R.jsx)("h1",{className:A.a["logo-header__title"],children:"REACT PIZZA"}),Object(R.jsx)("p",{className:A.a["logo-header__text"],children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439"})]})}),t&&Object(R.jsx)(E.b,{to:"/cart",children:Object(R.jsxs)("div",{className:A.a.btn,children:[Object(R.jsx)("p",{className:A.a.btn__price,children:c}),Object(R.jsx)("p",{className:A.a.btn__currency,children:"\u20bd"}),Object(R.jsx)("div",{className:A.a.btn__line}),Object(R.jsxs)("div",{className:A.a.btn__shopping,children:[Object(R.jsx)("div",{className:A.a.btn__img,children:Object(R.jsxs)("svg",{viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(R.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(R.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(R.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})}),Object(R.jsx)("p",{className:A.a.btn__count,children:i})]})]})})]})})})},W=a(9),Y=a.n(W),Q=a(33),Z=a.n(Q),D=function(e){var t=e.text,a=e.dataCategory,c=e.isActive,i=e.onClick;return Object(R.jsx)("button",{onClick:i,"data-category":a,className:"".concat(Z.a.button," ").concat(c?Z.a.button__active:""," "),children:t})},F=function(e){var t=e.names,a=Object(c.useState)(0),i=Object(P.a)(a,2),_=i[0],r=i[1],n=Object(s.b)();return Object(R.jsx)(R.Fragment,{children:t.map((function(e,t){return Object(R.jsx)(D,{onClick:function(e){!function(e,t){var a=e.target.getAttribute("data-category");n(N(a)),r(t)}(e,t)},isActive:_===t,dataCategory:e,text:e},e)}))})},G=function(){var e=Object(c.useState)(!1),t=Object(P.a)(e,2),a=t[0],i=t[1],_=Object(c.useState)("\u043f\u043e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438"),r=Object(P.a)(_,2),n=r[0],o=r[1],l=Object(s.b)();Object(c.useEffect)((function(){window.addEventListener("click",(function(e){e.target.closest("#filter")||i(!1)}))}),[]);return Object(R.jsx)("div",{className:Y.a.filter,children:Object(R.jsx)("div",{className:"container",children:Object(R.jsxs)("div",{className:Y.a.filter__body,children:[Object(R.jsx)("div",{className:Y.a.filter__options,children:Object(R.jsx)(F,{names:["\u0412\u0441\u0435","\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435"]})}),Object(R.jsxs)("div",{onClick:function(){return i(!a)},id:"filter",className:"".concat(Y.a.filter__sort," ").concat(a?"".concat(Y.a["filter__sort--active"]):""," "),children:[Object(R.jsxs)("div",{className:Y.a.filter__sortBy,children:[Object(R.jsx)("div",{className:Y.a.filter__arrow}),Object(R.jsx)("p",{className:Y.a.filter__text,children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"})]}),Object(R.jsxs)("div",{className:Y.a.filter__categories,children:[Object(R.jsx)("p",{className:Y.a.filter__category,children:n}),Object(R.jsxs)("ul",{onClick:function(e){var t=e.target.innerText;o(t);var a=e.target.getAttribute("data-filteritem"),c=e.target.getAttribute("data-filterhow")||"desc";l(y({_sort:a,_order:c}))},className:Y.a.filter__choose,children:[Object(R.jsx)("li",{"data-filteritem":"popularity",className:Y.a.filter__choose__item,children:"\u043f\u043e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438"}),Object(R.jsx)("li",{"data-filteritem":"price",className:Y.a.filter__choose__item,children:"\u043f\u043e \u0446\u0435\u043d\u0435"}),Object(R.jsx)("li",{"data-filteritem":"name","data-filterhow":"asc",className:Y.a.filter__choose__item,children:"\u043f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443"})]})]})]})]})})})},X=Object(c.memo)(G),U=a(6),K=a.n(U),q=Object(c.memo)((function(e){var t=e.name,a=e.price,i=e.img,_=e.id,r=Object(s.b)(),n=Object(c.useState)(0),o=Object(P.a)(n,2),l=o[0],d=o[1],j=["\u0442\u043e\u043d\u043a\u043e\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"],m=["26 \u0441\u043c.","30 \u0441\u043c.","40 \u0441\u043c."],p=Object(c.useState)(j.null),z=Object(P.a)(p,2),x=z[0],O=z[1],g=Object(c.useState)(m.null),f=Object(P.a)(g,2),v=f[0],y=f[1],N=Object(s.c)((function(e){return e.pizza.pizzas}));return Object(R.jsx)("div",{className:K.a.pizza,children:Object(R.jsxs)("div",{className:K.a.pizza__column,children:[Object(R.jsx)("div",{style:{width:"260px",height:"260px"},className:K.a.pizza__img,children:Object(R.jsxs)("picture",{children:[Object(R.jsx)("source",{srcSet:"/pizzasimg/avif/".concat(i,".avif"),alt:t,type:"image/avif"}),Object(R.jsx)("source",{srcSet:"/pizzasimg/webp/".concat(i,".webp"),alt:t,type:"image/webp"}),Object(R.jsx)("img",{style:{maxWidth:"100%"},src:"/pizzasimg/jpg/".concat(i,".jpeg"),alt:t})]})}),Object(R.jsx)("h3",{className:K.a.pizza__title,children:t}),Object(R.jsxs)("div",{className:K.a.pizza__options,children:[Object(R.jsx)("div",{className:K.a.pizza__type,children:j.map((function(e,t){return Object(R.jsx)("div",{onClick:function(){O(t)},className:"".concat(K.a.type__item__wrapper),children:Object(R.jsx)("p",{className:"".concat(K.a.pizza__type__item," ").concat(t===x?K.a.pizza__type__item__active:""),children:e})},e)}))}),Object(R.jsx)("div",{className:K.a.pizza__size,children:m.map((function(e,t){return Object(R.jsx)("div",{onClick:function(){y(t)},className:K.a.size__item__wrapper,children:Object(R.jsx)("div",{className:"".concat(K.a.pizza__size__item," ").concat(t===v?K.a.pizza__size__item__active:""),children:e})},e)}))})]}),Object(R.jsxs)("div",{className:K.a.price,children:[Object(R.jsx)("div",{className:K.a.price__money,children:Object(R.jsxs)("p",{className:K.a.text,children:["\u043e\u0442 ",a," ","\u20bd"," "]})}),Object(R.jsxs)("div",{onClick:function(){void 0!==x&&void 0!==v?(d(l+1),r(u({img:i,id:_,name:t,type:j[x],size:m[v],price:a,showMessage:!1})),r(b())):r(h(!0))},className:"".concat(K.a.btn," btn"),children:[Object(R.jsx)("div",{className:K.a.plus,children:Object(R.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(R.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})})}),Object(R.jsx)("p",{className:K.a.btn__text,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(R.jsx)("div",{className:K.a.btn__count,children:function(){var e;return N[_]?null===(e=N[_])||void 0===e?void 0:e.reduce((function(e,t){return e.amount?e.amount+t.amount:e+t.amount}),0):0}()})]})]})]})})}),(function(e,t){return e.name===t.name})),$=a(34),ee=a.n($),te=function(){var e=Object(s.c)((function(e){return e.pizza})).showMessage;return e?Object(R.jsx)("div",{className:"".concat(ee.a.message," ").concat(e?ee.a.message__active:""," "),children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u0438 \u0440\u0430\u0437\u043c\u0435\u0440 \u043f\u0438\u0446\u044b"}):null},ae=a(25),ce=function(){var e=Object(c.useState)(!1),t=Object(P.a)(e,2),a=t[0],i=t[1],_=Object(c.useState)(!1),r=Object(P.a)(_,2),n=r[0],o=r[1],l=Object(c.useState)([]),d=Object(P.a)(l,2),j=d[0],m=d[1],p=Object(s.c)((function(e){return e.sort.sortBy})),b=p._sort,u=p._order,h=Object(s.c)((function(e){return e.sort})).category;return Object(c.useEffect)((function(){(function(){var e=Object(B.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,fetch("/data?_sort=".concat(b,"&_order=").concat(u).concat("\u0412\u0441\u0435"===h?"":"&category=".concat(h)));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,i(!1),m(a),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),i(!1),console.log(e.t0.message),o(!0);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[b,h,u]),Object(R.jsxs)(T,{children:[Object(R.jsx)(ae.a,{children:Object(R.jsx)("title",{children:"\u041c\u0435\u043d\u044e"})}),Object(R.jsx)(J,{hideButton:!0}),Object(R.jsxs)("main",{children:[Object(R.jsx)(X,{}),Object(R.jsx)("section",{className:S.a.menu,children:Object(R.jsx)("div",{className:"container",children:a?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445...":n?"\u043e\u0448\u0438\u0431\u043a\u0430 \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437":Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("h2",{className:S.a.title,children:"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b"}),Object(R.jsx)(te,{}),Object(R.jsx)("div",{className:S.a.grid,children:j&&j.map((function(e){return Object(R.jsx)(q,{id:e._id,name:e.name,price:e.price,img:e.imgUrl},e.name)}))})]})})})]})]})},ie=a(4),_e=a(21),re=a(7),se=a.n(re),ne=a(15),oe=a.n(ne),le=Object(c.memo)((function(e){var t=Object(s.b)();return Object(R.jsxs)("div",{className:oe.a.cartItem,children:[Object(R.jsxs)("div",{className:oe.a.cartItem__pizza,children:[Object(R.jsx)("img",{style:{width:"105px"},alt:e.name,src:"/pizzasimg/jpg/".concat(e.img,".jpeg")}),Object(R.jsxs)("div",{className:oe.a.cartItem__descr,children:[Object(R.jsx)("div",{className:oe.a.cartItem__title,children:e.name}),Object(R.jsxs)("div",{className:oe.a.cartItem__text,children:[e.type,", ",e.size]})]})]}),Object(R.jsxs)("div",{className:oe.a.cartItem__buttons,children:[Object(R.jsx)("div",{onClick:function(){t(z([e.id,{name:e.name,type:e.type,size:e.size,img:e.img,price:e.price,amount:e.amount}]))},className:oe.a.cartItem__minus,children:Object(R.jsx)("img",{alt:"minus",src:"/pizzasimg/svg/minus.svg"})}),Object(R.jsx)("div",{className:oe.a.cartItem__count,children:e.amount}),Object(R.jsx)("div",{onClick:function(){t(u(Object(_e.a)(Object(_e.a)({},e),{},{showMessage:!1}))),t(b())},className:oe.a.cartItem__plus,children:Object(R.jsx)("img",{alt:"plus",src:"/pizzasimg/svg/plus.svg"})})]}),Object(R.jsxs)("p",{className:oe.a.cartItem__price,children:[e.price*e.amount," \u20bd "]}),Object(R.jsx)("div",{onClick:function(){t(x(e))},className:oe.a.cartItem__delete,children:Object(R.jsx)("img",{alt:"delete",src:"/pizzasimg/svg/delete.svg"})})]})})),de=a(18),je=a.n(de),me=function(){return Object(R.jsxs)("div",{className:je.a.getCenter,children:[Object(R.jsx)("h2",{className:je.a.title,children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f \ud83d\ude15"}),Object(R.jsx)("p",{className:je.a.text,children:"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443. \u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."}),Object(R.jsx)("div",{className:je.a.img,children:Object(R.jsx)("img",{alt:"empty",src:"/pizzasimg/svg/empty.svg"})}),Object(R.jsx)("div",{className:je.a.btn,children:Object(R.jsx)(E.b,{to:"/",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})]})},pe=function(){var e=Object(s.c)((function(e){return e.pizza})),t=Object(s.b)(),a=function(){var t=[],a=function(a){e.pizzas[a].forEach((function(e){t.push(Object(R.jsx)(le,Object(_e.a)({id:a},e),"".concat(a," + ").concat(e.type," + ").concat(e.size)))}))};for(var c in e.pizzas)a(c);return t};return Object(R.jsxs)(T,{children:[Object(R.jsx)(ae.a,{children:Object(R.jsx)("title",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"})}),Object(R.jsx)(J,{hideButton:!1}),Object(R.jsx)("div",{className:se.a.cartContainer,children:Object(R.jsx)("div",{className:se.a.container,children:0===a().length?Object(R.jsx)(me,{}):Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)("div",{className:se.a.cart,children:[Object(R.jsxs)("div",{className:se.a.cart__title,children:[Object(R.jsx)("img",{alt:"shoppingCart",src:"/pizzasimg/svg/shoppingCart.svg"}),Object(R.jsx)("h2",{className:se.a.cart__titleText,children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"})]}),Object(R.jsxs)("div",{onClick:function(){t(O())},className:se.a.cart__trash,children:[Object(R.jsx)("img",{alt:"trash",src:"/pizzasimg/svg/trash.svg"}),Object(R.jsx)("p",{className:se.a.cart__trashText,children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),Object(R.jsx)("div",{className:se.a.cart__items,children:a().map((function(e){return e}))}),Object(R.jsxs)("div",{className:se.a.info,children:[Object(R.jsxs)("div",{className:se.a.amountPizzas,children:["\u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446:",Object(R.jsxs)("p",{children:[e.totalCount," \u0448\u0442."]})]}),Object(R.jsxs)("div",{className:se.a.totalPrice,children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430:",Object(R.jsxs)("p",{children:[e.totalPrice," \u20bd"]})]})]}),Object(R.jsxs)("div",{className:se.a.order,children:[Object(R.jsx)(E.b,{to:"/",children:Object(R.jsxs)("div",{className:se.a.order__back,children:[Object(R.jsx)("div",{className:se.a.order__img,children:Object(R.jsx)("img",{alt:"arrow",src:"/pizzasimg/svg/arrow.svg"})}),Object(R.jsx)("p",{className:se.a.order__backText,children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]})}),Object(R.jsx)("div",{className:se.a.order__pay,children:Object(R.jsx)("a",{href:"*",children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})})]})]})})})]})},be=function(){return Object(R.jsx)(s.a,{store:C,children:Object(R.jsx)(E.a,{children:Object(R.jsxs)(ie.c,{children:[Object(R.jsx)(ie.a,{exact:!0,component:ce,path:"/"}),Object(R.jsx)(ie.a,{exact:!0,component:pe,path:"/cart"})]})})})};a(50);r.a.render(Object(R.jsx)(i.a.StrictMode,{children:Object(R.jsx)(be,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={pizza:"piza_pizza__1-_Rd",pizza__column:"piza_pizza__column__306i7",pizza__img:"piza_pizza__img__38aon",pizza__title:"piza_pizza__title__3CHgY",pizza__options:"piza_pizza__options__13vRY",pizza__type:"piza_pizza__type__1y-co",pizza__type__item:"piza_pizza__type__item__1uQVP",pizza__type__item__active:"piza_pizza__type__item__active__3fS-A",pizza__size:"piza_pizza__size__1y3x1",pizza__size__item:"piza_pizza__size__item__wVMyl",pizza__size__item__active:"piza_pizza__size__item__active__3QRe1",type__item__wrapper:"piza_type__item__wrapper__1u5pA",size__item__wrapper:"piza_size__item__wrapper__1r-b9",text:"piza_text__7RhCJ",price:"piza_price__2f8UH",price__money:"piza_price__money__tA8aM",currency:"piza_currency__2dp3F",btn:"piza_btn__3IeI4",btn__count:"piza_btn__count__2eYH0",plus:"piza_plus__23hIH",btn__text:"piza_btn__text__3czHk"}},7:function(e,t,a){e.exports={cartContainer:"cart_cartContainer__2PW1p",container:"cart_container__3wkiZ",cart:"cart_cart__1XdLL",cart__title:"cart_cart__title__18bRr",cart__titleText:"cart_cart__titleText__1RDsO",cart__trash:"cart_cart__trash__1sBDH",cart__trashText:"cart_cart__trashText__331GD",cart__items:"cart_cart__items__2ZBTa",info:"cart_info__18aqk",amountPizzas:"cart_amountPizzas__2moj_",totalPrice:"cart_totalPrice__1OwVu",order:"cart_order__3xtR5",order__back:"cart_order__back__3bWAw",order__img:"cart_order__img__2bj-7",order__pay:"cart_order__pay__12w_o"}},8:function(e,t,a){e.exports={header:"header_header__29IuH",header__body:"header_header__body___DpY_",header__logo:"header_header__logo__3aDj6","logo-header":"header_logo-header__NP_VF","logo-header__logo":"header_logo-header__logo__2rp_3","logo-header__title":"header_logo-header__title__3GIGc","logo-header__text":"header_logo-header__text__5TYPa",btn:"header_btn__109N3",btn__line:"header_btn__line__1_RRT",btn__img:"header_btn__img__3jpVR",btn__price:"header_btn__price__3EaYy",btn__currency:"header_btn__currency__HVc8k",btn__shopping:"header_btn__shopping__H-sa4",btn__count:"header_btn__count__22LlX"}},9:function(e,t,a){e.exports={filter:"filter_filter__1-RYQ",filter__body:"filter_filter__body__SfDJ4",filter__sort:"filter_filter__sort__2Qjd8","filter__sort--active":"filter_filter__sort--active__NSmib",filter__arrow:"filter_filter__arrow__UJi04",filter__choose:"filter_filter__choose__1uwlE",filter__sortBy:"filter_filter__sortBy__1goPQ",filter__text:"filter_filter__text__zaV22",filter__categories:"filter_filter__categories__XtVUJ",filter__category:"filter_filter__category__1R0Xv",filter__choose__item:"filter_filter__choose__item__sz_GQ"}}},[[51,1,2]]]);
//# sourceMappingURL=main.18f151e2.chunk.js.map