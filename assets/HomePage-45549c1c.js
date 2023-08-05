import{s as i,P as n,j as t,r as d,u as v,L as $,a as w,b as y,c as k,f as L}from"./index-eaa099f5.js";import{B as C,c as E,d as S,o as M}from"./Button-183f41c5.js";const z=i.button`
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
`,F=i.button`
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
`,h=({children:e,view:s,...o})=>s==="option"?t.jsx(z,{type:"button",...o,children:e}):t.jsx(F,{type:"button",...o,children:e});h.defaultProps={onClick:()=>null,children:null};h.propTypes={view:n.string,onClick:n.func,children:n.node,"aria-label":n.string.isRequired};const R=e=>d.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M4 4L9 12V18L15 21V12L20 4H4Z",stroke:"#3F3F3F",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),B=e=>d.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5M14 5H20M10 5L4 5M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM16 12H4M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19ZM8 19H20",stroke:"#3F3F3F",strokeWidth:1.5,strokeLinecap:"round"})),P=e=>d.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M12 4V20M4 12L20 12",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),W=i.div`
  display: flex;
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
`,u=()=>{const{isScreenMobile:e}=v();return t.jsxs(W,{children:[t.jsxs(h,{view:"option","aria-label":"Filter by business",children:[!e&&"Business",t.jsx(R,{})]}),t.jsxs(h,{view:"option","aria-label":"Sort",children:[!e&&"Sort by",t.jsx(B,{})]}),t.jsx($,{to:"/create",children:t.jsxs(h,{"aria-label":"Add new event",children:[t.jsx(P,{}),!e&&"Add new event"]})})]})},q=i.main`
  display: block;
  width: 100%;
  background-image: url('/src/assets/images/bg-waves.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`,T=i.section`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  min-height: 100vh;
  padding: 40px 24px 42px 24px;

  @media screen and (min-width: 768px) {
    padding: 40px 40px 125px 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 60px 80px 77px 80px;
  }
`,f=i.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }
`,b=i.h2`
  margin-bottom: ${e=>e.theme.space[5]}px;
  font-family: 'Poppins-SemiBold';
  font-size: ${e=>e.theme.fontSizes.xl}px;
  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 1280px) {
    min-width: fit-content;
    margin-bottom: ${e=>e.theme.space[0]}px;
  }
`,H=e=>e.events.items,A=e=>{const s=e.split("/");if(s.length===3){const o=s[0],m=s[1];return`${o}.${m}`}return e},D=e=>{const s=e.split(" ");return s.length===2?s[0]:e},V=e=>e.length===0||typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1),I=i.li`
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
`,O=i.div`
  width: 100%;
  height: 336px;
  overflow: hidden;
`,U=i.img`
  min-height: 100%;
  scale: 1;
  object-fit: cover;
`,Z=i.div`
  position: absolute;
  bottom: -56px;
  width: 100%;
  height: 240px;
  transition: bottom 300ms ease-out;
`,G=i.div`
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
`,J=i.span``,K=i.span``,N=i.span``,Q=i.div`
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
`,X=i.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100%;
  max-height: 100%;
  padding-top: ${e=>e.theme.space[3]}px;
`,Y=i.h3`
  padding: ${e=>e.theme.space[4]}px 0 ${e=>e.theme.space[3]}px 0;
  font-family: 'Poppins-Medium';
  font-size: ${e=>e.theme.fontSizes.m}px;
  line-height: ${e=>e.theme.lineHeights.secondary};
  text-transform: capitalize;
  color: ${e=>e.theme.colors.titleText};
`,_=i.p`
  height: 88px;
  padding: ${e=>e.theme.space[3]}px 0 ${e=>e.theme.space[4]}px 0;
  font-family: 'Poppins-Regular';
  font-size: ${e=>e.theme.fontSizes.s}px;
  line-height: ${e=>e.theme.lineHeights.body};
  color: ${e=>e.theme.colors.secondaryText};
`,j=({event:e,onFollowButton:s,isFollowed:o})=>{if(e){const{id:m,title:c,description:r,date:a,time:p,location:x,category:l,downloadURL:g,priority:ie}=e;return t.jsxs(I,{children:[t.jsx(O,{children:t.jsx(U,{src:g,alt:c})}),t.jsxs(Z,{children:[t.jsxs(G,{children:[t.jsxs("div",{children:[t.jsx(J,{children:A(a)})," at ",t.jsx(K,{children:D(p)})]}),t.jsx(N,{children:V(x)})]}),t.jsxs(Q,{children:[t.jsx(Y,{children:c}),t.jsx(_,{children:r}),t.jsx(X,{children:t.jsx($,{to:`/event/${m}`,children:t.jsx(C,{type:"button",children:"More info"})})})]})]})]})}};j.propTypes={event:n.shape({id:n.string.isRequired,title:n.string.isRequired,description:n.string.isRequired,date:n.string.isRequired,time:n.string.isRequired,location:n.string.isRequired,category:n.string.isRequired,downloadURL:n.string.isRequired,priority:n.string.isRequired}),onFollowButton:n.func,isFollowed:n.func};const ee=i.ul`
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
`,te=()=>{const e=w(H),s=w(y),o=k();d.useEffect(()=>{(async()=>{try{const a=await E(S,"events");M(a,p=>{const x=p.docs.map(l=>({id:l.id,...l.data()})).sort((l,g)=>g.createdAt-l.createdAt);o(L(x))},()=>{})}catch(a){console.log(a.message)}})()},[o]);const c=(()=>{const r=s.toLowerCase();return e.filter(({title:a,description:p})=>a.toLowerCase().includes(r)||p.toLowerCase().includes(r))})();if(c.length>0)return t.jsx(ee,{children:c.map(r=>t.jsx(j,{event:r},r.id))})};function oe(){const{isScreenMobile:e,isScreenTablet:s,isScreenDesktop:o}=v();return t.jsx(q,{children:t.jsxs(T,{children:[e&&t.jsx(u,{}),s&&t.jsxs(f,{children:[t.jsx(u,{}),t.jsx(b,{children:"My events"})]}),o&&t.jsxs(f,{children:[t.jsx(u,{}),t.jsx(b,{children:"My events"})]}),t.jsx(te,{})]})})}export{oe as default};
