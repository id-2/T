(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [271],
  {
    3575: function (n, r, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/domains",
        function () {
          return e(35904);
        },
      ]);
    },
    35904: function (n, r, e) {
      "use strict";
      e.r(r),
        e.d(r, {
          __N_SSP: function () {
            return o;
          },
        });
      var u = e(85893),
        t = e(23544);
      e(67294);
      var s = e(67907),
        i = e(18688),
        o = !0;
      r.default = (0, t.withSuperJSONPage)(function (n) {
        let { user: r, serverHostConfig: e, serverOrg: t, roles: o } = n;
        return (0, u.jsx)(i.Z, {
          user: r,
          serverHostConfig: e,
          serverOrg: t,
          roles: o,
          children: (n) => {
            let { org: r, user: e, onOrgUpdated: t } = n;
            return (0, u.jsx)(s.Z, { org: r, user: e, onOrgUpdated: t });
          },
        });
      });
    },
  },
  function (n) {
    n.O(0, [445, 617, 556, 982, 544, 561, 5, 320, 774, 888, 179], function () {
      return n((n.s = 3575));
    }),
      (_N_E = n.O());
  },
]);
