import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{f as u}from"./index-DtL3pAzF.js";import{r as o}from"./index-j62jqFia.js";/* empty css               */import{b}from"./FileSaver.min-BhaN8JYp.js";import"./time.util-BYguZ9lS.js";import"./typography.style-BmBgZtfi.js";import{g as d}from"./stack.style-B2z74QFP.js";import"./button-icon-content-opacity.element-Bo56__2C.js";import"./button-icon.element-sJan9fRF.js";import"./button-image.element-B60yiS1z.js";import"./button-upload-file.element--3AiwKo6.js";import{B as M}from"./button.element-CZ7mVujK.js";import{D as m,A as T,F as e}from"./advanced-operator-filter-dialog.component-n5wNrXK5.js";import{L as W}from"./useMobilePicker-C12HcznL.js";import{A as P}from"./AdapterDayjs-CjJdfIzO.js";import{T as S}from"./Typography-CDoNwpf8.js";import"./image.element-2AGErT7k.js";import"./useTheme-BcF2JLY5.js";import"./defaultTheme-BGAZNSBz.js";import"./DefaultPropsProvider-BVc36nx7.js";import"./memoTheme-HOUyZqrd.js";import"./index-3f0Hh3Ub.js";import"./Box-CNziy5N6.js";import"./InputLabel-BMPpu4_O.js";import"./useFormControl-CmOg5wnR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./link.element-BfA8Monr.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-4VAWJA3k.js";import"./Stack-Up7TlUQf.js";import"./index-DP7gAqwz.js";import"./loading.component-DXV7DRtu.js";import"./CircularProgress-CBGHLSb1.js";import"./tooltip-on-click.element-Bbda5Vu_.js";import"./useForkRef-BVpE-hzr.js";import"./getReactElementRef-BVRziQZO.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./useTimeout-B9dDFdNe.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./Grow-Dtpwe2QC.js";import"./useSlot-DiW1_K6U.js";import"./Tooltip-mLaLfpgP.js";import"./useId-CFSqmtgZ.js";import"./icon-content-badge-subs.element-DhGG62iK.js";import"./icon.element-C0E_o0GG.js";import"./icon-content-badge.element-D_XMI4rR.js";import"./icon-content.element-CBchXM-d.js";import"./Badge-CDUJ6Vev.js";import"./ownerWindow-BMbJ5sQi.js";import"./createSvgIcon-Bxbv8U67.js";import"./ButtonBase-BG16-y-d.js";import"./proxy-DKXG_8Nh.js";import"./Button-BUMS_kt5.js";import"./time-ago-content.component-BPaNelqx.js";import"./avatar-group.element-CaZdFqFx.js";import"./avatar.element-DKjsTTck.js";import"./Popover-DjgrQDlz.js";import"./mergeSlotProps-DMBL9KJu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-BcpUhxIW.js";import"./avatar-online-status.element-HXwhvqLj.js";import"./avatar-user-info-detail.element-Bus4Wp1p.js";import"./avatar-user-info-update.element-CRnmIRFa.js";import"./string.util-DkuOPhSi.js";import"./avatar-user-info.element-BNGBDBHg.js";import"./typography-content-caption.component-Cz9L4VMC.js";import"./typography-grid-info-row.component-CA0di78q.js";import"./typography-info-row.component-p7rujYcw.js";import"./typography-info-user.component-Cb0f9_Sg.js";import"./text-field-date.element-BCOS3QqI.js";import"./picker.style-DpaTuhfa.js";import"./text-field-label.element-DzGyX56t.js";import"./DatePicker-DA8DNIZ3.js";import"./text-field-date-range.element-YfyHqUjX.js";import"./text-field-date-time.element-CVPVxXo6.js";import"./MenuItem-CDwydvny.js";import"./List-b54nGxOK.js";import"./TextField-CdoyRMcl.js";import"./FormControl-N1E60Pih.js";import"./isMuiElement-BY4WSVWD.js";import"./text-field-email-autocomplete.element-BECKypfK.js";import"./Autocomplete-D7AfQ8p6.js";import"./Chip-vksgj7uI.js";import"./text-field-number.element-Po90Mmc9.js";import"./text-field-select.element-CR9PyX9-.js";import"./empty.component-CEUftavm.js";import"./text-field-select-search-object.element-79_Raq5z.js";import"./text-highlight.element-DlZuJ7s2.js";import"./text-field.element-sREGbJII.js";import"./tag.element-CsQdC1-j.js";import"./Stack-E1-rQfxm.js";import"./typography-limit-one-line.component-BoKlCPFm.js";import"./time-ago.component-BI5bERyh.js";import"./ListItem-CFlwkaq-.js";const _=[{key:"status",label:"Trạng thái",type:"select",defaultValue:"",options:[{label:"Tất cả",value:""},{label:"Active",value:"Active"},{label:"Inactive",value:"Inactive"}]},{key:"createdAt",label:"Ngày tạo",type:"date",defaultValue:m.TODAY}],jt={title:"Elements/Filters/AdvancedOperatorFilterDialog",component:T,tags:["autodocs"],args:{open:!1,title:"Tùy chỉnh bộ lọc nâng cao",fields:_,value:[],fullOperator:!1,offset:{x:0,y:8},onClose:u(),onApply:u()},parameters:{layout:"fullscreen"}},n=r=>{const c=o.useRef(null),[C,l]=o.useState(!!r.open);o.useEffect(()=>l(!!r.open),[r.open]);const R=o.useMemo(()=>r.value||[],[r.value]);return t.jsx(W,{dateAdapter:P,children:t.jsxs(d,{sx:{minHeight:"300px",p:b},children:[t.jsxs(d,{children:[t.jsx(M,{ref:c,content:"Open dialog",onClick:()=>l(!0)}),t.jsx(S,{children:"Popover sẽ neo theo nút này (anchorEl)."})]}),t.jsx(T,{...r,open:C,anchorEl:c.current,value:R,onClose:()=>{l(!1),r.onClose()},onApply:q=>{r.onApply(q)}})]})})},a={render:r=>t.jsx(n,{...r})},p={render:r=>t.jsx(n,{...r}),args:{value:[{field:"status",operator:e.Equals,value:"Active"},{field:"createdAt",operator:e.Equals,value:m.TODAY}]}},i={render:r=>t.jsx(n,{...r}),args:{fullOperator:!0,value:[{field:"status",operator:e.Contains,value:"Act"},{field:"createdAt",operator:e.Equals,value:`${m.EXACT}|2026-04-23`}]}},s={render:r=>t.jsx(n,{...r}),args:{value:[{field:"createdAt",operator:e.Equals,value:`${m.DATE_RANGE}|2026-04-01|2026-04-23`}]}};var f,A,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <WithAnchor {...args} />
}`,...(v=(A=a.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var h,g,E;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <WithAnchor {...args} />,
  args: {
    value: [{
      field: 'status',
      operator: FilterOperator.Equals,
      value: 'Active'
    }, {
      field: 'createdAt',
      operator: FilterOperator.Equals,
      value: DateFilterMacro.TODAY
    }]
  }
}`,...(E=(g=p.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var O,D,x;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <WithAnchor {...args} />,
  args: {
    fullOperator: true,
    value: [{
      field: 'status',
      operator: FilterOperator.Contains,
      value: 'Act'
    }, {
      field: 'createdAt',
      operator: FilterOperator.Equals,
      value: \`\${DateFilterMacro.EXACT}|2026-04-23\`
    }]
  }
}`,...(x=(D=i.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var F,y,j;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <WithAnchor {...args} />,
  args: {
    value: [{
      field: 'createdAt',
      operator: FilterOperator.Equals,
      value: \`\${DateFilterMacro.DATE_RANGE}|2026-04-01|2026-04-23\`
    }]
  }
}`,...(j=(y=s.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};const Tt=["Default","WithPresetRules","FullOperator","DateRangeMacro"];export{s as DateRangeMacro,a as Default,i as FullOperator,p as WithPresetRules,Tt as __namedExportsOrder,jt as default};
