(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1535:(e,a,s)=>{Promise.resolve().then(s.bind(s,1001))},1001:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>ew});var t=s(5155),r=s(2115),l=s(6100),i=s(6019);let n=e=>new Promise(a=>setTimeout(a,e)),d=(e,a)=>{try{return e?JSON.parse(e):a}catch(e){return console.error("Failed to parse JSON:",e),a}},c=async()=>(await n(500),d(localStorage.getItem("users"),[])),o=async e=>{await n(500);let a=await c(),s={...e,id:Date.now().toString()};return a.push(s),localStorage.setItem("users",JSON.stringify(a)),s},m=async e=>{await n(500);let a=await c(),s=a.findIndex(a=>a.id===e.id);if(-1!==s)return a[s]=e,localStorage.setItem("users",JSON.stringify(a)),e;throw Error("User not found")},x=async e=>{await n(500);let a=(await c()).filter(a=>a.id!==e);localStorage.setItem("users",JSON.stringify(a))},u=async()=>(await n(500),d(localStorage.getItem("roles"),[])),h=async e=>{await n(500);let a=await u(),s={...e,id:Date.now().toString()};return a.push(s),localStorage.setItem("roles",JSON.stringify(a)),s},f=async e=>{await n(500);let a=await u(),s=a.findIndex(a=>a.id===e.id);if(-1!==s)return a[s]=e,localStorage.setItem("roles",JSON.stringify(a)),e;throw Error("Role not found")},p=async e=>{await n(500);let a=(await u()).filter(a=>a.id!==e);localStorage.setItem("roles",JSON.stringify(a))},g=async()=>(await n(500),d(localStorage.getItem("permissions"),{})),j=async e=>(await n(500),localStorage.setItem("permissions",JSON.stringify(e)),e),y=async()=>(await n(500),d(localStorage.getItem("activityLogs"),[])),v=async(e,a)=>{await n(500),console.log("Password changed successfully")},b=async()=>(await n(500),{qrCode:"https://example.com/qr-code"}),w=async e=>{if(await n(500),"123456"!==e)throw Error("Invalid verification code")};var N=s(3473),C=s(853),S=s(3580),k=s(5686),A=s(2317),R=s(1027),P=s(3463),T=s(9795);function L(){for(var e=arguments.length,a=Array(e),s=0;s<e;s++)a[s]=arguments[s];return(0,T.QP)((0,P.$)(a))}let I=(0,R.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),U=r.forwardRef((e,a)=>{let{className:s,variant:r,size:l,asChild:i=!1,...n}=e,d=i?A.DX:"button";return(0,t.jsx)(d,{className:L(I({variant:r,size:l,className:s})),ref:a,...n})});U.displayName="Button";let E=r.forwardRef((e,a)=>{let{className:s,type:r,...l}=e;return(0,t.jsx)("input",{type:r,className:L("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),ref:a,...l})});E.displayName="Input";var F=s(40),D=s(1719),J=s(1902),O=s(8867);let z=F.bL;F.YJ;let _=F.WT,V=r.forwardRef((e,a)=>{let{className:s,children:r,...l}=e;return(0,t.jsxs)(F.l9,{ref:a,className:L("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",s),...l,children:[r,(0,t.jsx)(F.In,{asChild:!0,children:(0,t.jsx)(D.A,{className:"h-4 w-4 opacity-50"})})]})});V.displayName=F.l9.displayName;let q=r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)(F.PP,{ref:a,className:L("flex cursor-default items-center justify-center py-1",s),...r,children:(0,t.jsx)(J.A,{className:"h-4 w-4"})})});q.displayName=F.PP.displayName;let B=r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)(F.wn,{ref:a,className:L("flex cursor-default items-center justify-center py-1",s),...r,children:(0,t.jsx)(D.A,{className:"h-4 w-4"})})});B.displayName=F.wn.displayName;let M=r.forwardRef((e,a)=>{let{className:s,children:r,position:l="popper",...i}=e;return(0,t.jsx)(F.ZL,{children:(0,t.jsxs)(F.UC,{ref:a,className:L("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===l&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",s),position:l,...i,children:[(0,t.jsx)(q,{}),(0,t.jsx)(F.LM,{className:L("p-1","popper"===l&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),(0,t.jsx)(B,{})]})})});M.displayName=F.UC.displayName,r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)(F.JU,{ref:a,className:L("py-1.5 pl-8 pr-2 text-sm font-semibold",s),...r})}).displayName=F.JU.displayName;let H=r.forwardRef((e,a)=>{let{className:s,children:r,...l}=e;return(0,t.jsxs)(F.q7,{ref:a,className:L("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s),...l,children:[(0,t.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,t.jsx)(F.VF,{children:(0,t.jsx)(O.A,{className:"h-4 w-4"})})}),(0,t.jsx)(F.p4,{children:r})]})});H.displayName=F.q7.displayName,r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)(F.wv,{ref:a,className:L("-mx-1 my-1 h-px bg-muted",s),...r})}).displayName=F.wv.displayName;let Q=r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)("div",{ref:a,className:L("rounded-lg border bg-card text-card-foreground shadow-sm",s),...r})});Q.displayName="Card";let W=r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)("div",{ref:a,className:L("flex flex-col space-y-1.5 p-6",s),...r})});W.displayName="CardHeader";let X=r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)("div",{ref:a,className:L("text-2xl font-semibold leading-none tracking-tight",s),...r})});X.displayName="CardTitle",r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)("div",{ref:a,className:L("text-sm text-muted-foreground",s),...r})}).displayName="CardDescription";let Y=r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)("div",{ref:a,className:L("p-6 pt-0",s),...r})});Y.displayName="CardContent",r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)("div",{ref:a,className:L("flex items-center p-6 pt-0",s),...r})}).displayName="CardFooter";var Z=s(2413);let $=r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)(Z.bL,{className:L("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",s),...r,ref:a,children:(0,t.jsx)(Z.zi,{className:L("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});$.displayName=Z.bL.displayName;let G=()=>{let[e,a]=(0,r.useState)([]),[s,l]=(0,r.useState)([]),[n,d]=(0,r.useState)(null),[h,f]=(0,r.useState)({name:"",email:"",role:"",status:"active"}),[p,g]=(0,r.useState)("");(0,r.useEffect)(()=>{j(),y()},[]);let j=async()=>{a(await c())},y=async()=>{l(await u())},v=async e=>{if(e.preventDefault(),!h.name||!h.email||!h.role){alert("Please fill in all fields");return}await o(h),f({name:"",email:"",role:"",status:"active"}),j()},b=async e=>{if(e.preventDefault(),!n||!n.name||!n.email||!n.role){alert("Please fill in all fields");return}await m(n),d(null),j()},w=async e=>{window.confirm("Are you sure you want to delete this user?")&&(await x(e),j())},A=e.filter(e=>e.name.toLowerCase().includes(p.toLowerCase())||e.email.toLowerCase().includes(p.toLowerCase()));return(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-2xl font-bold mb-6 text-gray-800 dark:text-white",children:"User Management"}),(0,t.jsx)(Q,{className:"mb-8",children:(0,t.jsx)(Y,{children:(0,t.jsxs)("form",{onSubmit:v,className:"flex items-end space-x-4",children:[(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)(E,{type:"text",placeholder:"Name",value:h.name,onChange:e=>f({...h,name:e.target.value}),className:"mb-2"}),(0,t.jsx)(E,{type:"email",placeholder:"Email",value:h.email,onChange:e=>f({...h,email:e.target.value})})]}),(0,t.jsxs)(z,{value:h.role,onValueChange:e=>f({...h,role:e}),children:[(0,t.jsx)(V,{className:"w-[180px]",children:(0,t.jsx)(_,{placeholder:"Select role"})}),(0,t.jsx)(M,{children:s.map(e=>(0,t.jsx)(H,{value:e.id,children:e.name},e.id))})]}),(0,t.jsxs)(U,{type:"submit",className:"flex items-center",children:[(0,t.jsx)(N.A,{className:"mr-2 h-4 w-4"})," Add User"]})]})})}),(0,t.jsxs)("div",{className:"mb-4 flex items-center",children:[(0,t.jsx)(C.A,{className:"mr-2 h-4 w-4 text-gray-500"}),(0,t.jsx)(E,{type:"text",placeholder:"Search users...",value:p,onChange:e=>g(e.target.value),className:"flex-1"})]}),(0,t.jsx)("div",{className:"space-y-4",children:A.map(e=>{var a;return(0,t.jsx)(i.P.div,{layout:!0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,t.jsx)(Q,{children:(0,t.jsx)(Y,{className:"p-4",children:n&&n.id===e.id?(0,t.jsxs)("form",{onSubmit:b,className:"flex items-end space-x-4",children:[(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)(E,{type:"text",value:n.name,onChange:e=>d({...n,name:e.target.value}),className:"mb-2"}),(0,t.jsx)(E,{type:"email",value:n.email,onChange:e=>d({...n,email:e.target.value})})]}),(0,t.jsxs)(z,{value:n.role,onValueChange:e=>d({...n,role:e}),children:[(0,t.jsx)(V,{className:"w-[180px]",children:(0,t.jsx)(_,{placeholder:"Select role"})}),(0,t.jsx)(M,{children:s.map(e=>(0,t.jsx)(H,{value:e.id,children:e.name},e.id))})]}),(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)($,{checked:"active"===n.status,onCheckedChange:e=>d({...n,status:e?"active":"inactive"})}),(0,t.jsx)("span",{children:"active"===n.status?"Active":"Inactive"})]}),(0,t.jsx)(U,{type:"submit",className:"bg-green-500 hover:bg-green-600",children:"Save"}),(0,t.jsx)(U,{onClick:()=>d(null),variant:"secondary",children:"Cancel"})]}):(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white",children:e.name}),(0,t.jsx)("p",{className:"text-gray-600 dark:text-gray-300",children:e.email}),(0,t.jsxs)("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["Role: ",(null===(a=s.find(a=>a.id===e.role))||void 0===a?void 0:a.name)||"Unknown"]})]}),(0,t.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)($,{checked:"active"===e.status,onCheckedChange:a=>m({...e,status:a?"active":"inactive"})}),(0,t.jsx)("span",{children:"active"===e.status?"Active":"Inactive"})]}),(0,t.jsxs)("div",{className:"space-x-2",children:[(0,t.jsx)(U,{onClick:()=>d(e),variant:"outline",size:"icon",children:(0,t.jsx)(S.A,{className:"h-4 w-4"})}),(0,t.jsx)(U,{onClick:()=>w(e.id),variant:"destructive",size:"icon",children:(0,t.jsx)(k.A,{className:"h-4 w-4"})})]})]})]})})})},e.id)})})]})},K=()=>{let e=[{id:"1",name:"Admin",description:"Administrator with full permissions"},{id:"2",name:"Editor",description:"Can edit content"},{id:"3",name:"Viewer",description:"Can only view content"}],[a,s]=(0,r.useState)(e),[l,n]=(0,r.useState)(null),[d,c]=(0,r.useState)({name:"",description:""}),[o,m]=(0,r.useState)("");(0,r.useEffect)(()=>{x()},[]);let x=async()=>{let a=await u();s(a.length>0?a:e)},g=async e=>{if(e.preventDefault(),!d.name){alert("Please enter a role name");return}await h(d),c({name:"",description:""}),x()},j=async e=>{if(e.preventDefault(),!(null==l?void 0:l.name)){alert("Please enter a role name");return}await f(l),n(null),x()},y=async e=>{window.confirm("Are you sure you want to delete this role?")&&(await p(e),x())},v=a.filter(e=>e.name.toLowerCase().includes(o.toLowerCase())||e.description.toLowerCase().includes(o.toLowerCase()));return(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-2xl font-bold mb-6 text-gray-800 dark:text-white",children:"Role Management"}),(0,t.jsx)(Q,{className:"mb-8",children:(0,t.jsx)(Y,{children:(0,t.jsxs)("form",{onSubmit:g,className:"flex items-end space-x-4",children:[(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)(E,{type:"text",placeholder:"Role Name",value:d.name,onChange:e=>c({...d,name:e.target.value}),className:"mb-2"}),(0,t.jsx)(E,{type:"text",placeholder:"Description",value:d.description,onChange:e=>c({...d,description:e.target.value})})]}),(0,t.jsxs)(U,{type:"submit",className:"flex items-center",children:[(0,t.jsx)(N.A,{className:"mr-2 h-4 w-4"})," Add Role"]})]})})}),(0,t.jsxs)("div",{className:"mb-4 flex items-center",children:[(0,t.jsx)(C.A,{className:"mr-2 h-4 w-4 text-gray-500"}),(0,t.jsx)(E,{type:"text",placeholder:"Search roles...",value:o,onChange:e=>m(e.target.value),className:"flex-1"})]}),(0,t.jsx)("div",{className:"space-y-4",children:v.map(e=>(0,t.jsx)(i.P.div,{layout:!0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,t.jsx)(Q,{children:(0,t.jsx)(Y,{className:"p-4",children:l&&l.id===e.id?(0,t.jsxs)("form",{onSubmit:j,className:"flex items-end space-x-4",children:[(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)(E,{type:"text",value:l.name,onChange:e=>n({...l,name:e.target.value}),className:"mb-2"}),(0,t.jsx)(E,{type:"text",value:l.description,onChange:e=>n({...l,description:e.target.value})})]}),(0,t.jsx)(U,{type:"submit",className:"bg-green-500 hover:bg-green-600",children:"Save"}),(0,t.jsx)(U,{onClick:()=>n(null),variant:"secondary",children:"Cancel"})]}):(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white",children:e.name}),(0,t.jsx)("p",{className:"text-gray-600 dark:text-gray-300",children:e.description})]}),(0,t.jsxs)("div",{className:"space-x-2",children:[(0,t.jsx)(U,{onClick:()=>n(e),variant:"outline",size:"icon",children:(0,t.jsx)(S.A,{className:"h-4 w-4"})}),(0,t.jsx)(U,{onClick:()=>y(e.id),variant:"destructive",size:"icon",children:(0,t.jsx)(k.A,{className:"h-4 w-4"})})]})]})})})},e.id))})]})};var ee=s(3628);let ea=r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)(ee.bL,{ref:a,className:L("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",s),...r,children:(0,t.jsx)(ee.C1,{className:L("flex items-center justify-center text-current"),children:(0,t.jsx)(O.A,{className:"h-4 w-4"})})})});ea.displayName=ee.bL.displayName;let es=r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)("div",{className:"relative w-full overflow-auto",children:(0,t.jsx)("table",{ref:a,className:L("w-full caption-bottom text-sm",s),...r})})});es.displayName="Table";let et=r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)("thead",{ref:a,className:L("[&_tr]:border-b",s),...r})});et.displayName="TableHeader";let er=r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)("tbody",{ref:a,className:L("[&_tr:last-child]:border-0",s),...r})});er.displayName="TableBody",r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)("tfoot",{ref:a,className:L("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",s),...r})}).displayName="TableFooter";let el=r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)("tr",{ref:a,className:L("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",s),...r})});el.displayName="TableRow";let ei=r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)("th",{ref:a,className:L("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",s),...r})});ei.displayName="TableHead";let en=r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)("td",{ref:a,className:L("p-4 align-middle [&:has([role=checkbox])]:pr-0",s),...r})});en.displayName="TableCell",r.forwardRef((e,a)=>{let{className:s,...r}=e;return(0,t.jsx)("caption",{ref:a,className:L("mt-4 text-sm text-muted-foreground",s),...r})}).displayName="TableCaption";let ed=()=>{let[e,a]=(0,r.useState)([]),[s,l]=(0,r.useState)({}),[n,d]=(0,r.useState)(!0),[c,o]=(0,r.useState)(null),[m,x]=(0,r.useState)(null),h=["create","read","update","delete"];(0,r.useEffect)(()=>{f()},[]);let f=async()=>{try{d(!0);let[e,s]=await Promise.all([u(),g()]);a(e),l(s),o(null)}catch(e){console.error("Error loading roles or permissions:",e),o("Failed to load roles and permissions. Please try again.")}finally{d(!1)}},p=(e,a,s)=>{l(t=>({...t,[e]:{...t[e],[a]:s}}))},y=async()=>{try{x(null),await j(s),x("Permissions saved successfully"),f()}catch(e){console.error("Error saving permissions:",e),o("Failed to save permissions. Please try again.")}};return(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-2xl font-bold mb-6 text-gray-800 dark:text-white",children:"Permission Management"}),n&&(0,t.jsx)(i.P.div,{className:"flex justify-center items-center",children:(0,t.jsx)("div",{className:"spinner",children:"Loading..."})}),c&&(0,t.jsx)("div",{className:"text-red-500",children:c}),m&&(0,t.jsx)("div",{className:"text-green-500",children:m}),(0,t.jsx)(Q,{children:(0,t.jsxs)(Y,{children:[!n&&!c&&(0,t.jsxs)(es,{children:[(0,t.jsx)(et,{children:(0,t.jsxs)(el,{children:[(0,t.jsx)(ei,{className:"w-[200px]",children:"Role"}),h.map(e=>(0,t.jsx)(ei,{className:"text-center",children:e.charAt(0).toUpperCase()+e.slice(1)},e))]})}),(0,t.jsx)(er,{children:e.map(e=>(0,t.jsxs)(el,{children:[(0,t.jsx)(en,{className:"font-medium",children:e.name}),h.map(a=>{var r;return(0,t.jsx)(en,{className:"text-center",children:(0,t.jsx)(ea,{checked:!!(null===(r=s[e.id])||void 0===r?void 0:r[a]),onCheckedChange:s=>p(e.id,a,s)})},a)})]},e.id))})]}),(0,t.jsx)("div",{className:"mt-6 flex justify-end",children:(0,t.jsx)(U,{onClick:y,children:"Save Permissions"})})]})})]})};var ec=s(2823),eo=s(2640),em=s(6744);let ex=()=>{let[e,a]=(0,r.useState)({totalUsers:0,activeUsers:0,totalRoles:0,totalPermissions:0}),[s,l]=(0,r.useState)(!0);return((0,r.useEffect)(()=>{(async()=>{l(!0);try{let[e,s,t]=await Promise.all([c(),u(),g()]);a({totalUsers:e.length,activeUsers:e.filter(e=>"active"===e.status).length,totalRoles:s.length,totalPermissions:Object.keys(t).length})}catch(e){alert("Failed to load data.")}finally{l(!1)}})()},[]),s)?(0,t.jsx)("div",{children:"Loading..."}):(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-2xl font-bold mb-6 text-gray-800 dark:text-white",children:"Dashboard"}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[(0,t.jsxs)(Q,{children:[(0,t.jsxs)(W,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,t.jsx)(X,{className:"text-sm font-medium",children:"Total Users"}),(0,t.jsx)(ec.A,{className:"h-4 w-4 text-muted-foreground"})]}),(0,t.jsx)(Y,{children:(0,t.jsx)("div",{className:"text-2xl font-bold",children:e.totalUsers})})]}),(0,t.jsxs)(Q,{children:[(0,t.jsxs)(W,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,t.jsx)(X,{className:"text-sm font-medium",children:"Active Users"}),(0,t.jsx)(ec.A,{className:"h-4 w-4 text-muted-foreground"})]}),(0,t.jsx)(Y,{children:(0,t.jsx)("div",{className:"text-2xl font-bold",children:e.activeUsers})})]}),(0,t.jsxs)(Q,{children:[(0,t.jsxs)(W,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,t.jsx)(X,{className:"text-sm font-medium",children:"Total Roles"}),(0,t.jsx)(eo.A,{className:"h-4 w-4 text-muted-foreground"})]}),(0,t.jsx)(Y,{children:(0,t.jsx)("div",{className:"text-2xl font-bold",children:e.totalRoles})})]}),(0,t.jsxs)(Q,{children:[(0,t.jsxs)(W,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,t.jsx)(X,{className:"text-sm font-medium",children:"Total Permissions"}),(0,t.jsx)(em.A,{className:"h-4 w-4 text-muted-foreground"})]}),(0,t.jsx)(Y,{children:(0,t.jsx)("div",{className:"text-2xl font-bold",children:e.totalPermissions})})]})]})]})};var eu=s(8477),eh=s(6745),ef=s(8686),ep=s(6954);let eg=e=>{let{activeTab:a,setActiveTab:s}=e,r=[{id:"dashboard",label:"Dashboard",icon:eu.A},{id:"users",label:"Users",icon:ec.A},{id:"roles",label:"Roles",icon:eo.A},{id:"permissions",label:"Permissions",icon:em.A},{id:"logs",label:"Activity Logs",icon:eh.A},{id:"password",label:"Change Password",icon:ef.A},{id:"2fa",label:"Two-Factor Auth",icon:ep.A}];return(0,t.jsx)("nav",{className:"w-64 bg-white dark:bg-gray-800 shadow-lg",children:(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-6",children:"RBAC Admin"}),(0,t.jsx)("ul",{className:"space-y-2",children:r.map(e=>(0,t.jsx)("li",{children:(0,t.jsxs)("button",{onClick:()=>s(e.id),className:"w-full text-left px-4 py-2 rounded-lg transition-colors duration-150 ease-in-out flex items-center ".concat(a===e.id?"bg-blue-500 text-white":"text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"),children:[a===e.id&&(0,t.jsx)(i.P.div,{layoutId:"activeTab",className:"absolute left-0 w-1 h-8 bg-blue-600",initial:!1,transition:{type:"spring",stiffness:300,damping:30}}),(0,t.jsx)(e.icon,{className:"mr-3 h-5 w-5"}),e.label]})},e.id))})]})})},ej=()=>{let[e,a]=(0,r.useState)([]),[s,l]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{(async()=>{try{let e=await y();a(e)}catch(e){console.error("Error fetching activity logs:",e)}finally{l(!1)}})()},[]),(0,t.jsxs)(Q,{children:[(0,t.jsx)(W,{children:(0,t.jsx)(X,{children:"User Activity Logs"})}),(0,t.jsx)(Y,{children:s?(0,t.jsx)("p",{children:"Loading logs..."}):0===e.length?(0,t.jsx)("p",{children:"No activity logs available."}):(0,t.jsxs)(es,{children:[(0,t.jsx)(et,{children:(0,t.jsxs)(el,{children:[(0,t.jsx)(ei,{children:"User ID"}),(0,t.jsx)(ei,{children:"Action"}),(0,t.jsx)(ei,{children:"Timestamp"})]})}),(0,t.jsx)(er,{children:e.map(e=>(0,t.jsxs)(el,{children:[(0,t.jsx)(en,{children:e.userId}),(0,t.jsx)(en,{children:e.action}),(0,t.jsx)(en,{children:new Date(e.timestamp).toLocaleString()})]},e.id))})]})})]})},ey=()=>{let[e,a]=(0,r.useState)(""),[s,l]=(0,r.useState)(""),[i,n]=(0,r.useState)(""),[d,c]=(0,r.useState)(!1),o=async t=>{if(t.preventDefault(),s!==i){alert("New passwords do not match");return}if(s.length<6){alert("Password should be at least 6 characters long");return}try{c(!0),await v(e,s),alert("Password changed successfully"),a(""),l(""),n("")}catch(e){alert("Failed to change password")}finally{c(!1)}};return(0,t.jsxs)(Q,{children:[(0,t.jsx)(W,{children:(0,t.jsx)(X,{children:"Change Password"})}),(0,t.jsx)(Y,{children:(0,t.jsxs)("form",{onSubmit:o,className:"space-y-4",children:[(0,t.jsx)(E,{type:"password",placeholder:"Current Password",value:e,onChange:e=>a(e.target.value),required:!0}),(0,t.jsx)(E,{type:"password",placeholder:"New Password",value:s,onChange:e=>l(e.target.value),required:!0}),(0,t.jsx)(E,{type:"password",placeholder:"Confirm New Password",value:i,onChange:e=>n(e.target.value),required:!0}),(0,t.jsx)(U,{type:"submit",disabled:d,children:d?"Changing...":"Change Password"})]})})]})};var ev=s(5565);let eb=()=>{let[e,a]=(0,r.useState)(""),[s,l]=(0,r.useState)(""),[i,n]=(0,r.useState)(!1),[d,c]=(0,r.useState)(!1),o=async()=>{c(!0);try{let{qrCode:e}=await b();a(e)}catch(e){alert("Failed to set up Two-Factor Authentication. Please try again.")}finally{c(!1)}},m=async()=>{c(!0);try{await w(s),n(!0),alert("Two-Factor Authentication setup complete!")}catch(e){alert("Verification failed. Please check the code and try again.")}finally{c(!1)}};return(0,t.jsxs)(Q,{children:[(0,t.jsx)(W,{children:(0,t.jsx)(X,{children:"Two-Factor Authentication"})}),(0,t.jsxs)(Y,{className:"space-y-4",children:[!e&&!i&&(0,t.jsx)(U,{onClick:o,disabled:d,children:d?"Setting up...":"Setup 2FA"}),e&&!i&&(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)(ev.default,{src:e,alt:"QR Code for 2FA",className:"mx-auto",width:200,height:200}),(0,t.jsx)(E,{type:"text",placeholder:"Enter verification code",value:s,onChange:e=>l(e.target.value)}),(0,t.jsx)(U,{onClick:m,disabled:d,children:d?"Verifying...":"Verify"})]}),i&&(0,t.jsx)("p",{className:"text-green-500",children:"Two-Factor Authentication is successfully set up and active."})]})]})};function ew(){let[e,a]=(0,r.useState)("dashboard");return(0,t.jsxs)("div",{className:"flex h-screen bg-gray-100 dark:bg-gray-900",children:[(0,t.jsx)(eg,{activeTab:e,setActiveTab:a})," ",(0,t.jsxs)("main",{className:"flex-1 p-8 overflow-auto",children:[(0,t.jsx)("h1",{className:"text-4xl font-bold mb-8 text-gray-800 dark:text-white",children:"RBAC Admin Dashboard"}),(0,t.jsx)(l.N,{mode:"wait",children:(0,t.jsx)(i.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6",children:(()=>{switch(e){case"dashboard":default:return(0,t.jsx)(ex,{});case"users":return(0,t.jsx)(G,{});case"roles":return(0,t.jsx)(K,{});case"permissions":return(0,t.jsx)(ed,{});case"logs":return(0,t.jsx)(ej,{});case"password":return(0,t.jsx)(ey,{});case"2fa":return(0,t.jsx)(eb,{})}})()},e)})]})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[237,441,517,358],()=>a(1535)),_N_E=e.O()}]);