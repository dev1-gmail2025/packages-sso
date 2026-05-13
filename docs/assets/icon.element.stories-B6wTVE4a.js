import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{I as o}from"./icon.element-C0E_o0GG.js";import{S as v}from"./Stack-Up7TlUQf.js";import{B as a}from"./Box-CNziy5N6.js";import{T as n}from"./Typography-CDoNwpf8.js";/* empty css               */import"./FileSaver.min-BhaN8JYp.js";import"./index-j62jqFia.js";import"./time.util-BYguZ9lS.js";import"./useTheme-BcF2JLY5.js";import"./defaultTheme-BGAZNSBz.js";import"./DefaultPropsProvider-BVc36nx7.js";import"./memoTheme-HOUyZqrd.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-3f0Hh3Ub.js";const S={icon:{control:"text"},size:{control:"select",options:["small","medium","large"]},fill:{control:"select",options:[0,1]},color:{control:"select",options:["inherit","disabled","primary","secondary","success","error","info","warning"]},disabled:{control:"boolean"},onClick:{action:"clicked"},sx:{control:!1}},R={title:"Elements/Icon/Icon",component:o,tags:["autodocs"],args:{icon:"add",size:"medium",fill:0,color:"inherit"},parameters:{layout:"padded"},argTypes:S},i={},s={render:e=>r.jsxs(v,{direction:"row",spacing:3,alignItems:"center",children:[r.jsxs(a,{children:[r.jsx(n,{variant:"caption",children:"Small"}),r.jsx(o,{...e,size:"small",icon:"add"})]}),r.jsxs(a,{children:[r.jsx(n,{variant:"caption",children:"Medium"}),r.jsx(o,{...e,size:"medium",icon:"add"})]}),r.jsxs(a,{children:[r.jsx(n,{variant:"caption",children:"Large"}),r.jsx(o,{...e,size:"large",icon:"add"})]})]})},t={render:e=>r.jsxs(v,{direction:"row",spacing:3,alignItems:"center",children:[r.jsxs(a,{children:[r.jsx(n,{variant:"caption",children:"FILL 0"}),r.jsx(o,{...e,fill:0,icon:"favorite"})]}),r.jsxs(a,{children:[r.jsx(n,{variant:"caption",children:"FILL 1"}),r.jsx(o,{...e,fill:1,icon:"favorite"})]})]})},c={args:{disabled:!0,icon:"delete"}};var l,p,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,g,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Stack direction="row" spacing={3} alignItems="center">\r
      <Box>\r
        <Typography variant="caption">Small</Typography>\r
        <IconElement {...args} size="small" icon="add" />\r
      </Box>\r
      <Box>\r
        <Typography variant="caption">Medium</Typography>\r
        <IconElement {...args} size="medium" icon="add" />\r
      </Box>\r
      <Box>\r
        <Typography variant="caption">Large</Typography>\r
        <IconElement {...args} size="large" icon="add" />\r
      </Box>\r
    </Stack>
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var u,y,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Stack direction="row" spacing={3} alignItems="center">\r
      <Box>\r
        <Typography variant="caption">FILL 0</Typography>\r
        <IconElement {...args} fill={0} icon="favorite" />\r
      </Box>\r
      <Box>\r
        <Typography variant="caption">FILL 1</Typography>\r
        <IconElement {...args} fill={1} icon="favorite" />\r
      </Box>\r
    </Stack>
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var f,j,I;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true,
    icon: 'delete'
  }
}`,...(I=(j=c.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const q=["Default","Sizes","Fill","Disabled"];export{i as Default,c as Disabled,t as Fill,s as Sizes,q as __namedExportsOrder,R as default};
