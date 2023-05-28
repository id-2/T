(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [303],
  {
    89566: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/verify_payment",
        function () {
          return s(18882);
        },
      ]);
    },
    18882: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSP: function () {
            return o;
          },
        });
      var n = s(85893),
        a = s(23544),
        i = s(67294),
        r = s(24461);
      s(18688);
      let l = "Something went wrong. Please try again.";
      var o = !0;
      t.default = (0, a.withSuperJSONPage)(function (e) {
        let { user: t, serverHostConfig: s, serverOrg: a, roles: o } = e,
          [c, u] = (0, i.useState)([]),
          [d, f] = (0, i.useState)(!1),
          [h, m] = (0, i.useState)(null);
        (0, i.useEffect)(() => {
          let e = new URLSearchParams(window.location.search),
            t = e.get("seats");
          t ? (p(t), setInterval(() => p(t), 2e3)) : (w(), setInterval(w, 2e3));
        }, []);
        let p = async (e) => {
            f(!0), m("");
            try {
              let t = await fetch("/api/hosted/orgs/self", {
                headers: { "Content-Type": "application/json" },
              });
              if (t.status >= 400) {
                let e = await t.json();
                m(e.userMessage || l), f(!1);
                return;
              }
              if (!t.ok) {
                m(l), f(!1);
                return;
              }
              let s = await t.json();
              Number(s.maxUsers) === Number(e) &&
                (window.location.href = "/admin/members");
            } catch (e) {
              m(l), console.error(e);
            }
            f(!1);
          },
          w = async () => {
            f(!0), m("");
            try {
              let e = await fetch("/api/hosted/subscriptions", {
                headers: { "Content-Type": "application/json" },
              });
              if (e.status >= 400) {
                let t = await e.json();
                m(t.userMessage || l), f(!1);
                return;
              }
              if (!e.ok) {
                m(l), f(!1);
                return;
              }
              let t = await e.json(),
                s = t.subscriptions;
              s &&
                s.length > 0 &&
                s.filter((e) => {
                  var t, s;
                  return (
                    (null == e
                      ? void 0
                      : null === (t = e.data) || void 0 === t
                      ? void 0
                      : null === (s = t.attributes) || void 0 === s
                      ? void 0
                      : s.status) === "active"
                  );
                }).length > 0 &&
                (window.location.href = "/admin/billing");
            } catch (e) {
              m(l), console.error(e);
            }
            f(!1);
          };
        return (0,
        n.jsx)("div", { className: "p-4 flex items-center justify-center", children: (0, n.jsxs)("div", { className: "text-center", children: [h && (0, n.jsx)("div", { className: "px-4 my-10 text-center text-red-500", children: h }), (0, n.jsxs)("div", { className: "flex items-center justify-center text-gray-500 font-semibold text-xl gap-2 my-10", children: [(0, n.jsx)(r.Z, {}), (0, n.jsx)("div", { children: "Verifying..." })] }), (0, n.jsx)("div", { className: "text-sm text-gray-500 my-2", children: "Please wait, this may take up to a minute..." }), (0, n.jsx)("div", { className: "text-sm text-gray-500 my-2", children: "If it takes too long, please contact support." })] }) });
      });
    },
  },
  function (e) {
    e.O(0, [445, 617, 556, 982, 544, 561, 5, 320, 774, 888, 179], function () {
      return e((e.s = 89566));
    }),
      (_N_E = e.O());
  },
]);
