import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as n}from"./index-DtL3pAzF.js";import{V as p,D as o}from"./FileSaver.min-sVBIqHNu.js";import"./time.util-DFcg3e45.js";import{T as a}from"./icon-content-badge-subs.element-CAHzdJLk.js";import{S as r}from"./Stack-D52ta6Vs.js";import"./index-j62jqFia.js";import"./style.const-DcpvWNzF.js";import"./typography.style-CJiPh48M.js";import"./image.element-B2TI9ji2.js";import"./stack.style-X5oYj0G_.js";import"./DefaultPropsProvider-CnpmPGLU.js";import"./defaultTheme-CbDHbYmC.js";import"./index-C8adVhmr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./extendSxProp-COYDv-qt.js";import"./useTheme-BWrsGw5G.js";import"./Box-DA9iinBb.js";import"./InputLabel-BOBPd_9J.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-_0gGO9Yn.js";import"./Typography-Cd5iZOo-.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-Cr6OT-HE.js";import"./color.const-Dil5I3Au.js";import"./icon-button.element-CaQUJqOR.js";import"./icon.element-D4DES1ie.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-BlX2FUJJ.js";import"./useTimeout-Ck7_m_Mv.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./CircularProgress-Coy-df3c.js";import"./icon-content-badge.element-wIksfgwX.js";import"./icon-content.element-BR7SGJ8x.js";import"./Badge-Cc5_q6VK.js";import"./useSlot-BQkp07Oq.js";import"./ownerWindow-DHxNjUuV.js";import"./useSlotProps-hLfGuAdq.js";import"./createSvgIcon-B_gPDoaJ.js";import"./proxy-DKXG_8Nh.js";import"./createStack-qJXewNdH.js";const N={idSelect:{control:"text",description:"Selected tab id (initial / controlled-ish).",table:{type:{summary:"string"}}},size:{control:"select",options:["small","medium","large"],description:"Size forwarded to IconContentElement.",table:{type:{summary:'"large" | "small" | "medium"'}}},direction:{control:"inline-radio",options:["row","column"],description:"Layout direction.",table:{type:{summary:"'row' | 'column'"},defaultValue:{summary:"row"}}},variant:{control:"inline-radio",options:["contained","outlined"],description:"Visual variant.",table:{type:{summary:"'contained' | 'outlined'"},defaultValue:{summary:"contained"}}},onChange:{action:"changed",description:"Called with selected id (outlined variant only).",table:{type:{summary:"(newValue: string) => void"}}},tabs:{control:!1},sx:{control:!1},sxTabs:{control:!1},sxWrapper:{control:!1}},Sn={title:"Elements/Tabs/Tabs",component:a,tags:["autodocs"],args:{idSelect:"all",direction:o.ROW,variant:p.CONTAINED,tabs:[{id:"all",name:"All",icon:"apps",onClick:n()},{id:"active",name:"Active",icon:"check_circle",onClick:n()},{id:"archived",name:"Archived",icon:"archive",onClick:n()}],onChange:n()},parameters:{layout:"padded"},argTypes:N},t={},c={render:i=>e.jsxs(r,{spacing:2,children:[e.jsx(a,{...i}),e.jsx(a,{...i,variant:p.OUTLINED})]})},d={render:i=>e.jsxs(r,{spacing:3,children:[e.jsx(a,{...i,direction:o.ROW}),e.jsx(a,{...i,direction:o.COLUMN})]})},s={render:i=>e.jsxs(r,{spacing:3,children:[e.jsx(a,{...i,direction:o.ROW,mode:"badge",tabs:[{id:"all",name:"All",icon:"apps",badgeCount:12,onClick:n()},{id:"unread",name:"Unread",icon:"mark_email_unread",badgeCount:3,onClick:n()},{id:"archived",name:"Archived",icon:"archive",badgeCount:0,onClick:n()}]}),e.jsx(a,{...i,direction:o.COLUMN,mode:"badge",tabs:[{id:"all",name:"All",icon:"apps",badgeCount:12,onClick:n()},{id:"unread",name:"Unread",icon:"mark_email_unread",badgeCount:3,onClick:n()},{id:"archived",name:"Archived",icon:"archive",badgeCount:0,onClick:n()}]}),e.jsx(a,{...i,variant:p.OUTLINED,tabs:[{id:"all",name:"All",icon:"apps",badgeCount:12,onClick:n()},{id:"unread",name:"Unread",icon:"mark_email_unread",badgeCount:3,onClick:n()},{id:"archived",name:"Archived",icon:"archive",badgeCount:0,onClick:n()}]}),e.jsx(a,{...i,variant:p.OUTLINED,direction:o.ROW,tabs:[{id:"all",name:"All",icon:"apps",badgeCount:12,onClick:n()},{id:"unread",name:"Unread",icon:"mark_email_unread",badgeCount:3,onClick:n()},{id:"archived",name:"Archived",icon:"archive",badgeCount:0,onClick:n()}]})]})},m={render:i=>e.jsx(r,{sx:{height:"100px"},children:e.jsx(a,{...i,tabs:[{id:"inbox",name:"Inbox",icon:"inbox",onClick:n()},{id:"docs",name:"Docs",icon:"description",onClick:n()},{id:"more",name:"More",icon:"more_horiz",onClick:n()}],getSubs:u=>u.id==="more"?[{id:"settings",name:"Settings",icon:"settings",onClick:n()},{id:"help",name:"Help center",icon:"help",onClick:n()}]:void 0})})},l={render:i=>e.jsx(r,{sx:{height:"100px"},children:e.jsx(a,{...i,mode:"badge",tabs:[{id:"all",name:"All",icon:"apps",badgeCount:10,onClick:n()},{id:"unread",name:"Unread",icon:"mark_email_unread",badgeCount:4,onClick:n()},{id:"more",name:"More",icon:"more_horiz",badgeCount:2,onClick:n()}],getSubs:u=>u.id==="more"?[{id:"pinned",name:"Pinned",icon:"push_pin",badgeCount:1,onClick:n()},{id:"muted",name:"Muted",icon:"volume_off",badgeCount:1,onClick:n()}]:void 0})})};var C,b,g;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var k,h,f;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Stack spacing={2}>\r
      <TabsComponent {...args} />\r
      <TabsComponent {...args} variant={VariantProps.OUTLINED} />\r
    </Stack>
}`,...(f=(h=c.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,x,S;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Stack spacing={3}>\r
      <TabsComponent {...args} direction={DirectionProps.ROW} />\r
      <TabsComponent {...args} direction={DirectionProps.COLUMN} />\r
    </Stack>
}`,...(S=(x=d.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var _,A,T;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Stack spacing={3}>\r
      <TabsComponent {...args} direction={DirectionProps.ROW} mode='badge' tabs={[{
      id: 'all',
      name: 'All',
      icon: 'apps',
      badgeCount: 12,
      onClick: fn()
    }, {
      id: 'unread',
      name: 'Unread',
      icon: 'mark_email_unread',
      badgeCount: 3,
      onClick: fn()
    }, {
      id: 'archived',
      name: 'Archived',
      icon: 'archive',
      badgeCount: 0,
      onClick: fn()
    }]} />\r
      <TabsComponent {...args} direction={DirectionProps.COLUMN} mode='badge' tabs={[{
      id: 'all',
      name: 'All',
      icon: 'apps',
      badgeCount: 12,
      onClick: fn()
    }, {
      id: 'unread',
      name: 'Unread',
      icon: 'mark_email_unread',
      badgeCount: 3,
      onClick: fn()
    }, {
      id: 'archived',
      name: 'Archived',
      icon: 'archive',
      badgeCount: 0,
      onClick: fn()
    }]} />\r
\r
      <TabsComponent {...args} variant={VariantProps.OUTLINED} tabs={[{
      id: 'all',
      name: 'All',
      icon: 'apps',
      badgeCount: 12,
      onClick: fn()
    }, {
      id: 'unread',
      name: 'Unread',
      icon: 'mark_email_unread',
      badgeCount: 3,
      onClick: fn()
    }, {
      id: 'archived',
      name: 'Archived',
      icon: 'archive',
      badgeCount: 0,
      onClick: fn()
    }]} />\r
      <TabsComponent {...args} variant={VariantProps.OUTLINED} direction={DirectionProps.ROW} tabs={[{
      id: 'all',
      name: 'All',
      icon: 'apps',
      badgeCount: 12,
      onClick: fn()
    }, {
      id: 'unread',
      name: 'Unread',
      icon: 'mark_email_unread',
      badgeCount: 3,
      onClick: fn()
    }, {
      id: 'archived',
      name: 'Archived',
      icon: 'archive',
      badgeCount: 0,
      onClick: fn()
    }]} />\r
    </Stack>
}`,...(T=(A=s.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var D,U,O;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Stack sx={{
    height: '100px'
  }}>\r
      <TabsComponent {...args} tabs={[{
      id: 'inbox',
      name: 'Inbox',
      icon: 'inbox',
      onClick: fn()
    }, {
      id: 'docs',
      name: 'Docs',
      icon: 'description',
      onClick: fn()
    }, {
      id: 'more',
      name: 'More',
      icon: 'more_horiz',
      onClick: fn()
    }]} getSubs={tab => tab.id === 'more' ? [{
      id: 'settings',
      name: 'Settings',
      icon: 'settings',
      onClick: fn()
    }, {
      id: 'help',
      name: 'Help center',
      icon: 'help',
      onClick: fn()
    }] : undefined} />\r
    </Stack>
}`,...(O=(U=m.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var j,y,W;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Stack sx={{
    height: '100px'
  }}>\r
      <TabsComponent {...args} mode='badge' tabs={[{
      id: 'all',
      name: 'All',
      icon: 'apps',
      badgeCount: 10,
      onClick: fn()
    }, {
      id: 'unread',
      name: 'Unread',
      icon: 'mark_email_unread',
      badgeCount: 4,
      onClick: fn()
    }, {
      id: 'more',
      name: 'More',
      icon: 'more_horiz',
      badgeCount: 2,
      onClick: fn()
    }]} getSubs={tab => tab.id === 'more' ? [{
      id: 'pinned',
      name: 'Pinned',
      icon: 'push_pin',
      badgeCount: 1,
      onClick: fn()
    }, {
      id: 'muted',
      name: 'Muted',
      icon: 'volume_off',
      badgeCount: 1,
      onClick: fn()
    }] : undefined} />\r
    </Stack>
}`,...(W=(y=l.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};const _n=["Default","Variants","Directions","WithBadges","WithSubs","WithBadgesAndSubs"];export{t as Default,d as Directions,c as Variants,s as WithBadges,l as WithBadgesAndSubs,m as WithSubs,_n as __namedExportsOrder,Sn as default};
