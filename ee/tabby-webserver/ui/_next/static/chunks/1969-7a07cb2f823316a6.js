"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1969],{68172:function(e,n,t){t.d(n,{q:function(){return o}});var r=t(36164),s=t(38785);function o(e){let{children:n,fallback:t=null}=e;return(0,s.U)()?(0,r.jsx)(r.Fragment,{children:n}):(0,r.jsx)(r.Fragment,{children:t})}},30601:function(e,n,t){t.d(n,{Hb:function(){return m},wt:function(){return c},xc:function(){return h},yo:function(){return f}});var r=t(36164),s=t(3546),o=t(74630),a=t(36327),i=t(80605),l=t(74248),d=t(81565);let c="3.5rem",u=s.createContext({}),f=e=>{let{children:n}=e,t=(0,i.UA)(),[a,l]=s.useState(!1);return s.useEffect(()=>{let e=window.self!==window.top;e||(0,o.Z)(t)||l(t)},[t]),(0,r.jsx)(u.Provider,{value:{isShowDemoBanner:a,setIsShowDemoBanner:l},children:n})};function m(){let{isShowDemoBanner:e,setIsShowDemoBanner:n}=s.useContext(u);return[e,n]}function h(){let[e,n]=m(),{data:t}=(0,a.Z)("https://api.github.com/repos/TabbyML/tabby",e=>fetch(e).then(e=>e.json()));return(0,r.jsxs)("div",{className:(0,l.cn)("flex items-center justify-between bg-primary px-4 text-primary-foreground transition-all md:px-5",{"opacity-100 pointer-events-auto":e,"opacity-0 pointer-events-none":!e}),style:e?{height:c}:{height:0},children:[(0,r.jsxs)("a",{href:"https://links.tabbyml.com/schedule-a-demo",target:"_blank",className:"flex items-center gap-x-2 text-xs font-semibold underline md:text-sm",children:[(0,r.jsx)("span",{children:"\uD83D\uDCC6"}),(0,r.jsx)("span",{children:"Book a 30-minute product demo."})]}),(0,r.jsxs)("div",{className:"flex items-center gap-x-4 md:gap-x-8",children:[(0,r.jsxs)("a",{href:"https://github.com/TabbyML/tabby",target:"_blank",className:"flex items-center transition-all hover:opacity-70",children:[(0,r.jsx)(d.IconGithub,{}),(0,r.jsxs)("div",{className:"ml-2 hidden md:block",children:[(0,r.jsx)("p",{className:"text-xs font-semibold",children:"TabbyML/tabby"}),(0,r.jsxs)("div",{className:(0,l.cn)("flex items-center text-xs transition-all",{"h-4 opacity-70":t,"h-0 opacity-0":!t}),children:[(0,r.jsx)(d.IconStar,{className:"mr-1 h-2.5 w-2.5"}),(0,r.jsx)("span",{children:null==t?void 0:t.stargazers_count}),(0,r.jsx)(d.IconGitFork,{className:"ml-2 mr-1 h-2.5 w-2.5"}),(0,r.jsx)("span",{children:null==t?void 0:t.forks_count})]})]})]}),(0,r.jsx)(d.IconClose,{className:"cursor-pointer transition-all hover:opacity-70",onClick:()=>n(!1)})]})]})}},63743:function(e,n,t){t.d(n,{T:function(){return l}});var r=t(36164),s=t(3546),o=t(28242),a=t(31458),i=t(81565);function l(e){let{className:n}=e,{setTheme:t,theme:l}=(0,o.F)(),[d,c]=s.useTransition();return(0,r.jsxs)(a.z,{variant:"ghost",size:"icon",onClick:()=>{c(()=>{t("light"===l?"dark":"light")})},className:n,children:["dark"===l?(0,r.jsx)(i.IconMoon,{className:"transition-all"}):(0,r.jsx)(i.IconSun,{className:"transition-all"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}},31458:function(e,n,t){t.d(n,{d:function(){return l},z:function(){return d}});var r=t(36164),s=t(3546),o=t(74047),a=t(14375),i=t(74248);let l=(0,a.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,n)=>{let{className:t,variant:s,size:a,asChild:d=!1,...c}=e,u=d?o.g7:"button";return(0,r.jsx)(u,{className:(0,i.cn)(l({variant:s,size:a,className:t})),ref:n,...c})});d.displayName="Button"},62202:function(e,n,t){t.d(n,{$F:function(){return l},AW:function(){return c},Ju:function(){return f},VD:function(){return m},Xi:function(){return u},h_:function(){return i}});var r=t(36164),s=t(3546),o=t(19148),a=t(74248);let i=o.fC,l=o.xz;o.ZA,o.Uv,o.Tr,o.Ee;let d=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(o.tu,{ref:n,className:(0,a.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",t),...s})});d.displayName=o.tu.displayName;let c=s.forwardRef((e,n)=>{let{className:t,sideOffset:s=4,...i}=e;return(0,r.jsx)(o.Uv,{children:(0,r.jsx)(o.VY,{ref:n,sideOffset:s,className:(0,a.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...i})})});c.displayName=o.VY.displayName;let u=s.forwardRef((e,n)=>{let{className:t,inset:s,...i}=e;return(0,r.jsx)(o.ck,{ref:n,className:(0,a.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s&&"pl-8",t),...i})});u.displayName=o.ck.displayName;let f=s.forwardRef((e,n)=>{let{className:t,inset:s,...i}=e;return(0,r.jsx)(o.__,{ref:n,className:(0,a.cn)("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",t),...i})});f.displayName=o.__.displayName;let m=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(o.Z0,{ref:n,className:(0,a.cn)("-mx-1 my-1 h-px bg-muted",t),...s})});m.displayName=o.Z0.displayName},3448:function(e,n,t){t.d(n,{O:function(){return o}});var r=t(36164),s=t(74248);function o(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,s.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",n),...t})}},52569:function(e,n,t){t.d(n,{Y:function(){return g},n:function(){return j}});var r=t(36164),s=t(3546),o=t(87782),a=t(21454),i=t(36327),l=t(98454),d=t(3765),c=t(74248),u=t(66612);let f=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(u.fC,{ref:n,className:(0,c.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...s})});f.displayName=u.fC.displayName;let m=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(u.Ee,{ref:n,className:(0,c.cn)("aspect-square h-full w-full",t),...s})});m.displayName=u.Ee.displayName;let h=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)(u.NY,{ref:n,className:(0,c.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...s})});h.displayName=u.NY.displayName;var p=t(3448),x=t(30410).lW;let v="not_found",b=!0;function g(e){var n,t,a,u;let{className:g,fallback:j}=e,[{data:y}]=(0,l.P)(),N=null==y?void 0:y.me.id,w=N&&"/avatar/".concat(y.me.id)||null,{data:k,isLoading:C,error:T}=(0,i.Z)(w,e=>{if(b)return(0,d.Z)(e,{responseFormatter:async e=>{let n=await e.blob(),t=x.from(await n.arrayBuffer());return"data:image/png;base64,".concat(t.toString("base64"))},errorHandler:e=>{if(404===e.status)throw Error(v)}})}),_=s.useMemo(()=>{var e;if(null==y?void 0:null===(e=y.me)||void 0===e?void 0:e.email)return(0,o.B)(y.me.email)},[null==y?void 0:null===(n=y.me)||void 0===n?void 0:n.email]);return C?(0,r.jsx)(p.O,{className:(0,c.cn)("h-16 w-16 rounded-full",g)}):((null==T?void 0:T.message)===v&&(b=!1),k||_||!j)?!k&&_?(0,r.jsx)(o.Z,{className:(0,c.cn)("h-16 w-16",g),..._}):(0,r.jsxs)(f,{className:(0,c.cn)("h-16 w-16",g),children:[(0,r.jsx)(m,{src:k,alt:null==y?void 0:null===(t=y.me)||void 0===t?void 0:t.email,className:"object-cover"}),(0,r.jsx)(h,{children:null==y?void 0:null===(u=y.me)||void 0===u?void 0:null===(a=u.email)||void 0===a?void 0:a.substring(0,2)})]}):j}let j=e=>{b=!0,(0,a.JG)("/avatar/".concat(e))}},7449:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(36164),s=t(3546),o=t(11978),a=t(98454),i=t(80605),l=t(91302),d=t(62202),c=t(81565);function u(e){let{children:n,showHome:t=!0,showSetting:u=!1}=e,f=(0,o.useRouter)(),m=(0,l.QJ)(),[{data:h}]=(0,a.P)(),p=null==h?void 0:h.me;(0,i.xG)();let[x,v]=s.useState(!1),b=async e=>{e.preventDefault(),v(!0),await m(),v(!1)};if(p)return(0,r.jsxs)(d.h_,{children:[(0,r.jsx)(d.$F,{children:n}),(0,r.jsxs)(d.AW,{collisionPadding:{right:16},children:[p.name&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Ju,{className:"pb-0.5",children:p.name}),(0,r.jsx)(d.Ju,{className:"pb-1 pt-0 text-sm font-normal text-muted-foreground",children:p.email})]}),!p.name&&(0,r.jsx)(d.Ju,{children:p.email}),(0,r.jsx)(d.VD,{}),t&&(0,r.jsxs)(d.Xi,{onClick:()=>f.push("/"),className:"cursor-pointer",children:[(0,r.jsx)(c.IconHome,{}),(0,r.jsx)("span",{className:"ml-2",children:"Home"})]}),u&&(0,r.jsxs)(d.Xi,{onClick:()=>f.push("/profile"),className:"cursor-pointer",children:[(0,r.jsx)(c.IconGear,{}),(0,r.jsx)("span",{className:"ml-2",children:"Settings"})]}),(0,r.jsxs)(d.Xi,{onClick:()=>window.open("/files"),className:"cursor-pointer",children:[(0,r.jsx)(c.IconCode,{}),(0,r.jsx)("span",{className:"ml-2",children:"Code Browser"})]}),(0,r.jsxs)(d.Xi,{onClick:()=>window.open("/api"),className:"cursor-pointer",children:[(0,r.jsx)(c.IconBackpack,{}),(0,r.jsx)("span",{className:"ml-2",children:"API Docs"})]}),(0,r.jsx)(d.VD,{}),(0,r.jsxs)(d.Xi,{disabled:x,onClick:b,className:"cursor-pointer",children:[(0,r.jsx)(c.IconLogout,{}),(0,r.jsx)("span",{className:"ml-2",children:"Sign out"}),x&&(0,r.jsx)(c.IconSpinner,{className:"ml-1"})]})]})]})}},38785:function(e,n,t){t.d(n,{U:function(){return o}});var r=t(3546);let s=!0;function o(){let[e,n]=r.useState(()=>!s);return r.useEffect(function(){s=!1,n(!0)},[]),e}},98454:function(e,n,t){t.d(n,{P:function(){return a}});var r=t(40055),s=t(43240);let o=(0,s.BX)("\n  query MeQuery {\n    me {\n      id\n      authToken\n      email\n      isAdmin\n      isPasswordSet\n      name\n    }\n  }\n"),a=()=>(0,r.aM)({query:o})},3765:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(44745),s=t(57778),o=t(79716),a=t(91302),i=t(66794);async function l(e,n){var t;let r=null!==(t=null==n?void 0:n.customFetch)&&void 0!==t?t:window.fetch;if(function(e){var n;if(e.startsWith("/oauth/providers"))return!1;let t=null===(n=(0,i.bW)())||void 0===n?void 0:n.accessToken;if(!t)return!0;try{let{exp:e}=(0,o.o)(t);return(0,i.pw)(e)}catch(e){return!0}}(e))return i.gN.refreshToken(d).then(t=>f(e,n));let s=await r(e,c(n));return 401===s.status?(i.gN.clearAccessToken(),i.gN.refreshToken(d).then(t=>f(e,n))):m(s,n)}async function d(){var e,n;let t=null===(e=(0,i.bW)())||void 0===e?void 0:e.refreshToken;if(!t)return;let r=await u(t);return null==r?void 0:null===(n=r.data)||void 0===n?void 0:n.refreshToken}function c(e){var n;let t=new Headers(null==e?void 0:e.headers);return t.append("authorization","Bearer ".concat(null===(n=(0,i.bW)())||void 0===n?void 0:n.accessToken)),{...e||{},headers:t}}async function u(e){let n=new r.KU({url:"/graphql",requestPolicy:"network-only",exchanges:[r.Ek]}),t=n.createRequestOperation("mutation",(0,s.h)(a.Dp,{refreshToken:e}));return n.executeMutation(t)}function f(e,n){var t;let r=null!==(t=null==n?void 0:n.customFetch)&&void 0!==t?t:window.fetch;return r(e,c(n)).then(e=>m(e,n))}function m(e,n){return(null==e?void 0:e.ok)?(null==n?void 0:n.responseFormatter)?n.responseFormatter(e):(null==n?void 0:n.responseFormat)==="blob"?e.blob():e.json():(null==n?void 0:n.errorHandler)?n.errorHandler(e):void 0}}}]);