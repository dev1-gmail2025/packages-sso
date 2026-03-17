import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-j62jqFia.js";import{T as h,h as g,a as d}from"./text-highlight.element-CSkKv_H9.js";import{S as o}from"./Stack-BlQw5Kbs.js";import{T as r}from"./Typography-CjbH1rA4.js";import"./DefaultPropsProvider-Brxq0OUc.js";import"./defaultTheme-CiSRXe73.js";import"./useSlot-DBQWuDEP.js";import"./useForkRef-BVpE-hzr.js";import"./useId-CFSqmtgZ.js";import"./Select-BGXSfyCj.js";import"./index-C8adVhmr.js";import"./useSlotProps-_-7fWPp0.js";import"./InputLabel-YLDDHG1v.js";import"./useTheme-eMA7PP5Z.js";import"./useFormControl-CmOg5wnR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ownerWindow-DTuM7CMd.js";import"./Grow-BH2Uzhjw.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./getReactElementRef-CJ1MGg2c.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useTimeout-1tU6oJ84.js";import"./mergeSlotProps-Bfz0OzkQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-CPtln8nk.js";import"./List-CuT84JTO.js";import"./FormControl-BydE9C3D.js";import"./isMuiElement-BY4WSVWD.js";import"./useControlled-CdETZoY_.js";import"./createSvgIcon-BqnXePOd.js";import"./FileSaver.min-sVBIqHNu.js";import"./color.const-D0XZ47LU.js";import"./time.util-DFcg3e45.js";import"./createStack-BCgsFCsU.js";import"./extendSxProp-QnK7WPWm.js";const Z={title:"Elements/TextField/TextHighlight",tags:["autodocs"],parameters:{layout:"padded"}},i={render:()=>{const[e,m]=c.useState("lorem"),a="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";return t.jsxs(o,{spacing:2,children:[t.jsx(h,{label:"Query",value:e,onChange:l=>m(l.target.value),size:"small"}),t.jsxs(o,{spacing:1,children:[t.jsx(r,{variant:"caption",children:"highlightText"}),t.jsx(r,{children:g(a,e)})]}),t.jsxs(o,{spacing:1,children:[t.jsx(r,{variant:"caption",children:"highlightYellow"}),t.jsx(r,{children:d(a,e,!0)})]})]})}};var p,s,n;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [q, setQ] = useState('lorem');
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    return <Stack spacing={2}>\r
        <TextField label='Query' value={q} onChange={e => setQ(e.target.value)} size='small' />\r
\r
        <Stack spacing={1}>\r
          <Typography variant='caption'>highlightText</Typography>\r
          <Typography>{highlightText(text, q)}</Typography>\r
        </Stack>\r
\r
        <Stack spacing={1}>\r
          <Typography variant='caption'>highlightYellow</Typography>\r
          <Typography>{highlightYellow(text, q, true)}</Typography>\r
        </Stack>\r
      </Stack>;
  }
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const $=["Default"];export{i as Default,$ as __namedExportsOrder,Z as default};
