import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as R,w as H,u as M,e as P}from"./index-DtL3pAzF.js";import{B as t}from"./button.element-Cwo7JrCq.js";import"./FileSaver.min-sVBIqHNu.js";import"./index-j62jqFia.js";import"./style.const-CSB1CXgR.js";import"./time.util-DFcg3e45.js";import"./loading.component-gddaglL7.js";import"./typography.style-BVG67HsI.js";import"./image.element-BW2lcbhc.js";import"./stack.style-TwFSz3b5.js";import"./DefaultPropsProvider-Brxq0OUc.js";import"./defaultTheme-CiSRXe73.js";import"./Stack-BlQw5Kbs.js";import"./createStack-BCgsFCsU.js";import"./extendSxProp-QnK7WPWm.js";import"./index-C8adVhmr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-eMA7PP5Z.js";import"./Box-CVD-5lJz.js";import"./InputLabel-YLDDHG1v.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-CYkJVmdl.js";import"./Typography-CjbH1rA4.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-i5g2ofOC.js";import"./color.const-D0XZ47LU.js";import"./CircularProgress-BUaXLBBs.js";import"./icon-button.element-CESAIvFV.js";import"./icon.element-DswLMzJj.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-RoDX6TIe.js";import"./useTimeout-1tU6oJ84.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-DZ6IQk00.js";import"./icon-content-badge.element-DEloHJ2p.js";import"./icon-content.element-CVd6EVlr.js";import"./Badge-CMbUSK4D.js";import"./useSlot-DBQWuDEP.js";import"./ownerWindow-DTuM7CMd.js";import"./useSlotProps-_-7fWPp0.js";import"./createSvgIcon-BqnXePOd.js";import"./proxy-DKXG_8Nh.js";import"./Button-Bw6dTtTN.js";const V={content:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},variant:{control:"select",options:["text","outlined","contained"]},color:{control:"select",options:["inherit","primary","secondary","success","error","info","warning"]},size:{control:"select",options:["small","medium","large"]},startIcon:{control:!1},endIcon:{control:!1},onClick:{action:"clicked"}},_n={title:"Elements/Button/Button",component:t,tags:["autodocs"],args:{content:"Save changes",onClick:R(),variant:"contained",color:"primary"},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}},argTypes:V},r={args:{content:"Button"}},o={render:n=>e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[e.jsx(t,{...n,variant:"contained",content:"Contained"}),e.jsx(t,{...n,variant:"outlined",content:"Outlined"}),e.jsx(t,{...n,variant:"text",content:"Text"})]})},a={render:n=>e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[e.jsx(t,{...n,color:"primary",content:"Primary"}),e.jsx(t,{...n,color:"secondary",content:"Secondary"}),e.jsx(t,{...n,color:"success",content:"Success"}),e.jsx(t,{...n,color:"warning",content:"Warning"}),e.jsx(t,{...n,color:"error",content:"Error"}),e.jsx(t,{...n,color:"info",content:"Info"})]})},s={render:n=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{...n,size:"small",content:"Small"}),e.jsx(t,{...n,size:"medium",content:"Medium"}),e.jsx(t,{...n,size:"large",content:"Large"})]})},c={render:n=>e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[e.jsx(t,{...n,startIcon:"add",content:"Add item"}),e.jsx(t,{...n,endIcon:"arrow_forward",content:"Continue"}),e.jsx(t,{...n,startIcon:"save",endIcon:"check",content:"Save & Check"})]})},i={args:{loading:!0,content:"Saving..."},parameters:{chromatic:{delay:300}}},l={args:{disabled:!0,content:"Disabled"}},m={play:async({canvasElement:n,args:_})=>{const A=H(n).getByRole("button");await M.click(A),await P(_.onClick).toHaveBeenCalledTimes(1)}};var p,d,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    content: 'Button'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,x,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>\r
      <ButtonElement {...args} variant='contained' content='Contained' />\r
      <ButtonElement {...args} variant='outlined' content='Outlined' />\r
      <ButtonElement {...args} variant='text' content='Text' />\r
    </div>
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,f,B;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>\r
      <ButtonElement {...args} color='primary' content='Primary' />\r
      <ButtonElement {...args} color='secondary' content='Secondary' />\r
      <ButtonElement {...args} color='success' content='Success' />\r
      <ButtonElement {...args} color='warning' content='Warning' />\r
      <ButtonElement {...args} color='error' content='Error' />\r
      <ButtonElement {...args} color='info' content='Info' />\r
    </div>
}`,...(B=(f=a.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var E,w,S;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <ButtonElement {...args} size='small' content='Small' />\r
      <ButtonElement {...args} size='medium' content='Medium' />\r
      <ButtonElement {...args} size='large' content='Large' />\r
    </div>
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var j,C,h;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>\r
      <ButtonElement {...args} startIcon='add' content='Add item' />\r
      <ButtonElement {...args} endIcon='arrow_forward' content='Continue' />\r
      <ButtonElement {...args} startIcon='save' endIcon='check' content='Save & Check' />\r
    </div>
}`,...(h=(C=c.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var b,I,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    loading: true,
    content: 'Saving...'
  },
  parameters: {
    // deterministic snapshot: spinner only
    chromatic: {
      delay: 300
    }
  }
}`,...(k=(I=i.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var W,z,D;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    disabled: true,
    content: 'Disabled'
  }
}`,...(D=(z=l.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var T,O,L;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole('button');
    await userEvent.click(btn);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...(L=(O=m.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};const An=["Default","Variants","Colors","Sizes","WithIcons","Loading","Disabled","ClickCallsOnClick"];export{m as ClickCallsOnClick,a as Colors,r as Default,l as Disabled,i as Loading,s as Sizes,o as Variants,c as WithIcons,An as __namedExportsOrder,_n as default};
