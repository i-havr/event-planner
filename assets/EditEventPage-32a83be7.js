import{s as n,e as s,j as t,L as a,H as r}from"./index-6a10bcbf.js";import{S as c,C as m}from"./Button-f5c1b6e4.js";import{B as d}from"./eventsService-cbc46821.js";import{C as l}from"./CreateNewEventForm-c2fd9c17.js";const p=n.main`
  display: block;
  min-height: 100vh;
  background-image: url('/src/assets/images/bg-waves.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;n.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;const h=n.h2`
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
`;function b(){var i;const o=((i=s().state)==null?void 0:i.from)??"/";return t.jsx(p,{children:t.jsx(c,{children:t.jsxs(m,{children:[t.jsx(a,{to:o,children:t.jsxs(d,{"aria-label":"Back button",children:[t.jsx(r,{size:16}),"Back"]})}),t.jsx(h,{children:"Create new event"}),t.jsx(l,{})]})})})}export{b as default};
