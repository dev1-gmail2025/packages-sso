import{j as t}from"./jsx-runtime-D_zvdyIk.js";/* empty css               */import{S as o}from"./FileSaver.min-DMXJVTnZ.js";import"./time.util-BYguZ9lS.js";import{S as e,A as n}from"./avatar-group.element-C0HJTTSY.js";import{B as r}from"./Box-CJND6-sR.js";import"./index-j62jqFia.js";import"./typography.style-r4ryqVfP.js";import"./image.element-BnMOL9it.js";import"./stack.style-CS5a_qlk.js";import"./memoTheme-JcuT4PI6.js";import"./defaultTheme-CAzuqlo8.js";import"./DefaultPropsProvider-BwONcEM9.js";import"./Stack-BWemv0CO.js";import"./createStack-_FjnXW6X.js";import"./extendSxProp-BhkXlpcg.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme--firQ3HK.js";import"./InputLabel-Xf4L_974.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-BIiOul_5.js";import"./Typography-Bf8WTvH-.js";import"./index-F4SWrtxx.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-bXufMzUQ.js";import"./icon-button.element-oKwD89rE.js";import"./icon.element-22LRK9Hk.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-DMmz3Ngg.js";import"./useTimeout-BnjI5Ij7.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./CircularProgress-SwCU_jrE.js";import"./icon-content-badge-subs.element-DYo91A1A.js";import"./tooltip-on-click.element-DkCofoav.js";import"./getReactElementRef-BVRziQZO.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./Grow-DOIJXnb6.js";import"./useSlot-BHAemyrm.js";import"./Tooltip-C-jnBW1Q.js";import"./useControlled-CdETZoY_.js";import"./icon-content-badge.element-DQ275V0-.js";import"./icon-content.element-BlVfaXx6.js";import"./Badge-4F4pJWAG.js";import"./ownerWindow-SaFBzm43.js";import"./createSvgIcon-CgF2gLAa.js";import"./proxy-DKXG_8Nh.js";import"./avatar.element-jNaBHeJW.js";import"./Popover-Dcprfih5.js";import"./mergeSlotProps-C1T8RA4K.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-NGFjKnxD.js";const j={items:{control:"object",description:"List of avatar items (url/alt/tooltipContent/status).",table:{type:{summary:"AvatarGroupItem[]"}}},maxAvatars:{control:{type:"number",min:1,max:20,step:1},description:"Max number of visible avatars before showing surplus.",table:{type:{summary:"number"},defaultValue:{summary:"5"}}},size:{control:"select",options:["extra_small","small","medium","large","extra_large","avatar_group","avatar_chat_person"],description:"Avatar size applied to items.",table:{type:{summary:"SizeProps"},defaultValue:{summary:"large"}}},approveStatus:{control:"select",options:Object.values(e),description:"Status value treated as approved (green).",table:{type:{summary:"string"},defaultValue:{summary:e.APPROVED}}},rejectStatus:{control:"select",options:Object.values(e),description:"Status value treated as rejected (red).",table:{type:{summary:"string"},defaultValue:{summary:e.REJECTED}}},onClick:{action:"onClick",description:"Click handler (applied to each AvatarElement via props spreading).",table:{type:{summary:"(event) => void"}}}},Bt={title:"Elements/Avatar/AvatarGroup",component:n,tags:["autodocs"],args:{size:o.LARGE,maxAvatars:5},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}},argTypes:j},c=Array.from({length:9}).map((a,s)=>({url:`https://i.pravatar.cc/150?img=${s+1}`,alt:`User ${s+1}`,tooltipContent:`User ${s+1}`})),i={args:{items:c}},p={args:{items:[{url:"https://i.pravatar.cc/150?img=11",alt:"Approved",tooltipContent:"Approved",status:e.APPROVED},{url:"https://i.pravatar.cc/150?img=12",alt:"Rejected",tooltipContent:"Rejected",status:e.REJECTED},{url:"https://i.pravatar.cc/150?img=13",alt:"Pending",tooltipContent:"Pending",status:e.PENDING},...c.slice(0,6)],maxAvatars:6}},m={render:a=>t.jsxs(r,{sx:{display:"flex",flexDirection:"column",gap:2},children:[t.jsxs(r,{sx:{fontSize:12,color:"text.secondary"},children:["Click vào ",t.jsx("strong",{children:"+N"})," để mở popover danh sách người còn lại."]}),t.jsx(n,{...a})]}),args:{items:c.map((a,s)=>({...a,status:s%3===0?e.APPROVED:s%3===1?e.REJECTED:e.PENDING})),maxAvatars:4,size:o.MEDIUM}},l={render:a=>t.jsxs(r,{sx:{display:"flex",flexDirection:"column",gap:2},children:[t.jsxs(r,{sx:{display:"flex",gap:2,alignItems:"center",flexWrap:"wrap"},children:[t.jsx(r,{sx:{width:140,fontSize:12,color:"text.secondary"},children:"small"}),t.jsx(n,{...a,size:o.SMALL})]}),t.jsxs(r,{sx:{display:"flex",gap:2,alignItems:"center",flexWrap:"wrap"},children:[t.jsx(r,{sx:{width:140,fontSize:12,color:"text.secondary"},children:"medium"}),t.jsx(n,{...a,size:o.MEDIUM})]}),t.jsxs(r,{sx:{display:"flex",gap:2,alignItems:"center",flexWrap:"wrap"},children:[t.jsx(r,{sx:{width:140,fontSize:12,color:"text.secondary"},children:"large"}),t.jsx(n,{...a,size:o.LARGE})]}),t.jsxs(r,{sx:{display:"flex",gap:2,alignItems:"center",flexWrap:"wrap"},children:[t.jsx(r,{sx:{width:140,fontSize:12,color:"text.secondary"},children:"extra_large"}),t.jsx(n,{...a,size:o.EXTRA_LARGE})]})]}),args:{items:c,maxAvatars:5},parameters:{layout:"padded"}};var x,d,u;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: demoItems
  }
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,v,f;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items: [{
      url: 'https://i.pravatar.cc/150?img=11',
      alt: 'Approved',
      tooltipContent: 'Approved',
      status: StatusAvatar.APPROVED
    }, {
      url: 'https://i.pravatar.cc/150?img=12',
      alt: 'Rejected',
      tooltipContent: 'Rejected',
      status: StatusAvatar.REJECTED
    }, {
      url: 'https://i.pravatar.cc/150?img=13',
      alt: 'Pending',
      tooltipContent: 'Pending',
      status: StatusAvatar.PENDING
    }, ...demoItems.slice(0, 6)],
    maxAvatars: 6
  }
}`,...(f=(v=p.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var A,y,E;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  }}>\r
      <Box sx={{
      fontSize: 12,
      color: 'text.secondary'
    }}>\r
        Click vào <strong>+N</strong> để mở popover danh sách người còn lại.\r
      </Box>\r
      <AvatarGroupElement {...args} />\r
    </Box>,
  args: {
    items: demoItems.map((x, idx) => ({
      ...x,
      status: idx % 3 === 0 ? StatusAvatar.APPROVED : idx % 3 === 1 ? StatusAvatar.REJECTED : StatusAvatar.PENDING
    })),
    maxAvatars: 4,
    size: SizeProps.MEDIUM
  }
}`,...(E=(y=m.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var S,h,z;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  }}>\r
      <Box sx={{
      display: 'flex',
      gap: 2,
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>\r
        <Box sx={{
        width: 140,
        fontSize: 12,
        color: 'text.secondary'
      }}>small</Box>\r
        <AvatarGroupElement {...args} size={SizeProps.SMALL} />\r
      </Box>\r
      <Box sx={{
      display: 'flex',
      gap: 2,
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>\r
        <Box sx={{
        width: 140,
        fontSize: 12,
        color: 'text.secondary'
      }}>medium</Box>\r
        <AvatarGroupElement {...args} size={SizeProps.MEDIUM} />\r
      </Box>\r
      <Box sx={{
      display: 'flex',
      gap: 2,
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>\r
        <Box sx={{
        width: 140,
        fontSize: 12,
        color: 'text.secondary'
      }}>large</Box>\r
        <AvatarGroupElement {...args} size={SizeProps.LARGE} />\r
      </Box>\r
      <Box sx={{
      display: 'flex',
      gap: 2,
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>\r
        <Box sx={{
        width: 140,
        fontSize: 12,
        color: 'text.secondary'
      }}>extra_large</Box>\r
        <AvatarGroupElement {...args} size={SizeProps.EXTRA_LARGE} />\r
      </Box>\r
    </Box>,
  args: {
    items: demoItems,
    maxAvatars: 5
  },
  parameters: {
    layout: 'padded'
  }
}`,...(z=(h=l.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};const Dt=["Default","WithStatuses","SurplusPopover","Sizes"];export{i as Default,l as Sizes,m as SurplusPopover,p as WithStatuses,Dt as __namedExportsOrder,Bt as default};
