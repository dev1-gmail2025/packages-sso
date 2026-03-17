import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{f as k,w as B,u as O,e as w}from"./index-DtL3pAzF.js";import{B as i}from"./button-icon-content-opacity.element-CXgQ897m.js";import"./index-j62jqFia.js";import"./FileSaver.min-sVBIqHNu.js";import"./style.const-CSB1CXgR.js";import"./time.util-DFcg3e45.js";import"./loading.component-gddaglL7.js";import"./typography.style-BVG67HsI.js";import"./image.element-BW2lcbhc.js";import"./stack.style-TwFSz3b5.js";import"./DefaultPropsProvider-Brxq0OUc.js";import"./defaultTheme-CiSRXe73.js";import"./Stack-BlQw5Kbs.js";import"./createStack-BCgsFCsU.js";import"./extendSxProp-QnK7WPWm.js";import"./index-C8adVhmr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-eMA7PP5Z.js";import"./Box-CVD-5lJz.js";import"./InputLabel-YLDDHG1v.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-CYkJVmdl.js";import"./Typography-CjbH1rA4.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-i5g2ofOC.js";import"./color.const-D0XZ47LU.js";import"./CircularProgress-BUaXLBBs.js";import"./icon-button.element-CESAIvFV.js";import"./icon.element-DswLMzJj.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-RoDX6TIe.js";import"./useTimeout-1tU6oJ84.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-DZ6IQk00.js";import"./icon-content-badge.element-DEloHJ2p.js";import"./icon-content.element-CVd6EVlr.js";import"./Badge-CMbUSK4D.js";import"./useSlot-DBQWuDEP.js";import"./ownerWindow-DTuM7CMd.js";import"./useSlotProps-_-7fWPp0.js";import"./createSvgIcon-BqnXePOd.js";import"./proxy-DKXG_8Nh.js";import"./Button-Bw6dTtTN.js";const j={icon:{control:"text"},content:{control:"text"},permission:{control:"boolean"},isQuare:{control:"boolean"},variant:{control:"select",options:["text","outlined","contained"]},color:{control:"select",options:["inherit","primary","secondary","success","error","info","warning"]},onClick:{action:"clicked"}},Ct={title:"Elements/Button/ButtonIconContentOpacityElement",component:i,tags:["autodocs"],args:{icon:"delete",content:"Delete",onClick:k(),variant:"outlined",color:"error"},parameters:{layout:"centered",chromatic:{delay:300}},argTypes:j},e={},r={render:t=>o.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[o.jsx(i,{...t,variant:"contained",content:"Contained"}),o.jsx(i,{...t,variant:"outlined",content:"Outlined"}),o.jsx(i,{...t,variant:"text",content:"Text"})]})},n={args:{isQuare:!0,content:"X"}},a={play:async({canvasElement:t,args:f})=>{const E=B(t);await O.click(E.getByRole("button")),await w(f.onClick).toHaveBeenCalledTimes(1)}};var s,c,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,l,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
