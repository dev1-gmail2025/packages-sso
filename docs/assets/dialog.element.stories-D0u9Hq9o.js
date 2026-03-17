import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-j62jqFia.js";import"./button-icon-content-opacity.element-CXgQ897m.js";import"./button-icon.element-DIKW5t1K.js";import"./button-image.element-CLReCYGb.js";import"./button-upload-file.element-B8b58ZQL.js";import{B as y}from"./button.element-Cwo7JrCq.js";import{D as a}from"./dialog.element-ByW7tWVz.js";import{S as p}from"./Stack-BMkDETZf.js";import{T as r}from"./Typography-CjbH1rA4.js";import"./FileSaver.min-sVBIqHNu.js";import"./style.const-CSB1CXgR.js";import"./time.util-DFcg3e45.js";import"./loading.component-gddaglL7.js";import"./typography.style-BVG67HsI.js";import"./image.element-BW2lcbhc.js";import"./stack.style-TwFSz3b5.js";import"./DefaultPropsProvider-Brxq0OUc.js";import"./defaultTheme-CiSRXe73.js";import"./Stack-BlQw5Kbs.js";import"./createStack-BCgsFCsU.js";import"./extendSxProp-QnK7WPWm.js";import"./index-C8adVhmr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-eMA7PP5Z.js";import"./Box-CVD-5lJz.js";import"./InputLabel-YLDDHG1v.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-CYkJVmdl.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-i5g2ofOC.js";import"./color.const-D0XZ47LU.js";import"./CircularProgress-BUaXLBBs.js";import"./icon-button.element-CESAIvFV.js";import"./icon.element-DswLMzJj.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-RoDX6TIe.js";import"./useTimeout-1tU6oJ84.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-DZ6IQk00.js";import"./icon-content-badge.element-DEloHJ2p.js";import"./icon-content.element-CVd6EVlr.js";import"./Badge-CMbUSK4D.js";import"./useSlot-DBQWuDEP.js";import"./ownerWindow-DTuM7CMd.js";import"./useSlotProps-_-7fWPp0.js";import"./createSvgIcon-BqnXePOd.js";import"./proxy-DKXG_8Nh.js";import"./Button-Bw6dTtTN.js";import"./image-content-caption.component-CjShK_P3.js";import"./avatar-online-status.element-oksSvmTg.js";import"./avatar.element-S4asLo1S.js";import"./Tooltip-pSKwotpI.js";import"./useControlled-CdETZoY_.js";import"./getReactElementRef-CJ1MGg2c.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./Grow-BH2Uzhjw.js";import"./avatar-user-info.element-Cf-MWsj5.js";import"./typography-content-caption.component-Dthvg_z3.js";import"./typography-grid-info-row.component-DcjDiekN.js";import"./typography-info-row.component-DWsjt5s5.js";import"./typography-info-user.component-b55gyOhx.js";import"./text-highlight.element-CSkKv_H9.js";import"./Select-BGXSfyCj.js";import"./mergeSlotProps-Bfz0OzkQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-CPtln8nk.js";import"./List-CuT84JTO.js";import"./FormControl-BydE9C3D.js";import"./isMuiElement-BY4WSVWD.js";import"./text-field-label.element-rSZbf_kT.js";import"./typography-limit-one-line.component-BArYBtLz.js";const f={label:{control:"text",description:"Title text of the dialog.",table:{type:{summary:"string"}}},iconLabel:{control:"text",description:"Optional icon name shown before the title.",table:{defaultValue:{summary:"edit"},type:{summary:"string"}}},isForm:{control:"boolean",description:"If true, wraps content in a Formik <Form/>.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},closeButton:{control:"boolean",description:"Show close icon button in the header.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},fullWidth:{control:"boolean",description:"Make action buttons take full width.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},widthButton:{control:"number",description:"Custom width (px) for all bottom buttons.",table:{type:{summary:"number"}}},nodeContent:{control:!1,description:"Custom React node for the main content."},nodeHelp:{control:!1,description:"Optional help content shown when user toggles help."},nodeBottomLeft:{control:!1,description:"Custom content shown at the bottom left area."},buttonLeft:{control:!1,description:"Props for the left action button."},buttonCenter:{control:!1,description:"Props for the center action button."},buttonRight:{control:!1,description:"Props for the right action button."},sxDialogTitle:{control:!1},sxContent:{control:!1},sxTitle:{control:!1},sxBottom:{control:!1}},We={title:"Elements/Dialog/Dialog",component:a,tags:["autodocs"],args:{label:"Dialog title"},parameters:{layout:"centered"},argTypes:f},n={render:s=>{const[i,t]=g.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(y,{content:"Open dialog with help",onClick:()=>t(!0)}),e.jsx(a,{...s,open:i,onClose:()=>t(!1),label:"Dialog có hướng dẫn",nodeContent:e.jsx(p,{children:e.jsx(r,{variant:"body2",children:"Nội dung chính của dialog. Có thêm phần hướng dẫn bên dưới."})}),nodeHelp:e.jsxs(p,{children:[e.jsx(r,{variant:"body2",children:"Đây là nội dung hướng dẫn thêm cho người dùng, có thể dài hơn và scroll được."}),e.jsx(r,{variant:"body2",children:"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]}),buttonLeft:{content:"Hủy",onClick:()=>t(!1)},buttonRight:{content:"Xác nhận",onClick:()=>t(!1)}})]})}},o={render:s=>{const[i,t]=g.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(y,{content:"Open 3-button dialog",onClick:()=>t(!0)}),e.jsx(a,{...s,open:i,onClose:()=>t(!1),label:"Dialog 3 nút",nodeContent:e.jsx(r,{variant:"body2",children:"Ví dụ dialog có 3 nút: Trở lại, Lưu nháp và Lưu."}),buttonLeft:{content:"Trở lại",onClick:()=>t(!1)},buttonCenter:{content:"Lưu nháp",onClick:()=>t(!1)},buttonRight:{content:"Lưu",onClick:()=>t(!1)}})]})}};var l,m,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>\r
        <ButtonElement content='Open dialog with help' onClick={() => setOpen(true)} />\r
        <DialogElement {...args} open={open} onClose={() => setOpen(false)} label='Dialog có hướng dẫn' nodeContent={<Stack>\r
              <Typography variant='body2'>Nội dung chính của dialog. Có thêm phần hướng dẫn bên dưới.</Typography>\r
            </Stack>} nodeHelp={<Stack>\r
              <Typography variant='body2'>\r
                Đây là nội dung hướng dẫn thêm cho người dùng, có thể dài hơn và scroll được.\r
              </Typography>\r
              <Typography variant='body2'>\r
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\r
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a\r
                galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\r
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in\r
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\r
                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is\r
                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\r
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make\r
                a type specimen book. It has survived not only five centuries, but also the leap into electronic\r
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of\r
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like\r
                Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and\r
                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when\r
                an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived\r
                not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\r
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and\r
                more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r
              </Typography>\r
            </Stack>} buttonLeft={{
        content: 'Hủy',
        onClick: () => setOpen(false)
      }} buttonRight={{
        content: 'Xác nhận',
        onClick: () => setOpen(false)
      }} />\r
      </>;
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var c,d,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>\r
        <ButtonElement content='Open 3-button dialog' onClick={() => setOpen(true)} />\r
        <DialogElement {...args} open={open} onClose={() => setOpen(false)} label='Dialog 3 nút' nodeContent={<Typography variant='body2'>Ví dụ dialog có 3 nút: Trở lại, Lưu nháp và Lưu.</Typography>} buttonLeft={{
        content: 'Trở lại',
        onClick: () => setOpen(false)
      }} buttonCenter={{
        content: 'Lưu nháp',
        onClick: () => setOpen(false)
      }} buttonRight={{
        content: 'Lưu',
        onClick: () => setOpen(false)
      }} />\r
      </>;
  }
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const Ve=["WithHelp","WithThreeButtons"];export{n as WithHelp,o as WithThreeButtons,Ve as __namedExportsOrder,We as default};
