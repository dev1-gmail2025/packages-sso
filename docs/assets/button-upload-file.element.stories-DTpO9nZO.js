import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{f as C,w as E,u as s,e as i}from"./index-DtL3pAzF.js";import{B as a}from"./button-upload-file.element-B1qHJCmd.js";import"./index-j62jqFia.js";import"./button-icon.element-CvQtHUWE.js";import"./ckeditor-Bv5EQgWb.js";import"./time.util-BYguZ9lS.js";import"./loading.component-BWHNiETv.js";import"./typography.style-CtW3gOL8.js";import"./image.element-CvZpg0KB.js";import"./stack.style-DGx-Brod.js";import"./memoTheme-JcuT4PI6.js";import"./defaultTheme-CAzuqlo8.js";import"./DefaultPropsProvider-BwONcEM9.js";import"./Stack-BWemv0CO.js";import"./createStack-_FjnXW6X.js";import"./extendSxProp-BhkXlpcg.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme--firQ3HK.js";import"./Box-CJND6-sR.js";import"./InputLabel-Xf4L_974.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-BIiOul_5.js";import"./Typography-Bf8WTvH-.js";import"./index-F4SWrtxx.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-Bcgz_DMY.js";import"./CircularProgress-SwCU_jrE.js";import"./icon-button.element-Dg2cbcZV.js";import"./icon.element-D6Kxx-UM.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-DMmz3Ngg.js";import"./useTimeout-BnjI5Ij7.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-sxy3CWCZ.js";import"./icon-content-badge.element-_F62VuXT.js";import"./icon-content.element-42XvEIis.js";import"./Badge-4F4pJWAG.js";import"./useSlot-BHAemyrm.js";import"./ownerWindow-C8QV6CSQ.js";import"./useSlotProps-CoayJ5MT.js";import"./createSvgIcon-CgF2gLAa.js";import"./proxy-DKXG_8Nh.js";import"./time-ago-content.component-CW3hrpBQ.js";import"./avatar-group.element-DEnsDA7c.js";import"./avatar.element-Pt3Vh6Rj.js";import"./Tooltip-lylFETVE.js";import"./useControlled-CdETZoY_.js";import"./getReactElementRef-DcPXsDBP.js";import"./Grow-DXcpAqew.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./utils-CqDPe-1j.js";import"./Popper-DwFKd2KB.js";import"./Popover-DaQAVllg.js";import"./mergeSlotProps-C1T8RA4K.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-D3Ipf3Mx.js";import"./avatar-online-status.element-CC6G5vPe.js";import"./avatar-user-info-detail.element-XqM3Ps4w.js";import"./avatar-user-info-update.element-D0E6Beys.js";import"./string.util-DkuOPhSi.js";import"./avatar-user-info.element-CjMX2kVD.js";import"./typography-content-caption.component-DvRrRsy7.js";import"./typography-grid-info-row.component-BA0UWe1U.js";import"./typography-info-row.component-DNNMPQPk.js";import"./typography-info-user.component-CWjUcKQ0.js";import"./text-field-date.element-Ci4-gK1j.js";import"./picker.style-BJCpdJE_.js";import"./text-field-label.element-DM4xadU3.js";import"./DatePicker-DrxVLkeO.js";import"./useMobilePicker-CP7gsf1A.js";import"./TextField-CcFJu-ru.js";import"./Select-BHbHB36B.js";import"./List-sl9rBPBu.js";import"./FormControl-CkqPUPi_.js";import"./isMuiElement-BY4WSVWD.js";import"./Button-oCoBaHSt.js";import"./ListItem-75WI95rP.js";import"./Chip-XHsgVC5o.js";import"./text-field-date-range.element-CBZ28kTt.js";import"./text-field-date-time.element-BO2cDM9f.js";import"./MenuItem-a-zB31y-.js";import"./text-field-email-autocomplete.element-6eDZCwtJ.js";import"./text-highlight.element-B4G7TGMz.js";import"./text-field.element-DxO-Dooz.js";import"./Stack-PxG0HRcj.js";import"./typography-limit-one-line.component-bW4xY8uw.js";import"./time-ago.component-D0Y3JS4c.js";const so={title:"Elements/Button/ButtonUploadFileElement",component:a,tags:["autodocs"],args:{onChange:C(),multiple:!1,accept:"image/*"},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}}},o={},r={render:t=>p.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[p.jsx(a,{...t,accept:"image/*"}),p.jsx(a,{...t,accept:".pdf,.png,.jpg"})]})},e={play:async({canvasElement:t,args:m})=>{const x=E(t).getByRole("button");await s.click(x);const n=t.querySelector('input[type="file"]');await i(n).not.toBeNull();const B=new File(["hello"],"hello.png",{type:"image/png"});await s.upload(n,B),await i(m.onChange).toHaveBeenCalledTimes(1);const v=m.onChange.mock.calls[0][0];await i(v[0].name).toBe("hello.png")}};var l,c,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,d,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
