(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [479],
  {
    29198: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/embed/[uuid]",
        function () {
          return t(88964);
        },
      ]);
    },
    88964: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return c;
          },
        });
      var i = t(85893),
        s = t(23544),
        l = t(67294),
        a = t(51448),
        d = t(57632),
        o = t(7036);
      t(91655), t(83792);
      var c = !0;
      n.default = (0, s.withSuperJSONPage)((e) => {
        let { embed: n, embedID: t } = e,
          [s, c] = (0, l.useState)(!1),
          [u, r] = (0, l.useState)(""),
          [h, m] = (0, l.useState)((0, d.Z)()),
          [p, x] = (0, l.useState)([]);
        (0, l.useEffect)(() => {
          c(!0);
        }, []);
        let v = (e) => {
            console.log("TODO: Save", e);
          },
          w = () => {
            m((0, d.Z)()), r("");
          },
          N = (e) => {
            r(e);
          };
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(a.Z, {
              title:
                (null == n ? void 0 : n.name) || "AI Chat via ChatOrigin.com",
              description: null == n ? void 0 : n.description,
            }),
            (0, i.jsx)("div", {
              className: "py-10",
              children: (0, i.jsxs)("div", {
                className: "flex items-center justify-center space-x-2",
                children: [
                  (0, i.jsx)("img", {
                    src: null == n ? void 0 : n.iconURL,
                    alt: null == n ? void 0 : n.name,
                    className: "rounded-lg w-8 h-8",
                  }),
                  (0, i.jsx)("div", {
                    className: "font-semibold text-2xl",
                    children: null == n ? void 0 : n.name,
                  }),
                ],
              }),
            }),
            (null == n ? void 0 : n.description)
              ? (0, i.jsx)("div", {
                  className: "px-4 max-w-2xl mx-auto",
                  children: (0, i.jsx)("div", {
                    className:
                      "bg-green-100 p-2 rounded-lg text-center text-sm",
                    children: null == n ? void 0 : n.description,
                  }),
                })
              : null,
            s && n
              ? (0, i.jsx)(
                  o.Z,
                  {
                    showVoice: !1,
                    withSidebar: !1,
                    apiKey: t,
                    botAvatar: n.iconURL,
                    licenseKey: n.licenseKey,
                    setOpenBuy: () => {},
                    chatID: h,
                    chatTitle: u,
                    onMessagesChanged: x,
                    onNewChatPersisted: v,
                    onNewChatRequested: w,
                    onChatTitleUpdated: N,
                    embedded: !0,
                    showLibrary: !1,
                    showBrand: !1,
                    includeChatID: !0,
                    showWelcomeHand: !0,
                    completionEndpoint:
                      "https://embed.chatorigin.com/api/completions",
                  },
                  h
                )
              : null,
          ],
        });
      });
    },
  },
  function (e) {
    e.O(
      0,
      [
        774, 445, 617, 556, 228, 260, 662, 874, 982, 544, 561, 574, 955, 697,
        888, 179,
      ],
      function () {
        return e((e.s = 29198));
      }
    ),
      (_N_E = e.O());
  },
]);
