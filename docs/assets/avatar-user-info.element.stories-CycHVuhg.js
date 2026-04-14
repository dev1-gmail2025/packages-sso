import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{A as e}from"./avatar-user-info.element-DNOY-hsr.js";import"./FileSaver.min-Bswz-9g7.js";import"./index-j62jqFia.js";import"./style.const-wxvmQkzb.js";import"./other.util-DCRAYZxB.js";import"./color.const-zxGJ9-Cm.js";import"./defaultTheme-DeO7XLhv.js";import"./time.util-BYguZ9lS.js";import"./typography.style-DP0bA-A_.js";import"./image.element-Bf8t_bd_.js";import"./stack.style-D9MTy4l9.js";import"./memoTheme-DEbB7Aqb.js";import"./DefaultPropsProvider-CTbmx_9D.js";import"./Stack-CPAJg9KB.js";import"./createStack-Du0yveyH.js";import"./extendSxProp-CMsS_Ey0.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-B3rGZ43-.js";import"./Box-CDdb2_uU.js";import"./InputLabel-dfS4B9dg.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-D3mcjqpT.js";import"./Typography-Bxxrk_XJ.js";import"./index-C1XqMcs4.js";import"./isFocusVisible-B8k4qzLc.js";import"./avatar.element-D4LNK1EU.js";import"./createSvgIcon-Co-sBmU1.js";import"./useSlot-BVcC7tl7.js";import"./useForkRef-BVpE-hzr.js";import"./Tooltip-BeeZLBQS.js";import"./useTimeout-BnjI5Ij7.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./useControlled-CdETZoY_.js";import"./useId-CFSqmtgZ.js";import"./getReactElementRef-DcPXsDBP.js";import"./Grow-CGEv-SGy.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./utils-CqDPe-1j.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./Popper-FuK3mDCS.js";import"./useSlotProps-Coua_qTW.js";const N={name:{control:"text",description:"The name of the user to display.",table:{type:{summary:"string"}}},url:{control:"text",description:"URL of the avatar image.",table:{type:{summary:"string"}}},positions:{control:"object",description:"Array of position titles to display below the name.",table:{type:{summary:"string[]"},defaultValue:{summary:"[]"}}},maxWidth:{control:"text",description:"Maximum width for the position text.",table:{type:{summary:"string | number"},defaultValue:{summary:"440px"}}},isTag:{control:"boolean",description:"If true, displays positions as a tag with special styling.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},sizeAvatar:{control:"select",options:["extra_small","small","medium","large","extra_large","avatar_group"],description:"The size of the avatar.",table:{type:{summary:"SizeProps | string"},defaultValue:{summary:"large"}}},sxName:{control:!1,description:"Custom styles for the name Typography component.",table:{type:{summary:"SxProps<Theme>"}}},sxPosition:{control:!1,description:"Custom styles for the position Typography component.",table:{type:{summary:"SxProps<Theme>"}}}},St={title:"Elements/Avatar/AvatarUserInfo",component:e,tags:["autodocs"],args:{name:"John Doe",sizeAvatar:"large"},parameters:{layout:"padded",chromatic:{disableSnapshot:!1}},argTypes:N},a={args:{name:"John Doe",url:"https://picsum.photos/200",positions:["Software Engineer","Frontend Developer"]}},s={args:{name:"Bob Wilson",url:"https://picsum.photos/200",positions:["Senior Developer","Tech Lead"],isTag:!0}},o={args:{name:"Charlie Davis",positions:["Designer","UI/UX Specialist"]}},i={render:r=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[t.jsx(e,{...r,name:"Small Avatar",sizeAvatar:"small",url:"https://picsum.photos/200"}),t.jsx(e,{...r,name:"Medium Avatar",sizeAvatar:"medium",url:"https://picsum.photos/200"}),t.jsx(e,{...r,name:"Large Avatar",sizeAvatar:"large",url:"https://picsum.photos/200"}),t.jsx(e,{...r,name:"Extra Large Avatar",sizeAvatar:"extra_large",url:"https://picsum.photos/200"})]})},p={args:{name:"Very Long Name That Should Be Truncated",url:"https://picsum.photos/200",positions:["Position Title"]}},m={args:{name:"Michael Chen",url:"https://picsum.photos/200",positions:["Very Long Position Title That Needs Custom Width"],maxWidth:"200px"}},n={args:{name:"David Lee",url:"https://picsum.photos/200",positions:[]}};var l,u,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    url: 'https://picsum.photos/200',
    positions: ['Software Engineer', 'Frontend Developer']
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var h,d,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: 'Bob Wilson',
    url: 'https://picsum.photos/200',
    positions: ['Senior Developer', 'Tech Lead'],
    isTag: true
  }
}`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var y,v,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'Charlie Davis',
    positions: ['Designer', 'UI/UX Specialist']
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,A,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>\r
      <AvatarUserInfo {...args} name="Small Avatar" sizeAvatar="small" url="https://picsum.photos/200" />\r
      <AvatarUserInfo {...args} name="Medium Avatar" sizeAvatar="medium" url="https://picsum.photos/200" />\r
      <AvatarUserInfo {...args} name="Large Avatar" sizeAvatar="large" url="https://picsum.photos/200" />\r
      <AvatarUserInfo {...args} name="Extra Large Avatar" sizeAvatar="extra_large" url="https://picsum.photos/200" />\r
    </div>
}`,...(T=(A=i.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var S,D,b;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: 'Very Long Name That Should Be Truncated',
    url: 'https://picsum.photos/200',
    positions: ['Position Title']
  }
}`,...(b=(D=p.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var L,W,z;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    name: 'Michael Chen',
    url: 'https://picsum.photos/200',
    positions: ['Very Long Position Title That Needs Custom Width'],
    maxWidth: '200px'
  }
}`,...(z=(W=m.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var I,U,C;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'David Lee',
    url: 'https://picsum.photos/200',
    positions: []
  }
}`,...(C=(U=n.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};const Dt=["Default","WithTag","WithoutImage","Sizes","LongName","WithCustomMaxWidth","NameOnly"];export{a as Default,p as LongName,n as NameOnly,i as Sizes,m as WithCustomMaxWidth,s as WithTag,o as WithoutImage,Dt as __namedExportsOrder,St as default};
