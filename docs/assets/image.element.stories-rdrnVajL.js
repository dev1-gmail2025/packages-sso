import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css               */import{S as o}from"./FileSaver.min-BMv5fHHc.js";import"./time.util-BYguZ9lS.js";import{I as a}from"./image.element-BMkBHvjG.js";import{S as T}from"./Stack-Up7TlUQf.js";import{B as s}from"./Box-CNziy5N6.js";import{T as i}from"./Typography-CDoNwpf8.js";import"./index-j62jqFia.js";import"./stack.style-BqTSJB_E.js";import"./memoTheme-HOUyZqrd.js";import"./defaultTheme-BGAZNSBz.js";import"./DefaultPropsProvider-BVc36nx7.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-3f0Hh3Ub.js";import"./useTheme-BcF2JLY5.js";const I={url:{control:"text",description:"Image URL. Prefer stable local assets for visual tests (e.g. /images/empty.svg).",table:{type:{summary:"string"}}},sizeType:{control:"select",options:["CIRCLE","SQUARE","FULL_WIDTH"],description:"Shape / sizing behavior.",table:{type:{summary:"ImageSizeType"},defaultValue:{summary:"CIRCLE"}}},size:{control:"select",options:Object.values(o),description:"Maps to internal size tokens (used by MAP_SIZE).",table:{type:{summary:"SizeProps | string"},defaultValue:{summary:o.MEDIUM}}},isBorder:{control:"boolean",description:"If true, renders a 1px divider border.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isWrap:{control:"boolean",description:'If true, wraps image with StackRow alignItems="center".',table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{action:"clicked",description:"Click handler. When provided, cursor becomes pointer.",table:{type:{summary:"(event: any) => void"}}},sx:{control:!1}},D={title:"Elements/Image/Image",component:a,tags:["autodocs"],args:{url:"https://picsum.photos/200",sizeType:"CIRCLE",size:o.MEDIUM,isBorder:!1,isWrap:!1},argTypes:I},t={},n={render:r=>e.jsxs(T,{direction:"row",spacing:4,alignItems:"center",flexWrap:"wrap",children:[e.jsxs(s,{children:[e.jsx(i,{variant:"caption",children:"Circle"}),e.jsx(a,{...r,sizeType:"CIRCLE"})]}),e.jsxs(s,{children:[e.jsx(i,{variant:"caption",children:"Square"}),e.jsx(a,{...r,sizeType:"SQUARE"})]}),e.jsxs(s,{children:[e.jsx(i,{variant:"caption",children:"Full width (no radius)"}),e.jsx(s,{sx:{width:240},children:e.jsx(a,{...r,sizeType:"FULL_WIDTH"})})]})]})},p={render:r=>e.jsxs(T,{direction:"row",spacing:4,alignItems:"center",flexWrap:"wrap",children:[e.jsxs(s,{children:[e.jsx(i,{variant:"caption",children:"Small"}),e.jsx(a,{...r,size:o.SMALL})]}),e.jsxs(s,{children:[e.jsx(i,{variant:"caption",children:"Medium"}),e.jsx(a,{...r,size:o.MEDIUM})]}),e.jsxs(s,{children:[e.jsx(i,{variant:"caption",children:"Large"}),e.jsx(a,{...r,size:o.LARGE})]}),e.jsxs(s,{children:[e.jsx(i,{variant:"caption",children:"Extra large"}),e.jsx(a,{...r,size:o.EXTRA_LARGE})]})]})};var c,l,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,y,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Stack direction='row' spacing={4} alignItems='center' flexWrap='wrap'>\r
      <Box>\r
        <Typography variant='caption'>Circle</Typography>\r
        <ImageElement {...args} sizeType={'CIRCLE'} />\r
      </Box>\r
      <Box>\r
        <Typography variant='caption'>Square</Typography>\r
        <ImageElement {...args} sizeType={'SQUARE'} />\r
      </Box>\r
      <Box>\r
        <Typography variant='caption'>Full width (no radius)</Typography>\r
        <Box sx={{
        width: 240
      }}>\r
          <ImageElement {...args} sizeType={'FULL_WIDTH'} />\r
        </Box>\r
      </Box>\r
    </Stack>
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var x,u,h;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Stack direction='row' spacing={4} alignItems='center' flexWrap='wrap'>\r
      <Box>\r
        <Typography variant='caption'>Small</Typography>\r
        <ImageElement {...args} size={SizeProps.SMALL} />\r
      </Box>\r
      <Box>\r
        <Typography variant='caption'>Medium</Typography>\r
        <ImageElement {...args} size={SizeProps.MEDIUM} />\r
      </Box>\r
      <Box>\r
        <Typography variant='caption'>Large</Typography>\r
        <ImageElement {...args} size={SizeProps.LARGE} />\r
      </Box>\r
      <Box>\r
        <Typography variant='caption'>Extra large</Typography>\r
        <ImageElement {...args} size={SizeProps.EXTRA_LARGE} />\r
      </Box>\r
    </Stack>
}`,...(h=(u=p.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const P=["Default","SizeTypes","Sizes"];export{t as Default,n as SizeTypes,p as Sizes,P as __namedExportsOrder,D as default};
