(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})})}),Object(o.jsxs)("form",{className:"d-flex mx-2",children:[Object(o.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)("button",{className:"btn btn-outline-primary",type:"submit",children:"Search"})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}function b(e){var t=Object(c.useState)("Enter text here"),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){s(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"grey",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8"})}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.toUpperCase();s(t),e.showAlert("Converted to UpperCase","success")},children:"Convert to UPPERCASE"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.toLowerCase();s(t),e.showAlert("Converted to LowerCase","success")},children:"Convert to lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){s(""),e.showAlert("Cleared the text","success")},children:"Clear Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.repeat(2);s(t),e.showAlert("Repeated the text","success")},children:"Repeat The Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text copied","success")},children:"Copy Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.split(/[ ] +/);s(t.join(" ")),e.showAlert("Removed extra spaces","success")},children:"Remove Extra Spaces"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," characters"]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length," minutes read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter something to preview it."})]})]})}var d=function(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," ",e.alert.msg]})};var h=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),r=Object(l.a)(s,2),h=r[0],m=r[1],j=function(e,t){m({msg:e,type:t}),setTimeout((function(){m(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#042743",j("Enabled DarkMode","success"),document.title="TextUtils - DarkMode"):(n("light"),document.body.style.backgroundColor="white",j("Enabled LightMode","success"),document.title="TextUtils - LightMode")}}),Object(o.jsx)(d,{alert:h}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(b,{showAlert:j,heading:"Enter the text to analyze",mode:a})})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),m()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.aae750a8.chunk.js.map