import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{f as k,w as $,u as nn,e as en}from"./index-DtL3pAzF.js";import{B as r}from"./button.element-CkLa_yOl.js";import"./typography.style-5p4mAP45.js";import"./FileSaver.min-qO50DWaS.js";import{e as f,P as c,c as T,a as rn}from"./style.const-BEc60t3d.js";import{S as i,g as tn}from"./stack.style-3g9MghS9.js";import"./time.util-BYguZ9lS.js";import{S as b}from"./Stack-B-ruLY4g.js";import{T as B}from"./Typography-crO-zzKF.js";import"./loading.component-S3qDmGL_.js";import"./CircularProgress-6STgtAQ1.js";import"./index-j62jqFia.js";import"./DefaultPropsProvider-DU9SanKz.js";import"./defaultTheme-D-jjqFHx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./extendSxProp-Cmw4pgNu.js";import"./icon-button.element-DSqCAcY-.js";import"./icon.element-DY883Lh8.js";import"./useTheme-0nskcD3X.js";import"./IconButton-QbJpFgcV.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-CJf4BqqU.js";import"./useTimeout-Ck7_m_Mv.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./isFocusVisible-B8k4qzLc.js";import"./icon-content-badge-subs.element-DptrZFAR.js";import"./icon-content-badge.element-BBJthHBz.js";import"./icon-content.element-IytVD2TA.js";import"./other.util--jMzTe1B.js";import"./color.const-CRNucSci.js";import"./Badge-C7vkf73i.js";import"./useSlot-DxC6qITw.js";import"./index-C8adVhmr.js";import"./ownerWindow-BsA78Dfr.js";import"./useSlotProps-BVs4F9FP.js";import"./createSvgIcon-DaUmNjHb.js";import"./proxy-DKXG_8Nh.js";import"./link.element-CZ8YGlXk.js";import"./Stack--5Dd26sT.js";import"./createStack-C_KW5WTO.js";import"./Button-O5fh8gd8.js";import"./image.element-CDIp0qQC.js";import"./Box-0U_G7eaK.js";import"./InputLabel-CY3ncLPD.js";import"./useFormControl-CmOg5wnR.js";const on={content:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},variant:{control:"select",options:["text","outlined","contained"]},color:{control:"select",options:["inherit","primary","secondary","success","error","info","warning"]},size:{control:"select",options:["small","medium","large"]},startIcon:{control:!1},endIcon:{control:!1},onClick:{action:"clicked"}},$n={title:"Elements/Button/Button",component:r,tags:["autodocs"],args:{content:"Save changes",onClick:k(),variant:"contained",color:"primary"},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}},argTypes:on},l={args:{content:"Button"}},d={render:()=>{const e=["small","medium","large"],E=["contained","outlined","text"],A=["primary","success","warning","error","info"],s=({label:t,renderBtn:a})=>n.jsxs(i,{sx:{display:"grid",gridTemplateColumns:"160px repeat(3, 1fr)"},children:[n.jsx(B,{children:t}),e.map(o=>n.jsx(tn,{children:a(o)},o))]}),Z=({color:t})=>n.jsxs(b,{sx:{display:"grid",gap:f,padding:f,borderRadius:T},children:[n.jsx(B,{children:t}),E.map(a=>n.jsxs(b,{sx:{gap:rn,border:"1px dashed rgba(0,0,0,0.08)",padding:c,borderRadius:T,background:"transparent"},children:[n.jsx(B,{children:a}),n.jsx(s,{label:"Enable",renderBtn:o=>n.jsx(r,{content:"Button",size:o,color:t,variant:a,onClick:k()})}),n.jsx(s,{label:"With icon",renderBtn:o=>n.jsx(r,{content:"Button",startIcon:"add",size:o,color:t,variant:a,onClick:k()})}),n.jsx(s,{label:"Loading",renderBtn:o=>n.jsx(r,{content:"Loading",loading:!0,size:o,color:t,variant:a})}),n.jsx(s,{label:"Disabled",renderBtn:o=>n.jsx(r,{content:"Disabled",disabled:!0,size:o,color:t,variant:a})})]},a))]});return n.jsx(b,{sx:{display:"grid",gap:f},children:A.map(t=>n.jsx(Z,{color:t},t))})},parameters:{layout:"fullscreen"}},p={render:e=>n.jsxs(i,{sx:{display:"flex",gap:c,flexWrap:"wrap"},children:[n.jsx(r,{...e,variant:"contained",content:"Contained"}),n.jsx(r,{...e,variant:"outlined",content:"Outlined"}),n.jsx(r,{...e,variant:"text",content:"Text"})]})},m={render:e=>n.jsxs(i,{sx:{display:"flex",gap:c,flexWrap:"wrap"},children:[n.jsx(r,{...e,color:"primary",content:"Primary"}),n.jsx(r,{...e,color:"secondary",content:"Secondary"}),n.jsx(r,{...e,color:"success",content:"Success"}),n.jsx(r,{...e,color:"warning",content:"Warning"}),n.jsx(r,{...e,color:"error",content:"Error"}),n.jsx(r,{...e,color:"info",content:"Info"})]})},u={render:e=>n.jsxs(i,{sx:{display:"flex",gap:c,flexWrap:"wrap"},children:[n.jsx(r,{...e,size:"small",content:"Small"}),n.jsx(r,{...e,size:"medium",content:"Medium"}),n.jsx(r,{...e,size:"large",content:"Large"})]})},g={render:e=>n.jsxs(i,{sx:{display:"flex",gap:c,flexWrap:"wrap"},children:[n.jsx(r,{...e,startIcon:"add",content:"Add item"}),n.jsx(r,{...e,endIcon:"arrow_forward",content:"Continue"}),n.jsx(r,{...e,startIcon:"save",endIcon:"check",content:"Save & Check"})]})},x={args:{loading:!0,content:"Saving..."},parameters:{chromatic:{delay:300}}},S={args:{disabled:!0,content:"Disabled"}},y={play:async({canvasElement:e,args:E})=>{const s=$(e).getByRole("button");await nn.click(s),await en(E.onClick).toHaveBeenCalledTimes(1)}};var w,D,I;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    content: 'Button'
  }
}`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var _,h,j;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const sizes = ['small', 'medium', 'large'] as const;
    const variants = ['contained', 'outlined', 'text'] as const;
    const colors = ['primary', 'success', 'warning', 'error', 'info'] as const;
    const Row: React.FC<{
      label: string;
      renderBtn: (sz: typeof sizes[number]) => React.ReactNode;
    }> = ({
      label,
      renderBtn
    }) => <StackRow sx={{
      display: 'grid',
      gridTemplateColumns: '160px repeat(3, 1fr)'
    }}>\r
        <Typography>{label}</Typography>\r
        {sizes.map(size => <StackAlignCenter key={size}>{renderBtn(size)}</StackAlignCenter>)}\r
      </StackRow>;
    const Section: React.FC<{
      color: typeof colors[number];
    }> = ({
      color
    }) => <Stack sx={{
      display: 'grid',
      gap: STYLE.PADDING_GAP_LAYOUT,
      padding: STYLE.PADDING_GAP_LAYOUT,
      borderRadius: STYLE.BORDER_RADIUS_ELEMENT_SMALL
    }}>\r
        <Typography>{color}</Typography>\r
        {variants.map(variant => <Stack key={variant} sx={{
        gap: STYLE.PADDING_GAP_ITEM_SMALL,
        border: '1px dashed rgba(0,0,0,0.08)',
        padding: STYLE.PADDING_GAP_ITEM,
        borderRadius: STYLE.BORDER_RADIUS_ELEMENT_SMALL,
        background: 'transparent'
      }}>\r
            <Typography>{variant}</Typography>\r
            <Row label='Enable' renderBtn={size => <ButtonElement content='Button' size={size} color={color} variant={variant} onClick={fn()} />} />\r
            <Row label='With icon' renderBtn={size => <ButtonElement content='Button' startIcon='add' size={size} color={color} variant={variant} onClick={fn()} />} />\r
            <Row label='Loading' renderBtn={size => <ButtonElement content='Loading' loading size={size} color={color} variant={variant} />} />\r
            <Row label='Disabled' renderBtn={size => <ButtonElement content='Disabled' disabled size={size} color={color} variant={variant} />} />\r
          </Stack>)}\r
      </Stack>;
    return <Stack sx={{
      display: 'grid',
      gap: STYLE.PADDING_GAP_LAYOUT
    }}>\r
        {colors.map(color => <Section key={color} color={color} />)}\r
      </Stack>;
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...(j=(h=d.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var R,L,v;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <StackRow sx={{
    display: 'flex',
    gap: STYLE.PADDING_GAP_ITEM,
    flexWrap: 'wrap'
  }}>\r
      <ButtonElement {...args} variant='contained' content='Contained' />\r
      <ButtonElement {...args} variant='outlined' content='Outlined' />\r
      <ButtonElement {...args} variant='text' content='Text' />\r
    </StackRow>
}`,...(v=(L=p.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var C,z,P;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <StackRow sx={{
    display: 'flex',
    gap: STYLE.PADDING_GAP_ITEM,
    flexWrap: 'wrap'
  }}>\r
      <ButtonElement {...args} color='primary' content='Primary' />\r
      <ButtonElement {...args} color='secondary' content='Secondary' />\r
      <ButtonElement {...args} color='success' content='Success' />\r
      <ButtonElement {...args} color='warning' content='Warning' />\r
      <ButtonElement {...args} color='error' content='Error' />\r
      <ButtonElement {...args} color='info' content='Info' />\r
    </StackRow>
}`,...(P=(z=m.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var G,M,N;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <StackRow sx={{
    display: 'flex',
    gap: STYLE.PADDING_GAP_ITEM,
    flexWrap: 'wrap'
  }}>\r
      <ButtonElement {...args} size='small' content='Small' />\r
      <ButtonElement {...args} size='medium' content='Medium' />\r
      <ButtonElement {...args} size='large' content='Large' />\r
    </StackRow>
}`,...(N=(M=u.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var Y,W,O;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => <StackRow sx={{
    display: 'flex',
    gap: STYLE.PADDING_GAP_ITEM,
    flexWrap: 'wrap'
  }}>\r
      <ButtonElement {...args} startIcon='add' content='Add item' />\r
      <ButtonElement {...args} endIcon='arrow_forward' content='Continue' />\r
      <ButtonElement {...args} startIcon='save' endIcon='check' content='Save & Check' />\r
    </StackRow>
}`,...(O=(W=g.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var U,F,H;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(H=(F=x.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var V,q,J;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true,
    content: 'Disabled'
  }
}`,...(J=(q=S.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,X;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole('button');
    await userEvent.click(btn);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ne=["Default","GalleryMatrix","Variants","Colors","Sizes","WithIcons","Loading","Disabled","ClickCallsOnClick"];export{y as ClickCallsOnClick,m as Colors,l as Default,S as Disabled,d as GalleryMatrix,x as Loading,u as Sizes,p as Variants,g as WithIcons,ne as __namedExportsOrder,$n as default};
