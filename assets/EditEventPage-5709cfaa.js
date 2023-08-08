import{s as i,m as s,r as a,j as t,L as r,H as c}from"./index-2e27825a.js";import{S as m,C as d}from"./Button-50ffef74.js";import{B as l}from"./eventsService-d0b52452.js";import{E as h}from"./EventForm-361f55bb.js";const p=i.main`
  display: block;
  height: 100vh;
  min-height: 100vh;

  background-image: url('/src/assets/images/bg-waves.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;i.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;const x=i.h2`
  margin-bottom: ${e=>e.theme.space[5]}px;
  font-family: 'Poppins-SemiBold';
  font-size: ${e=>e.theme.fontSizes.l}px;
  line-height: ${e=>e.theme.lineHeights.secondary};
  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: ${e=>e.theme.fontSizes.xl}px;
  }

  @media screen and (min-width: 1280px) {
    min-width: fit-content;
    margin-bottom: 25px;
  }
`;function j(){var n;const e=s(),o=((n=e.state)==null?void 0:n.from)??"/";return a.useLayoutEffect(()=>{window.scrollTo(0,0)},[e.pathname]),t.jsx(p,{children:t.jsx(m,{children:t.jsxs(d,{children:[t.jsx(r,{to:o,children:t.jsxs(l,{"aria-label":"Back button",children:[t.jsx(c,{size:16}),"Back"]})}),t.jsx(x,{children:"Edit event"}),t.jsx(h,{editType:!0})]})})})}export{j as default};
