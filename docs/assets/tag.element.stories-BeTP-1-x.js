import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./typography.style-bTVGtiwd.js";import"./ckeditor-CL2xzRyo.js";import{S as n}from"./stack.style-BkTbjcfq.js";import"./icon-button.element-CNKiJYQh.js";import"./icon-content-badge-subs.element-VEgDb-xd.js";import"./icon-content-badge.element-Dqp1Lhyu.js";import"./icon-content.element-BYFuMu0G.js";import{I as p}from"./icon.element-C1fGWKPB.js";import{T as r}from"./tag.element-DNj8ZfzV.js";import"./image.element-B3vY-0Q6.js";import"./index-j62jqFia.js";import"./time.util-BYguZ9lS.js";import"./useTheme-B3rGZ43-.js";import"./defaultTheme-DeO7XLhv.js";import"./DefaultPropsProvider-CTbmx_9D.js";import"./memoTheme-DEbB7Aqb.js";import"./extendSxProp-CMsS_Ey0.js";import"./Box-CDdb2_uU.js";import"./InputLabel-dfS4B9dg.js";import"./useFormControl-CmOg5wnR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./link.element-D3mcjqpT.js";import"./Typography-Bxxrk_XJ.js";import"./index-C1XqMcs4.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-DvZtTmt-.js";import"./Stack-CPAJg9KB.js";import"./createStack-Du0yveyH.js";import"./index-DP7gAqwz.js";import"./IconButton-4XvBqZ2m.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-BDawOQvs.js";import"./useTimeout-BnjI5Ij7.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./CircularProgress-B9D4tC5t.js";import"./ownerWindow-v3EA2bPe.js";import"./useSlotProps-Coua_qTW.js";import"./useSlot-BVcC7tl7.js";import"./createSvgIcon-Co-sBmU1.js";import"./proxy-DKXG_8Nh.js";import"./Badge-BGqhrgA7.js";const V={type:{control:"color",description:"Base color (used for contained/outlined variants).",table:{type:{summary:"string"}}},content:{control:"text",description:"Tag text content.",table:{type:{summary:"string"}}},variant:{control:"inline-radio",options:["contained","outlined","outlined-border"],description:"Visual variant.",table:{type:{summary:'"contained" | "outlined" | "outlined-border"'}}},size:{control:"inline-radio",options:["small","medium","large"],description:"Size preset.",table:{type:{summary:'"small" | "medium" | "large"'}}},variation:{control:"inline-radio",options:["body1","caption"],description:"Typography variant.",table:{type:{summary:'"body1" | "caption"'}}},width:{control:{type:"number",min:40,step:10},description:"Optional fixed width.",table:{type:{summary:"number"}}},color:{control:"text",description:"Text color override (for contained).",table:{type:{summary:"string"}}},iconProps:{control:!1},sx:{control:!1}},Oe={title:"Elements/Tag/Tag",component:r,tags:["autodocs"],args:{type:"#1976d2",content:"Primary",variant:"contained",size:"medium",variation:"caption"},parameters:{layout:"padded"},argTypes:V},o={},a={render:t=>e.jsxs(n,{children:[e.jsx(r,{...t,variant:"contained",content:"Contained"}),e.jsx(r,{...t,variant:"outlined",content:"Outlined"}),e.jsx(r,{...t,variant:"outlined-border",content:"Outlined border"})]})},i={render:t=>e.jsxs(n,{children:[e.jsx(r,{...t,size:"small",content:"Small"}),e.jsx(r,{...t,size:"medium",content:"Medium"}),e.jsx(r,{...t,size:"large",content:"Large"})]})},s={render:t=>e.jsxs(n,{children:[e.jsx(r,{...t,variation:"caption",content:"Caption"}),e.jsx(r,{...t,variation:"body1",content:"Body1"})]})},c={args:{width:120,content:"Fixed width"}},d={render:t=>e.jsxs(n,{children:[e.jsx(r,{...t,type:"#1976d2",variant:"contained",color:"#111",content:"Dark text"}),e.jsx(r,{...t,type:"#2e7d32",variant:"contained",color:"#fff",content:"White text"})]})},m={render:t=>e.jsxs(n,{children:[e.jsx(r,{...t,type:"#0288d1",iconProps:e.jsx(p,{icon:"info"}),content:"Info"}),e.jsx(r,{...t,type:"#ed6c02",iconProps:e.jsx(p,{icon:"warning"}),content:"Warning"}),e.jsx(r,{...t,type:"#d32f2f",iconProps:e.jsx(p,{icon:"error"}),content:"Error"})]})},l={render:t=>e.jsxs(n,{sx:{flexWrap:"wrap"},children:[e.jsx(r,{...t,variant:"contained",size:"small",content:"Contained S"}),e.jsx(r,{...t,variant:"contained",size:"medium",content:"Contained M"}),e.jsx(r,{...t,variant:"contained",size:"large",content:"Contained L"}),e.jsx(r,{...t,variant:"outlined",size:"small",content:"Outlined S"}),e.jsx(r,{...t,variant:"outlined",size:"medium",content:"Outlined M"}),e.jsx(r,{...t,variant:"outlined",size:"large",content:"Outlined L"}),e.jsx(r,{...t,variant:"outlined-border",size:"small",content:"Border S"}),e.jsx(r,{...t,variant:"outlined-border",size:"medium",content:"Border M"}),e.jsx(r,{...t,variant:"outlined-border",size:"large",content:"Border L"})]})};var u,g,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,y,j;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <StackRow>\r
      <TagElement {...args} variant="contained" content="Contained" />\r
      <TagElement {...args} variant="outlined" content="Outlined" />\r
      <TagElement {...args} variant="outlined-border" content="Outlined border" />\r
    </StackRow>
}`,...(j=(y=a.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var S,E,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <StackRow>\r
      <TagElement {...args} size="small" content="Small" />\r
      <TagElement {...args} size="medium" content="Medium" />\r
      <TagElement {...args} size="large" content="Large" />\r
    </StackRow>
}`,...(T=(E=i.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var z,f,b;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <StackRow>\r
      <TagElement {...args} variation="caption" content="Caption" />\r
      <TagElement {...args} variation="body1" content="Body1" />\r
    </StackRow>
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var w,h,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    width: 120,
    content: 'Fixed width'
  }
}`,...(k=(h=c.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var O,R,C;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <StackRow>\r
      <TagElement {...args} type="#1976d2" variant="contained" color="#111" content="Dark text" />\r
      <TagElement {...args} type="#2e7d32" variant="contained" color="#fff" content="White text" />\r
    </StackRow>
}`,...(C=(R=d.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var M,P,B;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <StackRow>\r
      <TagElement {...args} type="#0288d1" iconProps={<IconElement icon="info" />} content="Info" />\r
      <TagElement {...args} type="#ed6c02" iconProps={<IconElement icon="warning" />} content="Warning" />\r
      <TagElement {...args} type="#d32f2f" iconProps={<IconElement icon="error" />} content="Error" />\r
    </StackRow>
}`,...(B=(P=m.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var I,L,W;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <StackRow sx={{
    flexWrap: 'wrap'
  }}>\r
      <TagElement {...args} variant="contained" size="small" content="Contained S" />\r
      <TagElement {...args} variant="contained" size="medium" content="Contained M" />\r
      <TagElement {...args} variant="contained" size="large" content="Contained L" />\r
      <TagElement {...args} variant="outlined" size="small" content="Outlined S" />\r
      <TagElement {...args} variant="outlined" size="medium" content="Outlined M" />\r
      <TagElement {...args} variant="outlined" size="large" content="Outlined L" />\r
      <TagElement {...args} variant="outlined-border" size="small" content="Border S" />\r
      <TagElement {...args} variant="outlined-border" size="medium" content="Border M" />\r
      <TagElement {...args} variant="outlined-border" size="large" content="Border L" />\r
    </StackRow>
}`,...(W=(L=l.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};const Re=["Default","Variants","Sizes","Variations","FixedWidth","ColorOverride","IconProps","AllMatrix"];export{l as AllMatrix,d as ColorOverride,o as Default,c as FixedWidth,m as IconProps,i as Sizes,a as Variants,s as Variations,Re as __namedExportsOrder,Oe as default};
