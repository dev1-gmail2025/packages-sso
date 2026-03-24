import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{f as C,w as E,u as s,e as i}from"./index-DtL3pAzF.js";import{B as a}from"./button-upload-file.element-CiQK0_Sp.js";import"./index-j62jqFia.js";import"./button-icon.element-BGI7x8NJ.js";import"./FileSaver.min-sVBIqHNu.js";import"./style.const-DwIRAWA_.js";import"./time.util-BYguZ9lS.js";import"./loading.component-Pmbm2fPv.js";import"./typography.style-CdLRrvNw.js";import"./image.element-B9XVatWh.js";import"./stack.style-DH3eO9aD.js";import"./DefaultPropsProvider-DU9SanKz.js";import"./defaultTheme-D-jjqFHx.js";import"./Stack--5Dd26sT.js";import"./createStack-C_KW5WTO.js";import"./extendSxProp-Cmw4pgNu.js";import"./index-C8adVhmr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-0nskcD3X.js";import"./Box-0U_G7eaK.js";import"./InputLabel-CY3ncLPD.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-CZ8YGlXk.js";import"./Typography-crO-zzKF.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-C5oU1vXn.js";import"./color.const-CRNucSci.js";import"./CircularProgress-6STgtAQ1.js";import"./icon-button.element-BecJaPZD.js";import"./icon.element-C1lSNNtD.js";import"./IconButton-QbJpFgcV.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-CJf4BqqU.js";import"./useTimeout-Ck7_m_Mv.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-DGcU0uP_.js";import"./icon-content-badge.element-hbuLxK1r.js";import"./icon-content.element-BPRKvcem.js";import"./Badge-C7vkf73i.js";import"./useSlot-DxC6qITw.js";import"./ownerWindow-BsA78Dfr.js";import"./useSlotProps-BVs4F9FP.js";import"./createSvgIcon-DaUmNjHb.js";import"./proxy-DKXG_8Nh.js";import"./time-ago-content.component-BFx5Xd_i.js";import"./picker.style-D4P6fy90.js";import"./avatar-group.element-UKe3iHhA.js";import"./avatar.element-o2ujGwwD.js";import"./Tooltip-C0f2lvwx.js";import"./useControlled-CdETZoY_.js";import"./getReactElementRef-DcPXsDBP.js";import"./Grow-STBTogaT.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./utils-CqDPe-1j.js";import"./Popper-C5RxI3xi.js";import"./Popover-C9PvnN4t.js";import"./mergeSlotProps-C6mQwBhO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-CmqG1gvX.js";import"./avatar-online-status.element-DeBgmNrh.js";import"./avatar-user-info-detail.element-G3RhkLT_.js";import"./avatar-user-info-update.element-C9GxJlY5.js";import"./string.util-DkuOPhSi.js";import"./avatar-user-info.element-A2m9uvtT.js";import"./typography-content-caption.component-CxaO_C-N.js";import"./typography-grid-info-row.component-BTUySind.js";import"./typography-info-row.component-BFL5XtAN.js";import"./typography-info-user.component-CB8MUvpe.js";import"./text-field-date-range.element-CVgHlIXo.js";import"./DatePicker-rU3QHeR5.js";import"./useMobilePicker-SUBCoiON.js";import"./TextField-BnQE0AD7.js";import"./Select-BjyP1e04.js";import"./List-DxCx-O3-.js";import"./FormControl-BLmiguG-.js";import"./isMuiElement-BY4WSVWD.js";import"./Button-O5fh8gd8.js";import"./ListItem-BozRYSYj.js";import"./Chip-CGreuiKB.js";import"./text-field-date-time.element-DWuVmztI.js";import"./text-field-label.element-BGwXe-0M.js";import"./MenuItem-BQC9kmtB.js";import"./text-field-date.element-DexQTaaf.js";import"./text-field-email-autocomplete.element-cH7ZJ7KX.js";import"./text-field.element-BbXAhI-y.js";import"./text-highlight.element-D6YnPafw.js";import"./Stack-B-ruLY4g.js";import"./typography-limit-one-line.component-CLvUn8wJ.js";import"./time-ago.component-D7oTGfhX.js";const so={title:"Elements/Button/ButtonUploadFileElement",component:a,tags:["autodocs"],args:{onChange:C(),multiple:!1,accept:"image/*"},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}}},o={},r={render:t=>p.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[p.jsx(a,{...t,accept:"image/*"}),p.jsx(a,{...t,accept:".pdf,.png,.jpg"})]})},e={play:async({canvasElement:t,args:m})=>{const x=E(t).getByRole("button");await s.click(x);const n=t.querySelector('input[type="file"]');await i(n).not.toBeNull();const B=new File(["hello"],"hello.png",{type:"image/png"});await s.upload(n,B),await i(m.onChange).toHaveBeenCalledTimes(1);const v=m.onChange.mock.calls[0][0];await i(v[0].name).toBe("hello.png")}};var l,c,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,d,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(w=(y=e.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const lo=["Default","AcceptVariants","UploadCallsOnChange"];export{r as AcceptVariants,o as Default,e as UploadCallsOnChange,lo as __namedExportsOrder,so as default};
