import{j as W}from"./jsx-runtime-D_zvdyIk.js";import{R as j}from"./index-j62jqFia.js";import{T as c}from"./text-field-select.element-DP8St7IO.js";import"./ckeditor-CTLCbsNz.js";import"./time.util-BYguZ9lS.js";import"./empty.component-DQWAoh-q.js";import"./typography.style-CkWB8eZ1.js";import"./image.element-BzCya6VX.js";import"./stack.style-yVtBqaKj.js";import"./memoTheme-JcuT4PI6.js";import"./defaultTheme-CAzuqlo8.js";import"./DefaultPropsProvider-BwONcEM9.js";import"./Stack-BWemv0CO.js";import"./createStack-_FjnXW6X.js";import"./extendSxProp-BhkXlpcg.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme--firQ3HK.js";import"./Box-CJND6-sR.js";import"./InputLabel-Xf4L_974.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-BIiOul_5.js";import"./Typography-Bf8WTvH-.js";import"./index-F4SWrtxx.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-D3ae_aVB.js";import"./Fade-NGFjKnxD.js";import"./getReactElementRef-BVRziQZO.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./useForkRef-BVpE-hzr.js";import"./avatar-group.element-DqOG9HI5.js";import"./icon-button.element-CeM9eyxq.js";import"./icon.element-D4jnsA1U.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-DMmz3Ngg.js";import"./useTimeout-BnjI5Ij7.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./CircularProgress-SwCU_jrE.js";import"./icon-content-badge-subs.element-cCXQ9PVw.js";import"./tooltip-on-click.element-DkCofoav.js";import"./Grow-DOIJXnb6.js";import"./useSlot-BHAemyrm.js";import"./Tooltip-C-jnBW1Q.js";import"./useControlled-CdETZoY_.js";import"./icon-content-badge.element-CGf3sbLu.js";import"./icon-content.element-DlSOyn8V.js";import"./Badge-4F4pJWAG.js";import"./ownerWindow-SaFBzm43.js";import"./createSvgIcon-CgF2gLAa.js";import"./proxy-DKXG_8Nh.js";import"./avatar.element-DnKBsB0B.js";import"./Popover-Dcprfih5.js";import"./mergeSlotProps-C1T8RA4K.js";import"./createChainedFunction-BO_9K8Jh.js";import"./avatar-online-status.element-W8gsYIgI.js";import"./avatar-user-info-detail.element-fcGRxM02.js";import"./avatar-user-info-update.element-rsH5SLEz.js";import"./string.util-DkuOPhSi.js";import"./loading.component-EnOu9Ri6.js";import"./avatar-user-info.element-D4CSZD_E.js";import"./text-field-label.element-DV8iDHXQ.js";import"./TextField-BEYRgNgZ.js";import"./FormControl-CkqPUPi_.js";import"./isMuiElement-BY4WSVWD.js";import"./List-sl9rBPBu.js";import"./MenuItem-BrS6X00U.js";const k={name:{control:"text",description:"Field name returned in change payload.",table:{type:{summary:"string"}}},label:{control:"text",description:"Label text rendered by TextFieldLabelElement.",table:{type:{summary:"string | ReactNode"}}},iconLabel:{control:"text",description:"Material icon name displayed next to the label.",table:{type:{summary:"string"}}},options:{control:"object",description:"Select options (supports either primitives or { label, value, url }).",table:{type:{summary:"any[]"}}},placeholder:{control:"text",description:"Placeholder text.",table:{type:{summary:"string"}}},value:{control:!1,description:"Controlled value. Stories manage this via internal state.",table:{type:{summary:"any"}}},required:{control:"boolean",description:"Marks label required.",table:{type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Disable input.",table:{type:{summary:"boolean"}}},error:{control:"text",description:"Error message (truthy triggers error state).",table:{type:{summary:"any"}}},helperText:{control:"text",description:"Helper text shown below the input.",table:{type:{summary:"ReactNode"}}},multiple:{control:"boolean",description:"Enable multiple selection (value becomes an array).",table:{type:{summary:"boolean"}}},showAvatar:{control:"boolean",description:"If true, renders option with an avatar (expects option.url).",table:{type:{summary:"boolean"}}},getOptionDisabled:{control:!1,description:"Disable certain options.",table:{type:{summary:"(option: any) => boolean"}}},renderValue:{control:!1,description:"Custom render for selected value.",table:{type:{summary:"(selected: any) => ReactNode"}}},openTest:{control:"boolean",description:"Story/test helper to force dropdown open initially.",table:{type:{summary:"boolean"}}},onChange:{action:"changed",description:"Called with shape { target: { name, value } }.",table:{type:{summary:"(eventLike: { target: { name?: string; value: any } }) => void"}}},sx:{control:!1}},Ye={title:"Elements/TextField/TextFieldSelect",component:c,tags:["autodocs"],args:{name:"field",label:"Field label",iconLabel:"edit",placeholder:"Chọn...",value:"",required:!1,disabled:!1,error:"",helperText:"Helper text",options:[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}],multiple:!1,showAvatar:!1,onChange:void 0},parameters:{layout:"padded"},argTypes:k},t={render:e=>{const[m,u]=j.useState(e.value??"");return W.jsx(c,{...e,value:m,onChange:r=>{var a;u(r.target.value),(a=e.onChange)==null||a.call(e,r)}})}},o={...t,args:{label:void 0,iconLabel:""}},l={...t,args:{required:!0}},n={...t,args:{error:"Invalid value",helperText:"Please check your input"}},i={render:e=>{const[m,u]=j.useState(Array.isArray(e.value)?e.value:[]);return W.jsx(c,{...e,multiple:!0,value:m,onChange:r=>{var a;u(r.target.value),(a=e.onChange)==null||a.call(e,r)}})},args:{value:[]}},s={...t,args:{value:"b",getOptionDisabled:e=>(e==null?void 0:e.value)==="b"}},p={...t,args:{showAvatar:!0,options:[{label:"Alice",value:"alice",url:"https://i.pravatar.cc/64?img=1"},{label:"Bob",value:"bob",url:"https://i.pravatar.cc/64?img=2"},{label:"Charlie",value:"charlie",url:"https://i.pravatar.cc/64?img=3"}]}};var d,b,v;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<any>(args.value ?? '');
    return <TextFieldSelectElement {...args} value={value} onChange={event => {
      setValue(event.target.value);
      args.onChange?.(event);
    }} />;
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,g,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: undefined,
    iconLabel: ''
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,f,S;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Default,
  args: {
    required: true
  }
}`,...(S=(f=l.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var C,A,D;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Default,
  args: {
    error: 'Invalid value',
    helperText: 'Please check your input'
  }
}`,...(D=(A=n.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var T,E,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<any[]>(Array.isArray(args.value) ? args.value : []);
    return <TextFieldSelectElement {...args} multiple value={value} onChange={event => {
      setValue(event.target.value as unknown as any[]);
      args.onChange?.(event);
    }} />;
  },
  args: {
    value: []
  }
}`,...(w=(E=i.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var R,F,L;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Default,
  args: {
    value: 'b',
    getOptionDisabled: (option: any) => option?.value === 'b'
  }
}`,...(L=(F=s.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var O,q,V;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Default,
  args: {
    showAvatar: true,
    options: [{
      label: 'Alice',
      value: 'alice',
      url: 'https://i.pravatar.cc/64?img=1'
    }, {
      label: 'Bob',
      value: 'bob',
      url: 'https://i.pravatar.cc/64?img=2'
    }, {
      label: 'Charlie',
      value: 'charlie',
      url: 'https://i.pravatar.cc/64?img=3'
    }]
  }
}`,...(V=(q=p.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};const Ze=["Default","WithoutLabel","Required","ErrorState","Multiple","WithDisabledOption","WithAvatar"];export{t as Default,n as ErrorState,i as Multiple,l as Required,p as WithAvatar,s as WithDisabledOption,o as WithoutLabel,Ze as __namedExportsOrder,Ye as default};
