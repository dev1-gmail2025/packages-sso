import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{f as C,w as E,u as s,e as i}from"./index-DtL3pAzF.js";import{B as a}from"./button-upload-file.element-CKLdzEvm.js";import"./index-j62jqFia.js";import"./button-icon.element-xyPkK4Ln.js";import"./FileSaver.min-Bswz-9g7.js";import"./style.const-wxvmQkzb.js";import"./time.util-BYguZ9lS.js";import"./loading.component-VGvV-d_M.js";import"./typography.style-DP0bA-A_.js";import"./image.element-Bf8t_bd_.js";import"./stack.style-D9MTy4l9.js";import"./memoTheme-DEbB7Aqb.js";import"./defaultTheme-DeO7XLhv.js";import"./DefaultPropsProvider-CTbmx_9D.js";import"./Stack-CPAJg9KB.js";import"./createStack-Du0yveyH.js";import"./extendSxProp-CMsS_Ey0.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-B3rGZ43-.js";import"./Box-CDdb2_uU.js";import"./InputLabel-dfS4B9dg.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-D3mcjqpT.js";import"./Typography-Bxxrk_XJ.js";import"./index-C1XqMcs4.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-DCRAYZxB.js";import"./color.const-zxGJ9-Cm.js";import"./CircularProgress-B9D4tC5t.js";import"./icon-button.element-DnrVqgTr.js";import"./icon.element-BXN1udk-.js";import"./IconButton-4XvBqZ2m.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-BDawOQvs.js";import"./useTimeout-BnjI5Ij7.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-DBBoWJk0.js";import"./icon-content-badge.element-DOmdC4aU.js";import"./icon-content.element-CSorw9xw.js";import"./Badge-BGqhrgA7.js";import"./useSlot-BVcC7tl7.js";import"./ownerWindow-v3EA2bPe.js";import"./useSlotProps-Coua_qTW.js";import"./createSvgIcon-Co-sBmU1.js";import"./proxy-DKXG_8Nh.js";import"./time-ago-content.component-DmX14Zs8.js";import"./avatar-group.element-BS5fRfsV.js";import"./avatar.element-D4LNK1EU.js";import"./Tooltip-BeeZLBQS.js";import"./useControlled-CdETZoY_.js";import"./getReactElementRef-DcPXsDBP.js";import"./Grow-CGEv-SGy.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./utils-CqDPe-1j.js";import"./Popper-FuK3mDCS.js";import"./Popover-CdeXLbiR.js";import"./mergeSlotProps-DZutjk2m.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-C5pZsSOP.js";import"./avatar-online-status.element-8a6Gc062.js";import"./avatar-user-info-detail.element-bv6gxaRF.js";import"./avatar-user-info-update.element-CezLC4m_.js";import"./string.util-DkuOPhSi.js";import"./avatar-user-info.element-DNOY-hsr.js";import"./typography-content-caption.component-DajulKnU.js";import"./typography-grid-info-row.component-LVJg_x0c.js";import"./typography-info-row.component-BDKFdqG0.js";import"./typography-info-user.component-DyyykJs9.js";import"./text-field-date-range.element-Fa4AK6Df.js";import"./DatePicker-DpqdPmWT.js";import"./useMobilePicker-Bk-OJazp.js";import"./TextField-vYvLf2Ib.js";import"./Select-DFkp9tIs.js";import"./List-BdY5EXP2.js";import"./FormControl-BaRhJyho.js";import"./isMuiElement-BY4WSVWD.js";import"./Button-CI85eX1i.js";import"./ListItem-DtU1bFQ_.js";import"./Chip-oONQ_Zme.js";import"./text-field-date-time.element-DjnqwREz.js";import"./picker.style-Cmp4_Y2h.js";import"./text-field-label.element-6t0hr49y.js";import"./MenuItem-BUHgk3WX.js";import"./text-field-date.element-C7-JeUD6.js";import"./text-field-email-autocomplete.element-DNahnWK2.js";import"./text-field.element-1RkHipOs.js";import"./text-highlight.element-CpDB3eBp.js";import"./Stack-DhAef_LI.js";import"./typography-limit-one-line.component-CbNP_Q0j.js";import"./time-ago.component-DfTJeo_X.js";const go={title:"Elements/Button/ButtonUploadFileElement",component:a,tags:["autodocs"],args:{onChange:C(),multiple:!1,accept:"image/*"},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}}},o={},r={render:t=>p.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[p.jsx(a,{...t,accept:"image/*"}),p.jsx(a,{...t,accept:".pdf,.png,.jpg"})]})},e={play:async({canvasElement:t,args:m})=>{const x=E(t).getByRole("button");await s.click(x);const n=t.querySelector('input[type="file"]');await i(n).not.toBeNull();const B=new File(["hello"],"hello.png",{type:"image/png"});await s.upload(n,B),await i(m.onChange).toHaveBeenCalledTimes(1);const v=m.onChange.mock.calls[0][0];await i(v[0].name).toBe("hello.png")}};var l,c,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,d,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>\r
      <ButtonUploadFileElement {...args} accept="image/*" />\r
      <ButtonUploadFileElement {...args} accept=".pdf,.png,.jpg" />\r
    </div>
}`,...(f=(d=r.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var h,y,w;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // MUI ButtonIconElement renders a <button>
    const trigger = canvas.getByRole('button');
    await userEvent.click(trigger);
    const input = canvasElement.querySelector('input[type="file"]') as HTMLInputElement | null;
    await expect(input).not.toBeNull();
    const file = new File(['hello'], 'hello.png', {
      type: 'image/png'
    });
    await userEvent.upload(input!, file);
    await expect(args.onChange).toHaveBeenCalledTimes(1);
    const firstCallArg = (args.onChange as any).mock.calls[0][0];
    await expect(firstCallArg[0].name).toBe('hello.png');
  }
}`,...(w=(y=e.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const uo=["Default","AcceptVariants","UploadCallsOnChange"];export{r as AcceptVariants,o as Default,e as UploadCallsOnChange,uo as __namedExportsOrder,go as default};
