(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [964],
  {
    58195: function (e, s, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin",
        function () {
          return i(76475);
        },
      ]);
    },
    76475: function (e, s, i) {
      "use strict";
      i.r(s),
        i.d(s, {
          __N_SSP: function () {
            return c;
          },
          default: function () {
            return m;
          },
        });
      var t = i(85893),
        n = i(23544),
        r = i(67294),
        a = i(18688);
      let l = "Something went wrong. Please try again.";
      function d() {
        for (var e = arguments.length, s = Array(e), i = 0; i < e; i++)
          s[i] = arguments[i];
        return s.filter(Boolean).join(" ");
      }
      function o(e) {
        var s, i, n, a;
        let { org: o } = e,
          [c, m] = (0, r.useState)((null == o ? void 0 : o.name) || ""),
          [g, x] = (0, r.useState)((null == o ? void 0 : o.tagline) || ""),
          [u, h] = (0, r.useState)((null == o ? void 0 : o.logoURL) || ""),
          [y, b] = (0, r.useState)((null == o ? void 0 : o.posterURL) || ""),
          [p, f] = (0, r.useState)((null == o ? void 0 : o.description) || ""),
          [v, k] = (0, r.useState)((null == o ? void 0 : o.apiKey) || ""),
          [j, w] = (0, r.useState)(
            (null == o
              ? void 0
              : null === (s = o.links) || void 0 === s
              ? void 0
              : s.faqs) || ""
          ),
          [N, X] = (0, r.useState)(
            (null == o
              ? void 0
              : null === (i = o.links) || void 0 === i
              ? void 0
              : i.privacy) || ""
          ),
          [S, z] = (0, r.useState)(
            (null == o
              ? void 0
              : null === (n = o.links) || void 0 === n
              ? void 0
              : n.terms) || ""
          ),
          [C, _] = (0, r.useState)(
            (null == o
              ? void 0
              : null === (a = o.links) || void 0 === a
              ? void 0
              : a.feedback) || ""
          ),
          [P, L] = (0, r.useState)((null == o ? void 0 : o.adminName) || ""),
          [W, T] = (0, r.useState)((null == o ? void 0 : o.adminEmail) || ""),
          [D, A] = (0, r.useState)(!1),
          [E, U] = (0, r.useState)(null),
          O = async () => {
            A(!0), U("");
            try {
              let e = await fetch("/api/hosted/orgs/" + o.id, {
                body: JSON.stringify({
                  name: c,
                  tagline: g,
                  logoURL: u,
                  posterURL: y,
                  description: p,
                  apiKey: v,
                  links: { faqs: j, privacy: N, terms: S, feedback: C },
                  adminName: P,
                  adminEmail: W,
                }),
                headers: { "Content-Type": "application/json" },
                method: "PUT",
              });
              if (e.status >= 400) {
                let s = await e.json();
                U(s.userMessage || l), A(!1);
                return;
              }
              if (!e.ok) {
                U(l), A(!1);
                return;
              }
              window.alert("Saved!"), window.location.reload();
            } catch (e) {
              U(l), console.error(e);
            }
            A(!1);
          },
          I = [
            "name",
            "tagline",
            "logoURL",
            "apiKey",
            "adminName",
            "adminEmail",
          ].every((e) => o[e] && o[e].length > 0);
        return (0, t.jsxs)("div", {
          children: [
            I
              ? null
              : (0, t.jsx)("div", {
                  className:
                    "text-orange-500 font-semibold px-4 text-center text-sm my-4",
                  children:
                    "Some required fields are missing. Please fill them out below to complete your Chat instance setup.",
                }),
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("h2", {
                  className: "text-xl font-semibold mt-8 mb-2",
                  children: "⚙️ Instance Settings",
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsxs)("div", {
                      className: "my-4",
                      children: [
                        (0, t.jsx)("label", {
                          className: d(
                            "text-sm font-semibold my-1 block",
                            v ? "" : "text-red-500"
                          ),
                          children: "OpenAI API Key *",
                        }),
                        (0, t.jsx)("div", {
                          className: "text-xs text-gray-500 my-1",
                          children: "Your users cannot see your API key.",
                        }),
                        (0, t.jsx)("div", {
                          children: (0, t.jsx)("input", {
                            disabled: D,
                            type: "password",
                            className:
                              "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
                            placeholder: "sk-XXXXXXXXXXXXXXXXXXXXXXXXX",
                            value: v,
                            onChange: (e) => k(e.target.value),
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "my-4",
                      children: [
                        (0, t.jsx)("label", {
                          className: d(
                            "text-sm font-semibold my-1 block",
                            P ? "" : "text-red-500"
                          ),
                          children: "Admin Name *",
                        }),
                        (0, t.jsx)("div", {
                          className: "text-xs text-gray-500 my-1",
                          children:
                            'Will be shown as the "Sender" in the user\'s verification email when they sign up/login.',
                        }),
                        (0, t.jsx)("div", {
                          children: (0, t.jsx)("input", {
                            disabled: D,
                            type: "text",
                            className:
                              "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
                            placeholder: "Tony Dinh",
                            value: P,
                            onChange: (e) => L(e.target.value),
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "my-4",
                      children: [
                        (0, t.jsx)("label", {
                          className: d(
                            "text-sm font-semibold my-1 block",
                            W ? "" : "text-red-500"
                          ),
                          children: "Admin Email *",
                        }),
                        (0, t.jsx)("div", {
                          className: "text-xs text-gray-500 my-1",
                          children:
                            'Will be shown as the "reply-to" address in the user\'s verification email when they sign up/login.',
                        }),
                        (0, t.jsx)("div", {
                          children: (0, t.jsx)("input", {
                            disabled: D,
                            type: "text",
                            className:
                              "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
                            placeholder: "tony@webmind.app",
                            value: W,
                            onChange: (e) => T(e.target.value),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)("h2", {
              className: "text-xl font-semibold mt-8 mb-2",
              children: "\uD83D\uDC51 Branding",
            }),
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsxs)("div", {
                  className: "my-4",
                  children: [
                    (0, t.jsx)("label", {
                      className: d(
                        "text-sm font-semibold my-1 block",
                        c ? "" : "text-red-500"
                      ),
                      children: "Name *",
                    }),
                    (0, t.jsx)("div", {
                      className: "text-xs text-gray-500 my-1",
                      children:
                        "Will be shown on the main screen and page title",
                    }),
                    (0, t.jsx)("div", {
                      children: (0, t.jsx)("input", {
                        disabled: D,
                        type: "text",
                        className:
                          "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
                        placeholder: "webmind.app",
                        value: c,
                        onChange: (e) => m(e.target.value),
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "my-4",
                  children: [
                    (0, t.jsx)("label", {
                      className: d(
                        "text-sm font-semibold my-1 block",
                        g ? "" : "text-red-500"
                      ),
                      children: "Tagline *",
                    }),
                    (0, t.jsx)("div", {
                      className: "text-xs text-gray-500 my-1",
                      children:
                        "Will be shown on the main screen and page title",
                    }),
                    (0, t.jsx)("div", {
                      children: (0, t.jsx)("input", {
                        disabled: D,
                        type: "text",
                        className:
                          "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
                        placeholder: "A better UI for ChatGPT",
                        value: g,
                        onChange: (e) => x(e.target.value),
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "my-4",
                  children: [
                    (0, t.jsx)("label", {
                      className: "text-sm font-semibold my-1 block",
                      children: "Description",
                    }),
                    (0, t.jsx)("div", {
                      className: "text-xs text-gray-500 my-1",
                      children:
                        "Will be shown in the link description on social media and on search engine.",
                    }),
                    (0, t.jsx)("div", {
                      children: (0, t.jsx)("input", {
                        disabled: D,
                        type: "text",
                        className:
                          "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
                        placeholder:
                          "Use ChatGPT with enhanced features like chat history search, folders, integrations, prompt library, etc.",
                        value: p,
                        onChange: (e) => f(e.target.value),
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "my-4",
                  children: [
                    (0, t.jsx)("label", {
                      className: "text-sm font-semibold my-1 block",
                      children: "Logo URL (Recommend: 256x256)",
                    }),
                    (0, t.jsx)("div", {
                      className: "text-xs text-gray-500 my-1",
                      children:
                        "Will be shown on the main screen, app icon, browser bar icon.",
                    }),
                    (0, t.jsx)("div", {
                      children: (0, t.jsx)("input", {
                        disabled: D,
                        type: "text",
                        className:
                          "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
                        placeholder: "https://webmind.app/logo.png",
                        value: u,
                        onChange: (e) => h(e.target.value),
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "my-4",
                  children: [
                    (0, t.jsx)("label", {
                      className: "text-sm font-semibold my-1 block",
                      children:
                        "Poster Image URL (Optional. Must be 2400x1256 if provided)",
                    }),
                    (0, t.jsx)("div", {
                      className: "text-xs text-gray-500 my-1",
                      children:
                        "Will be shown in the link thumbnail/preview on social media",
                    }),
                    (0, t.jsx)("div", {
                      children: (0, t.jsx)("input", {
                        disabled: D,
                        type: "text",
                        className:
                          "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
                        placeholder: "https://webmind.app/poster.png",
                        value: y,
                        onChange: (e) => b(e.target.value),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)("h2", {
              className: "text-xl font-semibold mt-8 mb-2",
              children: "\uD83D\uDD17 Links",
            }),
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsxs)("div", {
                  className: "my-4",
                  children: [
                    (0, t.jsx)("label", {
                      className: "text-sm font-semibold my-1 block",
                      children: "FAQs Link",
                    }),
                    (0, t.jsx)("div", {
                      className: "text-xs text-gray-500 my-1",
                      children: "Will be shown on the footer.",
                    }),
                    (0, t.jsx)("div", {
                      children: (0, t.jsx)("input", {
                        disabled: D,
                        type: "text",
                        className:
                          "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
                        placeholder: "https://webmind.app/faqs",
                        value: j,
                        onChange: (e) => w(e.target.value),
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "my-4",
                  children: [
                    (0, t.jsx)("label", {
                      className: "text-sm font-semibold my-1 block",
                      children: "Terms & Conditions Link",
                    }),
                    (0, t.jsx)("div", {
                      className: "text-xs text-gray-500 my-1",
                      children: "Will be shown on the footer.",
                    }),
                    (0, t.jsx)("div", {
                      children: (0, t.jsx)("input", {
                        disabled: D,
                        type: "text",
                        className:
                          "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
                        placeholder: "https://webmind.app/terms",
                        value: S,
                        onChange: (e) => z(e.target.value),
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "my-4",
                  children: [
                    (0, t.jsx)("label", {
                      className: "text-sm font-semibold my-1 block",
                      children: "Privacy Policy Link",
                    }),
                    (0, t.jsx)("div", {
                      className: "text-xs text-gray-500 my-1",
                      children: "Will be shown on the footer.",
                    }),
                    (0, t.jsx)("div", {
                      children: (0, t.jsx)("input", {
                        disabled: D,
                        type: "text",
                        className:
                          "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
                        placeholder: "https://webmind.app/privacy",
                        value: N,
                        onChange: (e) => X(e.target.value),
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "my-4",
                  children: [
                    (0, t.jsx)("label", {
                      className: "text-sm font-semibold my-1 block",
                      children: "Feedback Link",
                    }),
                    (0, t.jsx)("div", {
                      className: "text-xs text-gray-500 my-1",
                      children:
                        'Will be shown on feedback popup (clicking the "Send Feedback" button).',
                    }),
                    (0, t.jsx)("div", {
                      children: (0, t.jsx)("input", {
                        disabled: D,
                        type: "text",
                        className:
                          "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
                        placeholder: "mailto:support@webmind.app",
                        value: C,
                        onChange: (e) => _(e.target.value),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            E &&
              (0, t.jsx)("div", {
                className: "my-4 text-red-500 text-sm text-center",
                children: E,
              }),
            (0, t.jsx)("div", {
              className: "my-8 text-center",
              children: (0, t.jsx)("button", {
                onClick: O,
                type: "submit",
                className:
                  "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400",
                disabled: D,
                children: "Save Changes",
              }),
            }),
          ],
        });
      }
      var c = !0,
        m = (0, n.withSuperJSONPage)(function (e) {
          let { user: s, serverHostConfig: i, serverOrg: n, roles: r } = e;
          return (0, t.jsx)(a.Z, {
            user: s,
            serverHostConfig: i,
            serverOrg: n,
            roles: r,
            children: (e) => {
              let { org: s } = e;
              return (0, t.jsx)(o, { org: s });
            },
          });
        });
    },
  },
  function (e) {
    e.O(0, [445, 617, 556, 982, 544, 561, 5, 320, 774, 888, 179], function () {
      return e((e.s = 58195));
    }),
      (_N_E = e.O());
  },
]);
