import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{f as u}from"./index-DtL3pAzF.js";import{B as n}from"./button.element-BkGga3sV.js";import"./typography.style-CkWB8eZ1.js";import{b as p,P as h,a as g,d as L}from"./ckeditor-CTLCbsNz.js";import{S as k,h as R}from"./stack.style-yVtBqaKj.js";import"./time.util-BYguZ9lS.js";import{S as d}from"./Stack-PxG0HRcj.js";import{T as m}from"./Typography-Bf8WTvH-.js";import"./loading.component-EnOu9Ri6.js";import"./CircularProgress-SwCU_jrE.js";import"./index-j62jqFia.js";import"./DefaultPropsProvider-BwONcEM9.js";import"./defaultTheme-CAzuqlo8.js";import"./memoTheme-JcuT4PI6.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./extendSxProp-BhkXlpcg.js";import"./icon-button.element-CeM9eyxq.js";import"./icon.element-D4jnsA1U.js";import"./useTheme--firQ3HK.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-DMmz3Ngg.js";import"./useTimeout-BnjI5Ij7.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./isFocusVisible-B8k4qzLc.js";import"./icon-content-badge-subs.element-cCXQ9PVw.js";import"./link.element-BIiOul_5.js";import"./tooltip-on-click.element-DkCofoav.js";import"./getReactElementRef-BVRziQZO.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./Grow-DOIJXnb6.js";import"./useSlot-BHAemyrm.js";import"./Tooltip-C-jnBW1Q.js";import"./index-DP7gAqwz.js";import"./useControlled-CdETZoY_.js";import"./Box-CJND6-sR.js";import"./icon-content-badge.element-CGf3sbLu.js";import"./icon-content.element-DlSOyn8V.js";import"./other.util-D3ae_aVB.js";import"./Badge-4F4pJWAG.js";import"./ownerWindow-SaFBzm43.js";import"./createSvgIcon-CgF2gLAa.js";import"./proxy-DKXG_8Nh.js";import"./Stack-BWemv0CO.js";import"./createStack-_FjnXW6X.js";import"./Button-oCoBaHSt.js";import"./image.element-BzCya6VX.js";import"./InputLabel-Xf4L_974.js";import"./useFormControl-CmOg5wnR.js";import"./index-F4SWrtxx.js";const j={content:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},variant:{control:"select",options:["text","outlined","contained"]},color:{control:"select",options:["inherit","primary","secondary","success","error","info","warning"]},size:{control:"select",options:["small","medium","large"]},startIcon:{control:!1},endIcon:{control:!1},onClick:{action:"clicked"}},jr={title:"Elements/Button/Button",component:n,tags:["autodocs"],args:{content:"Save changes",onClick:u(),variant:"contained",color:"primary"},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}},argTypes:j},i={args:{content:"Button"}},c={render:()=>{const a=["small","medium","large"],B=["contained","outlined","text"],I=["primary","success","warning","error","info"],s=({label:t,renderBtn:e})=>r.jsxs(k,{sx:{display:"grid",gridTemplateColumns:"160px repeat(3, 1fr)"},children:[r.jsx(m,{children:t}),a.map(o=>r.jsx(R,{children:e(o)},o))]}),D=({color:t})=>r.jsxs(d,{sx:{display:"grid",gap:p,padding:p,borderRadius:g},children:[r.jsx(m,{children:t}),B.map(e=>r.jsxs(d,{sx:{gap:L,border:"1px dashed rgba(0,0,0,0.08)",padding:h,borderRadius:g,background:"transparent"},children:[r.jsx(m,{children:e}),r.jsx(s,{label:"Enable",renderBtn:o=>r.jsx(n,{content:"Button",size:o,color:t,variant:e,onClick:u()})}),r.jsx(s,{label:"With icon",renderBtn:o=>r.jsx(n,{content:"Button",startIcon:"add",size:o,color:t,variant:e,onClick:u()})}),r.jsx(s,{label:"Loading",renderBtn:o=>r.jsx(n,{content:"Loading",loading:!0,size:o,color:t,variant:e})}),r.jsx(s,{label:"Disabled",renderBtn:o=>r.jsx(n,{content:"Disabled",disabled:!0,size:o,color:t,variant:e})})]},e))]});return r.jsx(d,{sx:{display:"grid",gap:p},children:I.map(t=>r.jsx(D,{color:t},t))})},parameters:{layout:"fullscreen"}},l={render:a=>r.jsxs(k,{sx:{display:"flex",gap:h,flexWrap:"wrap"},children:[r.jsx(n,{...a,startIcon:"add",content:"Add item"}),r.jsx(n,{...a,endIcon:"arrow_forward",content:"Continue"}),r.jsx(n,{...a,startIcon:"save",endIcon:"check",content:"Save & Check"})]})};var x,S,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
      renderBtn: (sz: (typeof sizes)[number]) => React.ReactNode;
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
      color: (typeof colors)[number];
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
            <Row label="Enable" renderBtn={size => <ButtonElement content="Button" size={size} color={color} variant={variant} onClick={fn()} />} />\r
            <Row label="With icon" renderBtn={size => <ButtonElement content="Button" startIcon="add" size={size} color={color} variant={variant} onClick={fn()} />} />\r
            <Row label="Loading" renderBtn={size => <ButtonElement content="Loading" loading size={size} color={color} variant={variant} />} />\r
            <Row label="Disabled" renderBtn={size => <ButtonElement content="Disabled" disabled size={size} color={color} variant={variant} />} />\r
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
      <ButtonElement {...args} startIcon="add" content="Add item" />\r
      <ButtonElement {...args} endIcon="arrow_forward" content="Continue" />\r
      <ButtonElement {...args} startIcon="save" endIcon="check" content="Save & Check" />\r
    </StackRow>
}`,...(T=(f=l.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const wr=["Default","GalleryMatrix","WithIcons"];export{i as Default,c as GalleryMatrix,l as WithIcons,wr as __namedExportsOrder,jr as default};
