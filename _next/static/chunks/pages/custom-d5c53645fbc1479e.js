(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[688],{71363:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/custom",function(){return s(13078)}])},32027:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var a=s(85893),n=s(67294),i=s(24461);let r="Something went wrong. Please try again.";function l(){let[e,t]=(0,n.useState)(""),[s,l]=(0,n.useState)(""),[c,o]=(0,n.useState)(""),[d,m]=(0,n.useState)(""),[x,h]=(0,n.useState)(""),[u,g]=(0,n.useState)(""),[y,b]=(0,n.useState)(!1),[p,f]=(0,n.useState)(!1),[v,j]=(0,n.useState)(null),[N,w]=(0,n.useState)(!1),k=async()=>{f(!0),j("");try{let t=await fetch("/api/hosted/orgs",{body:JSON.stringify({name:e,tagline:s,logoURL:c,subdomain:u,adminName:d,adminEmail:x}),headers:{"Content-Type":"application/json"},method:"POST"});if(t.status>=400){let e=await t.json();j(e.userMessage||r),f(!1);return}if(!t.ok){j(r),f(!1);return}w(!0)}catch(e){j(r),console.error(e)}f(!1)};return(0,a.jsx)("div",{children:N?(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("h2",{className:"text-xl font-semibold mt-8 mb-2",children:"\uD83D\uDCE9 One more step!"}),(0,a.jsxs)("div",{children:["Please check your email at ",(0,a.jsx)("b",{children:x})," to verify your new chat instance."]}),(0,a.jsx)("div",{children:"Make sure to check your spam folder if you don't see it in your inbox."})]}):(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-xl font-semibold mt-8 mb-2",children:"Your Info"}),(0,a.jsxs)("div",{className:"my-4",children:[(0,a.jsx)("label",{className:"text-sm font-semibold my-1 block",children:"Admin Email *"}),(0,a.jsx)("div",{className:"text-xs text-gray-500 my-1",children:'Email of the admin user. This will also be shown as the "reply-to" address in the user\'s verification email when they sign up/login.'}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{disabled:p,type:"email",className:"relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",placeholder:"tony@webmind.app",value:x,onChange:e=>h(e.target.value)})})]}),(0,a.jsxs)("div",{className:"my-4",children:[(0,a.jsx)("label",{className:"text-sm font-semibold my-1 block",children:"Admin Name *"}),(0,a.jsx)("div",{className:"text-xs text-gray-500 my-1",children:'Will be shown as the "Sender" in the user\'s verification email when they sign up/login.'}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{disabled:p,type:"text",className:"relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",placeholder:"Tony Dinh",value:d,onChange:e=>m(e.target.value)})})]}),(0,a.jsx)("h2",{className:"text-xl font-semibold mt-8 mb-2",children:"Your Chat Instance"}),(0,a.jsxs)("div",{className:"my-4",children:[(0,a.jsx)("label",{className:"text-sm font-semibold my-1 block",children:"Name * (Your Brand/Team/Community Name)"}),(0,a.jsx)("div",{className:"text-xs text-gray-500 my-1",children:"Will be shown on the main screen and page title"}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{disabled:p,type:"text",className:"relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",placeholder:"webmind.app",value:e,onChange:e=>t(e.target.value)})})]}),(0,a.jsxs)("div",{className:"my-4",children:[(0,a.jsx)("label",{className:"text-sm font-semibold my-1 block",children:"Tagline *"}),(0,a.jsx)("div",{className:"text-xs text-gray-500 my-1",children:"Will be shown on the main screen and page title"}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{disabled:p,type:"text",className:"relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",placeholder:"A better UI for ChatGPT",value:s,onChange:e=>l(e.target.value)})})]}),(0,a.jsxs)("div",{className:"my-4",children:[(0,a.jsx)("label",{className:"text-sm font-semibold my-1 block",children:"Logo URL (Must be HTTPS, recommend: 256x256, )"}),(0,a.jsx)("div",{className:"text-xs text-gray-500 my-1",children:"Will be shown on the main screen, app icon, browser bar icon."}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{disabled:p,type:"text",className:"relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",placeholder:"https://webmind.app/logo.png",value:c,onChange:e=>o(e.target.value)})})]}),(0,a.jsxs)("div",{className:"my-4",children:[(0,a.jsxs)("label",{className:"text-sm font-semibold my-1 block",children:["Subdomain *"," ",(0,a.jsx)("span",{className:"text-orange-500",children:"(You can change this to your domain later)"})]}),(0,a.jsx)("div",{className:"text-xs text-gray-500 my-1",children:"Your users will be able to access your instance at this domain."}),(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"flex items-center justify-center  -space-x-px w-fit",children:[(0,a.jsx)("input",{disabled:p,type:"text",className:"relative block w-full rounded-tl-md rounded-bl-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500 text-right",placeholder:"my-chat-app",value:u,onChange:e=>g(e.target.value)}),(0,a.jsx)("div",{className:"relative block w-full rounded-tr-md rounded-br-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500 p-1 bg-gray-100",children:".typingcloud.com"})]})}),!u||/^[a-z0-9-]+$/.test(u)?null:(0,a.jsx)("div",{className:"text-xs text-red-500 my-1",children:"Subdomain can only contain lowercase letters, numbers, and hyphens."})]}),(0,a.jsxs)("div",{className:"my-8 text-center",children:[v&&(0,a.jsx)("div",{className:"my-4 text-red-500 text-sm text-center",children:v}),(0,a.jsx)("div",{className:"my-4",children:(0,a.jsxs)("label",{className:"flex items-center justify-center gap-2 text-left text-sm",children:[(0,a.jsx)("input",{type:"checkbox",className:"form-checkbox h-5 w-5 text-blue-600",checked:y,onChange:e=>b(e.target.checked)}),(0,a.jsxs)("span",{children:["I have read and agreed with the"," ",(0,a.jsx)("a",{href:"https://webmind.app/terms#custom-deployment",target:"_blank",className:"text-blue-600",children:"Terms of Service"})," ","and"," ",(0,a.jsx)("a",{href:"https://webmind.app/privacy#custom-deployment",target:"_blank",className:"text-blue-600",children:"Privacy Policy"})," ","of the ",(0,a.jsx)("b",{children:"webmind.app Custom Deployment Early Access"}),"."]})]})}),(0,a.jsxs)("button",{onClick:k,type:"submit",className:"inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",disabled:p||!y,children:[p?(0,a.jsx)(i.Z,{}):"→",(0,a.jsx)("span",{children:"Create an Instance"})]})]})]})})}},13078:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return c}});var a=s(85893),n=s(23544),i=s(51448),r=s(60686);s(32027);var l=s(89583),c=!0;t.default=(0,n.withSuperJSONPage)(function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"min-h-screen",children:[(0,a.jsx)(i.Z,{title:"Custom Deployment - webmind.app",overridePosterURL:"https://webmind.app/custom-poster.png"}),(0,a.jsx)("div",{className:"py-10 ",children:(0,a.jsx)("main",{className:"max-w-4xl mx-auto px-4",children:(0,a.jsxs)("div",{className:"text-center my-10",children:[(0,a.jsx)("div",{className:"text-base font-semibold text-gray-500",children:"webmind.app Custom Deployment"}),(0,a.jsx)("h1",{className:"text-4xl font-bold text-center my-2",children:"Create Custom AI Chat Interface"}),(0,a.jsxs)("div",{className:"text-2xl",children:["For your ",(0,a.jsx)("b",{className:"text-green-500",children:"team"}),","," ",(0,a.jsx)("b",{className:"text-purple-500",children:"community"}),","," ",(0,a.jsx)("b",{className:"text-orange-500",children:"organization"}),"."]}),(0,a.jsx)("div",{className:"text-center my-2",children:(0,a.jsx)("span",{className:"text-xs bg-green-500 rounded-full px-3 py-1 text-white text-white font-semibold inline-block",children:"Early Access"})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("img",{src:"/assets/custom-demo.png"})}),(0,a.jsxs)("div",{className:"mb-24 flex items-center justify-center gap-2 flex-wrap",children:[(0,a.jsx)("a",{target:"_blank",className:"inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",href:"https://demo.typingcloud.com/",children:(0,a.jsx)("span",{children:"→ View Demo"})}),(0,a.jsx)("a",{className:"inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 gap-2",href:"/new-deployment",children:(0,a.jsx)("span",{children:"→ Create New Instance"})})]}),(0,a.jsxs)("div",{className:"mt-12",children:[(0,a.jsx)("h2",{className:"my-8 text-3xl font-bold",children:"User Features"}),(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{title:"Fully-featured AI chat interface",description:"Provide the same chat interface as webmind.app, receive new features and updates at the same time."},{title:"No License Key, No API Key Needed",description:"Your user can login and use the chat interface without needing any license key or API key."}].map(e=>(0,a.jsxs)("div",{className:"flex items-center justify-start gap-3",children:[(0,a.jsx)(l.FJM,{className:"inline-block w-8 h-8 text-green-500 shrink-0"}),(0,a.jsxs)("div",{className:"text-left",children:[(0,a.jsx)("div",{className:"text-lg font-semibold",children:e.title}),(0,a.jsx)("div",{className:"text-sm text-gray-500",children:e.description})]})]},e.title))})]}),(0,a.jsxs)("div",{className:"mt-24",children:[(0,a.jsx)("h2",{className:"my-8 text-3xl font-bold",children:"Admin Features"}),(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{title:"Custom Branding & Domain",description:"Hosted on webmind.app's server using your own domain name and branding."},{title:"Custom UI & Chat Features",description:"Set default system instruction, pre-train with your own data, prompt library, etc."},{title:"Manage & Invite Users",description:"You control who can use your chat instance. Invite your team members and manage their usage."},{title:"Train On Your Own Data",description:"Pre-load the AI chat with internal documents, conversations, FAQs, etc. and let the users ask questions."}].map(e=>(0,a.jsxs)("div",{className:"flex items-center justify-start gap-3",children:[(0,a.jsx)(l.FJM,{className:"inline-block w-8 h-8 text-green-500 shrink-0"}),(0,a.jsxs)("div",{className:"text-left",children:[(0,a.jsx)("div",{className:"text-lg font-semibold",children:e.title}),(0,a.jsx)("div",{className:"text-sm text-gray-500",children:e.description})]})]},e.title))})]}),(0,a.jsxs)("div",{className:"mt-24",children:[(0,a.jsx)("h2",{className:"my-8 text-3xl font-bold",children:"Pricing"}),(0,a.jsx)("div",{className:"text-4xl",children:"$49/month"}),(0,a.jsx)("div",{className:"my-2 text-lg",children:"5 users included"}),(0,a.jsx)("div",{className:"my-2 text-lg",children:"Hosted on webmind.app's server"}),(0,a.jsxs)("div",{className:"my-2 text-lg",children:["Add new users with a ",(0,a.jsx)("b",{children:"one-time payment of $19/user"})]})]}),(0,a.jsxs)("div",{className:"mt-24",children:[(0,a.jsx)("h2",{className:"my-8 text-3xl font-bold",children:"Early Access Features"}),(0,a.jsxs)("div",{className:"flex items-center justify-center gap-8 my-10 font-semibold",children:[(0,a.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,a.jsx)(l.FJM,{className:"inline-block w-4 h-4 text-green-500 shrink-0"})," ",(0,a.jsx)("span",{children:"Available"})]}),(0,a.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,a.jsx)(l.wbB,{className:"inline-block w-4 h-4 text-gray-500 shrink-0"})," ",(0,a.jsx)("span",{children:"Coming Soon"})]})]}),(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 px-4",children:[{title:"Custom domain",available:!0},{title:"Brand name, logo, tagline",available:!0},{title:"Bot avatar, app icon, favicon",available:!0},{title:"Add to Home Screen (PWA)",available:!0},{title:"Add/remove users by email",available:!0},{title:"Use your own API Key",available:!0},{title:"Custom footer links",available:!0},{title:"Site description for SEO",available:!0},{title:"Custom social media preview",available:!0},{title:"Custom default system prompt",available:!0},{title:"Custom prompt library",available:!0},{title:"Custom AI characters",available:!1},{title:"Custom Theme & Colors",available:!1},{title:"Self-host on your server",available:!1},{title:"Enable/disable chat features",available:!1},{title:"Chat history logging",available:!1},{title:"Custom JS/CSS/HTML embed",available:!1},{title:"Token usage tracking & analytics",available:!1}].map(e=>(0,a.jsxs)("div",{className:"flex items-center justify-start gap-3",children:[e.available?(0,a.jsx)(l.FJM,{className:"inline-block w-4 h-4 text-green-500 shrink-0"}):(0,a.jsx)(l.wbB,{className:"inline-block w-4 h-4 text-gray-500 shrink-0"}),(0,a.jsx)("div",{className:"text-left",children:(0,a.jsx)("div",{className:"text-base",children:e.title})})]},e.title))})]}),(0,a.jsxs)("div",{className:"my-24",children:[(0,a.jsx)("div",{children:(0,a.jsx)("a",{className:"inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 gap-2",href:"/new-deployment",children:(0,a.jsx)("span",{children:"→ Create New Instance"})})}),(0,a.jsx)("div",{className:"my-2 text-sm text-gray-500",children:"Only takes ~2 minutes to set up a new instance"})]}),(0,a.jsxs)("div",{className:"mt-24 text-left",children:[(0,a.jsx)("h2",{className:"my-8 text-3xl font-bold text-center",children:"FAQs"}),(0,a.jsx)(r.Z,{})]})]})})})]})})})},88357:function(e,t,s){"use strict";s.d(t,{w_:function(){return c}});var a=s(67294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.createContext&&a.createContext(n),r=function(){return(r=Object.assign||function(e){for(var t,s=1,a=arguments.length;s<a;s++)for(var n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},l=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>t.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(s[a[n]]=e[a[n]]);return s};function c(e){return function(t){return a.createElement(o,r({attr:r({},e.attr)},t),function e(t){return t&&t.map(function(t,s){return a.createElement(t.tag,r({key:s},t.attr),e(t.child))})}(e.child))}}function o(e){var t=function(t){var s,n=e.attr,i=e.size,c=e.title,o=l(e,["attr","size","title"]),d=i||t.size||"1em";return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),a.createElement("svg",r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,o,{className:s,style:r(r({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),e.children)};return void 0!==i?a.createElement(i.Consumer,null,function(e){return t(e)}):t(n)}}},function(e){e.O(0,[445,982,544,5,774,888,179],function(){return e(e.s=71363)}),_N_E=e.O()}]);