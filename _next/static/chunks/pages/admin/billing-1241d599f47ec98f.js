(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [224],
  {
    86494: function (n, r, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/billing",
        function () {
          return e(71954);
        },
      ]);
    },
    71954: function (n, r, e) {
      "use strict";
      e.r(r),
        e.d(r, {
          __N_SSP: function () {
            return _;
          },
        });
      var u = e(85893),
        t = e(23544);
      e(67294);
      var i = e(18688),
        s = e(88388),
        _ = !0;
      r.default = (0, t.withSuperJSONPage)(function (n) {
        let { user: r, serverHostConfig: e, serverOrg: t, roles: _ } = n;
        return (0, u.jsx)(i.Z, {
          user: r,
          serverHostConfig: e,
          serverOrg: t,
          roles: _,
          children: (n) => {
            let { org: r, user: e } = n;
            return (0, u.jsx)(s.Z, { org: r, user: e });
          },
        });
      });
    },
  },
  function (n) {
    n.O(0, [445, 617, 556, 982, 544, 561, 5, 320, 774, 888, 179], function () {
      return n((n.s = 86494));
    }),
      (_N_E = n.O());
  },
]);
