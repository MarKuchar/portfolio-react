(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{62:function(e,t,a){},63:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a(0),s=a.n(n),c=a(26),l=a.n(c),r=(a(62),a(8)),o=a(12),d=a(10),j=a(9),b=a(28),h=a(6),u=a(16),m=a(29),x=a(56),O=(a(63),a(20)),p=a(18);var f=function(){return Object(i.jsx)("footer",{className:"mt-5",children:Object(i.jsx)(u.a,{fluid:!0,children:Object(i.jsxs)(O.a,{className:"border-top justify-content-between p-3",children:[Object(i.jsx)(p.a,{className:"p-0",md:3,sm:12,children:"Martin Kuchar"}),Object(i.jsx)(p.a,{className:"p-0 d-flex justify-content-end",md:3,children:"\xa9 Copyright Martin Kuchar"})]})})})},g=a(25),v=a(42);var k=function(e){var t=Object(v.b)({opacity:1,from:{opacity:0}});return Object(i.jsxs)(v.a.div,{className:"k-card-info",style:t,children:[Object(i.jsx)("p",{className:"k-card-title",children:e.title}),Object(i.jsx)("p",{className:"k-card-sub-title",children:e.subTitle}),Object(i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"View"})]})};var y=function(e){return Object(i.jsxs)("div",{className:"d-inline-block k-card",onClick:function(t){return e.onClick(e.item)},children:[Object(i.jsx)("img",{className:"k-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&Object(i.jsx)(k,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})]})},C=a.p+"static/media/pexeso.3bd4fd1f.png",N=a.p+"static/media/yPin.89a973e8.png",S=a.p+"static/media/github.1d7c9856.png",w=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(g.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return Object(i.jsx)(y,{item:e,onClick:function(t){return n.handleCardClick(e.id,t)}},e.id)}))},n.state={items:[{id:0,title:"Spike The Day",subTitle:"Advertisment app that using AR technology",imgSrc:N,link:"https://github.com/cayomesquita/spike",selected:!1},{id:1,title:"Pexeso",subTitle:"Memory card game with different kind of animations",imgSrc:C,link:"https://github.com/MarKuchar/Pexeso",selected:!1},{id:2,title:"Github",subTitle:"Personal github page",imgSrc:S,link:"https://github.com/MarKuchar",selected:!1}]},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(i.jsx)(u.a,{fluid:!0,children:Object(i.jsx)(O.a,{className:"justify-content-around",children:this.makeItems(this.state.items)})})}}]),a}(s.a.Component),T=a(52);var M=function(e){return Object(i.jsx)(T.a,{className:"bg-transparent jumbotron-fluid p-0",children:Object(i.jsx)(u.a,{fluid:!0,children:Object(i.jsx)(O.a,{className:"justify-content-center",children:Object(i.jsxs)(p.a,{md:8,sm:12,children:[e.title&&Object(i.jsx)("h1",{className:"display-3 font-weight-bolder",children:e.title}),e.subTitle&&Object(i.jsx)("h3",{className:"display-5 font-weight-bolder",children:e.subTitle}),e.text&&Object(i.jsx)("h3",{className:"lead font-weight-light",children:e.text})]})})})})};var F=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(M,{title:e.title,subTitle:e.subTitle,text:e.text}),Object(i.jsx)(w,{})]})};var I=function(e){return Object(i.jsx)(u.a,{fluid:!0,children:Object(i.jsx)(O.a,{className:"justify-content-center",children:Object(i.jsx)(p.a,{md:8,children:e.children})})})};var A=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(M,{title:e.title}),Object(i.jsxs)(I,{children:[Object(i.jsxs)("p",{children:["I am a dedicated software engineer with creative problem-solving skills.",Object(i.jsx)("br",{}),"Currently, I am seeking opportunities that will allow proceeding in the way to become a qualified software engineer."]}),Object(i.jsx)("p",{children:"My expertise also includes drawing in solid work design software and building projects in HVAC systems. "}),Object(i.jsx)("p",{children:"I love coding and I hope that once I will create something that people will love to use!"})]})]})},K=a(24),L=a(15),P=a(54),E=a(53),D=a.n(E),G=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;i.setState(Object(K.a)({},n,a))},i.handleSubmit=function(e){e.preventDefault(),i.setState({disabled:!0,emailSent:!1}),D.a.post("http://localhost:3030/api/email",i.state).then((function(e){e.data.success?i.setState({disabled:!1,emailSent:!0}):i.setState({disabled:!1,emailSent:!1})})).catch((function(e){i.setState({disabled:!1,emailSent:!1})}))},i.state={name:"",email:"",message:"",disabled:!1,emailSent:null},i}return Object(o.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(M,{title:this.props.title}),Object(i.jsx)(I,{children:Object(i.jsxs)(L.a,{onSubmit:this.handleSubmit,children:[Object(i.jsxs)(L.a.Group,{children:[Object(i.jsx)(L.a.Label,{htmlFor:"full-name",children:"Full Name"}),Object(i.jsx)(L.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(i.jsxs)(L.a.Group,{children:[Object(i.jsx)(L.a.Label,{htmlFor:"email",children:"Email"}),Object(i.jsx)(L.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})]}),Object(i.jsxs)(L.a.Group,{children:[Object(i.jsx)(L.a.Label,{htmlFor:"message",children:"Message"}),Object(i.jsx)(L.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})]}),Object(i.jsx)(P.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled,children:"Send"}),!0===this.state.emailSent&&Object(i.jsx)("p",{className:"d-inline success-msg",children:"Email Sent"}),!1===this.state.emailSent&&Object(i.jsx)("p",{className:"d-inline err-msg",children:"Email Not Sent"})]})})]})}}]),a}(s.a.Component),B=(a(84),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={title:"Martin Kuchar",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Do More",subTitle:"Art of code",text:"Find my projects below"},about:{title:"About me"},contact:{title:"Contact me"}},i}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsx)(b.a,{children:Object(i.jsxs)(u.a,{className:"p-0",fluid:!0,children:[Object(i.jsxs)(m.a,{className:"border-bottom",bg:"transparent",expand:"lg",children:[Object(i.jsx)(m.a.Brand,{children:"Martin Kuchar"}),Object(i.jsx)(m.a.Toggle,{className:"border-0","arja-aria-controls":"navbar-toggle"}),Object(i.jsx)(m.a.Collapse,{id:"navbar-toggle",children:Object(i.jsxs)(x.a,{className:"ml-auto",children:[Object(i.jsx)(b.b,{className:"nav-link",to:"/",children:"Home"}),Object(i.jsx)(b.b,{className:"nav-link",to:"/about",children:"About"}),Object(i.jsx)(b.b,{className:"nav-link",to:"/contact",children:"Contact"})]})})]}),Object(i.jsx)(h.a,{path:"/",exact:!0,render:function(){return Object(i.jsx)(F,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),Object(i.jsx)(h.a,{path:"/about",render:function(){return Object(i.jsx)(A,{title:e.state.about.title})}}),Object(i.jsx)(h.a,{path:"/contact",render:function(){return Object(i.jsx)(G,{title:e.state.contact.title})}}),Object(i.jsx)(f,{})]})})}}]),a}(s.a.Component)),H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,90)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),i(e),n(e),s(e),c(e)}))};l.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(B,{})}),document.getElementById("root")),H()}},[[88,1,2]]]);
//# sourceMappingURL=main.60a0d7cc.chunk.js.map