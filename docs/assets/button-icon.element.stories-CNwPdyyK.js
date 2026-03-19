import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{f as T,w as k,u as B,e as S}from"./index-DtL3pAzF.js";import{B as o}from"./button-icon.element-SE1RUH-H.js";import"./image-content-caption.component-xufG9hww.js";import{I as p}from"./image.element-B2TI9ji2.js";import"./FileSaver.min-sVBIqHNu.js";import{h as j}from"./style.const-DcpvWNzF.js";import"./time.util-DFcg3e45.js";import{S as w}from"./Stack-DADfnJi4.js";import"./loading.component-C3-c4Wh3.js";import"./typography.style-CJiPh48M.js";import"./DefaultPropsProvider-CnpmPGLU.js";import"./defaultTheme-CbDHbYmC.js";import"./index-j62jqFia.js";import"./Box-DA9iinBb.js";import"./extendSxProp-COYDv-qt.js";import"./InputLabel-BOBPd_9J.js";import"./useTheme-BWrsGw5G.js";import"./useFormControl-CmOg5wnR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./link.element-_0gGO9Yn.js";import"./Typography-Cd5iZOo-.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-Cr6OT-HE.js";import"./color.const-Dil5I3Au.js";import"./stack.style-X5oYj0G_.js";import"./Stack-D52ta6Vs.js";import"./createStack-qJXewNdH.js";import"./index-C8adVhmr.js";import"./CircularProgress-Coy-df3c.js";import"./icon-button.element-CaQUJqOR.js";import"./icon.element-D4DES1ie.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-BlX2FUJJ.js";import"./useTimeout-Ck7_m_Mv.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-CAHzdJLk.js";import"./icon-content-badge.element-wIksfgwX.js";import"./icon-content.element-BR7SGJ8x.js";import"./Badge-Cc5_q6VK.js";import"./useSlot-BQkp07Oq.js";import"./ownerWindow-DHxNjUuV.js";import"./useSlotProps-hLfGuAdq.js";import"./createSvgIcon-B_gPDoaJ.js";import"./proxy-DKXG_8Nh.js";import"./Button-uIHv_tDy.js";import"./avatar-group.element-BSR71iXa.js";import"./avatar.element-CVd94xxW.js";import"./Tooltip-CGtrWyYV.js";import"./useControlled-CdETZoY_.js";import"./getReactElementRef-DcPXsDBP.js";import"./Grow-WIQzVnBU.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./utils-CH7VozHp.js";import"./Popover-Cl0DOJRt.js";import"./mergeSlotProps-Dl5OjG1I.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-C8gEJJRn.js";import"./avatar-online-status.element-B2adFrPb.js";import"./avatar-user-info-detail.element-Kzi-kR2U.js";import"./avatar-user-info-update.element-DKUFIUmf.js";import"./string.util-DkuOPhSi.js";import"./avatar-user-info.element-BO65rdF9.js";import"./typography-content-caption.component-BpI9JvGJ.js";import"./typography-grid-info-row.component-BWo4FEHU.js";import"./typography-info-row.component-B8PD_FM4.js";import"./typography-info-user.component-BpL0bg4Y.js";import"./text-highlight.element-DgPH2vIi.js";import"./Select-uZY_LI9p.js";import"./List-BJXr9lXR.js";import"./FormControl-DQ2X6SMN.js";import"./isMuiElement-BY4WSVWD.js";import"./text-field-label.element-eF7py91F.js";import"./typography-limit-one-line.component-x0oDkVxF.js";const z={icon:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},variant:{control:"select",options:["text","outlined","contained"]},color:{control:"select",options:["inherit","primary","secondary","success","error","info","warning"]},size:{control:"select",options:["small","medium","large"]},sizeType:{control:"select",options:Object.values(p)},onClick:{action:"clicked"}},Xt={title:"Elements/Button/ButtonIconElement",component:o,tags:["autodocs"],args:{icon:"edit",onClick:T(),variant:"outlined",color:"primary"},parameters:{layout:"centered"},argTypes:z},e={},i={render:r=>t.jsxs(w,{gap:j,children:[t.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[t.jsx(o,{...r,variant:"contained"}),t.jsx(o,{...r,variant:"outlined"}),t.jsx(o,{...r,variant:"text"})]}),t.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[t.jsx(o,{...r,variant:"contained",sizeType:p.CIRCLE}),t.jsx(o,{...r,variant:"outlined",sizeType:p.CIRCLE}),t.jsx(o,{...r,variant:"text",sizeType:p.CIRCLE})]})]})},a={args:{loading:!0},parameters:{chromatic:{delay:300}}},n={play:async({canvasElement:r,args:I})=>{const f=k(r);await B.click(f.getByRole("button")),await S(I.onClick).toHaveBeenCalledTimes(1)}};var s,m,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,d,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,y,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  parameters: {
    chromatic: {
      delay: 300
    }
  }
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,C,E;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...(E=(C=n.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const Zt=["Default","Variants","Loading","ClickCallsOnClick"];export{n as ClickCallsOnClick,e as Default,a as Loading,i as Variants,Zt as __namedExportsOrder,Xt as default};
