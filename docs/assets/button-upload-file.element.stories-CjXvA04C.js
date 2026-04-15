import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{f as C,w as E,u as s,e as i}from"./index-DtL3pAzF.js";import{B as a}from"./button-upload-file.element-YCQISdjy.js";import"./index-j62jqFia.js";import"./button-icon.element-BSIaob1p.js";import"./ckeditor-CL2xzRyo.js";import"./time.util-BYguZ9lS.js";import"./loading.component-DAQDtqS-.js";import"./typography.style-bTVGtiwd.js";import"./image.element-B3vY-0Q6.js";import"./stack.style-BkTbjcfq.js";import"./memoTheme-DEbB7Aqb.js";import"./defaultTheme-DeO7XLhv.js";import"./DefaultPropsProvider-CTbmx_9D.js";import"./Stack-CPAJg9KB.js";import"./createStack-Du0yveyH.js";import"./extendSxProp-CMsS_Ey0.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-B3rGZ43-.js";import"./Box-CDdb2_uU.js";import"./InputLabel-dfS4B9dg.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-D3mcjqpT.js";import"./Typography-Bxxrk_XJ.js";import"./index-C1XqMcs4.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-DvZtTmt-.js";import"./CircularProgress-B9D4tC5t.js";import"./icon-button.element-CNKiJYQh.js";import"./icon.element-C1fGWKPB.js";import"./IconButton-4XvBqZ2m.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-BDawOQvs.js";import"./useTimeout-BnjI5Ij7.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-VEgDb-xd.js";import"./icon-content-badge.element-Dqp1Lhyu.js";import"./icon-content.element-BYFuMu0G.js";import"./Badge-BGqhrgA7.js";import"./useSlot-BVcC7tl7.js";import"./ownerWindow-v3EA2bPe.js";import"./useSlotProps-Coua_qTW.js";import"./createSvgIcon-Co-sBmU1.js";import"./proxy-DKXG_8Nh.js";import"./time-ago-content.component-Dm4-jN65.js";import"./avatar-group.element-DT8Ah2Cf.js";import"./avatar.element-ZhFgPIgT.js";import"./Tooltip-BeeZLBQS.js";import"./useControlled-CdETZoY_.js";import"./getReactElementRef-DcPXsDBP.js";import"./Grow-CGEv-SGy.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./utils-CqDPe-1j.js";import"./Popper-FuK3mDCS.js";import"./Popover-CdeXLbiR.js";import"./mergeSlotProps-DZutjk2m.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-C5pZsSOP.js";import"./avatar-online-status.element-DM_Hthre.js";import"./avatar-user-info-detail.element-D2I8D4W_.js";import"./avatar-user-info-update.element-CW59-Vn8.js";import"./string.util-DkuOPhSi.js";import"./avatar-user-info.element-Bep9gSXp.js";import"./typography-content-caption.component-BgasuDru.js";import"./typography-grid-info-row.component-B9EWKokD.js";import"./typography-info-row.component-CR7jGYUM.js";import"./typography-info-user.component-CcgaFOT5.js";import"./text-field-date-range.element-gjWSlSn1.js";import"./DatePicker-DpqdPmWT.js";import"./useMobilePicker-Bk-OJazp.js";import"./TextField-vYvLf2Ib.js";import"./Select-DFkp9tIs.js";import"./List-BdY5EXP2.js";import"./FormControl-BaRhJyho.js";import"./isMuiElement-BY4WSVWD.js";import"./Button-CI85eX1i.js";import"./ListItem-DtU1bFQ_.js";import"./Chip-oONQ_Zme.js";import"./text-field-date-time.element-K6Q1zoOJ.js";import"./picker.style-WhzvaU2g.js";import"./text-field-label.element-C0I4nQaO.js";import"./MenuItem-BUHgk3WX.js";import"./text-field-date.element-DpgJCclh.js";import"./text-field-email-autocomplete.element-D6GTjWaO.js";import"./text-field.element-Cg5Cis6H.js";import"./text-highlight.element-CNgMe2qz.js";import"./Stack-DhAef_LI.js";import"./typography-limit-one-line.component-QlYgm81f.js";import"./time-ago.component-Bd9gDEn8.js";const lo={title:"Elements/Button/ButtonUploadFileElement",component:a,tags:["autodocs"],args:{onChange:C(),multiple:!1,accept:"image/*"},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}}},o={},r={render:t=>p.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[p.jsx(a,{...t,accept:"image/*"}),p.jsx(a,{...t,accept:".pdf,.png,.jpg"})]})},e={play:async({canvasElement:t,args:m})=>{const x=E(t).getByRole("button");await s.click(x);const n=t.querySelector('input[type="file"]');await i(n).not.toBeNull();const B=new File(["hello"],"hello.png",{type:"image/png"});await s.upload(n,B),await i(m.onChange).toHaveBeenCalledTimes(1);const v=m.onChange.mock.calls[0][0];await i(v[0].name).toBe("hello.png")}};var l,c,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,d,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
