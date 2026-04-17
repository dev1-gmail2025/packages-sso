import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{f as C,w as E,u as s,e as i}from"./index-DtL3pAzF.js";import{B as a}from"./button-upload-file.element-DmAwFgY-.js";import"./index-j62jqFia.js";import"./button-icon.element-Btz0MJ9B.js";import"./ckeditor-DTi0F4Ht.js";import"./time.util-BYguZ9lS.js";import"./loading.component-CBKFirqb.js";import"./typography.style-BeyZ_ZMQ.js";import"./image.element-DGnxjtFr.js";import"./stack.style-u-wIVGIO.js";import"./memoTheme-JcuT4PI6.js";import"./defaultTheme-CAzuqlo8.js";import"./DefaultPropsProvider-BwONcEM9.js";import"./Stack-BWemv0CO.js";import"./createStack-_FjnXW6X.js";import"./extendSxProp-BhkXlpcg.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme--firQ3HK.js";import"./Box-CJND6-sR.js";import"./InputLabel-Xf4L_974.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-BIiOul_5.js";import"./Typography-Bf8WTvH-.js";import"./index-F4SWrtxx.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-DImCMSsI.js";import"./CircularProgress-SwCU_jrE.js";import"./icon-button.element-Bp-_KqIq.js";import"./icon.element-BTSrdu87.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-DMmz3Ngg.js";import"./useTimeout-BnjI5Ij7.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-BnVj9Q-5.js";import"./icon-content-badge.element-BgzE2sDN.js";import"./icon-content.element-D87L6WgW.js";import"./Badge-4F4pJWAG.js";import"./useSlot-BHAemyrm.js";import"./ownerWindow-C8QV6CSQ.js";import"./useSlotProps-CoayJ5MT.js";import"./createSvgIcon-CgF2gLAa.js";import"./proxy-DKXG_8Nh.js";import"./time-ago-content.component-DVSBt3mr.js";import"./avatar-group.element-B6dpu3ML.js";import"./avatar.element-hR2UkJB6.js";import"./Tooltip-lylFETVE.js";import"./useControlled-CdETZoY_.js";import"./getReactElementRef-DcPXsDBP.js";import"./Grow-DXcpAqew.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./utils-CqDPe-1j.js";import"./Popper-DwFKd2KB.js";import"./Popover-DaQAVllg.js";import"./mergeSlotProps-C1T8RA4K.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-D3Ipf3Mx.js";import"./avatar-online-status.element-De6Xyzw5.js";import"./avatar-user-info-detail.element-B-HzGUbU.js";import"./avatar-user-info-update.element-DiAX9cME.js";import"./string.util-DkuOPhSi.js";import"./avatar-user-info.element-CBfPyO-j.js";import"./typography-content-caption.component-Ba3g4VQK.js";import"./typography-grid-info-row.component-De0k99vd.js";import"./typography-info-row.component-DjYenFAJ.js";import"./typography-info-user.component-BgPzteco.js";import"./text-field-date.element-CBPl-mr8.js";import"./picker.style-DhMDMft3.js";import"./text-field-label.element-DzMjyTTD.js";import"./DatePicker-hyHLyO78.js";import"./useMobilePicker-L4IH5jBm.js";import"./TextField-B2w6l1p2.js";import"./FormControl-CkqPUPi_.js";import"./isMuiElement-BY4WSVWD.js";import"./List-sl9rBPBu.js";import"./Button-oCoBaHSt.js";import"./ListItem-75WI95rP.js";import"./Chip-XHsgVC5o.js";import"./text-field-date-range.element-CIzXkYjn.js";import"./text-field-date-time.element-67E3P836.js";import"./MenuItem-PWfur4vs.js";import"./text-field-email-autocomplete.element-COYchQjq.js";import"./Autocomplete-54ChEN78.js";import"./text-field-select.element-DGMHl1Or.js";import"./empty.component-VcdE60Fl.js";import"./text-highlight.element-Dp9FbvhQ.js";import"./text-field.element-jMGe8chK.js";import"./Stack-PxG0HRcj.js";import"./typography-limit-one-line.component-C_4nI_mC.js";import"./time-ago.component-DwBGmMvD.js";const co={title:"Elements/Button/ButtonUploadFileElement",component:a,tags:["autodocs"],args:{onChange:C(),multiple:!1,accept:"image/*"},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}}},o={},r={render:t=>p.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[p.jsx(a,{...t,accept:"image/*"}),p.jsx(a,{...t,accept:".pdf,.png,.jpg"})]})},e={play:async({canvasElement:t,args:m})=>{const x=E(t).getByRole("button");await s.click(x);const n=t.querySelector('input[type="file"]');await i(n).not.toBeNull();const B=new File(["hello"],"hello.png",{type:"image/png"});await s.upload(n,B),await i(m.onChange).toHaveBeenCalledTimes(1);const v=m.onChange.mock.calls[0][0];await i(v[0].name).toBe("hello.png")}};var l,c,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,d,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(w=(y=e.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const go=["Default","AcceptVariants","UploadCallsOnChange"];export{r as AcceptVariants,o as Default,e as UploadCallsOnChange,go as __namedExportsOrder,co as default};
