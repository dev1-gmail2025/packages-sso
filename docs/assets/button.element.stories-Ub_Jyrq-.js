import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{f as R,w as H,u as M,e as P}from"./index-DtL3pAzF.js";import{B as r}from"./button.element-DY6WUqnk.js";import"./FileSaver.min-sVBIqHNu.js";import"./index-j62jqFia.js";import"./style.const-DwIRAWA_.js";import"./time.util-BYguZ9lS.js";import"./loading.component-nvtJrNAz.js";import"./typography.style-Db92pt08.js";import"./image.element-11dKFs33.js";import"./stack.style-CoSEZ8py.js";import"./DefaultPropsProvider-DU9SanKz.js";import"./defaultTheme-D-jjqFHx.js";import"./Stack--5Dd26sT.js";import"./createStack-C_KW5WTO.js";import"./extendSxProp-Cmw4pgNu.js";import"./index-C8adVhmr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-0nskcD3X.js";import"./Box-0U_G7eaK.js";import"./InputLabel-CY3ncLPD.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-CZ8YGlXk.js";import"./Typography-crO-zzKF.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-Cr6OT-HE.js";import"./color.const-Dil5I3Au.js";import"./CircularProgress-6STgtAQ1.js";import"./icon-button.element-BecJaPZD.js";import"./icon.element-C1lSNNtD.js";import"./IconButton-QbJpFgcV.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-CJf4BqqU.js";import"./useTimeout-Ck7_m_Mv.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-CO7-Qq6G.js";import"./icon-content-badge.element-DInq380v.js";import"./icon-content.element-ipXuh9vB.js";import"./Badge-C7vkf73i.js";import"./useSlot-DxC6qITw.js";import"./ownerWindow-BsA78Dfr.js";import"./useSlotProps-BVs4F9FP.js";import"./createSvgIcon-DaUmNjHb.js";import"./proxy-DKXG_8Nh.js";import"./Button-O5fh8gd8.js";const V={content:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},variant:{control:"select",options:["text","outlined","contained"]},color:{control:"select",options:["inherit","primary","secondary","success","error","info","warning"]},size:{control:"select",options:["small","medium","large"]},startIcon:{control:!1},endIcon:{control:!1},onClick:{action:"clicked"}},_e={title:"Elements/Button/Button",component:r,tags:["autodocs"],args:{content:"Save changes",onClick:R(),variant:"contained",color:"primary"},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}},argTypes:V},n={args:{content:"Button"}},o={render:e=>t.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[t.jsx(r,{...e,variant:"contained",content:"Contained"}),t.jsx(r,{...e,variant:"outlined",content:"Outlined"}),t.jsx(r,{...e,variant:"text",content:"Text"})]})},a={render:e=>t.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[t.jsx(r,{...e,color:"primary",content:"Primary"}),t.jsx(r,{...e,color:"secondary",content:"Secondary"}),t.jsx(r,{...e,color:"success",content:"Success"}),t.jsx(r,{...e,color:"warning",content:"Warning"}),t.jsx(r,{...e,color:"error",content:"Error"}),t.jsx(r,{...e,color:"info",content:"Info"})]})},s={render:e=>t.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",flexWrap:"wrap"},children:[t.jsx(r,{...e,size:"small",content:"Small"}),t.jsx(r,{...e,size:"medium",content:"Medium"}),t.jsx(r,{...e,size:"large",content:"Large"})]})},c={render:e=>t.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[t.jsx(r,{...e,startIcon:"add",content:"Add item"}),t.jsx(r,{...e,endIcon:"arrow_forward",content:"Continue"}),t.jsx(r,{...e,startIcon:"save",endIcon:"check",content:"Save & Check"})]})},i={args:{loading:!0,content:"Saving..."},parameters:{chromatic:{delay:300}}},l={args:{disabled:!0,content:"Disabled"}},m={play:async({canvasElement:e,args:_})=>{const A=H(e).getByRole("button");await M.click(A),await P(_.onClick).toHaveBeenCalledTimes(1)}};var p,d,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    content: 'Button'
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,x,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>\r
      <ButtonElement {...args} variant="contained" content="Contained" />\r
      <ButtonElement {...args} variant="outlined" content="Outlined" />\r
      <ButtonElement {...args} variant="text" content="Text" />\r
    </div>
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,f,B;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>\r
      <ButtonElement {...args} color="primary" content="Primary" />\r
      <ButtonElement {...args} color="secondary" content="Secondary" />\r
      <ButtonElement {...args} color="success" content="Success" />\r
      <ButtonElement {...args} color="warning" content="Warning" />\r
      <ButtonElement {...args} color="error" content="Error" />\r
      <ButtonElement {...args} color="info" content="Info" />\r
    </div>
}`,...(B=(f=a.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var E,w,S;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <ButtonElement {...args} size="small" content="Small" />\r
      <ButtonElement {...args} size="medium" content="Medium" />\r
      <ButtonElement {...args} size="large" content="Large" />\r
    </div>
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var j,C,h;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>\r
      <ButtonElement {...args} startIcon="add" content="Add item" />\r
      <ButtonElement {...args} endIcon="arrow_forward" content="Continue" />\r
      <ButtonElement {...args} startIcon="save" endIcon="check" content="Save & Check" />\r
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
}`,...(L=(O=m.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};const Ae=["Default","Variants","Colors","Sizes","WithIcons","Loading","Disabled","ClickCallsOnClick"];export{m as ClickCallsOnClick,a as Colors,n as Default,l as Disabled,i as Loading,s as Sizes,o as Variants,c as WithIcons,Ae as __namedExportsOrder,_e as default};
