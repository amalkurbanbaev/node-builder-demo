import{r as i,j as c}from"./index-BFp1HM2T.js";function p(e,r){if(typeof e=="function")return e(r);e!=null&&(e.current=r)}function d(...e){return r=>{let n=!1;const o=e.map(t=>{const l=p(t,r);return!n&&typeof l=="function"&&(n=!0),l});if(n)return()=>{for(let t=0;t<o.length;t++){const l=o[t];typeof l=="function"?l():p(e[t],null)}}}}function R(...e){return i.useCallback(d(...e),e)}var m=i.forwardRef((e,r)=>{const{children:n,...o}=e,t=i.Children.toArray(n),l=t.find(g);if(l){const s=l.props.children,a=t.map(f=>f===l?i.Children.count(s)>1?i.Children.only(null):i.isValidElement(s)?s.props.children:null:f);return c.jsx(u,{...o,ref:r,children:i.isValidElement(s)?i.cloneElement(s,void 0,a):null})}return c.jsx(u,{...o,ref:r,children:n})});m.displayName="Slot";var u=i.forwardRef((e,r)=>{const{children:n,...o}=e;if(i.isValidElement(n)){const t=C(n),l=h(o,n.props);return n.type!==i.Fragment&&(l.ref=r?d(r,t):t),i.cloneElement(n,l)}return i.Children.count(n)>1?i.Children.only(null):null});u.displayName="SlotClone";var y=({children:e})=>c.jsx(c.Fragment,{children:e});function g(e){return i.isValidElement(e)&&e.type===y}function h(e,r){const n={...r};for(const o in r){const t=e[o],l=r[o];/^on[A-Z]/.test(o)?t&&l?n[o]=(...a)=>{l(...a),t(...a)}:t&&(n[o]=t):o==="style"?n[o]={...t,...l}:o==="className"&&(n[o]=[t,l].filter(Boolean).join(" "))}return{...e,...n}}function C(e){var o,t;let r=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=r&&"isReactWarning"in r&&r.isReactWarning;return n?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:t.get,n=r&&"isReactWarning"in r&&r.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}export{m as S,y as a,d as c,R as u};
