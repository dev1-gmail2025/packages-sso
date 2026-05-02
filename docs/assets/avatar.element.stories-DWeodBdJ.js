import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{A as e}from"./avatar.element-B3IRZGfG.js";import"./DefaultPropsProvider-BVc36nx7.js";import"./defaultTheme-BGAZNSBz.js";import"./index-j62jqFia.js";/* empty css               */import"./FileSaver.min-D7SFo6xU.js";import"./time.util-BYguZ9lS.js";import"./memoTheme-HOUyZqrd.js";import"./createSvgIcon-Bxbv8U67.js";import"./useSlot-DiW1_K6U.js";import"./useForkRef-BVpE-hzr.js";import"./Tooltip-mLaLfpgP.js";import"./index-DP7gAqwz.js";import"./useTheme-BcF2JLY5.js";import"./useTimeout-B9dDFdNe.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./useId-CFSqmtgZ.js";import"./getReactElementRef-BVRziQZO.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./Grow-Dtpwe2QC.js";import"./isFocusVisible-B8k4qzLc.js";const j={url:{control:"text",description:"URL of the avatar image.",table:{type:{summary:"string | null"}}},size:{control:"select",options:["extra_small","small","medium","large","extra_large","avatar_group"],description:"The size of the avatar.",table:{type:{summary:"SizeProps | string"},defaultValue:{summary:"medium"}}},tooltipContent:{control:"text",description:"Content to display in the tooltip when hovering over the avatar.",table:{type:{summary:"ReactNode"}}},children:{control:"text",description:"Content to display inside the avatar (e.g., initials).",table:{type:{summary:"ReactNode"}}}},k={title:"Elements/Avatar/Avatar",component:e,tags:["autodocs"],args:{size:"medium"},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}},argTypes:j},a={args:{children:"A",url:"https://picsum.photos/200",tooltipContent:"John Doe"}},s={render:r=>t.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",flexWrap:"wrap"},children:[t.jsx(e,{...r,size:"extra_small",url:"https://picsum.photos/200",children:"XS"}),t.jsx(e,{...r,size:"small",url:"https://picsum.photos/200",children:"S"}),t.jsx(e,{...r,size:"medium",url:"https://picsum.photos/200",children:"M"}),t.jsx(e,{...r,size:"large",url:"https://picsum.photos/200",children:"L"}),t.jsx(e,{...r,size:"extra_large",url:"https://picsum.photos/200",children:"XL"}),t.jsx(e,{...r,size:"avatar_group",url:"https://picsum.photos/200",children:"AG"})]})},o={render:r=>t.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[t.jsx(e,{...r,url:"https://mui.com/static/images/avatar/1.jpg",size:"small"}),t.jsx(e,{...r,url:"https://mui.com/static/images/avatar/2.jpg",size:"medium"}),t.jsx(e,{...r,url:"https://mui.com/static/images/avatar/3.jpg",size:"large"}),t.jsx(e,{...r,url:"https://mui.com/static/images/avatar/4.jpg",size:"extra_large"})]})},i={render:r=>t.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[t.jsx(e,{...r,tooltipContent:"John Doe",url:"https://picsum.photos/200",children:"JD"}),t.jsx(e,{...r,tooltipContent:"Jane Smith",url:"https://picsum.photos/200"}),t.jsx(e,{...r,tooltipContent:"Admin User",url:"https://picsum.photos/200",children:"AU"})]})};var p,l,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'A',
    url: 'https://picsum.photos/200',
    tooltipContent: 'John Doe'
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var n,c,u;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <AvatarElement {...args} size="extra_small" url="https://picsum.photos/200">\r
        XS\r
      </AvatarElement>\r
      <AvatarElement {...args} size="small" url="https://picsum.photos/200">\r
        S\r
      </AvatarElement>\r
      <AvatarElement {...args} size="medium" url="https://picsum.photos/200">\r
        M\r
      </AvatarElement>\r
      <AvatarElement {...args} size="large" url="https://picsum.photos/200">\r
        L\r
      </AvatarElement>\r
      <AvatarElement {...args} size="extra_large" url="https://picsum.photos/200">\r
        XL\r
      </AvatarElement>\r
      <AvatarElement {...args} size="avatar_group" url="https://picsum.photos/200">\r
        AG\r
      </AvatarElement>\r
    </div>
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var h,d,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>\r
      <AvatarElement {...args} url="https://mui.com/static/images/avatar/1.jpg" size="small" />\r
      <AvatarElement {...args} url="https://mui.com/static/images/avatar/2.jpg" size="medium" />\r
      <AvatarElement {...args} url="https://mui.com/static/images/avatar/3.jpg" size="large" />\r
      <AvatarElement {...args} url="https://mui.com/static/images/avatar/4.jpg" size="extra_large" />\r
    </div>
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var v,x,A;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>\r
      <AvatarElement {...args} tooltipContent="John Doe" url="https://picsum.photos/200">\r
        JD\r
      </AvatarElement>\r
      <AvatarElement {...args} tooltipContent="Jane Smith" url="https://picsum.photos/200" />\r
      <AvatarElement {...args} tooltipContent="Admin User" url="https://picsum.photos/200">\r
        AU\r
      </AvatarElement>\r
    </div>
}`,...(A=(x=i.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const q=["Default","Sizes","WithImage","WithTooltip"];export{a as Default,s as Sizes,o as WithImage,i as WithTooltip,q as __namedExportsOrder,k as default};
