(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(e,t,a){e.exports=a(418)},186:function(e,t,a){},212:function(e,t){},214:function(e,t){},246:function(e,t){},247:function(e,t){},316:function(e,t){},418:function(e,t,a){"use strict";a.r(t);a(181);var n=a(0),o=a.n(n),c=a(177),r=a.n(c),i=(a(186),a(67)),l=a(68),s=a(71),m=a(69),u=a(30),b=a(72),d=a(70),h=a.n(d),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={email:""},a.submitEmail=a.submitEmail.bind(Object(u.a)(a)),a.onChange=a.onChange.bind(Object(u.a)(a)),a}return Object(b.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e){this.setState({email:e.target.value})}},{key:"submitEmail",value:function(){var e={encoding:"UTF-8",method:"POST",uri:"https://crm.zoho.com/crm/WebToLeadForm",headers:{"Content-Type":"x-www-form-urlencoded"},mode:"no-cors",form:{xnQsjsdp:"6894d049cf0933024c1dbe585181e58e70b9a23da40771969ba1745ae7c8f1fd",zc_gad:"",xmIwtLD:"41fe22b1c8549ef266e82589846ecb9cf957a70ecda827906e23352f7d4e41fc",actionType:"TGVhZHM=",returnURL:"https://mstreet3.github.io/collect-emails",Company:"PreLaunchSignUp","Last Name":"web2LeadForm",Email:this.state.email}};return this.setState({email:""}),h()(e).then(function(e){console.log("Response went through!"),console.log("Response is: ".concat(JSON.stringify(e)))}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.submitEmail},o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("label",{htmlFor:"subscriberEmail",className:"sr-only"},"Email"),o.a.createElement("input",{type:"email",className:"form-control",id:"subscriberEmail",placeholder:"Enter your email for updates on the launch.",onChange:this.onChange}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-dark",type:"button",onClick:this.submitEmail},"Submit"))))}}]),t}(n.Component),f=a(39);function E(){return o.a.createElement("div",null,o.a.createElement("div",{className:"jumbotron jumbotron-fluid"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-4"},"Email Collector"),o.a.createElement("p",{className:"lead"},"This is an app to collect emails and store them in Zoho CRM."))),o.a.createElement("div",{className:"container"},o.a.createElement(p,null)),o.a.createElement("div",{className:"form-group text-center"},o.a.createElement(f.b,{to:"/unsubscribe",className:"btn btn-danger"},"Unsubscribe")))}var g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={email:""},a.submitEmail=a.submitEmail.bind(Object(u.a)(a)),a.onChange=a.onChange.bind(Object(u.a)(a)),a}return Object(b.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e){this.setState({email:e.target.value})}},{key:"submitEmail",value:function(){var e={method:"POST",uri:"https://crm.zoho.com/crm/Unsubscribe",encoding:"UTF-8",headers:{"Content-Type":"application/x-www-form-urlencoded","Upgrade-Insecure-Requests":1},form:{xnQsjsdp:"471f3021ed654f3e4892f442fdd9c42e02dc17ac2d8e5198b73b2b5f87cee4fa",actionType:"dW5zdWJzY3JpYmU=",returnURL:"https://mstreet3.github.io/collect-emails/",email:this.state.email}};return this.setState({email:""}),h()(e).then(function(e){console.log("Response went through!"),console.log("Response is: ".concat(JSON.stringify(e)))}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.submitEmail},o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("label",{htmlFor:"unsubEmail",className:"sr-only"},"Email"),o.a.createElement("input",{type:"email",className:"form-control",id:"unsubEmail",placeholder:"Enter your email to unsubscribe from future updates...",onChange:this.onChange}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-danger",type:"button",onClick:this.submitEmail},"Unsubscribe"))),o.a.createElement("div",{className:"form-group text-center"},o.a.createElement(f.b,{to:"/",className:"btn btn-dark"},"Sign up")))}}]),t}(n.Component);var v=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"jumbotron jumbotron-fluid"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-4"},"Unsubscribe"),o.a.createElement("p",{className:"lead"},"Enter your details below to unsubscribe from future app updates."))),o.a.createElement("div",{className:"container"},o.a.createElement(g,null)))},N=a(34);var y=function(){return o.a.createElement(f.a,{basename:"/"},o.a.createElement(N.c,null,o.a.createElement(N.a,{exact:!0,path:"/",component:E}),o.a.createElement(N.a,{path:"/unsubscribe",component:v})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[180,1,2]]]);
//# sourceMappingURL=main.ac3631ce.chunk.js.map