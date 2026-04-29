import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{f as k}from"./index-DtL3pAzF.js";import{C as s}from"./collapsible-section.component-91svQvUH.js";import{B as p}from"./Box-CJND6-sR.js";import{T as r}from"./Typography-Bf8WTvH-.js";import{P as C}from"./InputLabel-Xf4L_974.js";import{S as B}from"./Stack-BWemv0CO.js";import{B as v}from"./Button-oCoBaHSt.js";import"./index-j62jqFia.js";/* empty css               */import"./FileSaver.min-DK9gSEGX.js";import"./time.util-BYguZ9lS.js";import"./typography.style-BuPQcHCI.js";import"./image.element-D5PhqCaM.js";import"./stack.style-CGxIkQ-3.js";import"./memoTheme-JcuT4PI6.js";import"./defaultTheme-CAzuqlo8.js";import"./DefaultPropsProvider-BwONcEM9.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./extendSxProp-BhkXlpcg.js";import"./useTheme--firQ3HK.js";import"./link.element-BIiOul_5.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-wHDaNs8P.js";import"./icon-button.element-DnJxtSN_.js";import"./icon.element-CXpbt3XJ.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-DMmz3Ngg.js";import"./useTimeout-BnjI5Ij7.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./CircularProgress-SwCU_jrE.js";import"./icon-content-badge-subs.element-B371fkJb.js";import"./tooltip-on-click.element-DkCofoav.js";import"./getReactElementRef-BVRziQZO.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./Grow-DOIJXnb6.js";import"./useSlot-BHAemyrm.js";import"./Tooltip-C-jnBW1Q.js";import"./useControlled-CdETZoY_.js";import"./icon-content-badge.element-q5wmTKFZ.js";import"./icon-content.element-BdQZb-ha.js";import"./Badge-4F4pJWAG.js";import"./ownerWindow-SaFBzm43.js";import"./createSvgIcon-CgF2gLAa.js";import"./proxy-DKXG_8Nh.js";import"./Collapse-Cv26H6Io.js";import"./index-F4SWrtxx.js";import"./useFormControl-CmOg5wnR.js";import"./createStack-_FjnXW6X.js";const z={title:{control:"text",description:"Section title shown in the header.",table:{type:{summary:"string"}}},defaultExpanded:{control:"boolean",description:"Initial expanded state (internal state after first render is uncontrolled).",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},headerAction:{control:!1,description:"Optional action node rendered on the right side of header.",table:{type:{summary:"ReactNode"}}},children:{control:!1,description:"Section content (collapsible).",table:{type:{summary:"ReactNode"}}},sx:{control:"object",description:"MUI sx for container.",table:{type:{summary:"SxProps<Theme>"}}},titleSx:{control:"object",description:"MUI sx for title Typography.",table:{type:{summary:"SxProps<Theme>"}}}},zt={title:"Elements/CollapsibleSection",component:s,tags:["autodocs"],args:{title:"Thông tin nâng cao",defaultExpanded:!0},parameters:{layout:"padded",chromatic:{disableSnapshot:!1}},argTypes:z},e={render:o=>t.jsx(p,{sx:{maxWidth:720},children:t.jsxs(s,{...o,children:[t.jsx(r,{sx:{fontSize:14,color:"text.secondary"},children:"Nội dung có thể thu gọn/mở rộng. Click vào tiêu đề hoặc icon để toggle."}),t.jsxs(C,{variant:"outlined",sx:{p:2},children:[t.jsx(r,{sx:{fontWeight:600,mb:1},children:"Card content"}),t.jsx(r,{sx:{fontSize:13,color:"text.secondary"},children:"Đây là ví dụ dùng trong admin dashboard, thường để nhóm các field/tuỳ chọn nâng cao."})]})]})})},a={...e,args:{title:"Advanced filters",defaultExpanded:!1}},i={render:o=>t.jsx(p,{sx:{maxWidth:720},children:t.jsx(s,{...o,headerAction:t.jsx(v,{size:"small",variant:"text",onClick:c=>{c.stopPropagation(),k()()},children:"Reset"}),children:t.jsxs(B,{spacing:1,children:[t.jsx(r,{sx:{fontSize:13,color:"text.secondary"},children:"Header action là một ReactNode, bạn có thể gắn button/icon tuỳ ý."}),t.jsx(r,{sx:{fontSize:13},children:"Tip: nếu muốn action không toggle, nhớ stopPropagation."})]})})}),args:{title:"Bộ lọc",defaultExpanded:!0}},n={render:o=>t.jsx(p,{sx:{maxWidth:720},children:t.jsx(s,{...o,children:t.jsx(B,{spacing:1.5,children:Array.from({length:10}).map((c,l)=>t.jsxs(C,{variant:"outlined",sx:{p:1.5},children:[t.jsxs(r,{sx:{fontWeight:600},children:["Row ",l+1]}),t.jsx(r,{sx:{fontSize:13,color:"text.secondary"},children:"Nội dung dài để test animation Collapse + spacing trong section."})]},l))})})}),parameters:{chromatic:{delay:400}}};var d,m,g;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(j=(T=n.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const Pt=["Default","InitiallyCollapsed","WithHeaderAction","LongContent"];export{e as Default,a as InitiallyCollapsed,n as LongContent,i as WithHeaderAction,Pt as __namedExportsOrder,zt as default};
