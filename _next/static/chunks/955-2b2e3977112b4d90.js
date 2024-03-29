"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [955],
  {
    39026: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(85893);
      function o() {
        return (0, s.jsxs)("details", {
          children: [
            (0, s.jsx)("summary", {
              className:
                "text-left font-semibold my-2 text-base cursor-pointer hover:underline",
              children: "How is the cost calculated?",
            }),
            (0, s.jsxs)("ul", {
              className: "space-y-2 list-disc pl-4",
              children: [
                (0, s.jsxs)("li", {
                  className: "",
                  children: [
                    "Cost associated with a chat includes the token cost for the chat messages AND all of the ",
                    (0, s.jsx)("b", { children: "enhanced features" }),
                    " used for that chat.",
                  ],
                }),
                (0, s.jsxs)("li", {
                  className: "",
                  children: [
                    "Some enhanced features on webmind.app will increase your token usage. You can always turn these features off in the Settings pannel (click the gear icon in the sidebar). The enhanced features include: Chat Title Suggestion, Search Keywords Suggestions, AI Characters, Upload Document, etc. Amount of tokens used depends on the AI character and the length of your document.",
                    " ",
                  ],
                }),
                (0, s.jsxs)("li", {
                  className: "",
                  children: [
                    "All costs are ",
                    (0, s.jsx)("b", { children: "estimated" }),
                    ", please refer to your",
                    " ",
                    (0, s.jsx)("a", {
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-blue-500 hover:underline",
                      href: "https://platform.openai.com/account/usage",
                      children: "OpenAI dashboard",
                    }),
                    " ",
                    "for the most accurate cost of your API key.",
                  ],
                }),
                (0, s.jsxs)("li", {
                  className: "",
                  children: [
                    "The cost is calculated based on the",
                    " ",
                    (0, s.jsx)("a", {
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-blue-500 hover:underline",
                      href: "https://openai.com/pricing",
                      children: "public pricing of OpenAI's API",
                    }),
                    ". Each model has its own pricing, each type of tokens in each model also has its own pricing.",
                  ],
                }),
                (0, s.jsxs)("li", {
                  className: "",
                  children: [
                    "Token usages are not recorded when ",
                    (0, s.jsx)("b", { children: "streaming response" }),
                    " is enabled. We will work on improving this soon.",
                    " ",
                  ],
                }),
                (0, s.jsx)("li", {
                  children: (0, s.jsx)("a", {
                    className: "text-blue-500 hover:underline",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://platform.openai.com/docs/guides/chat",
                    children:
                      "Learn more about OpenAI's model, tokens, and context length here.",
                  }),
                }),
              ],
            }),
          ],
        });
      }
      n(67294);
    },
    39590: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var s = n(85893),
        o = n(28368),
        a = n(40800),
        i = n(67798);
      let r = [
        {
          question: "Is this app free?",
          answer:
            "webmind.app is free to use with some basic features. You will need to have a working OpenAI API Key in order to use the app. When you use the API Key, you pay directly to OpenAI for the amount of credits/tokens you use. webmind.app has premium features that can be unlocked with a one-time purchase.",
        },
        {
          question: "Where can I get an OpenAI API Key?",
          answer:
            "You can signup directly with OpenAI at https://platform.openai.com/signup",
        },
        {
          question:
            "Do I need to pay for ChatGPT Plus ($20/month) to use webmind.app?",
          answer:
            "No! A ChatGPT Plus subscription is not needed. You just need to have an OpenAI's API Key. You can see more info on how to get one here: https://openai.com/blog/openai-api",
        },
        {
          question: "Do I need to pay for OpenAI for a ChatGPT API Key?",
          answer:
            "Yes. You need to have an OpenAI account and a valid API key to use ChatGPT. We don't sell API keys.",
        },
        {
          question: "How does this app work?",
          answer:
            "This is a static web app, it doesn't have any backend server. When you enter your API key, it will be stored locally and securely on your browser. All API requests are sent directly from your browser to OpenAI server to interact with ChatGPT. Think of this as a HTTP client for your ChatGPT API with a lot of convenience features.",
        },
        {
          question: "How is the API key handled?",
          answer:
            "Your API is safe and stored locally on your device. This is a static app, which means that it doesn't have a backend. All the data is stored in your browser's local storage. Requests to Open AI's API is sent directly from your current browser (check the Network tab in your console if you want to see it).",
        },
        {
          question:
            "Is it ok to give my OpenAI API Key to webmind.app? Does OpenAI allow this use case?",
          answer:
            "Yes. webmind.app only stores your API Key locally and never sends your API Key anywhere. OpenAI allows use cases where the API key is stored locally in the user's device. You can see this official response from OpenAI's staff here: https://community.openai.com/t/openais-bring-your-own-key-policy/14538/4",
        },
        {
          question: "Is my API Key encrypted in local storage?",
          answer:
            'webmind.app offers additional encryption for your API Key. You can enable encryption with a password by clicking the "OpenAI API Key" button in the sidebar and selecting "Encrypt API key...". Your API Key will be encrypted using the AES algorithm provided by the open-source CryptoJS library (https://github.com/brix/crypto-js). webmind.app only provides an encryption feature for your API key. Chat messages, prompts, AI characters, and other elements are stored using the standard local storage of your browser, which may or may not include encryption, depending on your browser. The encryption process are done entirely locally on your device, there is no backend server. If you use webmind.app on multiple devices, you will need to encrypt your API key on all of them, you can also set different passwords on different devices.',
        },
        {
          question:
            "What's the difference between ChatGPT Plus and ChatGPT API via webmind.app?",
          answer:
            "Under the hood, ChatGPT Plus and ChatGPT API offer the same model and the same quality. You can view this on their official announcement here: https://platform.openai.com/docs/guides/chat. The initial system instruction can be a little bit different, which can be configured to make the AI output different messages from time to time.",
        },
        {
          question: "Can I use GPT-4 in webmind.app?",
          answer:
            "webmind.app does not give you access to the GPT-4 model automatically. If you have access to the GPT-4 model via API, you can use it on webmind.app. Note that GPT-4 API access is not the same as the ChatGPT Plus subscription. To get access to the GPT-4 API, you can sign-up for the GPT-4 API access here: https://openai.com/waitlist/gpt-4-api.",
        },
        {
          question:
            "I have ChatGPT Plus, will it cost me more to use ChatGPT API via webmind.app?",
          answer:
            "The ChatGPT API costs soooooo little you won't even notice it. Typical chat conversation is about 1000 characters, which costs ~$0.001. That's less than a cent. You can have thousands of chats and it will only costs you like $1. See official pricing here: https://openai.com/pricing#language-models",
        },
        {
          question: "How many chats can I have?",
          answer:
            "You can have as many chats as you want. The only limit is your OpenAI API key's limit and your browser storage limit (technical term: Local Storage). Web browser gives you some limited data storage, the actual limit is different for each browser. Typically, you can save thousands of chat conversations without problems, but that's not guaranteed. When the browser storage runs out, you will need to delete old chats to save the new ones. We will provide a separate service to sync and backup your chats soon. Adding the website to your home screen may increase the storage capacity.",
        },
        {
          question: "How can I sync my chat conversations across devices?",
          answer:
            "You can export the chats and import it on another device. You can also enable webmind.app Cloud for seamless syncing across devices. webmind.app Cloud is a free service provided to all webmind.app users. You can enable it by clicking the cloud icon at the bottom of the sidebar.",
        },
        {
          question: "Is it really faster than ChatGPT?",
          answer:
            "Most likely yes. From previous testings and user feedback, it is faster than the default ChatGPT in most cases, especially on long responses. Displaying the whole response instead of showing it word by word also help you to scan the response faster with your eyes. With all that said, the speed improvement is not guaranteed, your actual speed experience may varies (internet connection, API availability, etc.). Give it a try to see for yourself!",
        },
        {
          question:
            "Why does sometimes webmind.app responds differently than the default OpenAI's ChatGPT event with the same prompt?",
          answer:
            "webmind.app uses the same underlying model as OpenAI's default chat app. For the same prompt, it can produce different responses each time. The default chat app by OpenAI may also have some initial prompt settings that are different from webmind.app. If you don't get the response you expects, try \"Re-generate Response\" or tweaking the prompt.",
        },
        {
          question: "Can I self-host it?",
          answer:
            "Yes. After you make a purchase, you will receive a link to download the static web app and the instruction how to deploy it on your own server. Note that you will only receive the compiled code of the app, the full source code is not available because the app is not open-source. You can deploy the app anywhere without having to update any code or settings.",
        },
        {
          question:
            "Do I have access to the full source code if I want to self-host?",
          answer:
            "No. The license key only grants you the permission to use and deploy the app on your own server. You do not have permissions to modify or redistribute the code. The full source code is not available for sale as the app is not open-source. You will only receive the compiled code of the app, you can deploy the app anywhere without having to update any code or settings.",
        },
        {
          question: "What can I customize in the self-host version?",
          answer:
            "As of now, you cannot customize anything. But I'm working on making it possible to set custom UI and branding soon. Stay tuned!",
        },
        {
          question: "Where can I download the macOS app?",
          answer:
            "After you make a purchase, you will receive the files and instructions in your email. You can also login to https://app.lemonsqueezy.com/my-orders/ to download the files.",
        },
        {
          question:
            "Is the macOS app a native app? How do I receive updates with the macOS app?",
          answer:
            "The macOS app is a simple native app with a webview that runs the latest version of webmind.app on your dock. It's only ~5MB in size, load super fast, and can update itself everytime you open it. You can also check for updates manually in the app's menu.",
        },
        {
          question: "Is there a Windows/Linux app?",
          answer: "Not for now. Sorry!",
        },
        {
          question: "Is there an Android/iOS/iPad app?",
          answer:
            "No, but you can add webmind.app to your home screen. It works exaclty like an app!",
        },
        {
          question: "License Key vs. API Key",
          answer:
            "License Key is used to activate the premium features of webmind.app. API Key refers to OpenAI ChatGPT API Key, and is used to connect to OpenAI's API to interact with ChatGPT. You need an API Key to use the app. The License Key is only needed if you want to use the premium features.",
        },
        {
          question: "What are the premium features?",
          answer:
            "The premium features include: Chat Search History, Access Prompt Library, Integrations, etc. Check the pricing page for the latest details of all the premium features.",
        },
        {
          question: "Is there an expiration date for the License Key?",
          answer: "The license key is valid forever.",
        },
        {
          question: "Can I receive new updates after I buy a license key?",
          answer: "Yes, all future updates are included.",
        },
        {
          question: "What are the limitations of the free plans.",
          answer:
            "In the free plan, chat history will not be saved. You will be present with a popup every few minutes. Some other features may also be limited.",
        },
        {
          question: "How many devices/users can I use the License Key on?",
          answer:
            'Each license key can be used on 5 devices which is typically enough for 1 user. If you need to use it on for more devices, you can buy a new license keys or add more devices to your existing license key. "Device" is counted based on the number of places where the license key is entered and the chat history is saved for continuous use. For example, if you use webmind.app on Chrome browser on your laptop and also on your phone, that will be 2 devices. Note that the license key and chat history is saved locally per browser, so if you use webmind.app on Chrome and also on Firefox, you will need to enter the license key 2 times, have 2 separate chat histories, and that counts as 2 devices. If you need to use the license key on a new device but have reached the device limit, you can unlink the previous devices first using the License Manager (this is done online, access to the previous devices not needed). This device limit is put in place to avoid license key abuse and pirate.',
        },
        {
          question:
            "How do I remove a device from my license? How to access the License Manager?",
          answer:
            "At the moment, inactive devices will be revoked automatically after a short time, you don't need anything. In the future versions, you can access the License Manager from the app and manage your devices there.",
        },
        {
          question:
            "I have purchased but forget my license key, how can I get it back?",
          answer:
            "You can go to https://app.lemonsqueezy.com/my-orders/ to access your license key.",
        },
        {
          question: "Can I get a refund?",
          answer:
            "Yes. We offer a 14-day money-back guarantee. If you're not satisfied, let us know within 14 days and we'll give you a full refund.",
        },
      ];
      function c() {
        return (0, s.jsx)("div", {
          className: "",
          children: (0, s.jsx)("div", {
            className: "mx-auto max-w-7xl",
            children: (0, s.jsxs)("div", {
              className: "mx-auto max-w-4xl divide-y divide-gray-900/10",
              children: [
                (0, s.jsx)("h2", {
                  className: "text-2xl font-bold leading-10 tracking-tight ",
                  children: "Frequently asked questions",
                }),
                (0, s.jsx)("dl", {
                  className: "mt-4 space-y-6 divide-y divide-gray-900/10",
                  children: r.map((e) =>
                    (0, s.jsx)(
                      o.p,
                      {
                        as: "div",
                        className: "pt-6",
                        children: (t) => {
                          let { open: n } = t;
                          return (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)("dt", {
                                children: (0, s.jsxs)(o.p.Button, {
                                  className:
                                    "flex w-full items-start justify-between text-left ",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-base font-semibold leading-7",
                                      children: e.question,
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "ml-6 flex h-7 items-center",
                                      children: n
                                        ? (0, s.jsx)(a, {
                                            className: "h-6 w-6",
                                            "aria-hidden": "true",
                                          })
                                        : (0, s.jsx)(i, {
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
              ],
            }),
          }),
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
          c = i
            ? i.brand + " – " + i.tagline
            : "webmind.app — A better UI for ChatGPT",
          l = (n ? "(*) " : "") + (t || c),
          h = i
            ? i.hostname
              ? "https://" + i.hostname + "/"
              : "https://".concat(i.subdomain, ".webmind.app/")
            : "https://www.webmind.app",
          u =
            i &&
            ""
              .concat(h, "api/poster?name=")
              .concat(encodeURIComponent(i.name), "&tagline=")
              .concat(encodeURIComponent(i.tagline), "&logo=")
              .concat(i.logoURL),
          d =
            r ||
            (null == i ? void 0 : i.posterURL) ||
            u ||
            "https://www.webmind.app/poster-2.png",
          p = (null == i ? void 0 : i.description) || o,
          y = null == i ? void 0 : i.logoURL;
        return (0, s.jsxs)(a(), {
          children: [
            (0, s.jsx)("title", { children: l }),
            (0, s.jsx)("meta", { name: "title", content: l }),
            (0, s.jsx)("meta", { name: "description", content: p }),
            (0, s.jsx)("meta", { property: "og:type", content: "website" }),
            (0, s.jsx)("meta", { property: "og:url", content: h }),
            (0, s.jsx)("meta", { property: "og:title", content: l }),
            (0, s.jsx)("meta", { property: "og:description", content: p }),
            (0, s.jsx)("meta", { property: "og:image", content: d }),
            (0, s.jsx)("meta", {
              property: "twitter:card",
              content: "summary_large_image",
            }),
            (0, s.jsx)("meta", { property: "twitter:url", content: h }),
            (0, s.jsx)("meta", { property: "twitter:title", content: l }),
            (0, s.jsx)("meta", { property: "twitter:description", content: p }),
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
    82080: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(85893);
      function o() {
        return (0, s.jsxs)("details", {
          children: [
            (0, s.jsx)("summary", {
              className:
                "text-left font-semibold my-2 text-base cursor-pointer hover:underline",
              children: "How tokens work?",
            }),
            (0, s.jsxs)("ul", {
              className: "space-y-2 list-disc pl-4",
              children: [
                (0, s.jsx)("li", {
                  children:
                    "This is the total length of your current conversation. It is calculated by OpenAI's API when you send a message.",
                }),
                (0, s.jsxs)("li", {
                  children: [
                    "When you reach a certain length, you cannot add any more messages to the chat. This is the ",
                    (0, s.jsx)("b", { children: "context length" }),
                    " limit of the OpenAI's API.",
                  ],
                }),
                (0, s.jsxs)("li", {
                  children: [
                    "GPT-3.5 allows maximum of ",
                    (0, s.jsx)("b", { children: "4,096" }),
                    " tokens per chat. GPT-4 allows maximum of ",
                    (0, s.jsx)("b", { children: "8,192" }),
                    " tokens per chat in the 8K model and",
                    " ",
                    (0, s.jsx)("b", { children: "32,768" }),
                    " tokens in the 32K model. OpenAI may increase the context length limit in the future.",
                  ],
                }),
                (0, s.jsxs)("li", {
                  className: "",
                  children: [
                    "Some enhanced features on webmind.app will increase your token usage. You can always turn these features off in the Settings pannel (click the gear icon in the sidebar). The enhanced features include: Chat Title Suggestion, Search Keywords Suggestions, AI Characters, Upload Document, etc. Amount of tokens used depends on the AI character and the length of your document.",
                    " ",
                  ],
                }),
                (0, s.jsx)("li", {
                  children:
                    "If you reached the context length limit, you can delete some old messages to continue the chat, or start a new chat.",
                }),
                (0, s.jsx)("li", {
                  children: (0, s.jsx)("a", {
                    className: "text-blue-500 hover:underline",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://platform.openai.com/docs/guides/chat",
                    children:
                      "Learn more about OpenAI's model, tokens, and context length here.",
                  }),
                }),
              ],
            }),
          ],
        });
      }
      n(67294);
    },
    64019: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var s = n(85893),
        o = n(28368),
        a = n(40800),
        i = n(67798);
      let r = [
        {
          question: "How Web Search works?",
          answer:
            "When you enable Web Search, webmind.app will add a short instructions to the OpenAI model to teach the model how to perform a search query using the selected search engine (which is Google by default). The model will then attempt to run a search command only when necessary and use the search result to answer your question.",
        },
        {
          question: "How does webmind.app execute the search?",
          answer:
            "webmind.app will use the search engine's API to execute the search query. The search requests are sent directly from your browser to the search API without any intermediate servers. Your privacy is 100% protected. No one can see your search query and search result except you and the search engine itself.",
        },
        {
          question: "What about my privacy? Who can see my search query?",
          answer:
            "The search requests are sent directly from your browser to the search API without any intermediate servers. Your privacy is 100% protected. No one can see your search query and search result except you and the search engine itself.",
        },
        {
          question: "What search engines are supported?",
          answer:
            "webmind.app currently only supports Google search engine. We will add more search engines in the future.",
        },
        {
          question: "Where can I get the search engine API Key?",
          answer:
            "The official website is https://developers.google.com/custom-search/v1/overview. Also, you can follow the instructions on this page https://tdinh.notion.site/How-to-get-Search-Engine-ID-and-API-Key-on-Programmable-Search-Engine-by-Google-b861a749b20f4fcdbc1449f92ad9ed9a",
        },
        {
          question: "What are the limits? How many searches can I do?",
          answer:
            "The default free plan of Programmable Search Engine includes 100 searches per day for free. If you need more, you may sign up for billing in the Google API Console. https://cloud.google.com/billing/docs/how-to/manage-billing-account",
        },
        {
          question: "Does Web Search require GPT-4? Can I use it with GPT-3.5?",
          answer:
            "Web Search is best used with GPT-4 because it has a larger context length and can store more search results and can pull out information from search result more reliably. However, you can still Web Search with GPT-3.5 without problems (most of the time).",
        },
        {
          question: "How much more tokens are used if I enable Web Search?",
          answer:
            "The base instructions for Web Search contains ~600 tokens. The search result will be added to the context and will be used to answer your question. The more search results you get, the more tokens will be used. The average number of tokens used for Web Search is ~800 tokens.",
        },
      ];
      function c() {
        return (0, s.jsx)("div", {
          className: "",
          children: (0, s.jsx)("div", {
            className: "mx-auto max-w-7xl",
            children: (0, s.jsx)("div", {
              className: "mx-auto max-w-4xl divide-y divide-gray-900/10",
              children: (0, s.jsx)("dl", {
                className: "space-y-6 divide-y divide-gray-900/10",
                children: r.map((e) =>
                  (0, s.jsx)(
                    o.p,
                    {
                      as: "div",
                      className: "pt-6",
                      children: (t) => {
                        let { open: n } = t;
                        return (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)("dt", {
                              children: (0, s.jsxs)(o.p.Button, {
                                className:
                                  "flex w-full items-start justify-between text-left ",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "text-base font-semibold leading-7",
                                    children: e.question,
                                  }),
                                  (0, s.jsx)("span", {
                                    className: "ml-6 flex h-7 items-center",
                                    children: n
                                      ? (0, s.jsx)(a, {
                                          className: "h-6 w-6",
                                          "aria-hidden": "true",
                                        })
                                      : (0, s.jsx)(i, {
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
                                className: "text-base leading-7 text-gray-500",
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
        });
      }
    },
  },
]);
