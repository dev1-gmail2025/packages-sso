import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-j62jqFia.js";import{a as R,s as v,S as x}from"./ckeditor-CL2xzRyo.js";import"./time.util-BYguZ9lS.js";import{S as E}from"./stack.style-BkTbjcfq.js";import{u as k}from"./useTheme-B3rGZ43-.js";import{u as w,c as I}from"./DefaultPropsProvider-CTbmx_9D.js";import{a as U,g as L,s as M,c as T,m as A}from"./memoTheme-DEbB7Aqb.js";import{c as C,k as S}from"./extendSxProp-CMsS_Ey0.js";import{B as $}from"./Box-CDdb2_uU.js";function j(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function _(e){return parseFloat(e)}function B(e){return U("MuiSkeleton",e)}L("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const D=e=>{const{classes:t,variant:a,animation:s,hasChildren:r,width:i,height:o}=e;return T({root:["root",a,s,r&&"withChildren",r&&!i&&"fitContent",r&&!o&&"heightAuto"]},B,t)},h=S`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,g=S`
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
`,P=typeof h!="string"?C`
        animation: ${h} 2s ease-in-out 0.5s infinite;
      `:null,q=typeof g!="string"?C`
        &::after {
          animation: ${g} 2s linear 0.5s infinite;
        }
      `:null,V=M("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],a.animation!==!1&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})(A(({theme:e})=>{const t=j(e.shape.borderRadius)||"px",a=_(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:e.alpha(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${t}/${Math.round(a/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:s})=>s.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:s})=>s.hasChildren&&!s.width,style:{maxWidth:"fit-content"}},{props:({ownerState:s})=>s.hasChildren&&!s.height,style:{height:"auto"}},{props:{animation:"pulse"},style:P||{animation:`${h} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:q||{"&::after":{animation:`${g} 2s linear 0.5s infinite`}}}]}})),W=y.forwardRef(function(t,a){const s=w({props:t,name:"MuiSkeleton"}),{animation:r="pulse",className:i,component:o="span",height:p,style:c,variant:u="text",width:f,...l}=s,d={...s,animation:r,component:o,variant:u,hasChildren:!!l.children},b=D(d);return n.jsx(V,{as:o,ref:a,className:I(b.root,i),ownerState:d,...l,style:{width:f,height:p,...c}})});var m=(e=>(e.CIRCLE="CIRCLE",e.SQUARE="SQUARE",e.FULL_WIDTH="FULL_WIDTH",e))(m||{});const F=({isWrap:e=!1,children:t})=>e?n.jsx(E,{alignItems:"center",children:t}):n.jsx(n.Fragment,{children:t}),z=({url:e,onClick:t,sx:a={},isBorder:s=!1,isWrap:r=!1,sizeType:i=m.CIRCLE,size:o=x.MEDIUM,...p})=>{const{palette:c}=k(),[u,f]=y.useState(!1);t&&(a={...a,cursor:"pointer"});const l=i===m.CIRCLE?"50%":i===m.SQUARE?R:0;return n.jsxs(F,{isWrap:r,children:[!u&&n.jsx(W,{variant:"rectangular",sx:{...v[o],borderRadius:l}}),n.jsx($,{...p,component:"img",src:e,onClick:t,onLoad:()=>f(!0),onError:d=>{d.currentTarget.src="/images/diamond.png"},sx:{display:u?"block":"none",...v[o],objectFit:"cover",borderRadius:l,border:s?`1px solid ${c.divider}`:"none",...a}})]})};z.__docgenInfo={description:"",methods:[],displayName:"ImageElement",props:{url:{required:!0,tsType:{name:"string"},description:""},isBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isWrap:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sizeType:{required:!1,tsType:{name:"ImageSizeType"},description:"",defaultValue:{value:"ImageSizeType.CIRCLE",computed:!0}},size:{required:!1,tsType:{name:"union",raw:"SizeProps | string",elements:[{name:"SizeProps"},{name:"string"}]},description:"",defaultValue:{value:"SizeProps.MEDIUM",computed:!0}},sx:{defaultValue:{value:"{}",computed:!1},required:!1}},composes:["BoxProps"]};export{z as I,W as S,m as a};
