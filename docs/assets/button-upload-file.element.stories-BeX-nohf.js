import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{f as C,w as E,u as s,e as i}from"./index-DtL3pAzF.js";import{B as a}from"./button-upload-file.element-BnrwOgoB.js";import"./index-j62jqFia.js";import"./button-icon.element-Lg45GaDf.js";import"./ckeditor-CeGE-dtJ.js";import"./time.util-BYguZ9lS.js";import"./loading.component-DMUWmZyb.js";import"./typography.style-Yi-1mNbm.js";import"./image.element-BoOCOBmQ.js";import"./stack.style-7z-WnrUf.js";import"./memoTheme-JcuT4PI6.js";import"./defaultTheme-CAzuqlo8.js";import"./DefaultPropsProvider-BwONcEM9.js";import"./Stack-BWemv0CO.js";import"./createStack-_FjnXW6X.js";import"./extendSxProp-BhkXlpcg.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme--firQ3HK.js";import"./Box-CJND6-sR.js";import"./InputLabel-Xf4L_974.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-BIiOul_5.js";import"./Typography-Bf8WTvH-.js";import"./index-F4SWrtxx.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-Bf0jm6a6.js";import"./CircularProgress-SwCU_jrE.js";import"./icon-button.element-CYSYNp6C.js";import"./icon.element-DbGjPkP7.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-DMmz3Ngg.js";import"./useTimeout-BnjI5Ij7.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-BDW3Uuqb.js";import"./icon-content-badge.element-FQFxNG6N.js";import"./icon-content.element-D4lH8nsq.js";import"./Badge-4F4pJWAG.js";import"./useSlot-BHAemyrm.js";import"./ownerWindow-C8QV6CSQ.js";import"./useSlotProps-CoayJ5MT.js";import"./createSvgIcon-CgF2gLAa.js";import"./proxy-DKXG_8Nh.js";import"./time-ago-content.component-Cm5i3uuf.js";import"./avatar-group.element-Ck8HVB8S.js";import"./avatar.element-zsM4F_WU.js";import"./Tooltip-lylFETVE.js";import"./useControlled-CdETZoY_.js";import"./getReactElementRef-DcPXsDBP.js";import"./Grow-DXcpAqew.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./utils-CqDPe-1j.js";import"./Popper-DwFKd2KB.js";import"./Popover-DaQAVllg.js";import"./mergeSlotProps-C1T8RA4K.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-D3Ipf3Mx.js";import"./avatar-online-status.element-nisgUJ8w.js";import"./avatar-user-info-detail.element-BjW8Mk8f.js";import"./avatar-user-info-update.element-DOECV7_d.js";import"./string.util-DkuOPhSi.js";import"./avatar-user-info.element-D6CmbQNn.js";import"./typography-content-caption.component-D8ul3_FO.js";import"./typography-grid-info-row.component-B7Du9D6B.js";import"./typography-info-row.component-k20WoDtn.js";import"./typography-info-user.component-CmvZ92Pd.js";import"./text-field-date.element-C9zq-22J.js";import"./picker.style-CbbZHM07.js";import"./text-field-label.element-B_useomh.js";import"./DatePicker-CyIJG49A.js";import"./useMobilePicker-BkJIcTEz.js";import"./TextField-B2w6l1p2.js";import"./FormControl-CkqPUPi_.js";import"./isMuiElement-BY4WSVWD.js";import"./List-sl9rBPBu.js";import"./Button-oCoBaHSt.js";import"./ListItem-75WI95rP.js";import"./Chip-XHsgVC5o.js";import"./text-field-date-range.element-UmpYvd_5.js";import"./text-field-date-time.element-DRlhkQjv.js";import"./MenuItem-BFcSBZEv.js";import"./text-field-email-autocomplete.element-FueiecZK.js";import"./text-highlight.element-B6m-V7JU.js";import"./text-field.element-DGXSqfd8.js";import"./Stack-PxG0HRcj.js";import"./typography-limit-one-line.component-Ddg8Vymb.js";import"./time-ago.component-BXw6aBuD.js";const no={title:"Elements/Button/ButtonUploadFileElement",component:a,tags:["autodocs"],args:{onChange:C(),multiple:!1,accept:"image/*"},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}}},o={},r={render:t=>p.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[p.jsx(a,{...t,accept:"image/*"}),p.jsx(a,{...t,accept:".pdf,.png,.jpg"})]})},e={play:async({canvasElement:t,args:m})=>{const x=E(t).getByRole("button");await s.click(x);const n=t.querySelector('input[type="file"]');await i(n).not.toBeNull();const B=new File(["hello"],"hello.png",{type:"image/png"});await s.upload(n,B),await i(m.onChange).toHaveBeenCalledTimes(1);const v=m.onChange.mock.calls[0][0];await i(v[0].name).toBe("hello.png")}};var l,c,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,d,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(w=(y=e.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const so=["Default","AcceptVariants","UploadCallsOnChange"];export{r as AcceptVariants,o as Default,e as UploadCallsOnChange,so as __namedExportsOrder,no as default};
