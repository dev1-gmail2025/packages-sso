import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-j62jqFia.js";import{T as h,h as g,a as d}from"./text-highlight.element-DgPH2vIi.js";import{S as o}from"./Stack-D52ta6Vs.js";import{T as r}from"./Typography-Cd5iZOo-.js";import"./DefaultPropsProvider-CnpmPGLU.js";import"./defaultTheme-CbDHbYmC.js";import"./useSlot-BQkp07Oq.js";import"./useForkRef-BVpE-hzr.js";import"./useId-CFSqmtgZ.js";import"./Select-uZY_LI9p.js";import"./index-C8adVhmr.js";import"./useSlotProps-hLfGuAdq.js";import"./Popover-Cl0DOJRt.js";import"./ownerWindow-DHxNjUuV.js";import"./Grow-WIQzVnBU.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./getReactElementRef-DcPXsDBP.js";import"./useTimeout-Ck7_m_Mv.js";import"./useTheme-BWrsGw5G.js";import"./utils-CH7VozHp.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./mergeSlotProps-Dl5OjG1I.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-C8gEJJRn.js";import"./InputLabel-BOBPd_9J.js";import"./useFormControl-CmOg5wnR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./List-BJXr9lXR.js";import"./FormControl-DQ2X6SMN.js";import"./isMuiElement-BY4WSVWD.js";import"./useControlled-CdETZoY_.js";import"./createSvgIcon-B_gPDoaJ.js";import"./string.util-DkuOPhSi.js";import"./FileSaver.min-sVBIqHNu.js";import"./color.const-Dil5I3Au.js";import"./time.util-DFcg3e45.js";import"./createStack-qJXewNdH.js";import"./extendSxProp-COYDv-qt.js";const rt={title:"Elements/TextField/TextHighlight",tags:["autodocs"],parameters:{layout:"padded"}},i={render:()=>{const[e,n]=c.useState("lorem"),a="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";return t.jsxs(o,{spacing:2,children:[t.jsx(h,{label:"Query",value:e,onChange:l=>n(l.target.value),size:"small"}),t.jsxs(o,{spacing:1,children:[t.jsx(r,{variant:"caption",children:"highlightText"}),t.jsx(r,{children:g(a,e)})]}),t.jsxs(o,{spacing:1,children:[t.jsx(r,{variant:"caption",children:"highlightYellow"}),t.jsx(r,{children:d(a,e,!0)})]})]})}};var p,s,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(s=i.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const it=["Default"];export{i as Default,it as __namedExportsOrder,rt as default};
