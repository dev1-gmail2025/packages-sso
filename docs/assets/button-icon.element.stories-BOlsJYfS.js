import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{f as T,w as k,u as B,e as S}from"./index-DtL3pAzF.js";import{B as o}from"./button-icon.element-DIKW5t1K.js";import"./image-content-caption.component-CjShK_P3.js";import{I as p}from"./image.element-BW2lcbhc.js";import"./FileSaver.min-sVBIqHNu.js";import{g as j}from"./style.const-CSB1CXgR.js";import"./time.util-DFcg3e45.js";import{S as w}from"./Stack-BMkDETZf.js";import"./loading.component-gddaglL7.js";import"./typography.style-BVG67HsI.js";import"./DefaultPropsProvider-Brxq0OUc.js";import"./defaultTheme-CiSRXe73.js";import"./index-j62jqFia.js";import"./Box-CVD-5lJz.js";import"./extendSxProp-QnK7WPWm.js";import"./InputLabel-YLDDHG1v.js";import"./useTheme-eMA7PP5Z.js";import"./useFormControl-CmOg5wnR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./link.element-CYkJVmdl.js";import"./Typography-CjbH1rA4.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-i5g2ofOC.js";import"./color.const-D0XZ47LU.js";import"./stack.style-TwFSz3b5.js";import"./Stack-BlQw5Kbs.js";import"./createStack-BCgsFCsU.js";import"./index-C8adVhmr.js";import"./CircularProgress-BUaXLBBs.js";import"./icon-button.element-CESAIvFV.js";import"./icon.element-DswLMzJj.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-RoDX6TIe.js";import"./useTimeout-1tU6oJ84.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-DZ6IQk00.js";import"./icon-content-badge.element-DEloHJ2p.js";import"./icon-content.element-CVd6EVlr.js";import"./Badge-CMbUSK4D.js";import"./useSlot-DBQWuDEP.js";import"./ownerWindow-DTuM7CMd.js";import"./useSlotProps-_-7fWPp0.js";import"./createSvgIcon-BqnXePOd.js";import"./proxy-DKXG_8Nh.js";import"./Button-Bw6dTtTN.js";import"./avatar-online-status.element-oksSvmTg.js";import"./avatar.element-S4asLo1S.js";import"./Tooltip-pSKwotpI.js";import"./useControlled-CdETZoY_.js";import"./getReactElementRef-CJ1MGg2c.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./Grow-BH2Uzhjw.js";import"./avatar-user-info.element-Cf-MWsj5.js";import"./typography-content-caption.component-Dthvg_z3.js";import"./typography-grid-info-row.component-DcjDiekN.js";import"./typography-info-row.component-DWsjt5s5.js";import"./typography-info-user.component-b55gyOhx.js";import"./text-highlight.element-CSkKv_H9.js";import"./Select-BGXSfyCj.js";import"./mergeSlotProps-Bfz0OzkQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-CPtln8nk.js";import"./List-CuT84JTO.js";import"./FormControl-BydE9C3D.js";import"./isMuiElement-BY4WSVWD.js";import"./text-field-label.element-rSZbf_kT.js";import"./typography-limit-one-line.component-BArYBtLz.js";const z={icon:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},variant:{control:"select",options:["text","outlined","contained"]},color:{control:"select",options:["inherit","primary","secondary","success","error","info","warning"]},size:{control:"select",options:["small","medium","large"]},sizeType:{control:"select",options:Object.values(p)},onClick:{action:"clicked"}},qt={title:"Elements/Button/ButtonIconElement",component:o,tags:["autodocs"],args:{icon:"edit",onClick:T(),variant:"outlined",color:"primary"},parameters:{layout:"centered"},argTypes:z},e={},a={render:r=>t.jsxs(w,{gap:j,children:[t.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[t.jsx(o,{...r,variant:"contained"}),t.jsx(o,{...r,variant:"outlined"}),t.jsx(o,{...r,variant:"text"})]}),t.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[t.jsx(o,{...r,variant:"contained",sizeType:p.CIRCLE}),t.jsx(o,{...r,variant:"outlined",sizeType:p.CIRCLE}),t.jsx(o,{...r,variant:"text",sizeType:p.CIRCLE})]})]})},i={args:{loading:!0},parameters:{chromatic:{delay:300}}},n={play:async({canvasElement:r,args:I})=>{const f=k(r);await B.click(f.getByRole("button")),await S(I.onClick).toHaveBeenCalledTimes(1)}};var s,m,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,d,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Stack gap={STYLE.PADDING_GAP_LAYOUT}>\r
      <div style={{
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }}>\r
        <ButtonIconElement {...args} variant='contained' />\r
        <ButtonIconElement {...args} variant='outlined' />\r
        <ButtonIconElement {...args} variant='text' />\r
      </div>\r
      <div style={{
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }}>\r
        <ButtonIconElement {...args} variant='contained' sizeType={ImageSizeType.CIRCLE} />\r
        <ButtonIconElement {...args} variant='outlined' sizeType={ImageSizeType.CIRCLE} />\r
        <ButtonIconElement {...args} variant='text' sizeType={ImageSizeType.CIRCLE} />\r
      </div>\r
    </Stack>
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,y,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  parameters: {
    chromatic: {
      delay: 300
    }
  }
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,C,E;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...(E=(C=n.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const Ft=["Default","Variants","Loading","ClickCallsOnClick"];export{n as ClickCallsOnClick,e as Default,i as Loading,a as Variants,Ft as __namedExportsOrder,qt as default};
