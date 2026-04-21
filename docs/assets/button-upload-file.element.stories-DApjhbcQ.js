import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{f as C,w as E,u as s,e as i}from"./index-DtL3pAzF.js";import{B as a}from"./button-upload-file.element-DiAX4oPc.js";import"./index-j62jqFia.js";import"./button-icon.element-EFGhmDUG.js";import"./ckeditor-Cewk8mXO.js";import"./time.util-BYguZ9lS.js";import"./loading.component-BuuOckPB.js";import"./typography.style-QOdJo2K8.js";import"./image.element-CTh3wCKK.js";import"./stack.style-CupkF9jl.js";import"./memoTheme-JcuT4PI6.js";import"./defaultTheme-CAzuqlo8.js";import"./DefaultPropsProvider-BwONcEM9.js";import"./Stack-BWemv0CO.js";import"./createStack-_FjnXW6X.js";import"./extendSxProp-BhkXlpcg.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme--firQ3HK.js";import"./Box-CJND6-sR.js";import"./InputLabel-Xf4L_974.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-BIiOul_5.js";import"./Typography-Bf8WTvH-.js";import"./index-F4SWrtxx.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-BArkCm4j.js";import"./CircularProgress-SwCU_jrE.js";import"./icon-button.element-B93xAhJf.js";import"./icon.element-CptAJWm0.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-DMmz3Ngg.js";import"./useTimeout-BnjI5Ij7.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-BASBk5Xj.js";import"./tooltip-on-click.element-DkCofoav.js";import"./getReactElementRef-BVRziQZO.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./Grow-DOIJXnb6.js";import"./useSlot-BHAemyrm.js";import"./Tooltip-C-jnBW1Q.js";import"./useControlled-CdETZoY_.js";import"./icon-content-badge.element--ppb6rax.js";import"./icon-content.element-BwzHMvpT.js";import"./Badge-4F4pJWAG.js";import"./ownerWindow-SaFBzm43.js";import"./createSvgIcon-CgF2gLAa.js";import"./proxy-DKXG_8Nh.js";import"./time-ago-content.component-bq3Ezs-R.js";import"./avatar-group.element-BJs1luY2.js";import"./avatar.element-DxWhDApQ.js";import"./Popover-Dcprfih5.js";import"./mergeSlotProps-C1T8RA4K.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-NGFjKnxD.js";import"./avatar-online-status.element-C8YQu5iN.js";import"./avatar-user-info-detail.element-DhKlCMsF.js";import"./avatar-user-info-update.element-yQ3SfcIH.js";import"./string.util-DkuOPhSi.js";import"./avatar-user-info.element-BMJ4eSsI.js";import"./typography-content-caption.component-5vfQUz5S.js";import"./typography-grid-info-row.component-Bn3ekmpA.js";import"./typography-info-row.component-WG734_iQ.js";import"./typography-info-user.component-DK-mqBgd.js";import"./text-field-date.element-BLOdENef.js";import"./picker.style-DtPffRxq.js";import"./text-field-label.element-BdaCc7Wc.js";import"./DatePicker-DXZ1lizp.js";import"./useMobilePicker-Dxs5aOXh.js";import"./TextField-BEYRgNgZ.js";import"./FormControl-CkqPUPi_.js";import"./isMuiElement-BY4WSVWD.js";import"./List-sl9rBPBu.js";import"./Button-oCoBaHSt.js";import"./ListItem-75WI95rP.js";import"./Chip-XHsgVC5o.js";import"./text-field-date-range.element-0zDedPl8.js";import"./text-field-date-time.element-BW1a49g_.js";import"./MenuItem-pKhNro2o.js";import"./text-field-email-autocomplete.element-BFvUKMSy.js";import"./Autocomplete-BJ-LJ4M9.js";import"./text-field-select.element-Dc4stuEl.js";import"./empty.component-eDNNP7S5.js";import"./text-field-select-search-object.element-CVpusmkg.js";import"./text-highlight.element-7r4ACzVc.js";import"./text-field.element-BMTFuiR6.js";import"./Stack-PxG0HRcj.js";import"./typography-limit-one-line.component-C9IdfHj2.js";import"./time-ago.component-DKvo6Uc1.js";const lo={title:"Elements/Button/ButtonUploadFileElement",component:a,tags:["autodocs"],args:{onChange:C(),multiple:!1,accept:"image/*"},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}}},o={},r={render:t=>p.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[p.jsx(a,{...t,accept:"image/*"}),p.jsx(a,{...t,accept:".pdf,.png,.jpg"})]})},e={play:async({canvasElement:t,args:m})=>{const x=E(t).getByRole("button");await s.click(x);const n=t.querySelector('input[type="file"]');await i(n).not.toBeNull();const B=new File(["hello"],"hello.png",{type:"image/png"});await s.upload(n,B),await i(m.onChange).toHaveBeenCalledTimes(1);const v=m.onChange.mock.calls[0][0];await i(v[0].name).toBe("hello.png")}};var l,c,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,d,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(w=(y=e.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const co=["Default","AcceptVariants","UploadCallsOnChange"];export{r as AcceptVariants,o as Default,e as UploadCallsOnChange,co as __namedExportsOrder,lo as default};
