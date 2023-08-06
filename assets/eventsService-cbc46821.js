import{s as w,j as y,P as c}from"./index-6a10bcbf.js";import{r as d,m as u,a as v,u as b,g as $,b as m,d as p,e as x,s as R}from"./Button-f5c1b6e4.js";const S=w.button`
  display: inline-flex;
  align-items: center;
  justify-content: start;
  gap: ${e=>e.theme.space[3]}px;

  width: fit-content;
  margin-bottom: ${e=>e.theme.space[5]}px;
  padding: ${e=>e.theme.space[0]};
  font-family: 'Poppins-Medium';
  font-size: ${e=>e.theme.fontSizes.s}px;
  line-height: ${e=>e.theme.lineHeights.secondary};
  color: ${e=>e.theme.colors.secondary};
  border: ${e=>e.theme.borders.none};
  background-color: transparent;
  transition: color 300ms ease-out;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    margin-bottom: 17px;
  }

  &:hover {
    color: ${e=>e.theme.colors.accent};
  }
`,g=({children:e,...t})=>y.jsx(S,{type:"submit",...t,children:e});g.defaultProps={onClick:()=>null,children:null};g.propTypes={onClick:c.func,children:c.node,"aria-label":c.string.isRequired};const E=async(e,t)=>{const a=Date.now().toString();if(e)try{const s=await(await fetch(e)).blob(),n=await d(u,`${t}/${a}`);return await b(n,s),await $(n)}catch(o){console.log("uploadImageToServer: ",o)}},T=async e=>{try{const t=d(u,e);return await v(t),!0}catch(t){console.log("deletePicture: ",t)}},j=async(e,t,a,o,s,n,i,h)=>{const l=Date.now().toString();try{const r=await E(i,"eventsImages"),f=m(p,"events",l);return await R(f,{title:e,description:t,date:a,time:o,location:s,category:n,downloadURL:r,priority:h,createdAt:l}),!0}catch(r){console.log("uploadEventToServer: ",r.message)}},k=async e=>{try{const t=await m(p,"events",e);return await x(t),!0}catch(t){console.log("deleteEvent: ",t)}};export{g as B,T as a,k as d,j as u};
