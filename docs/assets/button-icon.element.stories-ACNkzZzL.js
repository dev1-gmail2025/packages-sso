import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{f as I,w as T,u as k,e as B}from"./index-DtL3pAzF.js";/* empty css               */import{b as L}from"./FileSaver.min-DeWzra_O.js";import"./time.util-BYguZ9lS.js";import{B as e}from"./button-icon.element-vp-kl58X.js";import{S as w}from"./Stack-E1-rQfxm.js";import"./index-j62jqFia.js";import"./loading.component-G2mCPfpb.js";import"./typography.style-DaHWfrXt.js";import"./image.element-CGEVRbjD.js";import"./stack.style-B_rdEn3Q.js";import"./memoTheme-HOUyZqrd.js";import"./defaultTheme-BGAZNSBz.js";import"./DefaultPropsProvider-BVc36nx7.js";import"./Stack-Up7TlUQf.js";import"./index-3f0Hh3Ub.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-BcF2JLY5.js";import"./Box-CNziy5N6.js";import"./InputLabel-BMPpu4_O.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-BfA8Monr.js";import"./Typography-CDoNwpf8.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-D9YVsPVQ.js";import"./CircularProgress-CBGHLSb1.js";import"./tooltip-on-click.element-Bbda5Vu_.js";import"./useForkRef-BVpE-hzr.js";import"./getReactElementRef-BVRziQZO.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./useTimeout-B9dDFdNe.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./Grow-Dtpwe2QC.js";import"./useSlot-DiW1_K6U.js";import"./Tooltip-mLaLfpgP.js";import"./useId-CFSqmtgZ.js";import"./icon-content-badge-subs.element-D-esoqNu.js";import"./icon.element-YmY5LNRm.js";import"./icon-content-badge.element-a8oPflna.js";import"./icon-content.element-Blz3jQtF.js";import"./Badge-CDUJ6Vev.js";import"./ownerWindow-BMbJ5sQi.js";import"./createSvgIcon-Bxbv8U67.js";import"./ButtonBase-BG16-y-d.js";import"./proxy-DKXG_8Nh.js";import"./Button-BUMS_kt5.js";const j={icon:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},variant:{control:"select",options:["text","outlined","contained"]},color:{control:"select",options:["inherit","primary","secondary","success","error","info","warning"]},size:{control:"select",options:["small","medium","large"]},sizeType:{control:"select",options:["CIRCLE","SQUARE","FULL_WIDTH"]},onClick:{action:"clicked"}},Bt={title:"Elements/Button/ButtonIconElement",component:e,tags:["autodocs"],args:{icon:"edit",onClick:I(),variant:"outlined",color:"primary"},parameters:{layout:"centered"},argTypes:j},o={},a={render:r=>t.jsxs(w,{gap:L,children:[t.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[t.jsx(e,{...r,variant:"contained"}),t.jsx(e,{...r,variant:"outlined"}),t.jsx(e,{...r,variant:"text"})]}),t.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[t.jsx(e,{...r,variant:"contained",sizeType:"CIRCLE"}),t.jsx(e,{...r,variant:"outlined",sizeType:"CIRCLE"}),t.jsx(e,{...r,variant:"text",sizeType:"CIRCLE"})]})]})},i={args:{loading:!0},parameters:{chromatic:{delay:300}}},n={play:async({canvasElement:r,args:E})=>{const f=T(r);await k.click(f.getByRole("button")),await B(E.onClick).toHaveBeenCalledTimes(1)}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,l,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Stack gap={STYLE.PADDING_GAP_LAYOUT}>\r
      <div style={{
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }}>\r
        <ButtonIconElement {...args} variant="contained" />\r
        <ButtonIconElement {...args} variant="outlined" />\r
        <ButtonIconElement {...args} variant="text" />\r
      </div>\r
      <div style={{
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }}>\r
        <ButtonIconElement {...args} variant="contained" sizeType={'CIRCLE'} />\r
        <ButtonIconElement {...args} variant="outlined" sizeType={'CIRCLE'} />\r
        <ButtonIconElement {...args} variant="text" sizeType={'CIRCLE'} />\r
      </div>\r
    </Stack>
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,v;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  parameters: {
    chromatic: {
      delay: 300
    }
  }
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,y,C;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const Lt=["Default","Variants","Loading","ClickCallsOnClick"];export{n as ClickCallsOnClick,o as Default,i as Loading,a as Variants,Lt as __namedExportsOrder,Bt as default};
