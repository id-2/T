(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [66],
  {
    67327: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/welcome",
        function () {
          return s(25202);
        },
      ]);
    },
    25202: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSP: function () {
            return u;
          },
          default: function () {
            return d;
          },
        });
      var n = s(85893),
        r = s(23544),
        a = s(18688),
        i = s(67294),
        o = s(24461);
      let l = "Something went wrong. Please try again.";
      function c(e) {
        let { org: t, onOrgUpdated: s } = e,
          [r, a] = (0, i.useState)(t.welcomeMessage || ""),
          [c, u] = (0, i.useState)(!1),
          [d, m] = (0, i.useState)(null),
          g = async () => {
            u(!0), m("");
            try {
              let e = await fetch("/api/hosted/welcomeMessage", {
                body: JSON.stringify({ welcomeMessage: r }),
                headers: { "Content-Type": "application/json" },
                method: "POST",
              });
              if (e.status >= 400) {
                let t = await e.json();
                m(t.userMessage || l), u(!1);
                return;
              }
              if (!e.ok) {
                m(l), u(!1);
                return;
              }
              let t = await e.json();
              s(t), window.alert("Saved!");
            } catch (e) {
              m(l), console.error(e);
            }
            u(!1);
          };
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)("div", {
              className: "relative",
              children: (0, n.jsxs)("div", {
                className: "my-4",
                children: [
                  (0, n.jsx)("label", {
                    className: "text-sm font-semibold my-1 block",
                    children: "Welcome Message (Markdown supported)",
                  }),
                  (0, n.jsx)("div", {
                    className: "text-xs text-gray-500 my-1",
                    children:
                      "This welcome message will be shown on the new chat page when users access your site.",
                  }),
                  (0, n.jsx)("div", {
                    children: (0, n.jsx)("textarea", {
                      placeholder: "",
                      className:
                        "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-zinc-700 dark:text-white",
                      value: r,
                      rows: 10,
                      onChange: (e) => a(e.target.value),
                      onKeyDown: (e) => {
                        "Enter" === e.key && (e.metaKey || e.ctrlKey) && g();
                      },
                    }),
                  }),
                ],
              }),
            }),
            (0, n.jsxs)("div", {
              className: "my-8 text-center",
              children: [
                d &&
                  (0, n.jsx)("div", {
                    className: "my-4 text-red-500 text-sm text-center",
                    children: d,
                  }),
                (0, n.jsxs)("button", {
                  onClick: g,
                  type: "submit",
                  className:
                    "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",
                  disabled: c,
                  children: [
                    c ? (0, n.jsx)(o.Z, {}) : "→",
                    (0, n.jsx)("span", { children: "Save" }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var u = !0,
        d = (0, r.withSuperJSONPage)(function (e) {
          let { user: t, serverHostConfig: s, serverOrg: r, roles: i } = e;
          return (0, n.jsx)(a.Z, {
            user: t,
            serverHostConfig: s,
            serverOrg: r,
            roles: i,
            children: (e) => {
              let { org: t, user: s, onOrgUpdated: r } = e;
              return (0, n.jsx)(c, { org: t, user: s, onOrgUpdated: r });
            },
          });
        });
    },
  },
  function (e) {
    e.O(0, [445, 617, 556, 982, 544, 561, 5, 320, 774, 888, 179], function () {
      return e((e.s = 67327));
    }),
      (_N_E = e.O());
  },
]);
