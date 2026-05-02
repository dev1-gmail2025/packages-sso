import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{f as u}from"./index-DtL3pAzF.js";import{r as c}from"./index-j62jqFia.js";import{S as s}from"./switch.element-DWLTvXoc.js";import"./useTheme-BcF2JLY5.js";import"./defaultTheme-BGAZNSBz.js";import"./proxy-DKXG_8Nh.js";const p={name:{control:"text",description:"Field name passed in change payload.",table:{type:{summary:"string"}}},value:{control:"boolean",description:"Current on/off value. In stories we usually manage this via state.",table:{type:{summary:"boolean"}}},onChange:{action:"changed",description:"Called with shape { target: { name, value } } when toggled.",table:{type:{summary:"(eventLike: { target: { name?: string; value: boolean } }) => void"}}}},w={title:"Elements/Switch/Switch",component:s,tags:["autodocs"],args:{name:"switch",value:!1,onChange:u()},parameters:{layout:"centered"},argTypes:p},a={render:e=>{const[l,i]=c.useState(e.value);return m.jsx(s,{...e,value:l,onChange:t=>{i(t.target.value),e.onChange&&e.onChange(t)}})}};var n,r,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<boolean>(args.value);
    return <SwitchElement {...args} value={value} onChange={eventLike => {
      setValue(eventLike.target.value);
      args.onChange && args.onChange(eventLike);
    }} />;
  }
}`,...(o=(r=a.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const S=["Default"];export{a as Default,S as __namedExportsOrder,w as default};
