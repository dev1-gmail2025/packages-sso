import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{f as k,w as B,u as O,e as w}from"./index-DtL3pAzF.js";import{B as i}from"./button-icon-content-opacity.element-BLqsTjk7.js";import"./index-j62jqFia.js";import"./FileSaver.min-sVBIqHNu.js";import"./style.const-DwIRAWA_.js";import"./time.util-BYguZ9lS.js";import"./loading.component-nvtJrNAz.js";import"./typography.style-Db92pt08.js";import"./image.element-11dKFs33.js";import"./stack.style-CoSEZ8py.js";import"./DefaultPropsProvider-DU9SanKz.js";import"./defaultTheme-D-jjqFHx.js";import"./Stack--5Dd26sT.js";import"./createStack-C_KW5WTO.js";import"./extendSxProp-Cmw4pgNu.js";import"./index-C8adVhmr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-0nskcD3X.js";import"./Box-0U_G7eaK.js";import"./InputLabel-CY3ncLPD.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-CZ8YGlXk.js";import"./Typography-crO-zzKF.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-Cr6OT-HE.js";import"./color.const-Dil5I3Au.js";import"./CircularProgress-6STgtAQ1.js";import"./icon-button.element-BecJaPZD.js";import"./icon.element-C1lSNNtD.js";import"./IconButton-QbJpFgcV.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-CJf4BqqU.js";import"./useTimeout-Ck7_m_Mv.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-CO7-Qq6G.js";import"./icon-content-badge.element-DInq380v.js";import"./icon-content.element-ipXuh9vB.js";import"./Badge-C7vkf73i.js";import"./useSlot-DxC6qITw.js";import"./ownerWindow-BsA78Dfr.js";import"./useSlotProps-BVs4F9FP.js";import"./createSvgIcon-DaUmNjHb.js";import"./proxy-DKXG_8Nh.js";import"./Button-O5fh8gd8.js";const j={icon:{control:"text"},content:{control:"text"},permission:{control:"boolean"},isQuare:{control:"boolean"},variant:{control:"select",options:["text","outlined","contained"]},color:{control:"select",options:["inherit","primary","secondary","success","error","info","warning"]},onClick:{action:"clicked"}},gt={title:"Elements/Button/ButtonIconContentOpacityElement",component:i,tags:["autodocs"],args:{icon:"delete",content:"Delete",onClick:k(),variant:"outlined",color:"error"},parameters:{layout:"centered",chromatic:{delay:300}},argTypes:j},e={},r={render:t=>o.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[o.jsx(i,{...t,variant:"contained",content:"Contained"}),o.jsx(i,{...t,variant:"outlined",content:"Outlined"}),o.jsx(i,{...t,variant:"text",content:"Text"})]})},n={args:{isQuare:!0,content:"X"}},a={play:async({canvasElement:t,args:f})=>{const E=B(t);await O.click(E.getByRole("button")),await w(f.onClick).toHaveBeenCalledTimes(1)}};var s,c,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,l,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>\r
      <ButtonIconContentOpacityElement {...args} variant="contained" content="Contained" />\r
      <ButtonIconContentOpacityElement {...args} variant="outlined" content="Outlined" />\r
      <ButtonIconContentOpacityElement {...args} variant="text" content="Text" />\r
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
}`,...(g=(C=a.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const ft=["Default","Variants","Square","ClickCallsOnClick"];export{a as ClickCallsOnClick,e as Default,n as Square,r as Variants,ft as __namedExportsOrder,gt as default};
