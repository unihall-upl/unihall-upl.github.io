function h(){}function I(t,e){for(const n in e)t[n]=e[n];return t}function z(t){return t()}function M(){return Object.create(null)}function b(t){t.forEach(z)}function G(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function st(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function K(t){return Object.keys(t).length===0}function B(t,...e){if(t==null)return h;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ot(t){let e;return B(t,n=>e=n)(),e}function ft(t,e,n){t.$$.on_destroy.push(B(e,n))}function at(t,e,n,i){if(t){const r=O(t,e,n,i);return t[0](r)}}function O(t,e,n,i){return t[1]&&i?I(n.ctx.slice(),t[1](i(e))):n.ctx}function dt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],l=Math.max(e.dirty.length,r.length);for(let s=0;s<l;s+=1)o[s]=e.dirty[s]|r[s];return o}return e.dirty|r}return e.dirty}function _t(t,e,n,i,r,o){if(r){const l=O(e,n,i,o);t.p(l,r)}}function ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let A=!1;function W(){A=!0}function Q(){A=!1}function R(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let c=0;c<e.length;c++){const a=e[c];a.claim_order!==void 0&&u.push(a)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let u=0;u<e.length;u++){const c=e[u].claim_order,a=(r>0&&e[n[r]].claim_order<=c?r+1:R(1,r,g=>e[n[g]].claim_order,c))-1;i[u]=n[a]+1;const f=a+1;n[f]=u,r=Math.max(f,r)}const o=[],l=[];let s=e.length-1;for(let u=n[r]+1;u!=0;u=i[u-1]){for(o.push(e[u-1]);s>=u;s--)l.push(e[s]);s--}for(;s>=0;s--)l.push(e[s]);o.reverse(),l.sort((u,c)=>u.claim_order-c.claim_order);for(let u=0,c=0;u<l.length;u++){for(;c<o.length&&l[u].claim_order>=o[c].claim_order;)c++;const a=c<o.length?o[c]:null;t.insertBefore(l[u],a)}}function V(t,e){if(A){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function mt(t,e,n){A&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode.removeChild(t)}function pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function yt(){return j(" ")}function bt(){return j("")}function gt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,e,n,i,r=!1){tt(t);const o=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(e(s)){const u=n(s);return u===void 0?t.splice(l,1):t[l]=u,r||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(e(s)){const u=n(s);return u===void 0?t.splice(l,1):t[l]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function et(t,e,n,i){return T(t,r=>r.nodeName===e,r=>{const o=[];for(let l=0;l<r.attributes.length;l++){const s=r.attributes[l];n[s.name]||o.push(s.name)}o.forEach(l=>r.removeAttribute(l))},()=>i(e))}function $t(t,e,n){return et(t,e,n,Y)}function nt(t,e){return T(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>j(e),!0)}function wt(t){return nt(t," ")}function Et(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function At(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Nt(t,e,n){t.classList[n?"add":"remove"](e)}function St(t,e=document.body){return Array.from(e.querySelectorAll(t))}let y;function p(t){y=t}function P(){if(!y)throw new Error("Function called outside component initialization");return y}function vt(t){P().$$.on_mount.push(t)}function jt(t){P().$$.after_update.push(t)}const m=[],k=[],w=[],L=[],D=Promise.resolve();let S=!1;function F(){S||(S=!0,D.then(H))}function qt(){return F(),D}function v(t){w.push(t)}const N=new Set;let $=0;function H(){const t=y;do{for(;$<m.length;){const e=m[$];$++,p(e),it(e.$$)}for(p(null),m.length=0,$=0;k.length;)k.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];N.has(n)||(N.add(n),n())}w.length=0}while(m.length);for(;L.length;)L.pop()();S=!1,N.clear(),p(t)}function it(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const E=new Set;let d;function Ct(){d={r:0,c:[],p:d}}function Mt(){d.r||b(d.c),d=d.p}function rt(t,e){t&&t.i&&(E.delete(t),t.i(e))}function kt(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Lt(t){t&&t.c()}function zt(t,e){t&&t.l(e)}function ct(t,e,n,i){const{fragment:r,on_mount:o,on_destroy:l,after_update:s}=t.$$;r&&r.m(e,n),i||v(()=>{const u=o.map(z).filter(G);l?l.push(...u):b(u),t.$$.on_mount=[]}),s.forEach(v)}function ut(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(m.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Bt(t,e,n,i,r,o,l,s=[-1]){const u=y;p(t);const c=t.$$={fragment:null,ctx:null,props:o,update:h,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:e.target||u.$$.root};l&&l(c.root);let a=!1;if(c.ctx=n?n(t,e.props||{},(f,g,...q)=>{const C=q.length?q[0]:g;return c.ctx&&r(c.ctx[f],c.ctx[f]=C)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](C),a&&lt(t,f)),g}):[],c.update(),a=!0,b(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){W();const f=Z(e.target);c.fragment&&c.fragment.l(f),f.forEach(X)}else c.fragment&&c.fragment.c();e.intro&&rt(t.$$.fragment),ct(t,e.target,e.anchor,e.customElement),Q(),H()}p(u)}class Ot{$destroy(){ut(this,1),this.$destroy=h}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const _=[];function Tt(t,e=h){let n;const i=new Set;function r(s){if(J(t,s)&&(t=s,n)){const u=!_.length;for(const c of i)c[1](),_.push(c,t);if(u){for(let c=0;c<_.length;c+=2)_[c][0](_[c+1]);_.length=0}}}function o(s){r(s(t))}function l(s,u=h){const c=[s,u];return i.add(c),i.size===1&&(n=e(r)||h),s(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:r,update:o,subscribe:l}}export{Tt as A,Nt as B,V as C,gt as D,h as E,b as F,ft as G,at as H,_t as I,ht as J,dt as K,st as L,St as M,pt as N,ot as O,Ot as S,yt as a,mt as b,wt as c,Mt as d,bt as e,rt as f,Ct as g,X as h,Bt as i,jt as j,Y as k,$t as l,Z as m,xt as n,vt as o,At as p,j as q,nt as r,J as s,kt as t,Et as u,Lt as v,zt as w,ct as x,ut as y,qt as z};
