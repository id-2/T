(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [915],
  {
    73030: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/privacy",
        function () {
          return n(77612);
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
      var o = n(9008),
        i = n.n(o);
      function a(e) {
        let {
            title: t,
            showNotification: n = !1,
            description:
              o = "Use ChatGPT with enhanced features like chat history search, folders, integrations, prompt library, etc.",
            hostConfig: a,
            overridePosterURL: r,
          } = e,
          c = a
            ? a.brand + " – " + a.tagline
            : "webmind.app — A better UI for ChatGPT",
          l = (n ? "(*) " : "") + (t || c),
          h = a
            ? a.hostname
              ? "https://" + a.hostname + "/"
              : "https://".concat(a.subdomain, ".webmind.app/")
            : "https://www.webmind.app",
          d =
            a &&
            ""
              .concat(h, "api/poster?name=")
              .concat(encodeURIComponent(a.name), "&tagline=")
              .concat(encodeURIComponent(a.tagline), "&logo=")
              .concat(a.logoURL),
          u =
            r ||
            (null == a ? void 0 : a.posterURL) ||
            d ||
            "https://www.webmind.app/poster-2.png",
          y = (null == a ? void 0 : a.description) || o,
          p = null == a ? void 0 : a.logoURL;
        return (0, s.jsxs)(i(), {
          children: [
            (0, s.jsx)("title", { children: l }),
            (0, s.jsx)("meta", { name: "title", content: l }),
            (0, s.jsx)("meta", { name: "description", content: y }),
            (0, s.jsx)("meta", { property: "og:type", content: "website" }),
            (0, s.jsx)("meta", { property: "og:url", content: h }),
            (0, s.jsx)("meta", { property: "og:title", content: l }),
            (0, s.jsx)("meta", { property: "og:description", content: y }),
            (0, s.jsx)("meta", { property: "og:image", content: u }),
            (0, s.jsx)("meta", {
              property: "twitter:card",
              content: "summary_large_image",
            }),
            (0, s.jsx)("meta", { property: "twitter:url", content: h }),
            (0, s.jsx)("meta", { property: "twitter:title", content: l }),
            (0, s.jsx)("meta", { property: "twitter:description", content: y }),
            (0, s.jsx)("meta", { property: "twitter:image", content: u }),
            (0, s.jsx)("meta", {
              name: "viewport",
              content: "initial-scale=1, viewport-fit=cover",
            }),
            (0, s.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "152x152",
              href: p || "/apple-icon-152x152.png",
            }),
            (0, s.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: p || "/apple-icon-180x180.png",
            }),
            (0, s.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "192x192",
              href: p || "/android-icon-192x192.png",
            }),
            (0, s.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: p || "/favicon-32x32.png",
            }),
            (0, s.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "96x96",
              href: p || "/favicon-96x96.png",
            }),
            (0, s.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: p || "/favicon-16x16.png",
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
              content: p || "/ms-icon-144x144.png",
            }),
            (0, s.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
          ],
        });
      }
    },
    77612: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var s = n(85893),
        o = n(51448);
      let i = "webmind.app";
      function a() {
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsxs)("div", {
            className: "min-h-screen ",
            children: [
              (0, s.jsx)(o.Z, { title: "Privacy Policy" }),
              (0, s.jsx)("div", {
                className: "py-10 ",
                children: (0, s.jsxs)("main", {
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "hide-when-print my-10 text-center sticky top-0 bg-white dark:bg-zinc-800 p-4",
                      children: (0, s.jsx)("a", {
                        href: "/",
                        className: "text-blue-500 hover:underline",
                        children: "Go back to webmind.app",
                      }),
                    }),
                    (0, s.jsx)("h1", {
                      className: "text-2xl text-center my-10",
                      children: "Privacy Policy",
                    }),
                    (0, s.jsxs)("section", {
                      className: "px-5 max-w-xl mx-auto sm:px-10",
                      children: [
                        (0, s.jsx)("h2", {
                          className: "my-4 text-2xl font-bold",
                          children: "For webmind.app Static Chat App",
                        }),
                        (0, s.jsx)("h3", {
                          className: "text-xl my-4",
                          children: "How we handle your data for free users:",
                        }),
                        (0, s.jsxs)("ul", {
                          className: "list-disc pl-4",
                          children: [
                            (0, s.jsx)("li", {
                              children:
                                "All of your data include API keys, chat history, chat messages are stored locally on your browser (using Local Storage).",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "The entire app is a static website, we don't have a backend server to collect data to the server side.",
                            }),
                            (0, s.jsxs)("li", {
                              children: [
                                "When you send a message on ",
                                i,
                                ", the website sends a request to OpenAI API endpoints using the API key you provided.",
                              ],
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "Requests are sent directly from your browser to OpenAI's server using secured transport protocol HTTPS. There is no middle server and no one else can see the requests, responses and their content.",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "There is strictly no external JavaScript run on webmind.app.",
                            }),
                          ],
                        }),
                        (0, s.jsx)("h3", {
                          className: "text-xl my-4",
                          children: "How we handle your data for paid users:",
                        }),
                        (0, s.jsx)("p", {
                          className: "my-2",
                          children:
                            "Privacy policy for paid users are the same as free users, with the following additional points:",
                        }),
                        (0, s.jsxs)("ul", {
                          className: "list-disc pl-4",
                          children: [
                            (0, s.jsx)("li", {
                              children:
                                "When you purchase a license key, we store your email address and the license key in our database. We use this information to send you license key and to verify your license key when you use it on webmind.app.",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "When you enter the license key to unlock the premium features, webmind.app will send a request from your browser to our License Server to verify the license key and get the information about the license key's owner to display on the app.",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "When a new version of webmind.app is available, we will send you an email to notify you about new features and updates. You can unsubscribe from the email list at any time.",
                            }),
                          ],
                        }),
                        (0, s.jsx)("h3", {
                          className: "text-xl my-4",
                          children:
                            "Third-party services we use on webmind.app:",
                        }),
                        (0, s.jsxs)("ul", {
                          className: "list-disc pl-4",
                          children: [
                            (0, s.jsxs)("li", {
                              children: [
                                "We use ",
                                (0, s.jsx)("b", { children: "Vercel.com" }),
                                " to host our website.",
                              ],
                            }),
                            (0, s.jsxs)("li", {
                              children: [
                                "We use ",
                                (0, s.jsx)("b", {
                                  children: "Vercel Analytics by Vercel.com",
                                }),
                                " to collect anonymous analytics data (like how many visitors a day, etc.). This data is only collected from webmind.app and not from the self-hosted version.",
                              ],
                            }),
                            (0, s.jsxs)("li", {
                              children: [
                                "We use ",
                                (0, s.jsx)("b", {
                                  children: "lemonsqueezy.com",
                                }),
                                " to process payments for our premium features. We don't store any of your payment data.",
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)("h2", {
                          className: "my-4 text-2xl font-bold",
                          children: "For webmind.app Cloud:",
                        }),
                        (0, s.jsxs)("ul", {
                          className: "list-disc pl-4",
                          children: [
                            (0, s.jsx)("li", {
                              children:
                                "webmind.app Cloud is an opt-in only service we provide to help you conveniently share your chat conversation with friends via a link that is publicly accessible from the internet. Other features include sync chat history between devices and backup chat history.",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "webmind.app Cloud is integrated to webmind.app and will only work when you explicitly use the Share/Sync/Backup feature, and pick webmind.app Could as the Share/Sync/Backup option. You will be asked to opt-in to webmind.app Cloud.",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "Note that you can use other services to share and sync your chat. webmind.app Cloud is just one of the options and is not mandatory.",
                            }),
                            (0, s.jsxs)("li", {
                              children: [
                                "When you ",
                                (0, s.jsx)("b", { children: "Share" }),
                                " your chats using webmind.app Cloud, we will store your the chat conversation you shared on our server. And it will become publicly available on the internet with a secret link, possibly accessible by search engines.",
                              ],
                            }),
                            (0, s.jsxs)("li", {
                              children: [
                                "We only store the chats that you ",
                                (0, s.jsx)("b", { children: "shared" }),
                                ", we don't store any other data on webmind.app Cloud's server (no API Key, no License Key, no other chats).",
                              ],
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "If you enable webmind.app Cloud for Sync and Backup, we will store all of your chats, prompts, messages, AI characters, bookmarks to the webmind.app Cloud server. All communication with webmind.app Cloud server are encrypted using HTTPS, all of your data is stored securely on our cloud database provided by planetscale.com and is encrypted at rest.",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "If you enable webmind.app Cloud for Sync and Backup, we will use Cookie to store your logged in state in order to provide you a seamless sync experience without having to login again. Our cookie will expires after 30 days without any sync activities.",
                            }),
                          ],
                        }),
                        (0, s.jsx)("h2", {
                          className: "my-4 text-2xl font-bold scroll-mt-32",
                          id: "custom-deployment",
                          children: "For webmind.app Custom Deployment:",
                        }),
                        (0, s.jsx)("p", {
                          className: "my-2 italic",
                          children:
                            "Note: this section only apply to you if you use the webmind.app Custom Deployment at https://webmind.app/custom.",
                        }),
                        (0, s.jsxs)("ul", {
                          className: "list-disc pl-4",
                          children: [
                            (0, s.jsx)("li", {
                              children:
                                'Glossary: "The product" means the webmind.app Custom Deployment product; "Chat Instance" means the AI Chat interface you created when using the product. "You/the admin" the people who create a new chat instance and have the permission to config and customize the chat instance; "Your users" means the people who uses the Chat instance, sending messages and use the chat features on your chat instance, this could be your teammate, your users, your community members, etc.',
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "When you create a new chat instance on https://webmind.app/custom, we will collect a few information about you, including your email address, your name, and the name of your chat instance. We use this information to send you an email with the link to your chat instance.",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                'Everything we collect is stored securely on our server, we never share your information with anyone else or any 3rd party that we are using. When you use the product, if we ever need to share your information with 3rd party, for example, to link your billing info with your chat instance, we will ask for your explicit permission first (by checking a "I understand" checkbox).',
                            }),
                            (0, s.jsxs)("li", {
                              children: [
                                "We use ",
                                (0, s.jsx)("b", {
                                  children: "lemonsqueezy.com",
                                }),
                                " to process payments for our premium features. We don't store any of your payment data.",
                              ],
                            }),
                            (0, s.jsxs)("li", {
                              children: [
                                "We use ",
                                (0, s.jsx)("b", { children: "Vercel.com" }),
                                " to host your chat instance.",
                              ],
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "The chat instance you created will be used by your users/team/community. When your users login to the chat instance, we will collect their email address to verify their identity. We use this information to send them an email with the login link. We will also collect their name, avatar, and other information only if they provide to us. We use this information to display their name and avatar on the chat instance.",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "When you setup your chat instance, we will collect your OpenAI API Key. We use your API Key to connect to OpenAI API to generate the AI chat responses when your users use your AI chat instance. We will never share your OpenAI API Key with anyone else or any 3rd party services we use. Your users will not see your OpenAI API key. We do not use your OpenAI Key for any other purposes.",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                'When your users login to your chat instance, we will send them an email with the login code. The email will be sent from "hosted@webmind.app", with your name and email address will be shown to the users as the "Reply-to" address. This is to help the users recogine you and contact support if needed. Noted that only people who are explicit added by you in the Admin Panel can login.',
                            }),
                            (0, s.jsxs)("li", {
                              children: [
                                "When your users chat via your chat instance, their chat history and messages are passed through and stored on our server. We keep the chat history and messages for 30 days. You can turn off the chat history and messages logging or extend the store duration in the Admin Panel. Note that even if the chat history and messages logging are turned off, the messages are still passing through our server and will be kept in the server's memory in a short amount of time (typically for the duration of the request or the streaming duration). This is necessary to pass the messages through our server, so we can avoid exposing your OpenAI API key to the end users. We use",
                                " ",
                                (0, s.jsx)("b", { children: "Vercel.com" }),
                                " to host our server where the messages are passed through.",
                              ],
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "Your users' chat history data, custom prompts, libraries, bookmarks are stored on their local device when they use your chat instance. Your users can choose to setup backup & sync using various services we offer in the chat interface, including webmind.app Cloud (Backup/Sync/Share).",
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "Your users cannot see each other data and chat history.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("hr", { className: "my-10" }),
                    (0, s.jsxs)("section", {
                      className: "px-5 max-w-xl mx-auto sm:px-10",
                      children: [
                        (0, s.jsxs)("p", {
                          className: "my-5",
                          children: [
                            "Your privacy is important to us. It is ",
                            i,
                            "'s policy to respect your privacy regarding any information we may collect from you across our website, https://",
                            i,
                            ", and other sites we own and operate.",
                          ],
                        }),
                        (0, s.jsx)("p", {
                          className: "my-5",
                          children:
                            "We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.",
                        }),
                        (0, s.jsx)("p", {
                          className: "my-5",
                          children:
                            "We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.",
                        }),
                        (0, s.jsx)("p", {
                          className: "my-5",
                          children:
                            "We don't share any personally identifying information publicly or with third-parties, except when required to by law.",
                        }),
                        (0, s.jsx)("p", {
                          className: "my-5",
                          children:
                            "Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.",
                        }),
                        (0, s.jsx)("p", {
                          className: "my-5",
                          children:
                            "You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.",
                        }),
                        (0, s.jsx)("p", {
                          className: "my-5",
                          children:
                            "Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.",
                        }),
                        (0, s.jsx)("p", {
                          className: "my-5",
                          children:
                            "This policy is effective as of 29 Mar 2023.",
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
      return e((e.s = 73030));
    }),
      (_N_E = e.O());
  },
]);
