import{s as i,r as l,l as k,m as z,u as S,f as E,j as t,N as B,L as x,H as D}from"./index-2e27825a.js";import{B as L,d as P,a as H}from"./eventsService-d0b52452.js";import{s as I,S as M,C as W,B as g}from"./Button-50ffef74.js";import{a as T,c as R,f}from"./colorizePriorityMarker-1d900682.js";const C=i.main`
  display: block;
  height: 100vh;
  min-height: 100vh;

  background-image: url('/src/assets/images/bg-waves.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`,N=i.h2`
  margin-bottom: ${e=>e.theme.space[5]}px;
  font-family: 'Poppins-SemiBold';
  font-size: ${e=>e.theme.fontSizes.l}px;
  line-height: ${e=>e.theme.lineHeights.secondary};
  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 768px) {
    width: 688px;
    margin-left: auto;
    margin-right: auto;
    font-size: ${e=>e.theme.fontSizes.xl}px;
  }

  @media screen and (min-width: 1280px) {
    min-width: fit-content;
    margin-bottom: 25px;
  }

  @media screen and (min-width: 1440px) {
    width: 628px;
  }
`,A=i.div`
  width: 272px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;

  overflow: hidden;
  background-color: ${e=>e.theme.colors.background};
  border-radius: ${e=>e.theme.radii.form};
  box-shadow: ${e=>e.theme.shadows.normal};

  @media screen and (min-width: 768px) {
    width: 688px;
  }

  @media screen and (min-width: 1440px) {
    width: 628px;
  }
`,F=i.div`
  width: 100%;
  height: 168px;
  background-color: ${e=>e.theme.colors.muted};
  overflow: hidden;
  border-radius: ${e=>e.theme.radii.form};

  @media screen and (min-width: 768px) {
    height: 272px;
  }
`,G=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,U=i.p`
  padding: ${e=>e.theme.space[5]}px ${e=>e.theme.space[4]}px;
  font-family: 'Poppins-Regular';
  font-size: ${e=>e.theme.fontSizes.s}px;
  line-height: ${e=>e.theme.lineHeights.body};
  color: ${e=>e.theme.colors.secondaryText};

  @media screen and (min-width: 768px) {
    padding: ${e=>e.theme.space[5]}px;
  }
`,q=i.div`
  display: flex;
  justify-content: start;
  gap: 12px;
  flex-wrap: wrap;
  padding: 0 ${e=>e.theme.space[4]}px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    padding: 0 ${e=>e.theme.space[5]}px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
  }
`,n=i.span`
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
  box-shadow: ${e=>e.theme.shadows.normal};
`,J=i.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding: 0 ${e=>e.theme.space[4]}px;

  @media screen and (min-width: 768px) {
    justify-content: end;
    gap: ${e=>e.theme.space[4]}px;
    padding: 0 ${e=>e.theme.space[5]}px;
  }

  & button {
    width: 108px;
    height: 32px;
    margin: 0;
    padding: ${e=>e.theme.space[3]}px 14px;
    font-family: 'Poppins-Medium';
    font-size: ${e=>e.theme.fontSizes.xs}px;
    border-radius: ${e=>e.theme.radii.normal};
    box-shadow: none;
    line-height: 1.33;

    &:first-child {
      color: ${e=>e.theme.colors.secondary};
      border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.secondary};
      background-color: #fff;

      &:hover {
        outline: 1px solid ${e=>e.theme.colors.secondary};
      }

      @media screen and (min-width: 768px) {
        width: auto;
      }
    }
  }
`,K=i.div`
  display: flex;
  justify-content: start;
  padding: 0 ${e=>e.theme.space[4]}px;
`;function Z(){const[e,u]=l.useState(!1),{eventId:o}=k(),a=z(),{isScreenMobile:r}=S(),d=E(I).find(s=>s.id===o);if(l.useLayoutEffect(()=>{window.scrollTo(0,0)},[a.pathname]),e)return t.jsx(B,{to:"/"});if(d){const{title:s,description:w,date:c,time:h,location:b,category:$,downloadURL:m,priority:p}=d,j=async()=>{const y=await P(o),v=await H(m);y&&v&&u(!0)};return t.jsx(C,{children:t.jsx(M,{children:t.jsxs(W,{children:[t.jsx(x,{to:"/",children:t.jsxs(L,{"aria-label":"Back button",children:[t.jsx(D,{size:16}),"Back"]})}),t.jsx(N,{children:s}),t.jsxs(A,{children:[t.jsx(F,{children:t.jsx(G,{src:m,alt:s})}),t.jsx(U,{children:w}),t.jsxs(q,{children:[t.jsx(n,{children:$}),t.jsx(n,{style:{color:T(p)},children:p}),t.jsx(n,{children:R(b)}),!r&&t.jsxs(n,{children:[f(c)," at ",h]})]}),r&&t.jsx(K,{children:t.jsxs(n,{style:{marginTop:"12px",marginBottom:"40px"},children:[f(c)," at ",h]})}),t.jsxs(J,{children:[t.jsx(x,{to:`/event/${o}/edit`,state:{from:a},children:t.jsx(g,{type:"button",children:"Edit"})}),t.jsx(g,{type:"button",actionHandler:j,children:"Delete event"})]})]})]})})})}else return null}export{Z as default};
