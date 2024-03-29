"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5],
  {
    41365: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var s = n(85893),
        o = n(67294),
        a = n(51356),
        i = n(63714),
        r = n(10395),
        u = n(24461),
        c = n(78672),
        l = n(54399);
      let h = "Something went wrong. Please try again.",
        d = (0, c.eK)("useLastVerifiedToken");
      function m(e) {
        let {
            showIntro: t = !0,
            source: n = "custom-deployment",
            autoFocus: c = !0,
          } = e,
          [m, y] = (0, o.useState)(!1),
          [p, f] = (0, o.useState)(null),
          [w, g] = (0, o.useState)(""),
          [b, v] = (0, o.useState)("gpt-4"),
          [x, A] = (0, o.useState)(null),
          [I, k] = d(null),
          C = (0, o.useRef)(null);
        (0, o.useEffect)(() => {
          c && C.current && C.current.focus();
        }, [C]);
        let T = async () => {
            y(!0), f(""), A(null);
            try {
              let e = await fetch((0, l.v9)() + "/api/faqbot", {
                body: JSON.stringify({
                  question: w,
                  model: b,
                  source: n,
                  lastVerifiedToken: I,
                }),
                headers: { "Content-Type": "application/json" },
                method: "POST",
              });
              if (429 === e.status) {
                f(
                  "Sorry, the FAQ bot is currently experiencing high demand. Please try again later."
                ),
                  y(!1);
                return;
              }
              if (e.status >= 400) {
                let t = await e.json();
                f(t.userMessage || h), y(!1);
                return;
              }
              if (!e.ok) {
                f(h), y(!1);
                return;
              }
              let t = await e.json();
              A(t),
                setTimeout(() => {
                  var e;
                  null === (e = C.current) || void 0 === e || e.focus();
                }, 200);
            } catch (e) {
              f(h), console.error(e);
            }
            y(!1);
          },
          j = (0, o.useMemo)(() => [i.Z, a.Z], []);
        return (0, s.jsxs)("div", {
          children: [
            t
              ? (0, s.jsxs)("div", {
                  className: "text-xs text-gray-500 my-2",
                  children: [
                    "Try your luck with the FAQ bot!",
                    (0, s.jsx)("br", {}),
                    "It's trained with our FAQs, Privacy Policy, and Terms of Service.",
                    (0, s.jsx)("br", {}),
                    "Ask a question and see if it can answer it.",
                  ],
                })
              : null,
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "flex items-stretch justify-center gap-2 flex-col sm:flex-row",
                  children: [
                    (0, s.jsx)("input", {
                      ref: C,
                      disabled: m,
                      className:
                        "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:ring-1 focus:border-blue-500 sm:text-sm dark:bg-zinc-700",
                      placeholder: "Ask a question...",
                      value: w,
                      onChange: (e) => g(e.target.value),
                      onKeyDown: (e) => {
                        "Enter" === e.key && w && (e.preventDefault(), T());
                      },
                      maxLength: 200,
                    }),
                    (0, s.jsx)("div", {
                      className: "flex items-stretch gap-2 justify-center",
                      children: (0, s.jsxs)("button", {
                        onClick: T,
                        type: "submit",
                        className:
                          "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 gap-2",
                        disabled: m || !w,
                        children: [
                          m ? (0, s.jsx)(u.Z, {}) : "→",
                          (0, s.jsx)("span", { children: "Ask" }),
                        ],
                      }),
                    }),
                  ],
                }),
                w
                  ? m
                    ? (0, s.jsx)("div", {
                        className: "text-sm text-gray-500 my-2",
                        children:
                          "Thinking... this may takes up to 20 seconds.",
                      })
                    : (0, s.jsxs)("div", {
                        className: "text-sm text-gray-500 my-2",
                        children: [w.length, "/200"],
                      })
                  : null,
                p &&
                  (0, s.jsx)("div", {
                    className:
                      "text-center text-red-500 text-sm font-semibold my-2",
                    children: p,
                  }),
                !m &&
                  x &&
                  (0, s.jsxs)("div", {
                    className:
                      "text-left text-gray-900 text-sm my-2 bg-green-100 p-4 rounded-md shadow",
                    children: [
                      (0, s.jsx)("div", {
                        className: "text-base font-semibold mb-2",
                        children: "\uD83E\uDD14 You asked:",
                      }),
                      (0, s.jsx)("div", {
                        className: "my-2",
                        children: x.question,
                      }),
                      (0, s.jsx)("div", {
                        className: "text-base font-semibold mb-2",
                        children: "\uD83D\uDCA1 Bot's answer:",
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "prose prose-sm max-w-full dark:prose-invert text-gray-900",
                        children: (0, s.jsx)(r.Z, {
                          children: x.answer,
                          remarkPlugins: j,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
    },
    24461: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(85893);
      function o() {
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
    10395: function (e, t, n) {
      var s = n(329),
        o = n(67294);
      t.Z = (0, o.memo)(s.D);
    },
    60686: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var s = n(85893),
        o = n(28368),
        a = n(41365),
        i = n(40800),
        r = n(67798),
        u = n(11734);
      function c() {
        return (0, s.jsxs)("div", {
          className: "",
          children: [
            (0, s.jsx)(a.Z, { autoFocus: !1 }),
            (0, s.jsx)("div", {
              className: "mx-auto max-w-7xl",
              children: (0, s.jsx)("div", {
                className: "mx-auto max-w-4xl divide-y divide-gray-900/10",
                children: (0, s.jsx)("dl", {
                  className: "mt-4 space-y-6 divide-y divide-gray-900/10",
                  children: u._f
                    .filter((e) => e.question)
                    .map((e) =>
                      (0, s.jsx)(
                        o.p,
                        {
                          as: "div",
                          className: "pt-6",
                          defaultOpen: !0,
                          children: (t) => {
                            let { open: n } = t;
                            return (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)("dt", {
                                  children: (0, s.jsxs)(o.p.Button, {
                                    className:
                                      "flex w-full items-start justify-between text-left hover:underline ",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-lg font-semibold leading-7",
                                        children: e.question,
                                      }),
                                      (0, s.jsx)("span", {
                                        className: "ml-6 flex h-7 items-center",
                                        children: n
                                          ? (0, s.jsx)(i, {
                                              className: "h-6 w-6",
                                              "aria-hidden": "true",
                                            })
                                          : (0, s.jsx)(r, {
                                              className: "h-6 w-6",
                                              "aria-hidden": "true",
                                            }),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, s.jsx)(o.p.Panel, {
                                  as: "dd",
                                  className: "mt-2 pr-12",
                                  children: (0, s.jsx)("p", {
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
              }),
            }),
          ],
        });
      }
    },
    51448: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var s = n(85893);
      n(67294);
      var o = n(9008),
        a = n.n(o);
      function i(e) {
        let {
            title: t,
            showNotification: n = !1,
            description:
              o = "Use ChatGPT with enhanced features like chat history search, folders, integrations, prompt library, etc.",
            hostConfig: i,
            overridePosterURL: r,
          } = e,
          u = i
            ? i.brand + " – " + i.tagline
            : "webmind.app — A better UI for ChatGPT",
          c = (n ? "(*) " : "") + (t || u),
          l = i
            ? i.hostname
              ? "https://" + i.hostname + "/"
              : "https://".concat(i.subdomain, ".webmind.app/")
            : "https://www.webmind.app",
          h =
            i &&
            ""
              .concat(l, "api/poster?name=")
              .concat(encodeURIComponent(i.name), "&tagline=")
              .concat(encodeURIComponent(i.tagline), "&logo=")
              .concat(i.logoURL),
          d =
            r ||
            (null == i ? void 0 : i.posterURL) ||
            h ||
            "https://www.webmind.app/poster-2.png",
          m = (null == i ? void 0 : i.description) || o,
          y = null == i ? void 0 : i.logoURL;
        return (0, s.jsxs)(a(), {
          children: [
            (0, s.jsx)("title", { children: c }),
            (0, s.jsx)("meta", { name: "title", content: c }),
            (0, s.jsx)("meta", { name: "description", content: m }),
            (0, s.jsx)("meta", { property: "og:type", content: "website" }),
            (0, s.jsx)("meta", { property: "og:url", content: l }),
            (0, s.jsx)("meta", { property: "og:title", content: c }),
            (0, s.jsx)("meta", { property: "og:description", content: m }),
            (0, s.jsx)("meta", { property: "og:image", content: d }),
            (0, s.jsx)("meta", {
              property: "twitter:card",
              content: "summary_large_image",
            }),
            (0, s.jsx)("meta", { property: "twitter:url", content: l }),
            (0, s.jsx)("meta", { property: "twitter:title", content: c }),
            (0, s.jsx)("meta", { property: "twitter:description", content: m }),
            (0, s.jsx)("meta", { property: "twitter:image", content: d }),
            (0, s.jsx)("meta", {
              name: "viewport",
              content: "initial-scale=1, viewport-fit=cover",
            }),
            (0, s.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "152x152",
              href: y || "/apple-icon-152x152.png",
            }),
            (0, s.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: y || "/apple-icon-180x180.png",
            }),
            (0, s.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "192x192",
              href: y || "/android-icon-192x192.png",
            }),
            (0, s.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: y || "/favicon-32x32.png",
            }),
            (0, s.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "96x96",
              href: y || "/favicon-96x96.png",
            }),
            (0, s.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: y || "/favicon-16x16.png",
            }),
            (0, s.jsx)("link", {
              rel: "manifest",
              href: i ? "/api/manifest" : "/manifest.json",
            }),
            (0, s.jsx)("meta", {
              name: "msapplication-TileColor",
              content: "#ffffff",
            }),
            (0, s.jsx)("meta", {
              name: "msapplication-TileImage",
              content: y || "/ms-icon-144x144.png",
            }),
            (0, s.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
          ],
        });
      }
    },
    11734: function (e, t, n) {
      n.d(t, {
        Hf: function () {
          return o;
        },
        _f: function () {
          return s;
        },
        qX: function () {
          return a;
        },
      });
      let s = [
          {
            question: "What is webmind.app Custom Deployment?",
            answer:
              "webmind.app Custom Deployment is a custom-branded, cloud-hosted version of webmind.app. You can create and customize a Chat instance that works exactly like webmind.app under your own domain. You can offer the chat interface to your team members, community, or customers.",
          },
          {
            question:
              "What features are available in the Early Access version?",
            answer:
              "There are two sets of features. The Users Features (for your users): complete fully-featured chat experience like what you see on webmind.app. Admin Features: currently you can only customize a few settings and branding options. All the available customizable settings are listed in the Admin Panel. We'll work on adding more customizations soon.",
          },
          {
            question: "How to add my own custom domain?",
            answer:
              "Login to the Admin Panel and go to the Domains section. Add your domain and follow the instructions.",
          },
          {
            question: "I've added my custom domain but it's not working",
            answer:
              "Please check if you've added the correct DNS records. You can find the DNS records in the Domains section of the Admin Panel. If you're still facing issues, please contact us",
          },
          {
            question: "Where is the Admin Panel? How do I access it?",
            answer:
              'The Admin Panel is available at "/admin" of your Chat instance URL. You can also click the link "Admin" in the footer section of your chat UI\'s the sidebar.',
          },
          {
            question: "How do I add a new user?",
            answer:
              'Login to the Admin Panel and go to the Members section. Click on the "Add Members" button and fill in the details.',
          },
          {
            question: "How many users can I add?",
            answer:
              "The default subscription comes with 5 users included. You can add more users at with a one-time purchase payment of $19 per user.",
          },
          {
            question: "How much does this cost?",
            answer:
              "The early access price is a fixed $49/month subscription with 5 users included and 100,000 messages per month. You can add more users at with a one-time purchase payment of $19 per user. You need to provide your own Open API key and pay the API usage on your own. To increase the messages limit per month, please contact us.",
          },
          {
            question:
              "How many messages my users can send on my chat instance?",
            answer:
              "The default subscription comes with 100,000 messages per month per instance. This limit is set to prevent abuse of our proxy server and hurt our bandwidth usage. If you reach this limit, please contact us.",
          },
          {
            question: 'What is a "Chat instance" or an "instance"?',
            answer:
              'A "Chat instance" or an "instance" is a chat interface you created when sign up for a Custom Deployment on webmind.app. You can create multiple chat instances for multiple purposes. Each Chat instance is tied to one OpenAI key and run on one domain.',
          },
          {
            question: "Do I need an OpenAI API key to use this?",
            answer:
              "Yes. After you create a Chat instance, you will need to add the OpenAI API Key in your admin panel. Otherwise, your users cannot chat.",
          },
          {
            question:
              "Do my users need an OpenAI API key to use my chat instance?",
            answer:
              "No. Your users do not need an OpenAI API key to use your chat instance.",
          },
          {
            question: "How is my API key handled?",
            answer:
              "Your API key is stored securely in our database and is not shared with anyone. When your users send messages using your Chat instance, the requests are sent to our server, then we will use your OpenAI API key to get the response from ChatGPT. Your users will not see your API key.",
          },
          {
            question: "Do my users need to sign up?",
            answer:
              "No. After you add them to your Members list (in the Admin Panel), they can just login and use your Chat instance.",
          },
          {
            question: "Do my users see my OpenAI API key?",
            answer:
              "No. Your users will not see your API key. Requests to OpenAI API are sent from our server.",
          },
          {
            question: "Can I self-host this?",
            answer:
              "Currently, no. But we're actively working on making it possible. Stay tuned!",
          },
          {
            question: "Can I remove my users after I added them later?",
            answer:
              "Yes. You can remove your users from the Members list in the Admin Panel.",
          },
          {
            question: "Is there an annual discount for the subscription?",
            answer:
              "Currently, we are not offering annual subscription. You can only subscribe monthly.",
          },
          {
            question: "Can I customize the chat interface?",
            answer:
              "At the moment, you can customize the logo, tagline, and social poster image. Some more settings are available in the Admin panel. We'll make it possible to customize the interface more in the future.",
          },
          {
            question:
              "Can I customize the Default System Instruction, Prompt Library, AI Characters, etc?",
            answer:
              "Yes, but not yet. We're working hard to make all of these configurable in the admin panel. Make sure to check the Custom Deployment page at https://webmind.app/custom and the Admin panel to see the latest feature updates!",
          },
          {
            question:
              "What are the features my users can use in the chat interface?",
            answer:
              "Your chat interface will have exactly the same features as on webmind.app. Updates, new features, and bug fixes on webmind.app are also available on your chat instance at the same time. ",
          },
          {
            question:
              "Can I charge my users to use my chat instance? Can I offer this exclusively to my paying members only?",
            answer:
              "Yes you can, however, at the moment you'll need to manage the user payments by yourself. You will also need to add your users manually via the Admin Panel. We'll look into making this easier soon.",
          },
          {
            question: "Where are the chats saved?",
            answer:
              "The chats for each user are saved locally on their devices. As an Admin, you can enable chat logging (at and additional cost) that will allow you to view your users' chat messages. Note that the users will be informed that their chats are saved and can be viewed by you (the Admin).",
          },
          {
            question: "How to train the chat interface with my own data?",
            answer:
              'Use the "Model & Training" page in the admin panel to train the AI chat with your data. The training is done by providing the chatbot with an initial system instruction, where you will put all relevant data to give the chatbot a context. More examples on how to train the chatbot is available in the "Model & Training" page in the admin panel',
          },
          {
            question:
              "Can I train the model with my own data from PDF, DOCX, internal docs, etc.?",
            answer:
              "Yes. Tranining the model with your own data is currently done via the default system prompt with text input.",
          },
          {
            question: "How large is the data we can train the model with?",
            answer:
              "Training is currently made possible via the system instruction prompt. So the amount of data you can train depends on the context length of the model you have access to. GPT-3.5 has 4,096 tokens context length, GPT-4 has up to 32K tokens of context length. Keep in mind that you'll have to pay for your own OpenAI API usage, the more token used, the more costy it will get. In the future, we will look into utilizing ChatGPT Plugins to enable even more tranining data and knowledge-base based Q&A.",
          },
          {
            question:
              "Can I track which users use the most token from my OpenAI API key?",
            answer:
              "Yes, but not yet. We're working on this and will be available soon. Stay tuned!",
          },
          {
            question: "Can my users use ChatGPT Plugins in the chat instance?",
            answer:
              "Not yet, as ChatGPT plugins are not supported in the API. But once OpenAI makes it possible, we'll integrate it in right away.",
          },
          {
            question:
              "I've already bought the Team License (10 Users) or the Team License (50 users) on webmind.app. Can I use it on my Custom Deployment?",
            answer:
              "Yes. We allow you to convert your Team License to the Custom Deployment version with the same amount of users. You will still have to pay the fixed subscription cost. Note that after you convert the Team License, the License Key will no longer work on webmind.app and your users/team will have to switch to using your chat instance instead. To convert your Team License, please contact us at support@webmind.app.",
          },
          {
            question:
              "What's the different between Custom Deployment, Self-host static app, and the Custom Branding?",
            answer:
              "The main different is that in the Custom Deployment, your users don't need to enter an OpenAI API Key and License Key, their chats will use your API key and you will pay for your users' usage. In the self-host static app (and the custom branding addon), you simply host a 1:1 copy of webmind.app, and your users still have to buy/enter a License Key on their own.",
          },
          {
            question: "Is the system prompt going to be visible to users?",
            answer:
              "By default, yes. But you can hide it from the users and use your own default system propmt. This feature will be available soon.",
          },
          {
            question: "Can I use a custom model or a fine-tuned model?",
            answer:
              "For now, we support all Chat models from OpenAI, including GPT-3.5 and GPT-4. Fine-tune models are not yet supported.",
          },
          {
            question:
              "I already have the self-host static app. Can I use it with my Custom Deployment?",
            answer:
              "No, the self-host static app that comes for free when you buy a license is not intended to be used by team. You can still allow your team members to use it but they'll need to enter their License Key and API Key. With the Custom Deployment, your team members do not have to have a license key and API key to use it.",
          },
          {
            question:
              "Can I allow my users to login via 3rd party services (Google, Facebook, etc.), SSO, or my own OAuth system?",
            answer:
              "Currently, that's not possible. For now, your users can only login via email.",
          },
          {
            question: "Can I allow my users to use their own API Key?",
            answer:
              "No, that's not the intended use case for Custom Deployment.",
          },
          {
            question:
              "Can I guide the prompts or instruction to be better to certain niche or industry?",
            answer:
              "Yes. That's doable by customizing the default system instruction and hide it from the users. This feature will be available soon.",
          },
          {
            question:
              "Can I change the user interface to another language (Spanish, French, etc.)?",
            answer:
              "That's not possible at the moment, but we're looking to add it in soon.",
          },
          {
            question:
              "Where can I find the Terms of Service and Privacy Policy?",
            answer:
              "Terms of Service: https://webmind.app/terms#custom-deployment ; Privacy Policy: https://webmind.app/privacy#custom-deployment",
          },
          {
            question:
              "The FAQ Bot is awesome! How can I have it for my website?",
            answer:
              "It's one of our new product offering, but it's not ready yet. Stay tuned!",
          },
          {
            question: "How can I contact customer support?",
            answer: "Please send an email to support@webmind.app",
          },
          { question: "", answer: "" },
        ],
        o =
          '\nGlossary: "The product" means the webmind.app Custom Deployment product; "Chat Instance" means the AI Chat interface you created when using the product. "You/the admin" the people who create a new chat instance and have the permission to config and customize the chat instance; "Your users" means the people who uses the Chat instance, sending messages and use the chat features on your chat instance, this could be your teammate, your users, your community members, etc.\nWhen you create a new chat instance on https://webmind.app/custom, we will collect a few information about you, including your email address, your name, and the name of your chat instance. We use this information to send you an email with the link to your chat instance.\nEverything we collect is stored securely on our server, we never share your information with anyone else or any 3rd party that we are using. When you use the product, if we ever need to share your information with 3rd party, for example, to link your billing info with your chat instance, we will ask for your explicit permission first (by checking a "I understand" checkbox).\nWe use lemonsqueezy.com to process payments for our premium features. We don\'t store any of your payment data.\nWe use Vercel.com to host your chat instance.\nThe chat instance you created will be used by your users/team/community. When your users login to the chat instance, we will collect their email address to verify their identity. We use this information to send them an email with the login link. We will also collect their name, avatar, and other information only if they provide to us. We use this information to display their name and avatar on the chat instance.\nWhen you setup your chat instance, we will collect your OpenAI API Key. We use your API Key to connect to OpenAI API to generate the AI chat responses when your users use your AI chat instance. We will never share your OpenAI API Key with anyone else or any 3rd party services we use. Your users will not see your OpenAI API key. We do not use your OpenAI Key for any other purposes.\nWhen your users login to your chat instance, we will send them an email with the login code. The email will be sent from "hosted@webmind.app", with your name and email address will be shown to the users as the "Reply-to" address. This is to help the users recogine you and contact support if needed. Noted that only people who are explicit added by you in the Admin Panel can login.\nWhen your users chat via your chat instance, their chat history and messages are passed through and stored on our server. We keep the chat history and messages for 30 days. You can turn off the chat history and messages logging or extend the store duration in the Admin Panel. Note that even if the chat history and messages logging are turned off, the messages are still passing through our server and will be kept in the server\'s memory in a short amount of time (typically for the duration of the request or the streaming duration). This is necessary to pass the messages through our server, so we can avoid exposing your OpenAI API key to the end users. We use Vercel.com to host our server where the messages are passed through.\nYour users\' chat history data, custom prompts, libraries, bookmarks are stored on their local device when they use your chat instance. Your users can choose to setup backup & sync using various services we offer in the chat interface, including webmind.app Cloud (Backup/Sync/Share).\nYour users cannot see each other data and chat history.\n',
        a =
          '\nGlossary: "The product" means the webmind.app Custom Deployment product; "Chat Instance" means the AI Chat interface you created when using the product. "You/the admin" the people who create a new chat instance and have the permission to config and customize the chat instance; "Your users" means the people who uses the Chat instance, sending messages and use the chat features on your chat instance, this could be your teammate, your users, your community members, etc.\nAll of your purchases are refundable within 14 days.\nThe price is a fixed subscription cost to maintain the hosted version and comes with 5 users included. You can add new users at a fixed price per user one-time payment of license fee. The exact price at the current time is available at https://webmind.app/custom.\nWhen you subscribe to the Custom Deployment, including the Early Access version, you will be charged for the first month immediately. You will be charged for the next month on the same day of the month.\nBy subscribing to the Custom Deployment, including the Early Access version, you understand that you are buying the product as-is, with all the features that are available at its current state. You understand that the product is still in development and all of its features may change in the future, that the product may contain bugs and errors and you agree to report any bugs and errors to us.\nAfter you add your users to your chat instance from the Admin Panel, your users will be able to use your chat instance like they would on webmind.app. Each user have their own chat history, custom prompts, AI characters, bookmarks saved in their own local devices. They can login to your chat inscance on any device, but they will need to setup backup/sync to cloud to sync their data across devices using service integration we have in the chat interface, including webmind.app Cloud. Note that your subscription does not include with webmind.app Cloud service. We offer webmind.app Cloud for everyone to use for free with the limit of 10MB of data per user. You can also use your own cloud service to sync your users\' data.\nAll of the advertised future features or roadmap items on the product marketing page may or may not make it to the final version of the product. When subscribe to a paid plan early, you have the benefit of getting the product at a lower price and you agree to accept the product as-is.\nWe will increase the price of the product in the future when it has more features and offer more services. Most of the time, we will only change the price for new customers and will grandfather all the existing customers at their secured price. However, in some extreme cases, we may need to change the price for all customers.\nWe will try to keep the hosted version of the product up and running 24/7. However, we cannot guarantee that the product will be available 100% of the time. We will try to notify you in advance if we need to take the product down for maintenance or other reasons.\n';
    },
  },
]);
