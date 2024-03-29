(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [890],
  {
    12544: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/terms",
        function () {
          return n(6423);
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
      var o = n(85893);
      n(67294);
      var i = n(9008),
        s = n.n(i);
      function a(e) {
        let {
            title: t,
            showNotification: n = !1,
            description:
              i = "Use ChatGPT with enhanced features like chat history search, folders, integrations, prompt library, etc.",
            hostConfig: a,
            overridePosterURL: r,
          } = e,
          l = a
            ? a.brand + " – " + a.tagline
            : "webmind.app — A better UI for ChatGPT",
          c = (n ? "(*) " : "") + (t || l),
          u = a
            ? a.hostname
              ? "https://" + a.hostname + "/"
              : "https://".concat(a.subdomain, ".webmind.app/")
            : "https://www.webmind.app",
          d =
            a &&
            ""
              .concat(u, "api/poster?name=")
              .concat(encodeURIComponent(a.name), "&tagline=")
              .concat(encodeURIComponent(a.tagline), "&logo=")
              .concat(a.logoURL),
          h =
            r ||
            (null == a ? void 0 : a.posterURL) ||
            d ||
            "https://www.webmind.app/poster-2.png",
          y = (null == a ? void 0 : a.description) || i,
          p = null == a ? void 0 : a.logoURL;
        return (0, o.jsxs)(s(), {
          children: [
            (0, o.jsx)("title", { children: c }),
            (0, o.jsx)("meta", { name: "title", content: c }),
            (0, o.jsx)("meta", { name: "description", content: y }),
            (0, o.jsx)("meta", { property: "og:type", content: "website" }),
            (0, o.jsx)("meta", { property: "og:url", content: u }),
            (0, o.jsx)("meta", { property: "og:title", content: c }),
            (0, o.jsx)("meta", { property: "og:description", content: y }),
            (0, o.jsx)("meta", { property: "og:image", content: h }),
            (0, o.jsx)("meta", {
              property: "twitter:card",
              content: "summary_large_image",
            }),
            (0, o.jsx)("meta", { property: "twitter:url", content: u }),
            (0, o.jsx)("meta", { property: "twitter:title", content: c }),
            (0, o.jsx)("meta", { property: "twitter:description", content: y }),
            (0, o.jsx)("meta", { property: "twitter:image", content: h }),
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
              href: a ? "/api/manifest" : "/manifest.json",
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
    6423: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var o = n(85893),
        i = n(51448);
      let s = "webmind.app";
      function a() {
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)("div", {
            className: "min-h-screen ",
            children: [
              (0, o.jsx)(i.Z, { title: "Terms of Service" }),
              (0, o.jsx)("div", {
                className: "py-10 ",
                children: (0, o.jsxs)("main", {
                  children: [
                    (0, o.jsx)("div", {
                      className:
                        "hide-when-print my-10 text-center sticky top-0 bg-white dark:bg-zinc-800 p-4",
                      children: (0, o.jsx)("a", {
                        href: "/",
                        className: "text-blue-500 hover:underline",
                        children: "Go back to webmind.app",
                      }),
                    }),
                    (0, o.jsx)("h1", {
                      className: "text-2xl text-center my-10",
                      children: "Terms of Service",
                    }),
                    (0, o.jsxs)("section", {
                      className: "px-5 max-w-xl mx-auto sm:px-10",
                      children: [
                        (0, o.jsx)("h2", {
                          className: "my-4 text-2xl font-bold scroll-mt-32",
                          children:
                            "For webmind.app and Self-host Static App",
                        }),
                        (0, o.jsxs)("ul", {
                          className: "list-disc pl-4",
                          children: [
                            (0, o.jsx)("li", {
                              children:
                                "All purchases are refundable within 14 days of purchase. If you are not satisfied with the product, please contact us.",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "webmind.app is free while in beta. If you buy an early license key, you can save the license key in the app. After the app is out of beta, it will automatically check for the validity of the license key.",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "You are not allowed to share your license key with anyone else.",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "Each license key can be used on 5 devices which is typically enough for 1 user. If you want to use it on more devices, you need to buy more seat to your license key or unlink the license key from the previous device using the License Manager (access to the previous device is not needed).",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                'Each license key can be used on 5 devices which is typically enough for 1 user. If you need to use it on for more devices, you can buy a new license keys or add more devices to your existing license key. "Device" is counted based on the number of places where the license key is entered and the chat history is saved for continuous use. For example, if you use webmind.app on Chrome browser on your laptop and also on your phone, that will be 2 devices. Note that the license key is saved per browser, so if you use webmind.app on Chrome and also on Firefox, you will need to enter the license key 2 times, have 2 separate chat history storage, and that counts as 2 devices. If you need to use the license key on a new device but have reached the limit, you can unlink the previous device first using the License Manager. This device limit is put in place to avoid license key abuse and pirate.',
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "Your license key can be used on at most 5 devices at the same time. If you want to use it on more devices, you need to buy more seat to your license key or unlink the license key from the previous device using the License Manager (access to the previous device is not needed).",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "Your license key can be used on at most 5 devices at the same time. If you want to use it on more devices, you need to buy more seat to your license key or unlink the license key from the previous device.",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "webmind.app's features can change in the future, including adding and removing features, restricting the list of features available in the free/paid plan, open source some parts or all of the app source code. In such cases, you will not receive a refund of your purchase (unless your purchase is still within the 14-day refund period).",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "webmind.app's service availability is not guaranteed. We will try our best to keep the service up and running, but we cannot guarantee the availability of the service. In the event of natural disasters, change of owners, dependency service outages, and other reasons that make us unable to keep the service running, you will not be refunded (unless your purchase is still within the 14-day refund period). You can look into self-hosting the app on your own server to have full control of the service availability.",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "For legal purposes, webmind.app is a product of Devuap LLC, registered at the address: Ste 1200, 1309 Coffeen Avenue, Sheridan, WY, Sheridan, US, 82801.",
                            }),
                          ],
                        }),
                        (0, o.jsx)("h2", {
                          className: "my-4 text-2xl font-bold scroll-mt-32",
                          children: "For webmind.app Cloud",
                        }),
                        (0, o.jsxs)("ul", {
                          className: "list-disc pl-4",
                          children: [
                            (0, o.jsx)("li", {
                              children:
                                "webmind.app Cloud is an opt-in only service we provide to help you conveniently share your chat conversation with friends via a link that is publicly accessible from the internet. Other features include sync chat history between devices and backup chat history.",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "webmind.app Cloud is integrated to webmind.app and will only work when you explicitly use the Share/Sync/Backup feature, and pick webmind.app Cloud as the Share/Sync/Backup option. You will be asked to opt-in to webmind.app Cloud and agree with its terms and conditions.",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "webmind.app Cloud is provided for free for everyone. We don't guarantee the availability of webmind.app Cloud. We don't guarantee your data will never be lost. We'll try our best to keep webmind.app Cloud alive and available at all time. You are encouraged to backup your data to multiple places to avoid data lost.",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "If you have a valid webmind.app License Key, you can use up to 10MB of storage on webmind.app Cloud. Additional storage can be purchased on demand.",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "Note that you can use other services to share and sync your chat. webmind.app Cloud is just one of the options and is not required to use webmind.app.",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "In the self-host version, you can still use webmind.app Cloud as an option to Share/Sync/Backup your chats. When you choose webmind.app Cloud as the Share/Sync/Backup option, your chats will be sent to cloud.webmind.app, as that is where the could service is hosted.",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "The webmind.app Cloud service itself is not included in the self-host version.",
                            }),
                          ],
                        }),
                        (0, o.jsx)("h2", {
                          className: "my-4 text-2xl font-bold scroll-mt-32",
                          children: "For webmind.app Custom Branding",
                        }),
                        (0, o.jsxs)("ul", {
                          className: "list-decimal space-y-2 pl-4",
                          children: [
                            (0, o.jsxs)("li", {
                              children: [
                                "Custom Branding package only works on",
                                " ",
                                (0, o.jsx)("b", {
                                  children: "self-hosted version of webmind.app",
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
                                  className: "text-blue-500 hover:underline",
                                  children: (0, o.jsx)("b", {
                                    children: "webmind.app Self-host Package",
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
                                  className: "text-blue-500 hover:underline",
                                  children: (0, o.jsx)("b", {
                                    children: "webmind.app License Key",
                                  }),
                                }),
                                " ",
                                "and an ",
                                (0, o.jsx)("b", { children: "OpenAI API Key" }),
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
                                  className: "text-blue-500 hover:underline",
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
                                (0, o.jsx)("b", { children: "Self-Host FAQs" }),
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
                                  className: "text-blue-500 hover:underline",
                                  children: "white-label-demo.webmind.app",
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
                                  className: "text-blue-500 hover:underline",
                                  children: "Create Custom Branding",
                                }),
                                " ",
                                "to see the instructions that you need to follow to setup your cutsom branding version.",
                              ],
                            }),
                          ],
                        }),
                        (0, o.jsx)("h2", {
                          className: "my-4 text-2xl font-bold scroll-mt-32",
                          id: "custom-deployment",
                          children: "For webmind.app Custom Deployment:",
                        }),
                        (0, o.jsx)("p", {
                          className: "my-2 italic",
                          children:
                            "Note: this section only apply to you if you use the webmind.app Custom Deployment at https://webmind.app/custom.",
                        }),
                        (0, o.jsxs)("ul", {
                          className: "list-disc pl-4",
                          children: [
                            (0, o.jsx)("li", {
                              children:
                                'Glossary: "The product" means the webmind.app Custom Deployment product; "Chat Instance" means the AI Chat interface you created when using the product. "You/the admin" the people who create a new chat instance and have the permission to config and customize the chat instance; "Your users" means the people who uses the Chat instance, sending messages and use the chat features on your chat instance, this could be your teammate, your users, your community members, etc.',
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "All of your purchases are refundable within 14 days.",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "The price is a fixed subscription cost to maintain the hosted version and comes with 5 users included. You can add new users at a fixed price per user one-time payment of license fee. The exact price at the current time is available at https://webmind.app/custom.",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "When you subscribe to the Custom Deployment, including the Early Access version, you will be charged for the first month immediately. You will be charged for the next month on the same day of the month.",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "By subscribing to the Custom Deployment, including the Early Access version, you understand that you are buying the product as-is, with all the features that are available at its current state. You understand that the product is still in development and all of its features may change in the future, that the product may contain bugs and errors and you agree to report any bugs and errors to us.",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "After you add your users to your chat instance from the Admin Panel, your users will be able to use your chat instance like they would on webmind.app. Each user have their own chat history, custom prompts, AI characters, bookmarks saved in their own local devices. They can login to your chat inscance on any device, but they will need to setup backup/sync to cloud to sync their data across devices using service integration we have in the chat interface, including webmind.app Cloud. Note that your subscription does not include with webmind.app Cloud service. We offer webmind.app Cloud for everyone to use for free with the limit of 10MB of data per user. You can also use your own cloud service to sync your users' data.",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "All of the advertised future features or roadmap items on the product marketing page may or may not make it to the final version of the product. When subscribe to a paid plan early, you have the benefit of getting the product at a lower price and you agree to accept the product as-is.",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "We will increase the price of the product in the future when it has more features and offer more services. Most of the time, we will only change the price for new customers and will grandfather all the existing customers at their secured price. However, in some extreme cases, we may need to change the price for all customers.",
                            }),
                            (0, o.jsx)("li", {
                              children:
                                "We will try to keep the hosted version of the product up and running 24/7. However, we cannot guarantee that the product will be available 100% of the time. We will try to notify you in advance if we need to take the product down for maintenance or other reasons..",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, o.jsx)("hr", { className: "my-10" }),
                    (0, o.jsxs)("section", {
                      className: "px-5 max-w-xl mx-auto sm:px-10",
                      children: [
                        (0, o.jsxs)("p", {
                          className: "my-5",
                          children: [
                            "1. Introduction",
                            (0, o.jsx)("br", {}),
                            "By using ",
                            s,
                            " you confirm your acceptance of, and agree to be bound by, these term and conditions.",
                          ],
                        }),
                        (0, o.jsxs)("p", {
                          className: "my-5",
                          children: [
                            "2. Agreement to Terms and Conditions",
                            (0, o.jsx)("br", {}),
                            "This Agreement takes effect on the date on which you first use the ",
                            s,
                            " application.",
                          ],
                        }),
                        (0, o.jsxs)("p", {
                          className: "my-5",
                          children: [
                            "3. Premium features",
                            (0, o.jsx)("br", {}),
                            "You will be able to use all the premium features after you buy a license key. The details of the premium features are available on the pricing page.",
                          ],
                        }),
                        (0, o.jsxs)("p", {
                          className: "my-5",
                          children: [
                            "4. Refund Policy",
                            (0, o.jsx)("br", {}),
                            "We allow refunds within 14 days of purchase, no questions asked.",
                          ],
                        }),
                        (0, o.jsxs)("p", {
                          className: "my-5",
                          children: [
                            "5. Product usage",
                            (0, o.jsx)("br", {}),
                            "By using ",
                            s,
                            ", you agree to receive important product updates from ",
                            s,
                            " via the email linked with your payment account or the email you used to register your account.",
                            (0, o.jsx)("br", {}),
                            'You can opt-out of this product updates anytime by clicking to the "Unsubscribe" link at the bottom of each email.',
                            (0, o.jsx)("br", {}),
                            "We only send important product updates.",
                          ],
                        }),
                        (0, o.jsxs)("p", {
                          className: "my-5",
                          children: [
                            "6. Disclaimer",
                            (0, o.jsx)("br", {}),
                            "It is not warranted that ",
                            s,
                            " will meet your requirements or that its operation will be uninterrupted or error free. All express and implied warranties or conditions not stated in this Agreement (including without limitation, loss of profits, loss or corruption of data, business interruption or loss of contracts), so far as such exclusion or disclaimer is permitted under the applicable law are excluded and expressly disclaimed. This Agreement does not affect your statutory rights.",
                          ],
                        }),
                        (0, o.jsxs)("p", {
                          className: "my-5",
                          children: [
                            "7. Warranties and Limitation of Liability",
                            (0, o.jsx)("br", {}),
                            s,
                            " does not give any warranty, guarantee or other term as to the quality, fitness for purpose or otherwise of the software.",
                            " ",
                            s,
                            " shall not be liable to you by reason of any representation (unless fraudulent), or any implied warranty, condition or other term, or any duty at common law, for any loss of profit or any indirect, special or consequential loss, damage, costs, expenses or other claims (whether caused by",
                            s,
                            "'s negligence or the negligence of its servants or agents or otherwise) which arise out of or in connection with the provision of any goods or services by ",
                            s,
                            ". ",
                            s,
                            " shall not be liable or deemed to be in breach of contract by reason of any delay in performing, or failure to perform, any of its obligations if the delay or failure was due to any cause beyond its reasonable control. Notwithstanding contrary clauses in this Agreement, in the event that",
                            s,
                            " are deemed liable to you for breach of this Agreement, you agree that ",
                            s,
                            "'s liability is limited to the amount actually paid by you for your services or software, which amount calculated in reliance upon this clause. You hereby release",
                            " ",
                            s,
                            " from any and all obligations, liabilities and claims in excess of this limitation.",
                          ],
                        }),
                        (0, o.jsxs)("p", {
                          className: "my-5",
                          children: [
                            "8. General Terms and Law",
                            (0, o.jsx)("br", {}),
                            "This Agreement is governed by the laws of Wyoming, United States. You acknowledge that no joint venture, partnership, employment, or agency relationship exists between you and ",
                            s,
                            " ",
                            "as a result of your use of these services. You agree not to hold yourself out as a representative, agent or employee of",
                            s,
                            ". You agree that ",
                            s,
                            " will not be liable by reason of any representation, act or omission to act by you.",
                          ],
                        }),
                        (0, o.jsx)("p", {
                          className: "my-5",
                          children: "Last updated: 21 Mar 2023.",
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
      return e((e.s = 12544));
    }),
      (_N_E = e.O());
  },
]);
