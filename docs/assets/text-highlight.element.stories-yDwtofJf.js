import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-j62jqFia.js";import{a as n,h as g}from"./text-highlight.element-DeATgLv6.js";import{S as e}from"./Stack-CPAJg9KB.js";import{T as d}from"./TextField-vYvLf2Ib.js";import{T as r}from"./Typography-Bxxrk_XJ.js";import"./string.util-DkuOPhSi.js";import"./FileSaver.min-BEy-8JuY.js";import"./time.util-BYguZ9lS.js";import"./memoTheme-DEbB7Aqb.js";import"./defaultTheme-DeO7XLhv.js";import"./DefaultPropsProvider-CTbmx_9D.js";import"./createStack-Du0yveyH.js";import"./extendSxProp-CMsS_Ey0.js";import"./useSlot-BVcC7tl7.js";import"./useForkRef-BVpE-hzr.js";import"./useId-CFSqmtgZ.js";import"./Select-DFkp9tIs.js";import"./index-DP7gAqwz.js";import"./useSlotProps-Coua_qTW.js";import"./Popover-CdeXLbiR.js";import"./ownerWindow-v3EA2bPe.js";import"./Grow-CGEv-SGy.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./getReactElementRef-DcPXsDBP.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./useTheme-B3rGZ43-.js";import"./utils-CqDPe-1j.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useTimeout-BnjI5Ij7.js";import"./mergeSlotProps-DZutjk2m.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-C5pZsSOP.js";import"./InputLabel-dfS4B9dg.js";import"./useFormControl-CmOg5wnR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./List-BdY5EXP2.js";import"./FormControl-BaRhJyho.js";import"./isMuiElement-BY4WSVWD.js";import"./useControlled-CdETZoY_.js";import"./createSvgIcon-Co-sBmU1.js";import"./index-C1XqMcs4.js";const et={title:"Elements/TextField/TextHighlight",tags:["autodocs"],parameters:{layout:"padded"}},i={render:()=>{const[o,l]=h.useState("lorem"),p="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";return t.jsxs(e,{spacing:2,children:[t.jsx(d,{label:"Query",value:o,onChange:c=>l(c.target.value),size:"small"}),t.jsxs(e,{spacing:1,children:[t.jsx(r,{variant:"caption",children:"highlightText"}),t.jsx(r,{children:n(p,o)})]}),t.jsxs(e,{spacing:1,children:[t.jsx(r,{variant:"caption",children:"highlightYellow"}),t.jsx(r,{children:g(p,o,!0)})]})]})}};var a,m,s;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
