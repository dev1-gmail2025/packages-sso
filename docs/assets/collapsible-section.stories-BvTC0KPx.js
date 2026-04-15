import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{f as k}from"./index-DtL3pAzF.js";import{C as s}from"./collapsible-section.component-Dwc6ehVz.js";import{B as p}from"./Box-CDdb2_uU.js";import{T as r}from"./Typography-Bxxrk_XJ.js";import{P as C}from"./InputLabel-dfS4B9dg.js";import{S as B}from"./Stack-CPAJg9KB.js";import{B as v}from"./Button-CI85eX1i.js";import"./index-j62jqFia.js";import"./ckeditor-CL2xzRyo.js";import"./time.util-BYguZ9lS.js";import"./typography.style-bTVGtiwd.js";import"./image.element-B3vY-0Q6.js";import"./stack.style-BkTbjcfq.js";import"./memoTheme-DEbB7Aqb.js";import"./defaultTheme-DeO7XLhv.js";import"./DefaultPropsProvider-CTbmx_9D.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./extendSxProp-CMsS_Ey0.js";import"./useTheme-B3rGZ43-.js";import"./link.element-D3mcjqpT.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-DvZtTmt-.js";import"./icon-button.element-CNKiJYQh.js";import"./icon.element-C1fGWKPB.js";import"./IconButton-4XvBqZ2m.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-BDawOQvs.js";import"./useTimeout-BnjI5Ij7.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./CircularProgress-B9D4tC5t.js";import"./icon-content-badge-subs.element-VEgDb-xd.js";import"./icon-content-badge.element-Dqp1Lhyu.js";import"./icon-content.element-BYFuMu0G.js";import"./Badge-BGqhrgA7.js";import"./useSlot-BVcC7tl7.js";import"./ownerWindow-v3EA2bPe.js";import"./useSlotProps-Coua_qTW.js";import"./createSvgIcon-Co-sBmU1.js";import"./proxy-DKXG_8Nh.js";import"./Collapse-Bv478Hpy.js";import"./utils-CqDPe-1j.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./index-C1XqMcs4.js";import"./useFormControl-CmOg5wnR.js";import"./createStack-Du0yveyH.js";const z={title:{control:"text",description:"Section title shown in the header.",table:{type:{summary:"string"}}},defaultExpanded:{control:"boolean",description:"Initial expanded state (internal state after first render is uncontrolled).",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},headerAction:{control:!1,description:"Optional action node rendered on the right side of header.",table:{type:{summary:"ReactNode"}}},children:{control:!1,description:"Section content (collapsible).",table:{type:{summary:"ReactNode"}}},sx:{control:"object",description:"MUI sx for container.",table:{type:{summary:"SxProps<Theme>"}}},titleSx:{control:"object",description:"MUI sx for title Typography.",table:{type:{summary:"SxProps<Theme>"}}}},Bt={title:"Elements/CollapsibleSection",component:s,tags:["autodocs"],args:{title:"Thông tin nâng cao",defaultExpanded:!0},parameters:{layout:"padded",chromatic:{disableSnapshot:!1}},argTypes:z},e={render:o=>t.jsx(p,{sx:{maxWidth:720},children:t.jsxs(s,{...o,children:[t.jsx(r,{sx:{fontSize:14,color:"text.secondary"},children:"Nội dung có thể thu gọn/mở rộng. Click vào tiêu đề hoặc icon để toggle."}),t.jsxs(C,{variant:"outlined",sx:{p:2},children:[t.jsx(r,{sx:{fontWeight:600,mb:1},children:"Card content"}),t.jsx(r,{sx:{fontSize:13,color:"text.secondary"},children:"Đây là ví dụ dùng trong admin dashboard, thường để nhóm các field/tuỳ chọn nâng cao."})]})]})})},a={...e,args:{title:"Advanced filters",defaultExpanded:!1}},i={render:o=>t.jsx(p,{sx:{maxWidth:720},children:t.jsx(s,{...o,headerAction:t.jsx(v,{size:"small",variant:"text",onClick:c=>{c.stopPropagation(),k()()},children:"Reset"}),children:t.jsxs(B,{spacing:1,children:[t.jsx(r,{sx:{fontSize:13,color:"text.secondary"},children:"Header action là một ReactNode, bạn có thể gắn button/icon tuỳ ý."}),t.jsx(r,{sx:{fontSize:13},children:"Tip: nếu muốn action không toggle, nhớ stopPropagation."})]})})}),args:{title:"Bộ lọc",defaultExpanded:!0}},n={render:o=>t.jsx(p,{sx:{maxWidth:720},children:t.jsx(s,{...o,children:t.jsx(B,{spacing:1.5,children:Array.from({length:10}).map((c,l)=>t.jsxs(C,{variant:"outlined",sx:{p:1.5},children:[t.jsxs(r,{sx:{fontWeight:600},children:["Row ",l+1]}),t.jsx(r,{sx:{fontSize:13,color:"text.secondary"},children:"Nội dung dài để test animation Collapse + spacing trong section."})]},l))})})}),parameters:{chromatic:{delay:400}}};var d,m,g;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,x,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Default,
  args: {
    title: 'Advanced filters',
    defaultExpanded: false
  }
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var u,f,S;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(S=(f=i.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,T,j;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(j=(T=n.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const kt=["Default","InitiallyCollapsed","WithHeaderAction","LongContent"];export{e as Default,a as InitiallyCollapsed,n as LongContent,i as WithHeaderAction,kt as __namedExportsOrder,Bt as default};
