import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-j62jqFia.js";/* empty css               */import{a as b,v as g,S as R}from"./FileSaver.min-BhaN8JYp.js";import"./time.util-BYguZ9lS.js";import{S as x}from"./stack.style-B2z74QFP.js";import{u as w}from"./useTheme-BcF2JLY5.js";import{u as E,c as k}from"./DefaultPropsProvider-BVc36nx7.js";import{a as I,g as U,s as L,c as M,m as T}from"./memoTheme-HOUyZqrd.js";import{c as y,k as C}from"./index-3f0Hh3Ub.js";import{B as A}from"./Box-CNziy5N6.js";function $(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function j(e){return parseFloat(e)}function _(e){return I("MuiSkeleton",e)}U("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const B=e=>{const{classes:t,variant:a,animation:r,hasChildren:s,width:i,height:o}=e;return M({root:["root",a,r,s&&"withChildren",s&&!i&&"fitContent",s&&!o&&"heightAuto"]},_,t)},f=C`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,h=C`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,D=typeof f!="string"?y`
        animation: ${f} 2s ease-in-out 0.5s infinite;
      `:null,P=typeof h!="string"?y`
        &::after {
          animation: ${h} 2s linear 0.5s infinite;
        }
      `:null,q=L("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],a.animation!==!1&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})(T(({theme:e})=>{const t=$(e.shape.borderRadius)||"px",a=j(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:e.alpha(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${t}/${Math.round(a/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:r})=>r.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:r})=>r.hasChildren&&!r.width,style:{maxWidth:"fit-content"}},{props:({ownerState:r})=>r.hasChildren&&!r.height,style:{height:"auto"}},{props:{animation:"pulse"},style:D||{animation:`${f} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:P||{"&::after":{animation:`${h} 2s linear 0.5s infinite`}}}]}})),V=v.forwardRef(function(t,a){const r=E({props:t,name:"MuiSkeleton"}),{animation:s="pulse",className:i,component:o="span",height:p,style:m,variant:u="text",width:c,...l}=r,d={...r,animation:s,component:o,variant:u,hasChildren:!!l.children},S=B(d);return n.jsx(q,{as:o,ref:a,className:k(S.root,i),ownerState:d,...l,style:{width:c,height:p,...m}})}),W=({isWrap:e=!1,children:t})=>e?n.jsx(x,{alignItems:"center",children:t}):n.jsx(n.Fragment,{children:t}),F=({url:e,onClick:t,sx:a={},isBorder:r=!1,isWrap:s=!1,sizeType:i="CIRCLE",size:o=R.MEDIUM,...p})=>{const{palette:m}=w(),[u,c]=v.useState(!1);t&&(a={...a,cursor:"pointer"});const l=i==="CIRCLE"?"50%":i==="SQUARE"?b:0;return n.jsxs(W,{isWrap:s,children:[!u&&n.jsx(V,{variant:"rectangular",sx:{...g[o],borderRadius:l}}),n.jsx(A,{...p,component:"img",src:e,onClick:t,onLoad:()=>c(!0),onError:d=>{d.currentTarget.src="/images/diamond.png"},sx:{display:u?"block":"none",...g[o],objectFit:"cover",borderRadius:l,border:r?`1px solid ${m.divider}`:"none",...a}})]})};F.__docgenInfo={description:"",methods:[],displayName:"ImageElement",props:{url:{required:!0,tsType:{name:"string"},description:""},isBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isWrap:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sizeType:{required:!1,tsType:{name:"union",raw:"'CIRCLE' | 'SQUARE' | 'FULL_WIDTH'",elements:[{name:"literal",value:"'CIRCLE'"},{name:"literal",value:"'SQUARE'"},{name:"literal",value:"'FULL_WIDTH'"}]},description:"",defaultValue:{value:"'CIRCLE'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"SizeProps | string",elements:[{name:"SizeProps"},{name:"string"}]},description:"",defaultValue:{value:"SizeProps.MEDIUM",computed:!0}},sx:{defaultValue:{value:"{}",computed:!1},required:!1}},composes:["BoxProps"]};export{F as I,V as S};
