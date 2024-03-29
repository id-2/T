(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [188],
  {
    97908: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/faqs",
        function () {
          return t(71808);
        },
      ]);
    },
    41365: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return m;
        },
      });
      var n = t(85893),
        o = t(67294),
        a = t(51356),
        i = t(63714),
        r = t(10395),
        l = t(24461),
        c = t(78672),
        d = t(54399);
      let u = "Something went wrong. Please try again.",
        h = (0, c.eK)("useLastVerifiedToken");
      function m(e) {
        let {
            showIntro: s = !0,
            source: t = "custom-deployment",
            autoFocus: c = !0,
          } = e,
          [m, y] = (0, o.useState)(!1),
          [p, f] = (0, o.useState)(null),
          [x, w] = (0, o.useState)(""),
          [v, b] = (0, o.useState)("gpt-4"),
          [g, j] = (0, o.useState)(null),
          [N, k] = h(null),
          T = (0, o.useRef)(null);
        (0, o.useEffect)(() => {
          c && T.current && T.current.focus();
        }, [T]);
        let q = async () => {
            y(!0), f(""), j(null);
            try {
              let e = await fetch((0, d.v9)() + "/api/faqbot", {
                body: JSON.stringify({
                  question: x,
                  model: v,
                  source: t,
                  lastVerifiedToken: N,
                }),
                headers: { "Content-Type": "application/json" },
                method: "POST",
              });
              if (429 === e.status) {
                f(
                  "Sorry, the FAQ bot is currently experiencing high demand. Please try again later."
                ),
                  y(!1);
                return;
              }
              if (e.status >= 400) {
                let s = await e.json();
                f(s.userMessage || u), y(!1);
                return;
              }
              if (!e.ok) {
                f(u), y(!1);
                return;
              }
              let s = await e.json();
              j(s),
                setTimeout(() => {
                  var e;
                  null === (e = T.current) || void 0 === e || e.focus();
                }, 200);
            } catch (e) {
              f(u), console.error(e);
            }
            y(!1);
          },
          I = (0, o.useMemo)(() => [i.Z, a.Z], []);
        return (0, n.jsxs)("div", {
          children: [
            s
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
                      ref: T,
                      disabled: m,
                      className:
                        "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:ring-1 focus:border-blue-500 sm:text-sm dark:bg-zinc-700",
                      placeholder: "Ask a question...",
                      value: x,
                      onChange: (e) => w(e.target.value),
                      onKeyDown: (e) => {
                        "Enter" === e.key && x && (e.preventDefault(), q());
                      },
                      maxLength: 200,
                    }),
                    (0, n.jsx)("div", {
                      className: "flex items-stretch gap-2 justify-center",
                      children: (0, n.jsxs)("button", {
                        onClick: q,
                        type: "submit",
                        className:
                          "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",
                        disabled: m || !x,
                        children: [
                          m ? (0, n.jsx)(l.Z, {}) : "→",
                          (0, n.jsx)("span", { children: "Ask" }),
                        ],
                      }),
                    }),
                  ],
                }),
                x
                  ? m
                    ? (0, n.jsx)("div", {
                        className: "text-sm text-gray-500 my-2",
                        children:
                          "Thinking... this may takes up to 20 seconds.",
                      })
                    : (0, n.jsxs)("div", {
                        className: "text-sm text-gray-500 my-2",
                        children: [x.length, "/200"],
                      })
                  : null,
                p &&
                  (0, n.jsx)("div", {
                    className:
                      "text-center text-red-500 text-sm font-semibold my-2",
                    children: p,
                  }),
                !m &&
                  g &&
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
                        children: g.question,
                      }),
                      (0, n.jsx)("div", {
                        className: "text-base font-semibold mb-2",
                        children: "\uD83D\uDCA1 Bot's answer:",
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "prose prose-sm max-w-full dark:prose-invert text-gray-900",
                        children: (0, n.jsx)(r.Z, {
                          children: g.answer,
                          remarkPlugins: I,
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
    89290: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return l;
        },
      });
      var n = t(85893),
        o = t(28368),
        a = t(40800),
        i = t(67798);
      let r = [
        {
          question: "Can I self-host webmind.app?",
          answer:
            "Yes. After you make a purchase, you will receive a link to download the static web app and the instruction how to deploy it on your own server. Note that you will only receive the compiled code of the app, the full source code is not available because the app is not open-source. You can deploy the app anywhere without having to update any code or settings.",
        },
        {
          question: "What is self-hosting?",
          answer:
            "Self-host means you deploy the same version of webmind.app on your own web hosting server and domain name for your personal use.",
        },
        {
          question: "Why self-hosting? What are the benefits?",
          answer:
            "Some people prefer to run the software on their own server for privacy and availability reasons. For example, if webmind.app becomes inaccessible in the future, you can still access your own version of webmind.app from your server without any problem. The self-host version can also be run locally like an app.",
        },
        {
          question: "What can I customize in the self-host version?",
          answer:
            "As of now, you cannot customize anything. You the self-host version will be exactly the same as the one you are using on webmind.app. I'm working on making it possible to set custom UI and branding soon. Stay tuned!",
        },
        {
          question: "Where can I deploy my self-host version?",
          answer:
            "Anywhere! You can deploy it on your own server, or on a static web cloud service like GitHub Pages, Cloudflare Pages, AWS S3, Vercel, Netlify, Heroku, etc. You can even run it on localhost.",
        },
        {
          question:
            "Do I have access to the full source code if I want to self-host?",
          answer:
            "No. The license key only grants you the permission to use and deploy the app on your own server. You do not have permissions to modify or redistribute the code. The full source code is not available for sale as the app is not open-source. You will only receive the compiled code of the app, you can deploy the app anywhere without having to update any code or settings.",
        },
        {
          question: "How do I receive updates for the self-host version?",
          answer:
            "As of now, you will have to manually download the latest version from the website and redeploy your app. New versions can be found as an attachment from your order page: https://app.lemonsqueezy.com/my-orders/ I'm working on making this process easier. Stay tuned!",
        },
        {
          question:
            "Do I still need a License Key and Open API Key to use the self-hosted version?",
          answer:
            "Yes. Both are needed, as the self-hosted version is exactly the same as the version you see on webmind.app. The License Key is needed in the self-host version. When you enter the license key, the app will connect to webmind.app's license server to verify your license.",
        },
        {
          question:
            "Can I let me team/community/customers use the self-host version?",
          answer:
            "You can, but keep in mind that they will also need a webmind.app License Key and OpenAI API Key in order to use it.",
        },
        {
          question:
            "Can I embed my License Key/API key to the self-host version somehow and let my team/community/customers use it?",
          answer:
            "No you can't, and you shouldn't. It's not safe to share your License Key and API Key to the public like that. The Static App Self-host version is meant for personal use. If you are looking to setup a custom deployment of webmind.app for your team/community/customers, please check out https://webmind.app/custom",
        },
        {
          question: "Can I have support on technical issues if I self-host?",
          answer:
            "Unfortunately, I cannot provide support on technical issues if you self-host. I'm working on a new offer to make the self-host process way easier. Stay tuned!",
        },
        {
          question:
            "Why don't you offer technical support for the self-hosted version?",
          answer:
            "The self-host version comes for free when you buy a license key. There are way too many possible technical issues that could happen with various tech stacks and server configurations that are not in my control. That's why I cannot offer technical support if you have problem with your self-hosted version.",
        },
        {
          question: "What permissions do I have with the self-host code?",
          answer: (0, n.jsxs)("ul", {
            className: "list-disc pl-4",
            children: [
              (0, n.jsx)("li", {
                children: "✅ You have access to the compiled code of the app.",
              }),
              (0, n.jsx)("li", {
                children:
                  "✅ You have permission to deploy and use the compiled code on your own server.",
              }),
              (0, n.jsx)("li", {
                children:
                  "❌ You do not have permissions to modify or redistribute the compiled code.",
              }),
              (0, n.jsx)("li", {
                children:
                  "❌ You do not have permissions to share or resell the compiled code.",
              }),
            ],
          }),
        },
      ];
      function l() {
        return (0, n.jsx)("div", {
          className: "",
          children: (0, n.jsx)("div", {
            className: "mx-auto max-w-7xl",
            children: (0, n.jsxs)("div", {
              className: "mx-auto max-w-4xl divide-y divide-gray-900/10",
              children: [
                (0, n.jsx)("h2", {
                  className: "text-2xl font-bold leading-10 tracking-tight ",
                  children: "Frequently asked questions",
                }),
                (0, n.jsx)("dl", {
                  className: "mt-4 space-y-6 divide-y divide-gray-900/10",
                  children: r.map((e) =>
                    (0, n.jsx)(
                      o.p,
                      {
                        as: "div",
                        className: "pt-6",
                        children: (s) => {
                          let { open: t } = s;
                          return (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)("dt", {
                                children: (0, n.jsxs)(o.p.Button, {
                                  className:
                                    "flex w-full items-start justify-between text-left ",
                                  children: [
                                    (0, n.jsx)("span", {
                                      className:
                                        "text-base font-semibold leading-7",
                                      children: e.question,
                                    }),
                                    (0, n.jsx)("span", {
                                      className: "ml-6 flex h-7 items-center",
                                      children: t
                                        ? (0, n.jsx)(a, {
                                            className: "h-6 w-6",
                                            "aria-hidden": "true",
                                          })
                                        : (0, n.jsx)(i, {
                                            className: "h-6 w-6",
                                            "aria-hidden": "true",
                                          }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, n.jsx)(o.p.Panel, {
                                as: "dd",
                                className: "mt-2 pr-12",
                                children: (0, n.jsx)("p", {
                                  className:
                                    "text-base leading-7 text-gray-500",
                                  children: e.answer,
                                }),
                              }),
                            ],
                          });
                        },
                      },
                      e.question
                    )
                  ),
                }),
              ],
            }),
          }),
        });
      }
    },
    71808: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return u;
          },
        });
      var n = t(85893),
        o = t(51448),
        a = t(41365),
        i = t(39590),
        r = t(89290),
        l = t(64019),
        c = t(82080),
        d = t(39026);
      function u() {
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("div", {
            className: "min-h-screen",
            children: [
              (0, n.jsx)(o.Z, { title: "FAQs about webmind.app" }),
              (0, n.jsx)("div", {
                className: "py-10 ",
                children: (0, n.jsxs)("main", {
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "my-10 text-center sticky top-0 bg-white dark:bg-zinc-800 p-4",
                      children: (0, n.jsx)("a", {
                        href: "/",
                        className: "text-blue-500 hover:underline",
                        children: "Go back to webmind.app",
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className: "px-6 max-w-2xl mx-auto",
                      children: [
                        (0, n.jsx)("h1", {
                          className:
                            "text-6xl font-bold text-center my-4 mb-10 mt-20",
                          children: "FAQs",
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
                              href: "https://www.webmind.app/faqs",
                              target: "_blank",
                              className: "text-blue-500 hover:underline",
                              children: "Terms of Service",
                            }),
                            ", and",
                            " ",
                            (0, n.jsx)("a", {
                              href: "https://www.webmind.app/faqs",
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
                        (0, n.jsx)(a.Z, {
                          showIntro: !1,
                          source: "webmind.app",
                        }),
                        (0, n.jsx)("hr", { className: "my-10" }),
                        (0, n.jsx)("h2", {
                          className:
                            "text-4xl font-bold text-center my-4 mb-10 mt-20",
                          children: "General FAQs",
                        }),
                        (0, n.jsx)(i.Z, {}),
                        (0, n.jsx)("h2", {
                          className:
                            "text-4xl font-bold text-center my-4 mb-10 mt-20",
                          children: "Self-host FAQs",
                        }),
                        (0, n.jsx)(r.Z, {}),
                        (0, n.jsx)("h2", {
                          className:
                            "text-4xl font-bold text-center my-4 mb-10 mt-20",
                          children: "Web Search FAQs",
                        }),
                        (0, n.jsx)(l.Z, {}),
                        (0, n.jsx)("h2", {
                          className:
                            "text-4xl font-bold text-center my-4 mb-10 mt-20",
                          children: "Token Usage FAQs",
                        }),
                        (0, n.jsx)(c.Z, {}),
                        (0, n.jsx)("h2", {
                          className:
                            "text-4xl font-bold text-center my-4 mb-10 mt-20",
                          children: "Cost Estimation FAQs",
                        }),
                        (0, n.jsx)(d.Z, {}),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [982, 955, 774, 888, 179], function () {
      return e((e.s = 97908));
    }),
      (_N_E = e.O());
  },
]);
