import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{f as k,w as B,u as O,e as w}from"./index-DtL3pAzF.js";import{B as i}from"./button-icon-content-opacity.element-DFkT1mvb.js";import"./index-j62jqFia.js";import"./FileSaver.min-BEy-8JuY.js";import"./style.const-CsvflsKM.js";import"./time.util-BYguZ9lS.js";import"./loading.component-BOMoI3yk.js";import"./typography.style-DgLDqklx.js";import"./image.element-_rX6YKJV.js";import"./stack.style-B6QTTFWW.js";import"./memoTheme-DEbB7Aqb.js";import"./defaultTheme-DeO7XLhv.js";import"./DefaultPropsProvider-CTbmx_9D.js";import"./Stack-CPAJg9KB.js";import"./createStack-Du0yveyH.js";import"./extendSxProp-CMsS_Ey0.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-B3rGZ43-.js";import"./Box-CDdb2_uU.js";import"./InputLabel-dfS4B9dg.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-D3mcjqpT.js";import"./Typography-Bxxrk_XJ.js";import"./index-C1XqMcs4.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-qz7Ku6OH.js";import"./CircularProgress-B9D4tC5t.js";import"./icon-button.element-Cyo9Fr96.js";import"./icon.element-8FWaY4mn.js";import"./IconButton-4XvBqZ2m.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-BDawOQvs.js";import"./useTimeout-BnjI5Ij7.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-Detd2l8A.js";import"./icon-content-badge.element-CmEZhmeb.js";import"./icon-content.element-iPPcdPQs.js";import"./Badge-BGqhrgA7.js";import"./useSlot-BVcC7tl7.js";import"./ownerWindow-v3EA2bPe.js";import"./useSlotProps-Coua_qTW.js";import"./createSvgIcon-Co-sBmU1.js";import"./proxy-DKXG_8Nh.js";import"./Button-CI85eX1i.js";const j={icon:{control:"text"},content:{control:"text"},permission:{control:"boolean"},isQuare:{control:"boolean"},variant:{control:"select",options:["text","outlined","contained"]},color:{control:"select",options:["inherit","primary","secondary","success","error","info","warning"]},onClick:{action:"clicked"}},Et={title:"Elements/Button/ButtonIconContentOpacityElement",component:i,tags:["autodocs"],args:{icon:"delete",content:"Delete",onClick:k(),variant:"outlined",color:"error"},parameters:{layout:"centered",chromatic:{delay:300}},argTypes:j},e={},r={render:t=>o.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[o.jsx(i,{...t,variant:"contained",content:"Contained"}),o.jsx(i,{...t,variant:"outlined",content:"Outlined"}),o.jsx(i,{...t,variant:"text",content:"Text"})]})},n={args:{isQuare:!0,content:"X"}},a={play:async({canvasElement:t,args:f})=>{const E=B(t);await O.click(E.getByRole("button")),await w(f.onClick).toHaveBeenCalledTimes(1)}};var s,c,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,l,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(C=a.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const kt=["Default","Variants","Square","ClickCallsOnClick"];export{a as ClickCallsOnClick,e as Default,n as Square,r as Variants,kt as __namedExportsOrder,Et as default};
