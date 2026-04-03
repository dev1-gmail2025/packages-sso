import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-j62jqFia.js";import{a as n,h as g}from"./text-highlight.element-BZn19CoE.js";import{S as e}from"./Stack--5Dd26sT.js";import{T as d}from"./TextField-BnQE0AD7.js";import{T as r}from"./Typography-crO-zzKF.js";import"./string.util-DkuOPhSi.js";import"./FileSaver.min-qO50DWaS.js";import"./color.const-CRNucSci.js";import"./time.util-BYguZ9lS.js";import"./DefaultPropsProvider-DU9SanKz.js";import"./defaultTheme-D-jjqFHx.js";import"./createStack-C_KW5WTO.js";import"./extendSxProp-Cmw4pgNu.js";import"./useSlot-DxC6qITw.js";import"./useForkRef-BVpE-hzr.js";import"./useId-CFSqmtgZ.js";import"./Select-BjyP1e04.js";import"./index-C8adVhmr.js";import"./useSlotProps-BVs4F9FP.js";import"./Popover-C9PvnN4t.js";import"./ownerWindow-BsA78Dfr.js";import"./Grow-STBTogaT.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./getReactElementRef-DcPXsDBP.js";import"./useTimeout-Ck7_m_Mv.js";import"./useTheme-0nskcD3X.js";import"./utils-CqDPe-1j.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./mergeSlotProps-C6mQwBhO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-CmqG1gvX.js";import"./InputLabel-CY3ncLPD.js";import"./useFormControl-CmOg5wnR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./List-DxCx-O3-.js";import"./FormControl-BLmiguG-.js";import"./isMuiElement-BY4WSVWD.js";import"./useControlled-CdETZoY_.js";import"./createSvgIcon-DaUmNjHb.js";const it={title:"Elements/TextField/TextHighlight",tags:["autodocs"],parameters:{layout:"padded"}},i={render:()=>{const[o,l]=h.useState("lorem"),p="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";return t.jsxs(e,{spacing:2,children:[t.jsx(d,{label:"Query",value:o,onChange:c=>l(c.target.value),size:"small"}),t.jsxs(e,{spacing:1,children:[t.jsx(r,{variant:"caption",children:"highlightText"}),t.jsx(r,{children:n(p,o)})]}),t.jsxs(e,{spacing:1,children:[t.jsx(r,{variant:"caption",children:"highlightYellow"}),t.jsx(r,{children:g(p,o,!0)})]})]})}};var a,m,s;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(m=i.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const ot=["Default"];export{i as Default,ot as __namedExportsOrder,it as default};
