import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{f as k,w as B,u as O,e as w}from"./index-DtL3pAzF.js";import{B as i}from"./button-icon-content-opacity.element-CuaDQwRV.js";import"./index-j62jqFia.js";import"./FileSaver.min-sVBIqHNu.js";import"./style.const-DcpvWNzF.js";import"./time.util-DFcg3e45.js";import"./loading.component-C3-c4Wh3.js";import"./typography.style-CJiPh48M.js";import"./image.element-B2TI9ji2.js";import"./stack.style-X5oYj0G_.js";import"./DefaultPropsProvider-CnpmPGLU.js";import"./defaultTheme-CbDHbYmC.js";import"./Stack-D52ta6Vs.js";import"./createStack-qJXewNdH.js";import"./extendSxProp-COYDv-qt.js";import"./index-C8adVhmr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-BWrsGw5G.js";import"./Box-DA9iinBb.js";import"./InputLabel-BOBPd_9J.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-_0gGO9Yn.js";import"./Typography-Cd5iZOo-.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-Cr6OT-HE.js";import"./color.const-Dil5I3Au.js";import"./CircularProgress-Coy-df3c.js";import"./icon-button.element-CaQUJqOR.js";import"./icon.element-D4DES1ie.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-BlX2FUJJ.js";import"./useTimeout-Ck7_m_Mv.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-CAHzdJLk.js";import"./icon-content-badge.element-wIksfgwX.js";import"./icon-content.element-BR7SGJ8x.js";import"./Badge-Cc5_q6VK.js";import"./useSlot-BQkp07Oq.js";import"./ownerWindow-DHxNjUuV.js";import"./useSlotProps-hLfGuAdq.js";import"./createSvgIcon-B_gPDoaJ.js";import"./proxy-DKXG_8Nh.js";import"./Button-uIHv_tDy.js";const j={icon:{control:"text"},content:{control:"text"},permission:{control:"boolean"},isQuare:{control:"boolean"},variant:{control:"select",options:["text","outlined","contained"]},color:{control:"select",options:["inherit","primary","secondary","success","error","info","warning"]},onClick:{action:"clicked"}},Ct={title:"Elements/Button/ButtonIconContentOpacityElement",component:i,tags:["autodocs"],args:{icon:"delete",content:"Delete",onClick:k(),variant:"outlined",color:"error"},parameters:{layout:"centered",chromatic:{delay:300}},argTypes:j},e={},r={render:t=>o.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[o.jsx(i,{...t,variant:"contained",content:"Contained"}),o.jsx(i,{...t,variant:"outlined",content:"Outlined"}),o.jsx(i,{...t,variant:"text",content:"Text"})]})},n={args:{isQuare:!0,content:"X"}},a={play:async({canvasElement:t,args:f})=>{const E=B(t);await O.click(E.getByRole("button")),await w(f.onClick).toHaveBeenCalledTimes(1)}};var s,c,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,l,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>\r
      <ButtonIconContentOpacityElement {...args} variant='contained' content='Contained' />\r
      <ButtonIconContentOpacityElement {...args} variant='outlined' content='Outlined' />\r
      <ButtonIconContentOpacityElement {...args} variant='text' content='Text' />\r
    </div>
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,y,x;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isQuare: true,
    content: 'X'
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var v,C,g;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...(g=(C=a.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const gt=["Default","Variants","Square","ClickCallsOnClick"];export{a as ClickCallsOnClick,e as Default,n as Square,r as Variants,gt as __namedExportsOrder,Ct as default};
