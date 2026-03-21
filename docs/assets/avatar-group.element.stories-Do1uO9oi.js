import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{S as o}from"./FileSaver.min-sVBIqHNu.js";import"./time.util-BYguZ9lS.js";import{S as e,A as n}from"./avatar-group.element-ClmuawRk.js";import{B as r}from"./Box-0U_G7eaK.js";import"./index-j62jqFia.js";import"./typography.style-Db92pt08.js";import"./style.const-DwIRAWA_.js";import"./image.element-11dKFs33.js";import"./stack.style-CoSEZ8py.js";import"./DefaultPropsProvider-DU9SanKz.js";import"./defaultTheme-D-jjqFHx.js";import"./Stack--5Dd26sT.js";import"./createStack-C_KW5WTO.js";import"./extendSxProp-Cmw4pgNu.js";import"./index-C8adVhmr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-0nskcD3X.js";import"./InputLabel-CY3ncLPD.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-CZ8YGlXk.js";import"./Typography-crO-zzKF.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-Cr6OT-HE.js";import"./color.const-Dil5I3Au.js";import"./icon-button.element-BecJaPZD.js";import"./icon.element-C1lSNNtD.js";import"./IconButton-QbJpFgcV.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-CJf4BqqU.js";import"./useTimeout-Ck7_m_Mv.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./CircularProgress-6STgtAQ1.js";import"./icon-content-badge-subs.element-CO7-Qq6G.js";import"./icon-content-badge.element-DInq380v.js";import"./icon-content.element-ipXuh9vB.js";import"./Badge-C7vkf73i.js";import"./useSlot-DxC6qITw.js";import"./ownerWindow-BsA78Dfr.js";import"./useSlotProps-BVs4F9FP.js";import"./createSvgIcon-DaUmNjHb.js";import"./proxy-DKXG_8Nh.js";import"./avatar.element-o2ujGwwD.js";import"./Tooltip-C0f2lvwx.js";import"./useControlled-CdETZoY_.js";import"./getReactElementRef-DcPXsDBP.js";import"./Grow-STBTogaT.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./utils-CqDPe-1j.js";import"./Popper-C5RxI3xi.js";import"./Popover-C9PvnN4t.js";import"./mergeSlotProps-C6mQwBhO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-CmqG1gvX.js";const j={items:{control:"object",description:"List of avatar items (url/alt/tooltipContent/status).",table:{type:{summary:"AvatarGroupItem[]"}}},maxAvatars:{control:{type:"number",min:1,max:20,step:1},description:"Max number of visible avatars before showing surplus.",table:{type:{summary:"number"},defaultValue:{summary:"5"}}},size:{control:"select",options:["extra_small","small","medium","large","extra_large","avatar_group","avatar_chat_person"],description:"Avatar size applied to items.",table:{type:{summary:"SizeProps"},defaultValue:{summary:"large"}}},approveStatus:{control:"select",options:Object.values(e),description:"Status value treated as approved (green).",table:{type:{summary:"string"},defaultValue:{summary:e.APPROVED}}},rejectStatus:{control:"select",options:Object.values(e),description:"Status value treated as rejected (red).",table:{type:{summary:"string"},defaultValue:{summary:e.REJECTED}}},onClick:{action:"onClick",description:"Click handler (applied to each AvatarElement via props spreading).",table:{type:{summary:"(event) => void"}}}},Dt={title:"Elements/Avatar/AvatarGroup",component:n,tags:["autodocs"],args:{size:o.LARGE,maxAvatars:5},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}},argTypes:j},c=Array.from({length:9}).map((a,s)=>({url:`https://i.pravatar.cc/150?img=${s+1}`,alt:`User ${s+1}`,tooltipContent:`User ${s+1}`})),i={args:{items:c}},p={args:{items:[{url:"https://i.pravatar.cc/150?img=11",alt:"Approved",tooltipContent:"Approved",status:e.APPROVED},{url:"https://i.pravatar.cc/150?img=12",alt:"Rejected",tooltipContent:"Rejected",status:e.REJECTED},{url:"https://i.pravatar.cc/150?img=13",alt:"Pending",tooltipContent:"Pending",status:e.PENDING},...c.slice(0,6)],maxAvatars:6}},m={render:a=>t.jsxs(r,{sx:{display:"flex",flexDirection:"column",gap:2},children:[t.jsxs(r,{sx:{fontSize:12,color:"text.secondary"},children:["Click vào ",t.jsx("strong",{children:"+N"})," để mở popover danh sách người còn lại."]}),t.jsx(n,{...a})]}),args:{items:c.map((a,s)=>({...a,status:s%3===0?e.APPROVED:s%3===1?e.REJECTED:e.PENDING})),maxAvatars:4,size:o.MEDIUM}},l={render:a=>t.jsxs(r,{sx:{display:"flex",flexDirection:"column",gap:2},children:[t.jsxs(r,{sx:{display:"flex",gap:2,alignItems:"center",flexWrap:"wrap"},children:[t.jsx(r,{sx:{width:140,fontSize:12,color:"text.secondary"},children:"small"}),t.jsx(n,{...a,size:o.SMALL})]}),t.jsxs(r,{sx:{display:"flex",gap:2,alignItems:"center",flexWrap:"wrap"},children:[t.jsx(r,{sx:{width:140,fontSize:12,color:"text.secondary"},children:"medium"}),t.jsx(n,{...a,size:o.MEDIUM})]}),t.jsxs(r,{sx:{display:"flex",gap:2,alignItems:"center",flexWrap:"wrap"},children:[t.jsx(r,{sx:{width:140,fontSize:12,color:"text.secondary"},children:"large"}),t.jsx(n,{...a,size:o.LARGE})]}),t.jsxs(r,{sx:{display:"flex",gap:2,alignItems:"center",flexWrap:"wrap"},children:[t.jsx(r,{sx:{width:140,fontSize:12,color:"text.secondary"},children:"extra_large"}),t.jsx(n,{...a,size:o.EXTRA_LARGE})]})]}),args:{items:c,maxAvatars:5},parameters:{layout:"padded"}};var x,d,u;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(z=(h=l.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};const It=["Default","WithStatuses","SurplusPopover","Sizes"];export{i as Default,l as Sizes,m as SurplusPopover,p as WithStatuses,It as __namedExportsOrder,Dt as default};
