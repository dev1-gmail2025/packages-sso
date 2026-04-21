import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as i}from"./ckeditor-C-XNcyia.js";import"./time.util-BYguZ9lS.js";import{a as t,I as a}from"./image.element-yPAstSvt.js";import{S}from"./Stack-BWemv0CO.js";import{B as s}from"./Box-CJND6-sR.js";import{T as o}from"./Typography-Bf8WTvH-.js";import"./index-j62jqFia.js";import"./stack.style-I8y81LoD.js";import"./memoTheme-JcuT4PI6.js";import"./defaultTheme-CAzuqlo8.js";import"./DefaultPropsProvider-BwONcEM9.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./extendSxProp-BhkXlpcg.js";import"./useTheme--firQ3HK.js";import"./createStack-_FjnXW6X.js";import"./index-F4SWrtxx.js";const z={url:{control:"text",description:"Image URL. Prefer stable local assets for visual tests (e.g. /images/empty.svg).",table:{type:{summary:"string"}}},sizeType:{control:"select",options:Object.values(t),description:"Shape / sizing behavior.",table:{type:{summary:"ImageSizeType"},defaultValue:{summary:t.CIRCLE}}},size:{control:"select",options:Object.values(i),description:"Maps to internal size tokens (used by MAP_SIZE).",table:{type:{summary:"SizeProps | string"},defaultValue:{summary:i.MEDIUM}}},isBorder:{control:"boolean",description:"If true, renders a 1px divider border.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isWrap:{control:"boolean",description:'If true, wraps image with StackRow alignItems="center".',table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{action:"clicked",description:"Click handler. When provided, cursor becomes pointer.",table:{type:{summary:"(event: any) => void"}}},sx:{control:!1}},_={title:"Elements/Image/Image",component:a,tags:["autodocs"],args:{url:"https://picsum.photos/200",sizeType:t.CIRCLE,size:i.MEDIUM,isBorder:!1,isWrap:!1},argTypes:z},n={},p={render:r=>e.jsxs(S,{direction:"row",spacing:4,alignItems:"center",flexWrap:"wrap",children:[e.jsxs(s,{children:[e.jsx(o,{variant:"caption",children:"Circle"}),e.jsx(a,{...r,sizeType:t.CIRCLE})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"caption",children:"Square"}),e.jsx(a,{...r,sizeType:t.SQUARE})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"caption",children:"Full width (no radius)"}),e.jsx(s,{sx:{width:240},children:e.jsx(a,{...r,sizeType:t.FULL_WIDTH})})]})]})},c={render:r=>e.jsxs(S,{direction:"row",spacing:4,alignItems:"center",flexWrap:"wrap",children:[e.jsxs(s,{children:[e.jsx(o,{variant:"caption",children:"Small"}),e.jsx(a,{...r,size:i.SMALL})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"caption",children:"Medium"}),e.jsx(a,{...r,size:i.MEDIUM})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"caption",children:"Large"}),e.jsx(a,{...r,size:i.LARGE})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"caption",children:"Extra large"}),e.jsx(a,{...r,size:i.EXTRA_LARGE})]})]})};var m,l,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var y,g,x;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Stack direction="row" spacing={4} alignItems="center" flexWrap="wrap">\r
      <Box>\r
        <Typography variant="caption">Circle</Typography>\r
        <ImageElement {...args} sizeType={ImageSizeType.CIRCLE} />\r
      </Box>\r
      <Box>\r
        <Typography variant="caption">Square</Typography>\r
        <ImageElement {...args} sizeType={ImageSizeType.SQUARE} />\r
      </Box>\r
      <Box>\r
        <Typography variant="caption">Full width (no radius)</Typography>\r
        <Box sx={{
        width: 240
      }}>\r
          <ImageElement {...args} sizeType={ImageSizeType.FULL_WIDTH} />\r
        </Box>\r
      </Box>\r
    </Stack>
}`,...(x=(g=p.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var u,h,T;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Stack direction="row" spacing={4} alignItems="center" flexWrap="wrap">\r
      <Box>\r
        <Typography variant="caption">Small</Typography>\r
        <ImageElement {...args} size={SizeProps.SMALL} />\r
      </Box>\r
      <Box>\r
        <Typography variant="caption">Medium</Typography>\r
        <ImageElement {...args} size={SizeProps.MEDIUM} />\r
      </Box>\r
      <Box>\r
        <Typography variant="caption">Large</Typography>\r
        <ImageElement {...args} size={SizeProps.LARGE} />\r
      </Box>\r
      <Box>\r
        <Typography variant="caption">Extra large</Typography>\r
        <ImageElement {...args} size={SizeProps.EXTRA_LARGE} />\r
      </Box>\r
    </Stack>
}`,...(T=(h=c.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const F=["Default","SizeTypes","Sizes"];export{n as Default,p as SizeTypes,c as Sizes,F as __namedExportsOrder,_ as default};
