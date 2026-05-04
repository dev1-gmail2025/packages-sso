import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as t}from"./dashed-divider.element-B-P6xLuM.js";import{S as c}from"./Stack-Up7TlUQf.js";import{B as d}from"./Box-CNziy5N6.js";import{T as l}from"./Typography-CDoNwpf8.js";/* empty css               */import"./FileSaver.min-DeWzra_O.js";import"./index-j62jqFia.js";import"./time.util-BYguZ9lS.js";import"./Box-DrN8sd8X.js";import"./memoTheme-HOUyZqrd.js";import"./defaultTheme-BGAZNSBz.js";import"./DefaultPropsProvider-BVc36nx7.js";import"./index-3f0Hh3Ub.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const T={orientation:{control:"inline-radio",options:["horizontal","vertical"],description:"Divider orientation.",table:{type:{summary:"'horizontal' | 'vertical'"},defaultValue:{summary:"horizontal"}}},color:{control:"color",description:"Divider color.",table:{type:{summary:"string"}}},thickness:{control:{type:"number",min:1,max:8,step:1},description:"Thickness (px) of the divider line.",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},length:{control:"text",description:"Length of the divider (px or CSS length).",table:{type:{summary:"string | number"},defaultValue:{summary:"100%"}}},dashed:{control:"boolean",description:"Use dashed style when true, solid when false.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},sx:{control:!1,description:"Additional MUI sx styles applied to the divider pseudo-element or root.",table:{type:{summary:"SxProps<Theme>"}}}},q={title:"Elements/Divider/DashedDivider",component:t,tags:["autodocs"],args:{orientation:"horizontal",dashed:!0,thickness:1,length:"100%"},parameters:{layout:"padded"},argTypes:T},s={},a={render:r=>e.jsxs(c,{direction:"row",spacing:4,alignItems:"center",children:[e.jsxs(d,{sx:{flex:1},children:[e.jsx(l,{variant:"body2",gutterBottom:!0,children:"Horizontal"}),e.jsx(t,{...r,orientation:"horizontal"})]}),e.jsxs(d,{sx:{height:80,display:"flex",flexDirection:"row",alignItems:"center",gap:2},children:[e.jsx(l,{variant:"body2",children:"Vertical"}),e.jsx(t,{...r,orientation:"vertical",length:60})]})]})},o={render:r=>e.jsxs(c,{spacing:2,children:[e.jsxs(d,{children:[e.jsx(l,{variant:"body2",gutterBottom:!0,children:"Dashed"}),e.jsx(t,{...r,dashed:!0,thickness:1})]}),e.jsxs(d,{children:[e.jsx(l,{variant:"body2",gutterBottom:!0,children:"Solid"}),e.jsx(t,{...r,dashed:!1,thickness:1})]})]})},n={render:r=>e.jsxs(c,{spacing:2,children:[e.jsx(t,{...r,thickness:1}),e.jsx(t,{...r,thickness:2}),e.jsx(t,{...r,thickness:4})]})},i={render:r=>e.jsxs(c,{spacing:2,children:[e.jsx(t,{...r,length:"50%"}),e.jsx(t,{...r,length:"75%"}),e.jsx(t,{...r,length:"100%"}),e.jsx(t,{...r,length:120})]})};var m,p,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,u,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Stack direction="row" spacing={4} alignItems="center">\r
      <Box sx={{
      flex: 1
    }}>\r
        <Typography variant="body2" gutterBottom>\r
          Horizontal\r
        </Typography>\r
        <DashedDividerElement {...args} orientation="horizontal" />\r
      </Box>\r
      <Box sx={{
      height: 80,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 2
    }}>\r
        <Typography variant="body2">Vertical</Typography>\r
        <DashedDividerElement {...args} orientation="vertical" length={60} />\r
      </Box>\r
    </Stack>
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var y,D,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Stack spacing={2}>\r
      <Box>\r
        <Typography variant="body2" gutterBottom>\r
          Dashed\r
        </Typography>\r
        <DashedDividerElement {...args} dashed thickness={1} />\r
      </Box>\r
      <Box>\r
        <Typography variant="body2" gutterBottom>\r
          Solid\r
        </Typography>\r
        <DashedDividerElement {...args} dashed={false} thickness={1} />\r
      </Box>\r
    </Stack>
}`,...(v=(D=o.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var j,f,k;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Stack spacing={2}>\r
      <DashedDividerElement {...args} thickness={1} />\r
      <DashedDividerElement {...args} thickness={2} />\r
      <DashedDividerElement {...args} thickness={4} />\r
    </Stack>
}`,...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var S,b,B;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Stack spacing={2}>\r
      <DashedDividerElement {...args} length="50%" />\r
      <DashedDividerElement {...args} length="75%" />\r
      <DashedDividerElement {...args} length="100%" />\r
      <DashedDividerElement {...args} length={120} />\r
    </Stack>
}`,...(B=(b=i.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};const F=["Default","Orientations","SolidVsDashed","Thickness","Lengths"];export{s as Default,i as Lengths,a as Orientations,o as SolidVsDashed,n as Thickness,F as __namedExportsOrder,q as default};
