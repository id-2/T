(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [180],
  {
    5936: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/create-self-hosted",
        function () {
          return n(22511);
        },
      ]);
    },
    51448: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var s = n(85893);
      n(67294);
      var i = n(9008),
        r = n.n(i);
      function a(e) {
        let {
            title: t,
            showNotification: n = !1,
            description:
              i = "Use ChatGPT with enhanced features like chat history search, folders, integrations, prompt library, etc.",
            hostConfig: a,
            overridePosterURL: o,
          } = e,
          l = a
            ? a.brand + " – " + a.tagline
            : "webmind.app — A better UI for ChatGPT",
          c = (n ? "(*) " : "") + (t || l),
          d = a
            ? a.hostname
              ? "https://" + a.hostname + "/"
              : "https://".concat(a.subdomain, ".webmind.app/")
            : "https://www.webmind.app",
          m =
            a &&
            ""
              .concat(d, "api/poster?name=")
              .concat(encodeURIComponent(a.name), "&tagline=")
              .concat(encodeURIComponent(a.tagline), "&logo=")
              .concat(a.logoURL),
          p =
            o ||
            (null == a ? void 0 : a.posterURL) ||
            m ||
            "https://www.webmind.app/poster-2.png",
          u = (null == a ? void 0 : a.description) || i,
          h = null == a ? void 0 : a.logoURL;
        return (0, s.jsxs)(r(), {
          children: [
            (0, s.jsx)("title", { children: c }),
            (0, s.jsx)("meta", { name: "title", content: c }),
            (0, s.jsx)("meta", { name: "description", content: u }),
            (0, s.jsx)("meta", { property: "og:type", content: "website" }),
            (0, s.jsx)("meta", { property: "og:url", content: d }),
            (0, s.jsx)("meta", { property: "og:title", content: c }),
            (0, s.jsx)("meta", { property: "og:description", content: u }),
            (0, s.jsx)("meta", { property: "og:image", content: p }),
            (0, s.jsx)("meta", {
              property: "twitter:card",
              content: "summary_large_image",
            }),
            (0, s.jsx)("meta", { property: "twitter:url", content: d }),
            (0, s.jsx)("meta", { property: "twitter:title", content: c }),
            (0, s.jsx)("meta", { property: "twitter:description", content: u }),
            (0, s.jsx)("meta", { property: "twitter:image", content: p }),
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
              href: a ? "/api/manifest" : "/manifest.json",
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
    22511: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var s = n(85893),
        i = n(67294),
        r = n(51448);
      let a = "Something went wrong. Please try again.";
      function o() {
        let [e, t] = (0, i.useState)(!1),
          [n, o] = (0, i.useState)(null),
          [l, c] = (0, i.useState)(null),
          [d, m] = (0, i.useState)(""),
          [p, u] = (0, i.useState)(""),
          [h, x] = (0, i.useState)(""),
          [f, g] = (0, i.useState)(!1),
          j = async () => {
            t(!0), o("");
            try {
              let e = new FormData();
              e.append("file", l);
              let n = await fetch("/api/upload", { method: "POST", body: e });
              if (n.status >= 400) {
                let e = await n.json();
                o(e.userMessage || a), t(!1);
                return;
              }
              if (!n.ok) {
                o(a), t(!1);
                return;
              }
              let s = await n.json(),
                i = new URLSearchParams({
                  imageName: s.newFilename,
                  imageShape: "rounded",
                  brand: d,
                  tagline: p,
                  licenseKey: h,
                }).toString();
              window.location.href = "/api/generate-package?".concat(i);
            } catch (e) {
              o(a), console.error("failed", e);
            }
          };
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsxs)("div", {
            className: "min-h-screen",
            children: [
              (0, s.jsx)(r.Z, { title: "Create Self Host Package" }),
              (0, s.jsx)("div", {
                className: "py-10 ",
                children: (0, s.jsxs)("main", {
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "my-10 text-center sticky top-0 bg-white dark:bg-zinc-800 p-4",
                      children: (0, s.jsx)("a", {
                        href: "/",
                        className: "text-blue-500 hover:underline",
                        children: "Go back to webmind.app",
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "px-6 max-w-xl mx-auto",
                      children: [
                        (0, s.jsx)("h1", {
                          className: "text-6xl text-center font-semibold my-10",
                          children: "Instructions",
                        }),
                        (0, s.jsxs)("div", {
                          className: "text-2xl text-center font-semibold my-10",
                          children: [
                            "While-labeling your self-hosted webmind.app.",
                            (0, s.jsx)("br", {}),
                            "With only 4 simple steps:",
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "text-base text-center my-10",
                          children: (0, s.jsxs)("ul", {
                            className: "list-decimal text-left space-y-4",
                            children: [
                              (0, s.jsxs)("li", {
                                children: [
                                  (0, s.jsx)("b", { children: "Step 1:" }),
                                  " Upgrade your current self-host version. You can download the latest version zip file from",
                                  " ",
                                  (0, s.jsx)("a", {
                                    href: "https://app.lemonsqueezy.com/my-orders/",
                                    target: "_blank",
                                    rel: "noreferrer noopener",
                                    className: "text-blue-500 hover:underline",
                                    children: (0, s.jsx)("b", {
                                      children: "Your Orders",
                                    }),
                                  }),
                                  " ",
                                  "page.",
                                ],
                              }),
                              (0, s.jsxs)("li", {
                                children: [
                                  (0, s.jsx)("b", { children: "Step 2:" }),
                                  " Download the custom branding package using the form below. You will receive a zip file.",
                                ],
                              }),
                              (0, s.jsxs)("li", {
                                children: [
                                  (0, s.jsx)("b", { children: "Step 3:" }),
                                  " Extract the zip file, then",
                                  " ",
                                  (0, s.jsx)("b", {
                                    children: "copy and overwrite",
                                  }),
                                  " the extracted contents to the",
                                  " ",
                                  (0, s.jsx)("b", {
                                    children: "root directory",
                                  }),
                                  " of your current webmind.app self-host site.",
                                ],
                              }),
                              (0, s.jsxs)("li", {
                                children: [
                                  (0, s.jsx)("b", { children: "Step 4:" }),
                                  " Redeploy your self-host site. It's done! \uD83C\uDF89 (You may also need to clear your browser's cache.)",
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: "text-base text-center my-10",
                          children:
                            "Note: When you upgrade your self-hosted version, you will need to repeat the above steps again.",
                        }),
                        (0, s.jsxs)("div", {
                          className: "space-y-4",
                          children: [
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("div", {
                                  className: "text-base font-semibold my-2",
                                  children:
                                    "Enter Custom Branding License Key (in your email)",
                                }),
                                (0, s.jsx)("div", {
                                  className: "text-xs mb-2",
                                  children:
                                    "This is the license key you received after you buy the Custom Branding package.",
                                }),
                                (0, s.jsx)("div", {
                                  children: (0, s.jsx)("input", {
                                    placeholder:
                                      "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
                                    className:
                                      "w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50",
                                    type: "text",
                                    value: h,
                                    onChange: (e) => x(e.target.value),
                                  }),
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("div", {
                                  className: "text-base font-semibold my-2",
                                  children:
                                    "Select your logo (Must be a square, recommended size: 512x512):",
                                }),
                                (0, s.jsx)("div", {
                                  children: (0, s.jsx)("input", {
                                    type: "file",
                                    accept: "image/*",
                                    onChange: (e) => c(e.target.files[0]),
                                  }),
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("div", {
                                  className: "text-base font-semibold my-2",
                                  children:
                                    "Your Brand Name (Recommend: 3 words or less)",
                                }),
                                (0, s.jsx)("div", {
                                  children: (0, s.jsx)("input", {
                                    className:
                                      "w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50",
                                    type: "text",
                                    placeholder: "webmind.app",
                                    value: d,
                                    onChange: (e) => m(e.target.value),
                                  }),
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("div", {
                                  className: "text-base font-semibold my-2",
                                  children:
                                    "Your Tagline (Recommend: 10 words or less)",
                                }),
                                (0, s.jsx)("div", {
                                  children: (0, s.jsx)("input", {
                                    placeholder: "A better UI for Chat GPT",
                                    className:
                                      "w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50",
                                    type: "text",
                                    value: p,
                                    onChange: (e) => u(e.target.value),
                                  }),
                                }),
                              ],
                            }),
                            (0, s.jsx)("hr", {}),
                            n
                              ? (0, s.jsx)("div", {
                                  className: "text-red-500",
                                  children: n,
                                })
                              : null,
                            (0, s.jsxs)("div", {
                              className: "text-center",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "my-4",
                                  children: (0, s.jsxs)("label", {
                                    className:
                                      "flex items-center justify-center gap-2",
                                    children: [
                                      (0, s.jsx)("input", {
                                        type: "checkbox",
                                        checked: f,
                                        onChange: (e) => g(e.target.checked),
                                      }),
                                      " ",
                                      (0, s.jsx)("span", {
                                        children:
                                          "I have read and understand the above",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, s.jsx)("button", {
                                  className:
                                    "inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-400",
                                  onClick: j,
                                  disabled: !l || e || !h || !d || !p || !f,
                                  children: "Download Self-host Package",
                                }),
                              ],
                            }),
                          ],
                        }),
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
    9008: function (e, t, n) {
      e.exports = n(5443);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 5936));
    }),
      (_N_E = e.O());
  },
]);
