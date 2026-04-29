import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{f as k,w as B,u as O,e as w}from"./index-DtL3pAzF.js";import{B as i}from"./button-icon-content-opacity.element-BDSjm2fM.js";import"./index-j62jqFia.js";/* empty css               */import"./FileSaver.min-DK9gSEGX.js";import"./time.util-BYguZ9lS.js";import"./loading.component-CNPsKUVV.js";import"./typography.style-BuPQcHCI.js";import"./image.element-D5PhqCaM.js";import"./stack.style-CGxIkQ-3.js";import"./memoTheme-JcuT4PI6.js";import"./defaultTheme-CAzuqlo8.js";import"./DefaultPropsProvider-BwONcEM9.js";import"./Stack-BWemv0CO.js";import"./createStack-_FjnXW6X.js";import"./extendSxProp-BhkXlpcg.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme--firQ3HK.js";import"./Box-CJND6-sR.js";import"./InputLabel-Xf4L_974.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-BIiOul_5.js";import"./Typography-Bf8WTvH-.js";import"./index-F4SWrtxx.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-wHDaNs8P.js";import"./CircularProgress-SwCU_jrE.js";import"./icon-button.element-DnJxtSN_.js";import"./icon.element-CXpbt3XJ.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-DMmz3Ngg.js";import"./useTimeout-BnjI5Ij7.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-B371fkJb.js";import"./tooltip-on-click.element-DkCofoav.js";import"./getReactElementRef-BVRziQZO.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./Grow-DOIJXnb6.js";import"./useSlot-BHAemyrm.js";import"./Tooltip-C-jnBW1Q.js";import"./useControlled-CdETZoY_.js";import"./icon-content-badge.element-q5wmTKFZ.js";import"./icon-content.element-BdQZb-ha.js";import"./Badge-4F4pJWAG.js";import"./ownerWindow-SaFBzm43.js";import"./createSvgIcon-CgF2gLAa.js";import"./proxy-DKXG_8Nh.js";import"./Button-oCoBaHSt.js";const j={icon:{control:"text"},content:{control:"text"},permission:{control:"boolean"},isQuare:{control:"boolean"},variant:{control:"select",options:["text","outlined","contained"]},color:{control:"select",options:["inherit","primary","secondary","success","error","info","warning"]},onClick:{action:"clicked"}},jt={title:"Elements/Button/ButtonIconContentOpacityElement",component:i,tags:["autodocs"],args:{icon:"delete",content:"Delete",onClick:k(),variant:"outlined",color:"error"},parameters:{layout:"centered",chromatic:{delay:300}},argTypes:j},r={},e={render:t=>o.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[o.jsx(i,{...t,variant:"contained",content:"Contained"}),o.jsx(i,{...t,variant:"outlined",content:"Outlined"}),o.jsx(i,{...t,variant:"text",content:"Text"})]})},n={args:{isQuare:!0,content:"X"}},a={play:async({canvasElement:t,args:f})=>{const E=B(t);await O.click(E.getByRole("button")),await w(f.onClick).toHaveBeenCalledTimes(1)}};var s,c,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,l,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>\r
      <ButtonIconContentOpacityElement {...args} variant="contained" content="Contained" />\r
      <ButtonIconContentOpacityElement {...args} variant="outlined" content="Outlined" />\r
      <ButtonIconContentOpacityElement {...args} variant="text" content="Text" />\r
    </div>
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,y,x;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(C=a.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const It=["Default","Variants","Square","ClickCallsOnClick"];export{a as ClickCallsOnClick,r as Default,n as Square,e as Variants,It as __namedExportsOrder,jt as default};
