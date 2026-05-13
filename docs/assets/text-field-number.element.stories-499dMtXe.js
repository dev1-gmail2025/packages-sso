import{j as F}from"./jsx-runtime-D_zvdyIk.js";import{R as N}from"./index-j62jqFia.js";import{T as u}from"./text-field-number.element-D_uLH4Jh.js";/* empty css               */import"./FileSaver.min-BMv5fHHc.js";import"./time.util-BYguZ9lS.js";import"./typography.style-BgvzpQXm.js";import"./image.element-BMkBHvjG.js";import"./stack.style-BqTSJB_E.js";import"./memoTheme-HOUyZqrd.js";import"./defaultTheme-BGAZNSBz.js";import"./DefaultPropsProvider-BVc36nx7.js";import"./Stack-Up7TlUQf.js";import"./index-3f0Hh3Ub.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-BcF2JLY5.js";import"./Box-CNziy5N6.js";import"./InputLabel-BMPpu4_O.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-BfA8Monr.js";import"./Typography-CDoNwpf8.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-D3WwIlNy.js";import"./tooltip-on-click.element-Bbda5Vu_.js";import"./useForkRef-BVpE-hzr.js";import"./getReactElementRef-BVRziQZO.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./useTimeout-B9dDFdNe.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./Grow-Dtpwe2QC.js";import"./useSlot-DiW1_K6U.js";import"./Tooltip-mLaLfpgP.js";import"./useId-CFSqmtgZ.js";import"./icon-content-badge-subs.element-D8A3z4d3.js";import"./icon.element-C4k-nGr5.js";import"./icon-content-badge.element-ClOzJ67A.js";import"./icon-content.element-ByXkQ2iZ.js";import"./Badge-CDUJ6Vev.js";import"./ownerWindow-BMbJ5sQi.js";import"./createSvgIcon-Bxbv8U67.js";import"./ButtonBase-BG16-y-d.js";import"./proxy-DKXG_8Nh.js";import"./text-field-label.element-BS6BHgaj.js";import"./TextField-CdoyRMcl.js";import"./FormControl-N1E60Pih.js";import"./isMuiElement-BY4WSVWD.js";import"./Popover-DjgrQDlz.js";import"./mergeSlotProps-DMBL9KJu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-BcpUhxIW.js";import"./List-b54nGxOK.js";const A={name:{control:"text",description:"Field name returned in change payload.",table:{type:{summary:"string"}}},label:{control:"text",description:"Label text rendered by TextFieldLabelElement.",table:{type:{summary:"string | ReactNode"}}},iconLabel:{control:"text",description:"Material icon name displayed next to the label.",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Placeholder text.",table:{type:{summary:"string"}}},value:{control:!1,description:"Controlled numeric value. Stories manage this via internal state.",table:{type:{summary:"any"}}},decimalScale:{control:{type:"number",min:0,max:6,step:1},description:"Max digits after decimal separator.",table:{type:{summary:"number"}}},showResetButton:{control:"boolean",description:"If true and value is set, shows a reset icon button.",table:{type:{summary:"boolean"}}},required:{control:"boolean",description:"Marks label required.",table:{type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Disable input.",table:{type:{summary:"boolean"}}},error:{control:"text",description:"Error message (truthy triggers error state).",table:{type:{summary:"any"}}},helperText:{control:"text",description:"Helper text shown below the input.",table:{type:{summary:"ReactNode"}}},isAllowed:{control:!1,description:"react-number-format guard to allow/reject next value.",table:{type:{summary:"(values: any) => boolean"}}},onChange:{action:"changed",description:"Called with shape { target: { name, value } } where value is a number | undefined.",table:{type:{summary:"(eventLike: { target: { name?: string; value: any } }) => void"}}},onReset:{action:"reset",description:"Called when reset button clicked.",table:{type:{summary:"() => void"}}},InputProps:{control:!1},sx:{control:!1}},Be={title:"Elements/TextField/TextFieldNumber",component:u,tags:["autodocs"],args:{name:"amount",label:"Số tiền",iconLabel:"paid",placeholder:"Nhập số...",value:1234567,decimalScale:0,showResetButton:!0,required:!1,disabled:!1,error:"",helperText:"Ví dụ: 1,234,567",onChange:void 0,onReset:void 0,isAllowed:void 0},parameters:{layout:"padded"},argTypes:A},o={render:e=>{const[p,a]=N.useState(e.value??void 0);return F.jsx(u,{...e,value:p,onChange:t=>{var r;a(t.target.value),(r=e.onChange)==null||r.call(e,t)},onReset:()=>{var t;a(void 0),(t=e.onReset)==null||t.call(e)}})}},n={...o,args:{label:"Số thập phân",iconLabel:"functions",value:1234.5,decimalScale:5,helperText:"Decimal scale = 2"}},l={...o,args:{error:"Giá trị không hợp lệ",helperText:"Vui lòng nhập lại"}},i={...o,args:{label:void 0,iconLabel:""}},s={...o,args:{showResetButton:!1}},m={render:e=>{const[p,a]=N.useState(e.value??void 0);return F.jsx(u,{...e,value:p,isAllowed:t=>{const r=t==null?void 0:t.floatValue;return r===void 0||Number.isFinite(r)&&r<=1e3},helperText:"Chỉ cho phép giá trị ≤ 1,000",onChange:t=>{var r;a(t.target.value),(r=e.onChange)==null||r.call(e,t)},onReset:()=>{var t;a(void 0),(t=e.onReset)==null||t.call(e)}})},args:{value:999}};var c,d,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<any>(args.value ?? undefined);
    return <TextFieldNumberElement {...args} value={value} onChange={event => {
      setValue(event.target.value);
      args.onChange?.(event);
    }} onReset={() => {
      setValue(undefined);
      args.onReset?.();
    }} />;
  }
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var b,v,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: 'Số thập phân',
    iconLabel: 'functions',
    value: 1234.5,
    decimalScale: 5,
    helperText: 'Decimal scale = 2'
  }
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,x,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Default,
  args: {
    error: 'Giá trị không hợp lệ',
    helperText: 'Vui lòng nhập lại'
  }
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var R,S,w;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: undefined,
    iconLabel: ''
  }
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var T,C,V;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Default,
  args: {
    showResetButton: false
  }
}`,...(V=(C=s.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var D,L,E;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<any>(args.value ?? undefined);
    return <TextFieldNumberElement {...args} value={value} isAllowed={values => {
      const next = values?.floatValue;
      return next === undefined || Number.isFinite(next) && next <= 1000;
    }} helperText='Chỉ cho phép giá trị ≤ 1,000' onChange={event => {
      setValue(event.target.value);
      args.onChange?.(event);
    }} onReset={() => {
      setValue(undefined);
      args.onReset?.();
    }} />;
  },
  args: {
    value: 999
  }
}`,...(E=(L=m.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};const We=["Default","Decimal","ErrorState","WithoutLabel","WithoutResetButton","WithIsAllowed"];export{n as Decimal,o as Default,l as ErrorState,m as WithIsAllowed,i as WithoutLabel,s as WithoutResetButton,We as __namedExportsOrder,Be as default};
