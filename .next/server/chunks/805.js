exports.id=805,exports.ids=[805],exports.modules={987:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(5593);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,s.Z)("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]])},9546:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(5593);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,s.Z)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]])},8697:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(5593);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,s.Z)("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]])},6995:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(5593);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,s.Z)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]])},7382:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(5593);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,s.Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},3680:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(5593);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,s.Z)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]])},6206:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(5593);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,s.Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},7114:(e,t,r)=>{e.exports=r(2778)},7686:(e,t,r)=>{"use strict";r.d(t,{M:()=>m});var s=r(80),n=r(9885),l=r(8549),i=r(4349),a=r(9386),o=r(5248);class u extends n.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function d({children:e,isPresent:t}){let r=(0,n.useId)(),l=(0,n.useRef)(null),i=(0,n.useRef)({width:0,height:0,top:0,left:0}),{nonce:a}=(0,n.useContext)(o._);return(0,n.useInsertionEffect)(()=>{let{width:e,height:s,top:n,left:o}=i.current;if(t||!l.current||!e||!s)return;l.current.dataset.motionPopId=r;let u=document.createElement("style");return a&&(u.nonce=a),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${s}px !important;
            top: ${n}px !important;
            left: ${o}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),(0,s.jsx)(u,{isPresent:t,childRef:l,sizeRef:i,children:n.cloneElement(e,{ref:l})})}let h=({children:e,initial:t,isPresent:r,onExitComplete:l,custom:o,presenceAffectsLayout:u,mode:h})=>{let c=(0,i.h)(p),f=(0,n.useId)(),y=(0,n.useCallback)(e=>{for(let t of(c.set(e,!0),c.values()))if(!t)return;l&&l()},[c,l]),x=(0,n.useMemo)(()=>({id:f,initial:t,isPresent:r,custom:o,onExitComplete:y,register:e=>(c.set(e,!1),()=>c.delete(e))}),u?[Math.random(),y]:[r,y]);return(0,n.useMemo)(()=>{c.forEach((e,t)=>c.set(t,!1))},[r]),n.useEffect(()=>{r||c.size||!l||l()},[r]),"popLayout"===h&&(e=(0,s.jsx)(d,{isPresent:r,children:e})),(0,s.jsx)(a.O.Provider,{value:x,children:e})};function p(){return new Map}var c=r(1886);let f=e=>e.key||"";function y(e){let t=[];return n.Children.forEach(e,e=>{(0,n.isValidElement)(e)&&t.push(e)}),t}var x=r(381);let m=({children:e,custom:t,initial:r=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:u="sync",propagate:d=!1})=>{let[p,m]=(0,c.oO)(d),k=(0,n.useMemo)(()=>y(e),[e]),v=d&&!p?[]:k.map(f),M=(0,n.useRef)(!0),g=(0,n.useRef)(k),Z=(0,i.h)(()=>new Map),[w,C]=(0,n.useState)(k),[E,H]=(0,n.useState)(k);(0,x.L)(()=>{M.current=!1,g.current=k;for(let e=0;e<E.length;e++){let t=f(E[e]);v.includes(t)?Z.delete(t):!0!==Z.get(t)&&Z.set(t,!1)}},[E,v.length,v.join("-")]);let R=[];if(k!==w){let e=[...k];for(let t=0;t<E.length;t++){let r=E[t],s=f(r);v.includes(s)||(e.splice(t,0,r),R.push(r))}"wait"===u&&R.length&&(e=R),H(y(e)),C(k);return}let{forceRender:j}=(0,n.useContext)(l.p);return(0,s.jsx)(s.Fragment,{children:E.map(e=>{let n=f(e),l=(!d||!!p)&&(k===E||v.includes(n));return(0,s.jsx)(h,{isPresent:l,initial:(!M.current||!!r)&&void 0,custom:l?void 0:t,presenceAffectsLayout:o,mode:u,onExitComplete:l?void 0:()=>{if(!Z.has(n))return;Z.set(n,!0);let e=!0;Z.forEach(t=>{t||(e=!1)}),e&&(null==j||j(),H(g.current),d&&(null==m||m()),a&&a())},children:e},n)})})}}};