(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [432],
  {
    89468: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/training",
        function () {
          return n(40305);
        },
      ]);
    },
    34339: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var s = n(85893);
      n(67294);
      var r = n(77768);
      function a() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.filter(Boolean).join(" ");
      }
      function i(e) {
        let { label: t, description: n, enabled: i, setEnabled: o } = e;
        return (0, s.jsxs)("label", {
          className: "flex items-center justify-start",
          children: [
            (0, s.jsx)(r.r, {
              checked: i,
              onChange: o,
              className: a(
                i ? "bg-blue-600" : "bg-gray-200  dark:bg-zinc-700",
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              ),
              children: (0, s.jsx)("span", {
                "aria-hidden": "true",
                className: a(
                  i ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                ),
              }),
            }),
            t
              ? (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("div", { className: "ml-2", children: t }),
                    (0, s.jsx)("div", {
                      className: "ml-2 text-gray-500 text-xs",
                      children: n,
                    }),
                  ],
                })
              : null,
          ],
        });
      }
    },
    40305: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return g;
          },
          default: function () {
            return y;
          },
        });
      var s = n(85893),
        r = n(23544),
        a = n(67294),
        i = n(34339),
        o = n(24461),
        l = n(54399),
        u = n(87260),
        c = JSON.parse(
          '[{"id":"faq_bot","title":"FAQs Bot","instruction":"Rules:\\n1. You are a Chatbot trained to help answer frequently asked questions.\\n2. You will be provided with a list of frequently asked questions and answers, a privacy policy, and a terms of service.\\n3. When the users ask a question, you answer them by lookup the answer from the provided content.\\n4. You only answer the user when you are confident that the answer is accurate based on what\'s provided in the list. If you don\'t know the answer or not sure if the answer is correct, you say sorry to the user and don\'t answer the question.\\n\\nHere is the list of frequently asked questions and answers:\\n\\nFrequently asked questions:\\n\\n\\"\\"\\"\\nQuestion: question 1\\nAnswer: answer 1\\n\\nQuestion: question 2\\nAnswer: answer 2\\n\\n\\"\\"\\"\\n\\nNow the user will ask you a question.\\n","description":"Train the AI on your FAQs and let the users ask questions. This is a demo of how you can use the system instruction to train your bot."}]'
        );
      function d(e) {
        let { onSelect: t } = e;
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("h2", {
              className:
                "text-center text-2xl font-bold text-gray-800 dark:text-white",
              children: "System Instructions Example",
            }),
            (0, s.jsx)("div", {
              className: "mt-4",
              children: (0, s.jsx)("div", {
                children: c.map((e) =>
                  (0, s.jsx)(
                    "div",
                    {
                      className:
                        "p-4 border border-gray-200 dark:border-gray-600 rounded shadow-sm mb-4 flex items-center justify-between space-x-2 gap-3",
                      children: (0, s.jsxs)("div", {
                        className: "w-full",
                        children: [
                          (0, s.jsx)("div", {
                            className: "flex items-center justify-start gap-2",
                            children: (0, s.jsx)("h3", {
                              className:
                                "text-lg font-bold text-gray-800 dark:text-white",
                              children: e.title,
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "flex items-center justify-between gap-2",
                            children: [
                              (0, s.jsx)("div", {
                                children: e.description
                                  ? (0, s.jsx)("p", {
                                      className: "text-gray-500",
                                      children: e.description,
                                    })
                                  : null,
                              }),
                              (0, s.jsx)("div", {
                                className: "space-y-2 text-right shrink-0",
                                children: (0, s.jsx)("button", {
                                  className:
                                    "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap",
                                  onClick: () => {
                                    t(e.instruction);
                                  },
                                  children: "→ Use",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    e.id
                  )
                ),
              }),
            }),
          ],
        });
      }
      var h = n(11734);
      "Rules:\n1. You are a Chatbot trained to help answer frequently asked questions.\n2. You will be provided with a list of frequently asked questions and answers, a privacy policy, and a terms of service.\n3. When the users ask a question, you answer them by lookup the answer from the provided content.\n4. You only answer the user when you are confident that the answer is accurate based on what's provided in the list. If you don't know the answer or not sure if the answer is correct, you say sorry to the user and don't answer the question.\n\nHere is the list of frequently asked questions and answers:\n\nFrequently asked questions:\n\n\"\"\"\n"
        .concat(
          h._f
            .map((e, t) =>
              [
                "Question: ".concat(e.question),
                "Answer: ".concat(e.answer),
              ].join("\n")
            )
            .join("\n\n"),
          '\n"""\n\nHere is the privacy policy:\n\n"""\n'
        )
        .concat(h.Hf, '\n"""\n\nHere is the terms of service:\n\n"""\n')
        .concat(h.qX, '\n"""\n\nNow the user will ask you a question.\n');
      let f = "Something went wrong. Please try again.",
        m = { "gpt-3.5-turbo": 4096, "gpt-4": 8192, "gpt-4-32k": 32768 };
      function p(e) {
        let { org: t, onOrgUpdated: n } = e,
          [r, c] = (0, a.useState)(!!t.useDefaultModelSettings),
          [h, p] = (0, a.useState)(t.defaultSystemMessage || ""),
          [x, g] = (0, a.useState)(t.defaultModel || "gpt-3.5-turbo"),
          [y, b] = (0, a.useState)(!1),
          [v, w] = (0, a.useState)(null),
          [j, k] = (0, a.useState)(null),
          [N, S] = (0, a.useState)(!1),
          [q, T] = (0, a.useState)(!1),
          C = async () => {
            b(!0), w(""), k(null);
            try {
              let e = await fetch("/api/hosted/systemMessage", {
                body: JSON.stringify({
                  useDefaultModelSettings: r,
                  defaultModel: x,
                  defaultSystemMessage: h,
                }),
                headers: { "Content-Type": "application/json" },
                method: "POST",
              });
              if (e.status >= 400) {
                let t = await e.json();
                w(t.userMessage || f), b(!1);
                return;
              }
              if (!e.ok) {
                w(f), b(!1);
                return;
              }
              let t = await e.json();
              n(t), window.alert("Saved!");
            } catch (e) {
              w(f), console.error(e);
            }
            b(!1);
          },
          P = async () => {
            try {
              S(!0);
              let r = await fetch(
                  "https://api.openai.com/v1/chat/completions",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer ".concat(t.apiKey),
                    },
                    body: JSON.stringify({
                      model: x,
                      messages: [{ role: "system", content: h }],
                    }),
                  }
                ),
                a = await r.json();
              if (!r.ok) {
                var e, n;
                if (
                  null === (e = a.error) || void 0 === e ? void 0 : e.message
                ) {
                  k(
                    (0, s.jsxs)("span", {
                      className: "text-red-500",
                      children: [
                        "Sorry, OpenAI has rejected your request. Here is the error message from OpenAI: ",
                        null === (n = a.error) || void 0 === n
                          ? void 0
                          : n.message,
                      ],
                    })
                  );
                  return;
                }
                k(
                  (0, s.jsx)("span", { className: "text-red-500", children: f })
                );
                return;
              }
              let i = a.usage.total_tokens,
                o = m[x],
                l = Math.round((i / o) * 100);
              if (l > 80) {
                k(
                  (0, s.jsxs)("span", {
                    className: "text-red-500",
                    children: [
                      (0, s.jsx)("b", { children: "Token Usage:" }),
                      " ",
                      i,
                      "/",
                      o,
                      " (",
                      l,
                      "%). It means that there are ",
                      100 - l,
                      "% left for your users to use. Please change the instruction or use the higher model.",
                    ],
                  })
                );
                return;
              }
              k(
                (0, s.jsxs)("span", {
                  className: "text-green-500",
                  children: [
                    (0, s.jsx)("b", { children: "Token Usage:" }),
                    " ",
                    i,
                    "/",
                    o,
                    " (",
                    l,
                    "%)",
                  ],
                })
              );
            } catch (e) {
              console.log(e),
                k(
                  (0, s.jsx)("span", { className: "text-red-500", children: f })
                );
            } finally {
              S(!1);
            }
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(u.Z, {
              wide: !0,
              open: q,
              setOpen: T,
              children: (0, s.jsx)(d, {
                onSelect: (e) => {
                  p(e), T(!1);
                },
              }),
            }),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("div", {
                  className: "my-10",
                  children: (0, s.jsx)(i.Z, {
                    enabled: r,
                    setEnabled: c,
                    label:
                      "Set default model settings and PREVENT users from changing it",
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: "relative",
                  children: [
                    r
                      ? null
                      : (0, s.jsx)("div", {
                          className: "absolute z-20 inset-0 bg-white/70",
                        }),
                    (0, s.jsxs)("div", {
                      className: "flex items-center justify-start gap-2",
                      children: [
                        (0, s.jsx)("div", {
                          className: "flex items-center justify-between",
                          children: (0, s.jsx)("label", {
                            className: "block text-sm font-medium leading-6",
                            children: "Model",
                          }),
                        }),
                        (0, s.jsxs)("select", {
                          id: "model",
                          className:
                            "block w-fit rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 dark:text-white dark:bg-zinc-700 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6",
                          value: x,
                          onChange: (e) => g(e.target.value.toLowerCase()),
                          children: [
                            (0, s.jsx)("option", {
                              value: "gpt-3.5-turbo",
                              children: "GPT-3.5 (Default)",
                            }),
                            (0, s.jsx)("option", {
                              value: "gpt-4",
                              children: "GPT-4 (Limited Beta)",
                            }),
                            (0, s.jsx)("option", {
                              value: "gpt-4-32k",
                              children: "GPT-4-32K (Limited Beta)",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "my-4",
                      children: [
                        (0, s.jsx)("label", {
                          className: "text-sm font-semibold my-1 block",
                          children: "Default System Instruction",
                        }),
                        (0, s.jsx)("div", {
                          className: "text-xs text-gray-500 my-1",
                          children:
                            "Use this to set a default system instruction for the model or train your model with custom data.",
                        }),
                        (0, s.jsxs)("div", {
                          className: "my-2 flex items-center space-x-4",
                          children: [
                            (0, s.jsx)("button", {
                              onClick: () => T(!0),
                              className:
                                "space-x-1 inline-flex items-center text-sm font-medium rounded-md text-blue-600 hover:text-blue-700 focus:outline-none focus-visible:underline disabled:cursor-default disabled:opacity-50 transition-colors whitespace-nowrap gap-1",
                              children: (0, s.jsx)("span", {
                                children: "Example",
                              }),
                            }),
                            (0, s.jsxs)("button", {
                              disabled: y || N,
                              onClick: P,
                              className:
                                "space-x-1 inline-flex items-center text-sm font-medium rounded-md text-blue-600 hover:text-blue-700 focus:outline-none focus-visible:underline disabled:cursor-default disabled:opacity-50 transition-colors whitespace-nowrap gap-1",
                              children: [
                                (0, s.jsx)("span", {
                                  children: "Check Token Usage",
                                }),
                                N && (0, s.jsx)(o.Z, {}),
                              ],
                            }),
                          ],
                        }),
                        j &&
                          (0, s.jsx)("div", {
                            className: "my-2 text-sm",
                            children: j,
                          }),
                        (0, s.jsx)("div", {
                          children: (0, s.jsx)("textarea", {
                            placeholder: l.cl,
                            className:
                              "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-zinc-700 dark:text-white",
                            value: h,
                            rows: 10,
                            onChange: (e) => p(e.target.value),
                            onKeyDown: (e) => {
                              "Enter" === e.key &&
                                (e.metaKey || e.ctrlKey) &&
                                C();
                            },
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "my-8 text-center",
                  children: [
                    v &&
                      (0, s.jsx)("div", {
                        className: "my-4 text-red-500 text-sm text-center",
                        children: v,
                      }),
                    (0, s.jsxs)("button", {
                      onClick: C,
                      type: "submit",
                      className:
                        "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",
                      disabled: y,
                      children: [
                        y ? (0, s.jsx)(o.Z, {}) : "→",
                        (0, s.jsx)("span", { children: "Save" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var x = n(18688),
        g = !0,
        y = (0, r.withSuperJSONPage)(function (e) {
          let { user: t, serverHostConfig: n, serverOrg: r, roles: a } = e;
          return (0, s.jsx)(x.Z, {
            user: t,
            serverHostConfig: n,
            serverOrg: r,
            roles: a,
            children: (e) => {
              let { org: t, user: n, onOrgUpdated: r } = e;
              return (0, s.jsx)(p, { org: t, user: n, onOrgUpdated: r });
            },
          });
        });
    },
    95389: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return d;
        },
        b: function () {
          return c;
        },
      });
      var s = n(67294),
        r = n(19946),
        a = n(12351),
        i = n(16723),
        o = n(23784),
        l = n(73781);
      let u = (0, s.createContext)(null);
      function c() {
        let [e, t] = (0, s.useState)([]);
        return [
          e.length > 0 ? e.join(" ") : void 0,
          (0, s.useMemo)(
            () =>
              function (e) {
                let n = (0, l.z)(
                    (e) => (
                      t((t) => [...t, e]),
                      () =>
                        t((t) => {
                          let n = t.slice(),
                            s = n.indexOf(e);
                          return -1 !== s && n.splice(s, 1), n;
                        })
                    )
                  ),
                  r = (0, s.useMemo)(
                    () => ({
                      register: n,
                      slot: e.slot,
                      name: e.name,
                      props: e.props,
                    }),
                    [n, e.slot, e.name, e.props]
                  );
                return s.createElement(u.Provider, { value: r }, e.children);
              },
            [t]
          ),
        ];
      }
      let d = Object.assign(
        (0, a.yV)(function (e, t) {
          let n = (0, r.M)(),
            { id: l = `headlessui-label-${n}`, passive: c = !1, ...d } = e,
            h = (function e() {
              let t = (0, s.useContext)(u);
              if (null === t) {
                let t = Error(
                  "You used a <Label /> component, but it is not inside a relevant parent."
                );
                throw (
                  (Error.captureStackTrace && Error.captureStackTrace(t, e), t)
                );
              }
              return t;
            })(),
            f = (0, o.T)(t);
          (0, i.e)(() => h.register(l), [l, h.register]);
          let m = { ref: f, ...h.props, id: l };
          return (
            c &&
              ("onClick" in m && delete m.onClick,
              "onClick" in d && delete d.onClick),
            (0, a.sY)({
              ourProps: m,
              theirProps: d,
              slot: h.slot || {},
              defaultTag: "label",
              name: h.name || "Label",
            })
          );
        }),
        {}
      );
    },
    77768: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return b;
        },
      });
      var s = n(67294),
        r = n(12351),
        a = n(19946),
        i = n(61363),
        o = n(64103),
        l = n(95389),
        u = n(39516),
        c = n(14157),
        d = n(23784),
        h = n(46045),
        f = n(18689),
        m = n(73781),
        p = n(31147),
        x = n(94192);
      let g = (0, s.createContext)(null);
      g.displayName = "GroupContext";
      let y = s.Fragment,
        b = Object.assign(
          (0, r.yV)(function (e, t) {
            let n = (0, a.M)(),
              {
                id: l = `headlessui-switch-${n}`,
                checked: u,
                defaultChecked: y = !1,
                onChange: b,
                name: v,
                value: w,
                ...j
              } = e,
              k = (0, s.useContext)(g),
              N = (0, s.useRef)(null),
              S = (0, d.T)(N, t, null === k ? null : k.setSwitch),
              [q, T] = (0, p.q)(u, b, y),
              C = (0, m.z)(() => (null == T ? void 0 : T(!q))),
              P = (0, m.z)((e) => {
                if ((0, o.P)(e.currentTarget)) return e.preventDefault();
                e.preventDefault(), C();
              }),
              E = (0, m.z)((e) => {
                e.key === i.R.Space
                  ? (e.preventDefault(), C())
                  : e.key === i.R.Enter && (0, f.g)(e.currentTarget);
              }),
              _ = (0, m.z)((e) => e.preventDefault()),
              O = (0, s.useMemo)(() => ({ checked: q }), [q]),
              A = {
                id: l,
                ref: S,
                role: "switch",
                type: (0, c.f)(e, N),
                tabIndex: 0,
                "aria-checked": q,
                "aria-labelledby": null == k ? void 0 : k.labelledby,
                "aria-describedby": null == k ? void 0 : k.describedby,
                onClick: P,
                onKeyUp: E,
                onKeyPress: _,
              },
              M = (0, x.G)();
            return (
              (0, s.useEffect)(() => {
                var e;
                let t = null == (e = N.current) ? void 0 : e.closest("form");
                t &&
                  void 0 !== y &&
                  M.addEventListener(t, "reset", () => {
                    T(y);
                  });
              }, [N, T]),
              s.createElement(
                s.Fragment,
                null,
                null != v &&
                  q &&
                  s.createElement(h._, {
                    features: h.A.Hidden,
                    ...(0, r.oA)({
                      as: "input",
                      type: "checkbox",
                      hidden: !0,
                      readOnly: !0,
                      checked: q,
                      name: v,
                      value: w,
                    }),
                  }),
                (0, r.sY)({
                  ourProps: A,
                  theirProps: j,
                  slot: O,
                  defaultTag: "button",
                  name: "Switch",
                })
              )
            );
          }),
          {
            Group: function (e) {
              let [t, n] = (0, s.useState)(null),
                [a, i] = (0, l.b)(),
                [o, c] = (0, u.f)(),
                d = (0, s.useMemo)(
                  () => ({
                    switch: t,
                    setSwitch: n,
                    labelledby: a,
                    describedby: o,
                  }),
                  [t, n, a, o]
                );
              return s.createElement(
                c,
                { name: "Switch.Description" },
                s.createElement(
                  i,
                  {
                    name: "Switch.Label",
                    props: {
                      onClick() {
                        t && (t.click(), t.focus({ preventScroll: !0 }));
                      },
                    },
                  },
                  s.createElement(
                    g.Provider,
                    { value: d },
                    (0, r.sY)({
                      ourProps: {},
                      theirProps: e,
                      defaultTag: y,
                      name: "Switch.Group",
                    })
                  )
                )
              );
            },
            Label: l._,
            Description: u.d,
          }
        );
    },
    31147: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return a;
        },
      });
      var s = n(67294),
        r = n(73781);
      function a(e, t, n) {
        let [a, i] = (0, s.useState)(n),
          o = void 0 !== e,
          l = (0, s.useRef)(o),
          u = (0, s.useRef)(!1),
          c = (0, s.useRef)(!1);
        return (
          !o || l.current || u.current
            ? o ||
              !l.current ||
              c.current ||
              ((c.current = !0),
              (l.current = o),
              console.error(
                "A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen."
              ))
            : ((u.current = !0),
              (l.current = o),
              console.error(
                "A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen."
              )),
          [o ? e : a, (0, r.z)((e) => (o || i(e), null == t ? void 0 : t(e)))]
        );
      }
    },
    18689: function (e, t, n) {
      "use strict";
      function s(e, t) {
        return e ? e + "[" + t + "]" : t;
      }
      function r(e) {
        var t;
        let n =
          null != (t = null == e ? void 0 : e.form) ? t : e.closest("form");
        if (n) {
          for (let e of n.elements)
            if (
              ("INPUT" === e.tagName && "submit" === e.type) ||
              ("BUTTON" === e.tagName && "submit" === e.type) ||
              ("INPUT" === e.nodeName && "image" === e.type)
            ) {
              e.click();
              return;
            }
        }
      }
      n.d(t, {
        g: function () {
          return r;
        },
        t: function () {
          return function e(t = {}, n = null, r = []) {
            for (let [a, i] of Object.entries(t))
              !(function t(n, r, a) {
                if (Array.isArray(a))
                  for (let [e, i] of a.entries()) t(n, s(r, e.toString()), i);
                else
                  a instanceof Date
                    ? n.push([r, a.toISOString()])
                    : "boolean" == typeof a
                    ? n.push([r, a ? "1" : "0"])
                    : "string" == typeof a
                    ? n.push([r, a])
                    : "number" == typeof a
                    ? n.push([r, `${a}`])
                    : null == a
                    ? n.push([r, ""])
                    : e(a, r, n);
              })(r, s(n, a), i);
            return r;
          };
        },
      });
    },
  },
  function (e) {
    e.O(0, [445, 617, 556, 982, 544, 561, 5, 320, 774, 888, 179], function () {
      return e((e.s = 89468));
    }),
      (_N_E = e.O());
  },
]);
