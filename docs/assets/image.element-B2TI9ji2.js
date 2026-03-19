import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-j62jqFia.js";import{S as R}from"./FileSaver.min-sVBIqHNu.js";import{c as x,M as v}from"./style.const-DcpvWNzF.js";import"./time.util-DFcg3e45.js";import{S as E}from"./stack.style-X5oYj0G_.js";import{u as k}from"./useTheme-BWrsGw5G.js";import{g as w,a as I,u as U,s as L,c as M,b as T,m as A}from"./DefaultPropsProvider-CnpmPGLU.js";import{c as C,k as b}from"./extendSxProp-COYDv-qt.js";import{B as $}from"./Box-DA9iinBb.js";function j(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function _(e){return parseFloat(e)}function B(e){return w("MuiSkeleton",e)}I("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const D=e=>{const{classes:t,variant:a,animation:r,hasChildren:s,width:i,height:o}=e;return T({root:["root",a,r,s&&"withChildren",s&&!i&&"fitContent",s&&!o&&"heightAuto"]},B,t)},h=b`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,g=b`
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
      `:null,V=L("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],a.animation!==!1&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})(A(({theme:e})=>{const t=j(e.shape.borderRadius)||"px",a=_(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:e.alpha(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${t}/${Math.round(a/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:r})=>r.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:r})=>r.hasChildren&&!r.width,style:{maxWidth:"fit-content"}},{props:({ownerState:r})=>r.hasChildren&&!r.height,style:{height:"auto"}},{props:{animation:"pulse"},style:P||{animation:`${h} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:q||{"&::after":{animation:`${g} 2s linear 0.5s infinite`}}}]}})),W=y.forwardRef(function(t,a){const r=U({props:t,name:"MuiSkeleton"}),{animation:s="pulse",className:i,component:o="span",height:p,style:c,variant:u="text",width:f,...l}=r,d={...r,animation:s,component:o,variant:u,hasChildren:!!l.children},S=D(d);return n.jsx(V,{as:o,ref:a,className:M(S.root,i),ownerState:d,...l,style:{width:f,height:p,...c}})});var m=(e=>(e.CIRCLE="CIRCLE",e.SQUARE="SQUARE",e.FULL_WIDTH="FULL_WIDTH",e))(m||{});const F=({isWrap:e=!1,children:t})=>e?n.jsx(E,{alignItems:"center",children:t}):n.jsx(n.Fragment,{children:t}),z=({url:e,onClick:t,sx:a={},isBorder:r=!1,isWrap:s=!1,sizeType:i=m.CIRCLE,size:o=R.MEDIUM,...p})=>{const{palette:c}=k(),[u,f]=y.useState(!1);t&&(a={...a,cursor:"pointer"});const l=i===m.CIRCLE?"50%":i===m.SQUARE?x:0;return n.jsxs(F,{isWrap:s,children:[!u&&n.jsx(W,{variant:"rectangular",sx:{...v[o],borderRadius:l}}),n.jsx($,{...p,component:"img",src:e,onClick:t,onLoad:()=>f(!0),onError:d=>{d.currentTarget.src="/images/diamond.png"},sx:{display:u?"block":"none",...v[o],objectFit:"cover",borderRadius:l,border:r?`1px solid ${c.divider}`:"none",...a}})]})};z.__docgenInfo={description:"",methods:[],displayName:"ImageElement",props:{url:{required:!0,tsType:{name:"string"},description:""},isBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isWrap:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sizeType:{required:!1,tsType:{name:"ImageSizeType"},description:"",defaultValue:{value:"ImageSizeType.CIRCLE",computed:!0}},size:{required:!1,tsType:{name:"union",raw:"SizeProps | string",elements:[{name:"SizeProps"},{name:"string"}]},description:"",defaultValue:{value:"SizeProps.MEDIUM",computed:!0}},sx:{defaultValue:{value:"{}",computed:!1},required:!1}},composes:["BoxProps"]};export{m as I,W as S,z as a};
