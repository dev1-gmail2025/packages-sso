import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-j62jqFia.js";import{a as n,h as g}from"./text-highlight.element-D9H65D8Z.js";import{S as o}from"./Stack-Up7TlUQf.js";import{T as d}from"./TextField-CdoyRMcl.js";import{T as r}from"./Typography-CDoNwpf8.js";import"./string.util-DkuOPhSi.js";/* empty css               */import"./FileSaver.min-DeWzra_O.js";import"./time.util-BYguZ9lS.js";import"./memoTheme-HOUyZqrd.js";import"./defaultTheme-BGAZNSBz.js";import"./DefaultPropsProvider-BVc36nx7.js";import"./index-3f0Hh3Ub.js";import"./useSlot-DiW1_K6U.js";import"./useForkRef-BVpE-hzr.js";import"./useId-CFSqmtgZ.js";import"./useFormControl-CmOg5wnR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./FormControl-N1E60Pih.js";import"./isMuiElement-BY4WSVWD.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./ownerWindow-BMbJ5sQi.js";import"./Grow-Dtpwe2QC.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./getReactElementRef-BVRziQZO.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useTheme-BcF2JLY5.js";import"./useTimeout-B9dDFdNe.js";import"./InputLabel-BMPpu4_O.js";import"./index-DP7gAqwz.js";import"./Popover-DjgrQDlz.js";import"./mergeSlotProps-DMBL9KJu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-BcpUhxIW.js";import"./List-b54nGxOK.js";import"./createSvgIcon-Bxbv8U67.js";const $={title:"Elements/TextField/TextHighlight",tags:["autodocs"],parameters:{layout:"padded"}},i={render:()=>{const[e,l]=h.useState("lorem"),a="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";return t.jsxs(o,{spacing:2,children:[t.jsx(d,{label:"Query",value:e,onChange:c=>l(c.target.value),size:"small"}),t.jsxs(o,{spacing:1,children:[t.jsx(r,{variant:"caption",children:"highlightText"}),t.jsx(r,{children:n(a,e)})]}),t.jsxs(o,{spacing:1,children:[t.jsx(r,{variant:"caption",children:"highlightYellow"}),t.jsx(r,{children:g(a,e,!0)})]})]})}};var p,s,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(s=i.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const tt=["Default"];export{i as Default,tt as __namedExportsOrder,$ as default};
