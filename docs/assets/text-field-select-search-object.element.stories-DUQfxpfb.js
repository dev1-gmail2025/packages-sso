import{j as U}from"./jsx-runtime-D_zvdyIk.js";import{R as b}from"./index-j62jqFia.js";import{T as v}from"./text-field-select-search-object.element-DfpAQ7Ob.js";/* empty css               */import"./FileSaver.min-DejWm9ah.js";import"./other.util-A5vTrlK5.js";import"./defaultTheme-BGAZNSBz.js";import"./time.util-BYguZ9lS.js";import"./empty.component-B9326gNJ.js";import"./typography.style-BqPqaOKr.js";import"./image.element-Bb05D7tt.js";import"./stack.style-D9s_iJNk.js";import"./memoTheme-HOUyZqrd.js";import"./DefaultPropsProvider-BVc36nx7.js";import"./Stack-Up7TlUQf.js";import"./index-3f0Hh3Ub.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-BcF2JLY5.js";import"./Box-CNziy5N6.js";import"./InputLabel-BMPpu4_O.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-BfA8Monr.js";import"./Typography-CDoNwpf8.js";import"./isFocusVisible-B8k4qzLc.js";import"./Fade-BcpUhxIW.js";import"./getReactElementRef-BVRziQZO.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./useForkRef-BVpE-hzr.js";import"./loading.component-AKwe2h2y.js";import"./CircularProgress-CBGHLSb1.js";import"./avatar-group.element-CBpRZ6yY.js";import"./tooltip-on-click.element-Bbda5Vu_.js";import"./useTimeout-B9dDFdNe.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./Grow-Dtpwe2QC.js";import"./useSlot-DiW1_K6U.js";import"./Tooltip-mLaLfpgP.js";import"./useId-CFSqmtgZ.js";import"./icon-content-badge-subs.element-BfwFwrIj.js";import"./icon.element-BlOxGscY.js";import"./icon-content-badge.element-C9KrPWSQ.js";import"./icon-content.element-3NrJa7yq.js";import"./Badge-CDUJ6Vev.js";import"./ownerWindow-BMbJ5sQi.js";import"./createSvgIcon-Bxbv8U67.js";import"./ButtonBase-BG16-y-d.js";import"./proxy-DKXG_8Nh.js";import"./avatar.element-BNpxBRwl.js";import"./Popover-DjgrQDlz.js";import"./mergeSlotProps-DMBL9KJu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./avatar-online-status.element-ChPTo68l.js";import"./avatar-user-info-detail.element-CSpF3muw.js";import"./avatar-user-info-update.element-DPiyHH2t.js";import"./string.util-DkuOPhSi.js";import"./avatar-user-info.element-B6yy39KV.js";import"./text-field-label.element-CpLQQkml.js";import"./Autocomplete-D7AfQ8p6.js";import"./TextField-CdoyRMcl.js";import"./FormControl-N1E60Pih.js";import"./isMuiElement-BY4WSVWD.js";import"./List-b54nGxOK.js";import"./Chip-vksgj7uI.js";const Q={name:{control:"text",description:"Field name returned in change payload.",table:{type:{summary:"string"}}},label:{control:"text",description:"Label text rendered by TextFieldLabelElement.",table:{type:{summary:"string | ReactNode"}}},iconLabel:{control:"text",description:"Material icon name displayed next to the label.",table:{type:{summary:"string"}}},colorLabel:{control:"text",description:"Label color.",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Placeholder shown in the input.",table:{type:{summary:"string"}}},options:{control:"object",description:"Autocomplete options.",table:{type:{summary:"any[]"}}},multiple:{control:"boolean",description:"Enable multiple selection.",table:{type:{summary:"boolean"}}},freeSolo:{control:"boolean",description:"Allow custom (not in options) values.",table:{type:{summary:"boolean"}}},showAvatar:{control:"boolean",description:"If true, render option/tag with avatar (expects option.url).",table:{type:{summary:"boolean"}}},maxDisplayTags:{control:{type:"number",min:0,max:10,step:1},description:"Maximum number of tags to display before showing +N chip.",table:{type:{summary:"number"}}},loading:{control:"boolean",description:"Show loading state.",table:{type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Disable input.",table:{type:{summary:"boolean"}}},required:{control:"boolean",description:"Marks label required.",table:{type:{summary:"boolean"}}},error:{control:"text",description:"Error message (truthy triggers error state).",table:{type:{summary:"any"}}},helperText:{control:"text",description:"Helper text shown below the input.",table:{type:{summary:"ReactNode"}}},value:{control:!1,description:"Controlled value. Stories manage this via internal state.",table:{type:{summary:"any"}}},openTest:{control:"boolean",description:"Story/test helper to force dropdown open.",table:{type:{summary:"boolean"}}},isCheckIcon:{control:"boolean",description:"Reserved prop (currently not used by render).",table:{type:{summary:"boolean"}}},getOptionLabel:{control:!1,description:"Map option to label.",table:{type:{summary:"(option: any) => any"}}},isOptionEqualToValue:{control:!1,description:"Compare option with value.",table:{type:{summary:"(option: any, value: any) => boolean"}}},getOptionDisabled:{control:!1,description:"Disable certain options.",table:{type:{summary:"(option: any) => boolean"}}},renderOption:{control:!1,description:"Custom option renderer.",table:{type:{summary:"(props, option, state) => ReactNode"}}},renderTags:{control:!1,description:"Custom tags renderer.",table:{type:{summary:"(value, getTagProps) => ReactNode"}}},onChange:{action:"changed",description:"Called with shape { target: { name, value } }.",table:{type:{summary:"(eventLike: { target: { name?: string; value: any } }) => void"}}},onInputChange:{action:"inputChanged",description:'Called when typing (reason === "input").',table:{type:{summary:"(event, newInputValue: string, reason: string) => void"}}},sx:{control:!1}},s=[{label:`Alice
Developer`,value:"alice",url:"https://i.pravatar.cc/64?img=1"},{label:`Bob
Designer`,value:"bob",url:"https://i.pravatar.cc/64?img=2"},{label:`Charlie
PM`,value:"charlie",url:"https://i.pravatar.cc/64?img=3"}],lt={title:"Elements/TextField/TextFieldSelectSearchObject",component:v,tags:["autodocs"],args:{name:"field",label:"Search object",iconLabel:"search",placeholder:"Tìm kiếm...",helperText:"Gõ để search, chọn để set value",options:s,multiple:!1,freeSolo:!1,showAvatar:!1,maxDisplayTags:3,disabled:!1,required:!1,loading:!1,error:"",value:null,onChange:void 0,onInputChange:void 0},parameters:{layout:"padded"},argTypes:Q},o={render:e=>{const[y,g]=b.useState(e.value??null),[t,n]=b.useState(Array.isArray(e.options)?e.options:[]),[z,h]=b.useState(!!e.loading);return U.jsx(v,{...e,options:t,loading:z,value:y,getOptionLabel:a=>(a==null?void 0:a.label)??"",isOptionEqualToValue:(a,r)=>(a==null?void 0:a.value)===(r==null?void 0:r.value),onChange:a=>{var r;g(a.target.value),(r=e.onChange)==null||r.call(e,a)},onInputChange:(a,r,S)=>{var f;S==="input"&&(h(!0),window.setTimeout(()=>{const J=s.filter(K=>String(K.label).toLowerCase().includes(String(r).toLowerCase()));n(J),h(!1)},400)),(f=e.onInputChange)==null||f.call(e,a,r,S)}})}},i={...o,args:{label:void 0,iconLabel:""}},l={...o,args:{error:"Invalid value",helperText:"Please check your input"}},p={...o,args:{loading:!0}},u={render:e=>{const[y,g]=b.useState(Array.isArray(e.value)?e.value:[]);return U.jsx(v,{...e,multiple:!0,value:y,options:Array.isArray(e.options)?e.options:s,getOptionLabel:t=>(t==null?void 0:t.label)??"",isOptionEqualToValue:(t,n)=>(t==null?void 0:t.value)===(n==null?void 0:n.value),onChange:t=>{var n;g(t.target.value),(n=e.onChange)==null||n.call(e,t)}})},args:{value:[s[0],s[1]],maxDisplayTags:2}},m={...o,args:{showAvatar:!0}},c={...o,args:{getOptionDisabled:e=>(e==null?void 0:e.value)==="bob",value:s[0]}},d={...o,args:{freeSolo:!0}};var x,O,C;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<any>(args.value ?? null);
    const [options, setOptions] = React.useState<any[]>(Array.isArray(args.options) ? args.options : []);
    const [loading, setLoading] = React.useState<boolean>(Boolean(args.loading));
    return <TextFieldSelectSearchObjectElement {...args} options={options} loading={loading} value={value} getOptionLabel={(opt: any) => opt?.label ?? ''} isOptionEqualToValue={(opt: any, val: any) => opt?.value === val?.value} onChange={event => {
      setValue(event.target.value);
      args.onChange?.(event);
    }} onInputChange={(event, newInputValue, reason) => {
      if (reason === 'input') {
        setLoading(true);
        // Fake async search to demonstrate loading UI.
        window.setTimeout(() => {
          const next = baseOptions.filter(opt => String(opt.label).toLowerCase().includes(String(newInputValue).toLowerCase()));
          setOptions(next);
          setLoading(false);
        }, 400);
      }
      args.onInputChange?.(event, newInputValue, reason);
    }} />;
  }
}`,...(C=(O=o.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var T,w,L;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Default,
  args: {
    label: undefined,
    iconLabel: ''
  }
}`,...(L=(w=i.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var A,D,E;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Default,
  args: {
    error: 'Invalid value',
    helperText: 'Please check your input'
  }
}`,...(E=(D=l.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var I,V,R;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Default,
  args: {
    loading: true
  }
}`,...(R=(V=p.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var j,F,k;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<any[]>(Array.isArray(args.value) ? args.value : []);
    return <TextFieldSelectSearchObjectElement {...args} multiple value={value} options={Array.isArray(args.options) ? args.options : baseOptions} getOptionLabel={(opt: any) => opt?.label ?? ''} isOptionEqualToValue={(opt: any, val: any) => opt?.value === val?.value} onChange={event => {
      setValue(event.target.value as unknown as any[]);
      args.onChange?.(event);
    }} />;
  },
  args: {
    value: [baseOptions[0], baseOptions[1]],
    maxDisplayTags: 2
  }
}`,...(k=(F=u.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var q,M,W;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Default,
  args: {
    showAvatar: true
  }
}`,...(W=(M=m.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var N,P,B;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Default,
  args: {
    getOptionDisabled: (option: any) => option?.value === 'bob',
    value: baseOptions[0]
  }
}`,...(B=(P=c.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var _,G,H;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Default,
  args: {
    freeSolo: true
  }
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const pt=["Default","WithoutLabel","ErrorState","Loading","Multiple","WithAvatar","WithDisabledOption","FreeSolo"];export{o as Default,l as ErrorState,d as FreeSolo,p as Loading,u as Multiple,m as WithAvatar,c as WithDisabledOption,i as WithoutLabel,pt as __namedExportsOrder,lt as default};
