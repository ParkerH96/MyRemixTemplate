import{j as g,r as F}from"./index-Bm35sZ9Q.js";import{u as O}from"./MantineThemeProvider-AiyNdeD2.js";import{r as W,n as q,p as M,u as f,a as w,B as x,c as C,g as T,o as V,f as k,q as G}from"./logo-BJBMIdx3.js";function Y({classNames:r,styles:e,props:s,stylesCtx:o}){const a=O();return{resolvedClassNames:W({theme:a,classNames:r,props:s,stylesCtx:o||void 0}),resolvedStyles:q({theme:a,styles:e,props:s,stylesCtx:o||void 0})}}var N={root:"m_1b7284a3"};const D={},H=C((r,{radius:e,shadow:s})=>({root:{"--paper-radius":e===void 0?void 0:T(e),"--paper-shadow":V(s)}})),P=M((r,e)=>{const s=f("Paper",D,r),{classNames:o,className:a,style:t,styles:l,unstyled:n,withBorder:i,vars:c,radius:R,shadow:$,variant:u,mod:p,...m}=s,d=w({name:"Paper",props:s,classes:N,className:a,style:t,classNames:o,styles:l,unstyled:n,vars:c,varsResolver:H});return g.jsx(x,{ref:e,mod:[{"data-with-border":i},p],...d("root"),variant:u,...m})});P.classes=N;P.displayName="@mantine/core/Paper";function I(r){return F.Children.toArray(r).filter(Boolean)}var S={root:"m_4081bf90"};const J={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},K=C((r,{grow:e,preventGrowOverflow:s,gap:o,align:a,justify:t,wrap:l},{childWidth:n})=>({root:{"--group-child-width":e&&s?n:void 0,"--group-gap":G(o),"--group-align":a,"--group-justify":t,"--group-wrap":l}})),j=k((r,e)=>{const s=f("Group",J,r),{classNames:o,className:a,style:t,styles:l,unstyled:n,children:i,gap:c,align:R,justify:$,wrap:u,grow:p,preventGrowOverflow:m,vars:d,variant:_,__size:B,mod:b,...z}=s,v=I(i),y=v.length,h=G(c??"md"),A={childWidth:`calc(${100/y}% - (${h} - ${h} / ${y}))`},E=w({name:"Group",props:s,stylesCtx:A,className:a,style:t,classes:S,classNames:o,styles:l,unstyled:n,vars:d,varsResolver:K});return g.jsx(x,{...E("root"),ref:e,variant:_,mod:[{grow:p},b],size:B,...z,children:v})});j.classes=S;j.displayName="@mantine/core/Group";export{j as G,P,Y as u};
