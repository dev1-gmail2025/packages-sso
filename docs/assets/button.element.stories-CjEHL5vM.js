import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{f as g}from"./index-DtL3pAzF.js";import{B as e}from"./button.element-CVeSDSI8.js";import"./typography.style-bTVGtiwd.js";import{b as p,P as k,a as u,d as L}from"./ckeditor-CL2xzRyo.js";import{S as B,g as R}from"./stack.style-BkTbjcfq.js";import"./time.util-BYguZ9lS.js";import{S as d}from"./Stack-DhAef_LI.js";import{T as m}from"./Typography-Bxxrk_XJ.js";import"./loading.component-DAQDtqS-.js";import"./CircularProgress-B9D4tC5t.js";import"./index-j62jqFia.js";import"./DefaultPropsProvider-CTbmx_9D.js";import"./defaultTheme-DeO7XLhv.js";import"./memoTheme-DEbB7Aqb.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./extendSxProp-CMsS_Ey0.js";import"./icon-button.element-CNKiJYQh.js";import"./icon.element-C1fGWKPB.js";import"./useTheme-B3rGZ43-.js";import"./IconButton-4XvBqZ2m.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-BDawOQvs.js";import"./useTimeout-BnjI5Ij7.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./isFocusVisible-B8k4qzLc.js";import"./icon-content-badge-subs.element-VEgDb-xd.js";import"./icon-content-badge.element-Dqp1Lhyu.js";import"./icon-content.element-BYFuMu0G.js";import"./other.util-DvZtTmt-.js";import"./Badge-BGqhrgA7.js";import"./useSlot-BVcC7tl7.js";import"./index-DP7gAqwz.js";import"./ownerWindow-v3EA2bPe.js";import"./useSlotProps-Coua_qTW.js";import"./createSvgIcon-Co-sBmU1.js";import"./proxy-DKXG_8Nh.js";import"./link.element-D3mcjqpT.js";import"./Stack-CPAJg9KB.js";import"./createStack-Du0yveyH.js";import"./Button-CI85eX1i.js";import"./image.element-B3vY-0Q6.js";import"./Box-CDdb2_uU.js";import"./InputLabel-dfS4B9dg.js";import"./useFormControl-CmOg5wnR.js";import"./index-C1XqMcs4.js";const j={content:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},variant:{control:"select",options:["text","outlined","contained"]},color:{control:"select",options:["inherit","primary","secondary","success","error","info","warning"]},size:{control:"select",options:["small","medium","large"]},startIcon:{control:!1},endIcon:{control:!1},onClick:{action:"clicked"}},hn={title:"Elements/Button/Button",component:e,tags:["autodocs"],args:{content:"Save changes",onClick:g(),variant:"contained",color:"primary"},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}},argTypes:j},i={args:{content:"Button"}},c={render:()=>{const a=["small","medium","large"],I=["contained","outlined","text"],h=["primary","success","warning","error","info"],s=({label:r,renderBtn:o})=>n.jsxs(B,{sx:{display:"grid",gridTemplateColumns:"160px repeat(3, 1fr)"},children:[n.jsx(m,{children:r}),a.map(t=>n.jsx(R,{children:o(t)},t))]}),D=({color:r})=>n.jsxs(d,{sx:{display:"grid",gap:p,padding:p,borderRadius:u},children:[n.jsx(m,{children:r}),I.map(o=>n.jsxs(d,{sx:{gap:L,border:"1px dashed rgba(0,0,0,0.08)",padding:k,borderRadius:u,background:"transparent"},children:[n.jsx(m,{children:o}),n.jsx(s,{label:"Enable",renderBtn:t=>n.jsx(e,{content:"Button",size:t,color:r,variant:o,onClick:g()})}),n.jsx(s,{label:"With icon",renderBtn:t=>n.jsx(e,{content:"Button",startIcon:"add",size:t,color:r,variant:o,onClick:g()})}),n.jsx(s,{label:"Loading",renderBtn:t=>n.jsx(e,{content:"Loading",loading:!0,size:t,color:r,variant:o})}),n.jsx(s,{label:"Disabled",renderBtn:t=>n.jsx(e,{content:"Disabled",disabled:!0,size:t,color:r,variant:o})})]},o))]});return n.jsx(d,{sx:{display:"grid",gap:p},children:h.map(r=>n.jsx(D,{color:r},r))})},parameters:{layout:"fullscreen"}},l={render:a=>n.jsxs(B,{sx:{display:"flex",gap:k,flexWrap:"wrap"},children:[n.jsx(e,{...a,startIcon:"add",content:"Add item"}),n.jsx(e,{...a,endIcon:"arrow_forward",content:"Continue"}),n.jsx(e,{...a,startIcon:"save",endIcon:"check",content:"Save & Check"})]})};var x,S,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    content: 'Button'
  }
}`,...(y=(S=i.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var E,b,A;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(A=(b=c.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var _,f,T;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <StackRow sx={{
    display: 'flex',
    gap: STYLE.PADDING_GAP_ITEM,
    flexWrap: 'wrap'
  }}>\r
      <ButtonElement {...args} startIcon='add' content='Add item' />\r
      <ButtonElement {...args} endIcon='arrow_forward' content='Continue' />\r
      <ButtonElement {...args} startIcon='save' endIcon='check' content='Save & Check' />\r
    </StackRow>
}`,...(T=(f=l.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const Dn=["Default","GalleryMatrix","WithIcons"];export{i as Default,c as GalleryMatrix,l as WithIcons,Dn as __namedExportsOrder,hn as default};
