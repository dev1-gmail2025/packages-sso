import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{f as C,w as E,u as l,e as p}from"./index-DtL3pAzF.js";import{B as i}from"./button-upload-file.element-6867y1iu.js";import"./index-j62jqFia.js";import"./button-icon.element-CGYVftO0.js";/* empty css               */import"./FileSaver.min-D7SFo6xU.js";import"./time.util-BYguZ9lS.js";import"./loading.component-sLptPKAm.js";import"./typography.style-CBgwY7_D.js";import"./image.element-C9kYkHl9.js";import"./stack.style-B5k1Qc4S.js";import"./memoTheme-HOUyZqrd.js";import"./defaultTheme-BGAZNSBz.js";import"./DefaultPropsProvider-BVc36nx7.js";import"./Stack-Up7TlUQf.js";import"./index-3f0Hh3Ub.js";import"./index-DP7gAqwz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-BcF2JLY5.js";import"./Box-CNziy5N6.js";import"./InputLabel-BMPpu4_O.js";import"./useFormControl-CmOg5wnR.js";import"./link.element-BfA8Monr.js";import"./Typography-CDoNwpf8.js";import"./isFocusVisible-B8k4qzLc.js";import"./other.util-DGC_Rvqo.js";import"./CircularProgress-CBGHLSb1.js";import"./tooltip-on-click.element-Bbda5Vu_.js";import"./useForkRef-BVpE-hzr.js";import"./getReactElementRef-BVRziQZO.js";import"./TransitionGroupContext-DM7DmuUd.js";import"./index-CWS0_3Nh.js";import"./index-Ctr1kwqx.js";import"./useTimeout-B9dDFdNe.js";import"./useEnhancedEffect-Dmr-a5D-.js";import"./Grow-Dtpwe2QC.js";import"./useSlot-DiW1_K6U.js";import"./Tooltip-mLaLfpgP.js";import"./useId-CFSqmtgZ.js";import"./icon-content-badge-subs.element-D_1vZnLl.js";import"./icon.element-DzT0Ndh-.js";import"./icon-content-badge.element-CRCaLjMG.js";import"./icon-content.element--UeuSiL9.js";import"./Badge-CDUJ6Vev.js";import"./ownerWindow-BMbJ5sQi.js";import"./createSvgIcon-Bxbv8U67.js";import"./ButtonBase-BG16-y-d.js";import"./proxy-DKXG_8Nh.js";import"./Button-BUMS_kt5.js";const vt={title:"Elements/Button/ButtonUploadFileElement",component:i,tags:["autodocs"],args:{onChange:C(),multiple:!1,accept:"image/*"},parameters:{layout:"centered",chromatic:{disableSnapshot:!1}}},e={},a={render:t=>r.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[r.jsx(i,{...t,accept:"image/*"}),r.jsx(i,{...t,accept:".pdf,.png,.jpg"})]})},o={play:async({canvasElement:t,args:n})=>{const x=E(t).getByRole("button");await l.click(x);const s=t.querySelector('input[type="file"]');await p(s).not.toBeNull();const B=new File(["hello"],"hello.png",{type:"image/png"});await l.upload(s,B),await p(n.onChange).toHaveBeenCalledTimes(1);const v=n.onChange.mock.calls[0][0];await p(v[0].name).toBe("hello.png")}};var m,c,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(g=(c=e.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,d,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>\r
      <ButtonUploadFileElement {...args} accept="image/*" />\r
      <ButtonUploadFileElement {...args} accept=".pdf,.png,.jpg" />\r
    </div>
}`,...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var h,y,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const Ct=["Default","AcceptVariants","UploadCallsOnChange"];export{a as AcceptVariants,e as Default,o as UploadCallsOnChange,Ct as __namedExportsOrder,vt as default};
