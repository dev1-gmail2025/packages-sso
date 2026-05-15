import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{N as t}from"./note.component-RsY15end.js";import{S as u}from"./Stack-Up7TlUQf.js";import"./index-j62jqFia.js";import"./FileSaver.min-DejWm9ah.js";import"./icon.element-BlOxGscY.js";/* empty css               */import"./time.util-BYguZ9lS.js";import"./useTheme-BcF2JLY5.js";import"./defaultTheme-BGAZNSBz.js";import"./DefaultPropsProvider-BVc36nx7.js";import"./memoTheme-HOUyZqrd.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./link.element-BfA8Monr.js";import"./Typography-CDoNwpf8.js";import"./index-3f0Hh3Ub.js";import"./isFocusVisible-B8k4qzLc.js";import"./stack.style-D9s_iJNk.js";import"./index-DP7gAqwz.js";const f={type:{control:"select",options:["info","recommend","warning","error"],description:"Note variant.",table:{type:{summary:'"info" | "recommend" | "warning" | "error"'},defaultValue:{summary:"info"}}},content:{control:"text",description:"Note content.",table:{type:{summary:"string"}}},href:{control:"text",description:"Optional link href.",table:{type:{summary:"string"}}},contentHref:{control:"text",description:"Optional link text.",table:{type:{summary:"string"}}}},_={title:"Elements/Composite/Note",component:t,tags:["autodocs"],args:{type:"info",content:"This is an info note."},parameters:{layout:"padded"},argTypes:f},r={},n={render:o=>e.jsxs(u,{spacing:2,sx:{maxWidth:520},children:[e.jsx(t,{...o,type:"info",content:"Info message."}),e.jsx(t,{...o,type:"recommend",content:"Recommendation message."}),e.jsx(t,{...o,type:"warning",content:"Warning message."}),e.jsx(t,{...o,type:"error",content:"Error message."})]})},s={args:{type:"warning",content:"Please read",contentHref:"the documentation",href:"https://example.com"}};var a,m,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,c,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Stack spacing={2} sx={{
    maxWidth: 520
  }}>\r
      <NoteComponent {...args} type="info" content="Info message." />\r
      <NoteComponent {...args} type="recommend" content="Recommendation message." />\r
      <NoteComponent {...args} type="warning" content="Warning message." />\r
      <NoteComponent {...args} type="error" content="Error message." />\r
    </Stack>
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,l,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    content: 'Please read',
    contentHref: 'the documentation',
    href: 'https://example.com'
  }
}`,...(y=(l=s.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const v=["Default","Types","WithLink"];export{r as Default,n as Types,s as WithLink,v as __namedExportsOrder,_ as default};
