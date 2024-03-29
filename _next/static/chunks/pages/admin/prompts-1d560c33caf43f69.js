(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [539],
  {
    8128: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/prompts",
        function () {
          return n(54493);
        },
      ]);
    },
    87807: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(85893),
        o = n(67294),
        s = n(93463),
        i = n(8193),
        a = n(24461);
      function d(e) {
        let { show: t, onAdd: n, loading: d, error: l, onCancel: u } = e,
          [c, p] = (0, o.useState)(""),
          [f, m] = (0, o.useState)(""),
          [b, x] = (0, o.useState)(""),
          [h, g] = (0, o.useState)(l),
          y = (0, o.useRef)(null);
        (0, o.useEffect)(() => {
          if (t) {
            var e;
            null === (e = y.current) || void 0 === e || e.focus();
          }
        }, [t]);
        let v = async () => {
            if (!c || !b) {
              g("Title and prompt cannot be empty!");
              return;
            }
            await n({ title: c, description: f, prompt: b }),
              p(""),
              m(""),
              x("");
          },
          w = (e) => {
            if ("Escape" === e.key) {
              e.preventDefault(), u();
              return;
            }
            if ("Enter" === e.key && e.metaKey) {
              e.preventDefault(), v();
              return;
            }
          };
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("div", {
              className: "font-semibold my-1",
              children: "Title:",
            }),
            (0, r.jsx)("input", {
              onKeyDown: w,
              ref: y,
              type: "text",
              placeholder: "Prompt Title (e.g., 'Domain Names Inspirations')",
              className:
                "w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out dark:bg-zinc-700",
              value: c,
              onChange: (e) => p(e.target.value),
              disabled: d,
            }),
            (0, r.jsx)("div", {
              className: "font-semibold mb-1 mt-3",
              children: "Description (optional):",
            }),
            (0, r.jsx)("input", {
              type: "text",
              placeholder: "E.g., A list of domain names based on topics",
              className:
                "w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out dark:bg-zinc-700",
              value: f,
              onChange: (e) => m(e.target.value),
              onKeyDown: w,
              disabled: d,
            }),
            (0, r.jsxs)("div", {
              className: " mb-1 mt-3",
              children: [
                (0, r.jsx)("span", {
                  className: "font-semibold ",
                  children: "Prompt:",
                }),
                (0, r.jsxs)("span", {
                  className: "text-xs ml-2",
                  children: [
                    "Use",
                    " ",
                    (0, r.jsx)("code", {
                      className: "text-xs bg-gray-200 dark:bg-zinc-900",
                      children: "{{field 1}}",
                    }),
                    " ",
                    (0, r.jsx)("code", {
                      className: "text-xs bg-gray-200 dark:bg-zinc-900",
                      children: "{{field 2}}",
                    }),
                    " ",
                    (0, r.jsx)("code", {
                      className: "text-xs bg-gray-200 dark:bg-zinc-900",
                      children: "{{or anything}}",
                    }),
                    " ",
                    "to indicate the fill in the blank part.",
                  ],
                }),
              ],
            }),
            (0, r.jsx)(s.Z, {
              className:
                "w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out dark:bg-zinc-700",
              minRows: 3,
              placeholder: "Enter your prompt here...",
              value: b,
              onChange: (e) => x(e.target.value),
              onKeyDown: w,
              disabled: d,
            }),
            h &&
              (0, r.jsxs)("p", {
                className: "my-2 text-sm text-red-500",
                children: [" ", h],
              }),
            (0, r.jsxs)("div", {
              className: "my-2 text-center",
              children: [
                (0, r.jsxs)("button", {
                  disabled: d,
                  onClick: v,
                  className:
                    "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap gap-1",
                  children: [
                    d
                      ? (0, r.jsx)(a.Z, {})
                      : (0, r.jsx)(i.Lfi, { className: "w-4 h-4" }),
                    (0, r.jsx)("span", { children: "Add Prompt" }),
                  ],
                }),
                (0, r.jsx)("button", {
                  disabled: d,
                  onClick: () => u(),
                  className:
                    " text-black dark:text-white transition font-bold py-2 px-4 rounded inline-flex space-x-1 justify-center items-center disabled:opacity-50",
                  children: (0, r.jsx)("span", { children: "Cancel" }),
                }),
              ],
            }),
          ],
        });
      }
    },
    82947: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(85893),
        o = n(67294),
        s = n(93463),
        i = n(24461);
      function a(e) {
        let {
            promptItem: t,
            onUpdate: n,
            onCancel: a,
            loading: d,
            error: l,
          } = e,
          [u, c] = (0, o.useState)(t.title),
          [p, f] = (0, o.useState)(t.description),
          [m, b] = (0, o.useState)(t.prompt),
          [x, h] = (0, o.useState)(l),
          g = (0, o.useRef)(null);
        (0, o.useEffect)(() => {
          setTimeout(() => {
            var e;
            null === (e = g.current) || void 0 === e || e.focus();
          }, 100);
        }, []);
        let y = async () => {
            if (!u || !m) {
              h("Title and prompt cannot be empty!");
              return;
            }
            n({ ...t, title: u, description: p, prompt: m, syncedAt: null });
          },
          v = (e) => {
            if ("Escape" === e.key) {
              e.preventDefault(), null == a || a();
              return;
            }
            if ("Enter" === e.key && e.metaKey) {
              e.preventDefault(), y();
              return;
            }
          };
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("div", {
              className: "font-semibold my-1",
              children: "Title:",
            }),
            (0, r.jsx)("input", {
              ref: g,
              type: "text",
              placeholder: t.title,
              className:
                "w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out dark:bg-zinc-700",
              value: u,
              onChange: (e) => c(e.target.value),
              onKeyDown: v,
              disabled: d,
            }),
            (0, r.jsx)("div", {
              className: "font-semibold mb-1 mt-3",
              children: "Description (optional):",
            }),
            (0, r.jsx)("input", {
              type: "text",
              placeholder: t.description || "",
              className:
                "w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out dark:bg-zinc-700",
              value: p,
              onChange: (e) => f(e.target.value),
              onKeyDown: v,
              disabled: d,
            }),
            (0, r.jsxs)("div", {
              className: " mb-1 mt-3",
              children: [
                (0, r.jsx)("span", {
                  className: "font-semibold ",
                  children: "Prompt:",
                }),
                (0, r.jsxs)("span", {
                  className: "text-xs ml-2",
                  children: [
                    "Use",
                    " ",
                    (0, r.jsx)("code", {
                      className: "text-xs bg-gray-200 dark:bg-zinc-900",
                      children: "{{your content here}}",
                    }),
                    " ",
                    "to indicate the fill in the blank part.",
                  ],
                }),
              ],
            }),
            (0, r.jsx)(s.Z, {
              className:
                "w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out dark:bg-zinc-700",
              minRows: 3,
              placeholder: t.prompt,
              value: m,
              onChange: (e) => b(e.target.value),
              onKeyDown: v,
              disabled: d,
            }),
            x &&
              (0, r.jsxs)("p", {
                className: "my-2 text-sm text-red-500",
                children: [" ", x],
              }),
            (0, r.jsxs)("div", {
              className:
                "my-2 flex items-center space-x-2 justify-center text-center",
              children: [
                (0, r.jsxs)("button", {
                  onClick: y,
                  className:
                    "inline-flex items-center space-x-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap",
                  disabled: d,
                  children: [
                    d && (0, r.jsx)(i.Z, {}),
                    (0, r.jsx)("span", { children: "Update Prompt" }),
                  ],
                }),
                (0, r.jsx)("button", {
                  onClick: a,
                  className:
                    " text-black dark:text-white transition font-bold py-2 px-4 rounded inline-flex space-x-1 justify-center items-center disabled:opacity-50",
                  disabled: d,
                  children: (0, r.jsx)("span", { children: "Cancel" }),
                }),
              ],
            }),
          ],
        });
      }
    },
    54493: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return b;
          },
          default: function () {
            return x;
          },
        });
      var r = n(85893),
        o = n(23544),
        s = n(18688),
        i = n(67294);
      n(24461);
      var a = n(8193),
        d = n(87807),
        l = n(54426),
        u = n(57632),
        c = n(82947);
      let p = "Something went wrong. Please try again.",
        f = (e, t) =>
          "" === t
            ? e
            : e.filter((e) => {
                var n, r, o, s, i, a;
                return (
                  (null ===
                    (n =
                      null === (r = e.prompt) || void 0 === r
                        ? void 0
                        : r.toLowerCase()) || void 0 === n
                    ? void 0
                    : n.includes(t.toLowerCase())) ||
                  (null ===
                    (o =
                      null === (s = e.description) || void 0 === s
                        ? void 0
                        : s.toLowerCase()) || void 0 === o
                    ? void 0
                    : o.includes(t.toLowerCase())) ||
                  (null ===
                    (i =
                      null === (a = e.title) || void 0 === a
                        ? void 0
                        : a.toLowerCase()) || void 0 === i
                    ? void 0
                    : i.includes(t.toLowerCase()))
                );
              });
      function m(e) {
        let { org: t, onOrgUpdated: n } = e,
          [o, s] = (0, i.useState)(!1),
          [m, b] = (0, i.useState)(""),
          [x, h] = (0, i.useState)(!1),
          [g, y] = (0, i.useState)(""),
          [v, w] = (0, i.useState)(null),
          [j, N] = (0, i.useState)(t.systemPrompts || []),
          S = async (e) => {
            s(!0), b("");
            try {
              let t = await fetch("/api/hosted/prompts", {
                body: JSON.stringify({ systemPrompts: e }),
                headers: { "Content-Type": "application/json" },
                method: "POST",
              });
              if (t.status >= 400) {
                let e = await t.json();
                b(e.userMessage || p);
                return;
              }
              if (!t.ok) {
                b(p);
                return;
              }
              let r = await t.json();
              n(r), N(r.systemPrompts || []), h(!1), w(null);
            } catch (e) {
              b(p), console.error(e);
            } finally {
              s(!1);
            }
          };
        return (0, r.jsx)("div", {
          children: (0, r.jsxs)("div", {
            children: [
              (0, r.jsxs)("div", {
                className: "my-4 flex items-center justify-center gap-2",
                children: [
                  (0, r.jsx)("input", {
                    type: "text",
                    placeholder: "Search your prompts",
                    className:
                      "w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 dark:bg-zinc-800",
                    value: g,
                    onChange: (e) => y(e.target.value),
                    onKeyDown: (e) => {
                      "Escape" === e.key &&
                        "" !== g &&
                        (e.preventDefault(), y(""));
                    },
                  }),
                  (0, r.jsxs)("button", {
                    onClick: () => h(!0),
                    className:
                      "text-blue-500 hover:underline inline-flex justify-center items-center font-semibold space-x-1 shrink-0 truncate py-2 px-2",
                    children: [
                      (0, r.jsx)(a.Lfi, { className: "w-4 h-4" }),
                      (0, r.jsx)("span", { children: "Add Prompt" }),
                    ],
                  }),
                ],
              }),
              x
                ? (0, r.jsx)(d.Z, {
                    show: x,
                    setShow: h,
                    onAdd: (e) => {
                      let { title: t, description: n, prompt: r } = e,
                        o = [
                          {
                            id: "pr-" + (0, u.Z)(),
                            title: t,
                            description: n,
                            prompt: r,
                            createdAt: new Date(),
                            lastUsedAt: new Date(),
                            syncedAt: null,
                          },
                          ...j,
                        ];
                      return S(o);
                    },
                    onCancel: () => h(!1),
                    loading: o,
                    error: m,
                  })
                : null,
              v
                ? (0, r.jsx)("div", {
                    className: "my-4",
                    children: (0, r.jsx)(c.Z, {
                      promptItem: v,
                      onUpdate: (e) => {
                        let t = j.map((t) => (t.id === e.id ? e : t));
                        return S(t);
                      },
                      onCancel: () => w(null),
                      loading: o,
                      error: m,
                    }),
                  })
                : (0, r.jsx)("div", {
                    children: f(j, g).map((e) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className:
                            "p-4 border border-gray-200 dark:border-gray-600 rounded shadow-sm mb-4 flex items-center justify-between space-x-2 gap-3",
                          children: (0, r.jsxs)("div", {
                            className: "w-full",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "flex items-center justify-start gap-2",
                                children: (0, r.jsx)("h3", {
                                  className:
                                    "text-lg font-bold text-gray-800 dark:text-white",
                                  children: e.title,
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className:
                                  "flex items-center justify-between gap-2",
                                children: (0, r.jsxs)("div", {
                                  children: [
                                    e.description
                                      ? (0, r.jsx)("p", {
                                          className: "text-gray-500",
                                          children: e.description,
                                        })
                                      : null,
                                    (0, r.jsxs)("div", {
                                      className:
                                        "flex items-center mt-1 gap-x-4 gap-y-1 flex-wrap",
                                      children: [
                                        (0, r.jsx)("button", {
                                          onClick: () => {
                                            w(e);
                                          },
                                          className: "text-xs text-blue-500",
                                          children: "Edit",
                                        }),
                                        (0, r.jsx)(l.Z, {
                                          onConfirmed: () => {
                                            S(j.filter((t) => t.id !== e.id));
                                          },
                                          className:
                                            "text-xs text-red-500 hover:undefined",
                                          disabled: o,
                                          children: "Delete",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        },
                        e.id
                      )
                    ),
                  }),
              (0, r.jsx)("div", {
                children:
                  0 === j.length
                    ? (0, r.jsx)("div", {
                        className:
                          "text-center text-gray-500 p-4 border-2 border-dashed border-gray-300 rounded-lg",
                        children:
                          'You have no saved prompts. Tap "Add Prompt" to add a new prompt.',
                      })
                    : 0 === f(j, g).length
                    ? (0, r.jsxs)("div", {
                        className:
                          "text-center text-gray-500 p-4 border-2 border-dashed border-gray-300 rounded-lg",
                        children: ['Nothing found for "', g, '"'],
                      })
                    : null,
              }),
            ],
          }),
        });
      }
      var b = !0,
        x = (0, o.withSuperJSONPage)(function (e) {
          let { user: t, serverHostConfig: n, serverOrg: o, roles: i } = e;
          return (0, r.jsx)(s.Z, {
            user: t,
            serverHostConfig: n,
            serverOrg: o,
            roles: i,
            children: (e) => {
              let { org: t, user: n, onOrgUpdated: o } = e;
              return (0, r.jsx)(m, { org: t, user: n, onOrgUpdated: o });
            },
          });
        });
    },
    93463: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return y;
        },
      });
      var r = n(87462),
        o = n(63366),
        s = n(67294),
        i = s.useLayoutEffect,
        a = function (e) {
          var t = s.useRef(e);
          return (
            i(function () {
              t.current = e;
            }),
            t
          );
        },
        d = function (e, t) {
          if ("function" == typeof e) {
            e(t);
            return;
          }
          e.current = t;
        },
        l = function (e, t) {
          var n = (0, s.useRef)();
          return (0, s.useCallback)(
            function (r) {
              (e.current = r),
                n.current && d(n.current, null),
                (n.current = t),
                t && d(t, r);
            },
            [t]
          );
        },
        u = {
          "min-height": "0",
          "max-height": "none",
          height: "0",
          visibility: "hidden",
          overflow: "hidden",
          position: "absolute",
          "z-index": "-1000",
          top: "0",
          right: "0",
        },
        c = function (e) {
          Object.keys(u).forEach(function (t) {
            e.style.setProperty(t, u[t], "important");
          });
        },
        p = null,
        f = function (e, t) {
          var n = e.scrollHeight;
          return "border-box" === t.sizingStyle.boxSizing
            ? n + t.borderSize
            : n - t.paddingSize;
        },
        m = function () {},
        b = [
          "borderBottomWidth",
          "borderLeftWidth",
          "borderRightWidth",
          "borderTopWidth",
          "boxSizing",
          "fontFamily",
          "fontSize",
          "fontStyle",
          "fontWeight",
          "letterSpacing",
          "lineHeight",
          "paddingBottom",
          "paddingLeft",
          "paddingRight",
          "paddingTop",
          "tabSize",
          "textIndent",
          "textRendering",
          "textTransform",
          "width",
          "wordBreak",
        ],
        x = !!document.documentElement.currentStyle,
        h = function (e) {
          var t = window.getComputedStyle(e);
          if (null === t) return null;
          var n = b.reduce(function (e, n) {
              return (e[n] = t[n]), e;
            }, {}),
            r = n.boxSizing;
          if ("" === r) return null;
          x &&
            "border-box" === r &&
            (n.width =
              parseFloat(n.width) +
              parseFloat(n.borderRightWidth) +
              parseFloat(n.borderLeftWidth) +
              parseFloat(n.paddingRight) +
              parseFloat(n.paddingLeft) +
              "px");
          var o = parseFloat(n.paddingBottom) + parseFloat(n.paddingTop),
            s = parseFloat(n.borderBottomWidth) + parseFloat(n.borderTopWidth);
          return { sizingStyle: n, paddingSize: o, borderSize: s };
        },
        g = function (e) {
          var t = a(e);
          (0, s.useLayoutEffect)(function () {
            var e = function (e) {
              t.current(e);
            };
            return (
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          }, []);
        },
        y = (0, s.forwardRef)(function (e, t) {
          var n = e.cacheMeasurements,
            i = e.maxRows,
            a = e.minRows,
            d = e.onChange,
            u = void 0 === d ? m : d,
            b = e.onHeightChange,
            x = void 0 === b ? m : b,
            y = (0, o.Z)(e, [
              "cacheMeasurements",
              "maxRows",
              "minRows",
              "onChange",
              "onHeightChange",
            ]),
            v = void 0 !== y.value,
            w = (0, s.useRef)(null),
            j = l(w, t),
            N = (0, s.useRef)(0),
            S = (0, s.useRef)(),
            k = function () {
              var e,
                t,
                r,
                o,
                s,
                d,
                l,
                u,
                m,
                b,
                g,
                y = w.current,
                v = n && S.current ? S.current : h(y);
              if (v) {
                S.current = v;
                var j =
                    ((e = y.value || y.placeholder || "x"),
                    void 0 === (t = a) && (t = 1),
                    void 0 === (r = i) && (r = 1 / 0),
                    p ||
                      ((p = document.createElement("textarea")).setAttribute(
                        "tabindex",
                        "-1"
                      ),
                      p.setAttribute("aria-hidden", "true"),
                      c(p)),
                    null === p.parentNode && document.body.appendChild(p),
                    (o = v.paddingSize),
                    (s = v.borderSize),
                    (l = (d = v.sizingStyle).boxSizing),
                    Object.keys(d).forEach(function (e) {
                      p.style[e] = d[e];
                    }),
                    c(p),
                    (p.value = e),
                    (u = f(p, v)),
                    (p.value = "x"),
                    (b = (m = p.scrollHeight - o) * t),
                    "border-box" === l && (b = b + o + s),
                    (u = Math.max(b, u)),
                    (g = m * r),
                    "border-box" === l && (g = g + o + s),
                    [(u = Math.min(g, u)), m]),
                  k = j[0],
                  C = j[1];
                N.current !== k &&
                  ((N.current = k),
                  y.style.setProperty("height", k + "px", "important"),
                  x(k, { rowHeight: C }));
              }
            };
          return (
            (0, s.useLayoutEffect)(k),
            g(k),
            (0, s.createElement)(
              "textarea",
              (0, r.Z)({}, y, {
                onChange: function (e) {
                  v || k(), u(e);
                },
                ref: j,
              })
            )
          );
        });
    },
    57632: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      let o =
        "undefined" != typeof crypto &&
        crypto.randomUUID &&
        crypto.randomUUID.bind(crypto);
      var s = { randomUUID: o };
      let i = new Uint8Array(16);
      function a() {
        if (
          !r &&
          !(r =
            "undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto))
        )
          throw Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return r(i);
      }
      let d = [];
      for (let e = 0; e < 256; ++e) d.push((e + 256).toString(16).slice(1));
      var l = function (e, t, n) {
        if (s.randomUUID && !t && !e) return s.randomUUID();
        e = e || {};
        let r = e.random || (e.rng || a)();
        if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
          n = n || 0;
          for (let e = 0; e < 16; ++e) t[n + e] = r[e];
          return t;
        }
        return (function (e, t = 0) {
          return (
            d[e[t + 0]] +
            d[e[t + 1]] +
            d[e[t + 2]] +
            d[e[t + 3]] +
            "-" +
            d[e[t + 4]] +
            d[e[t + 5]] +
            "-" +
            d[e[t + 6]] +
            d[e[t + 7]] +
            "-" +
            d[e[t + 8]] +
            d[e[t + 9]] +
            "-" +
            d[e[t + 10]] +
            d[e[t + 11]] +
            d[e[t + 12]] +
            d[e[t + 13]] +
            d[e[t + 14]] +
            d[e[t + 15]]
          ).toLowerCase();
        })(r);
      };
    },
  },
  function (e) {
    e.O(0, [445, 617, 556, 982, 544, 561, 5, 320, 774, 888, 179], function () {
      return e((e.s = 8128));
    }),
      (_N_E = e.O());
  },
]);
