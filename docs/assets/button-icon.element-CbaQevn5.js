import './avatar-group.element-C0HJTTSY.js';
import './avatar-online-status.element-D2-_nWib.js';
import './avatar-user-info-detail.element-Dl_MWm03.js';
import './avatar-user-info-update.element-mxZIs9p-.js';
import './avatar-user-info.element-BQ65--Ap.js';
import './avatar.element-jNaBHeJW.js';
import { B as d } from './Button-oCoBaHSt.js';
import { a as n, H as s } from './FileSaver.min-DMXJVTnZ.js';
import './icon-button.element-oKwD89rE.js';
import './icon-content-badge-subs.element-DYo91A1A.js';
import './icon-content-badge.element-DQ275V0-.js';
import './icon-content.element-BlVfaXx6.js';
import { I as u } from './icon.element-22LRK9Hk.js';
import { a as t } from './image.element-BnMOL9it.js';
import './index-j62jqFia.js';
import { j as o } from './jsx-runtime-D_zvdyIk.js'; /* empty css               */
import './link.element-BIiOul_5.js';
import { L as l } from './loading.component-CL5IbfVs.js';
import './stack.style-CS5a_qlk.js';
import './time-ago-content.component-ChMxp4Uu.js';
import './time-ago.component-By2BCoDQ.js';
import './time.util-BYguZ9lS.js';
import './tooltip-on-click.element-DkCofoav.js';
import './typography.style-r4ryqVfP.js';
const f = ({ icon: e, loading: m = !1, permission: i, sizeType: r = t.SQUARE, sx: p, ...a }) =>
  i === !1
    ? null
    : o.jsx(d, {
        ...a,
        sx: {
          textTransform: 'none',
          borderRadius: r === t.CIRCLE ? '50%' : r === t.SQUARE ? n : 0,
          width: s.medium,
          minWidth: 'unset',
          ...p,
        },
        children: m
          ? o.jsx(l, { color: 'primary', size: 'small', sx: { minHeight: 24.5 } })
          : o.jsx(u, { icon: e, sx: { height: 24.5 } }),
      });
f.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'ButtonIconElement',
  props: {
    loading: { defaultValue: { value: 'false', computed: !1 }, required: !1 },
    sizeType: { defaultValue: { value: "'SQUARE'", computed: !0 }, required: !1 },
  },
};
export { f as B };
