import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as t}from"./avatar-online-status.element-oksSvmTg.js";import"./avatar.element-S4asLo1S.js";import"./DefaultPropsProvider-Brxq0OUc.js";import"./defaultTheme-CiSRXe73.js";import"./index-j62jqFia.js";import"./FileSaver.min-sVBIqHNu.js";import"./style.const-CSB1CXgR.js";import"./time.util-DFcg3e45.js";import"./createSvgIcon-BqnXePOd.js";import"./useSlot-DBQWuDEP.js";import"./useForkRef-BVpE-hzr.js";import"./Tooltip-pSKwotpI.js";import"./index-C8adVhmr.js";import"./useTheme-eMA7PP5Z.js";import"./useTimeout-1tU6oJ84.js";import"./useControlled-CdETZoY_.js";import"./useId-CFSqmtgZ.js";import"./getReactElementRef-CJ1MGg2c.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./Grow-BH2Uzhjw.js";import"./useSlotProps-_-7fWPp0.js";import"./isFocusVisible-B8k4qzLc.js";import"./color.const-D0XZ47LU.js";import"./Badge-CMbUSK4D.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const v={url:{control:"text",description:"URL of the avatar image.",table:{type:{summary:"string | null"}}},size:{control:"select",options:["extra_small","small","medium","large","extra_large","avatar_group"],description:"The size of the avatar.",table:{type:{summary:"SizeProps | string"},defaultValue:{summary:"extra_large"}}},online:{control:"boolean",description:"If true, shows online status with green badge and animation. If false, shows offline status with gray badge.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{control:"text",description:"Content to display inside the avatar (e.g., initials).",table:{type:{summary:"ReactNode"}}}},H={title:"Elements/Avatar/AvatarOnlineStatus",component:t,tags:["autodocs"],args:{size:"extra_large",online:!1},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}},argTypes:v},a={args:{url:"https://picsum.photos/200",children:"JD"}},r={render:n=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(t,{...n,size:"small",online:!0,children:"S"}),e.jsx("span",{style:{fontSize:12},children:"Small"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(t,{...n,size:"medium",online:!0,children:"M"}),e.jsx("span",{style:{fontSize:12},children:"Medium"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(t,{...n,size:"large",online:!0,children:"L"}),e.jsx("span",{style:{fontSize:12},children:"Large"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(t,{...n,size:"extra_large",online:!0,children:"XL"}),e.jsx("span",{style:{fontSize:12},children:"Extra Large"})]})]}),parameters:{chromatic:{delay:500}}},s={render:n=>e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[e.jsx(t,{...n,url:"https://mui.com/static/images/avatar/1.jpg",online:!0}),e.jsx(t,{...n,url:"https://mui.com/static/images/avatar/2.jpg",online:!1}),e.jsx(t,{...n,url:"https://mui.com/static/images/avatar/3.jpg",online:!0}),e.jsx(t,{...n,url:"https://mui.com/static/images/avatar/4.jpg",online:!1})]}),parameters:{chromatic:{delay:500}}},i={render:n=>e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(t,{...n,online:!0,url:"https://picsum.photos/200"}),e.jsx("span",{style:{fontSize:12,fontWeight:600},children:"Online"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(t,{...n,online:!1,url:"https://picsum.photos/200"}),e.jsx("span",{style:{fontSize:12,fontWeight:600},children:"Offline"})]})]}),parameters:{chromatic:{delay:500}}};var l,o,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    url: 'https://picsum.photos/200',
    children: 'JD'
  }
}`,...(p=(o=a.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>\r
        <AvatarOnlineStatusElement {...args} size='small' online={true}>\r
          S\r
        </AvatarOnlineStatusElement>\r
        <span style={{
        fontSize: 12
      }}>Small</span>\r
      </div>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>\r
        <AvatarOnlineStatusElement {...args} size='medium' online={true}>\r
          M\r
        </AvatarOnlineStatusElement>\r
        <span style={{
        fontSize: 12
      }}>Medium</span>\r
      </div>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>\r
        <AvatarOnlineStatusElement {...args} size='large' online={true}>\r
          L\r
        </AvatarOnlineStatusElement>\r
        <span style={{
        fontSize: 12
      }}>Large</span>\r
      </div>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>\r
        <AvatarOnlineStatusElement {...args} size='extra_large' online={true}>\r
          XL\r
        </AvatarOnlineStatusElement>\r
        <span style={{
        fontSize: 12
      }}>Extra Large</span>\r
      </div>\r
    </div>,
  parameters: {
    chromatic: {
      delay: 500
    }
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,g,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>\r
      <AvatarOnlineStatusElement {...args} url='https://mui.com/static/images/avatar/1.jpg' online={true} />\r
      <AvatarOnlineStatusElement {...args} url='https://mui.com/static/images/avatar/2.jpg' online={false} />\r
      <AvatarOnlineStatusElement {...args} url='https://mui.com/static/images/avatar/3.jpg' online={true} />\r
      <AvatarOnlineStatusElement {...args} url='https://mui.com/static/images/avatar/4.jpg' online={false} />\r
    </div>,
  parameters: {
    chromatic: {
      delay: 500
    }
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,y,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap'
  }}>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>\r
        <AvatarOnlineStatusElement {...args} online={true} url='https://picsum.photos/200' />\r
        <span style={{
        fontSize: 12,
        fontWeight: 600
      }}>Online</span>\r
      </div>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>\r
        <AvatarOnlineStatusElement {...args} online={false} url='https://picsum.photos/200' />\r
        <span style={{
        fontSize: 12,
        fontWeight: 600
      }}>Offline</span>\r
      </div>\r
    </div>,
  parameters: {
    chromatic: {
      delay: 500
    }
  }
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const K=["Default","Sizes","WithImage","StatusComparison"];export{a as Default,r as Sizes,i as StatusComparison,s as WithImage,K as __namedExportsOrder,H as default};
