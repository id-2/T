(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [41],
  {
    40800: function (e, t, n) {
      let o = n(67294),
        s = o.forwardRef(function ({ title: e, titleId: t, ...n }, s) {
          return o.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: s,
                "aria-labelledby": t,
              },
              n
            ),
            e ? o.createElement("title", { id: t }, e) : null,
            o.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M18 12H6",
            })
          );
        });
      e.exports = s;
    },
    67798: function (e, t, n) {
      let o = n(67294),
        s = o.forwardRef(function ({ title: e, titleId: t, ...n }, s) {
          return o.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: s,
                "aria-labelledby": t,
              },
              n
            ),
            e ? o.createElement("title", { id: t }, e) : null,
            o.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 6v12m6-6H6",
            })
          );
        });
      e.exports = s;
    },
    18393: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/branding",
        function () {
          return n(44796);
        },
      ]);
    },
    89290: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var o = n(85893),
        s = n(28368),
        r = n(40800),
        i = n(67798);
      let a = [
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
          answer: (0, o.jsxs)("ul", {
            className: "list-disc pl-4",
            children: [
              (0, o.jsx)("li", {
                children: "✅ You have access to the compiled code of the app.",
              }),
              (0, o.jsx)("li", {
                children:
                  "✅ You have permission to deploy and use the compiled code on your own server.",
              }),
              (0, o.jsx)("li", {
                children:
                  "❌ You do not have permissions to modify or redistribute the compiled code.",
              }),
              (0, o.jsx)("li", {
                children:
                  "❌ You do not have permissions to share or resell the compiled code.",
              }),
            ],
          }),
        },
      ];
      function l() {
        return (0, o.jsx)("div", {
          className: "",
          children: (0, o.jsx)("div", {
            className: "mx-auto max-w-7xl",
            children: (0, o.jsxs)("div", {
              className: "mx-auto max-w-4xl divide-y divide-gray-900/10",
              children: [
                (0, o.jsx)("h2", {
                  className: "text-2xl font-bold leading-10 tracking-tight ",
                  children: "Frequently asked questions",
                }),
                (0, o.jsx)("dl", {
                  className: "mt-4 space-y-6 divide-y divide-gray-900/10",
                  children: a.map((e) =>
                    (0, o.jsx)(
                      s.p,
                      {
                        as: "div",
                        className: "pt-6",
                        children: (t) => {
                          let { open: n } = t;
                          return (0, o.jsxs)(o.Fragment, {
                            children: [
                              (0, o.jsx)("dt", {
                                children: (0, o.jsxs)(s.p.Button, {
                                  className:
                                    "flex w-full items-start justify-between text-left ",
                                  children: [
                                    (0, o.jsx)("span", {
                                      className:
                                        "text-base font-semibold leading-7",
                                      children: e.question,
                                    }),
                                    (0, o.jsx)("span", {
                                      className: "ml-6 flex h-7 items-center",
                                      children: n
                                        ? (0, o.jsx)(r, {
                                            className: "h-6 w-6",
                                            "aria-hidden": "true",
                                          })
                                        : (0, o.jsx)(i, {
                                            className: "h-6 w-6",
                                            "aria-hidden": "true",
                                          }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, o.jsx)(s.p.Panel, {
                                as: "dd",
                                className: "mt-2 pr-12",
                                children: (0, o.jsx)("p", {
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
    51448: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var o = n(85893);
      n(67294);
      var s = n(9008),
        r = n.n(s);
      function i(e) {
        let {
            title: t,
            showNotification: n = !1,
            description:
              s = "Use ChatGPT with enhanced features like chat history search, folders, integrations, prompt library, etc.",
            hostConfig: i,
            overridePosterURL: a,
          } = e,
          l = i
            ? i.brand + " – " + i.tagline
            : "webmind.app — A better UI for ChatGPT",
          c = (n ? "(*) " : "") + (t || l),
          u = i
            ? i.hostname
              ? "https://" + i.hostname + "/"
              : "https://".concat(i.subdomain, ".webmind.app/")
            : "https://www.webmind.app",
          d =
            i &&
            ""
              .concat(u, "api/poster?name=")
              .concat(encodeURIComponent(i.name), "&tagline=")
              .concat(encodeURIComponent(i.tagline), "&logo=")
              .concat(i.logoURL),
          f =
            a ||
            (null == i ? void 0 : i.posterURL) ||
            d ||
            "https://www.webmind.app/poster-2.png",
          h = (null == i ? void 0 : i.description) || s,
          p = null == i ? void 0 : i.logoURL;
        return (0, o.jsxs)(r(), {
          children: [
            (0, o.jsx)("title", { children: c }),
            (0, o.jsx)("meta", { name: "title", content: c }),
            (0, o.jsx)("meta", { name: "description", content: h }),
            (0, o.jsx)("meta", { property: "og:type", content: "website" }),
            (0, o.jsx)("meta", { property: "og:url", content: u }),
            (0, o.jsx)("meta", { property: "og:title", content: c }),
            (0, o.jsx)("meta", { property: "og:description", content: h }),
            (0, o.jsx)("meta", { property: "og:image", content: f }),
            (0, o.jsx)("meta", {
              property: "twitter:card",
              content: "summary_large_image",
            }),
            (0, o.jsx)("meta", { property: "twitter:url", content: u }),
            (0, o.jsx)("meta", { property: "twitter:title", content: c }),
            (0, o.jsx)("meta", { property: "twitter:description", content: h }),
            (0, o.jsx)("meta", { property: "twitter:image", content: f }),
            (0, o.jsx)("meta", {
              name: "viewport",
              content: "initial-scale=1, viewport-fit=cover",
            }),
            (0, o.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "152x152",
              href: p || "/apple-icon-152x152.png",
            }),
            (0, o.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: p || "/apple-icon-180x180.png",
            }),
            (0, o.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "192x192",
              href: p || "/android-icon-192x192.png",
            }),
            (0, o.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: p || "/favicon-32x32.png",
            }),
            (0, o.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "96x96",
              href: p || "/favicon-96x96.png",
            }),
            (0, o.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: p || "/favicon-16x16.png",
            }),
            (0, o.jsx)("link", {
              rel: "manifest",
              href: i ? "/api/manifest" : "/manifest.json",
            }),
            (0, o.jsx)("meta", {
              name: "msapplication-TileColor",
              content: "#ffffff",
            }),
            (0, o.jsx)("meta", {
              name: "msapplication-TileImage",
              content: p || "/ms-icon-144x144.png",
            }),
            (0, o.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
          ],
        });
      }
    },
    44796: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var o = n(85893),
        s = n(67294),
        r = n(51448),
        i = n(89290);
      function a() {
        let [e, t] = (0, s.useState)(!1);
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)("div", {
            className: "min-h-screen",
            children: [
              (0, o.jsx)(r.Z, { title: "Custom Branding for Self-host" }),
              (0, o.jsx)("div", {
                className: "py-10 ",
                children: (0, o.jsxs)("main", {
                  children: [
                    (0, o.jsx)("div", {
                      className:
                        "my-10 text-center sticky top-0 bg-white dark:bg-zinc-800 p-4",
                      children: (0, o.jsx)("a", {
                        href: "/",
                        className: "text-blue-500 hover:underline",
                        children: "Go back to webmind.app",
                      }),
                    }),
                    (0, o.jsxs)("div", {
                      className: "px-4 max-w-4xl mx-auto",
                      children: [
                        (0, o.jsx)("h1", {
                          className:
                            "text-3xl font-extrabold tracking-tight sm:text-4xl px-4 text-center my-20",
                          children:
                            "Custom Branding for webmind.app self-host version",
                        }),
                        (0, o.jsxs)("div", {
                          className: "my-10",
                          children: [
                            "Custom Branding is an ",
                            (0, o.jsx)("b", { children: "additional package" }),
                            " for your",
                            " ",
                            (0, o.jsx)("b", { children: "self-host" }),
                            " version that allows you to customize the branding (brand name, logo, tagline) of your webmind.app self-host instance.",
                          ],
                        }),
                        (0, o.jsx)("h2", {
                          className: "text-3xl font-semibold my-4",
                          children: "What do you get:",
                        }),
                        (0, o.jsxs)("div", {
                          className: "grid sm:grid-cols-2 gap-2",
                          children: [
                            (0, o.jsxs)("div", {
                              children: [
                                (0, o.jsxs)("h3", {
                                  className: "my-4 text-xl",
                                  children: [
                                    "Your logo and branding on welcome screen",
                                    " ",
                                  ],
                                }),
                                (0, o.jsx)("img", {
                                  src: "/assets/white-label/welcome-screen.png",
                                }),
                              ],
                            }),
                            (0, o.jsxs)("div", {
                              children: [
                                (0, o.jsx)("h3", {
                                  className: "my-4 text-xl",
                                  children:
                                    "Your logo as the chat bot's avatar on chat screen",
                                }),
                                (0, o.jsx)("img", {
                                  src: "/assets/white-label/ai-avatar.png",
                                }),
                              ],
                            }),
                            (0, o.jsxs)("div", {
                              children: [
                                (0, o.jsx)("h3", {
                                  className: "my-4 text-xl",
                                  children: "On the browser title bar",
                                }),
                                (0, o.jsx)("img", {
                                  src: "/assets/white-label/titlebar.png",
                                }),
                              ],
                            }),
                            (0, o.jsxs)("div", {
                              children: [
                                (0, o.jsx)("h3", {
                                  className: "my-4 text-xl",
                                  children: "On the app's footer",
                                }),
                                (0, o.jsx)("img", {
                                  src: "/assets/white-label/footer.png",
                                }),
                              ],
                            }),
                            (0, o.jsxs)("div", {
                              children: [
                                (0, o.jsx)("h3", {
                                  className: "my-4 text-xl",
                                  children:
                                    "iOS/Android Home Screen when users add to home screen.",
                                }),
                                (0, o.jsx)("img", {
                                  src: "/assets/white-label/app-icon.png",
                                }),
                              ],
                            }),
                            (0, o.jsxs)("div", {
                              children: [
                                (0, o.jsx)("h3", {
                                  className: "my-4 text-xl",
                                  children:
                                    "iOS/Android App launcher Screen app when user add to home screen.",
                                }),
                                (0, o.jsx)("img", {
                                  src: "/assets/white-label/app-manager.png",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, o.jsxs)("div", {
                          className: "py-32",
                          children: [
                            (0, o.jsx)("h2", {
                              className: "text-3xl font-semibold my-4",
                              children: "Before you purchase:",
                            }),
                            (0, o.jsxs)("ul", {
                              className: "list-decimal space-y-2 pl-4",
                              children: [
                                (0, o.jsxs)("li", {
                                  children: [
                                    "Custom Branding package only works on",
                                    " ",
                                    (0, o.jsx)("b", {
                                      children:
                                        "self-hosted version of webmind.app",
                                    }),
                                    ". You cannot add custom branding on the webmind.app website.",
                                  ],
                                }),
                                (0, o.jsxs)("li", {
                                  children: [
                                    "If you haven't already, you must first purchase a",
                                    " ",
                                    (0, o.jsx)("a", {
                                      href: "https://tdinh.lemonsqueezy.com/checkout/buy/4e8d7ea3-0e9e-45b1-bf62-058ade690553",
                                      target: "_blank",
                                      rel: "noreferrer noopener",
                                      className:
                                        "text-blue-500 hover:underline",
                                      children: (0, o.jsx)("b", {
                                        children:
                                          "webmind.app Self-host Package",
                                      }),
                                    }),
                                    ". The ",
                                    (0, o.jsx)("b", {
                                      children: "Custom Branding License",
                                    }),
                                    " is an",
                                    " ",
                                    (0, o.jsx)("b", {
                                      children: "additional purchase",
                                    }),
                                    " that adds custom branding on top of your self-host version, if you only buy the Custom Branding License, it will not work.",
                                  ],
                                }),
                                (0, o.jsxs)("li", {
                                  children: [
                                    "As a reminder, all users of the self-host version must have a",
                                    " ",
                                    (0, o.jsx)("a", {
                                      href: "https://tdinh.lemonsqueezy.com/checkout/buy/4e8d7ea3-0e9e-45b1-bf62-058ade690553",
                                      target: "_blank",
                                      rel: "noreferrer noopener",
                                      className:
                                        "text-blue-500 hover:underline",
                                      children: (0, o.jsx)("b", {
                                        children: "webmind.app License Key",
                                      }),
                                    }),
                                    " ",
                                    "and an ",
                                    (0, o.jsx)("b", {
                                      children: "OpenAI API Key",
                                    }),
                                    " to use the app. This is the same as in the online version at webmind.app.",
                                  ],
                                }),
                                (0, o.jsxs)("li", {
                                  children: [
                                    "If you plan to let your customers/clients/team members use your self-host version, they will all need to buy a License Key from webmind.app (or you can buy a",
                                    " ",
                                    (0, o.jsx)("a", {
                                      target: "_blank",
                                      rel: "noreferrer noopener",
                                      href: "https://tdinh.lemonsqueezy.com/checkout/buy/149502c9-ff37-4a51-85b2-cce01e541c52",
                                      className:
                                        "text-blue-500 hover:underline",
                                      children: "Team license",
                                    }),
                                    " ",
                                    "for them). Note that they will also need to enter an OpenAI API Key before using the app. webmind.app is a static web app and have no backend, so you cannot bundle the OpenAI API key into the app securely.",
                                  ],
                                }),
                                (0, o.jsxs)("li", {
                                  children: [
                                    "You cannot re-sell the self-host version to your customers. More more info about self-hosting, please see the",
                                    " ",
                                    (0, o.jsx)("b", {
                                      children: "Self-Host FAQs",
                                    }),
                                    " at the end of this page.",
                                  ],
                                }),
                                (0, o.jsxs)("li", {
                                  children: [
                                    "You can view a demo custom branding version here:",
                                    " ",
                                    (0, o.jsx)("a", {
                                      href: "https://white-label-demo.webmind.app/",
                                      target: "_blank",
                                      rel: "noreferrer noopener",
                                      className:
                                        "text-blue-500 hover:underline",
                                      children:
                                        "white-label-demo.webmind.app",
                                    }),
                                    ".",
                                  ],
                                }),
                                (0, o.jsxs)("li", {
                                  children: [
                                    "If you want to see what's the set-up process looks like, go to",
                                    " ",
                                    (0, o.jsx)("a", {
                                      href: "https://www.webmind.app/create-self-hosted",
                                      target: "_blank",
                                      rel: "noreferrer noopener",
                                      className:
                                        "text-blue-500 hover:underline",
                                      children: "Create Custom Branding",
                                    }),
                                    " ",
                                    "to see the instructions that you need to follow to setup your cutsom branding version.",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, o.jsxs)("div", {
                          className: "pb-48",
                          children: [
                            (0, o.jsx)("h2", {
                              className: "text-3xl font-semibold my-4",
                              children: "Ready to purchase?",
                            }),
                            (0, o.jsxs)("label", {
                              className:
                                "flex items-center justify-start gap-2 my-4",
                              children: [
                                (0, o.jsx)("input", {
                                  type: "checkbox",
                                  checked: e,
                                  onChange: (e) => t(e.target.checked),
                                }),
                                (0, o.jsx)("div", {
                                  children:
                                    "I have read and understood the above information.",
                                }),
                              ],
                            }),
                            (0, o.jsx)("button", {
                              onClick: () =>
                                (window.location.href =
                                  "https://tdinh.lemonsqueezy.com/checkout/buy/ef50ef90-26cc-4e2f-adfa-94d17cbc21de"),
                              disabled: !e,
                              className:
                                "inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-400",
                              children: "→ Buy Custom Branding Package Now",
                            }),
                          ],
                        }),
                        (0, o.jsx)("h2", {
                          className:
                            "text-3xl font-extrabold tracking-tight sm:text-4xl px-4 text-center my-10",
                          children: "Self-Host FAQs",
                        }),
                        (0, o.jsx)(i.Z, {}),
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
    28368: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return S;
        },
      });
      var o,
        s,
        r,
        i = n(67294),
        a = n(32984),
        l = n(12351),
        c = n(23784),
        u = n(19946),
        d = n(61363),
        f = n(64103),
        h = n(16567),
        p = n(14157),
        m = n(15466),
        y = n(73781);
      let g =
        null != (r = i.startTransition)
          ? r
          : function (e) {
              e();
            };
      var x =
          (((o = x || {})[(o.Open = 0)] = "Open"),
          (o[(o.Closed = 1)] = "Closed"),
          o),
        v =
          (((s = v || {})[(s.ToggleDisclosure = 0)] = "ToggleDisclosure"),
          (s[(s.CloseDisclosure = 1)] = "CloseDisclosure"),
          (s[(s.SetButtonId = 2)] = "SetButtonId"),
          (s[(s.SetPanelId = 3)] = "SetPanelId"),
          (s[(s.LinkPanel = 4)] = "LinkPanel"),
          (s[(s.UnlinkPanel = 5)] = "UnlinkPanel"),
          s);
      let b = {
          0: (e) => ({
            ...e,
            disclosureState: (0, a.E)(e.disclosureState, { 0: 1, 1: 0 }),
          }),
          1: (e) =>
            1 === e.disclosureState ? e : { ...e, disclosureState: 1 },
          4: (e) => (!0 === e.linkedPanel ? e : { ...e, linkedPanel: !0 }),
          5: (e) => (!1 === e.linkedPanel ? e : { ...e, linkedPanel: !1 }),
          2: (e, t) =>
            e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId },
          3: (e, t) =>
            e.panelId === t.panelId ? e : { ...e, panelId: t.panelId },
        },
        w = (0, i.createContext)(null);
      function j(e) {
        let t = (0, i.useContext)(w);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Disclosure /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, j), t);
        }
        return t;
      }
      w.displayName = "DisclosureContext";
      let k = (0, i.createContext)(null);
      k.displayName = "DisclosureAPIContext";
      let N = (0, i.createContext)(null);
      function I(e, t) {
        return (0, a.E)(t.type, b, e, t);
      }
      N.displayName = "DisclosurePanelContext";
      let E = i.Fragment,
        T = l.AN.RenderStrategy | l.AN.Static,
        S = Object.assign(
          (0, l.yV)(function (e, t) {
            let { defaultOpen: n = !1, ...o } = e,
              s = (0, i.useRef)(null),
              r = (0, c.T)(
                t,
                (0, c.h)((e) => {
                  s.current = e;
                }, void 0 === e.as || e.as === i.Fragment)
              ),
              u = (0, i.useRef)(null),
              d = (0, i.useRef)(null),
              f = (0, i.useReducer)(I, {
                disclosureState: n ? 0 : 1,
                linkedPanel: !1,
                buttonRef: d,
                panelRef: u,
                buttonId: null,
                panelId: null,
              }),
              [{ disclosureState: p, buttonId: g }, x] = f,
              v = (0, y.z)((e) => {
                x({ type: 1 });
                let t = (0, m.r)(s);
                if (!t || !g) return;
                let n = e
                  ? e instanceof HTMLElement
                    ? e
                    : e.current instanceof HTMLElement
                    ? e.current
                    : t.getElementById(g)
                  : t.getElementById(g);
                null == n || n.focus();
              }),
              b = (0, i.useMemo)(() => ({ close: v }), [v]),
              j = (0, i.useMemo)(() => ({ open: 0 === p, close: v }), [p, v]);
            return i.createElement(
              w.Provider,
              { value: f },
              i.createElement(
                k.Provider,
                { value: b },
                i.createElement(
                  h.up,
                  { value: (0, a.E)(p, { 0: h.ZM.Open, 1: h.ZM.Closed }) },
                  (0, l.sY)({
                    ourProps: { ref: r },
                    theirProps: o,
                    slot: j,
                    defaultTag: E,
                    name: "Disclosure",
                  })
                )
              )
            );
          }),
          {
            Button: (0, l.yV)(function (e, t) {
              let n = (0, u.M)(),
                { id: o = `headlessui-disclosure-button-${n}`, ...s } = e,
                [r, a] = j("Disclosure.Button"),
                h = (0, i.useContext)(N),
                m = null !== h && h === r.panelId,
                g = (0, i.useRef)(null),
                x = (0, c.T)(g, t, m ? null : r.buttonRef);
              (0, i.useEffect)(() => {
                if (!m)
                  return (
                    a({ type: 2, buttonId: o }),
                    () => {
                      a({ type: 2, buttonId: null });
                    }
                  );
              }, [o, a, m]);
              let v = (0, y.z)((e) => {
                  var t;
                  if (m) {
                    if (1 === r.disclosureState) return;
                    switch (e.key) {
                      case d.R.Space:
                      case d.R.Enter:
                        e.preventDefault(),
                          e.stopPropagation(),
                          a({ type: 0 }),
                          null == (t = r.buttonRef.current) || t.focus();
                    }
                  } else
                    switch (e.key) {
                      case d.R.Space:
                      case d.R.Enter:
                        e.preventDefault(), e.stopPropagation(), a({ type: 0 });
                    }
                }),
                b = (0, y.z)((e) => {
                  e.key === d.R.Space && e.preventDefault();
                }),
                w = (0, y.z)((t) => {
                  var n;
                  (0, f.P)(t.currentTarget) ||
                    e.disabled ||
                    (m
                      ? (a({ type: 0 }),
                        null == (n = r.buttonRef.current) || n.focus())
                      : a({ type: 0 }));
                }),
                k = (0, i.useMemo)(
                  () => ({ open: 0 === r.disclosureState }),
                  [r]
                ),
                I = (0, p.f)(e, g),
                E = m
                  ? { ref: x, type: I, onKeyDown: v, onClick: w }
                  : {
                      ref: x,
                      id: o,
                      type: I,
                      "aria-expanded": e.disabled
                        ? void 0
                        : 0 === r.disclosureState,
                      "aria-controls": r.linkedPanel ? r.panelId : void 0,
                      onKeyDown: v,
                      onKeyUp: b,
                      onClick: w,
                    };
              return (0,
              l.sY)({ ourProps: E, theirProps: s, slot: k, defaultTag: "button", name: "Disclosure.Button" });
            }),
            Panel: (0, l.yV)(function (e, t) {
              let n = (0, u.M)(),
                { id: o = `headlessui-disclosure-panel-${n}`, ...s } = e,
                [r, a] = j("Disclosure.Panel"),
                { close: d } = (function e(t) {
                  let n = (0, i.useContext)(k);
                  if (null === n) {
                    let n = Error(
                      `<${t} /> is missing a parent <Disclosure /> component.`
                    );
                    throw (
                      (Error.captureStackTrace && Error.captureStackTrace(n, e),
                      n)
                    );
                  }
                  return n;
                })("Disclosure.Panel"),
                f = (0, c.T)(t, r.panelRef, (e) => {
                  g(() => a({ type: e ? 4 : 5 }));
                });
              (0, i.useEffect)(
                () => (
                  a({ type: 3, panelId: o }),
                  () => {
                    a({ type: 3, panelId: null });
                  }
                ),
                [o, a]
              );
              let p = (0, h.oJ)(),
                m =
                  null !== p
                    ? (p & h.ZM.Open) === h.ZM.Open
                    : 0 === r.disclosureState,
                y = (0, i.useMemo)(
                  () => ({ open: 0 === r.disclosureState, close: d }),
                  [r, d]
                );
              return i.createElement(
                N.Provider,
                { value: r.panelId },
                (0, l.sY)({
                  ourProps: { ref: f, id: o },
                  theirProps: s,
                  slot: y,
                  defaultTag: "div",
                  features: T,
                  visible: m,
                  name: "Disclosure.Panel",
                })
              );
            }),
          }
        );
    },
    61363: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return s;
        },
      });
      var o,
        s =
          (((o = s || {}).Space = " "),
          (o.Enter = "Enter"),
          (o.Escape = "Escape"),
          (o.Backspace = "Backspace"),
          (o.Delete = "Delete"),
          (o.ArrowLeft = "ArrowLeft"),
          (o.ArrowUp = "ArrowUp"),
          (o.ArrowRight = "ArrowRight"),
          (o.ArrowDown = "ArrowDown"),
          (o.Home = "Home"),
          (o.End = "End"),
          (o.PageUp = "PageUp"),
          (o.PageDown = "PageDown"),
          (o.Tab = "Tab"),
          o);
    },
    73781: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return r;
        },
      });
      var o = n(67294),
        s = n(3855);
      let r = function (e) {
        let t = (0, s.E)(e);
        return o.useCallback((...e) => t.current(...e), [t]);
      };
    },
    19946: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return l;
        },
      });
      var o,
        s = n(67294),
        r = n(16723),
        i = n(82180),
        a = n(77896);
      let l =
        null != (o = s.useId)
          ? o
          : function () {
              let e = (0, i.H)(),
                [t, n] = s.useState(e ? () => a.O.nextId() : null);
              return (
                (0, r.e)(() => {
                  null === t && n(a.O.nextId());
                }, [t]),
                null != t ? "" + t : void 0
              );
            };
    },
    16723: function (e, t, n) {
      "use strict";
      n.d(t, {
        e: function () {
          return r;
        },
      });
      var o = n(67294),
        s = n(77896);
      let r = (e, t) => {
        s.O.isServer ? (0, o.useEffect)(e, t) : (0, o.useLayoutEffect)(e, t);
      };
    },
    3855: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return r;
        },
      });
      var o = n(67294),
        s = n(16723);
      function r(e) {
        let t = (0, o.useRef)(e);
        return (
          (0, s.e)(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
    },
    14157: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return i;
        },
      });
      var o = n(67294),
        s = n(16723);
      function r(e) {
        var t;
        if (e.type) return e.type;
        let n = null != (t = e.as) ? t : "button";
        if ("string" == typeof n && "button" === n.toLowerCase())
          return "button";
      }
      function i(e, t) {
        let [n, i] = (0, o.useState)(() => r(e));
        return (
          (0, s.e)(() => {
            i(r(e));
          }, [e.type, e.as]),
          (0, s.e)(() => {
            n ||
              (t.current &&
                t.current instanceof HTMLButtonElement &&
                !t.current.hasAttribute("type") &&
                i("button"));
          }, [n, t]),
          n
        );
      }
    },
    82180: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return r;
        },
      });
      var o = n(67294),
        s = n(77896);
      function r() {
        let [e, t] = (0, o.useState)(s.O.isHandoffComplete);
        return (
          e && !1 === s.O.isHandoffComplete && t(!1),
          (0, o.useEffect)(() => {
            !0 !== e && t(!0);
          }, [e]),
          (0, o.useEffect)(() => s.O.handoff(), []),
          e
        );
      }
    },
    23784: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return a;
        },
        h: function () {
          return i;
        },
      });
      var o = n(67294),
        s = n(73781);
      let r = Symbol();
      function i(e, t = !0) {
        return Object.assign(e, { [r]: t });
      }
      function a(...e) {
        let t = (0, o.useRef)(e);
        (0, o.useEffect)(() => {
          t.current = e;
        }, [e]);
        let n = (0, s.z)((e) => {
          for (let n of t.current)
            null != n && ("function" == typeof n ? n(e) : (n.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[r]))
          ? void 0
          : n;
      }
    },
    16567: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZM: function () {
          return i;
        },
        oJ: function () {
          return a;
        },
        up: function () {
          return l;
        },
      });
      var o,
        s = n(67294);
      let r = (0, s.createContext)(null);
      r.displayName = "OpenClosedContext";
      var i =
        (((o = i || {})[(o.Open = 1)] = "Open"),
        (o[(o.Closed = 2)] = "Closed"),
        (o[(o.Closing = 4)] = "Closing"),
        (o[(o.Opening = 8)] = "Opening"),
        o);
      function a() {
        return (0, s.useContext)(r);
      }
      function l({ value: e, children: t }) {
        return s.createElement(r.Provider, { value: e }, t);
      }
    },
    64103: function (e, t, n) {
      "use strict";
      function o(e) {
        let t = e.parentElement,
          n = null;
        for (; t && !(t instanceof HTMLFieldSetElement); )
          t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
        let o = (null == t ? void 0 : t.getAttribute("disabled")) === "";
        return (
          !(
            o &&
            (function (e) {
              if (!e) return !1;
              let t = e.previousElementSibling;
              for (; null !== t; ) {
                if (t instanceof HTMLLegendElement) return !1;
                t = t.previousElementSibling;
              }
              return !0;
            })(n)
          ) && o
        );
      }
      n.d(t, {
        P: function () {
          return o;
        },
      });
    },
    44067: function (e, t, n) {
      "use strict";
      function o(...e) {
        return e.filter(Boolean).join(" ");
      }
      n.d(t, {
        A: function () {
          return o;
        },
      });
    },
    77896: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return i;
        },
      });
      var o = Object.defineProperty,
        s = (e, t, n) =>
          t in e
            ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        r = (e, t, n) => (s(e, "symbol" != typeof t ? t + "" : t, n), n);
      let i = new (class {
        constructor() {
          r(this, "current", this.detect()),
            r(this, "handoffState", "pending"),
            r(this, "currentId", 0);
        }
        set(e) {
          this.current !== e &&
            ((this.handoffState = "pending"),
            (this.currentId = 0),
            (this.current = e));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "undefined" == typeof window || "undefined" == typeof document
            ? "server"
            : "client";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
      })();
    },
    32984: function (e, t, n) {
      "use strict";
      function o(e, t, ...n) {
        if (e in t) {
          let o = t[e];
          return "function" == typeof o ? o(...n) : o;
        }
        let s = Error(
          `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
          )
            .map((e) => `"${e}"`)
            .join(", ")}.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(s, o), s);
      }
      n.d(t, {
        E: function () {
          return o;
        },
      });
    },
    15466: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return s;
        },
      });
      var o = n(77896);
      function s(e) {
        return o.O.isServer
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e &&
            e.hasOwnProperty("current") &&
            e.current instanceof Node
          ? e.current.ownerDocument
          : document;
      }
    },
    12351: function (e, t, n) {
      "use strict";
      n.d(t, {
        AN: function () {
          return l;
        },
        l4: function () {
          return c;
        },
        oA: function () {
          return p;
        },
        sY: function () {
          return u;
        },
        yV: function () {
          return h;
        },
      });
      var o,
        s,
        r = n(67294),
        i = n(44067),
        a = n(32984),
        l =
          (((o = l || {})[(o.None = 0)] = "None"),
          (o[(o.RenderStrategy = 1)] = "RenderStrategy"),
          (o[(o.Static = 2)] = "Static"),
          o),
        c =
          (((s = c || {})[(s.Unmount = 0)] = "Unmount"),
          (s[(s.Hidden = 1)] = "Hidden"),
          s);
      function u({
        ourProps: e,
        theirProps: t,
        slot: n,
        defaultTag: o,
        features: s,
        visible: r = !0,
        name: i,
      }) {
        let l = f(t, e);
        if (r) return d(l, n, o, i);
        let c = null != s ? s : 0;
        if (2 & c) {
          let { static: e = !1, ...t } = l;
          if (e) return d(t, n, o, i);
        }
        if (1 & c) {
          let { unmount: e = !0, ...t } = l;
          return (0, a.E)(e ? 0 : 1, {
            0: () => null,
            1: () =>
              d({ ...t, hidden: !0, style: { display: "none" } }, n, o, i),
          });
        }
        return d(l, n, o, i);
      }
      function d(e, t = {}, n, o) {
        var s;
        let {
            as: a = n,
            children: l,
            refName: c = "ref",
            ...u
          } = m(e, ["unmount", "static"]),
          d = void 0 !== e.ref ? { [c]: e.ref } : {},
          h = "function" == typeof l ? l(t) : l;
        "className" in u &&
          u.className &&
          "function" == typeof u.className &&
          (u.className = u.className(t));
        let y = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [o, s] of Object.entries(t))
            "boolean" == typeof s && (e = !0), !0 === s && n.push(o);
          e && (y["data-headlessui-state"] = n.join(" "));
        }
        if (a === r.Fragment && Object.keys(p(u)).length > 0) {
          if (!(0, r.isValidElement)(h) || (Array.isArray(h) && h.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                `The current component <${o} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(u).map((e) => `  - ${e}`).join(`
`),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ].map((e) => `  - ${e}`).join(`
`),
              ].join(`
`)
            );
          let e = (0, i.A)(
            null == (s = h.props) ? void 0 : s.className,
            u.className
          );
          return (0, r.cloneElement)(
            h,
            Object.assign(
              {},
              f(h.props, p(m(u, ["ref"]))),
              y,
              d,
              (function (...e) {
                return {
                  ref: e.every((e) => null == e)
                    ? void 0
                    : (t) => {
                        for (let n of e)
                          null != n &&
                            ("function" == typeof n ? n(t) : (n.current = t));
                      },
                };
              })(h.ref, d.ref),
              e ? { className: e } : {}
            )
          );
        }
        return (0, r.createElement)(
          a,
          Object.assign(
            {},
            m(u, ["ref"]),
            a !== r.Fragment && d,
            a !== r.Fragment && y
          ),
          h
        );
      }
      function f(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
          n = {};
        for (let o of e)
          for (let e in o)
            e.startsWith("on") && "function" == typeof o[e]
              ? (null != n[e] || (n[e] = []), n[e].push(o[e]))
              : (t[e] = o[e]);
        if (t.disabled || t["aria-disabled"])
          return Object.assign(
            t,
            Object.fromEntries(Object.keys(n).map((e) => [e, void 0]))
          );
        for (let e in n)
          Object.assign(t, {
            [e](t, ...o) {
              for (let s of n[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                s(t, ...o);
              }
            },
          });
        return t;
      }
      function h(e) {
        var t;
        return Object.assign((0, r.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function p(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function m(e, t = []) {
        let n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 18393));
    }),
      (_N_E = e.O());
  },
]);
