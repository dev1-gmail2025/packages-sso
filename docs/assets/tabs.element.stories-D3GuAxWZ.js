import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as n}from"./index-DtL3pAzF.js";import{q as p,D as o}from"./ckeditor-CeGE-dtJ.js";import"./time.util-BYguZ9lS.js";import{T as a}from"./icon-content-badge-subs.element-BDW3Uuqb.js";import{S as r}from"./Stack-BWemv0CO.js";import"./index-j62jqFia.js";import"./typography.style-Yi-1mNbm.js";import"./image.element-BoOCOBmQ.js";import"./stack.style-7z-WnrUf.js";import"./memoTheme-JcuT4PI6.js";import"./defaultTheme-CAzuqlo8.js";import"./DefaultPropsProvider-BwONcEM9.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./extendSxProp-BhkXlpcg.js";import"./useTheme--firQ3HK.js";import"./Box-CJND6-sR.js";import"./InputLabel-Xf4L_974.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-BIiOul_5.js";import"./Typography-Bf8WTvH-.js";import"./index-F4SWrtxx.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-Bf0jm6a6.js";import"./icon-button.element-CYSYNp6C.js";import"./icon.element-DbGjPkP7.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-DMmz3Ngg.js";import"./useTimeout-BnjI5Ij7.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./CircularProgress-SwCU_jrE.js";import"./icon-content-badge.element-FQFxNG6N.js";import"./icon-content.element-D4lH8nsq.js";import"./Badge-4F4pJWAG.js";import"./useSlot-BHAemyrm.js";import"./ownerWindow-C8QV6CSQ.js";import"./useSlotProps-CoayJ5MT.js";import"./createSvgIcon-CgF2gLAa.js";import"./proxy-DKXG_8Nh.js";import"./createStack-_FjnXW6X.js";const N={idSelect:{control:"text",description:"Selected tab id (initial / controlled-ish).",table:{type:{summary:"string"}}},size:{control:"select",options:["small","medium","large"],description:"Size forwarded to IconContentElement.",table:{type:{summary:'"large" | "small" | "medium"'}}},direction:{control:"inline-radio",options:["row","column"],description:"Layout direction.",table:{type:{summary:"'row' | 'column'"},defaultValue:{summary:"row"}}},variant:{control:"inline-radio",options:["contained","outlined"],description:"Visual variant.",table:{type:{summary:"'contained' | 'outlined'"},defaultValue:{summary:"contained"}}},onChange:{action:"changed",description:"Called with selected id (outlined variant only).",table:{type:{summary:"(newValue: string) => void"}}},tabs:{control:!1},sx:{control:!1},sxTabs:{control:!1},sxWrapper:{control:!1}},_n={title:"Elements/Tabs/Tabs",component:a,tags:["autodocs"],args:{idSelect:"all",direction:o.ROW,variant:p.CONTAINED,tabs:[{id:"all",name:"All",icon:"apps",onClick:n()},{id:"active",name:"Active",icon:"check_circle",onClick:n()},{id:"archived",name:"Archived",icon:"archive",onClick:n()}],onChange:n()},parameters:{layout:"padded"},argTypes:N},t={},c={render:i=>e.jsxs(r,{spacing:2,children:[e.jsx(a,{...i}),e.jsx(a,{...i,variant:p.OUTLINED})]})},d={render:i=>e.jsxs(r,{spacing:3,children:[e.jsx(a,{...i,direction:o.ROW}),e.jsx(a,{...i,direction:o.COLUMN})]})},s={render:i=>e.jsxs(r,{spacing:3,children:[e.jsx(a,{...i,direction:o.ROW,mode:"badge",tabs:[{id:"all",name:"All",icon:"apps",badgeCount:12,onClick:n()},{id:"unread",name:"Unread",icon:"mark_email_unread",badgeCount:3,onClick:n()},{id:"archived",name:"Archived",icon:"archive",badgeCount:0,onClick:n()}]}),e.jsx(a,{...i,direction:o.COLUMN,mode:"badge",tabs:[{id:"all",name:"All",icon:"apps",badgeCount:12,onClick:n()},{id:"unread",name:"Unread",icon:"mark_email_unread",badgeCount:3,onClick:n()},{id:"archived",name:"Archived",icon:"archive",badgeCount:0,onClick:n()}]}),e.jsx(a,{...i,variant:p.OUTLINED,tabs:[{id:"all",name:"All",icon:"apps",badgeCount:12,onClick:n()},{id:"unread",name:"Unread",icon:"mark_email_unread",badgeCount:3,onClick:n()},{id:"archived",name:"Archived",icon:"archive",badgeCount:0,onClick:n()}]}),e.jsx(a,{...i,variant:p.OUTLINED,direction:o.ROW,tabs:[{id:"all",name:"All",icon:"apps",badgeCount:12,onClick:n()},{id:"unread",name:"Unread",icon:"mark_email_unread",badgeCount:3,onClick:n()},{id:"archived",name:"Archived",icon:"archive",badgeCount:0,onClick:n()}]})]})},m={render:i=>e.jsx(r,{sx:{height:"100px"},children:e.jsx(a,{...i,tabs:[{id:"inbox",name:"Inbox",icon:"inbox",onClick:n()},{id:"docs",name:"Docs",icon:"description",onClick:n()},{id:"more",name:"More",icon:"more_horiz",onClick:n()}],getSubs:u=>u.id==="more"?[{id:"settings",name:"Settings",icon:"settings",onClick:n()},{id:"help",name:"Help center",icon:"help",onClick:n()}]:void 0})})},l={render:i=>e.jsx(r,{sx:{height:"100px"},children:e.jsx(a,{...i,mode:"badge",tabs:[{id:"all",name:"All",icon:"apps",badgeCount:10,onClick:n()},{id:"unread",name:"Unread",icon:"mark_email_unread",badgeCount:4,onClick:n()},{id:"more",name:"More",icon:"more_horiz",badgeCount:2,onClick:n()}],getSubs:u=>u.id==="more"?[{id:"pinned",name:"Pinned",icon:"push_pin",badgeCount:1,onClick:n()},{id:"muted",name:"Muted",icon:"volume_off",badgeCount:1,onClick:n()}]:void 0})})};var C,b,g;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var k,h,f;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
      <TabsComponent {...args} direction={DirectionProps.ROW} mode="badge" tabs={[{
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
      <TabsComponent {...args} direction={DirectionProps.COLUMN} mode="badge" tabs={[{
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
      <TabsComponent {...args} mode="badge" tabs={[{
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
}`,...(W=(y=l.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};const An=["Default","Variants","Directions","WithBadges","WithSubs","WithBadgesAndSubs"];export{t as Default,d as Directions,c as Variants,s as WithBadges,l as WithBadgesAndSubs,m as WithSubs,An as __namedExportsOrder,_n as default};
