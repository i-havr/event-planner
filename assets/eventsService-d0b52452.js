import{s as y,j as v,P as c}from"./index-2e27825a.js";import{r as m,m as p,a as b,u as $,g as x,b as i,d as l,e as R,f as g}from"./Button-50ffef74.js";const E=y.button`
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
`,h=({children:e,...t})=>v.jsx(E,{type:"submit",...t,children:e});h.defaultProps={onClick:()=>null,children:null};h.propTypes={onClick:c.func,children:c.node,"aria-label":c.string.isRequired};const S=async(e,t)=>{const o=Date.now().toString();if(e)try{const r=await(await fetch(e)).blob(),a=await m(p,`${t}/${o}`);return await $(a,r),await x(a)}catch(n){console.log("uploadImageToServer: ",n)}},T=async e=>{try{const t=m(p,e);return await b(t),!0}catch(t){console.log("deletePicture: ",t)}},j=async(e,t,o,n,r,a,d,f)=>{const u=Date.now().toString();try{const s=await S(d,"eventsImages"),w=i(l,"events",u);return await g(w,{title:e,description:t,date:o,time:n,location:r,category:a,downloadURL:s,priority:f,createdAt:u}),!0}catch(s){console.log("uploadEventToServer: ",s.message)}},k=async e=>{try{const t=await i(l,"events",e);return await R(t),!0}catch(t){console.log("deleteEvent: ",t)}},D=async(e,t)=>{try{const o=await i(l,"events",e);return await g(o,t,{merge:!0}),!0}catch(o){console.log("editEvent: ",o)}};export{h as B,T as a,k as d,D as e,j as u};
