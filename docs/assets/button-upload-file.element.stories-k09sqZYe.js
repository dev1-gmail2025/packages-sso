import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{f as C,w as E,u as s,e as p}from"./index-DtL3pAzF.js";import{B as i}from"./button-upload-file.element-B8b58ZQL.js";import"./index-j62jqFia.js";import"./button-icon.element-DIKW5t1K.js";import"./FileSaver.min-sVBIqHNu.js";import"./style.const-CSB1CXgR.js";import"./time.util-DFcg3e45.js";import"./loading.component-gddaglL7.js";import"./typography.style-BVG67HsI.js";import"./image.element-BW2lcbhc.js";import"./stack.style-TwFSz3b5.js";import"./DefaultPropsProvider-Brxq0OUc.js";import"./defaultTheme-CiSRXe73.js";import"./Stack-BlQw5Kbs.js";import"./createStack-BCgsFCsU.js";import"./extendSxProp-QnK7WPWm.js";import"./index-C8adVhmr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-eMA7PP5Z.js";import"./Box-CVD-5lJz.js";import"./InputLabel-YLDDHG1v.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-CYkJVmdl.js";import"./Typography-CjbH1rA4.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-i5g2ofOC.js";import"./color.const-D0XZ47LU.js";import"./CircularProgress-BUaXLBBs.js";import"./icon-button.element-CESAIvFV.js";import"./icon.element-DswLMzJj.js";import"./useId-CFSqmtgZ.js";import"./ButtonBase-RoDX6TIe.js";import"./useTimeout-1tU6oJ84.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./useForkRef-BVpE-hzr.js";import"./icon-content-badge-subs.element-DZ6IQk00.js";import"./icon-content-badge.element-DEloHJ2p.js";import"./icon-content.element-CVd6EVlr.js";import"./Badge-CMbUSK4D.js";import"./useSlot-DBQWuDEP.js";import"./ownerWindow-DTuM7CMd.js";import"./useSlotProps-_-7fWPp0.js";import"./createSvgIcon-BqnXePOd.js";import"./proxy-DKXG_8Nh.js";import"./image-content-caption.component-CjShK_P3.js";import"./avatar-online-status.element-oksSvmTg.js";import"./avatar.element-S4asLo1S.js";import"./Tooltip-pSKwotpI.js";import"./useControlled-CdETZoY_.js";import"./getReactElementRef-CJ1MGg2c.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./Grow-BH2Uzhjw.js";import"./avatar-user-info.element-Cf-MWsj5.js";import"./typography-content-caption.component-Dthvg_z3.js";import"./typography-grid-info-row.component-DcjDiekN.js";import"./typography-info-row.component-DWsjt5s5.js";import"./typography-info-user.component-b55gyOhx.js";import"./text-highlight.element-CSkKv_H9.js";import"./Select-BGXSfyCj.js";import"./mergeSlotProps-Bfz0OzkQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-CPtln8nk.js";import"./List-CuT84JTO.js";import"./FormControl-BydE9C3D.js";import"./isMuiElement-BY4WSVWD.js";import"./text-field-label.element-rSZbf_kT.js";import"./Stack-BMkDETZf.js";import"./typography-limit-one-line.component-BArYBtLz.js";import"./Button-Bw6dTtTN.js";const _t={title:"Elements/Button/ButtonUploadFileElement",component:i,tags:["autodocs"],args:{onChange:C(),multiple:!1,accept:"image/*"},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}}},e={},o={render:t=>a.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[a.jsx(i,{...t,accept:"image/*"}),a.jsx(i,{...t,accept:".pdf,.png,.jpg"})]})},r={play:async({canvasElement:t,args:m})=>{const x=E(t).getByRole("button");await s.click(x);const n=t.querySelector('input[type="file"]');await p(n).not.toBeNull();const B=new File(["hello"],"hello.png",{type:"image/png"});await s.upload(n,B),await p(m.onChange).toHaveBeenCalledTimes(1);const v=m.onChange.mock.calls[0][0];await p(v[0].name).toBe("hello.png")}};var l,c,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(c=e.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,d,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const Lt=["Default","AcceptVariants","UploadCallsOnChange"];export{o as AcceptVariants,e as Default,r as UploadCallsOnChange,Lt as __namedExportsOrder,_t as default};
