import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{f as g}from"./index-DtL3pAzF.js";import{B as e}from"./button.element-CACCV01C.js";import"./typography.style-Yi-1mNbm.js";import{b as p,P as k,a as u,d as L}from"./ckeditor-CeGE-dtJ.js";import{S as B,g as R}from"./stack.style-7z-WnrUf.js";import"./time.util-BYguZ9lS.js";import{S as d}from"./Stack-PxG0HRcj.js";import{T as m}from"./Typography-Bf8WTvH-.js";import"./loading.component-DMUWmZyb.js";import"./CircularProgress-SwCU_jrE.js";import"./index-j62jqFia.js";import"./DefaultPropsProvider-BwONcEM9.js";import"./defaultTheme-CAzuqlo8.js";import"./memoTheme-JcuT4PI6.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./extendSxProp-BhkXlpcg.js";import"./icon-button.element-CYSYNp6C.js";import"./icon.element-DbGjPkP7.js";import"./useTheme--firQ3HK.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-DMmz3Ngg.js";import"./useTimeout-BnjI5Ij7.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./isFocusVisible-B8k4qzLc.js";import"./icon-content-badge-subs.element-BDW3Uuqb.js";import"./icon-content-badge.element-FQFxNG6N.js";import"./icon-content.element-D4lH8nsq.js";import"./other.util-Bf0jm6a6.js";import"./Badge-4F4pJWAG.js";import"./useSlot-BHAemyrm.js";import"./index-DP7gAqwz.js";import"./ownerWindow-C8QV6CSQ.js";import"./useSlotProps-CoayJ5MT.js";import"./createSvgIcon-CgF2gLAa.js";import"./proxy-DKXG_8Nh.js";import"./link.element-BIiOul_5.js";import"./Stack-BWemv0CO.js";import"./createStack-_FjnXW6X.js";import"./Button-oCoBaHSt.js";import"./image.element-BoOCOBmQ.js";import"./Box-CJND6-sR.js";import"./InputLabel-Xf4L_974.js";import"./useFormControl-CmOg5wnR.js";import"./index-F4SWrtxx.js";const j={content:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},variant:{control:"select",options:["text","outlined","contained"]},color:{control:"select",options:["inherit","primary","secondary","success","error","info","warning"]},size:{control:"select",options:["small","medium","large"]},startIcon:{control:!1},endIcon:{control:!1},onClick:{action:"clicked"}},In={title:"Elements/Button/Button",component:e,tags:["autodocs"],args:{content:"Save changes",onClick:g(),variant:"contained",color:"primary"},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}},argTypes:j},i={args:{content:"Button"}},c={render:()=>{const a=["small","medium","large"],I=["contained","outlined","text"],h=["primary","success","warning","error","info"],s=({label:r,renderBtn:o})=>n.jsxs(B,{sx:{display:"grid",gridTemplateColumns:"160px repeat(3, 1fr)"},children:[n.jsx(m,{children:r}),a.map(t=>n.jsx(R,{children:o(t)},t))]}),D=({color:r})=>n.jsxs(d,{sx:{display:"grid",gap:p,padding:p,borderRadius:u},children:[n.jsx(m,{children:r}),I.map(o=>n.jsxs(d,{sx:{gap:L,border:"1px dashed rgba(0,0,0,0.08)",padding:k,borderRadius:u,background:"transparent"},children:[n.jsx(m,{children:o}),n.jsx(s,{label:"Enable",renderBtn:t=>n.jsx(e,{content:"Button",size:t,color:r,variant:o,onClick:g()})}),n.jsx(s,{label:"With icon",renderBtn:t=>n.jsx(e,{content:"Button",startIcon:"add",size:t,color:r,variant:o,onClick:g()})}),n.jsx(s,{label:"Loading",renderBtn:t=>n.jsx(e,{content:"Loading",loading:!0,size:t,color:r,variant:o})}),n.jsx(s,{label:"Disabled",renderBtn:t=>n.jsx(e,{content:"Disabled",disabled:!0,size:t,color:r,variant:o})})]},o))]});return n.jsx(d,{sx:{display:"grid",gap:p},children:h.map(r=>n.jsx(D,{color:r},r))})},parameters:{layout:"fullscreen"}},l={render:a=>n.jsxs(B,{sx:{display:"flex",gap:k,flexWrap:"wrap"},children:[n.jsx(e,{...a,startIcon:"add",content:"Add item"}),n.jsx(e,{...a,endIcon:"arrow_forward",content:"Continue"}),n.jsx(e,{...a,startIcon:"save",endIcon:"check",content:"Save & Check"})]})};var x,S,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(f=l.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const hn=["Default","GalleryMatrix","WithIcons"];export{i as Default,c as GalleryMatrix,l as WithIcons,hn as __namedExportsOrder,In as default};
