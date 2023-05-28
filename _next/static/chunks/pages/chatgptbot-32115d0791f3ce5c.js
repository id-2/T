(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [693],
  {
    63913: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/chatgptbot",
        function () {
          return n(41432);
        },
      ]);
    },
    51448: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return s;
        },
      });
      var i = n(85893);
      n(67294);
      var o = n(9008),
        r = n.n(o);
      function s(t) {
        let {
            title: e,
            showNotification: n = !1,
            description:
              o = "Use ChatGPT with enhanced features like chat history search, folders, integrations, prompt library, etc.",
            hostConfig: s,
            overridePosterURL: a,
          } = t,
          c = s
            ? s.brand + " – " + s.tagline
            : "webmind.app — A better UI for ChatGPT",
          p = (n ? "(*) " : "") + (e || c),
          l = s
            ? s.hostname
              ? "https://" + s.hostname + "/"
              : "https://".concat(s.subdomain, ".typingcloud.com/")
            : "https://www.webmind.app",
          m =
            s &&
            ""
              .concat(l, "api/poster?name=")
              .concat(encodeURIComponent(s.name), "&tagline=")
              .concat(encodeURIComponent(s.tagline), "&logo=")
              .concat(s.logoURL),
          f =
            a ||
            (null == s ? void 0 : s.posterURL) ||
            m ||
            "https://www.webmind.app/poster-2.png",
          x = (null == s ? void 0 : s.description) || o,
          g = null == s ? void 0 : s.logoURL;
        return (0, i.jsxs)(r(), {
          children: [
            (0, i.jsx)("title", { children: p }),
            (0, i.jsx)("meta", { name: "title", content: p }),
            (0, i.jsx)("meta", { name: "description", content: x }),
            (0, i.jsx)("meta", { property: "og:type", content: "website" }),
            (0, i.jsx)("meta", { property: "og:url", content: l }),
            (0, i.jsx)("meta", { property: "og:title", content: p }),
            (0, i.jsx)("meta", { property: "og:description", content: x }),
            (0, i.jsx)("meta", { property: "og:image", content: f }),
            (0, i.jsx)("meta", {
              property: "twitter:card",
              content: "summary_large_image",
            }),
            (0, i.jsx)("meta", { property: "twitter:url", content: l }),
            (0, i.jsx)("meta", { property: "twitter:title", content: p }),
            (0, i.jsx)("meta", { property: "twitter:description", content: x }),
            (0, i.jsx)("meta", { property: "twitter:image", content: f }),
            (0, i.jsx)("meta", {
              name: "viewport",
              content: "initial-scale=1, viewport-fit=cover",
            }),
            (0, i.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "152x152",
              href: g || "/apple-icon-152x152.png",
            }),
            (0, i.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: g || "/apple-icon-180x180.png",
            }),
            (0, i.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "192x192",
              href: g || "/android-icon-192x192.png",
            }),
            (0, i.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: g || "/favicon-32x32.png",
            }),
            (0, i.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "96x96",
              href: g || "/favicon-96x96.png",
            }),
            (0, i.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: g || "/favicon-16x16.png",
            }),
            (0, i.jsx)("link", {
              rel: "manifest",
              href: s ? "/api/manifest" : "/manifest.json",
            }),
            (0, i.jsx)("meta", {
              name: "msapplication-TileColor",
              content: "#ffffff",
            }),
            (0, i.jsx)("meta", {
              name: "msapplication-TileImage",
              content: g || "/ms-icon-144x144.png",
            }),
            (0, i.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
          ],
        });
      }
    },
    41432: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return s;
          },
        });
      var i = n(85893),
        o = n(67294),
        r = n(51448);
      function s() {
        return (
          (0, o.useEffect)(() => {
            window.localStorage.setItem("aff", "chatgptbot"),
              setTimeout(() => {
                window.location.href = "https://www.webmind.app";
              }, 1e3);
          }, []),
          (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("div", {
              className: "min-h-screen",
              children: [
                (0, i.jsx)(r.Z, {
                  title: "ChatGPTBot Web UI - AI Chatbot",
                  overridePosterURL:
                    "https://www.webmind.app/chatgptbot.png",
                }),
                (0, i.jsx)("div", {
                  className: "py-20 ",
                  children: (0, i.jsx)("div", {
                    className:
                      "flex items-center justify-center text-3xl font-semibold text-gray-500",
                    children: "Redirecting...",
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    9008: function (t, e, n) {
      t.exports = n(5443);
    },
  },
  function (t) {
    t.O(0, [774, 888, 179], function () {
      return t((t.s = 63913));
    }),
      (_N_E = t.O());
  },
]);
