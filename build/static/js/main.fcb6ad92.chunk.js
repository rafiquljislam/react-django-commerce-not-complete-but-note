(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{35:function(t,e,c){},59:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(1),r=c(28),s=c.n(r),o=(c(35),c(4)),i=c(5),l=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(n.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Navbar"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(n.jsxs)("div",{className:"navbar-nav",children:[Object(n.jsx)(o.b,{className:"nav-link",to:"/product-category",children:"Category"}),Object(n.jsx)(o.b,{className:"nav-link",to:"/MyCart",children:"MyCart"})]})})]})})},d=c(2),u=c.n(d),j=c(6),b=c(8),h=c(3),O=c.n(h),x="http://127.0.0.1:8000/api/",f={Authorization:"token ".concat(window.localStorage.getItem("token"))},p=function(){var t=Object(a.useState)([]),e=Object(b.a)(t,2),c=e[0],r=e[1];Object(a.useEffect)((function(){var t=function(){var t=Object(j.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O.a.defaults.headers=f,O.a.get("".concat(x,"product/")).then((function(t){r(t.data),console.log(t.data)})).catch((function(t){console.log("Product not Comming")}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();window.localStorage.setItem("token","f235c7bd433062fde8f26470d1778866709fca17"),t()}),[]);var s=function(){var t=Object(j.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O.a.defaults.headers=f,t.next=3,O.a.post("".concat(x,"add-to-cart-").concat(e,"/")).then((function(t){console.log(t.data)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row mt-3",children:null===c||void 0===c?void 0:c.map((function(t,e){return Object(n.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(n.jsx)("h2",{children:t.title}),Object(n.jsx)(o.b,{to:"product-detail/".concat(t.slug,"/").concat(t.id),children:Object(n.jsx)("img",{className:"w-100 h-50",src:t.image_url,alt:""})}),Object(n.jsxs)("p",{children:["Price: ",Object(n.jsx)("strike",{children:t.marked_price})," TK.",t.selling_price]}),Object(n.jsx)(o.b,{onClick:function(){return s(t.id)},className:"btn btn-info",children:"Add To Cart"})]},e)}))})})},m=function(){var t=Object(a.useState)([]),e=Object(b.a)(t,2),c=e[0],r=e[1];Object(a.useEffect)((function(){(function(){var t=Object(j.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O.a.defaults.headers=f,O.a.get("".concat(x,"category/")).then((function(t){r(t.data),console.log(t.data)})).catch((function(t){console.log("Catagory not Comming")}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var s=function(){var t=Object(j.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O.a.defaults.headers=f,t.next=3,O.a.post("".concat(x,"add-to-cart-").concat(e,"/")).then((function(t){console.log(t.data)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"container",children:c.map((function(t,e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{children:t.title}),Object(n.jsx)("p",{children:t.slug}),Object(n.jsx)("div",{className:"row",children:t.products.map((function(t,e){return Object(n.jsxs)("div",{className:"col-md-4",children:[Object(n.jsx)(o.b,{to:"product-detail/".concat(t.slug,"/").concat(t.id),children:Object(n.jsx)("img",{src:"".concat("http://127.0.0.1:8000").concat(t.image),className:"w-100 h-50",alt:""})}),Object(n.jsx)("h5",{children:t.title}),Object(n.jsx)(o.b,{onClick:function(){return s(t.id)},className:"btn btn-outline-info",children:"Add to Cart"})]},e)}))},e)]})}))})},v=function(){var t=Object(i.f)().id;console.log(t);var e=Object(a.useState)({}),c=Object(b.a)(e,2),r=c[0],s=c[1];Object(a.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O.a.defaults.headers=f,O.a.get("".concat(x,"product/").concat(t,"/")).then((function(t){s(t.data),console.log(t.data)})).catch((function(t){console.log("Product not Comming")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=function(){var t=Object(j.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O.a.defaults.headers=f,t.next=3,O.a.post("".concat(x,"add-to-cart-").concat(e,"/")).then((function(t){console.log(t.data)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{class:"container",children:[Object(n.jsxs)("h3",{children:["Product: ",r.title]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{class:"row",children:[Object(n.jsxs)("div",{class:"col-md-4",children:[Object(n.jsx)("img",{src:r.image_url,alt:"",class:"img-fluid"}),Object(n.jsx)("div",{class:"row",children:Object(n.jsx)("div",{class:"col-md-4 p-3",children:Object(n.jsx)(o.b,{to:r.image_url,target:"_blank",children:Object(n.jsx)("img",{src:r.image_url,class:"img-fluid imagestyle_one",alt:""})})})})]}),Object(n.jsxs)("div",{class:"col-md-8",children:[Object(n.jsxs)("h4",{children:[r.title," (Viewed ",r.view_count," times)"]}),Object(n.jsxs)("h5",{children:["Category: ",r.category]}),Object(n.jsxs)("h5",{children:["Price: ",Object(n.jsxs)("strike",{children:["Rs. ",r.marked_price]})," Rs. ",r.selling_price]}),Object(n.jsx)(o.b,{onClick:function(){return l(r.id)},class:"btn btn-info",children:"Add To Cart"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("p",{class:"text-info",children:["Warranty: ",r.warranty]}),Object(n.jsxs)("p",{class:"text-info",children:["Return Policy:",r.return_policy]}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{children:r.description})]})]})]})},g=function(){var t,e=Object(a.useState)({}),c=Object(b.a)(e,2),r=c[0],s=c[1],i=Object(a.useState)(null),l=Object(b.a)(i,2),d=l[0],h=l[1],p=function(){var t=Object(j.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O.a.defaults.headers=f,t.next=3,O.a.post("".concat(x,"add-to-cart-").concat(e,"/")).then((function(t){console.log(t.data.data),h(t.data)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(j.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O.a.defaults.headers=f,t.next=3,O.a.put("".concat(x,"edit-cart-").concat(e,"/")).then((function(t){console.log(t.data),h(t.data)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(j.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O.a.defaults.headers=f,t.next=3,O.a.post("".concat(x,"edit-cart-").concat(e,"/")).then((function(t){console.log(t.data),h(t.data.data)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(j.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O.a.defaults.headers=f,t.next=3,O.a.delete("".concat(x,"edit-cart-").concat(e,"/")).then((function(t){console.log(t.data),h(t.data.data)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){(function(){var t=Object(j.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O.a.defaults.headers=f,t.next=3,O.a.get("".concat(x,"CartViewset/")).then((function(t){s(t.data[0]),console.log(t.data[0])}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[d]),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row justify-content-md-center",children:Object(n.jsxs)("div",{className:"col-md-8",children:[Object(n.jsx)("h4",{children:"Items in My cart"}),Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"SN"}),Object(n.jsx)("th",{children:"Product"}),Object(n.jsx)("th",{children:"Rate"}),Object(n.jsx)("th",{children:"Quantity"}),Object(n.jsx)("th",{children:"Subtotal"}),Object(n.jsx)("th",{children:"Action"})]})}),Object(n.jsxs)("tbody",{children:[null===r||void 0===r||null===(t=r.cartproducts)||void 0===t?void 0:t.map((function(t,e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e+1}),Object(n.jsx)("td",{children:t.product.title}),Object(n.jsx)("td",{children:t.rate}),Object(n.jsx)("td",{children:t.quantity}),Object(n.jsx)("td",{children:t.subtotal}),Object(n.jsxs)("td",{children:[Object(n.jsx)(o.b,{onClick:function(){return p(t.product.id)},className:"btn btn-outline-info m-1",children:"+"}),Object(n.jsx)(o.b,{onClick:function(){return m(t.id)},className:"btn btn-outline-info m-1",children:"-"}),Object(n.jsx)(o.b,{onClick:function(){return v(t.id)},className:"btn btn-outline-info m-1",children:"X"})]})]},e)})),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{colSpan:"4",className:"text-right",children:"Total"}),Object(n.jsx)("th",{children:null===r||void 0===r?void 0:r.total}),null!=r&&Object(n.jsx)("th",{onClick:function(){return g(null===r||void 0===r?void 0:r.id)},className:"btn btn-sm btn-danger m-2",children:"Delate Cart"})]}),Object(n.jsx)("tr",{children:null!=r&&Object(n.jsx)("th",{children:Object(n.jsx)(o.b,{to:"/Chackout",className:"btn btn-info",children:"Chackout"})})})]})]})]})})})},y=function(t){var e=t.cartid,c=Object(a.useState)(""),r=Object(b.a)(c,2),s=r[0],i=r[1],l=Object(a.useState)(""),d=Object(b.a)(l,2),h=d[0],f=d[1],p=Object(a.useState)(""),m=Object(b.a)(p,2),v=m[0],g=m[1],y=Object(a.useState)(""),w=Object(b.a)(y,2),k=w[0],N=w[1],C=function(){var t=Object(j.a)(u.a.mark((function t(){var c,n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c={ordered_by:s,shipping_address:h,mobile:v,email:k,cartId:e},n={"Content-Type":"application/json",Authorization:"token ".concat(window.localStorage.getItem("token"))},a="".concat(x,"OrderViewset/"),O.a.post(a,c,n).then((function(t){return console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.jsx)("div",{children:Object(n.jsx)("form",{children:Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("input",{onChange:function(t){return i(t.target.value)},class:"form-control my-1",type:"text",placeholder:"Orded By"}),Object(n.jsx)("input",{onChange:function(t){return f(t.target.value)},class:"form-control my-1",type:"text",placeholder:"setShippingAddress"}),Object(n.jsx)("input",{onChange:function(t){return g(t.target.value)},class:"form-control my-1",type:"text",placeholder:"setMobile"}),Object(n.jsx)("input",{onChange:function(t){return N(t.target.value)},class:"form-control my-1",type:"email",placeholder:"setEmail"}),Object(n.jsx)(o.b,{onClick:C,className:"btn btn-info",children:"Order"})]})})})},w=function(){var t,e=Object(a.useState)({}),c=Object(b.a)(e,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){(function(){var t=Object(j.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O.a.defaults.headers=f,t.next=3,O.a.get("".concat(x,"CartViewset/")).then((function(t){s(t.data[0]),console.log(t.data[0])}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-6",children:[Object(n.jsx)("h2",{children:"All Products"}),Object(n.jsx)("h4",{children:Object(n.jsx)(o.b,{to:"/MyCart",children:"Update Cart"})}),Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"SN"}),Object(n.jsx)("th",{children:"Product"}),Object(n.jsx)("th",{children:"Rate"}),Object(n.jsx)("th",{children:"Quantity"}),Object(n.jsx)("th",{children:"Subtotal"})]})}),Object(n.jsxs)("tbody",{children:[null===r||void 0===r||null===(t=r.cartproducts)||void 0===t?void 0:t.map((function(t,e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e+1}),Object(n.jsx)("td",{children:t.product.title}),Object(n.jsx)("td",{children:t.rate}),Object(n.jsx)("td",{children:t.quantity}),Object(n.jsx)("td",{children:t.subtotal})]},e)})),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{colSpan:"4",className:"text-right",children:"Total: "}),Object(n.jsx)("th",{children:null===r||void 0===r?void 0:r.total})]})]})]})]}),Object(n.jsxs)("div",{className:"col-md-6",children:[Object(n.jsx)("h2",{children:"Order Now"}),Object(n.jsx)(y,{cartid:null===r||void 0===r?void 0:r.id})]})]})})},k=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(l,{}),Object(n.jsxs)(i.c,{children:[Object(n.jsx)(i.a,{exact:!0,path:"/",component:p}),Object(n.jsx)(i.a,{exact:!0,path:"/product-category",component:m}),Object(n.jsx)(i.a,{exact:!0,path:"/product-detail/:slug/:id",component:v}),Object(n.jsx)(i.a,{exact:!0,path:"/MyCart",component:g}),Object(n.jsx)(i.a,{exact:!0,path:"/Chackout",component:w})]})]})})};s.a.render(Object(n.jsx)(k,{}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.fcb6ad92.chunk.js.map