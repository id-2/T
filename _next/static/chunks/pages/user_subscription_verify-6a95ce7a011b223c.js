(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [409],
  {
    30861: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/user_subscription_verify",
        function () {
          return n(45662);
        },
      ]);
    },
    24461: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(85893);
      function s() {
        return (0, i.jsxs)("svg", {
          className: "animate-spin h-5 w-5",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("circle", {
              className: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "4",
            }),
            (0, i.jsx)("path", {
              className: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
            }),
          ],
        });
      }
    },
    51448: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(85893);
      n(67294);
      var s = n(9008),
        r = n.n(s);
      function a(e) {
        let {
            title: t,
            showNotification: n = !1,
            description:
              s = "Use ChatGPT with enhanced features like chat history search, folders, integrations, prompt library, etc.",
            hostConfig: a,
            overridePosterURL: o,
          } = e,
          c = a
            ? a.brand + " – " + a.tagline
            : "webmind.app — A better UI for ChatGPT",
          l = (n ? "(*) " : "") + (t || c),
          p = a
            ? a.hostname
              ? "https://" + a.hostname + "/"
              : "https://".concat(a.subdomain, ".webmind.app/")
            : "https://www.webmind.app",
          m =
            a &&
            ""
              .concat(p, "api/poster?name=")
              .concat(encodeURIComponent(a.name), "&tagline=")
              .concat(encodeURIComponent(a.tagline), "&logo=")
              .concat(a.logoURL),
          u =
            o ||
            (null == a ? void 0 : a.posterURL) ||
            m ||
            "https://www.webmind.app/poster-2.png",
          x = (null == a ? void 0 : a.description) || s,
          f = null == a ? void 0 : a.logoURL;
        return (0, i.jsxs)(r(), {
          children: [
            (0, i.jsx)("title", { children: l }),
            (0, i.jsx)("meta", { name: "title", content: l }),
            (0, i.jsx)("meta", { name: "description", content: x }),
            (0, i.jsx)("meta", { property: "og:type", content: "website" }),
            (0, i.jsx)("meta", { property: "og:url", content: p }),
            (0, i.jsx)("meta", { property: "og:title", content: l }),
            (0, i.jsx)("meta", { property: "og:description", content: x }),
            (0, i.jsx)("meta", { property: "og:image", content: u }),
            (0, i.jsx)("meta", {
              property: "twitter:card",
              content: "summary_large_image",
            }),
            (0, i.jsx)("meta", { property: "twitter:url", content: p }),
            (0, i.jsx)("meta", { property: "twitter:title", content: l }),
            (0, i.jsx)("meta", { property: "twitter:description", content: x }),
            (0, i.jsx)("meta", { property: "twitter:image", content: u }),
            (0, i.jsx)("meta", {
              name: "viewport",
              content: "initial-scale=1, viewport-fit=cover",
            }),
            (0, i.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "152x152",
              href: f || "/apple-icon-152x152.png",
            }),
            (0, i.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: f || "/apple-icon-180x180.png",
            }),
            (0, i.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "192x192",
              href: f || "/android-icon-192x192.png",
            }),
            (0, i.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: f || "/favicon-32x32.png",
            }),
            (0, i.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "96x96",
              href: f || "/favicon-96x96.png",
            }),
            (0, i.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: f || "/favicon-16x16.png",
            }),
            (0, i.jsx)("link", {
              rel: "manifest",
              href: a ? "/api/manifest" : "/manifest.json",
            }),
            (0, i.jsx)("meta", {
              name: "msapplication-TileColor",
              content: "#ffffff",
            }),
            (0, i.jsx)("meta", {
              name: "msapplication-TileImage",
              content: f || "/ms-icon-144x144.png",
            }),
            (0, i.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
          ],
        });
      }
    },
    45662: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return l;
          },
        });
      var i = n(85893),
        s = n(23544),
        r = n(67294),
        a = n(24461),
        o = n(51448);
      let c = "Something went wrong. Please try again.";
      var l = !0;
      t.default = (0, s.withSuperJSONPage)(function (e) {
        let { user: t } = e,
          [n, s] = (0, r.useState)(!1),
          [l, p] = (0, r.useState)(null),
          m = (0, r.useRef)(null);
        (0, r.useEffect)(
          () => (
            m.current && clearTimeout(m.current),
            (m.current = setInterval(() => {
              x();
            }, 2e3)),
            () => {
              m.current && clearTimeout(m.current);
            }
          ),
          [t]
        );
        let u = (e) => {
            let t = new URLSearchParams(window.location.search),
              n = t.get("planID");
            return n
              ? e.filter((e) => e.planID === n && "active" === e.status)
                  .length > 0
              : e.filter((e) => "active" === e.status).length > 0;
          },
          x = async () => {
            s(!0), p("");
            try {
              let e = await fetch("/api/hosted/users/self", {
                headers: { "Content-Type": "application/json" },
              });
              if (e.status >= 400) {
                let t = await e.json();
                p(t.userMessage || c), s(!1);
                return;
              }
              if (!e.ok) {
                p(c), s(!1);
                return;
              }
              let t = await e.json(),
                n = t.subscriptions || [];
              u(n) && (window.location.href = "/");
            } catch (e) {
              p(c), console.error(e);
            }
            s(!1);
          };
        return (0,
        i.jsx)(i.Fragment, { children: (0, i.jsxs)("div", { className: "min-h-screen", children: [(0, i.jsx)(o.Z, { title: "Verifying..." }), (0, i.jsxs)("div", { className: "py-10 ", children: [t ? (0, i.jsx)("main", { className: "max-w-2xl mx-auto px-4", children: (0, i.jsxs)("h1", { className: "text-2xl text-center my-10 flex items-center justify-center gap-2", children: [(0, i.jsx)(a.Z, {}), " ", (0, i.jsx)("b", { children: "Verifying..." })] }) }) : (0, i.jsxs)("main", { className: "max-w-2xl mx-auto px-4", children: [(0, i.jsx)("h1", { className: "text-2xl text-center my-10", children: "This link is not valid" }), (0, i.jsx)("div", { className: "my-4 text-center", children: "If you think this is a mistake, please contact support." }), (0, i.jsx)("div", { className: "my-4 text-center", children: (0, i.jsx)("a", { href: "/", className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2", children: (0, i.jsx)("span", { children: "Go to home page" }) }) })] }), l ? (0, i.jsx)("div", { className: "text-red-500 text-center my-4", children: l }) : null] })] }) });
      });
    },
    9008: function (e, t, n) {
      e.exports = n(5443);
    },
  },
  function (e) {
    e.O(0, [544, 774, 888, 179], function () {
      return e((e.s = 30861));
    }),
      (_N_E = e.O());
  },
]);
