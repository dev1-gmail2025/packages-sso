import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as W}from"./index-DtL3pAzF.js";import{r as h}from"./index-j62jqFia.js";import"./FileSaver.min-sVBIqHNu.js";import{C as g}from"./color.const-Dil5I3Au.js";import{c as I,h as u,T as D,b as O}from"./style.const-DcpvWNzF.js";import"./time.util-DFcg3e45.js";import"./typography.style-CJiPh48M.js";import{f as M,b as q}from"./stack.style-X5oYj0G_.js";import"./icon-button.element-CaQUJqOR.js";import"./icon-content-badge-subs.element-CAHzdJLk.js";import"./icon-content-badge.element-wIksfgwX.js";import"./icon-content.element-BR7SGJ8x.js";import{I as L}from"./icon.element-D4DES1ie.js";import{S as l}from"./Stack-D52ta6Vs.js";import{T as r}from"./Typography-Cd5iZOo-.js";import{C as G}from"./Collapse-CZOuN_XX.js";import{B as m}from"./Box-DA9iinBb.js";import{P as E}from"./InputLabel-BOBPd_9J.js";import{B as H}from"./Button-uIHv_tDy.js";import"./image.element-B2TI9ji2.js";import"./useTheme-BWrsGw5G.js";import"./defaultTheme-CbDHbYmC.js";import"./DefaultPropsProvider-CnpmPGLU.js";import"./extendSxProp-COYDv-qt.js";import"./link.element-_0gGO9Yn.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-Cr6OT-HE.js";import"./index-C8adVhmr.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-BlX2FUJJ.js";import"./useTimeout-Ck7_m_Mv.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./CircularProgress-Coy-df3c.js";import"./ownerWindow-DHxNjUuV.js";import"./useSlotProps-hLfGuAdq.js";import"./useSlot-BQkp07Oq.js";import"./createSvgIcon-B_gPDoaJ.js";import"./proxy-DKXG_8Nh.js";import"./Badge-Cc5_q6VK.js";import"./createStack-qJXewNdH.js";import"./utils-CH7VozHp.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./useFormControl-CmOg5wnR.js";const a=h.forwardRef(({title:t,children:n,defaultExpanded:i=!0,sx:_,titleSx:N,headerAction:v},w)=>{const[d,z]=h.useState(i),x=()=>{z(!d)};return e.jsxs(l,{ref:w,sx:{backgroundColor:"white",borderRadius:I,border:`1px solid ${g.gray2}`,overflow:"hidden",gap:0,..._},children:[e.jsxs(M,{sx:{p:u,cursor:"pointer"},children:[e.jsx(r,{sx:{...D.textMd.semiBold,color:g.black,...N},onClick:x,children:t}),e.jsxs(q,{gap:0,children:[v,e.jsx(L,{icon:d?"keyboard_arrow_up":"keyboard_arrow_down",sx:{transition:"transform 0.2s"},onClick:x})]})]}),e.jsx(G,{in:d,timeout:"auto",unmountOnExit:!0,children:e.jsx(l,{sx:{p:u,gap:O},children:n})})]})});a.__docgenInfo={description:"",methods:[],displayName:"CollapsibleSection",props:{title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},titleSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},headerAction:{required:!1,tsType:{name:"ReactNode"},description:""}}};const U={title:{control:"text",description:"Section title shown in the header.",table:{type:{summary:"string"}}},defaultExpanded:{control:"boolean",description:"Initial expanded state (internal state after first render is uncontrolled).",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},headerAction:{control:!1,description:"Optional action node rendered on the right side of header.",table:{type:{summary:"ReactNode"}}},children:{control:!1,description:"Section content (collapsible).",table:{type:{summary:"ReactNode"}}},sx:{control:"object",description:"MUI sx for container.",table:{type:{summary:"SxProps<Theme>"}}},titleSx:{control:"object",description:"MUI sx for title Typography.",table:{type:{summary:"SxProps<Theme>"}}}},Oe={title:"Elements/CollapsibleSection",component:a,tags:["autodocs"],args:{title:"Thông tin nâng cao",defaultExpanded:!0},parameters:{layout:"padded",chromatic:{disableSnapshot:!1}},argTypes:U},o={render:t=>e.jsx(m,{sx:{maxWidth:720},children:e.jsxs(a,{...t,children:[e.jsx(r,{sx:{fontSize:14,color:"text.secondary"},children:"Nội dung có thể thu gọn/mở rộng. Click vào tiêu đề hoặc icon để toggle."}),e.jsxs(E,{variant:"outlined",sx:{p:2},children:[e.jsx(r,{sx:{fontWeight:600,mb:1},children:"Card content"}),e.jsx(r,{sx:{fontSize:13,color:"text.secondary"},children:"Đây là ví dụ dùng trong admin dashboard, thường để nhóm các field/tuỳ chọn nâng cao."})]})]})})},s={...o,args:{title:"Advanced filters",defaultExpanded:!1}},p={render:t=>e.jsx(m,{sx:{maxWidth:720},children:e.jsx(a,{...t,headerAction:e.jsx(H,{size:"small",variant:"text",onClick:n=>{n.stopPropagation(),W()()},children:"Reset"}),children:e.jsxs(l,{spacing:1,children:[e.jsx(r,{sx:{fontSize:13,color:"text.secondary"},children:"Header action là một ReactNode, bạn có thể gắn button/icon tuỳ ý."}),e.jsx(r,{sx:{fontSize:13},children:"Tip: nếu muốn action không toggle, nhớ stopPropagation."})]})})}),args:{title:"Bộ lọc",defaultExpanded:!0}},c={render:t=>e.jsx(m,{sx:{maxWidth:720},children:e.jsx(a,{...t,children:e.jsx(l,{spacing:1.5,children:Array.from({length:10}).map((n,i)=>e.jsxs(E,{variant:"outlined",sx:{p:1.5},children:[e.jsxs(r,{sx:{fontWeight:600},children:["Row ",i+1]}),e.jsx(r,{sx:{fontSize:13,color:"text.secondary"},children:"Nội dung dài để test animation Collapse + spacing trong section."})]},i))})})}),parameters:{chromatic:{delay:400}}};var y,f,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Box sx={{
    maxWidth: 720
  }}>\r
      <CollapsibleSection {...args}>\r
        <Typography sx={{
        fontSize: 14,
        color: 'text.secondary'
      }}>\r
          Nội dung có thể thu gọn/mở rộng. Click vào tiêu đề hoặc icon để toggle.\r
        </Typography>\r
        <Paper variant="outlined" sx={{
        p: 2
      }}>\r
          <Typography sx={{
          fontWeight: 600,
          mb: 1
        }}>Card content</Typography>\r
          <Typography sx={{
          fontSize: 13,
          color: 'text.secondary'
        }}>\r
            Đây là ví dụ dùng trong admin dashboard, thường để nhóm các field/tuỳ chọn nâng cao.\r
          </Typography>\r
        </Paper>\r
      </CollapsibleSection>\r
    </Box>
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var T,b,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Default,
  args: {
    title: 'Advanced filters',
    defaultExpanded: false
  }
}`,...(C=(b=s.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var j,P,A;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Box sx={{
    maxWidth: 720
  }}>\r
      <CollapsibleSection {...args} headerAction={<Button size="small" variant="text" onClick={e => {
      e.stopPropagation();
      fn()();
    }}>\r
            Reset\r
          </Button>}>\r
        <Stack spacing={1}>\r
          <Typography sx={{
          fontSize: 13,
          color: 'text.secondary'
        }}>\r
            Header action là một ReactNode, bạn có thể gắn button/icon tuỳ ý.\r
          </Typography>\r
          <Typography sx={{
          fontSize: 13
        }}>Tip: nếu muốn action không toggle, nhớ stopPropagation.</Typography>\r
        </Stack>\r
      </CollapsibleSection>\r
    </Box>,
  args: {
    title: 'Bộ lọc',
    defaultExpanded: true
  }
}`,...(A=(P=p.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var k,R,B;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Box sx={{
    maxWidth: 720
  }}>\r
      <CollapsibleSection {...args}>\r
        <Stack spacing={1.5}>\r
          {Array.from({
          length: 10
        }).map((_, i) => <Paper key={i} variant="outlined" sx={{
          p: 1.5
        }}>\r
              <Typography sx={{
            fontWeight: 600
          }}>Row {i + 1}</Typography>\r
              <Typography sx={{
            fontSize: 13,
            color: 'text.secondary'
          }}>\r
                Nội dung dài để test animation Collapse + spacing trong section.\r
              </Typography>\r
            </Paper>)}\r
        </Stack>\r
      </CollapsibleSection>\r
    </Box>,
  parameters: {
    chromatic: {
      delay: 400
    }
  }
}`,...(B=(R=c.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const Me=["Default","InitiallyCollapsed","WithHeaderAction","LongContent"];export{o as Default,s as InitiallyCollapsed,c as LongContent,p as WithHeaderAction,Me as __namedExportsOrder,Oe as default};
