(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [208],
  {
    40800: function (e, t, n) {
      let o = n(67294),
        r = o.forwardRef(function ({ title: e, titleId: t, ...n }, r) {
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
                ref: r,
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
      e.exports = r;
    },
    67798: function (e, t, n) {
      let o = n(67294),
        r = o.forwardRef(function ({ title: e, titleId: t, ...n }, r) {
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
                ref: r,
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
      e.exports = r;
    },
    12154: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/self-host-faqs",
        function () {
          return n(90075);
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
        r = n(28368),
        s = n(40800),
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
                      r.p,
                      {
                        as: "div",
                        className: "pt-6",
                        children: (t) => {
                          let { open: n } = t;
                          return (0, o.jsxs)(o.Fragment, {
                            children: [
                              (0, o.jsx)("dt", {
                                children: (0, o.jsxs)(r.p.Button, {
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
                                        ? (0, o.jsx)(s, {
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
                              (0, o.jsx)(r.p.Panel, {
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
      var r = n(9008),
        s = n.n(r);
      function i(e) {
        let {
            title: t,
            showNotification: n = !1,
            description:
              r = "Use ChatGPT with enhanced features like chat history search, folders, integrations, prompt library, etc.",
            hostConfig: i,
            overridePosterURL: a,
          } = e,
          l = i
            ? i.brand + " – " + i.tagline
            : "webmind.app — A better UI for ChatGPT",
          u = (n ? "(*) " : "") + (t || l),
          c = i
            ? i.hostname
              ? "https://" + i.hostname + "/"
              : "https://".concat(i.subdomain, ".webmind.app/")
            : "https://www.webmind.app",
          d =
            i &&
            ""
              .concat(c, "api/poster?name=")
              .concat(encodeURIComponent(i.name), "&tagline=")
              .concat(encodeURIComponent(i.tagline), "&logo=")
              .concat(i.logoURL),
          f =
            a ||
            (null == i ? void 0 : i.posterURL) ||
            d ||
            "https://www.webmind.app/poster-2.png",
          p = (null == i ? void 0 : i.description) || r,
          h = null == i ? void 0 : i.logoURL;
        return (0, o.jsxs)(s(), {
          children: [
            (0, o.jsx)("title", { children: u }),
            (0, o.jsx)("meta", { name: "title", content: u }),
            (0, o.jsx)("meta", { name: "description", content: p }),
            (0, o.jsx)("meta", { property: "og:type", content: "website" }),
            (0, o.jsx)("meta", { property: "og:url", content: c }),
            (0, o.jsx)("meta", { property: "og:title", content: u }),
            (0, o.jsx)("meta", { property: "og:description", content: p }),
            (0, o.jsx)("meta", { property: "og:image", content: f }),
            (0, o.jsx)("meta", {
              property: "twitter:card",
              content: "summary_large_image",
            }),
            (0, o.jsx)("meta", { property: "twitter:url", content: c }),
            (0, o.jsx)("meta", { property: "twitter:title", content: u }),
            (0, o.jsx)("meta", { property: "twitter:description", content: p }),
            (0, o.jsx)("meta", { property: "twitter:image", content: f }),
            (0, o.jsx)("meta", {
              name: "viewport",
              content: "initial-scale=1, viewport-fit=cover",
            }),
            (0, o.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "152x152",
              href: h || "/apple-icon-152x152.png",
            }),
            (0, o.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: h || "/apple-icon-180x180.png",
            }),
            (0, o.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "192x192",
              href: h || "/android-icon-192x192.png",
            }),
            (0, o.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: h || "/favicon-32x32.png",
            }),
            (0, o.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "96x96",
              href: h || "/favicon-96x96.png",
            }),
            (0, o.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: h || "/favicon-16x16.png",
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
              content: h || "/ms-icon-144x144.png",
            }),
            (0, o.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
          ],
        });
      }
    },
    90075: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var o = n(85893),
        r = n(51448),
        s = n(89290);
      function i() {
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)("div", {
            className: "min-h-screen",
            children: [
              (0, o.jsx)(r.Z, { title: "Self-host FAQs" }),
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
                    (0, o.jsx)("h1", {
                      className:
                        "text-3xl font-extrabold tracking-tight sm:text-4xl px-4 text-center my-10",
                      children: "Self-host webmind.app Static App",
                    }),
                    (0, o.jsx)("div", {
                      className: "px-4",
                      children: (0, o.jsx)(s.Z, {}),
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
          return P;
        },
      });
      var o,
        r,
        s,
        i = n(67294),
        a = n(32984),
        l = n(12351),
        u = n(23784),
        c = n(19946),
        d = n(61363),
        f = n(64103),
        p = n(16567),
        h = n(14157),
        m = n(15466),
        y = n(73781);
      let g =
        null != (s = i.startTransition)
          ? s
          : function (e) {
              e();
            };
      var v =
          (((o = v || {})[(o.Open = 0)] = "Open"),
          (o[(o.Closed = 1)] = "Closed"),
          o),
        w =
          (((r = w || {})[(r.ToggleDisclosure = 0)] = "ToggleDisclosure"),
          (r[(r.CloseDisclosure = 1)] = "CloseDisclosure"),
          (r[(r.SetButtonId = 2)] = "SetButtonId"),
          (r[(r.SetPanelId = 3)] = "SetPanelId"),
          (r[(r.LinkPanel = 4)] = "LinkPanel"),
          (r[(r.UnlinkPanel = 5)] = "UnlinkPanel"),
          r);
      let x = {
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
        b = (0, i.createContext)(null);
      function j(e) {
        let t = (0, i.useContext)(b);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Disclosure /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, j), t);
        }
        return t;
      }
      b.displayName = "DisclosureContext";
      let k = (0, i.createContext)(null);
      k.displayName = "DisclosureAPIContext";
      let E = (0, i.createContext)(null);
      function I(e, t) {
        return (0, a.E)(t.type, x, e, t);
      }
      E.displayName = "DisclosurePanelContext";
      let S = i.Fragment,
        T = l.AN.RenderStrategy | l.AN.Static,
        P = Object.assign(
          (0, l.yV)(function (e, t) {
            let { defaultOpen: n = !1, ...o } = e,
              r = (0, i.useRef)(null),
              s = (0, u.T)(
                t,
                (0, u.h)((e) => {
                  r.current = e;
                }, void 0 === e.as || e.as === i.Fragment)
              ),
              c = (0, i.useRef)(null),
              d = (0, i.useRef)(null),
              f = (0, i.useReducer)(I, {
                disclosureState: n ? 0 : 1,
                linkedPanel: !1,
                buttonRef: d,
                panelRef: c,
                buttonId: null,
                panelId: null,
              }),
              [{ disclosureState: h, buttonId: g }, v] = f,
              w = (0, y.z)((e) => {
                v({ type: 1 });
                let t = (0, m.r)(r);
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
              x = (0, i.useMemo)(() => ({ close: w }), [w]),
              j = (0, i.useMemo)(() => ({ open: 0 === h, close: w }), [h, w]);
            return i.createElement(
              b.Provider,
              { value: f },
              i.createElement(
                k.Provider,
                { value: x },
                i.createElement(
                  p.up,
                  { value: (0, a.E)(h, { 0: p.ZM.Open, 1: p.ZM.Closed }) },
                  (0, l.sY)({
                    ourProps: { ref: s },
                    theirProps: o,
                    slot: j,
                    defaultTag: S,
                    name: "Disclosure",
                  })
                )
              )
            );
          }),
          {
            Button: (0, l.yV)(function (e, t) {
              let n = (0, c.M)(),
                { id: o = `headlessui-disclosure-button-${n}`, ...r } = e,
                [s, a] = j("Disclosure.Button"),
                p = (0, i.useContext)(E),
                m = null !== p && p === s.panelId,
                g = (0, i.useRef)(null),
                v = (0, u.T)(g, t, m ? null : s.buttonRef);
              (0, i.useEffect)(() => {
                if (!m)
                  return (
                    a({ type: 2, buttonId: o }),
                    () => {
                      a({ type: 2, buttonId: null });
                    }
                  );
              }, [o, a, m]);
              let w = (0, y.z)((e) => {
                  var t;
                  if (m) {
                    if (1 === s.disclosureState) return;
                    switch (e.key) {
                      case d.R.Space:
                      case d.R.Enter:
                        e.preventDefault(),
                          e.stopPropagation(),
                          a({ type: 0 }),
                          null == (t = s.buttonRef.current) || t.focus();
                    }
                  } else
                    switch (e.key) {
                      case d.R.Space:
                      case d.R.Enter:
                        e.preventDefault(), e.stopPropagation(), a({ type: 0 });
                    }
                }),
                x = (0, y.z)((e) => {
                  e.key === d.R.Space && e.preventDefault();
                }),
                b = (0, y.z)((t) => {
                  var n;
                  (0, f.P)(t.currentTarget) ||
                    e.disabled ||
                    (m
                      ? (a({ type: 0 }),
                        null == (n = s.buttonRef.current) || n.focus())
                      : a({ type: 0 }));
                }),
                k = (0, i.useMemo)(
                  () => ({ open: 0 === s.disclosureState }),
                  [s]
                ),
                I = (0, h.f)(e, g),
                S = m
                  ? { ref: v, type: I, onKeyDown: w, onClick: b }
                  : {
                      ref: v,
                      id: o,
                      type: I,
                      "aria-expanded": e.disabled
                        ? void 0
                        : 0 === s.disclosureState,
                      "aria-controls": s.linkedPanel ? s.panelId : void 0,
                      onKeyDown: w,
                      onKeyUp: x,
                      onClick: b,
                    };
              return (0,
              l.sY)({ ourProps: S, theirProps: r, slot: k, defaultTag: "button", name: "Disclosure.Button" });
            }),
            Panel: (0, l.yV)(function (e, t) {
              let n = (0, c.M)(),
                { id: o = `headlessui-disclosure-panel-${n}`, ...r } = e,
                [s, a] = j("Disclosure.Panel"),
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
                f = (0, u.T)(t, s.panelRef, (e) => {
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
              let h = (0, p.oJ)(),
                m =
                  null !== h
                    ? (h & p.ZM.Open) === p.ZM.Open
                    : 0 === s.disclosureState,
                y = (0, i.useMemo)(
                  () => ({ open: 0 === s.disclosureState, close: d }),
                  [s, d]
                );
              return i.createElement(
                E.Provider,
                { value: s.panelId },
                (0, l.sY)({
                  ourProps: { ref: f, id: o },
                  theirProps: r,
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
          return r;
        },
      });
      var o,
        r =
          (((o = r || {}).Space = " "),
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
          return s;
        },
      });
      var o = n(67294),
        r = n(3855);
      let s = function (e) {
        let t = (0, r.E)(e);
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
        r = n(67294),
        s = n(16723),
        i = n(82180),
        a = n(77896);
      let l =
        null != (o = r.useId)
          ? o
          : function () {
              let e = (0, i.H)(),
                [t, n] = r.useState(e ? () => a.O.nextId() : null);
              return (
                (0, s.e)(() => {
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
          return s;
        },
      });
      var o = n(67294),
        r = n(77896);
      let s = (e, t) => {
        r.O.isServer ? (0, o.useEffect)(e, t) : (0, o.useLayoutEffect)(e, t);
      };
    },
    3855: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return s;
        },
      });
      var o = n(67294),
        r = n(16723);
      function s(e) {
        let t = (0, o.useRef)(e);
        return (
          (0, r.e)(() => {
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
        r = n(16723);
      function s(e) {
        var t;
        if (e.type) return e.type;
        let n = null != (t = e.as) ? t : "button";
        if ("string" == typeof n && "button" === n.toLowerCase())
          return "button";
      }
      function i(e, t) {
        let [n, i] = (0, o.useState)(() => s(e));
        return (
          (0, r.e)(() => {
            i(s(e));
          }, [e.type, e.as]),
          (0, r.e)(() => {
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
          return s;
        },
      });
      var o = n(67294),
        r = n(77896);
      function s() {
        let [e, t] = (0, o.useState)(r.O.isHandoffComplete);
        return (
          e && !1 === r.O.isHandoffComplete && t(!1),
          (0, o.useEffect)(() => {
            !0 !== e && t(!0);
          }, [e]),
          (0, o.useEffect)(() => r.O.handoff(), []),
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
        r = n(73781);
      let s = Symbol();
      function i(e, t = !0) {
        return Object.assign(e, { [s]: t });
      }
      function a(...e) {
        let t = (0, o.useRef)(e);
        (0, o.useEffect)(() => {
          t.current = e;
        }, [e]);
        let n = (0, r.z)((e) => {
          for (let n of t.current)
            null != n && ("function" == typeof n ? n(e) : (n.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[s]))
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
        r = n(67294);
      let s = (0, r.createContext)(null);
      s.displayName = "OpenClosedContext";
      var i =
        (((o = i || {})[(o.Open = 1)] = "Open"),
        (o[(o.Closed = 2)] = "Closed"),
        (o[(o.Closing = 4)] = "Closing"),
        (o[(o.Opening = 8)] = "Opening"),
        o);
      function a() {
        return (0, r.useContext)(s);
      }
      function l({ value: e, children: t }) {
        return r.createElement(s.Provider, { value: e }, t);
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
        r = (e, t, n) =>
          t in e
            ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        s = (e, t, n) => (r(e, "symbol" != typeof t ? t + "" : t, n), n);
      let i = new (class {
        constructor() {
          s(this, "current", this.detect()),
            s(this, "handoffState", "pending"),
            s(this, "currentId", 0);
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
        let r = Error(
          `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
          )
            .map((e) => `"${e}"`)
            .join(", ")}.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(r, o), r);
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
          return r;
        },
      });
      var o = n(77896);
      function r(e) {
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
          return u;
        },
        oA: function () {
          return h;
        },
        sY: function () {
          return c;
        },
        yV: function () {
          return p;
        },
      });
      var o,
        r,
        s = n(67294),
        i = n(44067),
        a = n(32984),
        l =
          (((o = l || {})[(o.None = 0)] = "None"),
          (o[(o.RenderStrategy = 1)] = "RenderStrategy"),
          (o[(o.Static = 2)] = "Static"),
          o),
        u =
          (((r = u || {})[(r.Unmount = 0)] = "Unmount"),
          (r[(r.Hidden = 1)] = "Hidden"),
          r);
      function c({
        ourProps: e,
        theirProps: t,
        slot: n,
        defaultTag: o,
        features: r,
        visible: s = !0,
        name: i,
      }) {
        let l = f(t, e);
        if (s) return d(l, n, o, i);
        let u = null != r ? r : 0;
        if (2 & u) {
          let { static: e = !1, ...t } = l;
          if (e) return d(t, n, o, i);
        }
        if (1 & u) {
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
        var r;
        let {
            as: a = n,
            children: l,
            refName: u = "ref",
            ...c
          } = m(e, ["unmount", "static"]),
          d = void 0 !== e.ref ? { [u]: e.ref } : {},
          p = "function" == typeof l ? l(t) : l;
        "className" in c &&
          c.className &&
          "function" == typeof c.className &&
          (c.className = c.className(t));
        let y = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [o, r] of Object.entries(t))
            "boolean" == typeof r && (e = !0), !0 === r && n.push(o);
          e && (y["data-headlessui-state"] = n.join(" "));
        }
        if (a === s.Fragment && Object.keys(h(c)).length > 0) {
          if (!(0, s.isValidElement)(p) || (Array.isArray(p) && p.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                `The current component <${o} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(c).map((e) => `  - ${e}`).join(`
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
            null == (r = p.props) ? void 0 : r.className,
            c.className
          );
          return (0, s.cloneElement)(
            p,
            Object.assign(
              {},
              f(p.props, h(m(c, ["ref"]))),
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
              })(p.ref, d.ref),
              e ? { className: e } : {}
            )
          );
        }
        return (0, s.createElement)(
          a,
          Object.assign(
            {},
            m(c, ["ref"]),
            a !== s.Fragment && d,
            a !== s.Fragment && y
          ),
          p
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
              for (let r of n[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                r(t, ...o);
              }
            },
          });
        return t;
      }
      function p(e) {
        var t;
        return Object.assign((0, s.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function h(e) {
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
      return e((e.s = 12154));
    }),
      (_N_E = e.O());
  },
]);
