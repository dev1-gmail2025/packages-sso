import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{f as c}from"./index-DtL3pAzF.js";import{r as p}from"./index-j62jqFia.js";import{a as m}from"./FileSaver.min-sVBIqHNu.js";import"./time.util-DFcg3e45.js";import"./button-icon-content-opacity.element-CuaDQwRV.js";import"./button-icon.element-SE1RUH-H.js";import"./button-image.element-BwRp69Gv.js";import"./button-upload-file.element-Bom9wx-Q.js";import{B as l}from"./button.element-DJG6yQOO.js";import{D as a}from"./dialog-confirm-action.element-DUcIObic.js";import"./style.const-DcpvWNzF.js";import"./loading.component-C3-c4Wh3.js";import"./typography.style-CJiPh48M.js";import"./image.element-B2TI9ji2.js";import"./stack.style-X5oYj0G_.js";import"./DefaultPropsProvider-CnpmPGLU.js";import"./defaultTheme-CbDHbYmC.js";import"./Stack-D52ta6Vs.js";import"./createStack-qJXewNdH.js";import"./extendSxProp-COYDv-qt.js";import"./index-C8adVhmr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-BWrsGw5G.js";import"./Box-DA9iinBb.js";import"./InputLabel-BOBPd_9J.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-_0gGO9Yn.js";import"./Typography-Cd5iZOo-.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-Cr6OT-HE.js";import"./color.const-Dil5I3Au.js";import"./CircularProgress-Coy-df3c.js";import"./icon-button.element-CaQUJqOR.js";import"./icon.element-D4DES1ie.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-BlX2FUJJ.js";import"./useTimeout-Ck7_m_Mv.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-CAHzdJLk.js";import"./icon-content-badge.element-wIksfgwX.js";import"./icon-content.element-BR7SGJ8x.js";import"./Badge-Cc5_q6VK.js";import"./useSlot-BQkp07Oq.js";import"./ownerWindow-DHxNjUuV.js";import"./useSlotProps-hLfGuAdq.js";import"./createSvgIcon-B_gPDoaJ.js";import"./proxy-DKXG_8Nh.js";import"./Button-uIHv_tDy.js";import"./image-content-caption.component-xufG9hww.js";import"./avatar-group.element-BSR71iXa.js";import"./avatar.element-CVd94xxW.js";import"./Tooltip-CGtrWyYV.js";import"./useControlled-CdETZoY_.js";import"./getReactElementRef-DcPXsDBP.js";import"./Grow-WIQzVnBU.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./utils-CH7VozHp.js";import"./Popover-Cl0DOJRt.js";import"./mergeSlotProps-Dl5OjG1I.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-C8gEJJRn.js";import"./avatar-online-status.element-B2adFrPb.js";import"./avatar-user-info-detail.element-Kzi-kR2U.js";import"./avatar-user-info-update.element-DKUFIUmf.js";import"./string.util-DkuOPhSi.js";import"./avatar-user-info.element-BO65rdF9.js";import"./typography-content-caption.component-BpI9JvGJ.js";import"./typography-grid-info-row.component-BWo4FEHU.js";import"./typography-info-row.component-B8PD_FM4.js";import"./typography-info-user.component-BpL0bg4Y.js";import"./text-highlight.element-DgPH2vIi.js";import"./Select-uZY_LI9p.js";import"./List-BJXr9lXR.js";import"./FormControl-DQ2X6SMN.js";import"./isMuiElement-BY4WSVWD.js";import"./text-field-label.element-eF7py91F.js";import"./Stack-DADfnJi4.js";import"./typography-limit-one-line.component-x0oDkVxF.js";import"./dialog.element-BuJOzbpA.js";import"./Collapse-CZOuN_XX.js";const O={open:{control:"boolean",description:"Whether the confirmation dialog is open.",table:{type:{summary:"boolean"}}},title:{control:"text",description:"Title of the confirmation dialog.",table:{type:{summary:"string"}}},description:{control:"text",description:"Description text shown inside the dialog.",table:{type:{summary:"string"}}},closeText:{control:"text",description:"Label for the close button.",table:{type:{summary:"string"},defaultValue:{summary:"Hủy"}}},confirmText:{control:"text",description:"Label for the confirm button.",table:{type:{summary:"string"},defaultValue:{summary:"Xác nhận"}}},confirmColor:{control:"text",description:"SnackbarType used to style the confirm button.",table:{type:{summary:"SnackbarType"}}},closeColor:{control:"text",description:"SnackbarType used to style the close button.",table:{type:{summary:"SnackbarType"}}},loading:{control:"boolean",description:"If true, shows loading state on buttons.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClose:{action:"closed",description:"Callback fired when dialog is closed.",table:{type:{summary:"() => void"}}},onConfirm:{action:"confirmed",description:"Callback fired when confirm button is clicked.",table:{type:{summary:"() => void"}}}},Zo={title:"Elements/Dialog/DialogConfirmAction",component:a,tags:["autodocs"],args:{title:"Xác nhận hành động",description:"Bạn có chắc chắn muốn thực hiện hành động này không?",closeText:"Hủy",confirmText:"Xác nhận",confirmColor:m.ERROR,closeColor:m.INFO,onClose:c(),onConfirm:c(),loading:!1},parameters:{layout:"centered"},argTypes:O},r={args:{title:"Xác nhận thông tin",description:"Đây là dialog xác nhận với màu sắc trung tính.",confirmColor:m.INFO},render:n=>{const[e,t]=p.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(l,{content:"Open confirm dialog",onClick:()=>t(!0)}),o.jsx(a,{...n,open:e,onClose:()=>t(!1),onConfirm:()=>t(!1)})]})}},i={args:{title:"Cảnh báo",description:"Hành động này có thể gây ảnh hưởng tới dữ liệu của bạn.",confirmColor:m.WARNING},render:n=>{const[e,t]=p.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(l,{content:"Open confirm dialog",onClick:()=>t(!0)}),o.jsx(a,{...n,open:e,onClose:()=>t(!1),onConfirm:()=>t(!1)})]})}},s={args:{loading:!0,description:"Đang xử lý, vui lòng chờ..."},render:n=>{const[e,t]=p.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(l,{content:"Open confirm dialog",onClick:()=>t(!0)}),o.jsx(a,{...n,open:e,onClose:()=>t(!1),onConfirm:()=>t(!1)})]})}};var d,f,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Xác nhận thông tin',
    description: 'Đây là dialog xác nhận với màu sắc trung tính.',
    confirmColor: SnackbarType.INFO
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <>\r
        <ButtonElement content='Open confirm dialog' onClick={() => setOpen(true)} />\r
        <DialogConfirmActionElement {...args} open={open} onClose={() => setOpen(false)} onConfirm={() => setOpen(false)} />\r
      </>;
  }
}`,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var g,h,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Cảnh báo',
    description: 'Hành động này có thể gây ảnh hưởng tới dữ liệu của bạn.',
    confirmColor: SnackbarType.WARNING
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <>\r
        <ButtonElement content='Open confirm dialog' onClick={() => setOpen(true)} />\r
        <DialogConfirmActionElement {...args} open={open} onClose={() => setOpen(false)} onConfirm={() => setOpen(false)} />\r
      </>;
  }
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var C,b,x;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    loading: true,
    description: 'Đang xử lý, vui lòng chờ...'
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <>\r
        <ButtonElement content='Open confirm dialog' onClick={() => setOpen(true)} />\r
        <DialogConfirmActionElement {...args} open={open} onClose={() => setOpen(false)} onConfirm={() => setOpen(false)} />\r
      </>;
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const $o=["Info","Warning","LoadingState"];export{r as Info,s as LoadingState,i as Warning,$o as __namedExportsOrder,Zo as default};
