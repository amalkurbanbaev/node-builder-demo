import{j as y}from"./index-BFp1HM2T.js";import{S as k}from"./index-Ca9wgExw.js";import{a as V,c as w}from"./utils-jAU0Cazi.js";const m=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,g=V,j=(n,i)=>e=>{var o;if((i==null?void 0:i.variants)==null)return g(n,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:l,defaultVariants:r}=i,b=Object.keys(l).map(t=>{const s=e==null?void 0:e[t],d=r==null?void 0:r[t];if(s===null)return null;const a=m(s)||m(d);return l[t][a]}),c=e&&Object.entries(e).reduce((t,s)=>{let[d,a]=s;return a===void 0||(t[d]=a),t},{}),f=i==null||(o=i.compoundVariants)===null||o===void 0?void 0:o.reduce((t,s)=>{let{class:d,className:a,...x}=s;return Object.entries(x).every(h=>{let[v,u]=h;return Array.isArray(u)?u.includes({...r,...c}[v]):{...r,...c}[v]===u})?[...t,d,a]:t},[]);return g(n,b,f,e==null?void 0:e.class,e==null?void 0:e.className)},N=j("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function _({className:n,variant:i,size:e,asChild:o=!1,...l}){const r=o?k:"button";return y.jsx(r,{"data-slot":"button",className:w(N({variant:i,size:e,className:n})),...l})}export{_ as B,N as b,j as c};
