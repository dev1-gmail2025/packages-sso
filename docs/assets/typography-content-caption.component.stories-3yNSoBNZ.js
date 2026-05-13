import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{T as r}from"./typography-content-caption.component-DmgWFASt.js";import{S as g}from"./Stack-Up7TlUQf.js";/* empty css               */import"./FileSaver.min-BMv5fHHc.js";import"./index-j62jqFia.js";import"./other.util-D3WwIlNy.js";import"./defaultTheme-BGAZNSBz.js";import"./time.util-BYguZ9lS.js";import"./Typography-CDoNwpf8.js";import"./DefaultPropsProvider-BVc36nx7.js";import"./index-3f0Hh3Ub.js";import"./memoTheme-HOUyZqrd.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const T={content:{control:"text",description:"Main content text.",table:{type:{summary:"any"}}},caption:{control:"text",description:"Caption text.",table:{type:{summary:"string"}}},userTitleName:{control:"text",description:"Optional title line between content and caption.",table:{type:{summary:"string"}}},sx:{control:!1},sxContent:{control:!1},sxCaption:{control:!1}},k={title:"Elements/Typography/TypographyContentCaption",component:r,tags:["autodocs"],args:{content:"Nguyễn Văn A",userTitleName:"Quản trị viên",caption:"Online"},parameters:{layout:"padded"},argTypes:T},e={},n={args:{userTitleName:void 0}},o={render:a=>t.jsxs(g,{spacing:2,sx:{maxWidth:320},children:[t.jsx(r,{...a,content:"Nguyễn Văn A",caption:"Staff",userTitleName:"HR"}),t.jsx(r,{...a,content:"Hoàng Bùi",caption:"Admin",userTitleName:"System"}),t.jsx(r,{...a,content:"Trần B",caption:"Offline",userTitleName:void 0})]})};var s,i,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,m,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    userTitleName: undefined
  }
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,d,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Stack spacing={2} sx={{
    maxWidth: 320
  }}>\r
      <TypographyContentCaption {...args} content="Nguyễn Văn A" caption="Staff" userTitleName="HR" />\r
      <TypographyContentCaption {...args} content="Hoàng Bùi" caption="Admin" userTitleName="System" />\r
      <TypographyContentCaption {...args} content="Trần B" caption="Offline" userTitleName={undefined} />\r
    </Stack>
}`,...(y=(d=o.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const v=["Default","WithoutTitle","ManyExamples"];export{e as Default,o as ManyExamples,n as WithoutTitle,v as __namedExportsOrder,k as default};
