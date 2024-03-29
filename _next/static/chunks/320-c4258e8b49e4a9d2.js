(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [320],
  {
    18688: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return w;
        },
      });
      var n = s(85893),
        i = s(67294),
        a = s(60686),
        r = s(87260),
        l = s(8193);
      function o() {
        let [e, t] = (0, i.useState)(!1);
        return (0, n.jsxs)("div", {
          className: "fixed bottom-4 right-4",
          children: [
            (0, n.jsxs)("button", {
              onClick: () => t(!0),
              className:
                "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-400 gap-2 shadow hover:shadow-lg hover:-translate-y-1 transition-all group",
              children: [
                (0, n.jsx)(l.znh, {
                  className: "w-6 h-6 group-hover:scale-110 transition-all",
                }),
                (0, n.jsx)("span", { children: "Got Questions?" }),
              ],
            }),
            (0, n.jsxs)(r.Z, {
              max: !0,
              open: e,
              setOpen: t,
              children: [
                (0, n.jsx)("h2", {
                  className: "text-lg text-center my-4 font-semibold",
                  children: "Frequently Asked Questions",
                }),
                (0, n.jsx)("div", {
                  className: "text-center",
                  children:
                    "Don't find what you're looking for? Email us at support@webmind.app",
                }),
                (0, n.jsx)(a.Z, {}),
              ],
            }),
          ],
        });
      }
      var d = s(11163);
      s(88388);
      let c = "Something went wrong. Please try again.";
      function m(e) {
        let { user: t, org: s } = e,
          [a, r] = (0, i.useState)(!0),
          [l, o] = (0, i.useState)(null),
          [d, m] = (0, i.useState)(null);
        (0, i.useEffect)(() => {
          f(), u();
        }, []);
        let u = async () => {
            for (
              await new Promise((e) => setTimeout(e, 1e3));
              !window.createLemonSqueezy;

            )
              await new Promise((e) => setTimeout(e, 1e3));
            console.log("Lemon installed"),
              window.createLemonSqueezy(),
              window.LemonSqueezy &&
                (console.log("Lemon setup"),
                window.LemonSqueezy.Setup({
                  eventHandler: (e) => {
                    "Checkout.Success" === e.event &&
                      setTimeout(() => {
                        window.location.href = "/admin/verify_payment";
                      }, 1e3);
                  },
                }));
          },
          x = {
            "checkout[email]": t.email,
            "checkout[custom][org_id]": s.id,
            embed: "1",
          },
          h = Object.keys(x)
            .map((e) => "".concat(e, "=").concat(encodeURIComponent(x[e])))
            .join("&"),
          f = async (e) => {
            r(!0), o("");
            try {
              let e = await fetch("/api/hosted/subscriptions", {
                headers: { "Content-Type": "application/json" },
              });
              if (e.status >= 400) {
                let t = await e.json();
                o(t.userMessage || c), r(!1);
                return;
              }
              if (!e.ok) {
                o(c), r(!1);
                return;
              }
              let t = await e.json();
              m(t.subscriptions);
            } catch (e) {
              o(c), console.error(e);
            }
            r(!1);
          };
        return a
          ? null
          : (0, n.jsxs)("div", {
              children: [
                d &&
                d.length > 0 &&
                d.filter((e) => {
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
                }).length > 0
                  ? null
                  : (0, n.jsxs)("div", {
                      className: "p-4 bg-yellow-50 rounded-md shadow",
                      children: [
                        (0, n.jsx)("div", {
                          className: "text-sm mb-2",
                          children:
                            "Please finish your payment to activate your Chat Instance.",
                        }),
                        (0, n.jsx)("a", {
                          className:
                            "lemonsqueezy-button inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",
                          target: "_blank",
                          rel: "noreferrer noopener",
                          href:
                            "https://tdinh.lemonsqueezy.com/checkout/buy/5b95a345-5a3e-4883-bc7c-f51a61b5be22?" +
                            h,
                          children: "Buy Subscription →",
                        }),
                      ],
                    }),
                l &&
                  (0, n.jsx)("div", {
                    className:
                      "text-center text-red-500 text-sm font-semibold my-2",
                    children: l,
                  }),
              ],
            });
      }
      s(59690), s(67907);
      var u = s(23235);
      function x(e) {
        let {} = e,
          [t, s] = (0, i.useState)(!1),
          [a, r] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            "#verified" === window.location.hash &&
              ((window.location.hash = ""),
              s(!0),
              setTimeout(() => {
                r(!0);
              }, 800));
          }, []),
          a
            ? (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)("div", {
                    className: "flex items-center justify-center",
                    children: (0, n.jsx)(u.Z, {}),
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "flex items-center justify-center text-green-500 text-lg font-semibold",
                    children:
                      "\uD83C\uDF89 Well done! Your Chat instance is now verified!",
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "flex items-center justify-center text-green-500",
                    children:
                      "You can now customize and preview your Chat instance below.",
                  }),
                ],
              })
            : null
        );
      }
      var h = s(31955),
        f = s(54426),
        g = s(56681),
        p = s(51448),
        b = s(89583),
        y = s(53854);
      let j = [
        { name: "⚙️ Settings", link: "/admin" },
        { name: "\uD83D\uDC4B Welcome Message", link: "/admin/welcome" },
        { name: "\uD83E\uDD16 Model & Training", link: "/admin/training" },
        { name: "\uD83D\uDCD6 Prompts", link: "/admin/prompts" },
        { name: "\uD83C\uDF0F Custom Domain", link: "/admin/domains" },
        { name: "\uD83D\uDC65 Members", link: "/admin/members" },
        { name: "\uD83D\uDCB3 Billing", link: "/admin/billing" },
        { type: "separator" },
        {
          name: "✨ Changelog (↗️)",
          link: "https://tdinh.notion.site/Changelog-Custom-Deployment-4e79590a5d734041bb1d89a59cf98352",
        },
      ];
      function v() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return t.filter(Boolean).join(" ");
      }
      function w(e) {
        let {
            user: t,
            serverHostConfig: s,
            serverOrg: a,
            roles: r,
            children: l,
          } = e,
          c = (0, d.useRouter)(),
          u = j.find((e) => e.link === c.pathname) || j[0],
          [w, N] = (0, i.useState)(a),
          [k, S] = (0, i.useState)(!1),
          C = () => {
            h.Z.remove("org_token"), window.location.reload();
          };
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("div", {
            className: "min-h-screen",
            children: [
              (0, n.jsx)(p.Z, { hostConfig: s, title: "Admin Panel" }),
              t
                ? t && !r.includes("admin")
                  ? (0, n.jsx)("div", {
                      className: "py-10",
                      children: (0, n.jsxs)("main", {
                        className: "max-w-3xl mx-auto px-4",
                        children: [
                          (0, n.jsx)(x, {}),
                          (0, n.jsxs)("div", {
                            className: "text-center my-10",
                            children: [
                              (0, n.jsx)("h1", {
                                className: "text-2xl text-center my-2",
                                children: "Manage Your Instance",
                              }),
                              (0, n.jsx)("span", {
                                className:
                                  "text-xs bg-green-500 rounded-full px-3 py-1 text-white text-white font-semibold inline-block",
                                children: "Early Access",
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "text-center flex items-center justify-center gap-2",
                            children: [
                              (0, n.jsxs)("div", {
                                children: [
                                  "\uD83D\uDC4B Welcome, ",
                                  (0, n.jsx)("b", {
                                    children: null == t ? void 0 : t.email,
                                  }),
                                ],
                              }),
                              (0, n.jsx)(f.Z, {
                                onConfirmed: C,
                                className:
                                  "text-red-500 font-semibold cursor-pointer hover:underline",
                                children: "Logout",
                              }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className: "text-center my-10",
                            children:
                              "You are not an admin and cannot access this page.",
                          }),
                        ],
                      }),
                    })
                  : (0, n.jsxs)("div", {
                      className: "min-h-screen flex",
                      children: [
                        (0, n.jsxs)("div", {
                          className: v(
                            "h-screen fixed z-10 md:sticky top-0 right-[calc(100%-16px)] md:right-auto border-r border-gray-200 bg-white p-6 w-[300px] shrink-0 duration-300",
                            k && "translate-x-full md:translate-x-0"
                          ),
                          children: [
                            (0, n.jsx)("button", {
                              onClick: () => S((e) => !e),
                              className:
                                "absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center rounded-full p-1 bg-gray-300 md:hidden",
                              children: k
                                ? (0, n.jsx)(y.ldB, {})
                                : (0, n.jsx)(y.ilJ, {}),
                            }),
                            (0, n.jsxs)("div", {
                              className: "h-full flex flex-col overflow-auto",
                              children: [
                                (0, n.jsxs)("div", {
                                  className: "my-6",
                                  children: [
                                    "\uD83D\uDC4B Welcome,",
                                    " ",
                                    (0, n.jsx)("b", {
                                      className:
                                        "block text-ellipsis overflow-hidden whitespace-nowrap",
                                      children: null == t ? void 0 : t.email,
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("nav", {
                                  className: "flex flex-col flex-1",
                                  children: (0, n.jsxs)("ul", {
                                    role: "list",
                                    className: "flex flex-1 flex-col gap-y-7",
                                    children: [
                                      (0, n.jsx)("li", {
                                        children: (0, n.jsx)("ul", {
                                          role: "list",
                                          className: "space-y-1",
                                          children: j.map((e) =>
                                            "separator" === e.type
                                              ? (0, n.jsx)(
                                                  "li",
                                                  {
                                                    className:
                                                      "h-px w-full bg-gray-200",
                                                  },
                                                  e.name
                                                )
                                              : (0, n.jsx)(
                                                  "li",
                                                  {
                                                    children: (0, n.jsx)("a", {
                                                      href: e.link,
                                                      className: v(
                                                        u === e
                                                          ? "bg-gray-50 text-blue-600"
                                                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-100",
                                                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                                      ),
                                                      children: e.name,
                                                    }),
                                                  },
                                                  e.name
                                                )
                                          ),
                                        }),
                                      }),
                                      (0, n.jsx)("li", {
                                        className: "mt-auto",
                                        children: (0, n.jsx)(f.Z, {
                                          onConfirmed: C,
                                          className:
                                            "text-red-500 font-semibold cursor-pointer hover:underline",
                                          children: "Logout",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: v("grow p-10 overflow-hidden"),
                          children: (0, n.jsxs)("div", {
                            className: v(
                              "max-w-3xl mx-auto duration-300",
                              k && "translate-x-[300px] md:translate-x-0"
                            ),
                            children: [
                              (0, n.jsx)(x, {}),
                              (0, n.jsxs)("div", {
                                className: "text-center my-10",
                                children: [
                                  (0, n.jsx)("h1", {
                                    className: "text-2xl text-center my-2",
                                    children: "Manage Your Instance",
                                  }),
                                  (0, n.jsx)("span", {
                                    className:
                                      "text-xs bg-green-500 rounded-full px-3 py-1 text-white text-white font-semibold inline-block",
                                    children: "Early Access",
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "text-right my-4 flex items-center justify-center gap-2 flex-wrap",
                                children: [
                                  (0, n.jsx)("span", {
                                    className: "text-sm font-semibold",
                                    children: "Your Chat URL(s):",
                                  }),
                                  (0, n.jsxs)("a", {
                                    target: "_blank",
                                    href: "https://".concat(
                                      w.subdomain,
                                      ".webmind.app"
                                    ),
                                    className:
                                      "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",
                                    children: [
                                      w.subdomain,
                                      ".webmind.app",
                                      (0, n.jsx)(b.CkN, {
                                        className: "w-4 h-4",
                                      }),
                                    ],
                                  }),
                                  w.hostname
                                    ? (0, n.jsxs)("a", {
                                        target: "_blank",
                                        href: "https://".concat(w.hostname),
                                        className:
                                          "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",
                                        children: [
                                          w.hostname,
                                          (0, n.jsx)(b.CkN, {
                                            className: "w-4 h-4",
                                          }),
                                        ],
                                      })
                                    : null,
                                ],
                              }),
                              (0, n.jsx)(m, { org: w, user: t }),
                              l({ org: w, user: t, onOrgUpdated: N }),
                            ],
                          }),
                        }),
                      ],
                    })
                : (0, n.jsx)("div", {
                    className: "py-10",
                    children: (0, n.jsxs)("main", {
                      className: "max-w-3xl mx-auto px-4",
                      children: [
                        (0, n.jsx)(x, {}),
                        (0, n.jsxs)("div", {
                          className: "text-center my-10",
                          children: [
                            (0, n.jsx)("h1", {
                              className: "text-2xl text-center my-2",
                              children: "Manage Your Instance",
                            }),
                            (0, n.jsx)("span", {
                              className:
                                "text-xs bg-green-500 rounded-full px-3 py-1 text-white text-white font-semibold inline-block",
                              children: "Early Access",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "max-w-md mx-auto px-4",
                          children: [
                            (0, n.jsx)("div", {
                              className: "text-lg text-center",
                              children: "Please Login First",
                            }),
                            (0, n.jsx)(g.Z, {
                              hostConfig: { orgID: w.id },
                              onLoggedIn: () => {
                                window.location.reload();
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
              (0, n.jsx)(o, {}),
              (0, n.jsx)("script", {
                src: "https://assets.lemonsqueezy.com/lemon.js",
                defer: !0,
              }),
            ],
          }),
        });
      }
    },
    54426: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = s(85893),
        i = s(67294);
      function a() {
        let e,
          {
            onConfirmed: t,
            children: s,
            className: a,
            disabled: r,
            defaultText: l = () => "Delete",
            confirmText: o = () =>
              (0, n.jsx)("span", {
                className: "text-red-500 text-xs hover:underline",
                children: "Sure?",
              }),
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          [d, c] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => () => clearTimeout(e), []),
          (0, i.useEffect)(
            () => (
              d &&
                (clearTimeout(e),
                (e = setTimeout(() => {
                  c(!1);
                }, 2e3))),
              () => clearTimeout(e)
            ),
            [d]
          ),
          (0, n.jsx)("button", {
            disabled: r,
            onClick: () => {
              !r && (d ? t && t() : c(!0));
            },
            className: a,
            children: d ? o({ disabled: r }) : s || l({ disabled: r }),
          })
        );
      }
    },
    88388: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = s(85893),
        i = s(67294),
        a = s(24461);
      let r = "Something went wrong. Please try again.";
      function l(e) {
        var t, s, l, o, d, c, m, u, x, h, f, g, p, b, y, j, v, w;
        let { subscription: N } = e,
          [k, S] = (0, i.useState)(N),
          [C, D] = (0, i.useState)(!1),
          [T, E] = (0, i.useState)(null),
          M = async (e) => {
            if (
              "cancel" !== e ||
              window.confirm(
                "Are you sure you want to cancel this subscription?"
              )
            ) {
              D(!0), E("");
              try {
                var t, s, n, i, a, l, o, d;
                let c = await fetch("/api/hosted/subscriptions/" + N.id, {
                  headers: { "Content-Type": "application/json" },
                  method: "PUT",
                  body: JSON.stringify({ action: e }),
                });
                if (c.status >= 400) {
                  let e = await c.json();
                  E(e.userMessage || r), D(!1);
                  return;
                }
                if (!c.ok) {
                  E(r), D(!1);
                  return;
                }
                let m = await c.json();
                S(m.subscription),
                  "update" === e &&
                    (null == m
                      ? void 0
                      : null === (t = m.subscription) || void 0 === t
                      ? void 0
                      : null === (s = t.data) || void 0 === s
                      ? void 0
                      : null === (n = s.attributes) || void 0 === n
                      ? void 0
                      : null === (i = n.urls) || void 0 === i
                      ? void 0
                      : i.update_payment_method) &&
                    window.open(
                      null == m
                        ? void 0
                        : null === (a = m.subscription) || void 0 === a
                        ? void 0
                        : null === (l = a.data) || void 0 === l
                        ? void 0
                        : null === (o = l.attributes) || void 0 === o
                        ? void 0
                        : null === (d = o.urls) || void 0 === d
                        ? void 0
                        : d.update_payment_method,
                      "_blank"
                    );
              } catch (e) {
                E(r), console.error(e);
              }
              D(!1);
            }
          };
        return (0, n.jsx)("div", {
          className: "flex items-center justify-between px-4 py-2",
          children: (0, n.jsx)("div", {
            className: "flex items-center",
            children: (0, n.jsxs)("div", {
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "text-lg font-medium flex items-center justify-center gap-2",
                  children: [
                    (null == k
                      ? void 0
                      : null === (t = k.data) || void 0 === t
                      ? void 0
                      : null === (s = t.attributes) || void 0 === s
                      ? void 0
                      : s.status) === "active"
                      ? (0, n.jsx)("div", {
                          className:
                            "text-xs text-white px-2 py-1 bg-green-500 rounded-md inline-block",
                          children: "Active",
                        })
                      : (null == k
                          ? void 0
                          : null === (l = k.data) || void 0 === l
                          ? void 0
                          : null === (o = l.attributes) || void 0 === o
                          ? void 0
                          : o.status) === "cancelled"
                      ? (0, n.jsx)("div", {
                          className:
                            "text-xs text-white px-2 py-1 bg-red-500 rounded-md inline-block",
                          children: "Cancelled",
                        })
                      : (0, n.jsx)("div", {
                          className:
                            "text-xs text-white px-2 py-1 bg-gray-500 rounded-md inline-block",
                          children:
                            null == k
                              ? void 0
                              : null === (d = k.data) || void 0 === d
                              ? void 0
                              : null === (c = d.attributes) || void 0 === c
                              ? void 0
                              : c.status_formatted,
                        }),
                    (0, n.jsx)("span", {
                      children:
                        null == k
                          ? void 0
                          : null === (m = k.data) || void 0 === m
                          ? void 0
                          : null === (u = m.attributes) || void 0 === u
                          ? void 0
                          : u.product_name,
                    }),
                  ],
                }),
                (null == k
                  ? void 0
                  : null === (x = k.data) || void 0 === x
                  ? void 0
                  : null === (h = x.attributes) || void 0 === h
                  ? void 0
                  : h.status) === "cancelled"
                  ? (0, n.jsxs)("div", {
                      className: "text-xs text-gray-500 my-1",
                      children: [
                        "Subscription ends at:",
                        " ",
                        new Date(
                          null == k
                            ? void 0
                            : null === (f = k.data) || void 0 === f
                            ? void 0
                            : null === (g = f.attributes) || void 0 === g
                            ? void 0
                            : g.ends_at
                        ).toLocaleString(),
                      ],
                    })
                  : null,
                (0, n.jsx)("div", {
                  className: "flex items-center justify-start gap-2 my-2",
                  children:
                    (null == k
                      ? void 0
                      : null === (p = k.data) || void 0 === p
                      ? void 0
                      : null === (b = p.attributes) || void 0 === b
                      ? void 0
                      : b.status) === "active"
                      ? (0, n.jsxs)("div", {
                          className: "flex items-center justify-start gap-2",
                          children: [
                            (0, n.jsx)("button", {
                              onClick: () => M("update"),
                              disabled: C,
                              className:
                                "px-4 py-2 bg-blue-500 rounded-md text-sm font-medium text-white hover:bg-blue-600 disabled:bg-gray-400 flex items-center justify-center gap-2",
                              children: (0, n.jsx)("span", {
                                children: "Update Payment Metod",
                              }),
                            }),
                            (0, n.jsx)("button", {
                              onClick: () => M("cancel"),
                              disabled: C,
                              className:
                                "px-4 py-2 bg-red-500 rounded-md text-sm font-medium text-white hover:bg-red-600 disabled:bg-gray-400 flex items-center justify-center gap-2",
                              children: (0, n.jsx)("span", {
                                children: "Cancel",
                              }),
                            }),
                          ],
                        })
                      : (null == k
                          ? void 0
                          : null === (y = k.data) || void 0 === y
                          ? void 0
                          : null === (j = y.attributes) || void 0 === j
                          ? void 0
                          : j.status) === "cancelled" &&
                        new Date(
                          null == k
                            ? void 0
                            : null === (v = k.data) || void 0 === v
                            ? void 0
                            : null === (w = v.attributes) || void 0 === w
                            ? void 0
                            : w.ends_at
                        ) > new Date()
                      ? (0, n.jsx)("div", {
                          className: "flex items-center justify-start gap-2",
                          children: (0, n.jsx)("button", {
                            onClick: () => M("resume"),
                            disabled: C,
                            className:
                              "px-4 py-2 bg-blue-500 rounded-md text-sm font-medium text-white hover:bg-blue-600 disabled:bg-gray-400 flex items-center justify-center gap-2",
                            children: (0, n.jsx)("span", {
                              children: "Resume",
                            }),
                          }),
                        })
                      : null,
                }),
                C
                  ? (0, n.jsxs)("div", {
                      className:
                        "text-xs text-gray-500 my-1 flex items-center justify-start my-2 gap-2",
                      children: [
                        (0, n.jsx)(a.Z, {}),
                        (0, n.jsx)("span", { children: "Please wait..." }),
                      ],
                    })
                  : null,
                T &&
                  (0, n.jsx)("div", {
                    className:
                      "text-center text-red-500 text-sm font-semibold my-2",
                    children: T,
                  }),
              ],
            }),
          }),
        });
      }
      let o = "Something went wrong. Please try again.";
      function d(e) {
        let { org: t } = e,
          [s, r] = (0, i.useState)([]),
          [d, c] = (0, i.useState)(!1),
          [m, u] = (0, i.useState)(null);
        (0, i.useEffect)(() => {
          x();
        }, []);
        let x = async () => {
          c(!0), u("");
          try {
            let e = await fetch("/api/hosted/subscriptions", {
              headers: { "Content-Type": "application/json" },
            });
            if (e.status >= 400) {
              let t = await e.json();
              u(t.userMessage || o), c(!1);
              return;
            }
            if (!e.ok) {
              u(o), c(!1);
              return;
            }
            let t = await e.json();
            r(t.subscriptions);
          } catch (e) {
            u(o), console.error(e);
          }
          c(!1);
        };
        return d
          ? (0, n.jsx)("div", {
              className: "my-10 flex items-center justify-center",
              children: (0, n.jsx)(a.Z, {}),
            })
          : (0, n.jsxs)("div", {
              className: "my-2",
              children: [
                m &&
                  (0, n.jsx)("div", {
                    className: "px-4 text-center text-red-500",
                    children: m,
                  }),
                s.length
                  ? (0, n.jsx)("div", {
                      className: "my-4 divide-y divide-gray-900/10",
                      children: s.map((e) =>
                        (0, n.jsx)(l, { subscription: e }, e.id)
                      ),
                    })
                  : (0, n.jsx)("div", {
                      className: "my-4 text-center text-gray-500",
                      children: "No subscriptions",
                    }),
              ],
            });
      }
    },
    67907: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = s(85893),
        i = s(67294);
      let a = () =>
        (0, n.jsxs)("div", {
          className: "flex items-center space-x-3 px-2 sm:px-10",
          children: [
            (0, n.jsx)("div", {
              className: "w-6 h-6 rounded-full bg-gray-300 animate-pulse",
            }),
            (0, n.jsx)("p", {
              className: "text-black text-gray-500 font-normal text-sm",
              children: "Loading Configuration",
            }),
          ],
        });
      function r(e) {
        try {
          let t = e.error;
          if ("missing_txt_record" === t.code) return null;
          return t.message;
        } catch (e) {
          return null;
        }
      }
      function l(e) {
        let { domainInfo: t } = e,
          [s, l] = (0, i.useState)("CNAME");
        if (!t) return (0, n.jsx)(a, {});
        let o = t.name.replace("." + t.apexName, "");
        if (!t.verified) {
          let e = t.verification.find((e) => "TXT" === e.type);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("div", {
                className: "flex items-center space-x-3 my-3 px-2 sm:px-10",
                children: [
                  (0, n.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    width: "24",
                    height: "24",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    shapeRendering: "geometricPrecision",
                    children: [
                      (0, n.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "#EAB308",
                      }),
                      (0, n.jsx)("path", { d: "M12 8v4", stroke: "white" }),
                      (0, n.jsx)("path", { d: "M12 16h.01", stroke: "white" }),
                    ],
                  }),
                  (0, n.jsx)("p", {
                    className: "text-yellow-600 font-medium text-sm",
                    children: "Domain is pending verification",
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "w-full border-t border-gray-100 mt-5 mb-8",
              }),
              (0, n.jsxs)("div", {
                className: "px-2 sm:px-10",
                children: [
                  (0, n.jsx)("div", {
                    className: "flex justify-start space-x-4",
                    children: (0, n.jsx)("div", {
                      onClick: () => l("CNAME"),
                      className: "".concat(
                        "CNAME" == s
                          ? "text-black border-black"
                          : "text-gray-400 border-white",
                        " text-sm border-b-2 pb-1 transition-all ease duration-150"
                      ),
                      children: "Verify Domain Ownership",
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: "my-3 text-left",
                    children: [
                      (0, n.jsxs)("p", {
                        className: "my-5 text-sm",
                        children: [
                          "Please set the following TXT record on ",
                          t.apexName,
                          " to prove ownership of ",
                          t.name,
                          ":",
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex justify-start items-start space-x-10 bg-gray-50 p-2 rounded-md",
                        children: [
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("p", {
                                className: "text-sm font-bold",
                                children: "Type",
                              }),
                              (0, n.jsx)("p", {
                                className: "text-sm font-mono mt-2",
                                children: e.type,
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("p", {
                                className: "text-sm font-bold",
                                children: "Name",
                              }),
                              (0, n.jsx)("p", {
                                className: "text-sm font-mono mt-2",
                                children: e.domain.slice(
                                  0,
                                  e.domain.length - t.apexName.length - 1
                                ),
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("p", {
                                className: "text-sm font-bold",
                                children: "Value",
                              }),
                              (0, n.jsx)("p", {
                                className: "text-sm font-mono mt-2",
                                children: (0, n.jsx)("span", {
                                  className: "text-ellipsis",
                                  children: e.value,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      r(t.verificationResponse) &&
                        (0, n.jsx)("p", {
                          className: "my-5 text-sm text-red-700",
                          children: r(t.verificationResponse),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("div", {
              className: "flex items-center space-x-3 my-3 px-2 sm:px-10",
              children: [
                (0, n.jsxs)("svg", {
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  shapeRendering: "geometricPrecision",
                  children: [
                    (0, n.jsx)("circle", {
                      cx: "12",
                      cy: "12",
                      r: "10",
                      fill: t.configured ? "#1976d2" : "#d32f2f",
                    }),
                    t.configured
                      ? (0, n.jsx)(n.Fragment, {
                          children: (0, n.jsx)("path", {
                            d: "M8 11.8571L10.5 14.3572L15.8572 9",
                            fill: "none",
                            stroke: "white",
                          }),
                        })
                      : (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("path", {
                              d: "M15 9l-6 6",
                              stroke: "white",
                            }),
                            (0, n.jsx)("path", {
                              d: "M9 9l6 6",
                              stroke: "white",
                            }),
                          ],
                        }),
                  ],
                }),
                (0, n.jsxs)("p", {
                  className: "".concat(
                    t.configured
                      ? "text-black font-normal"
                      : "text-red-700 font-medium",
                    " text-sm"
                  ),
                  children: [
                    t.configured ? "Valid" : "Invalid",
                    " Configuration",
                  ],
                }),
              ],
            }),
            t.configured &&
              (0, n.jsx)("div", {
                className: "text-left px-2 sm:px-10 mb-2",
                children: (0, n.jsx)("p", {
                  className: "text-sm text-gray-500 font-normal",
                  children:
                    "Note: it may take 1-3 minutes for the SSL certificate to be provisioned.",
                }),
              }),
            !t.configured &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    className: "w-full border-t border-gray-100 mt-5 mb-8",
                  }),
                  (0, n.jsx)("div", {
                    className: "px-2 sm:px-10",
                    children: (0, n.jsxs)("div", {
                      className: "my-3 text-left",
                      children: [
                        (0, n.jsxs)("p", {
                          className: "my-5 text-sm",
                          children: [
                            "Set the following record on your DNS provider of",
                            " ",
                            (0, n.jsx)("b", { children: t.apexName }),
                            " to continue:",
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "flex justify-start items-center space-x-10 bg-gray-50 p-2 rounded-md",
                          children: [
                            (0, n.jsxs)("div", {
                              children: [
                                (0, n.jsx)("p", {
                                  className: "text-sm font-bold",
                                  children: "Type",
                                }),
                                (0, n.jsx)("p", {
                                  className: "text-sm font-mono mt-2",
                                  children: s,
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              children: [
                                (0, n.jsx)("p", {
                                  className: "text-sm font-bold",
                                  children: "Name",
                                }),
                                (0, n.jsx)("p", {
                                  className: "text-sm font-mono mt-2",
                                  children: "CNAME" == s ? o : "@",
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              children: [
                                (0, n.jsx)("p", {
                                  className: "text-sm font-bold",
                                  children: "Value",
                                }),
                                (0, n.jsx)("p", {
                                  className: "text-sm font-mono mt-2",
                                  children:
                                    "CNAME" == s
                                      ? "cname.webmind.app"
                                      : "76.76.21.21",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)("p", {
                          className: "my-5 text-sm",
                          children: [
                            (0, n.jsx)("b", { children: "Note:" }),
                            " If you are using Cloudflare, you will need to disable their proxy (turn off the orange cloud icon).",
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
          ],
        });
      }
      var o = s(24461);
      let d = "Something went wrong. Please try again.";
      function c(e) {
        let { domain: t } = e,
          [s, a] = (0, i.useState)(!1),
          [r, c] = (0, i.useState)(null),
          [m, u] = (0, i.useState)(null);
        (0, i.useEffect)(() => {
          t && x();
        }, [t]);
        let x = async () => {
          a(!0), c("");
          try {
            let e = await fetch("/api/hosted/domains/check", {
              headers: { "Content-Type": "application/json" },
              method: "POST",
            });
            if (e.status >= 400) {
              let t = await e.json();
              c(t.userMessage || d), a(!1);
              return;
            }
            if (!e.ok) {
              c(d), a(!1);
              return;
            }
            u(await e.json());
          } catch (e) {
            c(d), console.error(e);
          }
          a(!1);
        };
        return (0, n.jsx)("div", {
          children: (0, n.jsxs)("div", {
            className: "my-8 text-center",
            children: [
              r &&
                (0, n.jsx)("div", {
                  className: "my-4 text-red-500 text-sm text-center",
                  children: r,
                }),
              (0, n.jsx)("div", {
                className: "border-gray-200 border py-2 rounded-md shadow my-4",
                children: (0, n.jsx)(l, { domainInfo: m }),
              }),
              (0, n.jsxs)("button", {
                onClick: x,
                type: "submit",
                className:
                  "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",
                disabled: s,
                children: [
                  s ? (0, n.jsx)(o.Z, {}) : "→",
                  (0, n.jsx)("span", { children: "Re-check DNS Config" }),
                ],
              }),
            ],
          }),
        });
      }
      let m = "Something went wrong. Please try again.";
      function u(e) {
        let { org: t, onOrgUpdated: s } = e,
          [a, r] = (0, i.useState)(t.hostname || ""),
          [l, d] = (0, i.useState)(!1),
          [u, x] = (0, i.useState)(null),
          h = async () => {
            d(!0), x("");
            try {
              let e = await fetch("/api/hosted/domains", {
                body: JSON.stringify({ hostname: a }),
                headers: { "Content-Type": "application/json" },
                method: "POST",
              });
              if (e.status >= 400) {
                let t = await e.json();
                x(t.userMessage || m), d(!1);
                return;
              }
              if (!e.ok) {
                x(m), d(!1);
                return;
              }
              let t = await e.json();
              s(t);
            } catch (e) {
              x(m), console.error(e);
            }
            d(!1);
          };
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsxs)("div", {
              className: "my-4",
              children: [
                (0, n.jsx)("label", {
                  className: "text-sm font-semibold my-1 block",
                  children: "Default Sub-domain",
                }),
                (0, n.jsx)("div", {
                  className: "text-xs text-gray-500 my-1",
                  children:
                    "Your default sub-domain is hosted on *.webmind.app",
                }),
                (0, n.jsx)("div", {
                  children: (0, n.jsxs)("div", {
                    className:
                      "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500 bg-gray-100 px-2",
                    children: [
                      (null == t ? void 0 : t.subdomain) || "",
                      ".webmind.app",
                    ],
                  }),
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "my-4",
              children: [
                (0, n.jsx)("label", {
                  className: "text-sm font-semibold my-1 block",
                  children: "Custom Domain (Updating DNS records required)",
                }),
                (0, n.jsx)("div", {
                  className: "text-xs text-gray-500 my-1",
                  children:
                    "Your users will be able to access your instance at this domain.",
                }),
                (0, n.jsx)("div", {
                  children: (0, n.jsx)("input", {
                    disabled: l,
                    onKeyDown: (e) => {
                      "Enter" === e.key && h();
                    },
                    type: "text",
                    className:
                      "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
                    placeholder: "www.webmind.app",
                    value: a,
                    onChange: (e) => r(e.target.value),
                  }),
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "my-8 text-center",
              children: [
                u &&
                  (0, n.jsx)("div", {
                    className: "my-4 text-red-500 text-sm text-center",
                    children: u,
                  }),
                (0, n.jsxs)("button", {
                  onClick: h,
                  type: "submit",
                  className:
                    "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",
                  disabled: l,
                  children: [
                    l ? (0, n.jsx)(o.Z, {}) : "→",
                    (0, n.jsx)("span", { children: "Save" }),
                  ],
                }),
              ],
            }),
            t.hostname && (0, n.jsx)(c, { domain: t.hostname }),
          ],
        });
      }
    },
    56681: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = s(85893),
        i = s(67294),
        a = s(31955),
        r = s(24461);
      s(54399);
      let l = "Something went wrong. Please try again.";
      function o(e) {
        let {
            hostConfig: t,
            onLoggedIn: s,
            defaultEmail: o = "",
            requireInviteCode: d = "",
          } = e,
          [c, m] = (0, i.useState)(null),
          [u, x] = (0, i.useState)(o),
          [h, f] = (0, i.useState)(""),
          [g, p] = (0, i.useState)(!1),
          [b, y] = (0, i.useState)(""),
          [j, v] = (0, i.useState)(!1),
          w = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
          x(o);
        }, [o]);
        let N = async () => {
            try {
              v(!0), m("");
              let e = await fetch("/api/hosted/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  email: u,
                  inviteCode: h,
                  orgID: t.orgID,
                }),
              });
              if (e.status >= 400) {
                let t = await e.json();
                m(t.userMessage || l), v(!1);
                return;
              }
              if (!e.ok) {
                m(l), v(!1);
                return;
              }
              await e.json(),
                p(!0),
                setTimeout(() => {
                  w.current.focus();
                }, 100);
            } catch (e) {
              console.error(e), m(l);
            }
            v(!1);
          },
          k = async () => {
            try {
              v(!0), m("");
              let e = await fetch("/api/hosted/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: u, code: b, orgID: t.orgID }),
              });
              if (e.status >= 400) {
                let t = await e.json();
                m(t.userMessage || l), v(!1);
                return;
              }
              if (!e.ok) {
                m(l), v(!1);
                return;
              }
              let n = await e.json();
              a.Z.set("org_token", n.token, { expires: 30 }), null == s || s();
            } catch (e) {
              console.error(e), m(l);
            }
            v(!1);
          };
        return (0, n.jsxs)("div", {
          children: [
            g
              ? (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsxs)("div", {
                      className: "my-4",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "my-1 font-semibold",
                          children: ["Enter the code in your email (", u, "):"],
                        }),
                        (0, n.jsx)("input", {
                          ref: w,
                          type: "text",
                          disabled: j,
                          placeholder: "XXXXXX",
                          className:
                            "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 text-xl text-center",
                          value: b,
                          onChange: (e) => y(e.target.value),
                          onKeyDown: (e) => {
                            "Enter" === e.key && (e.preventDefault(), k());
                          },
                        }),
                      ],
                    }),
                    c &&
                      (0, n.jsx)("div", {
                        className:
                          "text-center text-red-500 text-sm font-semibold my-2",
                        children: c,
                      }),
                    (0, n.jsxs)("div", {
                      className: "my-4 flex items-center justify-center gap-2",
                      children: [
                        (0, n.jsxs)("button", {
                          onClick: k,
                          disabled: j || !b,
                          className:
                            "flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors gap-2",
                          children: [j ? (0, n.jsx)(r.Z, {}) : null, "Submit"],
                        }),
                        (0, n.jsx)("button", {
                          onClick: () => p(!1),
                          disabled: j,
                          className:
                            "flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-white-600 hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500 disabled:bg-gray-400 disabled:cursor-default transition-colors gap-2 disabled:text-white dark:text-white",
                          children: "Cancel",
                        }),
                      ],
                    }),
                  ],
                })
              : (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsxs)("div", {
                      className: "my-4",
                      children: [
                        (0, n.jsx)("div", {
                          className: "my-1 font-semibold",
                          children: "Enter your email:",
                        }),
                        (0, n.jsx)("input", {
                          type: "email",
                          disabled: j,
                          placeholder: "example@gmail.com",
                          className:
                            "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700",
                          value: u,
                          onChange: (e) => x(e.target.value),
                          onKeyDown: (e) => {
                            "Enter" === e.key && (e.preventDefault(), N());
                          },
                        }),
                      ],
                    }),
                    d
                      ? (0, n.jsxs)("div", {
                          className: "my-4",
                          children: [
                            (0, n.jsx)("div", {
                              className: "my-1 font-semibold",
                              children: "Invite code:",
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "text-xs font-semibold my-1 text-gray-500",
                              children:
                                "(Leave empty if you already have an account)",
                            }),
                            (0, n.jsx)("input", {
                              type: "text",
                              disabled: j,
                              placeholder: "XXXXXX",
                              className:
                                "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 text-xl text-center",
                              value: h,
                              onChange: (e) => f(e.target.value),
                              onKeyDown: (e) => {
                                "Enter" === e.key && (e.preventDefault(), N());
                              },
                            }),
                          ],
                        })
                      : null,
                    c &&
                      (0, n.jsx)("div", {
                        className:
                          "text-center text-red-500 text-sm font-semibold my-2",
                        children: c,
                      }),
                    (0, n.jsx)("div", {
                      className: "my-4 flex items-center justify-center gap-2",
                      children: (0, n.jsxs)("button", {
                        onClick: N,
                        disabled: j || !u,
                        className:
                          "flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors gap-2",
                        children: [
                          j
                            ? (0, n.jsx)(r.Z, {})
                            : (0, n.jsx)("span", { children: "→" }),
                          (0, n.jsx)("span", {
                            children: t.allowSubscriptions
                              ? "Login / Signup"
                              : "Login",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
            (0, n.jsxs)("div", {
              className:
                "text-xs font-semibold text-gray-500 text-center px-4 mt-4",
              children: [
                "You will receive a verification email from ",
                (0, n.jsx)("b", { children: "hosted@webmind.app" }),
                ". Please check your spam folder if you don't see it in your inbox.",
              ],
            }),
          ],
        });
      }
    },
    59690: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return h;
        },
      });
      var n = s(85893),
        i = s(67294),
        a = s(24461),
        r = s(89583),
        l = s(87260);
      let o = "Something went wrong. Please try again.";
      function d(e) {
        let { org: t } = e,
          [s, d] = (0, i.useState)(!1),
          [c, m] = (0, i.useState)(1),
          [u, x] = (0, i.useState)(!1),
          [h, f] = (0, i.useState)(null),
          g = async () => {
            x(!0), f("");
            try {
              let e = await fetch("/api/hosted/buy-more-seats", {
                body: JSON.stringify({
                  count: c,
                  redirect: window.location.href,
                }),
                headers: { "Content-Type": "application/json" },
                method: "POST",
              });
              if (e.status >= 400) {
                let t = await e.json();
                f(t.userMessage || o), x(!1);
                return;
              }
              if (!e.ok) {
                f(o), x(!1);
                return;
              }
              let s = await e.json();
              if (!s || !s.url) {
                f(o), x(!1);
                return;
              }
              window.LemonSqueezy
                ? (window.LemonSqueezy.Setup({
                    eventHandler: (e) => {
                      "Checkout.Success" === e.event &&
                        setTimeout(() => {
                          window.location.href =
                            "/admin/verify_payment?seats=" + (t.maxUsers + c);
                        }, 1e3);
                    },
                  }),
                  window.LemonSqueezy.Url.Open(s.url))
                : (window.location.href = s.url);
            } catch (e) {
              f(o), console.error(e);
            }
            x(!1);
          };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("button", {
              className:
                "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",
              target: "_blank",
              rel: "noreferrer noopener",
              onClick: () => d(!0),
              children: [
                (0, n.jsx)(r.Z1Y, { className: "w-4 h-4" }),
                (0, n.jsx)("span", { children: "Buy More Seats" }),
              ],
            }),
            (0, n.jsxs)(l.Z, {
              open: s,
              setOpen: d,
              showCloseButton: !1,
              children: [
                (0, n.jsx)("h3", {
                  className: "text-lg text-center my-4 font-semibold",
                  children: "Select number of seats to buy:",
                }),
                (0, n.jsx)("select", {
                  className:
                    "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 dark:text-white dark:bg-zinc-700 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6",
                  value: c,
                  onChange: (e) => m(Number(e.target.value)),
                  disabled: u,
                  children: Array.from({ length: 300 }, (e, t) => t + 1).map(
                    (e) =>
                      (0, n.jsxs)(
                        "option",
                        {
                          value: e,
                          children: [e, " seat", 1 === e ? "" : "s"],
                        },
                        e
                      )
                  ),
                }),
                (0, n.jsxs)("div", {
                  className: "my-4 text-lg text-center",
                  children: [
                    "Total cost:",
                    " ",
                    (0, n.jsxs)("span", {
                      className: "font-bold",
                      children: ["$", (19 * c).toLocaleString()],
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "my-4 text-sm text-gray-500 text-center",
                  children: "One-time Payment. VAT may apply.",
                }),
                h &&
                  (0, n.jsx)("div", {
                    className: "my-4 text-sm text-red-500 text-center",
                    children: h,
                  }),
                (0, n.jsxs)("div", {
                  className:
                    "text-center gap-2 flex items-center justify-center flex-col",
                  children: [
                    (0, n.jsxs)("button", {
                      onClick: g,
                      disabled: u,
                      className:
                        "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1",
                      children: [
                        u
                          ? (0, n.jsx)(a.Z, {})
                          : (0, n.jsx)(r.Z1Y, { className: "w-4 h-4" }),
                        (0, n.jsx)("span", { children: "Buy Now" }),
                      ],
                    }),
                    (0, n.jsx)("button", {
                      onClick: () => d(!1),
                      disabled: u,
                      className:
                        "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1 dark:text-gray-200 disabled:text-white",
                      children: "Cancel",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function c(e) {
        let { member: t, user: s, loading: i, onRemove: a } = e;
        return (0, n.jsxs)(
          "div",
          {
            className:
              "flex items-center justify-between px-4 py-2 hover:bg-gray-100 ",
            children: [
              (0, n.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, n.jsx)("div", {
                    children: (0, n.jsx)("div", {
                      className: "text-lg font-medium",
                      children: t.email,
                    }),
                  }),
                  t.roles
                    ? (0, n.jsx)("div", {
                        className: "flex items-center justify-center gap-2",
                        children: t.roles
                          .split(",")
                          .map((e) =>
                            (0, n.jsx)(
                              "div",
                              {
                                className:
                                  "text-xs text-white px-2 py-1 bg-green-500 rounded-md",
                                children: e.toUpperCase(),
                              },
                              e
                            )
                          ),
                      })
                    : null,
                  t.invitedAt && !t.lastLoginAt
                    ? (0, n.jsx)("div", {
                        className:
                          "text-xs text-white px-2 py-1 bg-gray-500 rounded-md",
                        children: "Invited",
                      })
                    : null,
                ],
              }),
              (0, n.jsx)("div", {
                className: "flex items-end justify-center flex-col",
                children:
                  s.email === t.email
                    ? null
                    : (0, n.jsx)("button", {
                        onClick: () => a(t),
                        disabled: i,
                        className:
                          "inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1",
                        children: "Remove",
                      }),
              }),
            ],
          },
          t.id
        );
      }
      let m = "Something went wrong. Please try again.";
      function u(e) {
        let { onAdded: t } = e,
          [s, a] = (0, i.useState)(!1),
          [o, d] = (0, i.useState)(""),
          [c, u] = (0, i.useState)(!1),
          [x, h] = (0, i.useState)(null),
          f = async () => {
            u(!0), h("");
            try {
              let e = await fetch("/api/hosted/members", {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({
                  emails: o
                    .trim()
                    .split(/[,;\n]/)
                    .map((e) => e.trim()),
                }),
              });
              if (e.status >= 400) {
                let t = await e.json();
                h(t.userMessage || m), u(!1);
                return;
              }
              if (!e.ok) {
                h(m), u(!1);
                return;
              }
              a(!1), null == t || t();
            } catch (e) {
              h(m), console.error(e);
            }
            u(!1);
          },
          g = o
            .trim()
            .split(/[,;\n]/)
            .every((e) => e.trim().length > 0 && e.includes("@"));
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("button", {
              onClick: () => a(!0),
              className:
                "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 gap-2",
              children: [
                (0, n.jsx)(r.wEH, { className: "w-4 h-4" }),
                (0, n.jsx)("span", { children: "Add Members" }),
              ],
            }),
            (0, n.jsxs)(l.Z, {
              open: s,
              setOpen: a,
              showCloseButton: !1,
              children: [
                (0, n.jsx)("h2", {
                  className: "text-lg text-center my-4 font-semibold",
                  children: "Add Members",
                }),
                (0, n.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, n.jsx)("p", {
                      className: "text-gray-500",
                      children:
                        "Enter your team members' email addresses here.",
                    }),
                    (0, n.jsx)("p", {
                      className: "font-semibold my-2",
                      children: "One email per line.",
                    }),
                  ],
                }),
                (0, n.jsx)("textarea", {
                  rows: 5,
                  value: o,
                  onChange: (e) => d(e.target.value),
                  placeholder: "john@example.com\nalice@yourdomain.com\n...",
                  className:
                    "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
                  onKeyDown: (e) => {
                    (e.metaKey || e.ctrlKey) &&
                      "Enter" === e.key &&
                      (e.preventDefault(), f());
                  },
                }),
                o &&
                  !g &&
                  (0, n.jsx)("p", {
                    className: "text-red-500 text-sm mt-2",
                    children: "Some emails in the list are invalid.",
                  }),
                x &&
                  (0, n.jsx)("p", {
                    className: "text-red-500 text-sm mt-2",
                    children: x,
                  }),
                (0, n.jsxs)("div", {
                  className: " flex items-center justify-center gap-2 mt-4",
                  children: [
                    (0, n.jsxs)("button", {
                      onClick: f,
                      disabled: c || !g,
                      className:
                        "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1",
                      children: [
                        (0, n.jsx)(r.Z1Y, { className: "w-4 h-4" }),
                        (0, n.jsx)("span", { children: "Add Members" }),
                      ],
                    }),
                    (0, n.jsx)("button", {
                      onClick: () => a(!1),
                      disabled: c,
                      className:
                        "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1",
                      children: (0, n.jsx)("span", { children: "Cancel" }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      let x = "Something went wrong. Please try again.";
      function h(e) {
        let { user: t, org: s } = e,
          [r, l] = (0, i.useState)([]),
          [o, m] = (0, i.useState)(!1),
          [h, f] = (0, i.useState)(null);
        (0, i.useEffect)(() => {
          p();
        }, []);
        let g = async (e) => {
            if (
              window.confirm("Are you sure you want to remove this member?")
            ) {
              m(!0), f("");
              try {
                let t = await fetch("/api/hosted/members/" + e.id, {
                  headers: { "Content-Type": "application/json" },
                  method: "DELETE",
                });
                if (t.status >= 400) {
                  let e = await t.json();
                  f(e.userMessage || x), m(!1);
                  return;
                }
                if (!t.ok) {
                  f(x), m(!1);
                  return;
                }
                let s = await t.json();
                l(s.members);
              } catch (e) {
                f(x), console.error(e);
              }
              m(!1);
            }
          },
          p = async () => {
            m(!0), f("");
            try {
              let e = await fetch("/api/hosted/members", {
                headers: { "Content-Type": "application/json" },
              });
              if (e.status >= 400) {
                let t = await e.json();
                f(t.userMessage || x), m(!1);
                return;
              }
              if (!e.ok) {
                f(x), m(!1);
                return;
              }
              let t = await e.json();
              l(t.members);
            } catch (e) {
              f(x), console.error(e);
            }
            m(!1);
          },
          b = { "checkout[email]": t.email, "checkout[custom][org_id]": s.id };
        return (
          Object.keys(b)
            .map((e) => "".concat(e, "=").concat(encodeURIComponent(b[e])))
            .join("&"),
          o
            ? (0, n.jsx)("div", {
                className: "my-10 flex items-center justify-center",
                children: (0, n.jsx)(a.Z, {}),
              })
            : (0, n.jsxs)("div", {
                children: [
                  h &&
                    (0, n.jsx)("div", {
                      className: "px-4 text-center text-red-500",
                      children: h,
                    }),
                  (0, n.jsx)("div", {
                    className: "my-4 font-semibold",
                    children: (0, n.jsxs)("div", {
                      children: [
                        "Current members: ",
                        r.length,
                        "/",
                        s.maxUsers,
                        ". You have",
                        " ",
                        (0, n.jsxs)("span", {
                          className:
                            s.maxUsers - r.length > 0
                              ? "text-green-500"
                              : "text-red-500",
                          children: [s.maxUsers - r.length, " seats"],
                        }),
                        " ",
                        "remaining.",
                      ],
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: "my-4 space-x-2",
                    children: [
                      (0, n.jsx)(u, { onAdded: p }),
                      (0, n.jsx)(d, { org: s }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "text-xs text-gray-500",
                    children:
                      "Buying more seats will become available very soon!",
                  }),
                  (0, n.jsx)("div", {
                    className: "my-4 divide-y divide-gray-900/10",
                    children: r.map((e) =>
                      (0, n.jsx)(c, { user: t, member: e, onRemove: g }, e.id)
                    ),
                  }),
                ],
              })
        );
      }
    },
    87260: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = s(85893),
        i = s(67294),
        a = s(11355),
        r = s(98029);
      function l() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return t.filter(Boolean).join(" ");
      }
      function o(e) {
        let {
          closeButtonText: t,
          showCloseButton: s = !0,
          title: o,
          position: d,
          open: c,
          setOpen: m,
          hideOverflow: u = !0,
          children: x,
          wide: h,
          wide2: f,
          max: g,
          customZ: p,
        } = e;
        return (0, n.jsx)(a.u.Root, {
          show: c,
          as: i.Fragment,
          children: (0, n.jsx)(r.V, {
            as: "div",
            className: l("fixed inset-0 overflow-y-auto", p || "z-50 "),
            onClose: m,
            children: (0, n.jsxs)("div", {
              className: l(
                "flex justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0",
                "top" === d ? "items-start pt-28" : "items-center pt-4"
              ),
              children: [
                (0, n.jsx)(a.u.Child, {
                  as: i.Fragment,
                  enter: "ease-out duration-300",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-100",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: (0, n.jsx)(r.V.Overlay, {
                    className:
                      "fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity",
                  }),
                }),
                (0, n.jsx)("span", {
                  className:
                    "hidden sm:inline-block sm:align-middle sm:h-screen",
                  "aria-hidden": "true",
                  children: "​",
                }),
                (0, n.jsx)(a.u.Child, {
                  as: i.Fragment,
                  enter: "ease-out duration-300",
                  enterFrom:
                    "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  enterTo: "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                  leaveTo:
                    "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  children: (0, n.jsxs)("div", {
                    className: l(
                      "inline-block w-full align-bottom bg-white dark:bg-zinc-900 rounded-lg px-4 pt-5 pb-4 text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:p-6",
                      u ? "overflow-hidden" : "",
                      h
                        ? " sm:max-w-lg"
                        : f
                        ? "sm:max-w-xl"
                        : g
                        ? "sm:max-w-3xl"
                        : " sm:max-w-sm"
                    ),
                    children: [
                      (0, n.jsxs)("div", {
                        children: [
                          o
                            ? (0, n.jsx)(r.V.Title, {
                                as: "h3",
                                className:
                                  "text-lg text-center leading-6 font-medium text-gray-900 dark:text-white",
                                children: o,
                              })
                            : null,
                          (0, n.jsx)("div", {
                            className:
                              "mt-2 text-gray-800 dark:text-white text-left text-sm",
                            children: x,
                          }),
                        ],
                      }),
                      s
                        ? (0, n.jsx)("div", {
                            className: "mt-5 sm:mt-6 text-center",
                            children: (0, n.jsx)("button", {
                              type: "button",
                              className:
                                "inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 py-1 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm",
                              onClick: () => m(!1),
                              children: t || "Close",
                            }),
                          })
                        : null,
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      }
    },
    11163: function (e, t, s) {
      e.exports = s(90387);
    },
  },
]);
