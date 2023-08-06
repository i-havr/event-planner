import{s as i,P as s,j as t,r as p,u as j,L as $,a as u,b as k,c as C,f as S}from"./index-9cf2a618.js";import{B as L,s as M,c as z,d as E,o as P,S as R,C as W}from"./Button-64c261b6.js";import{f as F,c as B,a as T}from"./colorizePriorityMarker-374c67c7.js";const q=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;

  padding: ${e=>e.theme.space[0]};
  font-family: 'Poppins-Medium';
  font-size: ${e=>e.theme.fontSizes.m}px;
  color: ${e=>e.theme.colors.black};
  border: ${e=>e.theme.borders.none};
  border-radius: ${e=>e.theme.radii.button};
  background-color: ${e=>e.theme.colors.white};
  box-shadow: ${e=>e.theme.shadows.normal};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    gap: ${e=>e.theme.space[4]}px;
    width: auto;
    padding: ${e=>e.theme.space[4]}px;
  }
`,H=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;

  padding: ${e=>e.theme.space[0]};
  font-family: 'Poppins-Medium';
  font-size: ${e=>e.theme.fontSizes.m}px;
  color: ${e=>e.theme.colors.white};
  border: ${e=>e.theme.borders.none};
  border-radius: ${e=>e.theme.radii.button};
  background-color: ${e=>e.theme.colors.secondary};
  box-shadow: ${e=>e.theme.shadows.normal};
  transition: background-color 300ms ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${e=>e.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
    width: auto;
    padding: ${e=>e.theme.space[4]}px;
  }
`,h=({children:e,view:o,...n})=>o==="option"?t.jsx(q,{type:"button",...n,children:e}):t.jsx(H,{type:"button",...n,children:e});h.defaultProps={onClick:()=>null,children:null};h.propTypes={view:s.string,onClick:s.func,children:s.node,"aria-label":s.string.isRequired};const D=e=>p.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{d:"M4 4L9 12V18L15 21V12L20 4H4Z",stroke:"#3F3F3F",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),A=e=>p.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{d:"M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5M14 5H20M10 5L4 5M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM16 12H4M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19ZM8 19H20",stroke:"#3F3F3F",strokeWidth:1.5,strokeLinecap:"round"})),I=e=>p.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.createElement("path",{d:"M12 4V20M4 12L20 12",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),V=i.div`
  display: inline-flex;
  justify-content: end;
  gap: ${e=>e.theme.space[5]}px;

  width: 100%;
  height: fit-content;
  padding: 0 0 40px 0;

  @media screen and (min-width: 768px) {
    padding: 0 0 24px 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 0;
  }
`,g=()=>{const{isScreenMobile:e}=j();return t.jsxs(V,{children:[t.jsxs(h,{view:"option","aria-label":"Filter by business",children:[!e&&"Business",t.jsx(D,{})]}),t.jsxs(h,{view:"option","aria-label":"Sort",children:[!e&&"Sort by",t.jsx(A,{})]}),t.jsx($,{to:"/create",children:t.jsxs(h,{"aria-label":"Add new event",children:[t.jsx(I,{}),!e&&"Add new event"]})})]})},O=e=>{const o=e.match(/(\d{1,2}):(\d{2})\s?([ap]m)?/i);if(!o)return e;let n=parseInt(o[1],10);const m=o[2],a=o[3]?o[3].toLowerCase():void 0;return n===12?n=a==="am"?0:12:n+=a==="pm"?12:0,`${n.toString().padStart(2,"0")}:${m}`},Z=i.li`
  position: relative;
  width: 272px;
  height: 480px;
  border-radius: ${e=>e.theme.radii.card};
  overflow: hidden;
  background-color: ${e=>e.theme.colors.background};
  box-shadow: ${e=>e.theme.shadows.normal};
  /* cursor: pointer; */

  &:hover div:nth-child(2) {
    bottom: 0;
  }

  &:focus div:nth-child(2) {
    bottom: 0;
  }

  @media screen and (min-width: 768px) {
    width: 332px;
  }

  @media screen and (min-width: 1440px) {
    width: 302px;
  }
`,U=i.div`
  width: 100%;
  height: 336px;
  overflow: hidden;
`,G=i.img`
  min-height: 100%;
  object-fit: cover;
`,J=i.div`
  position: absolute;
  bottom: -56px;
  width: 100%;
  height: 240px;
  transition: bottom 300ms ease-out;
`,K=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 ${e=>e.theme.space[4]}px;
  font-family: 'Poppins-Regular';
  font-size: ${e=>e.theme.fontSizes.s}px;
  line-height: 1.71;
  color: ${e=>e.theme.colors.secondary};
  background-color: rgba(255, 255, 255, 0.8);
`,N=i.span``,Q=i.span``,X=i.span``,Y=i.div`
  width: 100%;
  height: 100%;
  padding: 0 ${e=>e.theme.space[4]}px ${e=>e.theme.space[4]}px
    ${e=>e.theme.space[4]}px;
  background-color: ${e=>e.theme.colors.background};

  & button {
    width: 114px;
    height: 40px;
    margin-right: 0;
  }
`,_=i.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100%;
  max-height: 100%;
  padding-top: ${e=>e.theme.space[3]}px;
`,ee=i.h3`
  padding: ${e=>e.theme.space[4]}px 0 ${e=>e.theme.space[3]}px 0;
  font-family: 'Poppins-Medium';
  font-size: ${e=>e.theme.fontSizes.m}px;
  line-height: ${e=>e.theme.lineHeights.secondary};
  text-transform: capitalize;
  color: ${e=>e.theme.colors.titleText};
`,te=i.p`
  height: 88px;
  padding: ${e=>e.theme.space[3]}px 0 ${e=>e.theme.space[4]}px 0;
  font-family: 'Poppins-Regular';
  font-size: ${e=>e.theme.fontSizes.s}px;
  line-height: ${e=>e.theme.lineHeights.body};
  color: ${e=>e.theme.colors.secondaryText};
`,ie=i.div`
  position: absolute;
  top: 12px;
  left: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  z-index: 1;
`,f=i.span`
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6px 12px;
  font-family: 'Poppins-Medium';
  font-size: ${e=>e.theme.fontSizes.s}px;
  line-height: ${e=>e.theme.lineHeights.body};
  color: ${e=>e.theme.colors.secondary};
  background-color: ${e=>e.theme.colors.background};
  border-radius: ${e=>e.theme.radii.form};
`,v=({event:e})=>{if(e){const{id:o,title:n,description:m,date:a,time:r,location:d,category:l,downloadURL:x,priority:c}=e;return t.jsxs(Z,{children:[t.jsx(U,{children:t.jsx(G,{src:x,alt:n})}),t.jsxs(J,{children:[t.jsxs(K,{children:[t.jsxs("div",{children:[t.jsx(N,{children:F(a)})," at ",t.jsx(Q,{children:O(r)})]}),t.jsx(X,{children:B(d)})]}),t.jsxs(Y,{children:[t.jsx(ee,{children:n}),t.jsx(te,{children:m}),t.jsx(_,{children:t.jsx($,{to:`/event/${o}`,children:t.jsx(L,{children:"More info"})})})]})]}),t.jsxs(ie,{children:[t.jsx(f,{children:l}),t.jsx(f,{style:{color:T(c)},children:c})]})]})}};v.propTypes={event:s.shape({id:s.string.isRequired,title:s.string.isRequired,description:s.string.isRequired,date:s.string.isRequired,time:s.string.isRequired,location:s.string.isRequired,category:s.string.isRequired,downloadURL:s.string.isRequired,priority:s.string.isRequired})};const ne=i.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${e=>e.theme.space[5]}px;
  justify-content: center;
  justify-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 332px);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 302px);
  }
`,se=()=>{const e=u(M),o=u(k),n=C();p.useEffect(()=>{(async()=>{try{const d=await z(E,"events");P(d,l=>{const x=l.docs.map(c=>({id:c.id,...c.data()})).sort((c,y)=>y.createdAt-c.createdAt);n(S(x))},()=>{})}catch(d){console.log(d.message)}})()},[n]);const a=(()=>{const r=o.toLowerCase();return e.filter(({title:d,description:l})=>d.toLowerCase().includes(r)||l.toLowerCase().includes(r))})();if(a.length>0)return t.jsx(ne,{children:a.map(r=>t.jsx(v,{event:r},r.id))})},oe=i.main`
  display: block;
  width: 100%;
  background-image: url('/src/assets/images/bg-waves.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`,w=i.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    padding: 0 40px 0 47px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`,b=i.h2`
  margin-bottom: ${e=>e.theme.space[5]}px;
  font-family: 'Poppins-SemiBold';
  font-size: ${e=>e.theme.fontSizes.xl}px;
  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 1280px) {
    display: inline-block;
    min-width: fit-content;
    margin-bottom: ${e=>e.theme.space[0]}px;
  }
`;function ce(){const{isScreenMobile:e,isScreenTablet:o,isScreenDesktop:n}=j();return t.jsx(oe,{children:t.jsx(R,{children:t.jsxs(W,{children:[e&&t.jsx(g,{}),o&&t.jsxs(w,{children:[t.jsx(g,{}),t.jsx(b,{children:"My events"})]}),n&&t.jsxs(w,{children:[t.jsx(g,{}),t.jsx(b,{children:"My events"})]}),t.jsx(se,{})]})})})}export{ce as default};
