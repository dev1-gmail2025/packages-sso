import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{f as C,w as E,u as s,e as a}from"./index-DtL3pAzF.js";import{B as i}from"./button-upload-file.element-Bom9wx-Q.js";import"./index-j62jqFia.js";import"./button-icon.element-SE1RUH-H.js";import"./FileSaver.min-sVBIqHNu.js";import"./style.const-DcpvWNzF.js";import"./time.util-DFcg3e45.js";import"./loading.component-C3-c4Wh3.js";import"./typography.style-CJiPh48M.js";import"./image.element-B2TI9ji2.js";import"./stack.style-X5oYj0G_.js";import"./DefaultPropsProvider-CnpmPGLU.js";import"./defaultTheme-CbDHbYmC.js";import"./Stack-D52ta6Vs.js";import"./createStack-qJXewNdH.js";import"./extendSxProp-COYDv-qt.js";import"./index-C8adVhmr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-BWrsGw5G.js";import"./Box-DA9iinBb.js";import"./InputLabel-BOBPd_9J.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-_0gGO9Yn.js";import"./Typography-Cd5iZOo-.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-Cr6OT-HE.js";import"./color.const-Dil5I3Au.js";import"./CircularProgress-Coy-df3c.js";import"./icon-button.element-CaQUJqOR.js";import"./icon.element-D4DES1ie.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-BlX2FUJJ.js";import"./useTimeout-Ck7_m_Mv.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-CAHzdJLk.js";import"./icon-content-badge.element-wIksfgwX.js";import"./icon-content.element-BR7SGJ8x.js";import"./Badge-Cc5_q6VK.js";import"./useSlot-BQkp07Oq.js";import"./ownerWindow-DHxNjUuV.js";import"./useSlotProps-hLfGuAdq.js";import"./createSvgIcon-B_gPDoaJ.js";import"./proxy-DKXG_8Nh.js";import"./image-content-caption.component-xufG9hww.js";import"./avatar-group.element-BSR71iXa.js";import"./avatar.element-CVd94xxW.js";import"./Tooltip-CGtrWyYV.js";import"./useControlled-CdETZoY_.js";import"./getReactElementRef-DcPXsDBP.js";import"./Grow-WIQzVnBU.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./utils-CH7VozHp.js";import"./Popover-Cl0DOJRt.js";import"./mergeSlotProps-Dl5OjG1I.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-C8gEJJRn.js";import"./avatar-online-status.element-B2adFrPb.js";import"./avatar-user-info-detail.element-Kzi-kR2U.js";import"./avatar-user-info-update.element-DKUFIUmf.js";import"./string.util-DkuOPhSi.js";import"./avatar-user-info.element-BO65rdF9.js";import"./typography-content-caption.component-BpI9JvGJ.js";import"./typography-grid-info-row.component-BWo4FEHU.js";import"./typography-info-row.component-B8PD_FM4.js";import"./typography-info-user.component-BpL0bg4Y.js";import"./text-highlight.element-DgPH2vIi.js";import"./Select-uZY_LI9p.js";import"./List-BJXr9lXR.js";import"./FormControl-DQ2X6SMN.js";import"./isMuiElement-BY4WSVWD.js";import"./text-field-label.element-eF7py91F.js";import"./Stack-DADfnJi4.js";import"./typography-limit-one-line.component-x0oDkVxF.js";import"./Button-uIHv_tDy.js";const Pt={title:"Elements/Button/ButtonUploadFileElement",component:i,tags:["autodocs"],args:{onChange:C(),multiple:!1,accept:"image/*"},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}}},e={},o={render:t=>p.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[p.jsx(i,{...t,accept:"image/*"}),p.jsx(i,{...t,accept:".pdf,.png,.jpg"})]})},r={play:async({canvasElement:t,args:m})=>{const x=E(t).getByRole("button");await s.click(x);const n=t.querySelector('input[type="file"]');await a(n).not.toBeNull();const B=new File(["hello"],"hello.png",{type:"image/png"});await s.upload(n,B),await a(m.onChange).toHaveBeenCalledTimes(1);const v=m.onChange.mock.calls[0][0];await a(v[0].name).toBe("hello.png")}};var l,c,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(c=e.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,d,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>\r
      <ButtonUploadFileElement {...args} accept='image/*' />\r
      <ButtonUploadFileElement {...args} accept='.pdf,.png,.jpg' />\r
    </div>
}`,...(f=(d=o.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var h,y,w;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const Qt=["Default","AcceptVariants","UploadCallsOnChange"];export{o as AcceptVariants,e as Default,r as UploadCallsOnChange,Qt as __namedExportsOrder,Pt as default};
