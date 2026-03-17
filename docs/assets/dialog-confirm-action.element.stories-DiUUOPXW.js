import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{f as c}from"./index-DtL3pAzF.js";import{r as p}from"./index-j62jqFia.js";import{a}from"./FileSaver.min-sVBIqHNu.js";import"./time.util-DFcg3e45.js";import"./button-icon-content-opacity.element-CXgQ897m.js";import"./button-icon.element-DIKW5t1K.js";import"./button-image.element-CLReCYGb.js";import"./button-upload-file.element-B8b58ZQL.js";import{B as l}from"./button.element-Cwo7JrCq.js";import{D as m}from"./dialog-confirm-action.element-BvMlzIEL.js";import"./style.const-CSB1CXgR.js";import"./loading.component-gddaglL7.js";import"./typography.style-BVG67HsI.js";import"./image.element-BW2lcbhc.js";import"./stack.style-TwFSz3b5.js";import"./DefaultPropsProvider-Brxq0OUc.js";import"./defaultTheme-CiSRXe73.js";import"./Stack-BlQw5Kbs.js";import"./createStack-BCgsFCsU.js";import"./extendSxProp-QnK7WPWm.js";import"./index-C8adVhmr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-eMA7PP5Z.js";import"./Box-CVD-5lJz.js";import"./InputLabel-YLDDHG1v.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-CYkJVmdl.js";import"./Typography-CjbH1rA4.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-i5g2ofOC.js";import"./color.const-D0XZ47LU.js";import"./CircularProgress-BUaXLBBs.js";import"./icon-button.element-CESAIvFV.js";import"./icon.element-DswLMzJj.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-RoDX6TIe.js";import"./useTimeout-1tU6oJ84.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-DZ6IQk00.js";import"./icon-content-badge.element-DEloHJ2p.js";import"./icon-content.element-CVd6EVlr.js";import"./Badge-CMbUSK4D.js";import"./useSlot-DBQWuDEP.js";import"./ownerWindow-DTuM7CMd.js";import"./useSlotProps-_-7fWPp0.js";import"./createSvgIcon-BqnXePOd.js";import"./proxy-DKXG_8Nh.js";import"./Button-Bw6dTtTN.js";import"./image-content-caption.component-CjShK_P3.js";import"./avatar-online-status.element-oksSvmTg.js";import"./avatar.element-S4asLo1S.js";import"./Tooltip-pSKwotpI.js";import"./useControlled-CdETZoY_.js";import"./getReactElementRef-CJ1MGg2c.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./Grow-BH2Uzhjw.js";import"./avatar-user-info.element-Cf-MWsj5.js";import"./typography-content-caption.component-Dthvg_z3.js";import"./typography-grid-info-row.component-DcjDiekN.js";import"./typography-info-row.component-DWsjt5s5.js";import"./typography-info-user.component-b55gyOhx.js";import"./text-highlight.element-CSkKv_H9.js";import"./Select-BGXSfyCj.js";import"./mergeSlotProps-Bfz0OzkQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-CPtln8nk.js";import"./List-CuT84JTO.js";import"./FormControl-BydE9C3D.js";import"./isMuiElement-BY4WSVWD.js";import"./text-field-label.element-rSZbf_kT.js";import"./Stack-BMkDETZf.js";import"./typography-limit-one-line.component-BArYBtLz.js";import"./dialog.element-ByW7tWVz.js";const O={open:{control:"boolean",description:"Whether the confirmation dialog is open.",table:{type:{summary:"boolean"}}},title:{control:"text",description:"Title of the confirmation dialog.",table:{type:{summary:"string"}}},description:{control:"text",description:"Description text shown inside the dialog.",table:{type:{summary:"string"}}},closeText:{control:"text",description:"Label for the close button.",table:{type:{summary:"string"},defaultValue:{summary:"Hủy"}}},confirmText:{control:"text",description:"Label for the confirm button.",table:{type:{summary:"string"},defaultValue:{summary:"Xác nhận"}}},confirmColor:{control:"text",description:"SnackbarType used to style the confirm button.",table:{type:{summary:"SnackbarType"}}},closeColor:{control:"text",description:"SnackbarType used to style the close button.",table:{type:{summary:"SnackbarType"}}},loading:{control:"boolean",description:"If true, shows loading state on buttons.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClose:{action:"closed",description:"Callback fired when dialog is closed.",table:{type:{summary:"() => void"}}},onConfirm:{action:"confirmed",description:"Callback fired when confirm button is clicked.",table:{type:{summary:"() => void"}}}},Jo={title:"Elements/Dialog/DialogConfirmAction",component:m,tags:["autodocs"],args:{title:"Xác nhận hành động",description:"Bạn có chắc chắn muốn thực hiện hành động này không?",closeText:"Hủy",confirmText:"Xác nhận",confirmColor:a.ERROR,closeColor:a.INFO,onClose:c(),onConfirm:c(),loading:!1},parameters:{layout:"centered"},argTypes:O},r={args:{title:"Xác nhận thông tin",description:"Đây là dialog xác nhận với màu sắc trung tính.",confirmColor:a.INFO},render:n=>{const[e,t]=p.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(l,{content:"Open confirm dialog",onClick:()=>t(!0)}),o.jsx(m,{...n,open:e,onClose:()=>t(!1),onConfirm:()=>t(!1)})]})}},i={args:{title:"Cảnh báo",description:"Hành động này có thể gây ảnh hưởng tới dữ liệu của bạn.",confirmColor:a.WARNING},render:n=>{const[e,t]=p.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(l,{content:"Open confirm dialog",onClick:()=>t(!0)}),o.jsx(m,{...n,open:e,onClose:()=>t(!1),onConfirm:()=>t(!1)})]})}},s={args:{loading:!0,description:"Đang xử lý, vui lòng chờ..."},render:n=>{const[e,t]=p.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(l,{content:"Open confirm dialog",onClick:()=>t(!0)}),o.jsx(m,{...n,open:e,onClose:()=>t(!1),onConfirm:()=>t(!1)})]})}};var d,f,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const Ko=["Info","Warning","LoadingState"];export{r as Info,s as LoadingState,i as Warning,Ko as __namedExportsOrder,Jo as default};
