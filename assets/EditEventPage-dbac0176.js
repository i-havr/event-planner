import{s as i,e as s,r as a,j as t,L as r,H as c}from"./index-9cf2a618.js";import{S as m,C as d}from"./Button-64c261b6.js";import{B as l}from"./eventsService-078e2c32.js";import{E as p}from"./EventForm-41e033b4.js";const h=i.main`
  display: block;
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
`;function j(){var n;const e=s(),o=((n=e.state)==null?void 0:n.from)??"/";return a.useLayoutEffect(()=>{window.scrollTo(0,0)},[e.pathname]),t.jsx(h,{children:t.jsx(m,{children:t.jsxs(d,{children:[t.jsx(r,{to:o,children:t.jsxs(l,{"aria-label":"Back button",children:[t.jsx(c,{size:16}),"Back"]})}),t.jsx(x,{children:"Edit event"}),t.jsx(p,{editType:!0})]})})})}export{j as default};
