import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-j62jqFia.js";import{a as n,h as g}from"./text-highlight.element-B4G7TGMz.js";import{S as e}from"./Stack-BWemv0CO.js";import{T as d}from"./TextField-CcFJu-ru.js";import{T as r}from"./Typography-Bf8WTvH-.js";import"./string.util-DkuOPhSi.js";import"./ckeditor-Bv5EQgWb.js";import"./time.util-BYguZ9lS.js";import"./memoTheme-JcuT4PI6.js";import"./defaultTheme-CAzuqlo8.js";import"./DefaultPropsProvider-BwONcEM9.js";import"./createStack-_FjnXW6X.js";import"./extendSxProp-BhkXlpcg.js";import"./useSlot-BHAemyrm.js";import"./useForkRef-BVpE-hzr.js";import"./useId-CFSqmtgZ.js";import"./Select-BHbHB36B.js";import"./index-DP7gAqwz.js";import"./useSlotProps-CoayJ5MT.js";import"./Popover-DaQAVllg.js";import"./ownerWindow-C8QV6CSQ.js";import"./Grow-DXcpAqew.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./getReactElementRef-DcPXsDBP.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./useTheme--firQ3HK.js";import"./utils-CqDPe-1j.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useTimeout-BnjI5Ij7.js";import"./mergeSlotProps-C1T8RA4K.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-D3Ipf3Mx.js";import"./InputLabel-Xf4L_974.js";import"./useFormControl-CmOg5wnR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./List-sl9rBPBu.js";import"./FormControl-CkqPUPi_.js";import"./isMuiElement-BY4WSVWD.js";import"./useControlled-CdETZoY_.js";import"./createSvgIcon-CgF2gLAa.js";import"./index-F4SWrtxx.js";const et={title:"Elements/TextField/TextHighlight",tags:["autodocs"],parameters:{layout:"padded"}},i={render:()=>{const[o,l]=h.useState("lorem"),p="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";return t.jsxs(e,{spacing:2,children:[t.jsx(d,{label:"Query",value:o,onChange:c=>l(c.target.value),size:"small"}),t.jsxs(e,{spacing:1,children:[t.jsx(r,{variant:"caption",children:"highlightText"}),t.jsx(r,{children:n(p,o)})]}),t.jsxs(e,{spacing:1,children:[t.jsx(r,{variant:"caption",children:"highlightYellow"}),t.jsx(r,{children:g(p,o,!0)})]})]})}};var a,m,s;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [q, setQ] = useState('lorem');
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    return <Stack spacing={2}>\r
        <TextField label="Query" value={q} onChange={e => setQ(e.target.value)} size="small" />\r
\r
        <Stack spacing={1}>\r
          <Typography variant="caption">highlightText</Typography>\r
          <Typography>{highlightText(text, q)}</Typography>\r
        </Stack>\r
\r
        <Stack spacing={1}>\r
          <Typography variant="caption">highlightYellow</Typography>\r
          <Typography>{highlightYellow(text, q, true)}</Typography>\r
        </Stack>\r
      </Stack>;
  }
}`,...(s=(m=i.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const pt=["Default"];export{i as Default,pt as __namedExportsOrder,et as default};
