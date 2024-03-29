(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    75557: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(40341);
        },
      ]);
    },
    41365: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return h;
        },
      });
      var n = s(85893),
        r = s(67294),
        l = s(51356),
        i = s(63714),
        a = s(10395),
        o = s(24461),
        c = s(78672),
        d = s(54399);
      let u = "Something went wrong. Please try again.",
        x = (0, c.eK)("useLastVerifiedToken");
      function h(e) {
        let {
            showIntro: t = !0,
            source: s = "custom-deployment",
            autoFocus: c = !0,
          } = e,
          [h, m] = (0, r.useState)(!1),
          [f, g] = (0, r.useState)(null),
          [p, b] = (0, r.useState)(""),
          [y, j] = (0, r.useState)("gpt-4"),
          [v, w] = (0, r.useState)(null),
          [N, k] = x(null),
          C = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
          c && C.current && C.current.focus();
        }, [C]);
        let S = async () => {
            m(!0), g(""), w(null);
            try {
              let e = await fetch((0, d.v9)() + "/api/faqbot", {
                body: JSON.stringify({
                  question: p,
                  model: y,
                  source: s,
                  lastVerifiedToken: N,
                }),
                headers: { "Content-Type": "application/json" },
                method: "POST",
              });
              if (429 === e.status) {
                g(
                  "Sorry, the FAQ bot is currently experiencing high demand. Please try again later."
                ),
                  m(!1);
                return;
              }
              if (e.status >= 400) {
                let t = await e.json();
                g(t.userMessage || u), m(!1);
                return;
              }
              if (!e.ok) {
                g(u), m(!1);
                return;
              }
              let t = await e.json();
              w(t),
                setTimeout(() => {
                  var e;
                  null === (e = C.current) || void 0 === e || e.focus();
                }, 200);
            } catch (e) {
              g(u), console.error(e);
            }
            m(!1);
          },
          T = (0, r.useMemo)(() => [i.Z, l.Z], []);
        return (0, n.jsxs)("div", {
          children: [
            t
              ? (0, n.jsxs)("div", {
                  className: "text-xs text-gray-500 my-2",
                  children: [
                    "Try your luck with the FAQ bot!",
                    (0, n.jsx)("br", {}),
                    "It's trained with our FAQs, Privacy Policy, and Terms of Service.",
                    (0, n.jsx)("br", {}),
                    "Ask a question and see if it can answer it.",
                  ],
                })
              : null,
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "flex items-stretch justify-center gap-2 flex-col sm:flex-row",
                  children: [
                    (0, n.jsx)("input", {
                      ref: C,
                      disabled: h,
                      className:
                        "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:ring-1 focus:border-blue-500 sm:text-sm dark:bg-zinc-700",
                      placeholder: "Ask a question...",
                      value: p,
                      onChange: (e) => b(e.target.value),
                      onKeyDown: (e) => {
                        "Enter" === e.key && p && (e.preventDefault(), S());
                      },
                      maxLength: 200,
                    }),
                    (0, n.jsx)("div", {
                      className: "flex items-stretch gap-2 justify-center",
                      children: (0, n.jsxs)("button", {
                        onClick: S,
                        type: "submit",
                        className:
                          "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",
                        disabled: h || !p,
                        children: [
                          h ? (0, n.jsx)(o.Z, {}) : "→",
                          (0, n.jsx)("span", { children: "Ask" }),
                        ],
                      }),
                    }),
                  ],
                }),
                p
                  ? h
                    ? (0, n.jsx)("div", {
                        className: "text-sm text-gray-500 my-2",
                        children:
                          "Thinking... this may takes up to 20 seconds.",
                      })
                    : (0, n.jsxs)("div", {
                        className: "text-sm text-gray-500 my-2",
                        children: [p.length, "/200"],
                      })
                  : null,
                f &&
                  (0, n.jsx)("div", {
                    className:
                      "text-center text-red-500 text-sm font-semibold my-2",
                    children: f,
                  }),
                !h &&
                  v &&
                  (0, n.jsxs)("div", {
                    className:
                      "text-left text-gray-900 text-sm my-2 bg-green-100 p-4 rounded-md shadow",
                    children: [
                      (0, n.jsx)("div", {
                        className: "text-base font-semibold mb-2",
                        children: "\uD83E\uDD14 You asked:",
                      }),
                      (0, n.jsx)("div", {
                        className: "my-2",
                        children: v.question,
                      }),
                      (0, n.jsx)("div", {
                        className: "text-base font-semibold mb-2",
                        children: "\uD83D\uDCA1 Bot's answer:",
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "prose prose-sm max-w-full dark:prose-invert text-gray-900",
                        children: (0, n.jsx)(a.Z, {
                          children: v.answer,
                          remarkPlugins: T,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
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
        r = s(67294),
        l = s(31955),
        i = s(24461);
      s(54399);
      let a = "Something went wrong. Please try again.";
      function o(e) {
        let {
            hostConfig: t,
            onLoggedIn: s,
            defaultEmail: o = "",
            requireInviteCode: c = "",
          } = e,
          [d, u] = (0, r.useState)(null),
          [x, h] = (0, r.useState)(o),
          [m, f] = (0, r.useState)(""),
          [g, p] = (0, r.useState)(!1),
          [b, y] = (0, r.useState)(""),
          [j, v] = (0, r.useState)(!1),
          w = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
          h(o);
        }, [o]);
        let N = async () => {
            try {
              v(!0), u("");
              let e = await fetch("/api/hosted/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  email: x,
                  inviteCode: m,
                  orgID: t.orgID,
                }),
              });
              if (e.status >= 400) {
                let t = await e.json();
                u(t.userMessage || a), v(!1);
                return;
              }
              if (!e.ok) {
                u(a), v(!1);
                return;
              }
              await e.json(),
                p(!0),
                setTimeout(() => {
                  w.current.focus();
                }, 100);
            } catch (e) {
              console.error(e), u(a);
            }
            v(!1);
          },
          k = async () => {
            try {
              v(!0), u("");
              let e = await fetch("/api/hosted/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: x, code: b, orgID: t.orgID }),
              });
              if (e.status >= 400) {
                let t = await e.json();
                u(t.userMessage || a), v(!1);
                return;
              }
              if (!e.ok) {
                u(a), v(!1);
                return;
              }
              let n = await e.json();
              l.Z.set("org_token", n.token, { expires: 30 }), null == s || s();
            } catch (e) {
              console.error(e), u(a);
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
                          children: ["Enter the code in your email (", x, "):"],
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
                    d &&
                      (0, n.jsx)("div", {
                        className:
                          "text-center text-red-500 text-sm font-semibold my-2",
                        children: d,
                      }),
                    (0, n.jsxs)("div", {
                      className: "my-4 flex items-center justify-center gap-2",
                      children: [
                        (0, n.jsxs)("button", {
                          onClick: k,
                          disabled: j || !b,
                          className:
                            "flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors gap-2",
                          children: [j ? (0, n.jsx)(i.Z, {}) : null, "Submit"],
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
                          value: x,
                          onChange: (e) => h(e.target.value),
                          onKeyDown: (e) => {
                            "Enter" === e.key && (e.preventDefault(), N());
                          },
                        }),
                      ],
                    }),
                    c
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
                              value: m,
                              onChange: (e) => f(e.target.value),
                              onKeyDown: (e) => {
                                "Enter" === e.key && (e.preventDefault(), N());
                              },
                            }),
                          ],
                        })
                      : null,
                    d &&
                      (0, n.jsx)("div", {
                        className:
                          "text-center text-red-500 text-sm font-semibold my-2",
                        children: d,
                      }),
                    (0, n.jsx)("div", {
                      className: "my-4 flex items-center justify-center gap-2",
                      children: (0, n.jsxs)("button", {
                        onClick: N,
                        disabled: j || !x,
                        className:
                          "flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors gap-2",
                        children: [
                          j
                            ? (0, n.jsx)(i.Z, {})
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
    40341: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return tI;
          },
        });
      var n = s(85893),
        r = s(51448),
        l = s(67294),
        i = s(78672),
        a = s(54426),
        o = s(81354),
        c = s.n(o),
        d = s(87260),
        u = s(89583);
      let x = (0, i.eK)("useAPIKey");
      function h(e) {
        let {
            decryptedApiKey: t,
            setDecryptedApiKey: s,
            open: r,
            setOpen: i,
          } = e,
          [o, h] = x(""),
          [m, f] = (0, l.useState)(""),
          [g, p] = (0, l.useState)(""),
          b = (0, l.useRef)();
        (0, l.useEffect)(() => {
          setTimeout(() => {
            t.startsWith("encrypted-") && i(!0);
          }, 500);
        }, []),
          (0, l.useEffect)(() => {
            r &&
              setTimeout(() => {
                var e;
                null === (e = b.current) || void 0 === e || e.focus();
              }, 500);
          }, [r]);
        let y = async () => {
            h(""),
              setTimeout(() => {
                window.location.reload();
              }, 500);
          },
          j = async () => {
            try {
              if (!m) return;
              p("");
              let e = t.replace("encrypted-", "");
              e = e.substring(0, e.length - 5);
              let n = c().AES.decrypt(e, m).toString(c().enc.Utf8);
              n ? (s(n), i(!1)) : p("Incorrect password.");
            } catch (e) {
              console.error(e), p("Incorrect password.");
            }
          };
        return (0, n.jsxs)(d.Z, {
          open: r,
          setOpen: i,
          showCloseButton: !1,
          children: [
            (0, n.jsx)("div", {
              className: "text-lg font-semibold text-center",
              children: "\uD83D\uDD10 Enter Password:",
            }),
            (0, n.jsx)("div", {
              className: "text-sm text-gray-500 text-center",
              children: "To unlock your API Key",
            }),
            (0, n.jsx)("div", {
              className: "my-4",
              children: (0, n.jsx)("input", {
                type: "password",
                placeholder: "Enter password",
                className:
                  "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700",
                value: m,
                autoComplete: "off",
                onChange: (e) => f(e.target.value),
                onKeyDown: (e) => {
                  "Enter" === e.key && (e.preventDefault(), j());
                },
                ref: b,
              }),
            }),
            g
              ? (0, n.jsx)("div", {
                  className: "text-sm text-red-500 text-center",
                  children: g,
                })
              : null,
            (0, n.jsx)("div", {
              className: "my-2 text-center",
              children: (0, n.jsxs)("button", {
                onClick: j,
                disabled: !m,
                type: "submit",
                className:
                  "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 gap-2",
                children: [
                  (0, n.jsx)(u.jcU, { className: "w-4 h-4" }),
                  (0, n.jsx)("span", { children: "Unlock" }),
                ],
              }),
            }),
            (0, n.jsx)("div", {
              className: "text-gray-500 text-xs text-center",
              children:
                "If you forgot your password, you can clear your API Key and password, then enter your API Key again.",
            }),
            (0, n.jsx)("div", {
              className: "my-2 text-center",
              children: (0, n.jsx)(a.Z, {
                onConfirmed: y,
                className: "text-red-500 text-sm hover:underline",
                confirmText: () =>
                  (0, n.jsx)("span", {
                    className: "text-red-500 text-sm hover:underline",
                    children: "Are you sure?",
                  }),
                children: (0, n.jsx)("span", {
                  children: "Clear API Key and Password",
                }),
              }),
            }),
          ],
        });
      }
      var m = s(56681),
        f = s(24461);
      function g(e) {
        let { hostConfig: t, open: s, setOpen: r, orgActive: l } = e;
        return (0, n.jsx)(d.Z, {
          wide: !0,
          open: s,
          setOpen: r,
          showCloseButton: !1,
          children: l
            ? (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)("h2", {
                    className: "text-center text-xl font-bold",
                    children: "Please login first",
                  }),
                  (0, n.jsxs)("p", {
                    className: "my-4 text-sm text-center",
                    children: [
                      (0, n.jsx)("b", { children: t.name }),
                      " requires an account. Please login to continue.",
                    ],
                  }),
                  (0, n.jsx)(m.Z, {
                    hostConfig: t,
                    onLoggedIn: () => {
                      window.location.reload();
                    },
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "mt-4 text-center flex items-center justify-center space-x-2",
                    children: (0, n.jsx)("button", {
                      onClick: () => r(!1),
                      className:
                        "inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-800 dark:text-zinc-100 dark:disabled:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:text-gray-400",
                      children: (0, n.jsx)("span", {
                        children: "I'll login later",
                      }),
                    }),
                  }),
                ],
              })
            : (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)("h2", {
                    className: "text-center text-xl font-bold text-orange-500",
                    children: "This chat instance is not active",
                  }),
                  (0, n.jsxs)("p", {
                    className: "my-4 text-sm text-center",
                    children: [
                      (0, n.jsx)("b", { children: t.name }),
                      " is not activated. Please contact the admin of this Chat instance to resolve this.",
                    ],
                  }),
                  (0, n.jsxs)("p", {
                    className: "my-4 text-sm text-center",
                    children: [
                      "If you are an admin of ",
                      (0, n.jsx)("b", { children: t.name }),
                      ", please login to the",
                      " ",
                      "Admin Panel to activate your chat instance.",
                    ],
                  }),
                  (0, n.jsx)("p", {
                    className: "my-4 text-sm text-center",
                    children: (0, n.jsx)("a", {
                      href: "/admin",
                      className:
                        "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",
                      children: "→ Login to Admin Panel",
                    }),
                  }),
                ],
              }),
        });
      }
      (0, i.eK)("useLicenseKey");
      var p = s(60357),
        b = s.n(p),
        y = s(41365);
      function j() {
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsxs)("div", {
              className: "text-left",
              children: [
                (0, n.jsx)("div", {
                  className: "mb-4 text-lg font-semibold",
                  children: "Got questions? Ask this FAQ Bot powered by GPT-4.",
                }),
                (0, n.jsxs)("div", {
                  className: "my-2",
                  children: [
                    "We trained a GPT-4 model to answer your questions based on our",
                    " ",
                    (0, n.jsx)("a", {
                      href: "https://www.webmind.app/faqs",
                      target: "_blank",
                      className: "text-blue-500 hover:underline",
                      children: "FAQs",
                    }),
                    ",",
                    " ",
                    (0, n.jsx)("a", {
                      href: "https://www.webmind.app/terms",
                      target: "_blank",
                      className: "text-blue-500 hover:underline",
                      children: "Terms of Service",
                    }),
                    ", and",
                    " ",
                    (0, n.jsx)("a", {
                      href: "https://www.webmind.app/privacy",
                      target: "_blank",
                      className: "text-blue-500 hover:underline",
                      children: "Privacy Policy",
                    }),
                    ".",
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "my-2 text-xs",
                  children: "Expected response time: 10 seconds",
                }),
                (0, n.jsx)(y.Z, { showIntro: !1, source: "webmind.app" }),
              ],
            }),
            (0, n.jsx)("hr", { className: "my-4" }),
            (0, n.jsxs)("p", {
              className: "my-2",
              children: [
                (0, n.jsx)("b", { children: "Send feedback/suggestions" }),
                ": ",
                (0, n.jsx)("br", {}),
                (0, n.jsx)("a", {
                  href: "mailto:feedback@webmind.app",
                  className: "text-blue-600 hover:underline",
                  target: "_blank",
                  rel: "noreferrer noopener",
                  children: "feedback@webmind.app",
                }),
                " ",
                (0, n.jsx)("br", {}),
                (0, n.jsx)("div", {
                  className: "text-xs",
                  children:
                    "You will not receive a response from this address, but we will read and take note of all the feedback/suggestions we receive.",
                }),
              ],
            }),
            (0, n.jsxs)("p", {
              className: "my-2",
              children: [
                (0, n.jsx)("b", { children: "Customer Support" }),
                ": ",
                (0, n.jsx)("br", {}),
                (0, n.jsx)("a", {
                  href: "mailto:support@webmind.app",
                  className: "text-blue-600 hover:underline",
                  target: "_blank",
                  rel: "noreferrer noopener",
                  children: "support@webmind.app",
                }),
                " ",
                (0, n.jsx)("br", {}),
                (0, n.jsx)("div", {
                  className: "text-xs",
                  children: "Expected response time: 1-2 business days",
                }),
              ],
            }),
          ],
        });
      }
      var v = s(55623),
        w = s(39590),
        N = s(8193);
      function k(e) {
        let {} = e,
          [t, s] = (0, l.useState)(!1);
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsxs)("button", {
              onClick: () => s(!0),
              type: "button",
              className:
                "bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs hover:bg-gray-500 transition-all space-x-2 mr-2",
              children: [
                (0, n.jsx)(N.znh, {
                  className: "h-4 w-4",
                  "aria-hidden": "true",
                }),
                (0, n.jsx)("span", { children: "Support" }),
              ],
            }),
            (0, n.jsx)(d.Z, {
              open: t,
              setOpen: s,
              wide: !0,
              children: t ? (0, n.jsx)(j, {}) : null,
            }),
          ],
        });
      }
      function C(e) {
        let { hostConfig: t, onLoggedIn: s } = e,
          [r, i] = (0, l.useState)(!1);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("button", {
              className:
                "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-2",
              onClick: () => i(!0),
              id: "org-login-button",
              children: t.allowSubscriptions
                ? "→ Login / Signup"
                : "→ Member Login",
            }),
            (0, n.jsxs)(d.Z, {
              open: r,
              setOpen: () => i(!1),
              showCloseButton: !1,
              children: [
                (0, n.jsxs)("h2", {
                  className: "text-lg text-center mb-4 font-semibold",
                  children: ["Login to ", t.name],
                }),
                (0, n.jsx)(m.Z, {
                  hostConfig: t,
                  onLoggedIn: s,
                  requireInviteCode: t.allowSubscriptions,
                }),
              ],
            }),
          ],
        });
      }
      let S = "Something went wrong. Please try again.";
      function T(e) {
        let {} = e,
          [t, s] = (0, l.useState)(!1),
          [r, i] = (0, l.useState)(null),
          [a, o] = (0, l.useState)([]);
        (0, l.useEffect)(() => {
          c();
        }, []);
        let c = async () => {
          s(!0), i("");
          try {
            let e = await fetch("/api/hosted/invite-codes", {
              headers: { "Content-Type": "application/json" },
            });
            if (e.status >= 400) {
              let t = await e.json();
              i(t.userMessage || S), s(!1);
              return;
            }
            if (!e.ok) {
              i(S), s(!1);
              return;
            }
            let t = await e.json();
            o(t.codes);
          } catch (e) {
            i(S), console.error(e);
          }
          s(!1);
        };
        return (0, n.jsx)("div", {
          children: a.length
            ? (0, n.jsxs)("div", {
                children: [
                  (0, n.jsxs)("div", {
                    className: "text-center my-2",
                    children: [
                      "You have ",
                      a.length,
                      " invite code",
                      1 === a.length ? "" : "s",
                      " ",
                      "left.",
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "flex items-center justify-center gap-2 flex-col",
                    children: a.map((e) =>
                      (0, n.jsx)(
                        "div",
                        {
                          className:
                            "text-center w-fit bg-gray-200 p-2 rounded-md border-gray-200 dark:bg-zinc-700 dark:border-zinc-500 border",
                          children: e,
                        },
                        e
                      )
                    ),
                  }),
                ],
              })
            : (0, n.jsx)("div", {
                children:
                  "You don't have any invite codes. Please come back later.",
              }),
        });
      }
      function A(e) {
        var t;
        let { subscription: s } = e;
        return (0, n.jsxs)("div", {
          className: "text-xs py-2",
          children: [
            (0, n.jsx)("div", {
              children: (0, n.jsx)("a", {
                href:
                  null === (t = s.payload) || void 0 === t
                    ? void 0
                    : t.update_url,
                className: "text-blue-500 hover:text-blue-600",
                target: "_blank",
                rel: "noreferrer noopener",
                children: "Update Payment Method",
              }),
            }),
            (0, n.jsx)("div", {
              children: (0, n.jsx)(a.Z, {
                onConfirmed: () => {
                  var e;
                  return (window.location.href =
                    null === (e = s.payload) || void 0 === e
                      ? void 0
                      : e.cancel_url);
                },
                className: "text-red-500 font-semibold",
                children: "Cancel",
              }),
            }),
          ],
        });
      }
      var D = s(4298),
        P = s.n(D),
        I = s(54399),
        E = s(83454);
      let O = "Something went wrong. Please try again.";
      function L(e) {
        var t, s, r, i;
        let { user: o, hostConfig: c } = e,
          [d, u] = (0, l.useState)(!0),
          [x, h] = (0, l.useState)(!1),
          [m, f] = (0, l.useState)(null);
        (0, l.useEffect)(() => {
          g();
        }, []);
        let g = async () => {
            for (; !window.Paddle; )
              await new Promise((e) => setTimeout(e, 100));
            Paddle.Setup({
              vendor: Number(E.env.NEXT_PUBLIC_PADDLE_VENDOR_ID),
            }),
              u(!1);
          },
          p = (e) => {
            window.Paddle.Checkout.open({
              product: Number(e),
              email: o.email,
              disableLogout: !0,
              allowQuantity: !1,
              customData: { orgID: c.orgID },
              successCallback: () => {
                window.location.href = "/user_subscription_verify";
              },
            });
          },
          b = async (e) => {
            h(!0), f("");
            try {
              let t = await fetch("/api/hosted/update-plan", {
                body: JSON.stringify({ planID: e }),
                headers: { "Content-Type": "application/json" },
                method: "POST",
              });
              if (t.status >= 400) {
                let e = await t.json();
                f(e.userMessage || O), h(!1);
                return;
              }
              if (!t.ok) {
                f(O), h(!1);
                return;
              }
              window.location.href = "/user_subscription_verify?planID=" + e;
            } catch (e) {
              f(O), console.error(e);
            }
            h(!1);
          },
          y = () => {
            var e;
            return null == o
              ? void 0
              : null === (e = o.subscriptions) || void 0 === e
              ? void 0
              : e.some((e) => "active" === e.status && I.xP.includes(e.planID));
          },
          j = () => {
            var e;
            return null == o
              ? void 0
              : null === (e = o.subscriptions) || void 0 === e
              ? void 0
              : e.some((e) => "active" === e.status && I.oC.includes(e.planID));
          };
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsxs)("div", {
              className: "text-xs my-4",
              children: [
                "All plans include access to all AI chat models.",
                " ",
                (0, n.jsx)("span", {
                  className: "font-semibold text-orange-500",
                  children:
                    "GPT-4 availability is limited, subject to OpenAI's capacity.",
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "text-xs my-4",
              children:
                "Credit card is required on the free plan to avoid abuse.",
            }),
            (0, n.jsxs)("div", {
              className: "grid grid-cols-2 gap-2",
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "p-2 rounded-md shadow-sm border border-gray-200 dark:border-zinc-700",
                  children: [
                    (0, n.jsx)("div", {
                      className: "text-2xl font-bold text-center",
                      children: "Free",
                    }),
                    (0, n.jsx)("div", {
                      className: "text-center",
                      children: (0, n.jsx)("span", {
                        className: "text-2xl font-extrabold text-gray-500",
                        children: "$0",
                      }),
                    }),
                    (0, n.jsxs)("ul", {
                      className: "list-disc pl-4 text-xs my-2",
                      children: [
                        (0, n.jsx)("li", { children: "5 messages/day" }),
                        (0, n.jsx)("li", { children: "GPT-4: Limited" }),
                        (0, n.jsx)("li", { children: "Basic Features" }),
                        (0, n.jsx)("li", { children: "0 invite codes" }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "text-center",
                      children: y()
                        ? (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("div", {
                                className:
                                  "text-sm font-semibold text-green-500 py-2",
                                children: "✅ Your Plan",
                              }),
                              null == o
                                ? void 0
                                : null === (t = o.subscriptions) || void 0 === t
                                ? void 0
                                : t
                                    .filter((e) => "active" === e.status)
                                    .map((e) =>
                                      (0, n.jsx)(
                                        A,
                                        { subscription: e },
                                        e.subscriptionID
                                      )
                                    ),
                            ],
                          })
                        : j()
                        ? (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)(a.Z, {
                                onConfirmed: () =>
                                  b(E.env.NEXT_PUBLIC_PADDLE_SUB_FREE_PLAN_ID),
                                type: "submit",
                                className:
                                  "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-400 gap-2",
                                disabled: d || x,
                                confirmText: () =>
                                  (0, n.jsx)("span", { children: "Sure?" }),
                                children: (0, n.jsx)("span", {
                                  children: "Downgrade",
                                }),
                              }),
                              (0, n.jsx)("div", {
                                className: "text-xs text-gray-500 mt-1",
                                children: "You will lose access immediately",
                              }),
                            ],
                          })
                        : (0, n.jsx)("button", {
                            onClick: () =>
                              p(E.env.NEXT_PUBLIC_PADDLE_SUB_FREE_PLAN_ID),
                            type: "submit",
                            className:
                              "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 gap-2",
                            disabled: d,
                            children: (0, n.jsx)("span", {
                              children: "Get Free",
                            }),
                          }),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    "p-2 rounded-md shadow-sm border border-gray-200 dark:border-zinc-700",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "text-2xl font-bold text-center text-green-500",
                      children: "Pro",
                    }),
                    (0, n.jsxs)("div", {
                      className: "text-center",
                      children: [
                        (0, n.jsx)("span", {
                          className: "text-2xl font-extrabold",
                          children: "$20",
                        }),
                        "/month",
                      ],
                    }),
                    (0, n.jsxs)("ul", {
                      className: "list-disc pl-4 text-xs my-2",
                      children: [
                        (0, n.jsx)("li", { children: "Unlimited messages*" }),
                        (0, n.jsx)("li", { children: "GPT-4: Limited" }),
                        (0, n.jsx)("li", {
                          children: (0, n.jsx)("a", {
                            target: "_blank",
                            href: "https://webmind.app/features",
                            className: "text-blue-500 hover:underline",
                            children: "Premium Features",
                          }),
                        }),
                        (0, n.jsx)("li", { children: "3 invite codes" }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "text-center",
                      children: j()
                        ? (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("div", {
                                className:
                                  "text-sm font-semibold text-green-500 py-2",
                                children: "✅ Your Plan",
                              }),
                              null == o
                                ? void 0
                                : null === (s = o.subscriptions) || void 0 === s
                                ? void 0
                                : s
                                    .filter((e) => "active" === e.status)
                                    .map((e) =>
                                      (0, n.jsx)(
                                        A,
                                        { subscription: e },
                                        e.subscriptionID
                                      )
                                    ),
                            ],
                          })
                        : y()
                        ? (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)(a.Z, {
                                onConfirmed: () =>
                                  b(E.env.NEXT_PUBLIC_PADDLE_SUB_PRO_PLAN_ID),
                                type: "submit",
                                className:
                                  "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 gap-2",
                                disabled: d || x,
                                confirmText: () =>
                                  (0, n.jsx)("span", { children: "Sure?" }),
                                children: (0, n.jsx)("span", {
                                  children: "Upgrade Pro",
                                }),
                              }),
                              (0, n.jsx)("div", {
                                className: "text-xs text-gray-500 mt-1",
                                children: "You will be charged immediately",
                              }),
                            ],
                          })
                        : (0, n.jsx)("button", {
                            onClick: () =>
                              p(E.env.NEXT_PUBLIC_PADDLE_SUB_PRO_PLAN_ID),
                            type: "submit",
                            className:
                              "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 gap-2",
                            disabled: d,
                            children: (0, n.jsx)("span", {
                              children: "Buy Pro",
                            }),
                          }),
                    }),
                  ],
                }),
              ],
            }),
            m &&
              (0, n.jsx)("div", {
                className: "text-red-500 text-sm font-semibold mt-2",
                children: m,
              }),
            (0, n.jsx)("div", {
              className: "text-xs text-gray-500 my-4 space-y-1 text-center",
              children: (0, n.jsxs)("div", {
                children: [
                  "By subscribing to a plan, you agree to our",
                  " ",
                  (0, n.jsx)("a", {
                    href:
                      (null == c
                        ? void 0
                        : null === (r = c.links) || void 0 === r
                        ? void 0
                        : r.terms) || "/terms",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-gray-500 underline",
                    children: "Terms of Service",
                  }),
                  " and ",
                  (0, n.jsx)("a", {
                    href:
                      (null == c
                        ? void 0
                        : null === (i = c.links) || void 0 === i
                        ? void 0
                        : i.privacy) || "/terms",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-gray-500 underline",
                    children: "Privacy Policy",
                  }),
                  ". Prices are in USD. VAT may apply. Secure payment by",
                  " ",
                  (0, n.jsx)("a", {
                    href: "https://paddle.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-gray-500 underline",
                    children: "Paddle",
                  }),
                  ".",
                ],
              }),
            }),
            (0, n.jsxs)("details", {
              className: "text-xs my-4 space-y-1 text-center",
              children: [
                (0, n.jsx)("summary", {
                  className: "cursor-pointer hover:underline",
                  children: "(*) Fair use policy applies",
                }),
                (0, n.jsxs)("ul", {
                  className: "list-disc pl-4 text-xs my-2 text-left",
                  children: [
                    (0, n.jsx)("li", {
                      children: "Maximum 10,000 characters per message.",
                    }),
                    (0, n.jsx)("li", {
                      children: "Maximum 3,000 messages per day.",
                    }),
                    (0, n.jsx)("li", {
                      children: "Maximum 200,000 tokens usage per month.",
                    }),
                    (0, n.jsx)("li", {
                      children:
                        "We reserve the right to suspend or terminate your account if you violate the fair use policy.",
                    }),
                    (0, n.jsx)("li", {
                      children:
                        "Tokens are counted based on the usage of OpenAI's API resulted from your account's activities.",
                    }),
                    (0, n.jsx)("li", {
                      children:
                        "Please see our Terms of Service for more details.",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)(P(), { src: "https://cdn.paddle.com/paddle/paddle.js" }),
          ],
        });
      }
      function _(e) {
        let { user: t, hostConfig: s } = e,
          [r, i] = (0, l.useState)(!1);
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)("button", {
              onClick: () => i(!0),
              className: "font-semibold text-blue-400 hover:underline",
              children: "Invite Codes",
            }),
            (0, n.jsxs)(d.Z, {
              open: r,
              setOpen: i,
              children: [
                (0, n.jsx)("h2", {
                  className: "text-center text-xl font-bold mb-4",
                  children: "Invite Codes",
                }),
                r ? (0, n.jsx)(T, {}) : null,
              ],
            }),
          ],
        });
      }
      function K(e) {
        let { user: t, hostConfig: s } = e,
          [r, i] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            0 === t.subscriptions.filter((e) => "active" === e.status).length &&
              i(!0);
          }, []),
          (0, n.jsxs)("div", {
            children: [
              t.subscriptions.filter((e) => "active" === e.status).length
                ? (0, n.jsx)("button", {
                    onClick: () => i(!0),
                    className: "font-semibold text-green-500 hover:underline",
                    children: "Manage Subscription",
                  })
                : (0, n.jsx)("button", {
                    onClick: () => i(!0),
                    className: "font-semibold text-green-500 hover:underline",
                    children: "→ Signup: free 5 messages/day",
                  }),
              (0, n.jsxs)(d.Z, {
                open: r,
                setOpen: i,
                children: [
                  (0, n.jsx)("h2", {
                    className: "text-center text-xl font-bold mb-4",
                    children: "Manage Subscription",
                  }),
                  r ? (0, n.jsx)(L, { user: t, hostConfig: s }) : null,
                ],
              }),
            ],
          })
        );
      }
      var F = s(31955),
        M = s(49704),
        B = s.n(M);
      let Z = "Something went wrong. Please try again later.";
      function R(e) {
        let { hostConfig: t } = e,
          [s, r] = (0, l.useState)(null),
          [i, o] = (0, l.useState)(!0),
          [c, d] = (0, l.useState)(null);
        (0, l.useEffect)(() => {
          u();
        }, []);
        let u = async () => {
            o(!0), d("");
            try {
              let e = await fetch("/api/hosted/users/self", {
                headers: { "Content-Type": "application/json" },
              });
              if (e.status >= 400) {
                let t = await e.json();
                d(t.userMessage || Z), o(!1);
                return;
              }
              if (!e.ok) {
                d(Z), o(!1);
                return;
              }
              let t = await e.json();
              r(t);
            } catch (e) {
              d(Z), console.error(e);
            }
            o(!1);
          },
          x = () => {
            F.Z.remove("org_token"), r(null), window.location.reload();
          };
        return i
          ? null
          : (0, n.jsx)("div", {
              children: s
                ? (0, n.jsxs)("div", {
                    className: "text-white text-sm space-y-1 text-center mb-1",
                    children: [
                      (0, n.jsxs)("div", {
                        children: [
                          "\uD83D\uDC4B Welcome, ",
                          (0, n.jsx)("b", { children: s.email }),
                        ],
                      }),
                      t.allowSubscriptions
                        ? (0, n.jsxs)("div", {
                            className:
                              "flex items-center justify-center gap-2 flex-wrap",
                            children: [
                              (0, n.jsx)(K, { user: s, hostConfig: t }),
                              (0, n.jsx)(_, { user: s, hostConfig: t }),
                            ],
                          })
                        : null,
                      (0, n.jsx)("div", {
                        className: "flex items-center justify-center gap-2",
                        children: (0, n.jsx)(a.Z, {
                          onConfirmed: x,
                          className:
                            "text-red-500 font-semibold cursor-pointer hover:underline",
                          children: "Logout",
                        }),
                      }),
                    ],
                  })
                : (0, n.jsx)(C, {
                    hostConfig: t,
                    onLoggedIn: () => {
                      window.location.reload();
                    },
                  }),
            });
      }
      var z = s(76606);
      let U = (0, i.eK)("useTMCloudEnabled");
      function W() {
        let [e, t] = U(!1),
          { syncStatus: s } = (0, z.m)();
        return e
          ? "scheduled" === s
            ? (0, n.jsx)("div", {
                className:
                  "absolute bottom-1 right-1 w-2 h-2 rounded-full bg-orange-500",
              })
            : "started" === s
            ? (0, n.jsx)("div", {
                className:
                  "absolute bottom-1 right-1 w-2 h-2 rounded-full bg-green-500",
              })
            : "error" === s
            ? (0, n.jsxs)("div", {
                className:
                  "absolute bottom-1 right-1 w-2 h-2 rounded-full bg-red-500",
                children: [
                  " ",
                  (0, n.jsx)("div", {
                    className:
                      "absolute bottom-0 right-0 w-2 h-2 rounded-full bg-red-500 animate-ping",
                  }),
                ],
              })
            : null
          : (0, n.jsx)(u.Wh, {
              className:
                "absolute bottom-1 right-1 w-2 h-2 shadow text-yellow-500",
            });
      }
      function H() {
        let [e, t] = (0, l.useState)(null);
        return (
          (0, l.useEffect)(() => {
            var e = 0;
            for (var s in localStorage)
              localStorage.hasOwnProperty(s) &&
                ((e += localStorage.getItem(s).length), s.substring(0, 5));
            var n = 5242880 - e;
            t({
              usagePercentage: ((e / 5242880) * 100).toFixed(2),
              usedSpace: e,
              totalSpace: 5242880,
              availableSpace: n,
            });
          }, []),
          (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)("h3", {
                className: "text-xl font-bold",
                children: "Local Storage",
              }),
              (0, n.jsxs)("div", {
                className: "text-xs my-2",
                children: [
                  "All of your data is stored locally in your browser. Each browser has a different limit of how much data you can store, the general limit is",
                  " ",
                  (0, n.jsx)("b", { children: "5MB" }),
                  ". If you are running out of space, you can delete some of your old chats.",
                ],
              }),
              e
                ? (0, n.jsxs)("div", {
                    className: "my-4",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "my-2 h-6 w-full bg-green-500 rounded-lg overflow-hidden relative",
                        children: (0, n.jsx)("div", {
                          style: {
                            width: "".concat(
                              (e.usedSpace / e.totalSpace) * 100,
                              "%"
                            ),
                          },
                          className:
                            "h-6 w-full bg-red-500 absolute top-0 left-0 bottom-0",
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex items-center justify-between ",
                        children: [
                          (0, n.jsxs)("div", {
                            children: [
                              "Used: ",
                              (0, n.jsx)("b", {
                                children:
                                  (e.usedSpace / 1024 / 1024).toFixed(2) +
                                  " MB",
                              }),
                              " ",
                              "(",
                              e.usagePercentage,
                              "%)",
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            children: [
                              "Available:",
                              " ",
                              (0, n.jsx)("b", {
                                children:
                                  (e.availableSpace / 1024 / 1024).toFixed(2) +
                                  " MB",
                              }),
                              " ",
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : null,
              (0, n.jsx)("div", {
                className: "text-xs my-2 font-semibold text-orange-500",
                children:
                  "Please export and backup your chats regularly to avoid data lost!",
              }),
            ],
          })
        );
      }
      var q = s(34339);
      let X = (0, i.eK)("useGoogleDriveBackup");
      function G() {
        let [e, t] = X(!1);
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsxs)("div", {
              className: " flex items-center justify-between",
              children: [
                (0, n.jsxs)("h3", {
                  className:
                    "text-lg font-semibold flex items-center justify-start gap-2",
                  children: [
                    (0, n.jsxs)("svg", {
                      className: "w-6 h-6",
                      xmlns: "http://www.w3.org/2000/svg",
                      "aria-label": "Google Drive",
                      role: "img",
                      viewBox: "0 0 512 512",
                      children: [
                        (0, n.jsx)("rect", {
                          width: 512,
                          height: 512,
                          rx: "15%",
                          fill: "#fff",
                        }),
                        (0, n.jsx)("g", {
                          fill: "#2684fc",
                          children: (0, n.jsx)("path", {
                            id: "b",
                            d: "M337 301l53 96q-3 2-10 2h-247.6 q-6 0-10-2l55-95",
                          }),
                        }),
                        (0, n.jsx)("g", {
                          fill: "#ea4335",
                          children: (0, n.jsx)("path", {
                            id: "c",
                            d: "M335 301l55 96q6-3 10-10l43-76q2-6 2-10",
                          }),
                        }),
                        (0, n.jsxs)("g", {
                          transform: "rotate(120 256 256)",
                          children: [
                            (0, n.jsx)("use", { href: "#b", fill: "#00ac47" }),
                            (0, n.jsx)("use", { href: "#c", fill: "#0066da" }),
                          ],
                        }),
                        (0, n.jsxs)("g", {
                          transform: "rotate(240 256 256)",
                          children: [
                            (0, n.jsx)("use", { href: "#b", fill: "#ffba00" }),
                            (0, n.jsx)("use", { href: "#c", fill: "#00832d" }),
                          ],
                        }),
                      ],
                    }),
                    "Google Drive",
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "text-gray-500 font-semibold italic",
                  children: "(Coming soon)",
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "text-xs my-2",
              children: [
                "Use ",
                (0, n.jsx)("b", { children: "Google Drive" }),
                " to backup and sync your data across devices.",
              ],
            }),
          ],
        });
      }
      var Y = s(34656);
      function J(e) {
        let { chats: t, setChats: s } = e,
          {
            sync: r,
            reSyncEverything: l,
            syncError: i,
            syncLoading: a,
            syncStats: o,
          } = (0, z.m)();
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("div", {
              className: "flex items-center justify-between flex-wrap gap-2",
              children: [
                a
                  ? (0, n.jsxs)("div", {
                      className:
                        "flex items-center justify-center gap-2 text-xs font-semibold text-gray-500",
                      children: [
                        (0, n.jsx)(f.Z, {}),
                        (0, n.jsx)("span", { children: "Syncing..." }),
                      ],
                    })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("button", {
                          onClick: r,
                          className: "text-blue-500 font-semibold",
                          children: "→ Sync Changes",
                        }),
                        o
                          ? (0, n.jsx)("button", {
                              onClick: l,
                              className: "text-blue-500 font-semibold",
                              children: "→ Re-sync everything",
                            })
                          : null,
                      ],
                    }),
                (0, n.jsx)("div", {
                  className: "text-xs text-gray-500 font-semibold text-left",
                  children:
                    "Sync will be triggered automatically every time you chat or open the app. To trigger a sync manually, click the Sync button in the sidebar menu.",
                }),
                o
                  ? (0, n.jsxs)("div", {
                      className:
                        "text-xs text-gray-500 font-semibold text-right",
                      children: [
                        "Last Sync: ",
                        new Date(o.lastSyncAt).toLocaleString(),
                        " (",
                        (0, Y.Z)(new Date(o.lastSyncAt)),
                        ")",
                      ],
                    })
                  : (0, n.jsx)("div", {
                      className:
                        "text-xs text-gray-500 font-semibold text-right",
                      children: "Last Sync: Never",
                    }),
              ],
            }),
            i &&
              (0, n.jsx)("div", {
                className: "text-red-500 mt-4",
                children: i,
              }),
          ],
        });
      }
      let V = "Something went wrong. Please try again.";
      function Q(e) {
        let { onLoggedIn: t, defaultEmail: s } = e,
          [r, i] = (0, l.useState)(null),
          [a, o] = (0, l.useState)(s),
          [c, d] = (0, l.useState)(!1),
          [u, x] = (0, l.useState)(""),
          [h, m] = (0, l.useState)(!1),
          g = (0, l.useRef)(null),
          p = (0, l.useRef)(null);
        (0, l.useEffect)(() => {
          o(s);
        }, [s]),
          (0, l.useEffect)(() => {
            open && (o(s), d(!1), x(""), i(null));
          }, [open]);
        let b = async () => {
            try {
              m(!0), i("");
              let e = await fetch((0, I.v9)() + "/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: a }),
              });
              if (e.status >= 400) {
                let t = await e.json();
                i(t.userMessage || V), m(!1);
                return;
              }
              if (!e.ok) {
                i(V), m(!1);
                return;
              }
              await e.json(),
                d(!0),
                setTimeout(() => {
                  p.current.focus();
                }, 100);
            } catch (e) {
              console.error(e), i(V);
            }
            m(!1);
          },
          y = async () => {
            try {
              m(!0), i("");
              let e = await fetch((0, I.v9)() + "/api/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: a, code: u }),
              });
              if (e.status >= 400) {
                let t = await e.json();
                i(t.userMessage || V), m(!1);
                return;
              }
              if (!e.ok) {
                i(V), m(!1);
                return;
              }
              let s = await e.json();
              F.Z.set("webmind.appcloud_token", s.token, { expires: 30 }),
                null == t || t();
            } catch (e) {
              console.error(e), i(V);
            }
            m(!1);
          };
        return (0, n.jsx)("div", {
          children: c
            ? (0, n.jsxs)("div", {
                children: [
                  (0, n.jsxs)("div", {
                    className: "my-4",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "my-1 font-semibold",
                        children: ["Enter the code in your email (", a, "):"],
                      }),
                      (0, n.jsx)("input", {
                        ref: p,
                        type: "text",
                        disabled: h,
                        placeholder: "XXXXXX",
                        className:
                          "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 text-xl text-center",
                        value: u,
                        onChange: (e) => x(e.target.value),
                        onKeyDown: (e) => {
                          "Enter" === e.key && (e.preventDefault(), y());
                        },
                      }),
                    ],
                  }),
                  r &&
                    (0, n.jsx)("div", {
                      className:
                        "text-center text-red-500 text-sm font-semibold my-2",
                      children: r,
                    }),
                  (0, n.jsxs)("div", {
                    className: "my-4 flex items-center justify-center gap-2",
                    children: [
                      (0, n.jsxs)("button", {
                        onClick: y,
                        disabled: h || !u,
                        className:
                          "flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors gap-2",
                        children: [h ? (0, n.jsx)(f.Z, {}) : null, "Submit"],
                      }),
                      (0, n.jsx)("button", {
                        onClick: () => d(!1),
                        disabled: h,
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
                        ref: g,
                        type: "email",
                        disabled: h,
                        placeholder: "example@gmail.com",
                        className:
                          "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700",
                        value: a,
                        onChange: (e) => o(e.target.value),
                        onKeyDown: (e) => {
                          "Enter" === e.key && (e.preventDefault(), b());
                        },
                      }),
                    ],
                  }),
                  r &&
                    (0, n.jsx)("div", {
                      className:
                        "text-center text-red-500 text-sm font-semibold my-2",
                      children: r,
                    }),
                  (0, n.jsx)("div", {
                    className: "my-4 flex items-center justify-center gap-2",
                    children: (0, n.jsxs)("button", {
                      onClick: b,
                      disabled: h || !a,
                      className:
                        "flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors gap-2",
                      children: [h ? (0, n.jsx)(f.Z, {}) : null, "Send Code"],
                    }),
                  }),
                ],
              }),
        });
      }
      function $(e) {
        var t, s;
        let { licensePayload: r } = e,
          [i, o] = (0, l.useState)(!0),
          [c, d] = (0, l.useState)(null),
          [u, x] = (0, l.useState)(!1),
          { scheduleSync: h } = (0, z.m)();
        (0, l.useEffect)(() => {
          f();
        }, [r]);
        let m = () => {
            F.Z.remove("webmind.appcloud_token"), d(null);
          },
          f = () => {
            let e = F.Z.get("webmind.appcloud_token"),
              t = B().decode(e);
            d(t);
          };
        return (0, n.jsx)("div", {
          className: "space-y-4",
          children: (0, n.jsx)("div", {
            children: c
              ? (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        " flex items-center justify-between text-gray-500",
                      children: [
                        (0, n.jsxs)("div", {
                          children: [
                            "Account:",
                            " ",
                            (0, n.jsx)("span", {
                              className: "font-semibold",
                              children:
                                null == c
                                  ? void 0
                                  : null === (t = c.user) || void 0 === t
                                  ? void 0
                                  : t.email,
                            }),
                          ],
                        }),
                        (0, n.jsx)(a.Z, {
                          onConfirmed: m,
                          className: "text-red-500",
                          confirmText: () =>
                            (0, n.jsx)("span", {
                              className: "text-red-500 underline",
                              children: "Sure?",
                            }),
                          children: "Logout",
                        }),
                      ],
                    }),
                    (0, n.jsx)("hr", { className: "my-2" }),
                    (0, n.jsx)(J, {}),
                  ],
                })
              : (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("div", {
                      className: "text-base font-semibold my-4",
                      children: "Signup webmind.app Cloud Backup & Sync",
                    }),
                    (0, n.jsxs)("div", {
                      className: "text-xs space-y-2",
                      children: [
                        (0, n.jsx)("div", {
                          children: "Please read the following carefully.",
                        }),
                        (0, n.jsxs)("ul", {
                          className: "list-disc pl-4",
                          children: [
                            (0, n.jsxs)("li", {
                              children: [
                                "All of your saved chats, messages, and prompts will be uploaded to ",
                                (0, n.jsx)("b", {
                                  children: "cloud.webmind.app",
                                }),
                                " so that it can be synced between devices. We don't store your API Key, License Key, or any other personal information.",
                              ],
                            }),
                            (0, n.jsx)("li", {
                              children:
                                "Your data will be associated with your webmind.app Cloud account. You can register an account with your License Key automatically and claim 10MB of data storage for free.",
                            }),
                            (0, n.jsxs)("li", {
                              children: [
                                "We use ",
                                (0, n.jsx)("b", {
                                  children: "planetscale.com",
                                }),
                                " to store your data. Your data on webmind.app Cloud is AES encrypted both in transit and at rest.",
                              ],
                            }),
                            (0, n.jsxs)("li", {
                              children: [
                                "This feature is current in ",
                                (0, n.jsx)("b", { children: "Beta" }),
                                ". There are some known small bugs, but the sync feature generally working well. Please report any bugs you found using the Support button. Thank you!",
                              ],
                            }),
                            (0, n.jsxs)("li", {
                              children: [
                                "For more information, please refer to our",
                                " ",
                                (0, n.jsx)("a", {
                                  href: "/privacy",
                                  target: "_blank",
                                  rel: "noreferrer",
                                  className: "text-blue-500",
                                  children: "Privacy Policy",
                                }),
                                " ",
                                "and",
                                " ",
                                (0, n.jsx)("a", {
                                  href: "/terms",
                                  target: "_blank",
                                  rel: "noreferrer",
                                  className: "text-blue-500",
                                  children: "Terms of Service",
                                }),
                                ".",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("label", {
                      className: "flex items-center justify-center gap-2 my-4",
                      children: [
                        (0, n.jsx)("input", {
                          type: "checkbox",
                          checked: u,
                          onChange: (e) => x(e.target.checked),
                        }),
                        (0, n.jsx)("span", {
                          children: "I have read and understand the above.",
                        }),
                      ],
                    }),
                    u
                      ? (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)("div", {
                              className: "flex items-center justify-center",
                              children: (0, n.jsx)(q.Z, {
                                enabled: i,
                                setEnabled: o,
                                label:
                                  "Sign up/Login with your License Key's email",
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: "max-w-xs mx-auto",
                              children: (0, n.jsx)(Q, {
                                defaultEmail: i
                                  ? null == r
                                    ? void 0
                                    : null === (s = r.payload) || void 0 === s
                                    ? void 0
                                    : s.email
                                  : "",
                                onLoggedIn: () => {
                                  f(), h();
                                },
                              }),
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
          }),
        });
      }
      let ee = (0, i.eK)("useTMCloudEnabled");
      function et(e) {
        let { licensePayload: t } = e,
          [s, r] = ee(!1);
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsxs)("div", {
              className: " flex items-center justify-between",
              children: [
                (0, n.jsxs)("h3", {
                  className:
                    "text-lg font-semibold flex items-center justify-start gap-2",
                  children: [
                    (0, n.jsx)(u.H_w, { className: "h-5 w-5 text-blue-500" }),
                    "webmind.app Cloud",
                    " ",
                    (0, n.jsx)("span", {
                      className:
                        "text-white text-xs bg-blue-500 font-semibold px-2 py-1 rounded-full",
                      children: "Beta",
                    }),
                  ],
                }),
                (0, n.jsx)(q.Z, {
                  enabled: s,
                  setEnabled: (e) => {
                    r(e);
                  },
                }),
              ],
            }),
            s
              ? (0, n.jsx)("div", {
                  className:
                    "my-4 bg-gray-100 px-3 py-3 rounded-lg border border-gray-200 dark:bg-zinc-800 dark:border-gray-600",
                  children: (0, n.jsx)($, { licensePayload: t }),
                })
              : (0, n.jsxs)("div", {
                  className: "text-xs my-2",
                  children: [
                    (0, n.jsx)("b", { children: "webmind.app Cloud" }),
                    " provides a cloud storage for your data. You can backup your data to the cloud and sync your data across devices.",
                  ],
                }),
          ],
        });
      }
      var es = s(67266),
        en = s.n(es);
      function er(e) {
        let { open: t, setOpen: s, licensePayload: r } = e;
        return (0, n.jsxs)(d.Z, {
          wide: !0,
          open: t,
          setOpen: s,
          showCloseButton: !1,
          delayMount: !0,
          children: [
            (0, n.jsx)("h2", {
              className: "text-center text-xl font-bold",
              children: "Backup & Sync",
            }),
            (0, n.jsx)("hr", { className: "my-4" }),
            (0, n.jsxs)("div", {
              className: "space-y-4",
              children: [
                (0, n.jsx)(H, {}),
                (0, n.jsx)(et, { licensePayload: r }),
                (0, n.jsx)(G, {}),
              ],
            }),
          ],
        });
      }
      function el(e) {
        let { licensePayload: t, setOpenBackupSync: s } = e,
          [r, i] = (0, l.useState)(!1);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("button", {
              onClick: () => i(!0),
              type: "button",
              className:
                "bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs hover:bg-gray-500 transition-all space-x-2 mr-2 relative",
              children: [
                (0, n.jsx)(u.Qvc, { className: "w-4 h-4" }),
                (0, n.jsx)(W, {}),
              ],
            }),
            (0, n.jsx)(er, { open: r, setOpen: i, licensePayload: t }),
          ],
        });
      }
      function ei(e) {
        let {
            setChats: t,
            wait: s = 5e3,
            showCoruptedMessage: r = !0,
            emptyMessage: a = () => null,
          } = e,
          [o, c] = (0, l.useState)([]);
        return (
          (0, l.useEffect)(() => {
            let e = setTimeout(() => {
              console.log("ChatsCoruptCheck");
              let e = (0, I.FW)(
                (0, i.NW)()
                  .filter((e) => e.startsWith("CHAT_"))
                  .map((e) => {
                    try {
                      return JSON.parse((0, i.cF)().getItem(e));
                    } catch (e) {
                      console.error(e);
                    }
                  })
                  .filter(Boolean)
              );
              c(e);
            }, s);
            return () => {
              clearTimeout(e);
            };
          }, []),
          o.length
            ? (0, n.jsxs)("div", {
                className:
                  "m-2 p-2 bg-yellow-500 text-black rounded-lg text-xs space-y-2 max-w-xs mx-auto text-center",
                children: [
                  (0, n.jsxs)("div", {
                    children: [
                      r
                        ? "Hmm... it seems like your chats are corrupted. "
                        : "",
                      "We found ",
                      (0, n.jsx)("b", { children: o.length }),
                      " chats that we were able to restore.",
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "text-center",
                    children: (0, n.jsx)("button", {
                      onClick: () => t(o),
                      type: "button",
                      className:
                        "rounded-full border border-blue-500 px-3 py-1 text-sm my-0 hover:bg-blue-600 transition-all space-x-1 bg-blue-500 text-white",
                      children: "Restore Now",
                    }),
                  }),
                ],
              })
            : a()
        );
      }
      let ea = (0, i.eK)("useSoundMode");
      function eo() {
        let [e, t] = ea(!0);
        return (0, n.jsx)("button", {
          onClick: () => {
            t(!e);
          },
          type: "button",
          className:
            "bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs hover:bg-gray-500 transition-all space-x-2 mr-2",
          children: e
            ? (0, n.jsx)(u.rxG, { className: "w-4 h-4" })
            : (0, n.jsx)(u.xZH, { className: "w-4 h-4" }),
        });
      }
      let ec = (0, i.eK)("useLicenseKey"),
        ed = "Something went wrong. Please try again.";
      function eu(e) {
        let {
            open: t,
            setOpen: s,
            setOpenBuy: r,
            setLicenseVerified: i,
            verifyLicenseKey: a,
          } = e,
          [o, c] = ec(""),
          [u, x] = (0, l.useState)(""),
          [h, m] = (0, l.useState)(!1),
          [g, p] = (0, l.useState)(""),
          [b, y] = (0, l.useState)(!0),
          j = (0, l.useRef)();
        (0, l.useEffect)(() => {
          o ? y(!0) : y(!1);
        }, []),
          (0, l.useEffect)(() => {
            t &&
              (p(""),
              o ? y(!0) : y(!1),
              x(""),
              setTimeout(() => {
                var e;
                null === (e = j.current) || void 0 === e || e.focus();
              }, 700));
          }, [t]),
          (0, l.useEffect)(() => {
            x(o);
          }, [o]);
        let v = async () => {
          if ("" === u) {
            c(""), s(!1), i(!1);
            return;
          }
          try {
            m(!0), p("");
            let e = await fetch("https://www.webmind.app/api/license", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ key: u }),
            });
            if (500 === e.status) {
              await e.json(),
                p(
                  "Could not connect to Licenes Server. Please try again later."
                ),
                m(!1);
              return;
            }
            if (e.status >= 400) {
              let t = await e.json();
              p(t.userMessage || ed), m(!1);
              return;
            }
            if (!e.ok) {
              p(ed), m(!1);
              return;
            }
            await a(u), c(u), s(!1), i(!0);
          } catch (e) {
            console.error(e), p(ed);
          }
          m(!1);
        };
        return (0, n.jsxs)(d.Z, {
          open: t,
          setOpen: s,
          showCloseButton: !1,
          children: [
            (0, n.jsx)("h2", {
              className: "text-center text-xl font-bold",
              children: "Enter License Key",
            }),
            (0, n.jsxs)("p", {
              className: "my-2 text-sm",
              children: [
                "Enter ",
                (0, n.jsx)("b", { children: "webmind.app License Key" }),
                " to unlock all premium features.",
              ],
            }),
            (0, n.jsx)("div", {
              className: "my-4 z-100 relative",
              children: b
                ? (0, n.jsxs)("div", {
                    className:
                      "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700 text-right flex items-center justify-end gap-4",
                    children: [
                      (0, n.jsxs)("span", {
                        children: ["**************************", o.slice(-4)],
                      }),
                      (0, n.jsx)("button", {
                        onClick: () => {
                          y(!1),
                            x(""),
                            setTimeout(() => {
                              var e;
                              null === (e = j.current) ||
                                void 0 === e ||
                                e.focus();
                            }, 100);
                        },
                        className: "text-blue-500 hover:underline",
                        children: "Change Key",
                      }),
                    ],
                  })
                : (0, n.jsx)("input", {
                    type: "text",
                    ref: j,
                    disabled: h,
                    placeholder: "Enter your license key here",
                    className:
                      "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700",
                    value: u,
                    onChange: (e) => x(e.target.value),
                    onKeyDown: (e) => {
                      "Enter" !== e.key ||
                        (u && u.startsWith("sk-")) ||
                        (e.preventDefault(), v());
                    },
                  }),
            }),
            g &&
              (0, n.jsx)("div", {
                className: "my-2 text-sm text-red-500 text-center",
                children: g,
              }),
            u && u.startsWith("sk-")
              ? (0, n.jsx)("p", {
                  className: "my-2 text-sm text-red-500",
                  children:
                    "Uh oh! That looks like an OpenAI API Key, not a License Key. Please enter your license key instead.",
                })
              : null,
            b
              ? null
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsxs)("p", {
                      className: "my-2 text-sm",
                      children: [
                        "Don't have one?",
                        " ",
                        (0, n.jsx)("button", {
                          onClick: () => {
                            s(!1),
                              setTimeout(() => {
                                r(!0);
                              }, 500);
                          },
                          className: "text-blue-500 hover:underline",
                          children: "→ Buy A License Key",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("p", {
                      className: "my-2 text-sm",
                      children: [
                        "Lost your license key? →",
                        " ",
                        (0, n.jsx)("a", {
                          className: "text-blue-500 hover:underline",
                          href: "https://app.lemonsqueezy.com/my-orders/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: "Recover License Key",
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "my-4 text-center flex items-center justify-center space-x-2",
                      children: (0, n.jsxs)("button", {
                        disabled: h || (u && u.startsWith("sk-")),
                        onClick: v,
                        className:
                          "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-500",
                        children: [
                          h
                            ? (0, n.jsx)(f.Z, {})
                            : (0, n.jsx)(N.bzc, { className: "w-4 h-4" }),
                          (0, n.jsx)("span", { children: "Activate License" }),
                        ],
                      }),
                    }),
                    (0, n.jsx)("p", {
                      className: "my-2 text-xs",
                      children:
                        "The app will connect to webmind.app license server to verify your license key.",
                    }),
                  ],
                }),
          ],
        });
      }
      var ex = s(53854);
      let eh = (0, i.eK)("useDarkTheme");
      function em() {
        let [e, t] = eh(!1);
        return (
          (0, l.useEffect)(() => {
            e
              ? document.documentElement.classList.add("dark")
              : document.documentElement.classList.remove("dark");
          }, [e]),
          (0, n.jsx)("button", {
            onClick: () => t(!e),
            type: "button",
            className:
              "bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs hover:bg-gray-500 transition-all space-x-2 mr-2",
            children: e
              ? (0, n.jsx)(ex.Lac, { className: "h-4 w-4" })
              : (0, n.jsx)(ex.q4P, { className: "w-4 h-4" }),
          })
        );
      }
      let ef = (0, i.eK)("useAPIKey");
      function eg() {
        let [e, t] = ef(""),
          [s, r] = (0, l.useState)(e.startsWith("encrypted-")),
          [i, a] = (0, l.useState)(""),
          o = async () => {
            let s = c().AES.encrypt(e, i);
            t((e) => "encrypted-" + s + "-" + e.slice(-4));
          };
        return e
          ? e.startsWith("encrypted-")
            ? (0, n.jsxs)("div", {
                className: "my-4",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "text-sm font-semibold text-green-500 text-center",
                    children:
                      "\uD83D\uDD12 Your API key is encrypted with a password",
                  }),
                  (0, n.jsx)("div", {
                    className: "text-xs text-gray-500 text-center",
                    children:
                      'If you forgot or want to change your password, click "Change Key" and enter the API key again.',
                  }),
                ],
              })
            : (0, n.jsxs)("div", {
                children: [
                  (0, n.jsxs)("label", {
                    className: "flex items-center justify-center gap-2",
                    children: [
                      (0, n.jsx)("input", {
                        type: "checkbox",
                        className: "form-checkbox h-5 w-5 text-blue-600",
                        checked: s,
                        onChange: (e) => r(e.target.checked),
                      }),
                      (0, n.jsx)("span", {
                        children: "\uD83D\uDD10 Encrypt API key with password",
                      }),
                    ],
                  }),
                  s
                    ? (0, n.jsxs)("div", {
                        className: "my-4",
                        children: [
                          (0, n.jsx)("div", {
                            className: "text-sm font-semibold my-1",
                            children: "Enter Password:",
                          }),
                          (0, n.jsx)("div", {
                            className: "text-xs text-gray-500 my-1",
                            children:
                              "webmind.app will ask for your password every time you open the app. If you forget your password, you will need to enter your API key again.",
                          }),
                          (0, n.jsx)("div", {
                            children: (0, n.jsx)("input", {
                              type: "password",
                              placeholder: "Enter password",
                              className:
                                "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700",
                              value: i,
                              autoComplete: "off",
                              onChange: (e) => a(e.target.value),
                              onKeyDown: (e) => {
                                "Enter" === e.key && (e.preventDefault(), o());
                              },
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className: "my-2 text-center",
                            children: (0, n.jsxs)("button", {
                              onClick: o,
                              disabled: !i,
                              type: "submit",
                              className:
                                "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-400 gap-2",
                              children: [
                                (0, n.jsx)(u.kUi, { className: "w-4 h-4" }),
                                (0, n.jsx)("span", { children: "Lock" }),
                              ],
                            }),
                          }),
                        ],
                      })
                    : null,
                ],
              })
          : null;
      }
      var ep = s(39026);
      let eb = (0, i.eK)("useAPIKey"),
        ey = (0, i.eK)("useTokenUsage"),
        ej = (0, i.eK)("useCurrentCompletionEndpoint");
      function ev(e) {
        var t, s, r, i, o, c, x, h;
        let { decryptedApiKey: m, onCompleted: g, setOpenDecrypt: p } = e,
          [b, y] = eb(""),
          [j, v] = (0, l.useState)(""),
          [w, k] = (0, l.useState)(!1),
          [C, S] = (0, l.useState)(!1),
          [T, A] = (0, l.useState)(!1),
          [D, P] = (0, l.useState)(""),
          [E, O] = (0, l.useState)(!1),
          [L, _] = (0, l.useState)(!1),
          [K, F] = ey([]),
          [M, B] = ej("https://api.openai.com/v1/chat/completions"),
          Z = (0, l.useRef)(null);
        (0, l.useEffect)(() => {
          b && _(!0);
        }, [b]);
        let R = async () => {
            if (m.startsWith("encrypted-")) {
              p(!0);
              return;
            }
            A(!0), v(""), b ? _(!0) : _(!1);
          },
          z = async () => {
            if ((v(""), null !== D)) {
              if ("" === D) {
                y(""), g && g();
                return;
              }
              (await U(D)) && (y(D), S(!0), g && g());
            }
          },
          U = async (e) => {
            k(!0);
            try {
              let t = await fetch(M, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer ".concat(e),
                },
                body: JSON.stringify({
                  model: "gpt-3.5-turbo",
                  messages: [{ role: "user", content: "hello" }],
                }),
              });
              if (401 === t.status)
                return (
                  k(!1),
                  v(
                    "Invalid API key. Please make sure your API key is still working properly."
                  ),
                  null
                );
              if (429 === t.status)
                return (
                  k(!1),
                  v(
                    (0, n.jsxs)("span", {
                      children: [
                        "Your API key is not working. You need a ",
                        (0, n.jsx)("b", { children: "paid API account" }),
                        " on OpenAI in order to use the ChatGPT API Key (the free trial won't work). To verify that you have a paid API account, go here and make sure you have your billing info added:",
                        " ",
                        (0, n.jsx)("u", {
                          children:
                            "https://platform.openai.com/account/billing/overview",
                        }),
                        ". Note that you ",
                        (0, n.jsx)("b", { children: "do not" }),
                        " need to have a ChatGPT Plus subscription, it's ",
                        (0, n.jsx)("b", { children: "not needed" }),
                        ". If you already have a paid OpenAI account, check to see if you still have sufficient credits. Also, try creating a new API key and trying again. If this problem persists, please contact support.",
                      ],
                    })
                  ),
                  null
                );
              if (!t.ok)
                return (
                  v(
                    "Could not connect to OpenAI API. Please try again later. This could be because OpenAI's server is experiencing high demand and rejected your request. Go to https://status.openai.com/ to check their status. Error code: " +
                      t.status
                  ),
                  k(!1),
                  null
                );
              let s = await t.json();
              return k(!1), s;
            } catch (e) {
              v(
                "Could not connect to OpenAI API from your browser. This could be a network issue or adblock. Please try again or contact support. Open Developer Console to see more details."
              ),
                console.error(e);
            }
            k(!1);
          },
          W = (0, l.useMemo)(() => (0, I.nF)(K), [K]);
        return (0, n.jsxs)("div", {
          className: "",
          children: [
            b
              ? (0, n.jsx)("button", {
                  onClick: R,
                  disabled: w,
                  className:
                    "bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium w-full hover:bg-gray-500 transition-all",
                  children: m.startsWith("encrypted-")
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(u.kUi, {
                            className:
                              "text-red-400 mr-2 h-4 w-4 flex-shrink-0",
                            "aria-hidden": "true",
                          }),
                          (0, n.jsx)("span", {
                            className: "font-mono text-red-400",
                            children: "(Locked)",
                          }),
                        ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(N.bzc, {
                            className:
                              "text-green-500 mr-2 h-4 w-4 flex-shrink-0",
                            "aria-hidden": "true",
                          }),
                          (0, n.jsx)("span", {
                            className: "font-mono",
                            children: b
                              ? "$".concat(
                                  (null == W
                                    ? void 0
                                    : null === (t = W.totalCostUSD) ||
                                      void 0 === t
                                    ? void 0
                                    : t.toFixed(5)) || 0
                                )
                              : "",
                          }),
                        ],
                      }),
                })
              : (0, n.jsxs)("button", {
                  disabled: w,
                  className:
                    "bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium w-full hover:bg-gray-500 transition-all space-x-1",
                  onClick: R,
                  children: [
                    w
                      ? (0, n.jsx)(f.Z, {})
                      : (0, n.jsx)(N.CSE, {
                          className: "text-yellow-500 h-4 w-4 flex-shrink-0",
                          "aria-hidden": "true",
                        }),
                    (0, n.jsx)("span", { children: "Enter API Key" }),
                  ],
                }),
            (0, n.jsxs)(d.Z, {
              open: T,
              setOpen: A,
              showCloseButton: !1,
              children: [
                (0, n.jsx)("h2", {
                  className: "text-center text-xl font-bold",
                  children: "\uD83D\uDD11 Enter OpenAI API Key:",
                }),
                (0, n.jsx)("div", {
                  className: "text-center my-4",
                  children: (0, n.jsx)("a", {
                    className: "text-blue-500 text-xs hover:underline",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://platform.openai.com/account/api-keys",
                    children: "→ Get your API key from OpenAI dashboard.",
                  }),
                }),
                (0, n.jsx)("div", {
                  className: "text-xs",
                  children:
                    "Your API Key is stored locally on your browser and never sent anywhere else.",
                }),
                (0, n.jsx)("div", {
                  className: "my-4",
                  children: L
                    ? (0, n.jsxs)("div", {
                        className:
                          "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700 text-right flex items-center justify-end gap-4",
                        children: [
                          (0, n.jsxs)("span", {
                            children: [
                              "**************************",
                              b.slice(-4),
                            ],
                          }),
                          (0, n.jsx)("button", {
                            onClick: () => {
                              _(!1),
                                P(""),
                                setTimeout(() => {
                                  var e;
                                  null === (e = Z.current) ||
                                    void 0 === e ||
                                    e.focus();
                                }, 100);
                            },
                            className: "text-blue-500 hover:underline",
                            children: "Change Key",
                          }),
                        ],
                      })
                    : (0, n.jsx)("input", {
                        type: "text",
                        ref: Z,
                        placeholder: "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                        className:
                          "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700",
                        value: D,
                        autoComplete: "off",
                        onChange: (e) => P(e.target.value),
                        onKeyDown: (e) => {
                          "Enter" === e.key && (e.preventDefault(), z());
                        },
                        disabled: w,
                      }),
                }),
                (0, n.jsx)(eg, {}),
                j
                  ? (0, n.jsx)("div", {
                      className: "text-sm text-center text-red-500",
                      children: j,
                    })
                  : null,
                L
                  ? (0, n.jsxs)("div", {
                      className:
                        "my-4 text-left bg-green-100 dark:bg-sky-900 px-2 py-1 rounded-md",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "my-4 text-center cursor-pointer hover:underline font-semibold",
                          children: "\uD83D\uDCB8 Token Usage Report",
                        }),
                        (0, n.jsxs)("ul", {
                          className:
                            "list-disc pl-4 text-left space-y-1 text-sm",
                          children: [
                            (0, n.jsxs)("li", {
                              children: [
                                "Recorded since: ",
                                (0, n.jsx)("br", {}),
                                (0, n.jsx)("b", {
                                  children:
                                    (null == W
                                      ? void 0
                                      : null === (s = W.startDate) ||
                                        void 0 === s
                                      ? void 0
                                      : s.toLocaleString()) || "(None)",
                                }),
                              ],
                            }),
                            (0, n.jsxs)("li", {
                              children: [
                                "Tokens used for messages: ",
                                (0, n.jsx)("br", {}),
                                (0, n.jsx)("b", {
                                  children:
                                    (null == W
                                      ? void 0
                                      : null === (r = W.messageTokens) ||
                                        void 0 === r
                                      ? void 0
                                      : r.toLocaleString()) || 0,
                                }),
                                " ",
                                (0, n.jsxs)("b", {
                                  children: [
                                    "($",
                                    (null == W
                                      ? void 0
                                      : null === (i = W.messageCostUSD) ||
                                        void 0 === i
                                      ? void 0
                                      : i.toFixed(5)) || 0,
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsxs)("li", {
                              children: [
                                "Tokens used for enhanced features (*): ",
                                (0, n.jsx)("br", {}),
                                (0, n.jsx)("b", {
                                  children:
                                    (null == W
                                      ? void 0
                                      : null === (o = W.enhancedTokens) ||
                                        void 0 === o
                                      ? void 0
                                      : o.toLocaleString()) || 0,
                                }),
                                " ",
                                (0, n.jsxs)("b", {
                                  children: [
                                    "($",
                                    (null == W
                                      ? void 0
                                      : null === (c = W.enhancedCostUSD) ||
                                        void 0 === c
                                      ? void 0
                                      : c.toFixed(5)) || 0,
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsxs)("li", {
                              children: [
                                "Total token usage (*): ",
                                (0, n.jsx)("br", {}),
                                (0, n.jsx)("b", {
                                  children:
                                    (null == W
                                      ? void 0
                                      : null === (x = W.totalTokens) ||
                                        void 0 === x
                                      ? void 0
                                      : x.toLocaleString()) || 0,
                                }),
                                " ",
                                (0, n.jsxs)("b", {
                                  children: [
                                    "($",
                                    (null == W
                                      ? void 0
                                      : null === (h = W.totalCostUSD) ||
                                        void 0 === h
                                      ? void 0
                                      : h.toFixed(5)) || 0,
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: "my-4 text-center",
                          children: (0, n.jsx)(a.Z, {
                            onConfirmed: () => F([]),
                            className: "text-red-500 hover:underline",
                            children: "Reset Usage Data",
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: "my-2",
                          children: "(*) See more info below:",
                        }),
                        (0, n.jsx)(ep.Z, {}),
                      ],
                    })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "my-2 text-center space-x-2 flex items-center justify-center",
                          children: (0, n.jsxs)("button", {
                            disabled: w,
                            onClick: () => z(),
                            className:
                              "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-400",
                            children: [
                              w
                                ? (0, n.jsx)(f.Z, {})
                                : (0, n.jsx)(N.bzc, { className: "w-4 h-4" }),
                              b && !D
                                ? (0, n.jsx)("span", {
                                    children: "Remove API Key",
                                  })
                                : (0, n.jsx)("span", {
                                    children: "Save API Key",
                                  }),
                            ],
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: "my-4 text-xs",
                          children:
                            "The app will connect to OpenAI API server to check if your API Key is working properly.",
                        }),
                        (0, n.jsx)("div", {
                          className: "my-4 text-center font-semibold",
                          children: (0, n.jsxs)("details", {
                            children: [
                              (0, n.jsx)("summary", {
                                className:
                                  "my-4 cursor-pointer hover:underline",
                                children: "API Key not working? Click Here.",
                              }),
                              (0, n.jsxs)("ul", {
                                className: "list-disc pl-4 text-left space-y-4",
                                children: [
                                  (0, n.jsxs)("li", {
                                    children: [
                                      "Make sure you have your billing info added in",
                                      " ",
                                      (0, n.jsx)("a", {
                                        className:
                                          "text-blue-500 hover:underline",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: "https://platform.openai.com/account/billing/overview",
                                        children: "OpenAI Billing",
                                      }),
                                      " ",
                                      "page. Without billing info, your API key will not work.",
                                    ],
                                  }),
                                  (0, n.jsxs)("li", {
                                    children: [
                                      "OpenAI's ChatGPT API key is VERY cheap. You pay for what you use.",
                                      " ",
                                      (0, n.jsx)("a", {
                                        className:
                                          "text-blue-500 hover:underline",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: "https://openai.com/pricing#language-models",
                                        children: "The price",
                                      }),
                                      " ",
                                      "is roughly about 100,000 words per $1.",
                                    ],
                                  }),
                                  (0, n.jsx)("li", {
                                    children:
                                      "A ChatGPT Plus Subscription is NOT needed.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
              ],
            }),
          ],
        });
      }
      var ew = s(23235);
      function eN(e) {
        let { licenseVerified: t, setOpenLicenseKey: s } = e,
          r = (0, l.useRef)(),
          [i, a] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            null === r.current || r.current || !t || i || a(!0),
              (r.current = t);
          }, [t]),
          (0, n.jsxs)("div", {
            children: [
              i ? (0, n.jsx)(ew.Z, {}) : null,
              (0, n.jsx)("button", {
                onClick: () => s(!0),
                className:
                  "bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium w-full hover:bg-gray-500 transition-all",
                children:
                  !0 === t
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(N.bzc, {
                            className:
                              "text-green-500 mr-2 h-4 w-4 flex-shrink-0",
                            "aria-hidden": "true",
                          }),
                          "Activated",
                        ],
                      })
                    : !1 === t
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(N.CSE, {
                            className:
                              "text-yellow-500 mr-2 h-4 w-4 flex-shrink-0",
                            "aria-hidden": "true",
                          }),
                          "Unlicensed",
                        ],
                      })
                    : (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)(N.CSE, {
                          className:
                            "text-yellow-500 mr-2 h-4 w-4 flex-shrink-0 opacity-0",
                          "aria-hidden": "true",
                        }),
                      }),
              }),
            ],
          })
        );
      }
      (0, i.eK)("useLicenseKey");
      var ek = s(5434);
      function eC(e) {
        let { link: t = "mailto:feedback@webmind.app" } = e,
          [s, r] = (0, l.useState)(!1);
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsxs)("button", {
              onClick: () => r(!0),
              type: "button",
              className:
                "bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs hover:bg-gray-500 transition-all space-x-2 mr-2",
              children: [
                (0, n.jsx)(ek.fsM, {
                  className: "h-4 w-4",
                  "aria-hidden": "true",
                }),
                (0, n.jsx)("span", { children: "Send Feedback" }),
              ],
            }),
            (0, n.jsx)(d.Z, {
              open: s,
              setOpen: r,
              children: (0, n.jsxs)("div", {
                className: "text-center",
                children: [
                  (0, n.jsx)("h2", {
                    className: "text-xl font-semibold text-center",
                    children: "Send Feedback",
                  }),
                  (0, n.jsx)("p", {
                    className: "my-4",
                    children:
                      "All feedback, suggestions, feature requests, and bug reports are welcomed!",
                  }),
                  (0, n.jsx)("p", {
                    className: "my-4",
                    children: (0, n.jsx)("a", {
                      href: t,
                      className: "text-blue-600 hover:underline",
                      target: "_blank",
                      rel: "noreferrer noopener",
                      children: t.startsWith("mailto:") ? t.slice(7) : t,
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var eS = s(93463);
      function eT() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return t.filter(Boolean).join(" ");
      }
      var eA = (0, l.memo)(function (e) {
          var t;
          let {
              chat: s,
              thin: r,
              onEditName: i,
              onDelete: o,
              onSelect: c,
              selected: d,
              highlightedTitle: x,
              highlightedPreview: h,
              onToggleFavorite: m,
              dragHandle: f,
            } = e,
            [g, p] = (0, l.useState)(!1),
            [b, y] = (0, l.useState)(s.title || "New Chat"),
            j = (0, l.useRef)(null);
          (0, l.useEffect)(() => {
            y(s.title || "New Chat");
          }, [s.title]);
          let v = (e) => {
              null == m || m(s), e.preventDefault(), e.stopPropagation();
            },
            w = () => {
              p(!0),
                setTimeout(() => {
                  j.current.focus(),
                    j.current.setSelectionRange(
                      (null == b ? void 0 : b.length) || 0,
                      (null == b ? void 0 : b.length) || 0
                    );
                }, 100);
            },
            k = () => {
              p(!1), y(s.title);
            },
            C = () => {
              b && (p(!1), i(s.id, b));
            };
          return (0, n.jsxs)("div", {
            className: eT(
              d
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "group flex items-center text-sm font-medium w-full space-x-2 justify-between overflow-hidden"
            ),
            ...(g
              ? void 0
              : {
                  ...(null == f ? void 0 : f.attributes),
                  ...(null == f ? void 0 : f.listeners),
                }),
            children: [
              (0, n.jsxs)("div", {
                onClick: () => {
                  g || null == c || c(s);
                },
                className:
                  "flex items-center justify-start gap-x-2 min-w-0 w-full px-2 py-2 text-sm group cursor-pointer",
                children: [
                  (0, n.jsx)(ex.wIw, {
                    className: eT(
                      "text-gray-300 h-6 w-6 flex-shrink-0 hidden sm:block",
                      s.favoritedAt ? "sm:hidden" : "sm:group-hover:hidden"
                    ),
                    "aria-hidden": "true",
                  }),
                  (0, n.jsx)("button", {
                    onClick: v,
                    className: eT(
                      "flex-shrink-0",
                      s.favoritedAt ? "" : " sm:hidden sm:group-hover:block"
                    ),
                    children: s.favoritedAt
                      ? (0, n.jsx)(N.pHD, {
                          className:
                            "text-yellow-500 " + (r ? "h-4 w-4" : "h-6 w-6"),
                          "aria-hidden": "true",
                        })
                      : (0, n.jsx)(N.y5j, {
                          className: r ? "h-4 w-4" : "h-6 w-6",
                          "aria-hidden": "true",
                        }),
                  }),
                  (0, n.jsxs)("div", {
                    className: "space-y-1 text-left w-full min-w-0",
                    children: [
                      g
                        ? (0, n.jsx)(eS.Z, {
                            type: "text",
                            ref: j,
                            value: b,
                            onKeyDown: (e) => {
                              "Enter" === e.key && (e.preventDefault(), C()),
                                "Escape" === e.key && (e.preventDefault(), k());
                            },
                            onChange: (e) => y(e.target.value),
                            className:
                              "bg-gray-900 text-white rounded-sm px-0 py-0 border-0 ring-blue-500 focus:ring-2 ring-2 sm:text-sm font-medium w-full text-base",
                          })
                        : (0, n.jsx)("div", {
                            className: "text-gray-100 truncate w-full",
                            children: x || b || "New Chat",
                          }),
                      r
                        ? null
                        : (0, n.jsx)("div", {
                            className:
                              "text-xs text-gray-400 font-normal truncate  w-full",
                            children:
                              h ||
                              (null == s
                                ? void 0
                                : null === (t = s.preview) || void 0 === t
                                ? void 0
                                : t.substring(0, 50)),
                          }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "pr-2",
                children: g
                  ? (0, n.jsxs)("div", {
                      className: "flex items-center justify-center space-x-2",
                      children: [
                        (0, n.jsx)("button", {
                          onClick: C,
                          className:
                            "text-gray-500 hover:text-white transiton-all",
                          children: (0, n.jsx)(u.l_A, {
                            className: "w-6 h-6 sm:w-4 sm:h-4",
                          }),
                        }),
                        (0, n.jsx)("button", {
                          onClick: k,
                          className:
                            "text-gray-500 hover:text-white transiton-all",
                          children: (0, n.jsx)(u.aHS, {
                            className: "w-6 h-6 sm:w-4 sm:h-4",
                          }),
                        }),
                      ],
                    })
                  : (0, n.jsxs)("div", {
                      className: "flex items-center justify-center space-x-2",
                      children: [
                        (0, n.jsx)("button", {
                          onClick: w,
                          className:
                            "text-gray-500 hover:text-white transiton-all",
                          children: (0, n.jsx)(N.QML, {
                            className: "w-6 h-6 sm:w-4 sm:h-4",
                          }),
                        }),
                        (0, n.jsx)(a.Z, {
                          onConfirmed: () => o(s.id),
                          className:
                            "text-gray-500 hover:text-white transiton-all",
                          children: (0, n.jsx)(N.YK6, {
                            className: "w-6 h-6 sm:w-4 sm:h-4",
                          }),
                        }),
                      ],
                    }),
              }),
            ],
          });
        }),
        eD = s(57632),
        eP = s(4510);
      function eI(e) {
        let { open: t, setOpen: s } = e,
          { openAIStatus: r } = (0, eP.NZ)();
        return (0, n.jsxs)(d.Z, {
          open: t,
          setOpen: s,
          showCloseButton: !1,
          wide: !0,
          children: [
            (0, n.jsx)("h2", {
              className: "text-center text-xl font-bold",
              children:
                r === eP.yZ.OK
                  ? "OpenAI Status: OK"
                  : r === eP.yZ.SLOW
                  ? "OpenAI Status: Slow"
                  : "OpenAI Status: Unavailable",
            }),
            r === eP.yZ.OK
              ? (0, n.jsxs)("p", {
                  className: "my-2 text-sm",
                  children: [
                    (0, n.jsx)("div", {
                      className: "flex items-center justify-center my-10",
                      children: (0, n.jsx)("div", {
                        className: "w-8 h-8 bg-green-500 rounded-full",
                        children: (0, n.jsx)("div", {
                          className:
                            "w-8 h-8 bg-green-500 rounded-full animate-ping",
                        }),
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className: "my-4",
                      children: [
                        "The green dot indicates that OpenAI API services are working normally. When it turns red",
                        (0, n.jsx)("div", {
                          className:
                            "w-4 h-4 bg-red-500 rounded-full inline-block mx-2 align-middle",
                        }),
                        ", that means OpenAI is slow or unresponsive due to high demand or other reasons.",
                      ],
                    }),
                  ],
                })
              : r === eP.yZ.SLOW
              ? (0, n.jsxs)("p", {
                  className: "my-2 text-sm",
                  children: [
                    (0, n.jsx)("div", {
                      className: "flex items-center justify-center my-10",
                      children: (0, n.jsx)("div", {
                        className: "w-8 h-8 bg-yellow-500 rounded-full",
                        children: (0, n.jsx)("div", {
                          className:
                            "w-8 h-8 bg-yellow-500 rounded-full animate-ping",
                        }),
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className: "my-4",
                      children: [
                        "We are receiving multiple reports of OpenAI being slow or unresponsive. This is likely due to high demand. If your message is not being sent, please try again later. This issue will usually be resolved within a few hours. If it takes too long, go to",
                        " ",
                        (0, n.jsx)("a", {
                          href: "https://status.openai.com",
                          target: "_blank",
                          rel: "noopenner noreferer",
                          className: "text-blue-500",
                          children: "https://status.openai.com",
                        }),
                        " ",
                        "to check OpenAI service's status.",
                      ],
                    }),
                  ],
                })
              : (0, n.jsxs)("p", {
                  className: "my-2 text-sm",
                  children: [
                    (0, n.jsx)("div", {
                      className: "flex items-center justify-center my-10",
                      children: (0, n.jsx)("div", {
                        className: "w-8 h-8 bg-red-500 rounded-full",
                        children: (0, n.jsx)("div", {
                          className:
                            "w-8 h-8 bg-red-500 rounded-full animate-ping",
                        }),
                      }),
                    }),
                    "This could be because OpenAI's server is experiencing high demand or having an outage. Usually, the issue will goes away pretty quick. You can try to send your message again every few minutes. If it takes too long, go to",
                    " ",
                    (0, n.jsx)("a", {
                      href: "https://status.openai.com",
                      target: "_blank",
                      rel: "noopenner noreferer",
                      className: "text-blue-500",
                      children: "https://status.openai.com",
                    }),
                    " ",
                    "to check their service status.",
                  ],
                }),
            (0, n.jsx)("div", {
              className:
                "mt-4 text-center flex items-center justify-center space-x-2",
              children: (0, n.jsx)("button", {
                onClick: () => {
                  s(!1);
                },
                className:
                  "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-500",
                children: (0, n.jsx)("span", { children: "Got it" }),
              }),
            }),
          ],
        });
      }
      var eE = s(60887);
      function eO() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return t.filter(Boolean).join(" ");
      }
      let eL = (e) => {
          var t;
          let {
              children: s,
              onEdit: r,
              onDelete: i,
              folder: o,
              shouldOpen: c = !1,
              numberOfChats: d,
              dragHandle: x,
            } = e,
            [h, m] = (0, l.useState)(Boolean(o.open)),
            [f, g] = (0, l.useState)(Boolean(o.new)),
            [p, b] = (0, l.useState)("New Folder"),
            { over: y, active: j } = (0, eE.Cj)();
          (0, eE.IJ)({
            onDragEnd: (e) => {
              var t, s;
              let { active: n, over: r } = e;
              (null === (t = n.data) || void 0 === t
                ? void 0
                : null === (s = t.current) || void 0 === s
                ? void 0
                : s.type) !== "SORTABLE_FOLDER" &&
                (null == r ? void 0 : r.id) === o.id &&
                m(!0);
            },
          });
          let v = (0, l.useRef)(null);
          (0, l.useEffect)(() => {
            o.new || (g(!1), b(o.title));
          }, [o]),
            (0, l.useEffect)(() => {
              c && m(c);
            }, []),
            (0, l.useEffect)(() => {
              o.new &&
                o.open &&
                setTimeout(() => {
                  var e, t, s;
                  null === (e = v.current) || void 0 === e || e.focus(),
                    null === (t = v.current) ||
                      void 0 === t ||
                      t.setSelectionRange(
                        0,
                        (null === (s = o.title) || void 0 === s
                          ? void 0
                          : s.length) || 0
                      );
                }, 100);
            }, []);
          let w = () => {
              r({
                ...o,
                title: p,
                updatedAt: new Date(),
                syncedAt: null,
                new: !1,
              }),
                b(void 0),
                g(!1);
            },
            k = () => {
              b(void 0), g(!1), o.new && r({ ...o, new: !1 });
            },
            C = () => {
              g(!0),
                b(o.title),
                setTimeout(() => {
                  var e, t;
                  v.current.focus(),
                    v.current.setSelectionRange(
                      (null === (e = o.title) || void 0 === e
                        ? void 0
                        : e.length) || 0,
                      (null === (t = o.title) || void 0 === t
                        ? void 0
                        : t.length) || 0
                    );
                }, 100);
            };
          (0, l.useEffect)(() => {
            if (f) {
              var e;
              null === (e = v.current) || void 0 === e || e.focus();
            }
          }, [f]),
            (0, l.useEffect)(() => {
              o.open !== h && r({ ...o, open: h });
            }, [h]);
          let S =
              (null === (t = null == j ? void 0 : j.data.current) ||
              void 0 === t
                ? void 0
                : t.type) === "SORTABLE_FOLDER",
            T = !S && (null == y ? void 0 : y.id) === o.id;
          return (
            (0, l.useEffect)(() => {
              let e = setTimeout(() => {
                T && m(!0);
              }, 700);
              return () => {
                clearTimeout(e);
              };
            }, [T]),
            (0, l.useEffect)(() => {
              S && m(!1);
            }, [S]),
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsxs)("div", {
                  className: eO(
                    "focus-within:bg-gray-900 focus-within:text-white text-gray-300 hover:bg-gray-700 hover:text-white",
                    "group flex items-center text-sm font-medium w-full space-x-2 justify-between overflow-hidden"
                  ),
                  ...(f
                    ? void 0
                    : {
                        ...(null == x ? void 0 : x.attributes),
                        ...(null == x ? void 0 : x.listeners),
                      }),
                  children: [
                    (0, n.jsxs)("button", {
                      onClick: () => {
                        f || m(!h);
                      },
                      className:
                        "flex items-center justify-start space-x-2 min-w-0 w-full px-2 py-2 text-sm",
                      children: [
                        h
                          ? (0, n.jsx)(ex.kWQ, {
                              className: eO(
                                "text-gray-300 h-6 w-6 flex-shrink-0"
                              ),
                              "aria-hidden": "true",
                            })
                          : (0, n.jsx)(ex.MOd, {
                              className: eO(
                                "text-gray-300 h-6 w-6 flex-shrink-0"
                              ),
                              "aria-hidden": "true",
                            }),
                        (0, n.jsx)("div", {
                          className: "space-y-1 text-left w-full min-w-0",
                          children: f
                            ? (0, n.jsx)(eS.Z, {
                                type: "text",
                                ref: v,
                                value: void 0 === p ? o.title : p,
                                onKeyDown: (e) => {
                                  "Enter" === e.key &&
                                    (e.preventDefault(), w()),
                                    "Escape" === e.key &&
                                      (e.preventDefault(), k());
                                },
                                onChange: (e) => b(e.target.value),
                                className:
                                  "bg-gray-900 text-white rounded-sm px-0 py-0 border-0 ring-blue-500 focus:ring-2 ring-2 sm:text-sm font-medium w-full text-base",
                              })
                            : (0, n.jsxs)("div", {
                                className: "text-gray-100 w-full flex",
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "truncate min-w-0",
                                    children: o.title || "(Untitled)",
                                  }),
                                  (0, n.jsxs)("div", {
                                    className:
                                      "ml-1 whitespace-nowrap opacity-50",
                                    children: [
                                      "(",
                                      d,
                                      " ",
                                      1 === d ? "chat" : "chats",
                                      ")",
                                    ],
                                  }),
                                ],
                              }),
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "pr-2",
                      children: f
                        ? (0, n.jsxs)("div", {
                            className:
                              "flex items-center justify-center space-x-2",
                            children: [
                              (0, n.jsx)("button", {
                                onClick: w,
                                className:
                                  "text-gray-500 hover:text-white transiton-all",
                                children: (0, n.jsx)(u.l_A, {
                                  className: "w-6 h-6 sm:w-4 sm:h-4",
                                }),
                              }),
                              (0, n.jsx)("button", {
                                onClick: k,
                                className:
                                  "text-gray-500 hover:text-white transiton-all",
                                children: (0, n.jsx)(u.aHS, {
                                  className: "w-6 h-6 sm:w-4 sm:h-4",
                                }),
                              }),
                            ],
                          })
                        : (0, n.jsxs)("div", {
                            className:
                              "flex items-center justify-center space-x-2",
                            children: [
                              (0, n.jsx)("button", {
                                onClick: C,
                                className:
                                  "text-gray-500 hover:text-white transiton-all",
                                children: (0, n.jsx)(N.QML, {
                                  className: "w-6 h-6 sm:w-4 sm:h-4",
                                }),
                              }),
                              (0, n.jsx)(a.Z, {
                                onConfirmed: i,
                                className:
                                  "text-gray-500 hover:text-white transiton-all",
                                children: (0, n.jsx)(N.YK6, {
                                  className: "w-6 h-6 sm:w-4 sm:h-4",
                                }),
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: eO(
                    "pl-6 space-y-2 relative hidden",
                    h && "!block"
                  ),
                  children: [
                    s,
                    d > 0 &&
                      (0, n.jsx)("div", {
                        className:
                          "absolute top-0 -translate-y-5 left-5 h-[calc(100%+20px)] w-[1px] bg-white/20 -translate-x-1/2",
                      }),
                  ],
                }),
              ],
            })
          );
        },
        e_ = (e) => {
          let { onDragEnd: t, children: s, onDragStart: r, onDragOver: l } = e,
            i = (0, eE.Dy)(
              (0, eE.VT)(eE.MA, { activationConstraint: { distance: 15 } }),
              (0, eE.VT)(eE.LO, {
                activationConstraint: { delay: 200, tolerance: 5 },
              })
            );
          return (0, n.jsx)(eE.LB, {
            sensors: i,
            onDragEnd: t,
            onDragStart: r,
            onDragOver: l,
            children: s,
          });
        };
      var eK = s(45587);
      let eF = (0, i.eK)("useChatsInFolder"),
        eM = (0, i.eK)("useFolderList"),
        eB = (e) => {
          let { children: t, chats: s } = e,
            [r, a] = (0, l.useState)(null),
            [o, c] = eF({}),
            [d, u] = eM([]),
            x = (e) => {
              let { active: t } = e;
              a(t);
            },
            h = (e) => {
              var t, s, n, r, l;
              let { active: a, over: o } = e;
              if (
                (null === (t = a.data) || void 0 === t
                  ? void 0
                  : null === (s = t.current) || void 0 === s
                  ? void 0
                  : s.type) === "SORTABLE_FOLDER"
              ) {
                if (
                  (null === (r = o.data) || void 0 === r
                    ? void 0
                    : null === (l = r.current) || void 0 === l
                    ? void 0
                    : l.type) !== "SORTABLE_FOLDER"
                )
                  return;
                u((e) => {
                  let t = e.findIndex((e) => e.id === a.id),
                    s = e.findIndex((e) => e.id === o.id);
                  return (0, eK.Rp)(e, t, s).map((e, t) => ({
                    ...e,
                    order: t,
                    syncedAt: null,
                  }));
                });
                return;
              }
              let d =
                  null === (n = a.data.current) || void 0 === n
                    ? void 0
                    : n.container,
                x = null == o ? void 0 : o.id;
              if (!d || !x || d === x) return;
              c((e) =>
                "ROOT" === d
                  ? { ...e, [x]: [...(e[x] || []), a.id] }
                  : "ROOT" === x
                  ? { ...e, [d]: e[d].filter((e) => e !== a.id) }
                  : {
                      ...e,
                      [d]: e[d].filter((e) => e !== a.id),
                      [x]: [...(e[x] || []), a.id],
                    }
              );
              let h = a.id,
                m = (0, I.dC)((0, i.cF)().getItem("CHAT_" + h));
              m &&
                (0, i.cF)().setItem(
                  "CHAT_" + h,
                  JSON.stringify({
                    ...m,
                    folderID: "ROOT" === x ? null : x,
                    updatedAt: new Date(),
                    syncedAt: null,
                  })
                );
            },
            m = (0, l.useMemo)(() => {
              var e, t;
              if (!r) return null;
              if (
                (null == r
                  ? void 0
                  : null === (e = r.data) || void 0 === e
                  ? void 0
                  : null === (t = e.current) || void 0 === t
                  ? void 0
                  : t.type) === "SORTABLE_FOLDER"
              ) {
                let e = d.find((e) => e.id === r.id);
                return e
                  ? (0, n.jsx)(eL, {
                      folder: e,
                      numberOfChats: r.data.current.numberOfChats,
                      onEdit: () => {},
                      onDelete: () => {},
                    })
                  : null;
              }
              let l = s.find((e) => e.id === r.id);
              return l
                ? (0, n.jsx)("div", {
                    className: "bg-gray-700 select-none",
                    children: (0, n.jsx)(eA, { chat: l }),
                  })
                : null;
            }, [r, s, d]);
          return (0, n.jsxs)(e_, {
            onDragStart: x,
            onDragEnd: h,
            children: [t, (0, n.jsx)(eE.y9, { children: m })],
          });
        };
      function eZ(e) {
        var t, s;
        let { id: r, data: l, children: i, className: a } = e,
          {
            isOver: o,
            setNodeRef: c,
            active: d,
          } = (0, eE.Zj)({ id: r, data: l }),
          u =
            o &&
            (null === (t = null == d ? void 0 : d.data.current) || void 0 === t
              ? void 0
              : t.container) !== r &&
            (null === (s = null == d ? void 0 : d.data.current) || void 0 === s
              ? void 0
              : s.type) !== "SORTABLE_FOLDER";
        return (0, n.jsx)("div", {
          ref: c,
          className: (function () {
            for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
              t[s] = arguments[s];
            return t.filter(Boolean).join(" ");
          })(u && "bg-blue-500/30", a),
          children: i,
        });
      }
      function eR(e) {
        let { id: t, data: s, children: r, customHandlePosition: l } = e,
          {
            attributes: i,
            listeners: a,
            setNodeRef: o,
            isDragging: c,
          } = (0, eE.O1)({ id: t, data: s });
        return (0, n.jsx)("div", {
          ref: o,
          style: { opacity: c ? 0.3 : void 0 },
          ...(l ? void 0 : a),
          ...(l ? void 0 : i),
          children: (0, n.jsx)("div", {
            className: "select-none lg:select-auto touch-manipulation",
            children: l ? r({ listeners: a, isDragging: c, attributes: i }) : r,
          }),
        });
      }
      var ez = s(24285);
      function eU(e) {
        let { id: t, data: s, customHandlePosition: r, children: l } = e,
          {
            attributes: i,
            listeners: a,
            setNodeRef: o,
            transform: c,
            transition: d,
            isDragging: u,
          } = (0, eK.nB)({ id: t, data: s }),
          x = {
            transform: ez.ux.Transform.toString(c),
            transition: d,
            zIndex: u ? 10 : void 0,
            position: u ? "relative" : void 0,
            opacity: u ? 0.3 : void 0,
          };
        return (0, n.jsx)("div", {
          ref: o,
          style: x,
          ...(r ? void 0 : a),
          ...(r ? void 0 : i),
          children:
            "function" == typeof l && r
              ? l({ listeners: a, isDragging: u, attributes: i })
              : l,
        });
      }
      var eW = s(97650);
      let eH = (e) => {
          let { minHeight: t, children: s, className: r } = e;
          return (0, n.jsx)(eW.df, {
            rootMargin: "200px 0px 0px 0px",
            children: (e) => {
              let { ref: l, inView: i } = e;
              return (0, n.jsx)("div", {
                style: { minHeight: t },
                ref: l,
                className: r,
                children: i && s,
              });
            },
          });
        },
        eq = (0, i.eK)("useFolderList"),
        eX = (0, i.eK)("useChatsInFolder"),
        eG = (0, i.eK)("useDeletedFolderIDs");
      function eY() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return t.filter(Boolean).join(" ");
      }
      let eJ = function (e, t) {
          let s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 50,
            r = {},
            l = e
              .filter((e) => {
                if ("" === t) return !0;
                let s = (e.title || "").toLowerCase().includes(t.toLowerCase()),
                  l = [];
                try {
                  let t = JSON.parse((0, i.cF)().getItem("CHAT_" + e.id));
                  t && (l = t.messages);
                } catch (e) {
                  console.error(e);
                }
                let a = l.some((e) =>
                  e.content.toLowerCase().includes(t.toLowerCase())
                );
                if (((r[e.id] = {}), s)) {
                  let s = [],
                    l = e.title.toLowerCase().indexOf(t.toLowerCase());
                  s.push(
                    e.title.substring(0, l),
                    (0, n.jsx)("span", {
                      className: "bg-yellow-700",
                      children: e.title.substring(l, l + t.length),
                    }),
                    e.title.substring(l + t.length)
                  ),
                    (r[e.id].title = s);
                }
                if (a) {
                  let s = [],
                    i = l
                      .map((e) => e.content.toLowerCase())
                      .findIndex((e) =>
                        e.toLowerCase().includes(t.toLowerCase())
                      ),
                    a = l[i].content,
                    o = a.toLowerCase().indexOf(t.toLowerCase()),
                    c = a.substring(
                      Math.max(0, o - 10),
                      Math.min(a.length, o + 20)
                    ),
                    d = c.toLowerCase().indexOf(t.toLowerCase());
                  s.push(
                    "...",
                    c.substring(0, d),
                    (0, n.jsx)("span", {
                      className: "bg-yellow-700",
                      children: c.substring(d, d + t.length),
                    }),
                    c.substring(d + t.length),
                    "..."
                  ),
                    (r[e.id].preview = s);
                }
                return s || a;
              })
              .slice(0, t ? s : e.length);
          return { filteredChats: l, highlighted: r };
        },
        eV = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "updatedAt";
          return [...e].sort((e, s) =>
            "updatedAt" === t
              ? e.updatedAt
                ? s.updatedAt
                  ? new Date(s.updatedAt).getTime() -
                    new Date(e.updatedAt).getTime()
                  : -1
                : 1
              : "title" === t
              ? e.title.localeCompare(s.title)
              : void 0
          );
        };
      function eQ(e) {
        var t, s, r, i, a, o, c, d;
        let {
            chats: x,
            chatID: h,
            onDeleteChat: m,
            onDeleteChats: f,
            onEditChatTitle: g,
            onNewChatRequested: p,
            onChatSelected: y,
            sidebarOpen: j,
            setSidebarOpen: v,
            licenseVerified: w,
            setLicenseVerified: C,
            setOpenBuy: S,
            onOpenSettings: T,
            hostConfig: A,
            onToggleFavorite: D,
            licensePayload: P,
            setOpenBackupSync: I,
            links: E,
            verifyLicenseKey: O,
            decryptedApiKey: L,
            setOpenDecrypt: _,
          } = e,
          [K, F] = (0, l.useState)(0),
          [M, B] = (0, l.useState)(!1),
          [Z, U] = (0, l.useState)(""),
          [H, q] = (0, l.useState)(null),
          [X, G] = (0, l.useState)(!1),
          [Y, J] = (0, l.useState)(!1),
          { openAIStatus: V } = (0, eP.NZ)(),
          [Q, $] = eq([]),
          [ee, et] = eG([]),
          [es, en] = eX({}),
          { syncStatus: er, scheduleSync: ei } = (0, z.m)();
        (0, l.useEffect)(() => {
          B(!0);
        }, []);
        let ea = () => {
            p(),
              v(!1),
              setTimeout(() => {
                let e = document.getElementById("chat-input-textbox");
                e && e.focus();
              }, 100);
          },
          ec = () => {
            $((e) =>
              [
                {
                  id: "fo-" + (0, eD.Z)(),
                  title: "New Folder",
                  new: !0,
                  open: !0,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  syncedAt: null,
                },
                ...e,
              ].map((e, t) => ({ ...e, order: t }))
            );
          },
          ed = (e) => {
            $((t) => {
              let s = t.findIndex((t) => t.id === e.id),
                n = [...t];
              return (
                (n[s] = { ...e, updatedAt: new Date(), syncedAt: null }), n
              );
            });
          },
          eh = (e) => {
            et((t) => [...t, e]),
              $(Q.filter((t) => t.id !== e)),
              en((t) => {
                let s = { ...t };
                return delete s[e], s;
              });
          };
        if (!M) return null;
        let { filteredChats: ef, highlighted: eg } = eJ(eV(x), Z),
          ep = ef.filter((e) => e.favoritedAt),
          eb = (() => {
            let e = {};
            return (
              ef.forEach((t) => {
                for (let n of Q) {
                  var s;
                  if (
                    null === (s = es[n.id]) || void 0 === s
                      ? void 0
                      : s.includes(t.id)
                  ) {
                    e[n.id] = [...(e[n.id] || []), t];
                    return;
                  }
                }
                e.ROOT = [...(e.ROOT || []), t];
              }),
              e
            );
          })();
        return (0, n.jsxs)("div", {
          onTouchMove: (e) => {
            if (!H) return;
            let t = e.touches[0].clientX - H;
            t < -100 && v(!1);
          },
          onTouchStart: (e) => {
            q(e.touches[0].clientX);
          },
          onTouchEnd: () => {
            q(null);
          },
          className:
            "jsx-7078ffb922cb3c38 flex min-h-0 flex-1 flex-col bg-gray-800",
          children: [
            (0, n.jsx)("div", {
              id: "navbar",
              className:
                "jsx-7078ffb922cb3c38 flex flex-1 flex-col overflow-y-auto pb-4",
              children: (0, n.jsxs)("nav", {
                className:
                  "jsx-7078ffb922cb3c38 flex-1 space-y-2 bg-gray-800 flex flex-col ",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "jsx-7078ffb922cb3c38 px-2 space-y-2 sticky z-30 top-0 bg-gray-800 py-2",
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "jsx-7078ffb922cb3c38 flex items-center justify-center space-x-2",
                        children: [
                          (0, n.jsxs)("button", {
                            onClick: ea,
                            className:
                              "jsx-7078ffb922cb3c38 " +
                              (eY(
                                "bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium w-full hover:bg-gray-500 transition-all"
                              ) || ""),
                            children: [
                              (0, n.jsx)(ex.wIw, {
                                className: eY(
                                  "text-gray-300 mr-2 h-6 w-6 flex-shrink-0"
                                ),
                                "aria-hidden": "true",
                              }),
                              "New Chat",
                            ],
                          }),
                          "init" !== er &&
                            (0, n.jsxs)("button", {
                              onClick: () => {
                                "error" === er || "init" === er ? I(!0) : ei();
                              },
                              disabled:
                                "ready" !== er &&
                                "error" !== er &&
                                "init" !== er,
                              className:
                                "jsx-7078ffb922cb3c38 " +
                                (eY(
                                  "bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium hover:bg-gray-500 transition-all w-12 shrink-0 relative disabled:hover:bg-gray-700 disabled:bg-gray-700 disabled:text-gray-500"
                                ) || ""),
                              children: [
                                (0, n.jsx)(N.IDO, {
                                  className: eY(
                                    "h-6 w-6 flex-shrink-0",
                                    "started" === er ? "animate-spin" : ""
                                  ),
                                  "aria-hidden": "true",
                                }),
                                (0, n.jsx)(W, {}),
                              ],
                            }),
                          (0, n.jsx)("button", {
                            onClick: T,
                            className:
                              "jsx-7078ffb922cb3c38 " +
                              (eY(
                                "bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium hover:bg-gray-500 transition-all w-12 shrink-0"
                              ) || ""),
                            children: (0, n.jsx)(ex.XlX, {
                              className: eY(
                                "text-gray-300 h-6 w-6 flex-shrink-0"
                              ),
                              "aria-hidden": "true",
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "jsx-7078ffb922cb3c38 relative flex items-center space-x-2",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "jsx-7078ffb922cb3c38 relative w-full",
                            children: [
                              (0, n.jsx)("input", {
                                type: "text",
                                placeholder: "Search chats...",
                                value: Z,
                                onChange: (e) => U(e.target.value),
                                onKeyDown: (e) => {
                                  27 === e.keyCode && U("");
                                },
                                className:
                                  "jsx-7078ffb922cb3c38 bg-gray-700 text-white px-2 py-1 rounded-md w-full",
                              }),
                              Z
                                ? (0, n.jsx)("button", {
                                    onClick: () => U(""),
                                    className:
                                      "jsx-7078ffb922cb3c38 absolute right-0 top-0 bottom-0 flex items-center justify-center px-2 text-white",
                                    children: (0, n.jsx)(N.oHP, {
                                      className: "w-4 h-4",
                                    }),
                                  })
                                : null,
                            ],
                          }),
                          (0, n.jsx)("button", {
                            onClick: () => {
                              ec();
                            },
                            className:
                              "jsx-7078ffb922cb3c38 text-gray-500 hover:text-white transiton-all flex items-center justify-center w-12 shrink-0",
                            children: (0, n.jsx)(u.RHD, {
                              className: "w-6 h-6",
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "jsx-7078ffb922cb3c38 max-h-[200px] overflow-auto",
                        children: Z
                          ? null
                          : ep.map((e) => {
                              var t, s;
                              return (0, n.jsx)(
                                eA,
                                {
                                  thin: !0,
                                  chat: e,
                                  onToggleFavorite: D,
                                  highlightedTitle:
                                    null === (t = eg[e.id]) || void 0 === t
                                      ? void 0
                                      : t.title,
                                  highlightedPreview:
                                    null === (s = eg[e.id]) || void 0 === s
                                      ? void 0
                                      : s.preview,
                                  onSelect: y,
                                  selected: e.id === h,
                                  onDelete: m,
                                  onEditName: g,
                                },
                                e.id
                              );
                            }),
                      }),
                      ep.length > 0 &&
                        (0, n.jsx)("hr", {
                          className: "jsx-7078ffb922cb3c38 border-gray-700",
                        }),
                    ],
                  }),
                  0 === ef.length
                    ? Z
                      ? (0, n.jsxs)("div", {
                          className:
                            "jsx-7078ffb922cb3c38 text-gray-500 text-center",
                          children: [
                            (0, n.jsx)("p", {
                              className: "jsx-7078ffb922cb3c38 text-sm",
                              children: "No results",
                            }),
                            (0, n.jsxs)("p", {
                              className: "jsx-7078ffb922cb3c38 text-xs",
                              children: ['No result found for "', Z, '"'],
                            }),
                          ],
                        })
                      : (0, n.jsx)("div", {
                          className:
                            "jsx-7078ffb922cb3c38 flex flex-col items-center justify-center p-4 border border-dashed border-2 border-gray-500 rounded-lg mx-2",
                          children: (0, n.jsxs)("div", {
                            className:
                              "jsx-7078ffb922cb3c38 text-gray-500 text-center",
                            children: [
                              (0, n.jsx)("p", {
                                className: "jsx-7078ffb922cb3c38 text-sm",
                                children: "No Chats Yet",
                              }),
                              (0, n.jsx)("p", {
                                className: "jsx-7078ffb922cb3c38 text-xs",
                                children:
                                  "Click the button above to start a new chat",
                              }),
                            ],
                          }),
                        })
                    : null,
                  (0, n.jsxs)(eB, {
                    chats: x,
                    children: [
                      (0, n.jsx)(eK.Fo, {
                        items: Q,
                        strategy: eK.qw,
                        children: Q.map((e) => {
                          let t = eb[e.id] || [],
                            s = t.map((e) => e.id);
                          return Z && !t.length
                            ? null
                            : (0, n.jsx)(
                                eU,
                                {
                                  id: e.id,
                                  data: {
                                    type: "SORTABLE_FOLDER",
                                    numberOfChats: t.length,
                                  },
                                  customHandlePosition: !0,
                                  children: (r) => {
                                    let { listeners: l, attributes: i } = r;
                                    return (0, n.jsx)(eZ, {
                                      id: e.id,
                                      children: (0, n.jsx)(eL, {
                                        folder: e,
                                        onEdit: ed,
                                        onDelete: () => eh(e.id),
                                        shouldOpen:
                                          !!Z ||
                                          (null == s ? void 0 : s.includes(h)),
                                        numberOfChats: t.length,
                                        dragHandle: {
                                          listeners: l,
                                          attributes: i,
                                        },
                                        children: t.map((t) =>
                                          (0, n.jsx)(
                                            eR,
                                            {
                                              id: t.id,
                                              data: { container: e.id },
                                              customHandlePosition: !0,
                                              children: (e) => {
                                                var s, r;
                                                let {
                                                  listeners: l,
                                                  attributes: i,
                                                } = e;
                                                return (0, n.jsx)(eH, {
                                                  minHeight: 56,
                                                  children: (0, n.jsx)(eA, {
                                                    chat: t,
                                                    onToggleFavorite: D,
                                                    highlightedTitle:
                                                      null === (s = eg[t.id]) ||
                                                      void 0 === s
                                                        ? void 0
                                                        : s.title,
                                                    highlightedPreview:
                                                      null === (r = eg[t.id]) ||
                                                      void 0 === r
                                                        ? void 0
                                                        : r.preview,
                                                    onSelect: y,
                                                    selected: t.id === h,
                                                    onDelete: m,
                                                    onEditName: g,
                                                    dragHandle: {
                                                      listeners: l,
                                                      attributes: i,
                                                    },
                                                  }),
                                                });
                                              },
                                            },
                                            t.id
                                          )
                                        ),
                                      }),
                                    });
                                  },
                                },
                                e.id
                              );
                        }),
                      }),
                      (0, n.jsx)(eZ, {
                        id: "ROOT",
                        className: "flex-1 pb-4",
                        children:
                          null === (t = eb.ROOT) || void 0 === t
                            ? void 0
                            : t.map((e) =>
                                (0, n.jsx)(
                                  eR,
                                  {
                                    id: e.id,
                                    data: { container: "ROOT" },
                                    customHandlePosition: !0,
                                    children: (t) => {
                                      var s, r;
                                      let { listeners: l, attributes: i } = t;
                                      return (0, n.jsx)(eH, {
                                        minHeight: 56,
                                        children: (0, n.jsx)(eA, {
                                          chat: e,
                                          onToggleFavorite: D,
                                          highlightedTitle:
                                            null === (s = eg[e.id]) ||
                                            void 0 === s
                                              ? void 0
                                              : s.title,
                                          highlightedPreview:
                                            null === (r = eg[e.id]) ||
                                            void 0 === r
                                              ? void 0
                                              : r.preview,
                                          onSelect: y,
                                          selected: e.id === h,
                                          onDelete: m,
                                          onEditName: g,
                                          dragHandle: {
                                            listeners: l,
                                            attributes: i,
                                          },
                                        }),
                                      });
                                    },
                                  },
                                  e.id
                                )
                              ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, n.jsxs)("div", {
              className:
                "jsx-7078ffb922cb3c38 flex flex-col flex-shrink-0 bg-gray-700 p-3 justify-center space-y-1",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "jsx-7078ffb922cb3c38 flex items-center justify-center",
                  children: A.managed
                    ? A.allowGuests
                      ? (0, n.jsxs)("div", {
                          className:
                            "jsx-7078ffb922cb3c38 mb-2 grid grid-cols-2 gap-2",
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "jsx-7078ffb922cb3c38 text-xs text-white font-semibold flex items-center justify-end",
                              children: "OpenAI API Key",
                            }),
                            (0, n.jsx)(ev, {
                              setOpenDecrypt: _,
                              decryptedApiKey: L,
                            }),
                          ],
                        })
                      : (0, n.jsx)(R, { hostConfig: A })
                    : (0, n.jsxs)("div", {
                        className:
                          "jsx-7078ffb922cb3c38 mb-2 grid grid-cols-2 gap-2",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "jsx-7078ffb922cb3c38 text-xs text-white font-semibold flex items-center justify-end",
                            children: "License Key",
                          }),
                          (0, n.jsx)(eN, {
                            licenseVerified: w,
                            setOpenLicenseKey: G,
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "jsx-7078ffb922cb3c38 text-xs text-white font-semibold flex items-center justify-end",
                            children: "OpenAI API Key",
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "jsx-7078ffb922cb3c38 flex items-center relative",
                            children: [
                              (0, n.jsx)(ev, {
                                setOpenDecrypt: _,
                                decryptedApiKey: L,
                              }),
                              V === eP.yZ.OK &&
                                (0, n.jsx)("button", {
                                  onClick: () => J(!0),
                                  className:
                                    "jsx-7078ffb922cb3c38 flex items-center justify-center absolute left-full ml-2",
                                  children: (0, n.jsx)("div", {
                                    className:
                                      "jsx-7078ffb922cb3c38 " +
                                      (eY(
                                        "h-3 w-3 rounded-full bg-green-500"
                                      ) || ""),
                                  }),
                                }),
                              V === eP.yZ.SLOW &&
                                (0, n.jsx)("button", {
                                  onClick: () => J(!0),
                                  className:
                                    "jsx-7078ffb922cb3c38 flex items-center justify-center absolute left-full ml-2",
                                  children: (0, n.jsx)("div", {
                                    className:
                                      "jsx-7078ffb922cb3c38 " +
                                      (eY(
                                        "h-3 w-3 rounded-full bg-yellow-500"
                                      ) || ""),
                                    children: (0, n.jsx)("div", {
                                      className:
                                        "jsx-7078ffb922cb3c38 " +
                                        (eY(
                                          "h-3 w-3 rounded-full bg-yellow-500 animate-ping"
                                        ) || ""),
                                    }),
                                  }),
                                }),
                            ],
                          }),
                          V === eP.yZ.ERROR &&
                            (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)("div", {
                                  className:
                                    "jsx-7078ffb922cb3c38 text-xs text-white font-semibold flex items-center justify-end",
                                  children: "OpenAI Status",
                                }),
                                (0, n.jsxs)("button", {
                                  onClick: () => J(!0),
                                  className:
                                    "jsx-7078ffb922cb3c38 bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium w-full hover:bg-gray-500 transition-all",
                                  children: [
                                    (0, n.jsxs)("span", {
                                      className:
                                        "jsx-7078ffb922cb3c38 relative flex h-3 w-3 shrink-0",
                                      children: [
                                        (0, n.jsx)("span", {
                                          className:
                                            "jsx-7078ffb922cb3c38 animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75",
                                        }),
                                        (0, n.jsx)("span", {
                                          className:
                                            "jsx-7078ffb922cb3c38 relative inline-flex rounded-full h-3 w-3 bg-red-500",
                                        }),
                                      ],
                                    }),
                                    (0, n.jsx)("p", {
                                      className:
                                        "jsx-7078ffb922cb3c38 text-xs text-white ml-2",
                                      children: "Error",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                }),
                (0, n.jsx)(eu, {
                  open: X,
                  setOpen: G,
                  setOpenBuy: S,
                  setLicenseVerified: C,
                  verifyLicenseKey: O,
                }),
                (0, n.jsx)(eI, { open: Y, setOpen: J }),
                (0, n.jsx)("div", {
                  className:
                    "jsx-7078ffb922cb3c38  border-t border-gray-500 py-1",
                }),
                (0, n.jsxs)("div", {
                  className:
                    "jsx-7078ffb922cb3c38 text-xs text-gray-400 font-semibold text-center",
                  children: [
                    A.hosted
                      ? A.brand
                      : (0, n.jsx)("a", {
                          href: "https://webmind.app",
                          className: "jsx-7078ffb922cb3c38",
                          children: "webmind.app",
                        }),
                    " ",
                    "\xa9 ",
                    (0, n.jsx)("span", {
                      className: "jsx-7078ffb922cb3c38",
                      children: new Date().getFullYear(),
                    }),
                  ],
                }),
                A.hosted
                  ? (0, n.jsxs)("div", {
                      className:
                        "jsx-7078ffb922cb3c38 text-xs text-gray-400 text-center",
                      children: [
                        (0, n.jsx)("a", {
                          href:
                            (null == A
                              ? void 0
                              : null === (s = A.links) || void 0 === s
                              ? void 0
                              : s.privacy) || "#",
                          target: "_blank",
                          className: "jsx-7078ffb922cb3c38 hover:underline",
                          children: "Privacy",
                        }),
                        " | ",
                        (0, n.jsx)("a", {
                          href:
                            (null == A
                              ? void 0
                              : null === (r = A.links) || void 0 === r
                              ? void 0
                              : r.terms) || "#",
                          target: "_blank",
                          className: "jsx-7078ffb922cb3c38 hover:underline",
                          children: "Terms",
                        }),
                        " | ",
                        (0, n.jsx)("a", {
                          href:
                            (null == A
                              ? void 0
                              : null === (i = A.links) || void 0 === i
                              ? void 0
                              : i.faqs) || "#",
                          target: "_blank",
                          className: "jsx-7078ffb922cb3c38 hover:underline",
                          children: "FAQs",
                        }),
                        (
                          null == A
                            ? void 0
                            : null === (a = A.links) || void 0 === a
                            ? void 0
                            : a.contact
                        )
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                " | ",
                                (0, n.jsx)("a", {
                                  href:
                                    (null == A
                                      ? void 0
                                      : null === (o = A.links) || void 0 === o
                                      ? void 0
                                      : o.contact) || "#",
                                  target: "_blank",
                                  className:
                                    "jsx-7078ffb922cb3c38 hover:underline",
                                  children: "Contact",
                                }),
                              ],
                            })
                          : null,
                        A.managed && !A.allowSubscriptions
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                " | ",
                                (0, n.jsx)("a", {
                                  href: "/admin",
                                  target: "_blank",
                                  className:
                                    "jsx-7078ffb922cb3c38 hover:underline",
                                  children: "Admin",
                                }),
                              ],
                            })
                          : null,
                      ],
                    })
                  : (0, n.jsxs)("div", {
                      className:
                        "jsx-7078ffb922cb3c38 text-xs text-gray-400 text-center",
                      children: [
                        (0, n.jsx)("a", {
                          href: "/privacy",
                          target: "_blank",
                          className: "jsx-7078ffb922cb3c38 hover:underline",
                          children: "Privacy",
                        }),
                        " | ",
                        (0, n.jsx)("a", {
                          href: "/terms",
                          target: "_blank",
                          className: "jsx-7078ffb922cb3c38 hover:underline",
                          children: "Terms",
                        }),
                        " | ",
                        (0, n.jsx)("a", {
                          href: "/faqs",
                          target: "_blank",
                          className: "jsx-7078ffb922cb3c38 hover:underline",
                          children: "FAQs",
                        }),
                        " | ",
                        (0, n.jsx)("a", {
                          href: "/contact",
                          target: "_blank",
                          className: "jsx-7078ffb922cb3c38 hover:underline",
                          children: "Contact",
                        }),
                        " | ",
                        (0, n.jsx)("a", {
                          rel: "noopener noreferrer",
                          href: "https://tdinh.notion.site/tdinh/webmind-Changelog-b23c1d7de373417bbad50247f7a1a7cb",
                          target: "_blank",
                          className: "jsx-7078ffb922cb3c38 hover:underline",
                          children: "Changelog",
                        }),
                      ],
                    }),
                A.managed
                  ? null
                  : A.hosted
                  ? null
                  : (0, n.jsx)("div", {
                      className:
                        "jsx-7078ffb922cb3c38 text-xs text-gray-400 text-center",
                      children: (0, n.jsxs)("a", {
                        href: "/custom",
                        target: "_blank",
                        className:
                          "jsx-7078ffb922cb3c38 hover:underline font-semibold",
                        children: [
                          "→ ",
                          (0, n.jsx)("b", {
                            className: "jsx-7078ffb922cb3c38 text-green-500",
                            children: "NEW!",
                          }),
                          " Custom Deployment for teams",
                        ],
                      }),
                    }),
                (0, n.jsxs)("div", {
                  onClick: () => F(K + 1),
                  className:
                    "jsx-7078ffb922cb3c38 text-center flex items-center justify-center pb-safe",
                  children: [
                    A.hosted
                      ? (
                          null == A
                            ? void 0
                            : null === (c = A.links) || void 0 === c
                            ? void 0
                            : c.feedback
                        )
                        ? (0, n.jsx)(eC, {
                            link:
                              null == A
                                ? void 0
                                : null === (d = A.links) || void 0 === d
                                ? void 0
                                : d.feedback,
                          })
                        : null
                      : (0, n.jsx)(k, {}),
                    (0, n.jsx)(em, {}),
                    (0, n.jsx)(eo, {}),
                    (0, n.jsx)(el, { licensePayload: P }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)(b(), {
              id: "7078ffb922cb3c38",
              children: "#navbar.jsx-7078ffb922cb3c38{color-scheme:dark}",
            }),
          ],
        });
      }
      var e$ = s(96907);
      let e0 = "Something went wrong. Please try again.";
      function e2(e) {
        let { children: t } = e,
          [s, r] = (0, l.useState)(!1),
          [i, a] = (0, l.useState)(!1),
          [o, c] = (0, l.useState)(""),
          [u, x] = (0, l.useState)(null);
        (0, l.useEffect)(() => {
          let e = new URLSearchParams(window.location.search),
            t = e.get("continue");
          t
            ? (setTimeout(() => {
                window.history.replaceState({}, document.title, "/");
              }, 1e3),
              h(t),
              r(!0))
            : x([]);
        }, []);
        let h = async (e) => {
          a(!0), c("");
          try {
            await new Promise((e) => setTimeout(e, 2e3));
            let t = await fetch(
              "https://www.webmind.app/api/share?id=" + e,
              { method: "GET", headers: { "Content-Type": "application/json" } }
            );
            if (t.status >= 400) {
              let e = await t.json();
              c(e.userMessage || e0), a(!1), x([]);
              return;
            }
            if (!t.ok) {
              c(e0), a(!1), x([]);
              return;
            }
            let s = await t.json();
            x(s.messages);
          } catch (e) {
            c(e0), x([]), console.error(e);
          }
          a(!1), r(!1);
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            null !== u ? t({ defaultMessages: u }) : null,
            (0, n.jsx)(d.Z, {
              open: s,
              setOpen: r,
              showCloseButton: !1,
              children: (0, n.jsxs)("div", {
                className: "my-4 text-center",
                children: [
                  i
                    ? (0, n.jsxs)("div", {
                        className:
                          "flex items-center justify-center gap-2 my-4",
                        children: [
                          (0, n.jsx)(f.Z, {}),
                          (0, n.jsx)("h2", {
                            className: "text-center text-xl font-bold",
                            children: "Loading Chat...",
                          }),
                        ],
                      })
                    : null,
                  o &&
                    (0, n.jsx)("div", {
                      className: "text-red-500",
                      children: o,
                    }),
                ],
              }),
            }),
          ],
        });
      }
      var e1 = s(83991);
      let e5 = (0, i.eK)("useExampleFilled");
      function e4(e) {
        let { onLoaded: t } = e,
          [s, n] = e5(!1);
        return (
          (0, l.useEffect)(() => {
            setTimeout(() => {
              try {
                if (s) return;
                let e = JSON.parse(
                  (0, i.cF)().getItem("TM_useChatList") || "[]"
                );
                if (e.length > 0) return;
                e1.f.forEach((e) => {
                  (0, i.cF)().setItem("CHAT_" + e.chatID, JSON.stringify(e));
                });
                let r = (0, I.FW)(e1.f);
                (0, i.cF)().setItem("TM_useChatList", JSON.stringify(r)),
                  n(!0),
                  t && t();
              } catch (e) {
                console.error(e);
              }
            }, 3e3);
          }, []),
          null
        );
      }
      var e3 = s(41908);
      let e7 = (0, i.eK)("useDismissMacWarning");
      function e8() {
        let [e, t] = e7(!1),
          [s, r] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            !e && window.navigator.userAgent.includes("webmind.appMac") && r(!0);
          }, []),
          (0, n.jsxs)(d.Z, {
            open: s,
            setOpen: r,
            showCloseButton: !1,
            children: [
              (0, n.jsx)("h2", {
                className:
                  "text-center text-xl font-bold flex items-center justify-center space-x-2",
                children: (0, n.jsx)("span", {
                  children: "Known Issues in macOS app:",
                }),
              }),
              (0, n.jsx)("div", {
                className: "my-2 text-center text-xs",
                children:
                  "Welcome to using webmind.app on macOS! Please be informed about the following known issues in the macOS app. We are working hard to improve the app every day!",
              }),
              (0, n.jsxs)("ul", {
                className: "my-4 pl-4 list-disc",
                children: [
                  (0, n.jsx)("li", {
                    children: "Chats Export/Import is not supported.",
                  }),
                  (0, n.jsx)("li", {
                    children:
                      "Updating user's profile picture is not supported.",
                  }),
                  (0, n.jsx)("li", {
                    children: "Domain Check Integration is not supported",
                  }),
                  (0, n.jsx)("li", {
                    children: "Voice input is not supported.",
                  }),
                  (0, n.jsx)("li", { children: "PDF export is not supportd." }),
                ],
              }),
              (0, n.jsxs)("div", {
                className:
                  "my-2 text-center gap-2 flex items-center justify-center",
                children: [
                  (0, n.jsx)("button", {
                    onClick: () => r(!1),
                    className:
                      "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-500",
                    children: (0, n.jsx)("span", { children: "Got it!" }),
                  }),
                  (0, n.jsx)("button", {
                    onClick: () => {
                      t(!0), r(!1);
                    },
                    className:
                      "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 space-x-1 disabled:bg-gray-500",
                    children: (0, n.jsx)("span", {
                      children: "Don't show again",
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      var e6 = s(60155);
      function e9(e) {
        let { open: t, setOpen: s, setOpenLicenseKey: r, setOpenBuy: i } = e,
          [a, o] = (0, l.useState)(5);
        (0, l.useEffect)(() => {
          t && c();
        }, [t]);
        let c = async () => {
          for (let e = 10; e >= 0; e--)
            o(e), await new Promise((e) => setTimeout(e, 1e3));
        };
        return (0, n.jsxs)(d.Z, {
          wide: !0,
          open: t,
          setOpen: (e) => {
            0 === a && s(e);
          },
          showCloseButton: !1,
          children: [
            (0, n.jsx)("h2", {
              className: "text-center text-xl font-bold",
              children: "\uD83D\uDCA1 A Quick Reminder:",
            }),
            (0, n.jsxs)("p", {
              className: "my-4 text-sm",
              children: [
                (0, n.jsxs)("b", {
                  children: [
                    (0, n.jsx)("span", {
                      className: "text-red-500",
                      children: "Chat history is not saved",
                    }),
                    " and other premium features will be limited soon in the free version",
                  ],
                }),
                "! To continue using the app, please consider buying a license key.",
              ],
            }),
            (0, n.jsxs)("div", {
              className:
                "my-4 text-center flex items-center justify-center flex-wrap gap-2",
              children: [
                (0, n.jsx)("button", {
                  onClick: () => {
                    0 === a && s(!1),
                      setTimeout(() => {
                        i(!0);
                      }, 1);
                  },
                  className:
                    "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 space-x-1 disabled:bg-gray-500",
                  children: (0, n.jsx)("span", {
                    children: " → Buy a License Key",
                  }),
                }),
                (0, n.jsxs)("button", {
                  onClick: () => {
                    0 === a && s(!1),
                      setTimeout(() => {
                        r(!0);
                      }, 1);
                  },
                  className:
                    "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-500",
                  children: [
                    (0, n.jsx)(e6.itj, { className: "w-4 h-4" }),
                    (0, n.jsx)("span", { children: "Enter License Key" }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className:
                "mt-4 text-center flex items-center justify-center space-x-2",
              children: (0, n.jsx)("button", {
                onClick: () => {
                  s(!1),
                    setTimeout(() => {
                      i(!0);
                    }, 1);
                },
                disabled: a > 0,
                className:
                  "inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-800 dark:text-zinc-100 dark:disabled:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:text-gray-400",
                children: (0, n.jsxs)("span", {
                  children: [
                    "I'll do it later",
                    a > 0 ? " (".concat(a, ")") : "",
                  ],
                }),
              }),
            }),
          ],
        });
      }
      (0, i.eK)("useLicenseKey");
      let te =
          "That endpoint is not working. Please check and try again. Open the console log may reveal more information.",
        tt = (0, i.eK)("useCurrentCompletionEndpoint");
      function ts(e) {
        let { apiKey: t } = e,
          [s, r] = tt("https://api.openai.com/v1/chat/completions"),
          [i, a] = (0, l.useState)(s),
          [o, c] = (0, l.useState)(!1),
          [d, u] = (0, l.useState)(null);
        (0, l.useEffect)(() => {
          a(s);
        }, [s]);
        let x = async () => {
          c(!0), u("");
          try {
            let s = await fetch(i, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(t),
              },
              body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: "test" }],
              }),
            });
            if (s.status >= 400) {
              var e;
              let t = await s.json();
              if (
                (null == t
                  ? void 0
                  : null === (e = t.error) || void 0 === e
                  ? void 0
                  : e.code) === "invalid_api_key"
              ) {
                r(i),
                  window.alert("Endpoint saved! webmind.app will restart now."),
                  window.location.reload();
                return;
              }
              u(t.userMessage || te), c(!1);
              return;
            }
            if (!s.ok) {
              u(te), c(!1);
              return;
            }
            r(i),
              window.alert("Endpoint saved! webmind.app will restart now."),
              window.location.reload();
          } catch (e) {
            u(te), console.error(e);
          }
          c(!1);
        };
        return (0, n.jsxs)("div", {
          className: "my-2",
          children: [
            (0, n.jsxs)("div", {
              className: "flex items-center justify-between gap-2 flex-wrap",
              children: [
                (0, n.jsx)("label", {
                  className: "text-sm font-semibold",
                  children: "OpenAI Chat Completions Endpoint (V1):",
                }),
                (0, n.jsxs)("div", {
                  className: "flex items-center justify-center gap-2 w-full",
                  children: [
                    (0, n.jsx)("input", {
                      type: "text",
                      placeholder: "https://...",
                      className:
                        "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700 disabled:text-gray-500",
                      autoComplete: "off",
                      value: i,
                      onChange: (e) => a(e.target.value),
                      disabled: o,
                      onKeyDown: (e) => {
                        "Enter" === e.key && (e.preventDefault(), x());
                      },
                    }),
                    (0, n.jsx)("button", {
                      onClick: () => {
                        x();
                      },
                      disabled: o,
                      className:
                        "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1",
                      children: o
                        ? (0, n.jsx)(f.Z, {})
                        : (0, n.jsx)("span", { children: "Save" }),
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "text-xs text-gray-500 mt-1",
              children:
                "Note: you may need to update your API key after changing the endpoint.",
            }),
            d &&
              (0, n.jsx)("div", {
                className: "mt-2 text-sm text-red-500",
                children: d,
              }),
          ],
        });
      }
      let tn = "Something went wrong. Please try again.",
        tr = (0, i.eK)("useUserPrompts"),
        tl = (0, i.eK)("useFolderList"),
        ti = (0, i.eK)("useChatsInFolder"),
        ta = (0, i.eK)("useStreaming"),
        to = (0, i.eK)("useAutomaticTitle"),
        tc = (0, i.eK)("useSuggestKeywords"),
        td = (0, i.eK)("useSuggestKeywords"),
        tu = (0, i.eK)("useUserCharacters"),
        tx = (0, i.eK)("useKeyboardShortcuts"),
        th = (0, i.eK)("useExportSelections"),
        tm = [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ];
      function tf(e) {
        let {
            open: t,
            setOpen: s,
            chats: r,
            setChats: a,
            setOpenBackupSync: o,
            apiKey: c,
            hostConfig: u,
          } = e,
          [x, h] = tr([]),
          [m, f] = (0, l.useState)({
            chats: [],
            folders: [],
            chatsInFolder: {},
            userPrompts: [],
            userCharacters: [],
          }),
          [g, p] = tu([]),
          [b, y] = tl([]),
          [j, v] = ti({}),
          [w, k] = (0, l.useState)(0),
          [C, S] = (0, l.useState)(!1),
          [T, A] = ta(!0),
          [D, P] = to(!0),
          [E, O] = tc(!0),
          [L, _] = td("google"),
          [K, F] = tx({ search: "K", sidebar: "B" }),
          [M, B] = th({ chats: !0, folders: !0, characters: !0, prompts: !0 }),
          [Z, R] = (0, l.useState)(!1),
          z = (e) => {
            B({ ...M, [e]: !M[e] });
          },
          U = (e) => {
            let { type: t, value: s } = e;
            F((e) => ({ ...e, [t]: s }));
          };
        (0, l.useEffect)(() => {
          if (t) {
            let e = r.map((e) =>
              JSON.parse((0, i.cF)().getItem("CHAT_" + e.id))
            );
            f({
              chats: e,
              folders: b,
              chatsInFolder: j,
              userPrompts: x,
              userCharacters: g,
            });
          }
        }, [r, t, b, j, g]);
        let W = () => {
            var e, t, s, n;
            let r = {};
            if (
              (M.chats && (r.chats = m.chats),
              M.folders &&
                ((r.folders = m.folders), (r.chatsInFolder = m.chatsInFolder)),
              M.prompts && (r.userPrompts = m.userPrompts),
              M.characters && (r.userCharacters = m.userCharacters),
              !(null === (e = r.chats) || void 0 === e ? void 0 : e.length) &&
                !(null === (t = r.folders) || void 0 === t
                  ? void 0
                  : t.length) &&
                !(null === (s = r.userPrompts) || void 0 === s
                  ? void 0
                  : s.length) &&
                !(null === (n = r.userCharacters) || void 0 === n
                  ? void 0
                  : n.length))
            ) {
              window.alert("Nothing to export.");
              return;
            }
            let l = en()(r),
              i = (0, I.M)(l),
              a =
                "data:text/json;charset=utf-8," +
                encodeURIComponent(JSON.stringify({ checksum: i, data: r })),
              o = document.createElement("a");
            o.setAttribute("href", a),
              o.setAttribute(
                "download",
                "webmind.app-chats-".concat(Date.now(), ".json")
              ),
              document.body.appendChild(o),
              o.click(),
              o.remove();
          },
          X = () => {
            let e = document.createElement("input");
            (e.type = "file"),
              (e.accept = "application/json"),
              (e.onchange = (e) => {
                let t = e.target.files[0],
                  s = new FileReader();
                (s.onload = (e) => {
                  let t = e.target.result;
                  try {
                    let e = JSON.parse(t);
                    G(e);
                  } catch (e) {
                    console.error(e), alert(tn);
                  }
                }),
                  s.readAsText(t);
              }),
              e.click();
          },
          G = (e) => {
            try {
              var t, s, n, l, o, c, d, u, m, f, j, w, N, k, C, S, T;
              if (!e.checksum || !(e.data || e.chats)) {
                window.alert(
                  "This is not a valid archive file or it has been corupted."
                );
                return;
              }
              let A = (0, I.M)(en()(e.data || e.chats));
              if (A !== e.checksum) {
                window.alert(
                  "This archive file has been corrupted. Please try again or contact support."
                );
                return;
              }
              let D = e.data || { chats: e.chats };
              if (
                !(null === (t = D.chats) || void 0 === t ? void 0 : t.length) &&
                !(null === (s = D.folders) || void 0 === s
                  ? void 0
                  : s.length) &&
                !(null === (n = D.userPrompts) || void 0 === n
                  ? void 0
                  : n.length) &&
                !(null === (l = D.userCharacters) || void 0 === l
                  ? void 0
                  : l.length)
              ) {
                window.alert("This archive file is empty.");
                return;
              }
              let P = [];
              if (
                ((null === (o = D.userPrompts) || void 0 === o
                  ? void 0
                  : o.length) > 0 &&
                  P.push(
                    ""
                      .concat(D.userPrompts.length, " ")
                      .concat(
                        1 === D.userPrompts.length ? "prompt" : "prompts",
                        " "
                      )
                  ),
                (null === (c = D.userCharacters) || void 0 === c
                  ? void 0
                  : c.length) > 0 &&
                  P.push(
                    "".concat(
                      null === (T = D.userCharacters) || void 0 === T
                        ? void 0
                        : T.length,
                      " characters"
                    )
                  ),
                (null === (d = D.folders) || void 0 === d ? void 0 : d.length) >
                  0 &&
                  P.push(
                    ""
                      .concat(D.folders.length, " ")
                      .concat(1 === D.folders.length ? "folder" : "folders")
                  ),
                (null === (u = D.chats) || void 0 === u ? void 0 : u.length) >
                  0 &&
                  P.push(
                    ""
                      .concat(D.chats.length, " ")
                      .concat(1 === D.chats.length ? "chat" : "chats")
                  ),
                P.length > 0 &&
                  !window.confirm(
                    "Importing new ".concat(P.join(", "), ". Are you sure?")
                  ))
              )
                return;
              null === (m = D.chats) ||
                void 0 === m ||
                m.forEach((e) => {
                  e &&
                    (0, i.cF)().setItem("CHAT_" + e.chatID, JSON.stringify(e));
                });
              let E = (0, I.FW)(D.chats || []),
                O = [...E, ...r],
                L = O.filter(
                  (e, t, s) => t === s.findIndex((t) => t.chatID === e.chatID)
                );
              a(L);
              let _ = [];
              if (
                null === (f = D.folders) || void 0 === f ? void 0 : f.length
              ) {
                let e = {};
                b.forEach((t) => {
                  e[t.id] = t;
                }),
                  D.folders.forEach((t) => {
                    e[t.id] = t;
                  }),
                  (_ = Object.values(e)),
                  y(_);
              }
              v((e) => ({ ...e, ...(D.chatsInFolder || {}) }));
              let K = [];
              if (
                null === (j = D.userPrompts) || void 0 === j ? void 0 : j.length
              ) {
                let e = {};
                x.forEach((t) => {
                  e[t.id] = t;
                }),
                  D.userPrompts.forEach((t) => {
                    e[t.id] = t;
                  }),
                  (K = Object.values(e)),
                  h(K);
              }
              let F = [];
              if (
                null === (w = D.userCharacters) || void 0 === w
                  ? void 0
                  : w.length
              ) {
                let e = {};
                g.forEach((t) => {
                  e[t.id] = t;
                }),
                  D.userCharacters.forEach((t) => {
                    e[t.id] = t;
                  }),
                  (F = Object.values(e)),
                  p(F);
              }
              let M = [],
                B = [];
              (null === (N = D.userPrompts) || void 0 === N
                ? void 0
                : N.length) &&
                (M.push("".concat(D.userPrompts.length, " prompts")),
                B.push("".concat(K.length, " prompts"))),
                (null === (k = D.userCharacters) || void 0 === k
                  ? void 0
                  : k.length) &&
                  (M.push("".concat(D.userCharacters.length, " characters")),
                  B.push("".concat(F.length, " characters"))),
                (null === (C = D.folders) || void 0 === C
                  ? void 0
                  : C.length) &&
                  (M.push("".concat(D.folders.length, " folders")),
                  B.push("".concat(_.length, " folders"))),
                (null === (S = D.chats) || void 0 === S ? void 0 : S.length) &&
                  (M.push("".concat(D.chats.length, " chats")),
                  B.push("".concat(L.length, " chats"))),
                alert(
                  "Imported " +
                    M.join(", ") +
                    ". You now have " +
                    B.join(", ") +
                    " on this device. webmind.app will restart now."
                ),
                window.location.reload();
            } catch (e) {
              console.error(e), alert(tn);
            }
          },
          Y = m.chats.reduce((e, t) => {
            var s;
            return (
              e +
              ((null == t
                ? void 0
                : null === (s = t.messages) || void 0 === s
                ? void 0
                : s.length) || 0)
            );
          }, 0),
          J = navigator.platform.toUpperCase().includes("MAC"),
          V = [];
        return (
          x.length > 0 &&
            V.push(
              "<b>"
                .concat(x.length, " saved prompt")
                .concat(1 === x.length ? "" : "s", "</b>")
            ),
          g.length > 0 && V.push("<b>".concat(g.length, " characters</b>")),
          b.length > 0 &&
            V.push(
              "<b>"
                .concat(b.length, " folder")
                .concat(1 === b.length ? "" : "s", "</b>")
            ),
          V.push(
            "<b> "
              .concat(r.length, " chat")
              .concat(1 === r.length ? "" : "s", "</b>\nwith <b> ")
              .concat(Y, " message")
              .concat(1 === Y ? "" : "s", "</b> on this device.")
          ),
          (0, n.jsxs)(d.Z, {
            wide: !0,
            open: t,
            setOpen: s,
            showCloseButton: !1,
            delayMount: !0,
            children: [
              (0, n.jsx)("h2", {
                onClick: () => {
                  k(w + 1), w > 10 && setSyncFeatureEnabled(!0);
                },
                className: "text-center text-xl font-bold",
                children: "App Settings",
              }),
              (0, n.jsx)("hr", { className: "my-4" }),
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)("h3", {
                    className: "text-xl font-bold",
                    children: "Preferences",
                  }),
                  (0, n.jsxs)("div", {
                    className: "space-y-4 my-4",
                    children: [
                      (0, n.jsx)(q.Z, {
                        label:
                          "Stream AI responses word by word (typing animation)",
                        description:
                          "Cost estimation will be less accurate when stream response is enabled.",
                        enabled: T,
                        setEnabled: A,
                      }),
                      (0, n.jsx)(q.Z, {
                        label: "Auto generate title for new chats",
                        description:
                          "Ask ChatGPT to generate a title based on the first message when starting a new chat. This will consume more tokens used in the first message. (All subsequent message tokens will not be affected). This request will use GPT-3.5 to save cost.",
                        enabled: D,
                        setEnabled: P,
                      }),
                      (0, n.jsx)(q.Z, {
                        label:
                          "Auto suggest relevant keywords after each message",
                        description:
                          "Ask ChatGPT to suggest relevant keywords if the answer is more than 500 characters long. This will consume more of your token. This request will use GPT-3.5 to save cost.",
                        enabled: E,
                        setEnabled: O,
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "grid grid-cols-2 items-center justify-center gap-2",
                        children: [
                          (0, n.jsx)("div", {
                            className: "text-sm font-semibold text-right",
                            children: "Search Suggestions Link",
                          }),
                          (0, n.jsxs)("select", {
                            className:
                              "block w-fit rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 dark:text-white dark:bg-zinc-700 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6",
                            value: L,
                            onChange: (e) => _(e.target.value.toLowerCase()),
                            children: [
                              (0, n.jsx)("option", {
                                value: "google",
                                children: "Google",
                              }),
                              (0, n.jsx)("option", {
                                value: "ddg",
                                children: "DuckDuckGo",
                              }),
                              (0, n.jsx)("option", {
                                value: "bing",
                                children: "Bing",
                              }),
                              (0, n.jsx)("option", {
                                value: "brave",
                                children: "Brave",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)("h3", {
                    className: "text-xl font-bold hidden md:block",
                    children: "Keyboard shortcuts",
                  }),
                  (0, n.jsx)("div", {
                    className: "space-y-4 my-4 hidden md:block",
                    children: (0, n.jsxs)("div", {
                      className:
                        "grid grid-cols-2 items-center justify-center gap-2",
                      children: [
                        (0, n.jsx)("div", {
                          className: "text-sm font-semibold text-right",
                          children: "Open Search",
                        }),
                        (0, n.jsx)("select", {
                          className:
                            "block w-fit rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 dark:text-white dark:bg-zinc-700 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6",
                          value: K.search,
                          onChange: (e) =>
                            U({ type: "search", value: e.target.value }),
                          children: tm.map((e) =>
                            (0, n.jsxs)(
                              "option",
                              {
                                value: e,
                                children: [J ? "⌘" : "Ctrl", " + ", e],
                              },
                              e
                            )
                          ),
                        }),
                        (0, n.jsx)("div", {
                          className: "text-sm font-semibold text-right",
                          children: "Toggle Sidebar",
                        }),
                        (0, n.jsx)("select", {
                          className:
                            "block w-fit rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 dark:text-white dark:bg-zinc-700 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6",
                          value: K.sidebar,
                          onChange: (e) =>
                            U({ type: "sidebar", value: e.target.value }),
                          children: tm.map((e) =>
                            (0, n.jsxs)(
                              "option",
                              {
                                value: e,
                                children: [J ? "⌘" : "Ctrl", " + ", e],
                              },
                              e
                            )
                          ),
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)("h3", {
                    className: "text-xl font-bold",
                    children: "All Data",
                  }),
                  (0, n.jsx)("div", {
                    className: "my-4",
                    dangerouslySetInnerHTML: {
                      __html: "You have " + V.join(", "),
                    },
                  }),
                  (0, n.jsxs)("div", {
                    className: "my-4 flex items-center flex-wrap gap-2",
                    children: [
                      (0, n.jsxs)("button", {
                        onClick: () => R((e) => !e),
                        type: "button",
                        className:
                          "inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors",
                        children: [
                          (0, n.jsx)(N.r2j, { className: "w-4 h-4 mr-2" }),
                          (0, n.jsx)("span", { children: "Export" }),
                        ],
                      }),
                      (0, n.jsxs)("button", {
                        type: "button",
                        onClick: X,
                        className:
                          "inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors",
                        children: [
                          (0, n.jsx)(N.cX4, { className: "w-4 h-4 mr-2" }),
                          (0, n.jsx)("span", { children: "Import" }),
                        ],
                      }),
                      (0, n.jsxs)("button", {
                        type: "button",
                        onClick: () => S(!0),
                        className:
                          "inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:bg-gray-400 disabled:cursor-default transition-colors",
                        children: [
                          (0, n.jsx)(N.wg8, { className: "w-4 h-4 mr-2" }),
                          (0, n.jsx)("span", { children: "Recover Lost Data" }),
                        ],
                      }),
                    ],
                  }),
                  Z &&
                    (0, n.jsxs)("div", {
                      className: "my-4",
                      children: [
                        (0, n.jsx)("h3", {
                          className: "font-bold",
                          children: "Export Selections",
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "mt-2 flex flex-wrap items-center gap-x-6 gap-y-2",
                          children: [
                            (0, n.jsxs)("label", {
                              className: "flex items-center space-x-2",
                              children: [
                                (0, n.jsx)("input", {
                                  type: "checkbox",
                                  className:
                                    "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600",
                                  checked: M.chats,
                                  onChange: () => z("chats"),
                                }),
                                (0, n.jsx)("span", { children: "Chats" }),
                              ],
                            }),
                            (0, n.jsxs)("label", {
                              className: "flex items-center space-x-2",
                              children: [
                                (0, n.jsx)("input", {
                                  type: "checkbox",
                                  className:
                                    "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600",
                                  checked: M.folders,
                                  onChange: () => z("folders"),
                                }),
                                (0, n.jsx)("span", { children: "Folders" }),
                              ],
                            }),
                            (0, n.jsxs)("label", {
                              className: "flex items-center space-x-2",
                              children: [
                                (0, n.jsx)("input", {
                                  type: "checkbox",
                                  className:
                                    "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600",
                                  checked: M.prompts,
                                  onChange: () => z("prompts"),
                                }),
                                (0, n.jsx)("span", { children: "Prompts" }),
                              ],
                            }),
                            (0, n.jsxs)("label", {
                              className: "flex items-center space-x-2",
                              children: [
                                (0, n.jsx)("input", {
                                  type: "checkbox",
                                  className:
                                    "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600",
                                  checked: M.characters,
                                  onChange: () => z("characters"),
                                }),
                                (0, n.jsx)("span", { children: "Characters" }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)("button", {
                          onClick: W,
                          type: "button",
                          className:
                            "mt-3 inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors",
                          disabled:
                            !M.chats &&
                            !M.folders &&
                            !M.prompts &&
                            !M.characters,
                          children: [
                            (0, n.jsx)(N.RFS, { className: "w-4 h-4 mr-2" }),
                            (0, n.jsx)("span", { children: "Download File" }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              C
                ? (0, n.jsxs)("div", {
                    className: "my-4",
                    children: [
                      (0, n.jsx)("div", {
                        className: "text-xs text-gray-500 my-4",
                        children:
                          "If your chats are not showing up, you can try to recover them here. This will find all of the existing chats available in your local storage and recover them. Usually, you don't need to do this, but in some extreme case where there is a browser bug, or webmind.app's storage is corupted by a other browser extensions, you can try to recover your chats here.",
                      }),
                      (0, n.jsx)(ei, {
                        wait: 0,
                        setChats: (e) => {
                          a(e), window.location.reload();
                        },
                        showCoruptedMessage: !1,
                        emptyMessage: () =>
                          (0, n.jsx)("div", {
                            className: "text-base font-semibold p-4",
                            children: "No data found on this device",
                          }),
                      }),
                    ],
                  })
                : null,
              (0, n.jsx)(H, {}),
              (0, n.jsx)("div", {
                className: "text-center my-4",
                children: (0, n.jsx)("button", {
                  onClick: () => {
                    s(!1),
                      setTimeout(() => {
                        o(!0);
                      }, 400);
                  },
                  className:
                    "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1",
                  children: "Setup Backup & Sync",
                }),
              }),
              (0, n.jsx)("hr", { className: "my-4" }),
              u.managed
                ? null
                : (0, n.jsxs)("details", {
                    children: [
                      (0, n.jsx)("summary", {
                        className:
                          "cursor-pointer hover:underline text-sm font-semibold my-4",
                        children: "Advanced Settings",
                      }),
                      (0, n.jsxs)("div", {
                        children: [
                          (0, n.jsx)("h3", {
                            className: "text-xl font-bold hidden md:block",
                            children: "Endpoint & Proxy",
                          }),
                          (0, n.jsx)(ts, { apiKey: c }),
                        ],
                      }),
                    ],
                  }),
              (0, n.jsx)("div", {
                className: "text-center space-x-2 mt-4",
                children: (0, n.jsxs)("button", {
                  onClick: () => s(!1),
                  className:
                    "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1",
                  children: [
                    (0, n.jsx)(N.bzc, { className: "w-4 h-4" }),
                    (0, n.jsx)("span", { children: "Done" }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      let tg = (0, i.eK)("useLicenseKey");
      function tp(e) {
        let { open: t, setOpen: s, setOpenLicenseKey: r } = e,
          [i, a] = tg(""),
          [o, c] = (0, l.useState)(null);
        (0, l.useEffect)(() => {
          let e = window.localStorage.getItem("aff");
          e && c(e);
        }, []);
        let u = o ? "?checkout[custom][aff]=".concat(o) : "";
        return (0, n.jsxs)(d.Z, {
          wide: !0,
          open: t,
          setOpen: s,
          showCloseButton: !1,
          children: [
            (0, n.jsxs)("h2", {
              className:
                "text-center text-2xl font-bold flex items-center justify-center space-x-2",
              children: [
                (0, n.jsx)(N.WYw, {
                  className: "h-8 w-8 text-red-500",
                  "aria-hidden": "true",
                }),
                (0, n.jsx)("span", { children: "One Time Purchase" }),
              ],
            }),
            (0, n.jsx)(e3.Z, {}),
            (0, n.jsx)("div", {
              className: "flex items-center justify-center",
              children: (0, n.jsxs)("div", {
                className: "my-4 grid gap-y-2 gap-x-6",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex items-center justify-start space-x-1",
                    children: [
                      (0, n.jsx)(N.mny, {
                        className: "text-green-500 w-6 h-6 shrink-0",
                      }),
                      (0, n.jsxs)("div", {
                        className: "text-sm",
                        children: [
                          (0, n.jsxs)("div", {
                            children: [
                              "Unlock All Features",
                              " ",
                              (0, n.jsx)("a", {
                                className:
                                  "text-blue-500 hover:underline text-xs",
                                target: "_blank",
                                href: "https://tdinh.notion.site/Features-14e2788cd7264d87b0a4bf71b4516937",
                                children: "(View Feature List)",
                              }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className: "text-xs text-gray-500",
                            children:
                              "Search, AI characters, prompt library, etc.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex items-center justify-start space-x-1",
                    children: [
                      (0, n.jsx)(N.mny, {
                        className: "text-green-500 w-6 h-6 shrink-0",
                      }),
                      (0, n.jsxs)("div", {
                        className: "text-sm",
                        children: [
                          (0, n.jsxs)("div", {
                            children: [
                              "Web Search Included",
                              " ",
                              (0, n.jsx)("a", {
                                className:
                                  "text-blue-500 hover:underline text-xs",
                                target: "_blank",
                                href: "https://twitter.com/tdinh_me/status/1642554094228504576",
                                children: "(View Demo)",
                              }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className: "text-xs text-gray-500",
                            children: "ChatGPT with access to the web!",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex items-center justify-start space-x-1",
                    children: [
                      (0, n.jsx)(N.mny, {
                        className: "text-green-500 w-6 h-6 shrink-0",
                      }),
                      (0, n.jsxs)("div", {
                        className: "text-sm",
                        children: [
                          (0, n.jsxs)("div", {
                            children: [
                              "MacOS App",
                              " ",
                              (0, n.jsx)("a", {
                                className:
                                  "text-blue-500 hover:underline text-xs",
                                target: "_blank",
                                href: "https://twitter.com/tdinh_me/status/1634111496421793792",
                                children: "(View Demo)",
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "text-xs text-gray-500",
                            children: [
                              "Maximum convenience (macOS 11.3+)",
                              " ",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex items-center justify-start space-x-1",
                    children: [
                      (0, n.jsx)(N.mny, {
                        className: "text-green-500 w-6 h-6 shrink-0",
                      }),
                      (0, n.jsxs)("div", {
                        className: "text-sm",
                        children: [
                          (0, n.jsxs)("div", {
                            children: [
                              "Self-host Static App",
                              " ",
                              (0, n.jsx)("a", {
                                className:
                                  "text-blue-500 hover:underline text-xs",
                                target: "_blank",
                                href: "/self-host-faqs",
                                children: "(Learn More)",
                              }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className: "text-xs text-gray-500",
                            children:
                              "Run the app locally or host on your own domain",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, n.jsx)("div", {
              className: "text-xs text-center my-2",
              children:
                "Note: You still need an OpenAI API key to use the app. We don't sell API keys.",
            }),
            (0, n.jsx)("div", {
              className: "my-2 text-center",
              children: i
                ? (0, n.jsxs)("div", {
                    className: "text-sm text-center my-2",
                    children: [
                      (0, n.jsx)("div", {
                        className: "text-green-500 font-bold",
                        children: "Thank you for your purchase!",
                      }),
                      (0, n.jsxs)("div", {
                        className: "text-gray-500",
                        children: [
                          "Your license key is: ",
                          (0, n.jsxs)("code", {
                            children: ["***", i.slice(0, 5)],
                          }),
                          " ",
                          (0, n.jsx)("button", {
                            onClick: () => {
                              s(!1),
                                setTimeout(() => {
                                  r(!0);
                                }, 500);
                            },
                            className:
                              "text-blue-500 hover:underline inline-block",
                            children: "(change)",
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, n.jsx)("button", {
                    onClick: () => {
                      s(!1),
                        setTimeout(() => {
                          r(!0);
                        }, 500);
                    },
                    className: "text-blue-500 hover:underline",
                    children: "I already bought a license",
                  }),
            }),
            (0, n.jsx)("div", {
              className: "my-4 text-center",
              children: (0, n.jsxs)("a", {
                href:
                  "https://tdinh.lemonsqueezy.com/checkout/buy/4e8d7ea3-0e9e-45b1-bf62-058ade690553" +
                  u,
                className:
                  "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-green-500 transition-all group",
                children: [
                  (0, n.jsx)("span", {
                    className: "group-hover:scale-125 transition-all mr-2",
                    children: "→",
                  }),
                  " ",
                  i ? "Buy Another" : "Buy Now",
                ],
              }),
            }),
            (0, n.jsx)("div", {
              className: "my-4 text-center",
              children: (0, n.jsxs)("a", {
                href:
                  "https://tdinh.lemonsqueezy.com/checkout/buy/149502c9-ff37-4a51-85b2-cce01e541c52" +
                  u,
                target: "_blank",
                className:
                  "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-cyan-500 transition-all group",
                children: [
                  (0, n.jsx)("span", {
                    className: "group-hover:scale-125 transition-all mr-2",
                    children: "→",
                  }),
                  " ",
                  "Team License 10 users – $195",
                ],
              }),
            }),
            (0, n.jsx)("div", {
              className: "my-4 text-center",
              children: (0, n.jsxs)("a", {
                href:
                  "https://tdinh.lemonsqueezy.com/checkout/buy/fa7b7e2d-0fa3-475e-9360-06850b7e22cf" +
                  u,
                target: "_blank",
                className:
                  "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-cyan-500 transition-all group",
                children: [
                  (0, n.jsx)("span", {
                    className: "group-hover:scale-125 transition-all mr-2",
                    children: "→",
                  }),
                  " ",
                  "Team License 50 users – $650",
                ],
              }),
            }),
            (0, n.jsx)("div", {
              className: "my-4 text-center",
              children: (0, n.jsxs)("a", {
                href: "/branding",
                target: "_blank",
                className:
                  "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-cyan-500 transition-all group",
                children: [
                  (0, n.jsx)("span", {
                    className: "group-hover:scale-125 transition-all mr-2",
                    children: "→",
                  }),
                  " ",
                  "Custom Branding Package – $49",
                ],
              }),
            }),
            (0, n.jsxs)("div", {
              className:
                "text-center border border-green-200 bg-green-100 text-sm rounded-md py-1 dark:bg-green-900 dark:border-green-600",
              children: [
                (0, n.jsx)("b", { children: "NEW!" }),
                " You can now host a Custom Deployment for your team/organization.",
                " ",
                (0, n.jsx)("a", {
                  className: "text-blue-500 dark:text-blue-400 hover:underline",
                  href: "https://webmind.app/custom",
                  target: "_blank",
                  children: (0, n.jsx)("b", { children: "Learn more here →" }),
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "text-xs text-gray-500 text-center my-4",
              children: [
                (0, n.jsx)("a", {
                  target: "_blank",
                  href: "/privacy",
                  children: "Privacy Policy",
                }),
                " | ",
                (0, n.jsx)("a", {
                  target: "_blank",
                  href: "/terms",
                  children: "Terms of Service",
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "mt-8 px-4 flex items-center justify-center",
              children: (0, n.jsx)("a", {
                href: "https://www.producthunt.com/posts/webmind?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-webmind",
                target: "_blank",
                children: (0, n.jsx)("img", {
                  src: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=383464&theme=light",
                  alt: "webmind.app - A better UI for ChatGPT | Product Hunt",
                  style: { width: "250px", height: "54px" },
                  width: 250,
                  height: 54,
                }),
              }),
            }),
            (0, n.jsx)("div", {
              className: "mt-2 px-4 flex items-center justify-center",
              children: (0, n.jsx)("a", {
                href: "https://www.producthunt.com/posts/webmind?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-webmind",
                target: "_blank",
                children: (0, n.jsx)("img", {
                  src: "https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=383464&theme=light&period=daily",
                  alt: "webmind.app - A better UI for ChatGPT | Product Hunt",
                  style: { width: "250px", height: "54px" },
                  width: 250,
                  height: 54,
                }),
              }),
            }),
            (0, n.jsx)("div", {
              className: "mt-8",
              children: (0, n.jsx)(v.Z, {}),
            }),
            (0, n.jsx)("div", {
              className: "mt-8",
              children: (0, n.jsx)(w.Z, {}),
            }),
          ],
        });
      }
      function tb(e) {
        let { verifyLicenseKey: t, licenseVerified: s } = e,
          [r, i] = (0, l.useState)(!1),
          [a, o] = (0, l.useState)(!1),
          [c, u] = (0, l.useState)(""),
          [x, h] = (0, l.useState)(!1),
          [m, f] = (0, l.useState)("");
        (0, l.useEffect)(() => {
          "#thankyou" === window.location.hash &&
            ((window.location.hash = ""),
            i(!0),
            setTimeout(() => {
              o(!0);
            }, 800));
        }, []),
          (0, l.useEffect)(() => {
            !0 === s && i(!1);
          }, [s]);
        let g = async () => {
          h(!0);
          let e = await t(c);
          h(!1), e ? i(!1) : f("Sorry, that license key is invalid.");
        };
        return (0, n.jsxs)(d.Z, {
          wide: !0,
          open: r,
          setOpen: i,
          showCloseButton: !1,
          children: [
            (0, n.jsx)("h2", {
              className: "text-center text-xl font-bold",
              children: "\uD83C\uDF89 Thank you for your purchase!",
            }),
            (0, n.jsxs)("div", {
              className: "my-2",
              children: [
                "You will receive a receipt and a ",
                (0, n.jsx)("b", { children: "license key" }),
                " in your email shortly. Enter your license key here to save it:",
              ],
            }),
            (0, n.jsx)("div", {
              className: "my-4",
              children: (0, n.jsx)("input", {
                type: "text",
                disabled: x,
                placeholder: "Enter your license key here",
                className:
                  "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700",
                value: c,
                onChange: (e) => u(e.target.value),
                onKeyDown: (e) => {
                  "Enter" === e.key && (e.preventDefault(), g());
                },
              }),
            }),
            m
              ? (0, n.jsx)("div", {
                  className: "text-sm text-center text-red-500",
                  children: m,
                })
              : null,
            (0, n.jsx)("div", {
              className: "my-2 text-center",
              children: (0, n.jsxs)("button", {
                onClick: g,
                className:
                  "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-400",
                disabled: x,
                children: [
                  (0, n.jsx)(N.bzc, { className: "w-4 h-4" }),
                  (0, n.jsx)("span", { children: "Activate" }),
                ],
              }),
            }),
            (0, n.jsxs)("details", {
              className: "my-4",
              children: [
                (0, n.jsx)("summary", {
                  className: " text-center",
                  children: (0, n.jsx)("h2", {
                    className:
                      "text-center text-xl font-bold cursor-pointer hover:underline inline text-red-500",
                    children:
                      "\uD83D\uDC49 Don't see the receipt email? Click here.",
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: "my-4",
                  children: [
                    "There is a current temporary issue with our payment processor",
                    " ",
                    (0, n.jsx)("b", { children: "Lemon Squeezy" }),
                    " that causes the receipt emails to be lost for some customers. This happen more frequently with ",
                    (0, n.jsx)("b", { children: "PayPal" }),
                    " users.",
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "my-4",
                  children: [
                    "If you ",
                    (0, n.jsx)("b", { children: "have been charged" }),
                    " but still don't see the receipt email, please send your ",
                    (0, n.jsx)("b", { children: "Transaction ID" }),
                    " or your bank transaction detail to ",
                    (0, n.jsx)("b", { children: "hello@lemonsqueezy.com" }),
                    " and CC ",
                    (0, n.jsx)("b", { children: "support@webmind.app" }),
                    " ",
                    ". We will check this for you ASAP.",
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "my-4 text-center",
                  children: (0, n.jsx)("a", {
                    className: "text-blue-500 font-semibold hover:underline",
                    href: "mailto:hello@lemonsqueezy.com?cc=support@webmind.app&subject=Receipt%20and%20License%20Key%20not%20received&body=Hi%20Lemon%20Squeezy%20and%20webmind.app%2C%0D%0A%0D%0AI%20purchased%20a%20license%20key%20from%20webmind.app%20via%20Lemon%20Squeezy%20but%20still%20have%20not%20received%20a%20license%20key%20and%20a%20receipt.%0D%0A%0D%0AMy%20transaction%20ID%20is%3A%20%7B%7Byour%20transaction%20ID%20here%7D%7D%0D%0A%0D%0APlease%20help%20check%20this.%0D%0A%0D%0AThanks",
                    children:
                      "\uD83D\uDC49 Click here to open your Email client with prefilled content",
                  }),
                }),
                (0, n.jsx)("div", {
                  className: "my-4",
                  children: "Very sorry about this inconvenience!",
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "my-2 text-center",
              children: (0, n.jsx)("button", {
                onClick: () => i(!1),
                className:
                  "text-blue-500 hover:underline disabled:text-gray-400",
                disabled: x,
                children: "I'll activate later",
              }),
            }),
            a &&
              (0, n.jsx)("div", {
                className: "flex items-center justify-center",
                children: (0, n.jsx)(ew.Z, {}),
              }),
          ],
        });
      }
      s(50456);
      var ty = s(91655),
        tj = s(91799),
        tv = s(80243);
      let tw = (0, i.eK)("useKeyboardShortcuts");
      function tN() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return t.filter(Boolean).join(" ");
      }
      function tk(e) {
        let { showNav: t = !0, renderNav: s = () => {}, children: r } = e,
          [i, a] = (0, l.useState)(!1),
          [o, c] = (0, l.useState)(null),
          [d] = tw({ sidebar: "B" }),
          [u, x] = (0, l.useState)(!0),
          h = !i;
        return (
          (0, I.bx)((e) => {
            let { event: t, isMac: s } = e;
            (!s || t.metaKey) &&
              (s || t.ctrlKey) &&
              t.key.toUpperCase() === d.sidebar.toUpperCase() &&
              (t.preventDefault(), a((e) => !e));
          }),
          (0, l.useEffect)(() => {
            let e = () => {
              x(window.innerWidth > 1024);
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          t
            ? (0, n.jsx)(n.Fragment, {
                children: (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsxs)("div", {
                      className: "lg:hidden",
                      children: [
                        (0, n.jsx)("button", {
                          onClick: () => {
                            a(!1);
                          },
                          className: tN(
                            "fixed z-40 left-0 top-0 w-full h-full bg-gray-600 bg-opacity-75 opacity-100 transition duration-300",
                            !i && "!opacity-0 pointer-events-none"
                          ),
                        }),
                        (0, n.jsxs)("div", {
                          className: tN(
                            "fixed top-0 left-0 bottom-0 z-40 flex transition duration-300 pointer-events-none",
                            !i && "-translate-x-full"
                          ),
                          children: [
                            (0, n.jsxs)("div", {
                              className:
                                "relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pointer-events-auto",
                              children: [
                                (0, n.jsx)("div", {
                                  className:
                                    "absolute top-0 right-0 -mr-12 pt-2",
                                  children: (0, n.jsxs)("button", {
                                    type: "button",
                                    className:
                                      "ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                    onClick: () => {
                                      a(!1);
                                    },
                                    children: [
                                      (0, n.jsx)("span", {
                                        className: "sr-only",
                                        children: "Close sidebar",
                                      }),
                                      (0, n.jsx)(tv, {
                                        className: "h-6 w-6 text-white",
                                        "aria-hidden": "true",
                                      }),
                                    ],
                                  }),
                                }),
                                u
                                  ? null
                                  : s({ sidebarOpen: i, setSidebarOpen: a }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: "w-14 flex-shrink-0",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: tN(
                        "hidden lg:-translate-x-full lg:fixed lg:inset-y-0 lg:flex lg:w-80 lg:flex-col z-40 transition duration-300",
                        h && "lg:!translate-x-0"
                      ),
                      children: u
                        ? s({ sidebarOpen: i, setSidebarOpen: a })
                        : null,
                    }),
                    (0, n.jsx)("div", {
                      onTouchMove: (e) => {
                        if (!o) return;
                        let t = e.touches[0].clientX - o;
                        t > 40 && a(!0);
                      },
                      onTouchStart: (e) => {
                        e.touches[0].clientX > 50 || c(e.touches[0].clientX);
                      },
                      onTouchEnd: () => {
                        c(null);
                      },
                      className: tN(
                        "flex flex-1 flex-col lg:pl-0 transition-all duration-300",
                        h && "lg:!pl-80"
                      ),
                      children: r({
                        desktopSidebarOpen: h,
                        sidebarOpen: i,
                        setSidebarOpen: a,
                      }),
                    }),
                  ],
                }),
              })
            : r({
                desktopSidebarOpen: !1,
                sidebarOpen: !1,
                setSidebarOpen: () => {},
              })
        );
      }
      var tC = s(7036);
      let tS = (0, i.eK)("useLicenseKey"),
        tT = (0, i.eK)("useAPIKey"),
        tA = (0, i.eK)("useDeletedChatIDs"),
        tD = (0, i.eK)("useLastVerifiedToken"),
        tP = () => "ch-" + (0, eD.Z)();
      function tI(e) {
        let { serverHostConfig: t } = e,
          s = (0, l.useRef)(tP()),
          [a, o] = tT(
            ((null == t ? void 0 : t.orgActive) &&
              !t.allowUserAPIKey &&
              (null == t ? void 0 : t.licenseToken)) ||
              ""
          ),
          [c, d] = (0, l.useState)(a),
          [u, x] = (0, l.useState)(!1),
          [m, p] = (0, l.useState)(""),
          [b, y] = (0, l.useState)([]),
          [j, v] = (0, l.useState)(s.current),
          [w, k] = (0, l.useState)([]),
          [C, S] = tS(""),
          [T, A] = (0, l.useState)(
            (null != t && !!t.managed && null != t && !!t.licenseToken) || null
          ),
          [D, P] = (0, l.useState)(!1),
          [E, O] = (0, l.useState)(!1),
          [L, _] = (0, l.useState)(!1),
          [K, F] = (0, l.useState)(!1),
          [M, B] = (0, l.useState)(0),
          [Z, R] = (0, l.useState)(t || { hosted: !1 }),
          [U, W] = (0, l.useState)(!1),
          [H, q] = (0, l.useState)(null),
          [X, G] = (0, l.useState)(null),
          [Y, J] = (0, l.useState)(!1),
          [V, Q] = tA([]),
          [$, ee] = (0, l.useState)(-1),
          [et, es] = tD(
            (null == t ? void 0 : t.managed)
              ? null == t
                ? void 0
                : t.licenseToken
              : null
          ),
          [en, el] = (0, l.useState)(!1),
          [ea, eo] = (0, l.useState)(!1),
          { syncStats: ec, scheduleSync: ed } = (0, z.m)();
        (0, l.useEffect)(() => {
          a.startsWith("encrypted-") || d(a);
        }, [a]),
          (0, l.useEffect)(() => {
            x(!0),
              em(),
              (null == t ? void 0 : t.managed) === !0 || ew(C),
              ex(),
              ed();
          }, []),
          (0, l.useEffect)(() => {
            let e = () => {
              "visible" === document.visibilityState && (U && W(!1), ed());
            };
            return (
              window.document.addEventListener("visibilitychange", e),
              () => {
                window.document.removeEventListener("visibilitychange", e);
              }
            );
          }, []),
          (0, l.useEffect)(() => {
            ef();
          }, [ec]);
        let ex = () => {
            if (!("serviceWorker" in navigator)) {
              console.log("Service worker not supported");
              return;
            }
            window.navigator.serviceWorker
              .register("/sw.js", { scope: "." })
              .then(
                function (e) {
                  console.log(
                    "Service Worker registration successful with scope: ",
                    e.scope
                  );
                },
                function (e) {
                  console.log("Service Worker registration failed: ", e);
                }
              );
          },
          eh = (0, l.useCallback)(() => {
            if (window.location.hash.startsWith("#chat=")) {
              let e = window.location.hash.split("=")[1],
                t = w.find((t) => t.id === e);
              t && (v(t.id), p(t.title), ee(-1));
            }
          }, [w]);
        (0, l.useEffect)(
          () => (
            w.length && eh(),
            window.addEventListener("hashchange", eh),
            () => window.removeEventListener("hashchange", eh)
          ),
          [w, eh]
        ),
          (0, l.useEffect)(() => {
            (0, i.cF)().setItem("TM_useChatList", JSON.stringify(w));
          }, [w]),
          (0, l.useEffect)(() => {
            if (!m) return;
            let e = (0, i.cF)().getItem("CHAT_" + j),
              t = JSON.parse(e),
              s = { ...t, chatTitle: m, syncedAt: null };
            (0, i.cF)().setItem("CHAT_" + j, JSON.stringify(s)),
              k((e) => e.map((e) => (e.id === j ? { ...e, title: m } : e)));
          }, [m]);
        let em = async () => {
            if (Z.hosted) return;
            let e = window.location.hostname;
            if ("www.webmind.app" !== e)
              try {
                let e = await fetch("/config.json"),
                  t = await e.json();
                R(t);
              } catch (e) {
                console.error(e);
              }
          },
          ef = () => {
            try {
              let e = JSON.parse((0, i.cF)().getItem("TM_useChatList") || "[]"),
                t = e.filter(
                  (e, t, s) => t === s.findIndex((t) => t.id === e.id)
                );
              k(t);
            } catch (e) {
              console.error(e);
            }
          },
          eg = (e) => {
            (s.current = tP()), T && k((t) => [e, ...t]);
          },
          ep = (e) => {
            let t = s.current;
            window.history.replaceState(void 0, void 0, "#chat=" + t),
              e
                ? ((0, i.cF)().setItem("CHAT_" + t, JSON.stringify(e)),
                  ee(e.messages.length - 1),
                  p(e.chatTitle),
                  y(e.messages),
                  eg({ ...e, id: t }))
                : (p(""), y([]), ee(-1)),
              v(t);
          },
          eb = (e, t) => {
            let s = JSON.parse((0, i.cF)().getItem("CHAT_" + e));
            (0, i.cF)().setItem(
              "CHAT_" + e,
              JSON.stringify({ ...s, chatTitle: t, syncedAt: null })
            ),
              e === j && p(t),
              k((s) =>
                s.map((s) =>
                  s.id === e ? { ...s, title: t, syncedAt: null } : s
                )
              ),
              ed();
          },
          ey = (e) => {
            let t = e.id,
              s = (0, i.cF)().getItem("CHAT_" + t),
              n = JSON.parse(s),
              r = {
                ...n,
                favoritedAt: n.favoritedAt ? null : new Date(),
                syncedAt: null,
              };
            (0, i.cF)().setItem("CHAT_" + t, JSON.stringify(r)),
              k((e) =>
                e.map((e) =>
                  e.id === t ? { ...e, favoritedAt: r.favoritedAt } : e
                )
              ),
              ed();
          },
          ej = (e) => {
            Q((t) => [...t, e]),
              k((t) => t.filter((t) => t.id !== e)),
              ep(),
              setTimeout(() => {
                (0, i.cF)().removeItem("CHAT_" + e);
              }, 100),
              ed();
          },
          ev = (e) => {
            p(e);
          },
          ew = async (e) => {
           A(true); 
           return;
            try {
              let t = await fetch("https://www.webmind.app/api/license", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ key: e }),
              });
              if (500 === t.status) {
                await eN();
                return;
              }
              if (t.status >= 400) {
                let e = await t.json();
                console.error(e), A(!1);
                return;
              }
              if (!t.ok) {
                console.error(t), A(!1);
                return;
              }
              let s = await t.json();
              try {
                let e = await (0, I.uM)(s.token);
                es(s.token), G(e);
              } catch (e) {
                console.error(e), A(!1);
                return;
              }
              return S(e), A(!0), !0;
            } catch (e) {
              console.error(e), await eN();
            }
          },
          eN = async () => {
            if (!et) {
              A(!1);
              return;
            }
            try {
              let e = await (0, I.uM)(et);
              G(e), A(!0);
            } catch (e) {
              console.error(e), A(!1);
            }
          },
          ek = (e) => {
            y(e);
          },
          eC = (e) => {
            k((t) =>
              t.map((t) => {
                var s;
                return t.id === j
                  ? {
                      ...t,
                      updatedAt: Date.now(),
                      preview:
                        (null == e
                          ? void 0
                          : null === (s = e.content) || void 0 === s
                          ? void 0
                          : s.substring(0, 50)) || "",
                    }
                  : t;
              })
            ),
              "assistant" === e.role && ed();
            let t = Math.floor((Date.now() - M) / 1e3);
            b.length > 1 && !T && t > 120 && (F(!0), B(Date.now()));
          },
          eS = () => {
            if (Z.allowSubscriptions) {
              var e;
              null ===
                (e = window.document.getElementById("org-login-button")) ||
                void 0 === e ||
                e.click();
            } else el(!0);
          },
          eT = () => {
            _(!0);
          },
          eA = (e) => {
            k((t) => t.filter((t) => !e.includes(t.id))),
              setTimeout(() => {
                e.forEach((e) => {
                  (0, i.cF)().removeItem("CHAT_" + e);
                });
              }, 100);
          },
          eD = (0, l.useMemo)(() => {
            try {
              let e = (0, i.cF)().getItem("CHAT_" + j);
              if (e) {
                let t = JSON.parse(e);
                return t;
              }
            } catch (e) {
              console.error(e);
            }
          }, [j]);
        return (0, n.jsxs)("div", {
          children: [
            Z.hosted
              ? (0, n.jsx)(
                  r.Z,
                  { showNotification: U, hostConfig: Z },
                  "hosted"
                )
              : (0, n.jsx)(r.Z, { showNotification: U }, "cloud"),
            (0, n.jsx)(tk, {
              showNav: (0, I.N7)("navBar", Z.chatFeatures),
              renderNav: (e) => {
                let { sidebarOpen: t, setSidebarOpen: s } = e;
                return (0, n.jsx)(eQ, {
                  chatID: j,
                  chats: w,
                  onDeleteChat: ej,
                  onDeleteChats: eA,
                  onEditChatTitle: eb,
                  onNewChatRequested: ep,
                  onChatSelected: (e) => {
                    window.history.replaceState(
                      void 0,
                      void 0,
                      "#chat=" + e.id
                    ),
                      v(e.id),
                      p(e.title),
                      ee(-1),
                      s(!1);
                  },
                  sidebarOpen: t,
                  setSidebarOpen: s,
                  licenseVerified: T,
                  setLicenseVerified: A,
                  setOpenBuy: P,
                  setOpenLicenseKey: O,
                  onOpenSettings: eT,
                  hostConfig: Z,
                  onToggleFavorite: ey,
                  licensePayload: X,
                  setOpenBackupSync: J,
                  
                  decryptedApiKey: c,
                  setOpenDecrypt: eo,
                });
              },
              children: (e) => {
                let {
                  desktopSidebarOpen: s,
                  sidebarOpen: r,
                  setSidebarOpen: l,
                } = e;
                return (0, n.jsxs)("main", {
                  className: "relative",
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "hide-when-print sticky top-0 z-30 bg-white dark:bg-zinc-700 backdrop-blur",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "flex absolute left-1 top-0 bottom-0 items-center justify-center",
                          children: (0, I.N7)("navBar", Z.chatFeatures)
                            ? (0, n.jsxs)("button", {
                                type: "button",
                                className:
                                  "inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:hover:text-gray-100",
                                onClick: (e) => {
                                  e.preventDefault(),
                                    e.stopPropagation(),
                                    l((e) => !e);
                                },
                                onTouchEnd: (e) => {
                                  e.preventDefault(),
                                    e.stopPropagation(),
                                    l((e) => !e);
                                },
                                children: [
                                  (0, n.jsx)("span", {
                                    className: "sr-only",
                                    children: "Open sidebar",
                                  }),
                                  (0, n.jsx)(tj, {
                                    className: "h-6 w-6",
                                    "aria-hidden": "true",
                                  }),
                                ],
                              })
                            : null,
                        }),
                        Z.hosted
                          ? null
                          : (0, n.jsx)("div", {
                              className:
                                "absolute right-2 top-0 bottom-0 flex items-center justify-center",
                              children: u
                                ? (0, n.jsx)("button", {
                                    type: "button",
                                    className:
                                      "inline-flex items-center justify-center rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 py-2 px-2 space-x-2 text-sm",
                                    onClick: () => P(!0),
                                    children: (0, n.jsx)(N.WYw, {
                                      className: "h-6 w-6 text-red-500",
                                      "aria-hidden": "true",
                                    }),
                                  })
                                : null,
                            }),
                        u
                          ? (0, n.jsx)(ty.Z, {
                              chatID: j,
                              model: H,
                              chatTitle: m,
                              messages: b,
                              showCostEstimation: !Z.managed,
                            })
                          : (0, n.jsx)("div", {
                              className:
                                "text-center py-4 font-semibold text-gray-500 flex items-center justify-center",
                              children: (0, n.jsx)(f.Z, {}),
                            }),
                      ],
                    }),
                    Z.hosted
                      ? (0, n.jsx)("div", {
                          className:
                            "p-6 sm:p-10 flex items-center justify-center",
                          children: (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  "flex items-center justify-center space-x-2",
                                children: [
                                  (0, n.jsx)("img", {
                                    src: Z.logoURL || "/favicon-192x192.png",
                                    alt: Z.brand,
                                    className: "rounded-lg w-12 h-12",
                                  }),
                                  (0, n.jsxs)("div", {
                                    className:
                                      "font-semibold text-4xl sm:text-5xl text-black dark:text-white flex items-center justify-center gap-2",
                                    children: [
                                      (0, n.jsx)("span", { children: Z.brand }),
                                      Z.allowSubscriptions
                                        ? (0, n.jsx)("span", {
                                            className:
                                              "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm px-2 py-1 rounded-full font-semibold",
                                            children: "Beta",
                                          })
                                        : null,
                                    ],
                                  }),
                                ],
                              }),
                              (0, n.jsx)("div", {
                                className:
                                  "text-center my-4 font-light text-base sm:text-xl my-4 sm:my-6 text-black dark:text-white",
                                children: Z.tagline,
                              }),
                              Z.managed
                                ? null
                                : (0, n.jsx)(e$.Z, {
                                    onCompleted: () => {
                                      setError(""), textareaRef.current.focus();
                                    },
                                  }),
                            ],
                          }),
                        })
                      : null,
                    0 === w.length ? (0, n.jsx)(ei, { setChats: k }) : null,
                    u
                      ? (0, n.jsx)(e2, {
                          children: (e) => {
                            let { defaultMessages: r } = e;
                            return (0, n.jsx)(
                              tC.Z,
                              {
                                apiKey: c,
                                licenseKey: (null == Z ? void 0 : Z.managed)
                                  ? null == Z
                                    ? void 0
                                    : Z.orgID
                                  : C,
                                onUnauthorized:
                                  (null == Z ? void 0 : Z.managed) &&
                                  !(null == Z ? void 0 : Z.allowGuests)
                                    ? eS
                                    : null,
                                overrideSystemMessage:
                                  (null == Z ? void 0 : Z.managed) &&
                                  (null == Z ? void 0 : Z.allowUserAPIKey)
                                    ? null == Z
                                      ? void 0
                                      : Z.defaultSystemMessage
                                    : null,
                                setOpenBuy: P,
                                chatID: j,
                                chatTitle: m,
                                defaultMessages: r,
                                onMessagesChanged: ek,
                                onNewChatPersisted: eg,
                                onNewChatRequested: ep,
                                onChatTitleUpdated: ev,
                                onChatUpdated: eC,
                                includeChatID: Z.managed && !Z.allowUserAPIKey,
                                showBrand: !Z.hosted,
                                showEnterAPIKey:
                                  (!Z.hosted && !Z.managed) ||
                                  Z.allowUserAPIKey,
                                showChangeAPIKey:
                                  Z.managed && Z.allowUserAPIKey,
                                onModelChanged: q,
                                onNotification: W,
                                preloadChatData: eD,
                                defaultEdittingIndex: $,
                                botAvatar: Z ? Z.logoURL : void 0,
                                completionEndpoint:
                                  Z.managed && !Z.allowUserAPIKey
                                    ? "/api/hosted/completions2"
                                    : void 0,
                                withSidebar: s,
                                onChatSelected: (e) => {
                                  window.history.replaceState(
                                    void 0,
                                    void 0,
                                    "#chat=" + e.id
                                  ),
                                    v(e.id),
                                    p(e.title),
                                    ee(-1);
                                },
                                useOrgDefaultModelSettings: Boolean(
                                  null == t ? void 0 : t.useDefaultModelSettings
                                ),
                                orgDefaultModel: (
                                  null == t ? void 0 : t.useDefaultModelSettings
                                )
                                  ? null == t
                                    ? void 0
                                    : t.defaultModel
                                  : "",
                                welcomeMessage:
                                  null == Z ? void 0 : Z.welcomeMessage,
                                chatFeatures:
                                  null == Z ? void 0 : Z.chatFeatures,
                                orgPrompts:
                                  null == t ? void 0 : t.systemPrompts,
                              },
                              j
                            );
                          },
                        })
                      : null,
                    (0, n.jsx)(tb, {
                      licenseVerified: T,
                      
                    }),
                  ],
                });
              },
            }),
            (0, n.jsx)(tp, { setOpenLicenseKey: O, open: D, setOpen: P }),
            (0, n.jsx)(eu, {
              open: E,
              setOpen: O,
              setOpenBuy: P,
              setLicenseVerified: A,
              
            }),
            (0, n.jsx)(e9, {
              open: K,
              setOpen: F,
              setOpenLicenseKey: O,
              setOpenBuy: P,
            }),
            u ? (0, n.jsx)(e8, {}) : null,
            (0, n.jsx)(tf, {
              hostConfig: Z,
              open: L,
              setOpen: _,
              chats: w,
              setChats: k,
              apiKey: c,
              setOpenBackupSync: J,
            }),
            (0, n.jsx)(er, { open: Y, setOpen: J, licensePayload: X }),
            (0, n.jsx)(e4, { onLoaded: ef }),
            (0, n.jsx)(h, {
              decryptedApiKey: c,
              setDecryptedApiKey: d,
              open: ea,
              setOpen: eo,
            }),
            Z.managed
              ? (0, n.jsx)(g, {
                  open: en,
                  setOpen: el,
                  hostConfig: Z,
                  orgActive: Z.orgActive,
                })
              : null,
            (0, n.jsx)("div", { id: "check-123 hidden" }),
          ],
        });
      }
    },
    42480: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        774, 445, 617, 556, 228, 260, 662, 874, 714, 982, 561, 574, 220, 955,
        697, 888, 179,
      ],
      function () {
        return e((e.s = 75557));
      }
    ),
      (_N_E = e.O());
  },
]);
