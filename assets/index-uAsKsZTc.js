import{R as C,j as m,r as a}from"./index-BFp1HM2T.js";import{c as T,u as $}from"./index-B4iUdX95.js";import{c as G,P as j,u as J}from"./index-CKoXVdAD.js";import{u as h,S as O}from"./index-Ca9wgExw.js";import{u as Q}from"./index-BZ1rFPMN.js";function W(e){const o=e+"CollectionProvider",[i,n]=G(o),[w,v]=i(o,{collectionRef:{current:null},itemMap:new Map}),b=f=>{const{scope:t,children:c}=f,d=C.useRef(null),r=C.useRef(new Map).current;return m.jsx(w,{scope:t,itemMap:r,collectionRef:d,children:c})};b.displayName=o;const g=e+"CollectionSlot",p=C.forwardRef((f,t)=>{const{scope:c,children:d}=f,r=v(g,c),s=h(t,r.collectionRef);return m.jsx(O,{ref:s,children:d})});p.displayName=g;const u=e+"CollectionItemSlot",E="data-radix-collection-item",F=C.forwardRef((f,t)=>{const{scope:c,children:d,...r}=f,s=C.useRef(null),S=h(t,s),x=v(u,c);return C.useEffect(()=>(x.itemMap.set(s,{ref:s,...r}),()=>void x.itemMap.delete(s))),m.jsx(O,{[E]:"",ref:S,children:d})});F.displayName=u;function I(f){const t=v(e+"CollectionConsumer",f);return C.useCallback(()=>{const d=t.collectionRef.current;if(!d)return[];const r=Array.from(d.querySelectorAll(`[${E}]`));return Array.from(t.itemMap.values()).sort((x,A)=>r.indexOf(x.ref.current)-r.indexOf(A.ref.current))},[t.collectionRef,t.itemMap])}return[{Provider:b,Slot:p,ItemSlot:F},I,n]}var X=a.createContext(void 0);function Z(e){const o=a.useContext(X);return e||o||"ltr"}var M="rovingFocusGroup.onEntryFocus",ee={bubbles:!1,cancelable:!0},_="RovingFocusGroup",[N,L,te]=W(_),[oe,Ie]=G(_,[te]),[re,ne]=oe(_),K=a.forwardRef((e,o)=>m.jsx(N.Provider,{scope:e.__scopeRovingFocusGroup,children:m.jsx(N.Slot,{scope:e.__scopeRovingFocusGroup,children:m.jsx(se,{...e,ref:o})})}));K.displayName=_;var se=a.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:i,orientation:n,loop:w=!1,dir:v,currentTabStopId:b,defaultCurrentTabStopId:g,onCurrentTabStopIdChange:p,onEntryFocus:u,preventScrollOnEntryFocus:E=!1,...F}=e,I=a.useRef(null),f=h(o,I),t=Z(v),[c=null,d]=$({prop:b,defaultProp:g,onChange:p}),[r,s]=a.useState(!1),S=J(u),x=L(i),A=a.useRef(!1),[V,P]=a.useState(0);return a.useEffect(()=>{const l=I.current;if(l)return l.addEventListener(M,S),()=>l.removeEventListener(M,S)},[S]),m.jsx(re,{scope:i,orientation:n,dir:t,loop:w,currentTabStopId:c,onItemFocus:a.useCallback(l=>d(l),[d]),onItemShiftTab:a.useCallback(()=>s(!0),[]),onFocusableItemAdd:a.useCallback(()=>P(l=>l+1),[]),onFocusableItemRemove:a.useCallback(()=>P(l=>l-1),[]),children:m.jsx(j.div,{tabIndex:r||V===0?-1:0,"data-orientation":n,...F,ref:f,style:{outline:"none",...e.style},onMouseDown:T(e.onMouseDown,()=>{A.current=!0}),onFocus:T(e.onFocus,l=>{const Y=!A.current;if(l.target===l.currentTarget&&Y&&!r){const D=new CustomEvent(M,ee);if(l.currentTarget.dispatchEvent(D),!D.defaultPrevented){const y=x().filter(R=>R.focusable),H=y.find(R=>R.active),q=y.find(R=>R.id===c),z=[H,q,...y].filter(Boolean).map(R=>R.ref.current);B(z,E)}}A.current=!1}),onBlur:T(e.onBlur,()=>s(!1))})})}),k="RovingFocusGroupItem",U=a.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:i,focusable:n=!0,active:w=!1,tabStopId:v,...b}=e,g=Q(),p=v||g,u=ne(k,i),E=u.currentTabStopId===p,F=L(i),{onFocusableItemAdd:I,onFocusableItemRemove:f}=u;return a.useEffect(()=>{if(n)return I(),()=>f()},[n,I,f]),m.jsx(N.ItemSlot,{scope:i,id:p,focusable:n,active:w,children:m.jsx(j.span,{tabIndex:E?0:-1,"data-orientation":u.orientation,...b,ref:o,onMouseDown:T(e.onMouseDown,t=>{n?u.onItemFocus(p):t.preventDefault()}),onFocus:T(e.onFocus,()=>u.onItemFocus(p)),onKeyDown:T(e.onKeyDown,t=>{if(t.key==="Tab"&&t.shiftKey){u.onItemShiftTab();return}if(t.target!==t.currentTarget)return;const c=ie(t,u.orientation,u.dir);if(c!==void 0){if(t.metaKey||t.ctrlKey||t.altKey||t.shiftKey)return;t.preventDefault();let r=F().filter(s=>s.focusable).map(s=>s.ref.current);if(c==="last")r.reverse();else if(c==="prev"||c==="next"){c==="prev"&&r.reverse();const s=r.indexOf(t.currentTarget);r=u.loop?ue(r,s+1):r.slice(s+1)}setTimeout(()=>B(r))}})})})});U.displayName=k;var ce={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function ae(e,o){return o!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function ie(e,o,i){const n=ae(e.key,i);if(!(o==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(o==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return ce[n]}function B(e,o=!1){const i=document.activeElement;for(const n of e)if(n===i||(n.focus({preventScroll:o}),document.activeElement!==i))return}function ue(e,o){return e.map((i,n)=>e[(o+n)%e.length])}var Re=K,Ce=U;export{Ce as I,Re as R,Ie as a,W as c,Z as u};
