import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as u}from"./index-DtL3pAzF.js";import{C as r}from"./check-box.element-CWyb236U.js";import"./FileSaver.min-sVBIqHNu.js";import"./index-j62jqFia.js";import"./style.const-CSB1CXgR.js";import"./time.util-DFcg3e45.js";import"./FormControlLabel-DHLySHw1.js";import"./DefaultPropsProvider-Brxq0OUc.js";import"./defaultTheme-CiSRXe73.js";import"./useFormControl-CmOg5wnR.js";import"./useSlot-DBQWuDEP.js";import"./useForkRef-BVpE-hzr.js";import"./useControlled-CdETZoY_.js";import"./ButtonBase-RoDX6TIe.js";import"./useTimeout-1tU6oJ84.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./extendSxProp-QnK7WPWm.js";import"./isFocusVisible-B8k4qzLc.js";import"./Typography-CjbH1rA4.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-BqnXePOd.js";import"./mergeSlotProps-Bfz0OzkQ.js";const x={label:{control:"text",description:"Label displayed next to the checkbox.",table:{type:{summary:"string"}}},checked:{control:"boolean",description:"If true, the checkbox is checked.",table:{type:{summary:"boolean"}}},disabled:{control:"boolean",description:"If true, the checkbox is disabled.",table:{type:{summary:"boolean"}}},indeterminate:{control:"boolean",description:"If true, the checkbox appears indeterminate.",table:{type:{summary:"boolean"}}},size:{control:"select",options:["small","medium"],description:"The size of the checkbox.",table:{type:{summary:'"small" | "medium"'},defaultValue:{summary:"small"}}},color:{control:"select",options:["primary","secondary","success","error","info","warning","default"],description:"The color of the checkbox.",table:{type:{summary:'CheckboxElementProps["color"]'},defaultValue:{summary:"primary"}}},name:{control:"text",description:"Name attribute of the checkbox input.",table:{type:{summary:"string"}}},sx:{control:!1,description:"Custom styles for the checkbox.",table:{type:{summary:"SxProps<Theme>"}}},onChange:{action:"changed",description:"Callback fired when the checked state is changed.",table:{type:{summary:"(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void"}}}},H={title:"Elements/CheckBox/CheckBox",component:r,tags:["autodocs"],args:{label:"Accept terms and conditions",onChange:u(),color:"primary",size:"small"},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}},argTypes:x},a={},o={render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(r,{...t,label:"Unchecked",checked:!1}),e.jsx(r,{...t,label:"Checked",checked:!0}),e.jsx(r,{...t,label:"Indeterminate",indeterminate:!0}),e.jsx(r,{...t,label:"Disabled unchecked",checked:!1,disabled:!0}),e.jsx(r,{...t,label:"Disabled checked",checked:!0,disabled:!0})]})},s={render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(r,{...t,size:"small",label:"Small size"}),e.jsx(r,{...t,size:"medium",label:"Medium size"})]})};var l,c,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var n,m,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>\r
      <CheckboxElement {...args} label='Unchecked' checked={false} />\r
      <CheckboxElement {...args} label='Checked' checked />\r
      <CheckboxElement {...args} label='Indeterminate' indeterminate />\r
      <CheckboxElement {...args} label='Disabled unchecked' checked={false} disabled />\r
      <CheckboxElement {...args} label='Disabled checked' checked disabled />\r
    </div>
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,b,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>\r
      <CheckboxElement {...args} size='small' label='Small size' />\r
      <CheckboxElement {...args} size='medium' label='Medium size' />\r
    </div>
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const N=["Default","States","Sizes"];export{a as Default,s as Sizes,o as States,N as __namedExportsOrder,H as default};
