import{s,P as d,j as i,r as l,u as j,a as E,b as C,c as B,O as y,d as L,e as M,L as k,f as g,g as P,h as R,i as T,k as W}from"./index-2e27825a.js";import{B as q,s as D,c as F,d as H,o as A,S as V,C as I}from"./Button-50ffef74.js";import{f as U,c as N,a as G}from"./colorizePriorityMarker-1d900682.js";const J=s.button`
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
`,K=s.button`
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
`,w=({children:e,actionHandler:t,view:n,...a})=>n==="option"?i.jsx(J,{type:"button",onClick:t,...a,children:e}):i.jsx(K,{type:"button",onClick:t,...a,children:e});w.defaultProps={onClick:()=>null,children:null};w.propTypes={children:d.node,actionHandler:d.func,view:d.string,"aria-label":d.string.isRequired};const Q=e=>l.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M12 4V20M4 12L20 12",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),X=s.div`
  display: inline-flex;
  justify-content: end;
  gap: ${e=>e.theme.space[5]}px;

  width: 100%;
  padding: 0 0 40px 0;

  & > div:nth-child(1) {
    width: 56px;

    & ul {
      padding-left: 0;
      padding-right: 0;
    }

    &:focus-within svg > path {
      stroke: ${e=>e.theme.colors.secondary};
    }
    & > button > svg > path {
      stroke: '#7B61FF';
    }

    @media screen and (min-width: 768px) {
      width: 150px;
    }
  }

  & > div:nth-child(2) {
    width: 56px;

    & ul {
      padding-left: 0;
      padding-right: 0;
    }

    &:focus-within svg > path {
      stroke: ${e=>e.theme.colors.secondary};
    }

    @media screen and (min-width: 768px) {
      width: 150px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0 0 24px 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 0;
  }
`,v=()=>{const[e,t]=l.useState(""),[n,a]=l.useState(""),{isScreenMobile:o}=j(),r=E();return l.useEffect(()=>{e&&r(C(e)),n&&r(B(n))},[r,n,e]),i.jsxs(X,{children:[i.jsx(y,{title:"Business",selectorView:"sortMethods",options:L,setOption:a}),i.jsx(y,{title:"Sort by",selectorView:"sortMethods",options:M,setOption:t}),i.jsx(k,{to:"/create",children:i.jsxs(w,{"aria-label":"Add new event",children:[i.jsx(Q,{}),!o&&"Add new event"]})})]})},Y=e=>{const t=e.match(/(\d{1,2}):(\d{2})\s?([ap]m)?/i);if(!t)return e;let n=parseInt(t[1],10);const a=t[2],o=t[3]?t[3].toLowerCase():void 0;return n===12?n=o==="am"?0:12:n+=o==="pm"?12:0,`${n.toString().padStart(2,"0")}:${a}`},f=e=>{const t=e.split("/");return new Date(t[2],t[1]-1,t[0])},Z=(e,t)=>[...e].sort((o,r)=>t.includes("↓")?o.title<r.title?1:-1:o.title>r.title?1:-1),_=(e,t)=>[...e].sort((o,r)=>t.includes("↓")?f(r.date)-f(o.date):f(o.date)-f(r.date)),O=(e,t)=>[...e].sort((o,r)=>{const c={High:0,Medium:1,Low:2};return t.includes("↓")?c[o.priority]>c[r.priority]?1:-1:c[o.priority]<c[r.priority]?1:-1}),b=(e,t)=>{if(t!=null&&t.includes("name"))return Z(e,t);if(t!=null&&t.includes("date"))return _(e,t);if(t!=null&&t.includes("priority"))return O(e,t);if(!t)return e},ee=s.li`
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
`,te=s.div`
  width: 100%;
  height: 336px;
  overflow: hidden;
`,ie=s.img`
  min-height: 100%;
  object-fit: cover;
`,se=s.div`
  position: absolute;
  bottom: -56px;
  width: 100%;
  height: 240px;
  transition: bottom 300ms ease-out;
`,ne=s.div`
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
`,oe=s.span``,re=s.span``,ae=s.span``,de=s.div`
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
`,ce=s.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100%;
  max-height: 100%;
  padding-top: ${e=>e.theme.space[3]}px;
`,le=s.h3`
  padding: ${e=>e.theme.space[4]}px 0 ${e=>e.theme.space[3]}px 0;
  font-family: 'Poppins-Medium';
  font-size: ${e=>e.theme.fontSizes.m}px;
  line-height: ${e=>e.theme.lineHeights.secondary};
  text-transform: capitalize;
  color: ${e=>e.theme.colors.titleText};
`,pe=s.p`
  height: 88px;
  padding: ${e=>e.theme.space[3]}px 0 ${e=>e.theme.space[4]}px 0;
  font-family: 'Poppins-Regular';
  font-size: ${e=>e.theme.fontSizes.s}px;
  line-height: ${e=>e.theme.lineHeights.body};
  color: ${e=>e.theme.colors.secondaryText};
`,he=s.div`
  position: absolute;
  top: 12px;
  left: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  z-index: 1;
`,$=s.span`
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
`,S=({event:e})=>{if(e){const{id:t,title:n,description:a,date:o,time:r,location:c,category:u,downloadURL:p,priority:m}=e;return i.jsxs(ee,{children:[i.jsx(te,{children:i.jsx(ie,{src:p,alt:n})}),i.jsxs(se,{children:[i.jsxs(ne,{children:[i.jsxs("div",{children:[i.jsx(oe,{children:U(o)})," at ",i.jsx(re,{children:Y(r)})]}),i.jsx(ae,{children:N(c)})]}),i.jsxs(de,{children:[i.jsx(le,{children:n}),i.jsx(pe,{children:a}),i.jsx(ce,{children:i.jsx(k,{to:`/event/${t}`,children:i.jsx(q,{children:"More info"})})})]})]}),i.jsxs(he,{children:[i.jsx($,{children:u}),i.jsx($,{style:{color:G(m)},children:m})]})]})}};S.propTypes={event:d.shape({id:d.string.isRequired,title:d.string.isRequired,description:d.string.isRequired,date:d.string.isRequired,time:d.string.isRequired,location:d.string.isRequired,category:d.string.isRequired,downloadURL:d.string.isRequired,priority:d.string.isRequired})};const me=s.ul`
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
`,ue=()=>{const[e,t]=l.useState([]),n=g(D),a=g(P),o=g(R),r=g(T),c=E();if(l.useEffect(()=>{},[e]),l.useEffect(()=>{(async()=>{try{const p=await F(H,"events");A(p,m=>{const x=m.docs.map(h=>({id:h.id,...h.data()})).sort((h,z)=>z.createdAt-h.createdAt);c(W(x))},()=>{})}catch(p){console.log(p.message)}})()},[c]),l.useEffect(()=>{n&&(()=>{const p=a.toLowerCase(),m=n.filter(({title:x,description:h})=>x.toLowerCase().includes(p)||h.toLowerCase().includes(p));if(o){const x=m.filter(({category:h})=>h===o.slice(0,-1).trim());t(b(x,r))}else t(b(m,r))})()},[o,n,a,r]),e.length>0)return i.jsx(me,{children:e.map(u=>i.jsx(S,{event:u},u.id))})},xe=s.main`
  display: block;
  height: 100vh;
  min-height: 100vh;

  background-image: url('/src/assets/images/bg-waves.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`,ge=s.div`
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
`,fe=s.h2`
  margin-bottom: ${e=>e.theme.space[5]}px;
  font-family: 'Poppins-SemiBold';
  font-size: ${e=>e.theme.fontSizes.xl}px;
  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 1280px) {
    display: inline-block;
    min-width: fit-content;
    margin-bottom: ${e=>e.theme.space[0]}px;
  }
`;function be(){const{isScreenMobile:e}=j();return i.jsx(xe,{children:i.jsx(V,{children:i.jsxs(I,{children:[e?i.jsx(v,{}):i.jsxs(ge,{children:[i.jsx(v,{}),i.jsx(fe,{children:"My events"})]}),i.jsx(ue,{})]})})})}export{be as default};
