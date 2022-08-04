(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__3h4YS",control:"Checkout_control__32CvD",actions:"Checkout_actions__2afo3",submit:"Checkout_submit__19Tq5",invalid:"Checkout_invalid__2kQoi"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3YOg1",total:"Cart_total__3l5ax",actions:"Cart_actions__1HnJk","button--alt":"Cart_button--alt__3Juix",button:"Cart_button__1hOUQ"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__35fic",summary:"CartItem_summary__3sRwz",price:"CartItem_price__2Yiyr",amount:"CartItem_amount__1eZuE",actions:"CartItem_actions__3aVOo"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__K5buo",icon:"HeaderCartButton_icon__3ewvM",badge:"HeaderCartButton_badge__aOX2E",bump:"HeaderCartButton_bump__w8oL8"}},,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1ulGq",modal:"Modal_modal__BsAKE","slide-down":"Modal_slide-down__2YbrX"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__o_WTD","meals-appear":"AvailableMeals_meals-appear__peZQx",MealsError:"AvailableMeals_MealsError__2GWOn",Loading:"AvailableMeals_Loading__1jTHV"}},function(e,t,n){e.exports={meal:"MealItem_meal__24iwT",description:"MealItem_description__adc3b",price:"MealItem_price__cyyWP"}},,function(e,t,n){e.exports={header:"Header_header__3-Y9_","main-image":"Header_main-image__1vkQv"}},,function(e,t,n){e.exports={card:"Card_card__QB9ip"}},function(e,t,n){e.exports={form:"MealItemForm_form__34zMA"}},function(e,t,n){e.exports={input:"Input_input__1hySe"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__3yHmA"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),r=(n(27),n(2)),s=n(1),i=n.n(s),o=n(6),l=n(12),u=n(4),j=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),d=n(13),m=n.n(d),b=n(0),O=function(e){return Object(b.jsx)("div",{className:m.a.backdrop,onClick:e.onClose})},h=function(e){return Object(b.jsx)("div",{className:m.a.modal,children:Object(b.jsx)("div",{className:m.a.content,children:e.children})})},x=document.getElementById("overlays"),p=function(e){return Object(b.jsxs)(s.Fragment,{children:[c.a.createPortal(Object(b.jsx)(O,{onClose:e.onClose}),x),c.a.createPortal(Object(b.jsx)(h,{children:e.children}),x)]})},f=n(5),_=n.n(f),v=n(7),C=n.n(v),y=function(e){var t="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:C.a["cart-item"],children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e.name}),Object(b.jsxs)("div",{className:C.a.summary,children:[Object(b.jsx)("span",{className:C.a.price,children:t}),Object(b.jsxs)("span",{className:C.a.amount,children:["x ",e.amount]})]})]}),Object(b.jsxs)("div",{className:C.a.actions,children:[Object(b.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(b.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},g=n(3),N=n.n(g),k=function(e){return""===e.trim()},A=function(e){var t=Object(s.useState)({name:!0,street:!0,postalCode:!0,city:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)(),o=Object(s.useRef)(),l=Object(s.useRef)(),u=Object(s.useRef)(),j="".concat(N.a.control," ").concat(a.name?"":N.a.invalid," "),d="".concat(N.a.control," ").concat(a.street?"":N.a.invalid," "),m="".concat(N.a.control," ").concat(a.postalCode?"":N.a.invalid," "),O="".concat(N.a.control," ").concat(a.city?"":N.a.invalid," ");return Object(b.jsxs)("form",{className:N.a.form,id:"141",onSubmit:function(t){t.preventDefault();var n=i.current.value,a=o.current.value,r=l.current.value,s=u.current.value,j=!k(n),d=!k(a),m=5===r.trim().length,b=!k(s);c({name:j,street:d,postalCode:m,city:b}),j&&d&&m&&b&&e.onConfirm({name:n,street:a,postalCode:r,city:s})},children:[Object(b.jsxs)("div",{className:j,children:[Object(b.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(b.jsx)("input",{type:"text",id:"name",ref:i}),!a.name&&Object(b.jsx)("p",{children:"Please enter a valid Name!"})]}),Object(b.jsxs)("div",{className:d,children:[Object(b.jsx)("label",{htmlFor:"street",children:"Street"}),Object(b.jsx)("input",{type:"text",id:"street",ref:o}),!a.street&&Object(b.jsx)("p",{children:"Please enter a valid Street!"})]}),Object(b.jsxs)("div",{className:m,children:[Object(b.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(b.jsx)("input",{type:"text",id:"postal",ref:l}),!a.postalCode&&Object(b.jsx)("p",{children:"Please enter a valid Postal Code (5 Characters Long!)!"})]}),Object(b.jsxs)("div",{className:O,children:[Object(b.jsx)("label",{htmlFor:"city",children:"City"}),Object(b.jsx)("input",{type:"text",id:"city",ref:u}),!a.city&&Object(b.jsx)("p",{children:"Please enter a valid City!"})]})]})},S=function(e){var t=Object(s.useContext)(j),n=Object(s.useState)(!1),a=Object(r.a)(n,2),c=a[0],i=a[1],d=Object(s.useState)(!1),m=Object(r.a)(d,2),O=m[0],h=m[1],x=Object(s.useState)(!1),f=Object(r.a)(x,2),v=f[0],C=f[1],g=Object(s.useState)(null),k=Object(r.a)(g,2),S=k[0],w=k[1],I=Object(s.useState)(!1),M=Object(r.a)(I,2),E=M[0],F=M[1],H="$".concat(t.totalAmount.toFixed(2)),P=t.items.length>0,R=function(e){t.addItem(Object(u.a)(Object(u.a)({},e),{},{amount:1}))},D=function(e){t.removeItem(e)},T=function(){var e=Object(l.a)(Object(o.a)().mark((function e(n){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,fetch("https://http-react-2a43d-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({user:n,orderedIems:t.items})});case 4:if(e.sent.ok){e.next=7;break}throw new Error("Something Went Wrong. Please Check Your Internet Connection!");case 7:h(!1),C(!0),t.clearCart(),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),h(!1),F(!0),w(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),B=Object(b.jsx)("ul",{className:_.a["cart-items"],children:t.items.map((function(e){return Object(b.jsx)(y,{name:e.name,amount:e.amount,price:e.price,onRemove:D.bind(null,e.id),onAdd:R.bind(null,e)},e.id)}))}),Y=Object(b.jsxs)("div",{className:_.a.actions,children:[Object(b.jsx)("button",{className:_.a["button--alt"],onClick:e.onClose,children:"Close"}),P&&Object(b.jsx)("button",{className:_.a.button,onClick:function(){i(!0)},children:"Order"})]}),L=Object(b.jsxs)("div",{className:N.a.actions,children:[Object(b.jsx)("button",{type:"button",onClick:e.onClose,children:"Cancel"}),Object(b.jsx)("button",{className:N.a.submit,type:"submit",form:"141",children:"Confirm"})]}),W=Object(b.jsxs)(s.Fragment,{children:[B,Object(b.jsxs)("div",{className:_.a.total,children:[Object(b.jsx)("span",{children:"Total Amount"}),Object(b.jsx)("span",{children:H})]}),c&&Object(b.jsx)(A,{onConfirm:T,onCancel:e.onClose}),!c&&Y,c&&L]}),z=Object(b.jsx)("p",{children:"Sending Order Data..."}),J=Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)("p",{style:{color:"green"},children:"Successfully Submited the Order!"}),Object(b.jsx)("div",{className:_.a.actions,children:Object(b.jsx)("button",{className:_.a.button,style:{backgroundColor:"green"},onClick:e.onClose,children:"Close"})})]}),Q=Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)("p",{style:{color:"red"},children:S}),Object(b.jsx)("div",{className:_.a.actions,children:Object(b.jsx)("button",{className:_.a.button,onClick:e.onClose,children:"Close"})})]});return Object(b.jsxs)(p,{onClose:e.onClose,children:[!O&&!v&&W,O&&z,!O&&v&&J,E&&Q]})},w=n(17),I=n.n(w),M=n.p+"static/media/meals.2971f633.jpg",E=n(10),F=n.n(E),H=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(b.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},P=function(e){var t=Object(s.useContext)(j),n=t.items,a=Object(s.useState)(!1),c=Object(r.a)(a,2),i=c[0],o=c[1],l=t.items.reduce((function(e,t){return e+t.amount}),0),u="".concat(F.a.button," ").concat(i?F.a.bump:"");return Object(s.useEffect)((function(){if(0!==n.length){o(!0);var e=setTimeout((function(){o(!1)}),300);return function(){clearTimeout(e)}}}),[n]),Object(b.jsxs)("button",{className:u,onClick:e.onClick,children:[Object(b.jsx)("span",{className:F.a.icon,children:Object(b.jsx)(H,{})}),Object(b.jsx)("span",{children:"Your Cart"}),Object(b.jsx)("span",{className:F.a.badge,children:l})]})},R=function(e){return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsxs)("header",{className:I.a.header,children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Feastables"})}),Object(b.jsx)("div",{children:Object(b.jsx)(P,{onClick:e.onShowCart})})]}),Object(b.jsx)("div",{className:I.a["main-image"],children:Object(b.jsx)("img",{src:M,alt:"A table full of Delicious Meals"})})]})},D=n(14),T=n.n(D),B=n(19),Y=n.n(B),L=function(e){return Object(b.jsx)("div",{className:Y.a.card,children:e.children})},W=n(15),z=n.n(W),J=n(20),Q=n.n(J),V=n(21),q=n.n(V),$=i.a.forwardRef((function(e,t){return Object(b.jsxs)("div",{className:q.a.input,children:[Object(b.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(b.jsx)("input",Object(u.a)({ref:t},e.input))]})})),G=function(e){var t=Object(s.useRef)(),n=Object(s.useState)(!0),a=Object(r.a)(n,2),c=a[0],i=a[1];return Object(b.jsxs)("form",{className:Q.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,c=+a;if(0===a.trim().length||c<1||c>5)return i(!1);e.onAddToCart(c)},children:[Object(b.jsx)($,{ref:t,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(b.jsx)("button",{children:"+ Add"}),!c&&Object(b.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},K=function(e){var t="$".concat(e.price.toFixed(2)),n=Object(s.useContext)(j);return Object(b.jsxs)("li",{className:z.a.meal,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("div",{className:z.a.description,children:e.description}),Object(b.jsx)("div",{className:z.a.price,children:t})]}),Object(b.jsx)("div",{children:Object(b.jsx)(G,{id:e.id,onAddToCart:function(t){n.addItem({id:e.id,name:e.name,amount:t,price:e.price})}})})]})},X=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!0),i=Object(r.a)(c,2),u=i[0],j=i[1],d=Object(s.useState)(null),m=Object(r.a)(d,2),O=m[0],h=m[1];if(Object(s.useEffect)((function(){var e=function(){var e=Object(l.a)(Object(o.a)().mark((function e(){var t,n,c,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://http-react-2a43d-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something Went Wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,descripion:n[r].description,price:n[r].price});a(c),j(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){j(!1),h(e.message)}))}),[]),u)return Object(b.jsx)("section",{className:T.a.Loading,children:Object(b.jsx)("p",{children:"Loading..."})});if(O)return Object(b.jsx)("section",{className:T.a.MealsError,children:Object(b.jsx)("p",{children:O})});var x=n.map((function(e){return Object(b.jsx)(K,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(b.jsx)("section",{className:T.a.meals,children:Object(b.jsx)(L,{children:Object(b.jsx)("ul",{children:x})})})},Z=n(22),U=n.n(Z),ee=function(){return Object(b.jsxs)("section",{className:U.a.summary,children:[Object(b.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(b.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(b.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},te=function(){return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)(ee,{}),Object(b.jsx)(X,{})]})},ne=n(18),ae={items:[],totalAmount:0},ce=function(e,t){if("ADD"===t.type){var n,a,c=e.totalAmount+t.item.price*t.item.amount,r=e.items.findIndex((function(e){return e.id===t.item.id})),s=e.items[r];return s?(n=Object(u.a)(Object(u.a)({},s),{},{amount:s.amount+t.item.amount}),(a=Object(ne.a)(e.items))[r]=n):(n=Object(u.a)({},t.item),a=e.items.concat(n)),{items:a,totalAmount:c}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],j=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(u.a)(Object(u.a)({},l),{},{amount:l.amount-1});(i=Object(ne.a)(e.items))[o]=d}return{items:i,totalAmount:j}}return t.type,ae},re=function(e){var t=Object(s.useReducer)(ce,ae),n=Object(r.a)(t,2),a=n[0],c=n[1],i={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(b.jsx)(j.Provider,{value:i,children:e.children})};var se=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)(re,{children:[n&&Object(b.jsx)(S,{onClose:function(){a(!1)}}),Object(b.jsx)(R,{onShowCart:function(){a(!0)}}),Object(b.jsx)("main",{children:Object(b.jsx)(te,{})})]})};c.a.render(Object(b.jsx)(se,{}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.f2a48a81.chunk.js.map