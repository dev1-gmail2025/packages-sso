import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as u}from"./index-DtL3pAzF.js";import{C as r}from"./check-box.element-Dil42gb-.js";/* empty css               */import"./FileSaver.min-DeWzra_O.js";import"./index-j62jqFia.js";import"./time.util-BYguZ9lS.js";import"./FormControlLabel-asZXz9Ox.js";import"./memoTheme-HOUyZqrd.js";import"./defaultTheme-BGAZNSBz.js";import"./DefaultPropsProvider-BVc36nx7.js";import"./useFormControl-CmOg5wnR.js";import"./useSlot-DiW1_K6U.js";import"./useForkRef-BVpE-hzr.js";import"./useTimeout-B9dDFdNe.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./ButtonBase-BG16-y-d.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./index-3f0Hh3Ub.js";import"./isFocusVisible-B8k4qzLc.js";import"./Typography-CDoNwpf8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-Bxbv8U67.js";import"./mergeSlotProps-DMBL9KJu.js";const x={label:{control:"text",description:"Label displayed next to the checkbox.",table:{type:{summary:"string"}}},checked:{control:"boolean",description:"If true, the checkbox is checked.",table:{type:{summary:"boolean"}}},disabled:{control:"boolean",description:"If true, the checkbox is disabled.",table:{type:{summary:"boolean"}}},indeterminate:{control:"boolean",description:"If true, the checkbox appears indeterminate.",table:{type:{summary:"boolean"}}},size:{control:"select",options:["small","medium"],description:"The size of the checkbox.",table:{type:{summary:'"small" | "medium"'},defaultValue:{summary:"small"}}},color:{control:"select",options:["primary","secondary","success","error","info","warning","default"],description:"The color of the checkbox.",table:{type:{summary:'CheckboxElementProps["color"]'},defaultValue:{summary:"primary"}}},name:{control:"text",description:"Name attribute of the checkbox input.",table:{type:{summary:"string"}}},sx:{control:!1,description:"Custom styles for the checkbox.",table:{type:{summary:"SxProps<Theme>"}}},onChange:{action:"changed",description:"Callback fired when the checked state is changed.",table:{type:{summary:"(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void"}}}},N={title:"Elements/CheckBox/CheckBox",component:r,tags:["autodocs"],args:{label:"Accept terms and conditions",onChange:u(),color:"primary",size:"small"},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}},argTypes:x},a={},o={render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(r,{...t,label:"Unchecked",checked:!1}),e.jsx(r,{...t,label:"Checked",checked:!0}),e.jsx(r,{...t,label:"Indeterminate",indeterminate:!0}),e.jsx(r,{...t,label:"Disabled unchecked",checked:!1,disabled:!0}),e.jsx(r,{...t,label:"Disabled checked",checked:!0,disabled:!0})]})},s={render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(r,{...t,size:"small",label:"Small size"}),e.jsx(r,{...t,size:"medium",label:"Medium size"})]})};var l,c,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,n,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>\r
      <CheckboxElement {...args} label="Unchecked" checked={false} />\r
      <CheckboxElement {...args} label="Checked" checked />\r
      <CheckboxElement {...args} label="Indeterminate" indeterminate />\r
      <CheckboxElement {...args} label="Disabled unchecked" checked={false} disabled />\r
      <CheckboxElement {...args} label="Disabled checked" checked disabled />\r
    </div>
}`,...(d=(n=o.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var p,b,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>\r
      <CheckboxElement {...args} size="small" label="Small size" />\r
      <CheckboxElement {...args} size="medium" label="Medium size" />\r
    </div>
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const O=["Default","States","Sizes"];export{a as Default,s as Sizes,o as States,O as __namedExportsOrder,N as default};
