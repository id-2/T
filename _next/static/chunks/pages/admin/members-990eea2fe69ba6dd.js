(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [623],
  {
    41525: function (n, r, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/members",
        function () {
          return e(93581);
        },
      ]);
    },
    93581: function (n, r, e) {
      "use strict";
      e.r(r),
        e.d(r, {
          __N_SSP: function () {
            return i;
          },
        });
      var u = e(85893),
        t = e(23544);
      e(67294);
      var s = e(18688),
        _ = e(59690),
        i = !0;
      r.default = (0, t.withSuperJSONPage)(function (n) {
        let { user: r, serverHostConfig: e, serverOrg: t, roles: i } = n;
        return (0, u.jsx)(s.Z, {
          user: r,
          serverHostConfig: e,
          serverOrg: t,
          roles: i,
          children: (n) => {
            let { org: r, user: e } = n;
            return (0, u.jsx)(_.Z, { org: r, user: e });
          },
        });
      });
    },
  },
  function (n) {
    n.O(0, [445, 617, 556, 982, 544, 561, 5, 320, 774, 888, 179], function () {
      return n((n.s = 41525));
    }),
      (_N_E = n.O());
  },
]);
