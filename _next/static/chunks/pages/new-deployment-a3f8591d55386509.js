(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [806],
  {
    33029: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/new-deployment",
        function () {
          return n(1804);
        },
      ]);
    },
    24461: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var s = n(85893);
      function i() {
        return (0, s.jsxs)("svg", {
          className: "animate-spin h-5 w-5",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("circle", {
              className: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "4",
            }),
            (0, s.jsx)("path", {
              className: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
            }),
          ],
        });
      }
    },
    32027: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = n(85893),
        i = n(67294),
        a = n(24461);
      let r = "Something went wrong. Please try again.";
      function l() {
        let [e, t] = (0, i.useState)(""),
          [n, l] = (0, i.useState)(""),
          [o, c] = (0, i.useState)(""),
          [d, m] = (0, i.useState)(""),
          [x, g] = (0, i.useState)(""),
          [h, u] = (0, i.useState)(""),
          [p, y] = (0, i.useState)(!1),
          [f, b] = (0, i.useState)(!1),
          [j, v] = (0, i.useState)(null),
          [w, k] = (0, i.useState)(!1),
          N = async () => {
            b(!0), v("");
            try {
              let t = await fetch("/api/hosted/orgs", {
                body: JSON.stringify({
                  name: e,
                  tagline: n,
                  logoURL: o,
                  subdomain: h,
                  adminName: d,
                  adminEmail: x,
                }),
                headers: { "Content-Type": "application/json" },
                method: "POST",
              });
              if (t.status >= 400) {
                let e = await t.json();
                v(e.userMessage || r), b(!1);
                return;
              }
              if (!t.ok) {
                v(r), b(!1);
                return;
              }
              k(!0);
            } catch (e) {
              v(r), console.error(e);
            }
            b(!1);
          };
        return (0, s.jsx)("div", {
          children: w
            ? (0, s.jsxs)("div", {
                className: "text-center",
                children: [
                  (0, s.jsx)("h2", {
                    className: "text-xl font-semibold mt-8 mb-2",
                    children: "\uD83D\uDCE9 One more step!",
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Please check your email at ",
                      (0, s.jsx)("b", { children: x }),
                      " to verify your new chat instance.",
                    ],
                  }),
                  (0, s.jsx)("div", {
                    children:
                      "Make sure to check your spam folder if you don't see it in your inbox.",
                  }),
                ],
              })
            : (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("h2", {
                    className: "text-xl font-semibold mt-8 mb-2",
                    children: "Your Info",
                  }),
                  (0, s.jsxs)("div", {
                    className: "my-4",
                    children: [
                      (0, s.jsx)("label", {
                        className: "text-sm font-semibold my-1 block",
                        children: "Admin Email *",
                      }),
                      (0, s.jsx)("div", {
                        className: "text-xs text-gray-500 my-1",
                        children:
                          'Email of the admin user. This will also be shown as the "reply-to" address in the user\'s verification email when they sign up/login.',
                      }),
                      (0, s.jsx)("div", {
                        children: (0, s.jsx)("input", {
                          disabled: f,
                          type: "email",
                          className:
                            "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
                          placeholder: "tony@webmind.app",
                          value: x,
                          onChange: (e) => g(e.target.value),
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "my-4",
                    children: [
                      (0, s.jsx)("label", {
                        className: "text-sm font-semibold my-1 block",
                        children: "Admin Name *",
                      }),
                      (0, s.jsx)("div", {
                        className: "text-xs text-gray-500 my-1",
                        children:
                          'Will be shown as the "Sender" in the user\'s verification email when they sign up/login.',
                      }),
                      (0, s.jsx)("div", {
                        children: (0, s.jsx)("input", {
                          disabled: f,
                          type: "text",
                          className:
                            "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
                          placeholder: "Tony Dinh",
                          value: d,
                          onChange: (e) => m(e.target.value),
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("h2", {
                    className: "text-xl font-semibold mt-8 mb-2",
                    children: "Your Chat Instance",
                  }),
                  (0, s.jsxs)("div", {
                    className: "my-4",
                    children: [
                      (0, s.jsx)("label", {
                        className: "text-sm font-semibold my-1 block",
                        children: "Name * (Your Brand/Team/Community Name)",
                      }),
                      (0, s.jsx)("div", {
                        className: "text-xs text-gray-500 my-1",
                        children:
                          "Will be shown on the main screen and page title",
                      }),
                      (0, s.jsx)("div", {
                        children: (0, s.jsx)("input", {
                          disabled: f,
                          type: "text",
                          className:
                            "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
                          placeholder: "webmind.app",
                          value: e,
                          onChange: (e) => t(e.target.value),
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "my-4",
                    children: [
                      (0, s.jsx)("label", {
                        className: "text-sm font-semibold my-1 block",
                        children: "Tagline *",
                      }),
                      (0, s.jsx)("div", {
                        className: "text-xs text-gray-500 my-1",
                        children:
                          "Will be shown on the main screen and page title",
                      }),
                      (0, s.jsx)("div", {
                        children: (0, s.jsx)("input", {
                          disabled: f,
                          type: "text",
                          className:
                            "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
                          placeholder: "A better UI for ChatGPT",
                          value: n,
                          onChange: (e) => l(e.target.value),
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "my-4",
                    children: [
                      (0, s.jsx)("label", {
                        className: "text-sm font-semibold my-1 block",
                        children:
                          "Logo URL (Must be HTTPS, recommend: 256x256, )",
                      }),
                      (0, s.jsx)("div", {
                        className: "text-xs text-gray-500 my-1",
                        children:
                          "Will be shown on the main screen, app icon, browser bar icon.",
                      }),
                      (0, s.jsx)("div", {
                        children: (0, s.jsx)("input", {
                          disabled: f,
                          type: "text",
                          className:
                            "relative block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500",
                          placeholder: "https://webmind.app/logo.png",
                          value: o,
                          onChange: (e) => c(e.target.value),
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "my-4",
                    children: [
                      (0, s.jsxs)("label", {
                        className: "text-sm font-semibold my-1 block",
                        children: [
                          "Subdomain *",
                          " ",
                          (0, s.jsx)("span", {
                            className: "text-orange-500",
                            children:
                              "(You can change this to your domain later)",
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: "text-xs text-gray-500 my-1",
                        children:
                          "Your users will be able to access your instance at this domain.",
                      }),
                      (0, s.jsx)("div", {
                        children: (0, s.jsxs)("div", {
                          className:
                            "flex items-center justify-center  -space-x-px w-fit",
                          children: [
                            (0, s.jsx)("input", {
                              disabled: f,
                              type: "text",
                              className:
                                "relative block w-full rounded-tl-md rounded-bl-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500 text-right",
                              placeholder: "my-chat-app",
                              value: h,
                              onChange: (e) => u(e.target.value),
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "relative block w-full rounded-tr-md rounded-br-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500 p-1 bg-gray-100",
                              children: ".webmind.app",
                            }),
                          ],
                        }),
                      }),
                      !h || /^[a-z0-9-]+$/.test(h)
                        ? null
                        : (0, s.jsx)("div", {
                            className: "text-xs text-red-500 my-1",
                            children:
                              "Subdomain can only contain lowercase letters, numbers, and hyphens.",
                          }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "my-8 text-center",
                    children: [
                      j &&
                        (0, s.jsx)("div", {
                          className: "my-4 text-red-500 text-sm text-center",
                          children: j,
                        }),
                      (0, s.jsx)("div", {
                        className: "my-4",
                        children: (0, s.jsxs)("label", {
                          className:
                            "flex items-center justify-center gap-2 text-left text-sm",
                          children: [
                            (0, s.jsx)("input", {
                              type: "checkbox",
                              className: "form-checkbox h-5 w-5 text-blue-600",
                              checked: p,
                              onChange: (e) => y(e.target.checked),
                            }),
                            (0, s.jsxs)("span", {
                              children: [
                                "I have read and agreed with the",
                                " ",
                                (0, s.jsx)("a", {
                                  href: "https://webmind.app/terms#custom-deployment",
                                  target: "_blank",
                                  className: "text-blue-600",
                                  children: "Terms of Service",
                                }),
                                " ",
                                "and",
                                " ",
                                (0, s.jsx)("a", {
                                  href: "https://webmind.app/privacy#custom-deployment",
                                  target: "_blank",
                                  className: "text-blue-600",
                                  children: "Privacy Policy",
                                }),
                                " ",
                                "of the ",
                                (0, s.jsx)("b", {
                                  children:
                                    "webmind.app Custom Deployment Early Access",
                                }),
                                ".",
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsxs)("button", {
                        onClick: N,
                        type: "submit",
                        className:
                          "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",
                        disabled: f || !p,
                        children: [
                          f ? (0, s.jsx)(a.Z, {}) : "→",
                          (0, s.jsx)("span", {
                            children: "Create an Instance",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
        });
      }
    },
    51448: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = n(85893);
      n(67294);
      var i = n(9008),
        a = n.n(i);
      function r(e) {
        let {
            title: t,
            showNotification: n = !1,
            description:
              i = "Use ChatGPT with enhanced features like chat history search, folders, integrations, prompt library, etc.",
            hostConfig: r,
            overridePosterURL: l,
          } = e,
          o = r
            ? r.brand + " – " + r.tagline
            : "webmind.app — A better UI for ChatGPT",
          c = (n ? "(*) " : "") + (t || o),
          d = r
            ? r.hostname
              ? "https://" + r.hostname + "/"
              : "https://".concat(r.subdomain, ".webmind.app/")
            : "https://www.webmind.app",
          m =
            r &&
            ""
              .concat(d, "api/poster?name=")
              .concat(encodeURIComponent(r.name), "&tagline=")
              .concat(encodeURIComponent(r.tagline), "&logo=")
              .concat(r.logoURL),
          x =
            l ||
            (null == r ? void 0 : r.posterURL) ||
            m ||
            "https://www.webmind.app/poster-2.png",
          g = (null == r ? void 0 : r.description) || i,
          h = null == r ? void 0 : r.logoURL;
        return (0, s.jsxs)(a(), {
          children: [
            (0, s.jsx)("title", { children: c }),
            (0, s.jsx)("meta", { name: "title", content: c }),
            (0, s.jsx)("meta", { name: "description", content: g }),
            (0, s.jsx)("meta", { property: "og:type", content: "website" }),
            (0, s.jsx)("meta", { property: "og:url", content: d }),
            (0, s.jsx)("meta", { property: "og:title", content: c }),
            (0, s.jsx)("meta", { property: "og:description", content: g }),
            (0, s.jsx)("meta", { property: "og:image", content: x }),
            (0, s.jsx)("meta", {
              property: "twitter:card",
              content: "summary_large_image",
            }),
            (0, s.jsx)("meta", { property: "twitter:url", content: d }),
            (0, s.jsx)("meta", { property: "twitter:title", content: c }),
            (0, s.jsx)("meta", { property: "twitter:description", content: g }),
            (0, s.jsx)("meta", { property: "twitter:image", content: x }),
            (0, s.jsx)("meta", {
              name: "viewport",
              content: "initial-scale=1, viewport-fit=cover",
            }),
            (0, s.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "152x152",
              href: h || "/apple-icon-152x152.png",
            }),
            (0, s.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: h || "/apple-icon-180x180.png",
            }),
            (0, s.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "192x192",
              href: h || "/android-icon-192x192.png",
            }),
            (0, s.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: h || "/favicon-32x32.png",
            }),
            (0, s.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "96x96",
              href: h || "/favicon-96x96.png",
            }),
            (0, s.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: h || "/favicon-16x16.png",
            }),
            (0, s.jsx)("link", {
              rel: "manifest",
              href: r ? "/api/manifest" : "/manifest.json",
            }),
            (0, s.jsx)("meta", {
              name: "msapplication-TileColor",
              content: "#ffffff",
            }),
            (0, s.jsx)("meta", {
              name: "msapplication-TileImage",
              content: h || "/ms-icon-144x144.png",
            }),
            (0, s.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
          ],
        });
      }
    },
    1804: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return l;
          },
        });
      var s = n(85893),
        i = n(23544),
        a = n(51448),
        r = n(32027),
        l = !0;
      t.default = (0, i.withSuperJSONPage)(function () {
        return (0,
        s.jsx)(s.Fragment, { children: (0, s.jsxs)("div", { className: "min-h-screen", children: [(0, s.jsx)(a.Z, { title: "Create New Chat Instance", overridePosterURL: "https://webmind.app/custom-poster.png" }), (0, s.jsx)("div", { className: "py-10 ", children: (0, s.jsxs)("main", { className: "max-w-2xl mx-auto px-4", children: [(0, s.jsxs)("div", { className: "text-center my-10", children: [(0, s.jsx)("h1", { className: "text-4xl font-bold text-center my-2", children: "Create a new Chat Instance" }), (0, s.jsx)("span", { className: "text-xs bg-green-500 rounded-full px-3 py-1 text-white text-white font-semibold inline-block", children: "Early Access" })] }), (0, s.jsx)(r.Z, {})] }) })] }) });
      });
    },
    9008: function (e, t, n) {
      e.exports = n(5443);
    },
  },
  function (e) {
    e.O(0, [544, 774, 888, 179], function () {
      return e((e.s = 33029));
    }),
      (_N_E = e.O());
  },
]);
