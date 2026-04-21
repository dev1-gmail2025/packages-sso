import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-j62jqFia.js";import{a as n,h as g}from"./text-highlight.element-7r4ACzVc.js";import{S as e}from"./Stack-BWemv0CO.js";import{T as d}from"./TextField-BEYRgNgZ.js";import{T as r}from"./Typography-Bf8WTvH-.js";import"./string.util-DkuOPhSi.js";import"./ckeditor-Cewk8mXO.js";import"./time.util-BYguZ9lS.js";import"./memoTheme-JcuT4PI6.js";import"./defaultTheme-CAzuqlo8.js";import"./DefaultPropsProvider-BwONcEM9.js";import"./createStack-_FjnXW6X.js";import"./extendSxProp-BhkXlpcg.js";import"./useSlot-BHAemyrm.js";import"./useForkRef-BVpE-hzr.js";import"./useId-CFSqmtgZ.js";import"./useFormControl-CmOg5wnR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-F4SWrtxx.js";import"./FormControl-CkqPUPi_.js";import"./isMuiElement-BY4WSVWD.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./ownerWindow-SaFBzm43.js";import"./Grow-DOIJXnb6.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./getReactElementRef-BVRziQZO.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useTheme--firQ3HK.js";import"./useTimeout-BnjI5Ij7.js";import"./InputLabel-Xf4L_974.js";import"./index-DP7gAqwz.js";import"./Popover-Dcprfih5.js";import"./mergeSlotProps-C1T8RA4K.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-NGFjKnxD.js";import"./List-sl9rBPBu.js";import"./useControlled-CdETZoY_.js";import"./createSvgIcon-CgF2gLAa.js";const rt={title:"Elements/TextField/TextHighlight",tags:["autodocs"],parameters:{layout:"padded"}},i={render:()=>{const[o,l]=h.useState("lorem"),a="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";return t.jsxs(e,{spacing:2,children:[t.jsx(d,{label:"Query",value:o,onChange:c=>l(c.target.value),size:"small"}),t.jsxs(e,{spacing:1,children:[t.jsx(r,{variant:"caption",children:"highlightText"}),t.jsx(r,{children:n(a,o)})]}),t.jsxs(e,{spacing:1,children:[t.jsx(r,{variant:"caption",children:"highlightYellow"}),t.jsx(r,{children:g(a,o,!0)})]})]})}};var p,s,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(s=i.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const it=["Default"];export{i as Default,it as __namedExportsOrder,rt as default};
